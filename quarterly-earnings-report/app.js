/* ============================================================
   Quarterly Earnings & Concall Analysis — Dynamic Renderer
   ============================================================
   Discovery model:
     • data/manifest.js  defines  window.REPORTS_MANIFEST
       (an array of { ticker, name, quarters: [...] }).
     • Each per-quarter file at  data/<TICKER>/<QUARTER>.js
       calls  window.registerReport(ticker, quarter, data)
       which stores it in  window.REPORTS[ticker][quarter].
     • The Company / Quarter dropdowns are built from the manifest;
       the matching .js file is loaded on demand via a <script> tag.
   ============================================================ */

/* Globals exposed to data files. Defined before the IIFE so that
   any data file loaded out-of-order can still register itself. */
window.REPORTS = window.REPORTS || {};
window.REPORTS_MANIFEST = window.REPORTS_MANIFEST || [];
window.registerReport = function (ticker, quarter, data) {
    if (!ticker || !quarter || !data) return;
    if (!window.REPORTS[ticker]) window.REPORTS[ticker] = {};
    window.REPORTS[ticker][quarter] = data;
    document.dispatchEvent(
        new CustomEvent("report:registered", {
            detail: { ticker: ticker, quarter: quarter },
        })
    );
};

(function () {
    "use strict";

    /**
     * Escape HTML special characters to prevent any rich-text
     * fragments inside data files from being interpreted as markup.
     * Allow a minimal subset of inline formatting via simple markers
     * (**bold**) processed AFTER escaping.
     */
    function escapeHtml(str) {
        if (str === null || str === undefined) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    /**
     * Apply lightweight markdown-style formatting AFTER escaping:
     *   **bold**   -> <strong>bold</strong>
     *   *italic*   -> <em>italic</em>     (single asterisks, not adjacent to alphanum on both sides)
     *   `code`     -> <code>code</code>
     */
    function formatInline(str) {
        const safe = escapeHtml(str);
        return safe
            .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
            .replace(/`([^`]+)`/g, "<code>$1</code>");
    }

    /**
     * Render an arbitrary HTML element from a tag name + attrs + children.
     */
    function el(tag, attrs, children) {
        const node = document.createElement(tag);
        if (attrs) {
            Object.keys(attrs).forEach((k) => {
                if (k === "className") node.className = attrs[k];
                else if (k === "html") node.innerHTML = attrs[k];
                else if (attrs[k] !== undefined && attrs[k] !== null)
                    node.setAttribute(k, attrs[k]);
            });
        }
        if (children) {
            (Array.isArray(children) ? children : [children]).forEach((c) => {
                if (c === null || c === undefined) return;
                if (typeof c === "string")
                    node.appendChild(document.createTextNode(c));
                else node.appendChild(c);
            });
        }
        return node;
    }

    /**
     * Build a generic data table given column definitions and rows.
     * columns = [{ key, label, className?, formatter? }]
     */
    function buildTable(columns, rows, options) {
        options = options || {};
        const wrap = el("div", { className: "table-wrap" });
        const table = el("table", { className: "data-table" });

        const thead = el("thead");
        const trh = el("tr");
        columns.forEach((col) => {
            trh.appendChild(
                el(
                    "th",
                    { className: col.className || "" },
                    String(col.label || "")
                )
            );
        });
        thead.appendChild(trh);
        table.appendChild(thead);

        const tbody = el("tbody");
        rows.forEach((row) => {
            const tr = el("tr");
            columns.forEach((col) => {
                let value = row[col.key];
                if (typeof col.formatter === "function") {
                    const formatted = col.formatter(value, row);
                    const td = el("td", {
                        className: col.className || "",
                    });
                    if (formatted instanceof Node) td.appendChild(formatted);
                    else if (typeof formatted === "string")
                        td.innerHTML = formatted;
                    else
                        td.textContent =
                            value === undefined || value === null ? "" : value;
                    tr.appendChild(td);
                } else {
                    const td = el("td", {
                        className: col.className || "",
                        html: formatInline(value),
                    });
                    tr.appendChild(td);
                }
            });
            tbody.appendChild(tr);
        });

        if (options.footnotes && options.footnotes.length) {
            options.footnotes.forEach((fn) => {
                const tr = el("tr", { className: "footnote-row" });
                const td = el("td", {
                    colspan: String(columns.length),
                    html: formatInline(fn),
                });
                tr.appendChild(td);
                tbody.appendChild(tr);
            });
        }

        table.appendChild(tbody);
        wrap.appendChild(table);
        return wrap;
    }

    /* ============================================================
       Section renderers
       ============================================================ */

    function renderHeader(meta) {
        const header = el("div", { className: "report__header" });

        header.appendChild(
            el(
                "h1",
                { className: "report__title" },
                `Quarterly Earnings & Concall Analysis — ${meta.companyName} (${meta.ticker})`
            )
        );

        const dl = el("dl", { className: "report__meta" });
        const metaRows = [
            ["Quarter Analyzed", meta.quarter + (meta.period ? ` (${meta.period})` : "")],
            ["Full-Year Period", meta.fyPeriod || ""],
            ["Results / Concall Date", meta.concallDate || ""],
            ["Report Date", meta.reportDate || ""],
            ["Results Basis", meta.resultsBasis || ""],
        ].filter((r) => r[1]);

        metaRows.forEach(([label, value]) => {
            const row = el("div", { className: "report__meta-row" });
            row.appendChild(el("dt", null, label + ":"));
            row.appendChild(el("dd", { html: formatInline(value) }));
            dl.appendChild(row);
        });
        header.appendChild(dl);

        if (meta.disclaimer) {
            header.appendChild(
                el("div", {
                    className: "report__disclaimer",
                    html: "<strong>Disclaimer:</strong> " + formatInline(meta.disclaimer),
                })
            );
        }
        return header;
    }

    function renderSection(num, title, body) {
        const section = el("section", { className: "section" });
        const head = el("div", { className: "section__header" });
        head.appendChild(
            el("span", { className: "section__number" }, String(num))
        );
        head.appendChild(el("h2", { className: "section__title" }, title));
        section.appendChild(head);

        const sectionBody = el("div", { className: "section__body" });
        (Array.isArray(body) ? body : [body]).forEach((node) => {
            if (node) sectionBody.appendChild(node);
        });
        section.appendChild(sectionBody);
        return section;
    }

    function renderEarnings(data) {
        if (!data) return null;
        const parts = [];

        const metricCols = [
            { key: "metric", label: "Metric", className: "metric-name" },
            { key: "current", label: "Current Qtr", className: "num" },
            { key: "qoq", label: "QoQ Growth", className: "num" },
            { key: "yoy", label: "YoY Growth", className: "num" },
        ];

        if (data.coreMetrics && data.coreMetrics.length) {
            parts.push(el("div", { className: "section__subtitle" }, "Headline Earnings Metrics"));
            parts.push(buildTable(metricCols, data.coreMetrics));
        }

        if (data.businessQualityMetrics && data.businessQualityMetrics.length) {
            parts.push(
                el(
                    "div",
                    { className: "section__subtitle" },
                    "Business-Quality Metrics"
                )
            );
            parts.push(
                buildTable(metricCols, data.businessQualityMetrics, {
                    footnotes: data.footnotes,
                })
            );
        }

        if (data.patternDetected) {
            parts.push(
                el("div", {
                    className: "callout callout--info",
                    html:
                        '<div class="callout__label">Pattern Detected</div>' +
                        formatInline(data.patternDetected),
                })
            );
        }

        if (data.interpretation) {
            parts.push(
                el("div", {
                    className: "callout callout--neutral",
                    html:
                        '<div class="callout__label">Interpretation</div>' +
                        formatInline(data.interpretation),
                })
            );
        }

        const dual = el("div", { className: "dual-list" });
        if (data.whatWentRight && data.whatWentRight.length) {
            dual.appendChild(
                buildBulletCallout("success", "What Went Right", data.whatWentRight)
            );
        }
        if (data.whatWentWrong && data.whatWentWrong.length) {
            dual.appendChild(
                buildBulletCallout("danger", "What Went Wrong", data.whatWentWrong)
            );
        }
        if (dual.childNodes.length) parts.push(dual);

        return renderSection("01", "Earnings Metrics", parts);
    }

    function buildBulletCallout(variant, label, items) {
        const wrap = el("div", { className: "callout callout--" + variant });
        wrap.appendChild(el("div", { className: "callout__label" }, label));
        const ul = el("ul", { className: "tight" });
        items.forEach((it) => {
            ul.appendChild(el("li", { html: formatInline(it) }));
        });
        wrap.appendChild(ul);
        return wrap;
    }

    function renderSegments(data) {
        if (!data) return null;
        const parts = [];

        const cols = [
            { key: "name", label: "Business Segment", className: "metric-name" },
            { key: "yoyGrowth", label: "YoY Growth" },
            { key: "mix", label: "Mix" },
            { key: "analysis", label: "Analysis" },
            { key: "triggers", label: "Growth Triggers" },
        ];
        if (data.segments && data.segments.length) {
            parts.push(buildTable(cols, data.segments));
        }
        if (data.assessment) {
            const assessmentArr = Array.isArray(data.assessment)
                ? data.assessment
                : [data.assessment];
            parts.push(el("div", { className: "section__subtitle" }, "Segment Quality Assessment"));
            assessmentArr.forEach((para) => {
                parts.push(
                    el("p", {
                        className: "muted",
                        html: formatInline(para),
                    })
                );
            });
        }
        return renderSection("02", "Business Segment Performance", parts);
    }

    function renderPipeline(data) {
        if (!data) return null;
        const parts = [];

        if (data.metrics && data.metrics.length) {
            parts.push(
                el(
                    "div",
                    { className: "section__subtitle" },
                    "(a) Future Revenue Visibility — Key Pipeline Metrics"
                )
            );
            parts.push(
                buildTable(
                    [
                        { key: "metric", label: "Pipeline Metric", className: "metric-name" },
                        { key: "current", label: "Current Reading", className: "num" },
                        { key: "trend", label: "YoY / QoQ Trend" },
                        { key: "horizon", label: "Visibility Horizon" },
                        { key: "remarks", label: "Remarks" },
                    ],
                    data.metrics
                )
            );
        }

        if (data.demandSignals && data.demandSignals.length) {
            parts.push(
                el(
                    "div",
                    { className: "section__subtitle" },
                    "(b) Demand Assessment — Demand-Signal Framework"
                )
            );
            parts.push(
                buildTable(
                    [
                        { key: "signal", label: "Demand Signal", className: "metric-name" },
                        { key: "reading", label: "Reading from Concall" },
                        {
                            key: "verdict",
                            label: "Verdict",
                            formatter: (v) =>
                                v
                                    ? `<span class="verdict ${verdictClassFromText(
                                          v
                                      )}">${escapeHtml(v)}</span>`
                                    : "",
                        },
                    ],
                    data.demandSignals
                )
            );
        }

        if (data.demandVerdict) {
            parts.push(
                el("div", {
                    className: "callout callout--info",
                    html:
                        '<div class="callout__label">Demand Verdict</div>' +
                        formatInline(data.demandVerdict),
                })
            );
        }

        if (
            (data.whatWentRight && data.whatWentRight.length) ||
            (data.whatWentWrong && data.whatWentWrong.length)
        ) {
            parts.push(
                el(
                    "div",
                    { className: "section__subtitle" },
                    "(c) Future-Revenue-Visibility Quality"
                )
            );
            const dual = el("div", { className: "dual-list" });
            if (data.whatWentRight && data.whatWentRight.length) {
                dual.appendChild(
                    buildBulletCallout("success", "What Went Right", data.whatWentRight)
                );
            }
            if (data.whatWentWrong && data.whatWentWrong.length) {
                dual.appendChild(
                    buildBulletCallout("danger", "What Went Wrong", data.whatWentWrong)
                );
            }
            parts.push(dual);
        }

        return renderSection("03", "Future Revenue Pipeline", parts);
    }

    function verdictClassFromText(text) {
        const t = String(text).toLowerCase();
        if (/(robust|strong|positive|bullish|done|harvest|green)/.test(t))
            return "verdict--beat";
        if (/(adequate|moderate|neutral|yellow)/.test(t)) return "verdict--met";
        if (/(weak|miss|red|risk|negative)/.test(t)) return "verdict--miss";
        return "verdict--neutral";
    }

    function renderGuidance(data) {
        if (!data) return null;
        const parts = [];

        if (data.commitments && data.commitments.length) {
            parts.push(
                el(
                    "div",
                    { className: "section__subtitle" },
                    "(a) Management Guidance — Key Commitments"
                )
            );
            parts.push(
                buildTable(
                    [
                        { key: "metric", label: "Metric / Commitment", className: "metric-name" },
                        { key: "current", label: "Current" },
                        { key: "target", label: "Target / Trajectory" },
                    ],
                    data.commitments
                )
            );
        }

        if (data.commitmentNote) {
            parts.push(
                el("div", {
                    className: "note",
                    html: formatInline(data.commitmentNote),
                })
            );
        }

        if (data.growthDrivers && data.growthDrivers.length) {
            parts.push(
                el(
                    "div",
                    { className: "section__subtitle" },
                    "(b) Growth Triggers / Drivers"
                )
            );
            parts.push(
                buildTable(
                    [
                        {
                            key: "driver",
                            label: "Growth Driver / Trigger",
                            className: "metric-name",
                        },
                        { key: "impact", label: "Business Impact" },
                    ],
                    data.growthDrivers
                )
            );
        }

        return renderSection("04", "Management Guidance", parts);
    }

    function verdictClass(verdict) {
        const v = String(verdict || "").toLowerCase();
        if (v.startsWith("beat")) return "verdict--beat";
        if (v.startsWith("miss")) return "verdict--miss";
        if (v.startsWith("met")) return "verdict--met";
        return "verdict--neutral";
    }

    function renderConcallSignals(data) {
        if (!data) return null;
        const parts = [];

        const grid = el("div", { className: "signal-list signal-list--two" });

        // Bullish column
        const bullCol = el("div");
        bullCol.appendChild(
            el(
                "div",
                { className: "section__subtitle" },
                "High-Impact Bullish Signals"
            )
        );
        (data.bullish || []).forEach((s, i) => {
            const card = el("div", { className: "signal-card signal-card--bullish" });
            card.appendChild(
                el(
                    "h4",
                    { className: "signal-card__title" },
                    `${i + 1}. ${s.title || ""}`
                )
            );
            if (s.body)
                card.appendChild(
                    el("p", {
                        className: "signal-card__body",
                        html: formatInline(s.body),
                    })
                );
            bullCol.appendChild(card);
        });
        grid.appendChild(bullCol);

        // Bearish column
        const bearCol = el("div");
        bearCol.appendChild(
            el(
                "div",
                { className: "section__subtitle" },
                "High-Impact Bearish Signals"
            )
        );
        (data.bearish || []).forEach((s, i) => {
            const card = el("div", { className: "signal-card signal-card--bearish" });
            card.appendChild(
                el(
                    "h4",
                    { className: "signal-card__title" },
                    `${i + 1}. ${s.title || ""}`
                )
            );
            if (s.body)
                card.appendChild(
                    el("p", {
                        className: "signal-card__body",
                        html: formatInline(s.body),
                    })
                );
            bearCol.appendChild(card);
        });
        grid.appendChild(bearCol);

        parts.push(grid);

        return renderSection("05", "Concall Signals", parts);
    }

    function renderTakeaways(data) {
        if (!data || !data.length) return null;
        const parts = [];
        data.forEach((t, i) => {
            const card = el("div", { className: "takeaway" });
            const top = el("div", { className: "takeaway__text", html: "" });
            top.innerHTML =
                `<span class="takeaway__num">${i + 1}</span>` +
                formatInline(t.text || "");
            card.appendChild(top);

            const impact = t.impact || "neutral";
            const labels = {
                strengthens: "Strengthens Thesis",
                neutral: "Neutral",
                weakens: "Weakens Thesis",
            };
            const impactEl = el("span", {
                className: `takeaway__impact takeaway__impact--${impact}`,
            }, labels[impact] || impact);
            card.appendChild(impactEl);

            if (t.note) {
                card.appendChild(
                    el("span", {
                        className: "takeaway__note",
                        html: "(" + formatInline(t.note) + ")",
                    })
                );
            }
            parts.push(card);
        });
        return renderSection("06", "Five Most Important Takeaways", parts);
    }

    /* ============================================================
       Final Assessment — 4-question schema (current framework)
       ============================================================ */

    function thesisVerdictClass(verdict) {
        const v = String(verdict || "").toLowerCase();
        if (/(yes|intact|strengthen)/.test(v)) return "verdict--beat";
        if (/(partial|mixed|neutral)/.test(v)) return "verdict--met";
        if (/(no|broken|weaken|invalid)/.test(v)) return "verdict--miss";
        return "verdict--neutral";
    }

    function probabilityClass(p) {
        const v = String(p || "").toLowerCase();
        if (/(high|strong|likely)/.test(v)) return "verdict--beat";
        if (/(medium|moderate|fair)/.test(v)) return "verdict--met";
        if (/(low|unlikely|weak)/.test(v)) return "verdict--miss";
        return "verdict--neutral";
    }

    function renderQuestionBlock(num, title, body) {
        const wrap = el("div", { className: "qa-block" });
        const head = el("div", { className: "qa-block__header" });
        head.appendChild(
            el("span", { className: "qa-block__num" }, "Q" + String(num))
        );
        head.appendChild(
            el(
                "h3",
                { className: "qa-block__title", html: formatInline(title) }
            )
        );
        wrap.appendChild(head);
        const inner = el("div", { className: "qa-block__body" });
        (Array.isArray(body) ? body : [body]).forEach((node) => {
            if (node) inner.appendChild(node);
        });
        wrap.appendChild(inner);
        return wrap;
    }

    function renderFinalAssessment(data) {
        if (!data) return null;
        const parts = [];

        /* Q1 — Is the core investment thesis intact? */
        if (data.thesisIntact) {
            const q1Body = [];
            if (data.thesisIntact.verdict) {
                q1Body.push(
                    el("div", {
                        className: "qa-verdict",
                        html:
                            '<span class="qa-verdict__label">Verdict:</span> ' +
                            `<span class="verdict ${thesisVerdictClass(
                                data.thesisIntact.verdict
                            )}">${escapeHtml(data.thesisIntact.verdict)}</span>`,
                    })
                );
            }
            if (
                data.thesisIntact.reasons &&
                data.thesisIntact.reasons.length
            ) {
                const ul = el("ul", { className: "tight" });
                data.thesisIntact.reasons.forEach((r) =>
                    ul.appendChild(el("li", { html: formatInline(r) }))
                );
                q1Body.push(ul);
            }
            parts.push(
                renderQuestionBlock(
                    1,
                    "Is the core investment thesis intact?",
                    q1Body
                )
            );
        }

        /* Q2 — Re-rate triggers + probability */
        if (data.rerateTriggers && data.rerateTriggers.length) {
            const table = buildTable(
                [
                    {
                        key: "trigger",
                        label: "Re-Rating Trigger",
                        className: "metric-name",
                    },
                    {
                        key: "probability",
                        label: "Probability",
                        formatter: (v) =>
                            v
                                ? `<span class="verdict ${probabilityClass(
                                      v
                                  )}">${escapeHtml(v)}</span>`
                                : "",
                    },
                    { key: "rationale", label: "Rationale (mgmt track record / tailwinds)" },
                ],
                data.rerateTriggers
            );
            parts.push(
                renderQuestionBlock(
                    2,
                    "What can re-rate this stock — and how likely?",
                    table
                )
            );
        }

        /* Q3 — Upside potential if guidance fully met */
        if (data.upsideIfGuidanceMet) {
            const u = data.upsideIfGuidanceMet;
            const grid = el("div", { className: "upside-grid" });

            const tile = (label, value, modifier) => {
                const t = el("div", {
                    className:
                        "upside-tile" +
                        (modifier ? " upside-tile--" + modifier : ""),
                });
                t.appendChild(
                    el("div", { className: "upside-tile__label" }, label)
                );
                t.appendChild(
                    el("div", {
                        className: "upside-tile__value",
                        html: formatInline(value || ""),
                    })
                );
                return t;
            };

            if (u.currentPrice) grid.appendChild(tile("Current Price", u.currentPrice));
            if (u.targetPrice) grid.appendChild(tile("Target Price", u.targetPrice, "target"));
            if (u.upsidePct) grid.appendChild(tile("Upside", u.upsidePct, "upside"));
            if (u.horizon) grid.appendChild(tile("Horizon", u.horizon));

            const q3Body = [];
            if (grid.childNodes.length) q3Body.push(grid);

            if (u.assumptions) {
                q3Body.push(
                    el("div", {
                        className: "callout callout--neutral",
                        html:
                            '<div class="callout__label">Assumptions</div>' +
                            formatInline(u.assumptions),
                    })
                );
            }
            if (u.workings) {
                q3Body.push(
                    el("div", {
                        className: "callout callout--info",
                        html:
                            '<div class="callout__label">Workings</div>' +
                            formatInline(u.workings),
                    })
                );
            }
            parts.push(
                renderQuestionBlock(
                    3,
                    "If guidance is met on every metric, what is the upside?",
                    q3Body
                )
            );
        }

        /* Q4 — Best value entry zone */
        if (data.valuationEntryZone) {
            const v = data.valuationEntryZone;
            const grid = el("div", { className: "upside-grid" });

            const tile = (label, value, modifier) => {
                const t = el("div", {
                    className:
                        "upside-tile" +
                        (modifier ? " upside-tile--" + modifier : ""),
                });
                t.appendChild(
                    el("div", { className: "upside-tile__label" }, label)
                );
                t.appendChild(
                    el("div", {
                        className: "upside-tile__value",
                        html: formatInline(value || ""),
                    })
                );
                return t;
            };

            if (v.bestValueRange)
                grid.appendChild(tile("Best Value Zone", v.bestValueRange, "target"));
            if (v.fairValue) grid.appendChild(tile("Fair Value", v.fairValue));
            if (v.currentZone)
                grid.appendChild(tile("Current Zone", v.currentZone));

            const q4Body = [];
            if (grid.childNodes.length) q4Body.push(grid);

            if (v.rationale) {
                q4Body.push(
                    el("div", {
                        className: "callout callout--info",
                        html:
                            '<div class="callout__label">Valuation Rationale</div>' +
                            formatInline(v.rationale),
                    })
                );
            }
            parts.push(
                renderQuestionBlock(
                    4,
                    "Best value price zone to enter / accumulate",
                    q4Body
                )
            );
        }

        /* Optional final summary line */
        if (data.summary) {
            const verdict = el("div", { className: "scorecard__verdict" });
            verdict.appendChild(
                el(
                    "div",
                    { className: "scorecard__verdict-label" },
                    "Final Summary"
                )
            );
            verdict.appendChild(
                el("div", { html: formatInline(data.summary) })
            );
            parts.push(verdict);
        }

        return renderSection("07", "Final Assessment", parts);
    }

    /* ============================================================
       Legacy scorecard renderer (kept for backward-compat with
       reports that still use the old action / A-E / verdict schema).
       Section number renumbered to 07 for consistency.
       ============================================================ */
    function renderLegacyScorecard(data) {
        if (!data) return null;
        const parts = [];

        const optionDefs = [
            { key: "deploy", label: "DEPLOY next tranche" },
            { key: "hold", label: "HOLD — continue monitoring" },
            { key: "pause", label: "PAUSE accumulation" },
            { key: "partialExit", label: "PARTIAL EXIT" },
            { key: "fullExit", label: "FULL EXIT" },
        ];

        const actionRow = el("div", { className: "scorecard__action" });
        const opts = data.options || {};
        optionDefs.forEach((o) => {
            const isActive = !!opts[o.key];
            const span = el(
                "span",
                {
                    className:
                        "scorecard__option" +
                        (isActive ? " scorecard__option--active" : ""),
                },
                (isActive ? "✓ " : "○ ") + o.label
            );
            actionRow.appendChild(span);
        });
        parts.push(actionRow);

        if (data.actionDetails) {
            parts.push(
                el("div", {
                    className: "callout callout--neutral",
                    html: formatInline(data.actionDetails),
                })
            );
        }

        if (data.sections && data.sections.length) {
            data.sections.forEach((s) => {
                const panel = el("div", { className: "scorecard__panel" });
                panel.appendChild(
                    el("h4", { className: "scorecard__panel-title" }, s.title || "")
                );
                if (s.points && s.points.length) {
                    const ul = el("ul");
                    s.points.forEach((p) =>
                        ul.appendChild(el("li", { html: formatInline(p) }))
                    );
                    panel.appendChild(ul);
                } else if (s.text) {
                    panel.appendChild(
                        el("p", { html: formatInline(s.text) })
                    );
                }
                parts.push(panel);
            });
        }

        if (data.finalVerdict) {
            const verdict = el("div", { className: "scorecard__verdict" });
            verdict.appendChild(
                el(
                    "div",
                    { className: "scorecard__verdict-label" },
                    "Final Verdict"
                )
            );
            verdict.appendChild(
                el("div", { html: formatInline(data.finalVerdict) })
            );
            parts.push(verdict);
        }

        return renderSection("07", "Final Assessment (legacy scorecard)", parts);
    }

    /* ============================================================
       Top-level render
       ============================================================ */

    function renderReport(report) {
        const root = document.getElementById("report-root");
        root.innerHTML = "";

        if (!report) {
            const empty = el("div", { className: "empty-state" });
            empty.innerHTML =
                "<h2>No report selected</h2><p>Pick a company from the dropdown to view its quarterly analysis.</p>";
            root.appendChild(empty);
            return;
        }

        root.appendChild(renderHeader(report.meta || {}));

        const sections = [
            renderEarnings(report.earningsMetrics),
            renderSegments(report.businessSegments),
            renderPipeline(report.futurePipeline),
            renderGuidance(report.managementGuidance),
            renderConcallSignals(report.concallSignals),
            renderTakeaways(report.takeaways),
            // Final Assessment: prefer new 4-question schema; fall back
            // to legacy action-style scorecard if only that is present.
            report.finalAssessment
                ? renderFinalAssessment(report.finalAssessment)
                : renderLegacyScorecard(report.scorecard),
        ];

        sections.forEach((s) => {
            if (s) root.appendChild(s);
        });

        document.title = `${(report.meta && report.meta.companyName) || "Report"} — ${
            (report.meta && report.meta.quarter) || ""
        } Concall Analysis`;
    }

    /* ============================================================
       Selector wiring & dynamic data loading
       ============================================================ */

    /** Sort quarters newest-first using FY then quarter number.
     *  Accepts strings shaped like "Q4FY26" / "Q1FY24". Unknown
     *  formats are pushed to the bottom in lexicographic order. */
    function sortQuartersDesc(quarters) {
        function rank(q) {
            const m = /^Q([1-4])FY(\d{2,4})$/i.exec(String(q || "").trim());
            if (!m) return -Infinity;
            const qn = parseInt(m[1], 10);
            const fy = parseInt(m[2], 10);
            return fy * 10 + qn;
        }
        return quarters.slice().sort((a, b) => {
            const ra = rank(a);
            const rb = rank(b);
            if (rb !== ra) return rb - ra;
            return String(b).localeCompare(String(a));
        });
    }

    /** Load data/<ticker>/<quarter>.js by injecting a <script> tag.
     *  Resolves with the registered report object when the script
     *  finishes loading and registers itself, or rejects on error. */
    function loadReportScript(ticker, quarter) {
        return new Promise(function (resolve, reject) {
            if (
                window.REPORTS[ticker] &&
                window.REPORTS[ticker][quarter]
            ) {
                resolve(window.REPORTS[ticker][quarter]);
                return;
            }
            const src = "data/" + encodeURIComponent(ticker) +
                "/" + encodeURIComponent(quarter) + ".js";
            // Reuse an existing tag if we've requested this file before.
            const existing = document.querySelector(
                'script[data-report-src="' + src + '"]'
            );
            const script = existing || document.createElement("script");
            function onLoad() {
                const data =
                    (window.REPORTS[ticker] || {})[quarter];
                if (data) {
                    resolve(data);
                } else {
                    reject(
                        new Error(
                            "Loaded " + src +
                                " but it did not call registerReport(\"" +
                                ticker + "\", \"" + quarter + "\", ...)."
                        )
                    );
                }
            }
            function onError() {
                reject(new Error("Failed to load " + src));
            }
            if (existing) {
                onLoad();
                return;
            }
            script.src = src;
            script.async = false;
            script.dataset.reportSrc = src;
            script.addEventListener("load", onLoad, { once: true });
            script.addEventListener("error", onError, { once: true });
            document.body.appendChild(script);
        });
    }

    function showLoading(ticker, quarter) {
        const root = document.getElementById("report-root");
        if (!root) return;
        root.innerHTML = "";
        const wrap = el(
            "div",
            { class: "report__placeholder" },
            [
                el("h2", null, ["Loading…"]),
                el("p", { class: "muted" }, [
                    "Fetching data/" + ticker + "/" + quarter + ".js",
                ]),
            ]
        );
        root.appendChild(wrap);
    }

    function showLoadError(ticker, quarter, message) {
        const root = document.getElementById("report-root");
        if (!root) return;
        root.innerHTML = "";
        const wrap = el(
            "div",
            { class: "report__placeholder" },
            [
                el("h2", null, ["Could not load report"]),
                el("p", null, [
                    "Tried to load ",
                    el("code", null, [
                        "data/" + ticker + "/" + quarter + ".js",
                    ]),
                    ".",
                ]),
                el("p", { class: "muted" }, [message || ""]),
                el("p", { class: "muted" }, [
                    "Make sure the file exists and that the manifest entry matches the on-disk filename (case-sensitive).",
                ]),
            ]
        );
        root.appendChild(wrap);
    }

    /** Build a lookup keyed by ticker for the manifest. */
    function buildManifestIndex() {
        const list = (window.REPORTS_MANIFEST || []).slice();
        list.sort(function (a, b) {
            return String(a.name || a.ticker || "").localeCompare(
                String(b.name || b.ticker || "")
            );
        });
        const byTicker = Object.create(null);
        list.forEach(function (entry) {
            if (!entry || !entry.ticker) return;
            byTicker[entry.ticker] = {
                ticker: entry.ticker,
                name: entry.name || entry.ticker,
                quarters: sortQuartersDesc(entry.quarters || []),
            };
        });
        return {
            list: list
                .filter(function (e) { return e && e.ticker; })
                .map(function (e) { return byTicker[e.ticker]; }),
            byTicker: byTicker,
        };
    }

    /** Decode a deep-link hash like "#UGROCAP/Q4FY26" or "UGROCAP". */
    function parseHash() {
        const raw = decodeURIComponent(
            (location.hash || "").replace(/^#/, "")
        );
        if (!raw) return { ticker: null, quarter: null };
        const parts = raw.split("/");
        return {
            ticker: parts[0] || null,
            quarter: parts[1] || null,
        };
    }

    function setHash(ticker, quarter) {
        if (!ticker) {
            history.replaceState(null, "", location.pathname + location.search);
            return;
        }
        const next = quarter ? ticker + "/" + quarter : ticker;
        if (decodeURIComponent((location.hash || "").replace(/^#/, "")) !== next) {
            location.hash = next;
        }
    }

    function init() {
        const companySelect = document.getElementById("company-select");
        const quarterSelect = document.getElementById("quarter-select");
        const printBtn = document.getElementById("print-btn");
        const manifest = buildManifestIndex();

        if (!companySelect || !quarterSelect) return;

        if (!manifest.list.length) {
            renderReport(null);
            companySelect.innerHTML =
                '<option value="">No reports registered</option>';
            quarterSelect.innerHTML = '<option value="">—</option>';
            companySelect.disabled = true;
            quarterSelect.disabled = true;
            return;
        }

        // Populate company dropdown.
        companySelect.innerHTML = "";
        manifest.list.forEach(function (entry) {
            const opt = document.createElement("option");
            opt.value = entry.ticker;
            opt.textContent = entry.name + " (" + entry.ticker + ")";
            companySelect.appendChild(opt);
        });

        function populateQuarters(ticker) {
            quarterSelect.innerHTML = "";
            const entry = manifest.byTicker[ticker];
            const quarters = (entry && entry.quarters) || [];
            if (!quarters.length) {
                const opt = document.createElement("option");
                opt.value = "";
                opt.textContent = "No quarters available";
                quarterSelect.appendChild(opt);
                quarterSelect.disabled = true;
                return;
            }
            quarters.forEach(function (q) {
                const opt = document.createElement("option");
                opt.value = q;
                opt.textContent = q;
                quarterSelect.appendChild(opt);
            });
            quarterSelect.disabled = false;
        }

        function loadAndRender(ticker, quarter) {
            if (!ticker || !quarter) {
                renderReport(null);
                return;
            }
            showLoading(ticker, quarter);
            loadReportScript(ticker, quarter)
                .then(function (data) {
                    if (
                        companySelect.value === ticker &&
                        quarterSelect.value === quarter
                    ) {
                        renderReport(data);
                        setHash(ticker, quarter);
                    }
                })
                .catch(function (err) {
                    showLoadError(ticker, quarter, err && err.message);
                });
        }

        // Resolve initial selection from URL hash, else default to first.
        const hash = parseHash();
        let initialTicker = manifest.list[0].ticker;
        if (hash.ticker && manifest.byTicker[hash.ticker]) {
            initialTicker = hash.ticker;
        }
        companySelect.value = initialTicker;
        populateQuarters(initialTicker);

        const initialQuarters = manifest.byTicker[initialTicker].quarters;
        let initialQuarter = initialQuarters[0] || "";
        if (hash.quarter && initialQuarters.indexOf(hash.quarter) >= 0) {
            initialQuarter = hash.quarter;
        }
        if (initialQuarter) {
            quarterSelect.value = initialQuarter;
            loadAndRender(initialTicker, initialQuarter);
        } else {
            renderReport(null);
        }

        companySelect.addEventListener("change", function () {
            const ticker = companySelect.value;
            populateQuarters(ticker);
            const quarter = quarterSelect.value;
            if (quarter) loadAndRender(ticker, quarter);
            else renderReport(null);
        });

        quarterSelect.addEventListener("change", function () {
            loadAndRender(companySelect.value, quarterSelect.value);
        });

        window.addEventListener("hashchange", function () {
            const h = parseHash();
            if (!h.ticker || !manifest.byTicker[h.ticker]) return;
            if (companySelect.value !== h.ticker) {
                companySelect.value = h.ticker;
                populateQuarters(h.ticker);
            }
            const quarters = manifest.byTicker[h.ticker].quarters;
            const q = h.quarter && quarters.indexOf(h.quarter) >= 0
                ? h.quarter
                : quarters[0];
            if (q) {
                quarterSelect.value = q;
                loadAndRender(h.ticker, q);
            }
        });

        if (printBtn) {
            printBtn.addEventListener("click", function () {
                window.print();
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
