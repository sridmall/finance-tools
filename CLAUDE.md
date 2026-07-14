# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Personal finance tooling with two distinct tools:

1. **Asset class & sector allocation report** — a Python script that reads a Groww-exported `.xlsx` holdings file and generates a Markdown portfolio analysis report.
2. **Quarterly earnings HTML renderer** — a zero-dependency browser app that renders structured quarterly earnings/concall analyses for individual stocks.

## Running the asset class report

```bash
make generateAssetClassSectorAllocationReport
```

This auto-installs `openpyxl` if missing, runs the script, and writes the output to `assetclass_sector_allocation_report.md` (gitignored).

```bash
make install   # install deps manually
make help      # list all targets
```

The script lives at `asset class sector allocation report/assetclass_sector_allocation_report.py`. It auto-selects the latest `Stocks_Holdings_Statement_*.xlsx` file by date in its directory, deleting older ones. No path config needed.

## Running the quarterly earnings renderer

Open `quarterly-earnings-report/index.html` directly in a browser — no server or build step required. Pick Company → Quarter from the dropdowns.

## Architecture

### Python report script

- The `holdings` list at the top of `assetclass_sector_allocation_report.py` is the registry — each entry maps a stock symbol to its `excelStockName` (must match Groww's export exactly), `cap` (Large/Mid/Small), `sector`, and `subsector`.
- The script fuzzy-matches registry entries against Excel rows; prints `[WARN]` for unregistered stocks and `[SKIP]` for registry entries absent from Excel.
- Target allocations (`target_equity_pct`, `target_gold_pct`, etc.) are defined around line 180 of the script.

### Quarterly earnings renderer

- `data/manifest.js` — lists all companies and their available quarters; drives the dropdowns.
- `data/<TICKER>/<QUARTER>.js` — one file per company/quarter; calls `window.registerReport(ticker, quarter, data)` with a structured data object.
- `data/_template.js` — blank skeleton to copy when adding a new analysis.
- `app.js` — vanilla JS renderer; loads report files on demand via injected `<script>` tags; caches already-loaded files.
- The data schema mirrors `stock investing frameworks/quarterly_earnings_concall_analysis.md` (7 sections: earningsMetrics → businessSegments → futurePipeline → managementGuidance → concallSignals → takeaways → finalAssessment).

### Adding a new quarterly earnings report

1. Create `data/<TICKER>/` if it doesn't exist.
2. Copy `data/_template.js` → `data/<TICKER>/<QUARTER>.js`, fill in all sections.
3. Add/extend the entry in `data/manifest.js`.
4. Refresh the browser — no build step.

### Investing framework documents

`stock investing frameworks/` contains Markdown frameworks for fundamental analysis, valuation, entry/exit decisions, and quarterly earnings analysis. These are reference documents that define the schema used by the earnings renderer data files.
