/* ============================================================
   Quarterly Earnings & Concall Analysis — BLANK TEMPLATE
   ============================================================
   To add a new analysis:
     1. Create a folder for the ticker if it doesn't exist:
            data/<TICKER>/                e.g.  data/UGROCAP/
     2. Copy this file into it as <QUARTER>.js:
            data/<TICKER>/<QUARTER>.js   e.g.  data/UGROCAP/Q4FY26.js
     3. Replace the two arguments to registerReport() with the
        actual ticker and quarter, then fill in the data below.
     4. Add the entry to data/manifest.js so it appears in the
        Company / Quarter dropdowns.

   Quarter format: Q<1-4>FY<2-digit-year>   e.g. Q4FY26

   Any field can be left as an empty string / empty array — the
   renderer skips empty sections gracefully. Inline **bold** and
   `code` markers are supported in any text.

   Schema mirrors the framework at
   `stock investing frameworks/quarterly_earnings_concall_analysis.md`
   (Sections 1-7 in order).
   ============================================================ */

window.registerReport("TICKER", "QXFYXX", {
    meta: {
        companyName: "Company Template (blank)",
        ticker: "TICKER",
        quarter: "QX FYXX",
        period: "Quarter date range",
        fyPeriod: "Full Year FYXX",
        reportDate: "DD Mon YYYY",
        concallDate: "DD Mon YYYY",
        resultsBasis: "Standalone / Consolidated",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice.",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        // Mandatory 5: Revenue / COGS / EBITDA Margin / PAT Margin / EPS
        coreMetrics: [
            { metric: "Revenue (₹Cr)", current: "", qoq: "", yoy: "" },
            { metric: "COGS (%)", current: "", qoq: "", yoy: "" },
            { metric: "EBITDA Margin (%)", current: "", qoq: "", yoy: "" },
            { metric: "PAT Margin (%)", current: "", qoq: "", yoy: "" },
            { metric: "EPS (₹)", current: "", qoq: "", yoy: "" },
        ],
        // Add 3 sector-specific business-quality metrics. Examples:
        //   Banks/NBFCs: GNPA/NNPA, NIM/Spread, ROA, AUM
        //   AMCs:        AUM, Yield, Equity Mix, SIP Book
        //   IT services: TCV/Deal wins, Active clients, Headcount
        //   Pharma:      Pipeline RFPs, ANDA approvals, US generics share
        businessQualityMetrics: [
            { metric: "Metric 1", current: "", qoq: "", yoy: "" },
            { metric: "Metric 2", current: "", qoq: "", yoy: "" },
            { metric: "Metric 3", current: "", qoq: "", yoy: "" },
        ],
        footnotes: [],
        patternDetected: "",
        interpretation: "",
        // Strictly 2 points each — what went right / what went wrong.
        whatWentRight: ["", ""],
        whatWentWrong: ["", ""],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "Segment 1",
                yoyGrowth: "",
                mix: "",
                analysis: "",
                triggers: "",
            },
        ],
        // Single string OR array of paragraphs.
        assessment: [""],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        // Strictly 5 high-quality pipeline metrics (sector-specific).
        metrics: [
            { metric: "Metric 1", current: "", trend: "", horizon: "", remarks: "" },
            { metric: "Metric 2", current: "", trend: "", horizon: "", remarks: "" },
            { metric: "Metric 3", current: "", trend: "", horizon: "", remarks: "" },
            { metric: "Metric 4", current: "", trend: "", horizon: "", remarks: "" },
            { metric: "Metric 5", current: "", trend: "", horizon: "", remarks: "" },
        ],
        // Demand signals from the framework. Verdict is colour-coded
        // automatically (Robust / Strong / Adequate / Weak / etc.).
        demandSignals: [
            { signal: "Industry growth rate", reading: "", verdict: "" },
            { signal: "Customer order patterns", reading: "", verdict: "" },
            { signal: "Capacity utilisation", reading: "", verdict: "" },
            { signal: "Competitive intensity", reading: "", verdict: "" },
            { signal: "Geographic expansion", reading: "", verdict: "" },
            { signal: "New product traction", reading: "", verdict: "" },
        ],
        demandVerdict: "",
        // Strictly 2 points each — what went right / what went wrong.
        whatWentRight: ["", ""],
        whatWentWrong: ["", ""],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        // Strictly max 5 high-impact key commitments.
        commitments: [
            { metric: "Revenue / Growth target", current: "", target: "" },
            { metric: "Margin target", current: "", target: "" },
            { metric: "Commitment 3", current: "", target: "" },
            { metric: "Commitment 4", current: "", target: "" },
            { metric: "Commitment 5", current: "", target: "" },
        ],
        // Optional one-line note interpreting management's posture.
        commitmentNote: "",
        // Strictly max 5 high-impact growth drivers.
        growthDrivers: [
            { driver: "Driver 1", impact: "" },
            { driver: "Driver 2", impact: "" },
            { driver: "Driver 3", impact: "" },
            { driver: "Driver 4", impact: "" },
            { driver: "Driver 5", impact: "" },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        // Strictly 5 high-impact bullish + 5 high-impact bearish signals.
        bullish: [
            { title: "Signal 1", body: "" },
            { title: "Signal 2", body: "" },
            { title: "Signal 3", body: "" },
            { title: "Signal 4", body: "" },
            { title: "Signal 5", body: "" },
        ],
        bearish: [
            { title: "Signal 1", body: "" },
            { title: "Signal 2", body: "" },
            { title: "Signal 3", body: "" },
            { title: "Signal 4", body: "" },
            { title: "Signal 5", body: "" },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        // impact: "strengthens" | "neutral" | "weakens"
        { text: "Takeaway 1", impact: "neutral", note: "" },
        { text: "Takeaway 2", impact: "neutral", note: "" },
        { text: "Takeaway 3", impact: "neutral", note: "" },
        { text: "Takeaway 4", impact: "neutral", note: "" },
        { text: "Takeaway 5", impact: "neutral", note: "" },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        // Q1: Is the core investment thesis intact?
        thesisIntact: {
            // verdict: "Yes" | "Partially" | "No"
            verdict: "",
            reasons: [""],
        },

        // Q2: What can re-rate this stock — and how likely?
        // probability: "High" | "Medium" | "Low"
        rerateTriggers: [
            { trigger: "Trigger 1", probability: "", rationale: "" },
            { trigger: "Trigger 2", probability: "", rationale: "" },
            { trigger: "Trigger 3", probability: "", rationale: "" },
        ],

        // Q3: If guidance is met on every metric, what is the upside?
        // (Assume valuation = 5-yr median of PE / PB / EV-EBITDA,
        //  EPS growing at historical CAGR.)
        upsideIfGuidanceMet: {
            currentPrice: "",
            targetPrice: "",
            upsidePct: "",
            horizon: "",
            assumptions: "",
            workings: "",
        },

        // Q4: Best value price zone to enter / accumulate
        // (use valuation_analysis.md framework).
        valuationEntryZone: {
            bestValueRange: "",
            fairValue: "",
            currentZone: "", // Cheap / Fair / Expensive
            rationale: "",
        },

        summary: "",
    },
});
