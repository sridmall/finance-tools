# Quarterly Earnings & Concall Analysis — Dynamic HTML Renderer

A self-contained, data-driven web page that renders any company's quarterly
earnings & concall analysis using the standard framework defined in
`stock investing frameworks/quarterly_earnings_concall_analysis.md`.

Tables, callouts, signal cards and the scorecard are real HTML elements, so
column alignment is always pixel-perfect — no more ASCII-art drift.

## How to use

1. Open `index.html` directly in your browser (no server required).
2. Pick a **Company** from the first dropdown.
3. Pick a **Quarter** from the second dropdown — the report loads on demand.
4. Click **Print / Save PDF** to export.

The current selection is reflected in the URL hash, e.g.
`index.html#UGROCAP/Q4FY26`, so you can share a deep link to any report.

## Folder layout

```
quarterly-earnings-report/
├── index.html              ← entry point (open this in browser)
├── styles.css              ← layout + theming
├── app.js                  ← renderer logic (vanilla JS, no deps)
├── data/
│   ├── manifest.js         ← lists every analysed company + quarters
│   ├── _template.js        ← blank report skeleton (reference only)
│   └── <TICKER>/
│       └── <QUARTER>.js    ← actual report data
└── README.md
```

Quarter format is `Q<1-4>FY<2-digit-year>`, e.g. `Q4FY26`.

## Adding a new company / quarter

1. **Create the ticker folder** if it doesn't exist:

   ```
   data/<TICKER>/
   ```

   For example, `data/HDFCAMC/`.

2. **Copy `data/_template.js`** into that folder as `<QUARTER>.js`:

   ```
   data/HDFCAMC/Q4FY26.js
   ```

   Replace the two arguments to `window.registerReport(...)` with the
   actual ticker and quarter, then fill in all the sections.

3. **Register it in `data/manifest.js`** — add (or extend) an entry:

   ```js
   {
       ticker: "HDFCAMC",
       name:   "HDFC Asset Management Co.",
       quarters: ["Q4FY26", "Q3FY26"],   // newest-first is fine; the
                                         // app sorts them anyway
   }
   ```

4. **Refresh the page.** The company appears in the Company dropdown
   and its quarter shows up in the Quarter dropdown. The actual data
   file is loaded on demand the first time you select that quarter.

The renderer supports two inline markers in any text field:

- `**bold**` → **bold**
- `` `code` `` → inline `code` / monospace

## Data schema (top-level keys)

The schema mirrors the framework
(`stock investing frameworks/quarterly_earnings_concall_analysis.md`).
Sections are numbered 1-7 in the renderer.

| Key                  | Section                          | Notes                                                                               |
| -------------------- | -------------------------------- | ----------------------------------------------------------------------------------- |
| `meta`               | Header / cover                   | Company name, ticker, quarter, dates, basis                                         |
| `earningsMetrics`    | 1. Earnings Metrics              | Core 5 + 3 sector-specific business-quality metrics; 2-point right/wrong            |
| `businessSegments`   | 2. Business Segment Performance  | One row per segment with YoY / mix / analysis / growth triggers                     |
| `futurePipeline`     | 3. Future Revenue Pipeline       | 5 pipeline metrics + 6-7 demand signals + demand verdict + 2-point right/wrong      |
| `managementGuidance` | 4. Management Guidance           | Max 5 commitments + max 5 growth drivers (driver + business impact)                 |
| `concallSignals`     | 5. Concall Signals               | Strictly 5 bullish + 5 bearish signals (title + body)                               |
| `takeaways`          | 6. Five Most Important Takeaways | Each with `strengthens` / `neutral` / `weakens` impact                              |
| `finalAssessment`    | 7. Final Assessment              | 4 questions: thesis intact + re-rate triggers + upside if guidance met + entry zone |

### `finalAssessment` shape (Section 7)

```js
finalAssessment: {
    thesisIntact: { verdict: "Yes / Partially / No", reasons: ["..."] },
    rerateTriggers: [
        { trigger: "...", probability: "High / Medium / Low", rationale: "..." }
    ],
    upsideIfGuidanceMet: {
        currentPrice: "₹X",
        targetPrice:  "₹Y",
        upsidePct:    "+Z%",
        horizon:      "12-18 months",
        assumptions:  "5-yr median PE × historical EPS CAGR",
        workings:     "Detailed numbers..."
    },
    valuationEntryZone: {
        bestValueRange: "₹A – ₹B",
        fairValue:      "₹C",
        currentZone:    "Cheap / Fair / Expensive",
        rationale:      "Per valuation_analysis.md framework"
    },
    summary: "One-line final summary (optional)"
}
```

> **Legacy compatibility:** Reports authored under the older framework
> (with `walkingTheTalk`, `qualityAssessment` inside `managementGuidance`,
> `quality` inside `concallSignals`, or the old `scorecard` block) will
> still load — the renderer skips removed sections and falls back to
> rendering `scorecard` as the Final Assessment when `finalAssessment`
> is absent. New reports should follow the schema above.

See `data/_template.js` for the full skeleton with comments, and
`data/UGROCAP/Q4FY26.js` for a fully-populated working example.

## How loading works (no server needed)

- `index.html` loads only `data/manifest.js` and `app.js` upfront.
- The dropdowns are built from the manifest.
- When you pick a quarter, the renderer injects a `<script>` tag pointing
  at `data/<TICKER>/<QUARTER>.js`. That file calls
  `window.registerReport(ticker, quarter, data)` to hand its payload to
  the renderer, which then draws the report.
- Already-loaded files are cached, so switching back to a previous
  selection is instant.

No build step. No dependencies. Works fully offline from the filesystem.
