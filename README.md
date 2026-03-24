# Portfolio Asset Class & Sector Allocation Report

A Python script that reads your stock holdings from a Groww-exported Excel file and generates a Markdown report covering:

- **Asset class allocation** — Equity, Gold, Silver, REITs/InvITs vs. your target percentages
- **Equity market cap breakdown** — Large Cap / Mid Cap / Small Cap (using SEBI absolute thresholds)
- **Sector & sub-sector allocation** — Capital Goods, IT, Healthcare, Financials, etc.
- **Stock-level detail** — Invested value and portfolio weight per holding

---

## Prerequisites

- **Python 3.8+** — Check with `python3 --version`
- **pip3** — Usually bundled with Python
- **make** — Pre-installed on macOS and Linux; on Windows use [WSL](https://learn.microsoft.com/en-us/windows/wsl/) or run the Python command directly

---

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/finance-tools.git
cd finance-tools
```

### 2. Export your holdings from Groww

1. Log in to [Groww](https://groww.in) and go to **Portfolio → Stocks**
2. Click **Download** (top-right) to export your holdings as an Excel file (`.xlsx`)
3. Place the downloaded file in the project directory

The expected Excel format (Groww's default export):
- **Row 11** — Header row with columns: `Stock Name`, `ISIN`, `Quantity`, `Average buy price`, etc.
- **Row 12 onwards** — One stock per row

### 3. Update the Excel file path

Open `assetclass_sector_allocation_report.py` and update line 5 to match your exported file name:

```python
EXCEL_FILE = os.path.join(os.path.dirname(__file__), "YOUR_HOLDINGS_FILE.xlsx")
```

### 4. Register your holdings

The script maintains a **holdings registry** — a list of dicts at the top of `assetclass_sector_allocation_report.py`. Each entry maps a stock to its sector, sub-sector, and market cap classification, and tells the script how to find it in the Excel file.

For each stock you hold, ensure there is a corresponding entry:

```python
{"symbol": "KPITTECH", "title": "KPIT Technologies Ltd.", "excelStockName": "KPIT TECHNOLOGIES LIMITED", "cap": "Small Cap", "sector": "Information Technology", "subsector": "IT Services & Software"},
```

| Field | Description |
|---|---|
| `symbol` | Short identifier for the stock (used in report output) |
| `title` | Full company name (used for fuzzy matching fallback) |
| `excelStockName` | **Exact stock name as it appears in the Groww Excel export** (copy-paste from the file) |
| `cap` | Market cap category: `"Large Cap"`, `"Mid Cap"`, or `"Small Cap"` |
| `sector` | Broad sector grouping (e.g. `"Information Technology"`, `"Healthcare & Pharma"`) |
| `subsector` | More specific grouping within the sector |

**SEBI market cap thresholds used:**

| Category | Market Cap |
|---|---|
| Large Cap | > ₹1,00,000 Cr |
| Mid Cap | ₹33,000 – ₹1,00,000 Cr |
| Small Cap | < ₹33,000 Cr |

> **Tip:** If you add a new stock, run the script — it will print a `[WARN]` for any Excel stock not found in the registry, and `[SKIP]` for any registry entry not found in the Excel.

### 5. (Optional) Adjust target allocations

The default target allocations are defined around line 180 of the script. Edit them to match your personal targets:

```python
target_equity_pct = 75.0
target_gold_pct   = 10.0
target_silver_pct = 5.0
target_reit_pct   = 10.0
```

---

## Running the Report

```bash
make generateAssetClassSectorAllocationReport
```

This single command will:
1. Check that `openpyxl` is installed (auto-installs if missing)
2. Run the script against your Excel file
3. Write the report to `assetclass_sector_allocation_report.md` in the project directory

To install dependencies separately:

```bash
make install
```

To see all available `make` targets:

```bash
make help
```

---

## Output

The generated `assetclass_sector_allocation_report.md` contains:

1. **Portfolio Summary** — total invested, number of holdings by asset class
2. **Asset Class Allocation vs Target** — with deviation and rebalance amounts
3. **Equity Sub-Allocation (Market Cap) vs Target** — Large / Mid / Small cap breakdown
4. **Sector & Sub-Sector Allocation** — hierarchical breakdown with per-stock detail
5. **Top Holdings** — largest positions by invested value
6. **Portfolio Insights** — concentrated positions (>5% weight)

> The report file is excluded from git (see `.gitignore`) since it is a generated artifact. Re-run the `make` command anytime to refresh it.

---

## Project Structure

```
finance-tools/
├── assetclass_sector_allocation_report.py   # Main script
├── Makefile                                  # make targets for running the script
├── requirements.txt                          # Python dependencies
├── .gitignore                                # Excludes Excel file and generated report
└── README.md                                 # This file
```

---

## Troubleshooting

**`ModuleNotFoundError: No module named 'openpyxl'`**
```bash
make install
```

**`[WARN] 'XYZ' is in Excel but not in any registry entry`**
Add the stock to the holdings registry in the script with the exact `excelStockName` from your Excel file.

**`[SKIP] XYZ not found in Excel (sold position?)`**
The registry has an entry for a stock not in your current Excel export — you may have sold it. You can remove it from the registry or leave it (it will be skipped with value ₹0).

**Excel file not found**
Make sure the `.xlsx` file is in the same directory as the script and that the `EXCEL_FILE` variable on line 5 of the script matches the file name exactly.
