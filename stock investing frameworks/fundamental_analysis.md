# Fundamental Analysis Framework for Long-Term Investors

**Report Date:** 26 March 2026  
**Purpose:** A comprehensive, rules-based framework to assess the quality of a business before investing  
**Companion Reports:** `valuation_analysis.md` (valuation, entry/exit rules) · `quarterly_earnings_concall_analysis.md` (earnings & concall tracking) · `stock_valuation_scorecard_report.md` (applied scorecards)  
**Disclaimer:** This report is for educational and personal decision-making purposes only. It does not constitute financial advice.

## 1. The Fundamental Analysis Decision Flow

Fundamental analysis answers one question: **"Is this a high-quality business that will compound my wealth over 10+ years?"**

This is distinct from valuation analysis (covered in `valuation_analysis.md`), which asks: "Am I paying a fair price?" You need BOTH — a great business at a great price.

```
  ┌───────────────────────────────┐
  │     IDEA GENERATION           │
  │  (sector thesis, screeners)   │
  └──────────────┬────────────────┘
                 │
                 ▼
  ┌───────────────────────────────┐
  │   FUNDAMENTAL ANALYSIS        │  ← THIS REPORT
  │   "Is this a quality business?"│
  │                               │
  │   • P&L Analysis (5 yrs)      │
  │   • OPM Expansion (8 qtrs)    │
  │   • Balance Sheet (5 yrs)     │
  │   • Cash Flow Analysis        │
  │   • Financial Ratios          │
  │   • Shareholding Pattern      │
  │   • Brokerage Research        │
  │   • Growth Thesis             │
  │                               │
  │   Score >= 70/100? ──► YES    │
  └──────────────┬────────────────┘
                 │
                 ▼
  ┌───────────────────────────────┐
  │   VALUATION ANALYSIS          │  ← valuation_analysis.md
  │   "Am I paying a fair price?" │
  │                               │
  │   • PE vs Historical PE       │
  │   • PEG Ratio                 │
  │   • Sector-specific metrics   │
  │   • Intrinsic Value / DCF     │
  │                               │
  │   Fair or undervalued? ──► YES│
  └──────────────┬────────────────┘
                 │
                 ▼
  ┌───────────────────────────────┐
  │   DEPLOY TRANCHE 1            │  ← valuation_analysis.md
  └───────────────────────────────┘
```

---

## 2. Profit & Loss Analysis — The Income Statement (5 Years)

The income statement tells you how a business earns money and how efficiently it converts revenue into profits. Analyzing 5 years of P&L reveals trends that a single quarter cannot.

### 2.1 What to Extract (5-Year Comparative Table)

For every stock you evaluate, build this table from Screener.in or the annual report:

```
                          FY22      FY23      FY24      FY25      FY26E
Revenue Growth (YoY %)   ____      ____      ____      ____      ____
                         
EBITDA Margin (%)        ____      ____      ____      ____      ____

PAT Growth (YoY %)       ____      ____      ____      ____      ____

EPS Growth (YoY %)       ____      ____      ____      ____      ____
```

### 2.2 P&L Analysis Scoring Rules


| Metric                    | Green (3 pts) | Yellow (1 pt) | Red (0 pts)                        |
| ------------------------- | ------------- | ------------- | ---------------------------------- |
| **Revenue CAGR (5yr)**    | > 15%         | 8-15%         | < 8%                               |
| **PAT CAGR (5yr)**        | > 20%         | 12-20%        | < 12%                              |
| **EPS Growth CAGR (5yr)** | > 18%         | 10-18%        | < 10% or diluted by share issuance |


**Maximum P&L Score: 9 points**

### 2.3 Key P&L Red Flags


| Red Flag                                                                       | What It Means                              | Action                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------ | ----------------------------------------- |
| Revenue growing but PAT declining                                              | Cost structure is broken; no pricing power | Investigate — likely a margin problem     |
| PAT growing faster than revenue (consistently)                                 | Operating leverage working; or one-offs    | Verify if genuine leverage or accounting  |
| Costs(Material or Employee or Interest expense etc) rising faster than revenue | Losing operational efficiency              | Investigate — why costs are rising faster |


---

## 3. Operating Profit Margin Expansion — The Leverage Test (8 Quarters)

OPM expansion is the single best indicator of operating leverage — the ability of a company to grow profits faster than revenue because fixed costs are spread over a larger revenue base.

### 3.1 The 8-Quarter OPM Tracking Table

Build this from quarterly results on Screener.in:

```
Quarter        Q4FY24  Q1FY25  Q2FY25  Q3FY25  Q4FY25  Q1FY26  Q2FY26  Q3FY26
Revenue (₹Cr)  ____    ____    ____    ____    ____    ____    ____    ____
EBITDA (₹Cr)   ____    ____    ____    ____    ____    ____    ____    ____
OPM (%)        ____    ____    ____    ____    ____    ____    ____    ____
OPM Change     ____    ____    ____    ____    ____    ____    ____    ____
(QoQ bps)
```

### 3.2 OPM Expansion Scoring


| OPM Pattern (8 Quarters)                                     | Score | Interpretation                                                                                                                         |
| ------------------------------------------------------------ | ----- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Consistently expanding** (5+ quarters of QoQ improvement)  | 5 pts | **Strong operating leverage** — fixed costs being amortized over growing revenue. This is the most bullish signal for earnings growth. |
| **Stable with seasonal variation** (±200 bps around a mean)  | 3 pts | **Healthy** — business operating within normal range. Seasonal businesses (seeds, ACs) will show this.                                 |
| **Fluctuating wildly** (> 500 bps swings quarter to quarter) | 1 pt  | **Unpredictable** — business has variable cost structure or lumpy revenue recognition. Higher risk.                                    |
| **Consistently declining** (3+ quarters of contraction)      | 0 pts | **Losing pricing power** — competition or input costs are squeezing the business. Exit warning.                                        |


**Maximum OPM Score: 5 points**

### 3.3 Why Does OPM Expand? (Root Cause Analysis)

When you find OPM expanding, dig into the WHY — it tells you whether the expansion is sustainable:


| Reason for OPM Expansion                                                                   | Sustainability                     | Example from Your Universe                                               |
| ------------------------------------------------------------------------------------------ | ---------------------------------- | ------------------------------------------------------------------------ |
| **Revenue mix shifting to higher-margin products**                                         | High — structural improvement      | SHAILY shifting to medical devices (higher OPM than industrial plastics) |
| **Scale economies** — fixed costs (rent, software, management) spread over growing revenue | High — as long as revenue grows    | HDFCAMC — same platform serves 10M or 100M folios at similar cost        |
| **Price increases** — company raising prices due to brand/moat                             | Medium — depends on competition    | Not common in your portfolio (mostly B2B businesses)                     |
| **Lower raw material costs**                                                               | Low — cyclical; will reverse       | Manufacturing companies benefit temporarily from input cost deflation    |
| **Cost-cutting / restructuring**                                                           | Low — one-time; cannot be repeated | A company laying off staff shows temporary OPM boost                     |


---

## 4. Balance Sheet Analysis (5 Years)

The balance sheet reveals what a company OWNS (assets), what it OWES (liabilities), and whether it is building or destroying financial strength over time.

### 4.1 What to Extract (5-Year Comparative Table)

```
                          FY22      FY23      FY24      FY25      FY26E
ASSETS
Fixed Assets (Net)        ____      ____      ____      ____      ____
Capital WIP               ____      ____      ____      ____      ____
Investments               ____      ____      ____      ____      ____
Trade Receivables         ____      ____      ____      ____      ____
Inventory                 ____      ____      ____      ____      ____
Cash & Equivalents        ____      ____      ____      ____      ____
Other Current Assets      ____      ____      ____      ____      ____
TOTAL ASSETS              ____      ____      ____      ____      ____

LIABILITIES & EQUITY
Share Capital              ____      ____      ____      ____      ____
Reserves & Surplus         ____      ____      ____      ____      ____
Total Equity (Net Worth)   ____      ____      ____      ____      ____

Long-Term Borrowings       ____      ____      ____      ____      ____
Short-Term Borrowings      ____      ____      ____      ____      ____
Total Borrowings           ____      ____      ____      ____      ____
Trade Payables             ____      ____      ____      ____      ____
Other Current Liabilities  ____      ____      ____      ____      ____
TOTAL LIABILITIES          ____      ____      ____      ____      ____
```

### 4.2 Balance Sheet Analysis Scoring Rules


| Metric                                | Green (3 pts)                      | Yellow (1 pt) | Red (0 pts)                                   |
| ------------------------------------- | ---------------------------------- | ------------- | --------------------------------------------- |
| **Debt-to-Equity Ratio**              | < 0.3 (conservative)               | 0.3-1.0       | > 1.0                                         |
| **Debt Trend (5yr)**                  | Declining or zero                  | Stable        | Increasing faster than revenue                |
| **Interest Coverage (EBIT/Interest)** | > 5x                               | 3-5x          | < 3x                                          |
| **Cash & Equivalents**                | Growing; > 10% of total assets     | Stable        | Declining; < 5% of total assets               |
| **Capital WIP**                       | Growing (signals capex for growth) | Stable        | Large and stuck for 3+ years (project delays) |


**Maximum Balance Sheet Score: 15 points**

### 4.3 Capex Analysis


| Metric                | Calculation                         | What It Tells You                                                                               |
| --------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Capex-to-Revenue**  | Capex / Revenue                     | How capital-intensive is the business? Lower = better                                           |
| **Capex-to-CFO**      | Capex / Cash from Operations        | What % of cash generated is reinvested? > 80% = heavy investment phase                          |
| **Capital WIP Trend** | Is CWIP converting to fixed assets? | Growing CWIP that converts within 1-2 years = healthy; CWIP stuck for 3+ years = project delays |


### 4.4 Capex Scoring Rules


| Metric                | Green (3 pts)                                            | Yellow (1 pt)                                         | Red (0 pts)                                                     |
| --------------------- | -------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------- |
| **Capex-to-Revenue**  | < 8% (capital-light) or appropriate for sector           | 8-15% with strong ROCE on new capex                   | > 15% with ROCE below cost of capital                           |
| **Capex-to-CFO**      | < 50% (generating surplus cash after reinvestment)       | 50-80% (investing heavily but retaining some cash)    | > 80% (almost all cash going back in; no FCF buffer)            |
| **Capital WIP Trend** | CWIP converting to fixed assets within 1-2 years         | CWIP growing but with clear commissioning timeline    | CWIP stuck for 3+ years; project delays or cost overruns        |


**Maximum Capex Score: 9 points**

---

## 5. Cash Flow Analysis — Follow the Cash

"Revenue is vanity, profit is sanity, but cash flow is reality." — This is the most important statement in fundamental analysis. A company can report profits while burning cash, but it cannot fake cash generation.

### 5.1 The Three Cash Flow Statements

```
                          FY22      FY23      FY24      FY25      FY26E
CASH FLOW FROM OPERATIONS (CFO)
Net Profit                ____      ____      ____      ____      ____
+ Depreciation            ____      ____      ____      ____      ____
+/- Working Capital       ____      ____      ____      ____      ____
   Changes
CFO (Operating Cash)      ____      ____      ____      ____      ____

CASH FLOW FROM INVESTING (CFI)
Capex                     (_____)   (_____)   (_____)   (_____)   (_____)
Investments               ____      ____      ____      ____      ____
Acquisitions              (_____)   (_____)   (_____)   (_____)   (_____)
CFI (Investing Cash)      ____      ____      ____      ____      ____

CASH FLOW FROM FINANCING (CFF)
Borrowings (+/-)          ____      ____      ____      ____      ____
Equity Raised             ____      ____      ____      ____      ____
Dividends Paid            (_____)   (_____)   (_____)   (_____)   (_____)
CFF (Financing Cash)      ____      ____      ____      ____      ____

NET CHANGE IN CASH        ____      ____      ____      ____      ____

FREE CASH FLOW (CFO-Capex) ____    ____      ____      ____      ____
```

### 5.2 Cash Flow Scoring Rules


| Metric                           | Green (3 pts)                                | Yellow (1 pt)                                   | Red (0 pts)                                            |
| -------------------------------- | -------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------ |
| **CFO Positive**                 | Positive all 5 years                         | Positive 3-4 of 5 years                         | Negative 3+ of 5 years                                 |
| **CFO vs PAT (Cash Conversion)** | CFO/PAT > 0.8x consistently                  | CFO/PAT 0.5-0.8x                                | CFO/PAT < 0.5x (profits not turning into cash)         |
| **FCF (CFO - Capex)**            | Positive 3+ of 5 years                       | Positive 2 of 5 years (growth phase acceptable) | Negative 4+ of 5 years                                 |
| **FCF Yield**                    | > 3%                                         | 1-3%                                            | < 1% or negative                                       |
| **Working Capital Trend**        | Stable or improving (cash not getting stuck) | Slightly worsening                              | Significantly worsening (cash drain)                   |
| **Dividend / Buyback**           | Consistent dividends from FCF                | Occasional dividends                            | Dividends paid from borrowings or despite negative FCF |


**Maximum Cash Flow Score: 18 points**

### 5.3 Working Capital Deep Dive

Working capital is where cash gets "stuck" in the business cycle. Three components to monitor:

#### Trade Receivables Analysis


| Metric              | Calculation                            | What It Tells You                                                                             |
| ------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------- |
| **Receivable Days** | (Trade Receivables / Revenue) × 365    | How many days it takes customers to pay                                                       |
| **Trend**           | Compare receivable days across 5 years | Increasing days = customers paying slower = cash getting stuck                                |
| **Benchmark**       | Compare with industry peers            | If your company has 90-day receivables and peers have 60 days, it has weaker bargaining power |



| Receivable Days Trend               | Interpretation                                                       |
| ----------------------------------- | -------------------------------------------------------------------- |
| Declining over 5 years              | **Excellent** — company has pricing power; customers paying faster   |
| Stable (±5 days variation)          | **Acceptable** — normal business                                     |
| Increasing by 10+ days over 5 years | **Warning** — cash is getting stuck; possible revenue quality issues |
| Sudden spike in one quarter         | **Red flag** — investigate; could be channel stuffing or bad debts   |


#### Inventory Analysis


| Metric                   | Calculation              | What It Tells You                                                |
| ------------------------ | ------------------------ | ---------------------------------------------------------------- |
| **Inventory Days**       | (Inventory / COGS) × 365 | How many days of raw material / finished goods the company holds |
| **Trend**                | Compare across 5 years   | Increasing = products not selling; supply chain issues           |
| **Inventory-to-Revenue** | Inventory / Revenue      | Rising ratio = inventory building up relative to sales           |



| Inventory Days Trend | Interpretation                                                                |
| -------------------- | ----------------------------------------------------------------------------- |
| Declining            | **Excellent** — efficient inventory management; just-in-time approach         |
| Stable               | **Acceptable** — normal operations                                            |
| Increasing           | **Warning** — products not selling or deliberate build-up (verify in concall) |
| Large write-offs     | **Red flag** — obsolete inventory destroying value                            |


#### Cash Conversion Cycle (CCC)

```
CCC = Receivable Days + Inventory Days - Payable Days
```


| CCC                | Interpretation                                                                                |
| ------------------ | --------------------------------------------------------------------------------------------- |
| **Negative CCC**   | The company collects cash before it pays suppliers — excellent (e.g., Eternal/Zomato's model) |
| **CCC < 30 days**  | Efficient working capital — minimal cash stuck in the cycle                                   |
| **CCC 30-60 days** | Normal for most businesses                                                                    |
| **CCC 60-90 days** | Capital-intensive; acceptable for manufacturing                                               |
| **CCC > 90 days**  | Cash is stuck for too long; investigate                                                       |
| **CCC increasing** | Working capital efficiency declining — more cash needed to run the business                   |


---

## 6. Financial Ratios — The Quality Dashboard (5-Year View)

Ratios compress complex financial data into actionable numbers. Use 5-year trends, not single-year snapshots.

### 6.1 The Essential Ratio Table

Build this for every stock you evaluate:

```
                          FY22      FY23      FY24      FY25      5yr Avg
RETURNS
ROE (%)                   ____      ____      ____      ____      ____
ROCE (%)                  ____      ____      ____      ____      ____
ROA (%)                   ____      ____      ____      ____      ____

LEVERAGE
Debt/Equity               ____      ____      ____      ____      ____
Interest Coverage         ____      ____      ____      ____      ____

EFFICIENCY
Asset Turnover            ____      ____      ____      ____      ____
Receivable Days           ____      ____      ____      ____      ____
Inventory Days            ____      ____      ____      ____      ____
Cash Conversion Cycle     ____      ____      ____      ____      ____

GROWTH
Revenue CAGR (5yr)        ____
PAT CAGR (5yr)            ____
EPS CAGR (3yr)            ____
```

### 6.2 Return Ratios — The Core Quality Indicators


| Ratio                | Formula                                     | Threshold                            | Why It Matters                                                                                                                                                           |
| -------------------- | ------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **ROCE**             | EBIT / Capital Employed                     | >= 15% (5-year average)              | The most important ratio. Measures how efficiently the company uses ALL capital (equity + debt). A 20% ROCE means every ₹100 deployed generates ₹20 in operating profit. |
| **ROE**              | PAT / Shareholder Equity                    | >= 15% (5-year average)              | Measures return on YOUR money (equity). High ROE + low debt = genuine quality. High ROE + high debt = leveraged return (riskier).                                        |
| **ROA**              | PAT / Total Assets                          | >= 5% (non-financial); >= 1% (banks) | Measures efficiency of total asset base. Important for capital-intensive businesses.                                                                                     |
| **ROIC**             | NOPAT / Invested Capital                    | >= 12%                               | The most accurate return measure. If ROIC > WACC, the company is creating value. If ROIC < WACC, it is destroying value.                                                 |
| **Incremental ROCE** | Change in EBIT / Change in Capital Employed | >= 15%                               | Tells you whether NEW capital deployed is generating good returns. Even more important than historical ROCE for growth companies.                                        |


### 6.3 Return Ratio Scoring


| Metric                | Green (3 pts)       | Yellow (1 pt)  | Red (0 pts)            |
| --------------------- | ------------------- | -------------- | ---------------------- |
| **5-Year Avg ROCE**   | > 20%               | 15-20%         | < 15%                  |
| **ROCE Trend**        | Improving or stable | Slight decline | Declining for 3+ years |
| **5-Year Avg ROE**    | > 18%               | 12-18%         | < 12%                  |
| **Debt-to-Equity**    | < 0.3               | 0.3-1.0        | > 1.0                  |
| **Interest Coverage** | > 5x                | 3-5x           | < 3x                   |


**Maximum Return & Leverage Ratio Score: 15 points**

### 6.4 Efficiency Ratio Scoring


| Metric                      | Green (3 pts)                                                | Yellow (1 pt)                           | Red (0 pts)                                                  |
| --------------------------- | ------------------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------ |
| **ROA (5-Year Avg)**        | > 8% (non-financial); > 1.2% (banks)                        | 4-8% (non-financial); 0.8-1.2% (banks) | < 4% (non-financial); < 0.8% (banks)                        |
| **Asset Turnover**          | Improving or stable over 5 years                             | Slight decline                          | Declining for 3+ years (assets growing faster than revenue)  |
| **Receivable Days**         | Declining over 5 years; below industry average               | Stable (±5 days variation)              | Increasing by 10+ days over 5 years                          |
| **Inventory Days**          | Declining or stable; efficient management                    | Slight increase                         | Rising consistently; large write-offs                        |
| **Cash Conversion Cycle**   | < 30 days or improving trend                                 | 30-60 days and stable                   | > 60 days and worsening                                      |


**Maximum Efficiency Ratio Score: 15 points**

**Combined Maximum Ratio Score (Section 6): 30 points**

### 6.5 Sector-Specific Ratio Benchmarks


| Sector                            | Key Ratio      | Good   | Average  | Poor   |
| --------------------------------- | -------------- | ------ | -------- | ------ |
| **IT Services / Platforms**       | ROCE           | > 30%  | 20-30%   | < 20%  |
| **Manufacturing / Capital Goods** | ROCE           | > 18%  | 12-18%   | < 12%  |
| **Banks**                         | ROE            | > 15%  | 10-15%   | < 10%  |
| **Banks**                         | ROA            | > 1.2% | 0.8-1.2% | < 0.8% |
| **Banks**                         | Gross NPA      | < 2%   | 2-4%     | > 4%   |
| **NBFCs / Housing Finance**       | ROE            | > 14%  | 10-14%   | < 10%  |
| **NBFCs**                         | Spread (NIM)   | > 5%   | 3-5%     | < 3%   |
| **Insurance**                     | Combined Ratio | < 95%  | 95-100%  | > 100% |
| **Insurance**                     | ROE            | > 15%  | 10-15%   | < 10%  |
| **AMC / Financial Tech**          | ROCE           | > 35%  | 25-35%   | < 25%  |
| **Pharma / CDMO**                 | EBITDA Margin  | > 22%  | 15-22%   | < 15%  |
| **EMS (Electronics Mfg)**         | ROCE           | > 15%  | 10-15%   | < 10%  |
| **Consumer / QSR**                | ROCE           | > 20%  | 12-20%   | < 12%  |


---

## 7. Shareholding Pattern Analysis

Shareholding patterns reveal who owns the company and whether smart money is buying or selling. This is not about the price — it is about the alignment of interests.

### 7.1 What to Track (Last 8 Quarters)

```
Quarter    Promoter%  FII%   DII%   MF%    Public%  Pledged%
Q4FY24     ____       ____   ____   ____   ____     ____
Q1FY25     ____       ____   ____   ____   ____     ____
Q2FY25     ____       ____   ____   ____   ____     ____
Q3FY25     ____       ____   ____   ____   ____     ____
Q4FY25     ____       ____   ____   ____   ____     ____
Q1FY26     ____       ____   ____   ____   ____     ____
Q2FY26     ____       ____   ____   ____   ____     ____
Q3FY26     ____       ____   ____   ____   ____     ____
```

### 7.2 Shareholding Scoring Rules


| Metric                | Green (3 pts)                      | Yellow (1 pt)             | Red (0 pts)                                                                  |
| --------------------- | ---------------------------------- | ------------------------- | ---------------------------------------------------------------------------- |
| **Promoter Holding**  | > 50%                              | 35-50%                    | < 35% (exceptions: professionally managed companies like Eternal, HDFC Bank) |
| **Promoter Trend**    | Stable or increasing (last 4 qtrs) | Minor decline < 1%        | Declining 2%+ per quarter                                                    |
| **Promoter Pledging** | Zero                               | < 10% of promoter holding | > 10%                                                                        |
| **FII Holding**       | > 15% and increasing               | 5-15%                     | < 5% or rapidly declining                                                    |
| **DII / MF Holding**  | > 10% and increasing               | 5-10%                     | < 5% or rapidly declining                                                    |


**Maximum Shareholding Score: 15 points**

### 7.3 Shareholding Red Flags


| Red Flag                            | Severity   | Action                                                               |
| ----------------------------------- | ---------- | -------------------------------------------------------------------- |
| **Promoter pledging > 25%**         | Critical   | **Do not invest** (per governance rules)                             |
| **FII exiting rapidly**             | Medium     | Check if company-specific or India-wide FII outflow                  |
| **Mutual funds reducing positions** | Medium     | Verify with latest MF disclosures; MFs have inflow/outflow pressures |
| **No institutional presence**       | Low-Medium | Undiscovered stock OR low quality; needs deeper diligence            |


---

## 8. Brokerage & Institutional Research — External Validation

Brokerage reports provide professional analysis that validates (or challenges) your own thesis. Use them as a secondary input, never as a primary decision driver.

### 10.1 How to Use Brokerage Research


| Principle                                                      | Explanation                                                                                                                           |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Brokerage reports are a starting point, not a conclusion**   | They provide data, models, and perspectives — but their target prices are based on assumptions that may differ from yours             |
| **Read multiple reports, not just one**                        | One bullish report is an opinion; five bullish reports from independent brokerages is a signal                                        |
| **Focus on the analysis, not the target price**                | The reasoning behind the target (growth assumptions, margin trajectory, competitive position) is more valuable than the number itself |
| **Global brokerages carry more weight for macro/sector views** | Morgan Stanley, Goldman Sachs, Jefferies, CLSA, Nomura have broader global perspective on sector trends                               |
| **Domestic brokerages have better ground-level insights**      | Motilal Oswal, Nuvama, ICICI Securities, HDFC Securities have deeper on-the-ground understanding of Indian companies                  |


### 10.2 Brokerage Research Scoring


| Factor                          | Green (3 pts)                       | Yellow (1 pt)             | Red (0 pts)                       |
| ------------------------------- | ----------------------------------- | ------------------------- | --------------------------------- |
| **Consensus Rating**            | 70%+ analysts rate BUY/Strong Buy   | Mixed — 40-70% BUY        | 70%+ analysts rate SELL/HOLD      |
| **Global brokerage coverage**   | 2+ global brokerages cover with BUY | 1 global brokerage covers | No global coverage; only domestic |
| **Target price vs CMP**         | Average target 20%+ above CMP       | Target 0-20% above CMP    | Target below CMP                  |
| **Earnings estimate revisions** | Estimates being revised upward      | Stable estimates          | Estimates being revised downward  |


**Maximum Brokerage Score: 12 points**

### 10.3 Where to Find Brokerage Reports


| Source                           | Access          | Coverage                                                     |
| -------------------------------- | --------------- | ------------------------------------------------------------ |
| Trendlyne (Research Reports tab) | Free with login | Aggregates domestic brokerage reports                        |
| MoneyControl (Research tab)      | Free            | Major domestic reports                                       |
| Tijori Finance                   | Free/Paid       | Curated research summaries                                   |
| Company Investor Relations page  | Free            | Often hosts analyst presentations and company-linked reports |
| Screener.in (Concall links)      | Free            | Links to earnings transcripts                                |
| BSE/NSE filings                  | Free            | All official disclosures                                     |


### 10.4 Key Questions to Answer from Brokerage Research


| Question                                               | Why It Matters                                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------------------------- |
| What is the consensus EPS estimate for next 2-3 years? | Helps you calculate forward PE and PEG                                          |
| What is the bull/bear/base case scenario?              | Understanding the range of outcomes                                             |
| What growth drivers does the brokerage identify?       | Cross-reference with your own thesis                                            |
| What risks does the brokerage highlight?               | Identify blind spots in your analysis                                           |
| Has the brokerage recently upgraded or downgraded?     | Directional signal on business trajectory                                       |
| What valuation methodology does the brokerage use?     | Helps you understand if their target is DCF, PE-multiple, or sum-of-parts based |


---

## 9. Investment Thesis Framework — Why Will This Stock Create Wealth?

For a 10+ year holding period, you need a thesis that goes beyond numbers. The thesis must articulate WHY this business will be significantly larger and more profitable a decade from now.

### 9.1 The Thesis Components

Every investment thesis must answer these five questions:


| #   | Question                                                      | What You Are Looking For                                            |
| --- | ------------------------------------------------------------- | ------------------------------------------------------------------- |
| 1   | **What does the company do, and why does the world need it?** | Simple, understandable business that solves a real problem          |
| 2   | **What is the moat (competitive advantage)?**                 | Something that protects the business from competition for 10+ years |
| 3   | **What are the growth triggers / tailwinds?**                 | Specific, identifiable forces that will make this business larger   |
| 4   | **What could go wrong?**                                      | Honest assessment of risks that could destroy the thesis            |
| 5   | **What makes the management trustworthy?**                    | Evidence of competence, integrity, and alignment with shareholders  |


### 9.2 The Moat Framework — What Protects the Business?


| Moat Type                        | Description                                            | Durability                      | Examples from Your Universe                                                                       |
| -------------------------------- | ------------------------------------------------------ | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Network Effects**              | Product becomes more valuable as more people use it    | Very High (10-20 yrs)           | MCX (liquidity attracts liquidity), POLICYBZR (more users → more insurers → more users)           |
| **Switching Costs**              | Customers face high cost/effort to switch providers    | High (10-15 yrs)                | KFINTECH & CAMS (MFs cannot easily change registrar), HDFCAMC (SIP investors rarely switch AMCs)  |
| **Cost Advantage / Scale**       | Produces at lower cost than competitors due to scale   | Medium-High (8-12 yrs)          | AMBER (23% AC market share = purchasing leverage), KSCL (largest hybrid seed company = R&D scale) |
| **Intangible Assets (Brand/IP)** | Brand recognition, patents, regulatory licenses        | Medium (5-10 yrs)               | HDFCAMC (HDFC brand trust), STARHEALTH (largest health insurer brand)                             |
| **Regulatory Moat**              | Government regulation limits competition               | High (until regulation changes) | MCX (exchange license), BSE, IEX (exchange monopoly/duopoly)                                      |
| **Toll-Booth / Platform**        | Earns a fee on every transaction regardless of outcome | Very High                       | KFINTECH (fee per folio), NAM_INDIA (% of AUM), MCX (per-trade fee)                               |


### 9.3 Growth Triggers / Tailwinds Identification


| Tailwind Category        | Description                                             | How to Identify                                                 | Duration   |
| ------------------------ | ------------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| **Structural / Secular** | Long-term macro trends lasting 10-20 years              | Government policy documents, industry reports, demographic data | Decades    |
| **Cyclical**             | Business cycle turns in the company's favor             | Industry cycle analysis, capacity utilization data              | 3-7 years  |
| **Company-Specific**     | New product, new market, acquisition, management change | Concalls, annual reports, management interviews                 | 2-5 years  |
| **Regulatory**           | Government policy creates demand or reduces competition | Budget announcements, regulatory notifications                  | Variable   |
| **Technological**        | New technology creates demand for company's products    | Industry trend analysis, R&D spending                           | 5-15 years |


### 9.4 The Investment Thesis Template

Write this before deploying your first tranche:

```
STOCK: [Name]
DATE: [Date]

BUSINESS SUMMARY (2-3 sentences):
[What the company does in plain English]

MOAT:
[Which moat type(s) from the framework above]

GROWTH TRIGGERS (next 10 years):
1. [Structural tailwind]
2. [Company-specific catalyst]
3. [Optionality — upside scenario]

KEY FINANCIAL STRENGTHS:
- ROCE: _____% (5yr avg)
- Revenue CAGR: _____% (5yr)
- PAT CAGR: _____% (5yr)
- Debt/Equity: _____
- FCF positive: Y/N

RISKS (what could break this thesis):
1. [Primary risk]
2. [Secondary risk]
3. [Tail risk]

MANAGEMENT ASSESSMENT:
[Competence, integrity, alignment — evidence-based]

BROKERAGE CONSENSUS:
[Summary of major brokerage views]

I WILL SELL IF:
1. [Measurable condition]
2. [Measurable condition]
3. [Measurable condition]
```

---

## 10. Additional Metrics You Should Not Miss

These are important metrics often overlooked by retail investors that can provide critical insights.

### 10.1 Operational Efficiency Metrics


| Metric                            | Formula                       | What It Tells You                                                                                      |
| --------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Employee Cost as % of Revenue** | Employee Cost / Revenue × 100 | Should be stable or declining. Increasing = losing efficiency                                          |
| **R&D as % of Revenue**           | R&D Spending / Revenue × 100  | Shows innovation investment. Too low (< 2%) = not investing in future. Too high (> 20%) = burning cash |


### 10.3 Capital Allocation Quality


| Metric               | What to Check                        | Good Sign                                           | Bad Sign                                          |
| -------------------- | ------------------------------------ | --------------------------------------------------- | ------------------------------------------------- |
| **Incremental ROCE** | Return on NEW capital being deployed | > 15%                                               | < 10%                                             |
| **Capex Discipline** | Are new projects generating returns? | New capacity reaching peak utilization in 2-3 years | Project delays, cost overruns, abandoned projects |


### 10.4 Industry-Specific Metrics


| Sector                  | Must-Track Metric                                             | Why                                        |
| ----------------------- | ------------------------------------------------------------- | ------------------------------------------ |
| **AMC**                 | AUM Growth vs Industry AUM Growth                             | Market share gain/loss                     |
| **AMC**                 | SIP Book Size (Monthly)                                       | Recurring revenue predictor                |
| **Insurance**           | Combined Ratio (Claims + Expense / Premium)                   | < 100% = underwriting profit               |
| **Insurance**           | Persistency Ratio (13th, 25th, 61st month)                    | Customer retention quality                 |
| **Banks/NBFCs**         | Credit Cost (Provisioning / Average Advances)                 | Asset quality indicator                    |
| **Banks/NBFCs**         | NIM (Net Interest Margin)                                     | Core profitability of lending              |
| **EMS / Manufacturing** | Order Book to Revenue Ratio                                   | Future revenue visibility                  |
| **EMS / Manufacturing** | Capacity Utilization %                                        | How close to needing new capex             |
| **Pharma / CDMO**       | ANDA / Pipeline filings                                       | Future revenue from new products           |
| **Exchanges**           | ADTV (Average Daily Traded Value)                             | Transaction revenue proxy                  |
| **SaaS / Tech**         | ARR (Annual Recurring Revenue) Growth                         | Predictable revenue base                   |
| **SaaS / Tech**         | Net Revenue Retention                                         | > 110% = customers spending more each year |
| **Hotels / QSR**        | Revenue per Available Room (RevPAR) / Same-Store Sales Growth | Organic growth quality                     |
| **Seeds / Agri**        | Market share by crop type                                     | Competitive position                       |


---

## 11. The Business Quality Scorecard — Master Framework

This scorecard combines all sections into a single weighted score for business quality.

### 11.1 Scoring Summary


| #   | Category                                            | Max Points | Source Section |
| --- | --------------------------------------------------- | ---------- | -------------- |
| 1   | **P&L Analysis (Income Statement)**                 | 9          | Section 2      |
| 2   | **OPM Expansion (Operating Leverage)**               | 5          | Section 3      |
| 3   | **Balance Sheet Strength**                           | 15         | Section 4.2    |
| 4   | **Capex Analysis**                                   | 9          | Section 4.4    |
| 5   | **Cash Flow Quality**                                | 18         | Section 5      |
| 6   | **Financial Ratios — Returns & Leverage (ROCE, ROE, D/E)** | 15   | Section 6.3    |
| 7   | **Financial Ratios — Efficiency (ROA, Turnover, WC)** | 15       | Section 6.4    |
| 8   | **Shareholding Pattern**                             | 15         | Section 7      |
| 9   | **Brokerage Consensus**                              | 12         | Section 8      |
|     | **TOTAL**                                            | **113**    |                |


### 11.2 Normalization to 100-Point Scale

To make the score comparable with the Valuation Score in `valuation_analysis.md`, normalize to 100:

```
Business Quality Score (out of 100) = (Raw Score / 113) × 100
```

### 11.3 Grade Thresholds


| Normalized Score | Grade             | Business Quality                                            | Action                                             |
| ---------------- | ----------------- | ----------------------------------------------------------- | -------------------------------------------------- |
| **85-100**       | A (Exceptional)   | Elite business with strong moat, governance, and financials | Proceed to valuation analysis with high conviction |
| **70-84**        | B (Good)          | Solid business with most fundamentals in place              | Proceed to valuation; standard conviction          |
| **55-69**        | C (Average)       | Some weaknesses but potential for improvement               | Proceed only if valuation is very attractive       |
| **40-54**        | D (Below Average) | Multiple fundamental weaknesses                             | **Avoid** — add to watchlist for improvement       |
| **Below 40**     | F (Poor)          | Significant fundamental problems                            | **Hard pass**                                      |


### 11.4 The Combined Decision — Business Quality + Valuation

Use both scores together for your final investment decision:


|                           | Valuation: Cheap (A/B)                        | Valuation: Fair (C)                              | Valuation: Expensive (D/F)                           |
| ------------------------- | --------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------- |
| **Business Quality: A**   | **BUY aggressively** — this is the sweet spot | **BUY** — great business at fair price           | **WAIT** — great business but price needs to correct |
| **Business Quality: B**   | **BUY** — good business at good price         | **BUY cautiously** — small tranches              | **WAIT** — let valuation become reasonable           |
| **Business Quality: C**   | **SMALL position** — turnaround bet           | **WATCHLIST** — needs improvement on both fronts | **AVOID** — nothing attractive here                  |
| **Business Quality: D/F** | **AVOID** — cheap for a reason                | **AVOID**                                        | **AVOID**                                            |

*Report generated on 26 March 2026. This framework draws from investment principles by Warren Buffett, Peter Lynch, Charlie Munger, Aswath Damodaran, and institutional equity research practices. All thresholds are guidelines and should be adapted to individual risk tolerance, sector norms, and market conditions. This is not financial advice.*