# The Valuation Analysis Framework
**Report Date:** 27 March 2026  
**Investment Philosophy:** Long-term value investing — buying quality businesses at fair or undervalued prices  
**Companion Reports:** `fundamental_analysis.md` (business quality) · `entry_exit_analysis.md` (entry/accumulation/exit protocol) · `quarterly_earnings_concall_analysis.md` (earnings tracking) · `stock_valuation_scorecard_report.md` (applied scorecards)  
**Disclaimer:** This report is for educational and personal decision-making purposes. It does not constitute financial advice. All investment decisions carry risk.

---

## Overview

Valuation analysis answers one question: **"Am I paying a fair price for this business?"**

This is SEPARATE from fundamental analysis (covered in `fundamental_analysis.md`), which answers: "Is this a quality business?" A stock must pass BOTH the Business Quality Scorecard (>= 70/100) AND this Valuation Scorecard (>= 65/100) before you invest.

This framework evaluates valuation through **seven lenses**, each designed to answer a specific investment question:

| # | Check | Core Question |
|---|---|---|
| 1 | PE vs. Historical PE | Is the market pricing this stock at a discount or premium to its own history? |
| 2 | PEG Ratio | Am I paying a fair price relative to the growth rate? |
| 3 | Intrinsic Value (DCF) | What is this business actually worth based on future earnings? |
| 4 | Price Worthiness | Is the current price justified for a business growing EPS at this rate? |
| 5 | Forward PE & Price Projection | What will the stock look like in 1-2 years if growth continues? |
| 6 | Growth Capability Assessment | Can this business sustain or improve its EPS growth rate? |
| 7 | Capital Deployment Signal | Should I deploy capital now, and at what price range? |

---

## 1. PE vs. Historical PE

**Core Question:** Is the market pricing this stock at a discount or premium to its own history?

**Rule: Current PE <= 5-Year Median PE**

Use the **median** PE (not the average) because the average gets skewed by extreme quarters.

**Why this works:** If a stock's 5-year median PE is 35 and it is currently trading at 25, the market is pricing it at a discount to its own history. This discount could be a temporary sentiment issue — your opportunity.

### Grading

| Condition | Grade | Interpretation |
|---|---|---|
| Current PE < 5-Year Median PE by 20%+ | A (Deep Value) | Strong buy zone — market is fearful |
| Current PE < 5-Year Median PE | B (Fair Value) | Good entry — pay fair or below-fair price |
| Current PE = 5-Year Median PE (±10%) | C (Fairly Valued) | Proceed only with strong growth momentum |
| Current PE > 5-Year Median PE by 10-30% | D (Expensive) | Wait for correction or exceptional catalysts |
| Current PE > 5-Year Median PE by 30%+ | F (Overvalued) | Do not enter — no margin of safety |

### How to Calculate

```
PE Discount/Premium (%) = [(Current PE - 5-Year Median PE) / 5-Year Median PE] × 100
```

**Example:** Current PE = 28, 5-Year Median PE = 35  
→ Premium = [(28 - 35) / 35] × 100 = -20% → Grade A (Deep Value)

**Data Source:** Screener.in (Stock page → Ratios → PE chart / 5-year history), Trendlyne (Valuation tab)

**Important caveat:** PE is meaningless for loss-making companies (negative PE). For these, skip to the Price-to-Sales or EV/EBITDA checks in the sector-specific section.

---

## 2. PEG Ratio

**Core Question:** Am I paying a fair price relative to the earnings growth rate?

**Rule: PEG <= 1.5**

The PEG ratio adjusts PE for growth. Peter Lynch considered PEG < 1 as undervalued and PEG around 1 as fairly valued.

### Formula

```
PEG = Current PE / EPS CAGR (3-Year, %)
```

**Example:** Stock has PE of 30, 3-year EPS CAGR of 25%  
→ PEG = 30 / 25 = 1.2 — Acceptable

### Grading

| PEG Range | Grade | Interpretation | Action |
|---|---|---|---|
| PEG < 0.5 | A+ | Significantly undervalued relative to growth | Aggressive buy (rare; verify growth estimates aren't optimistic) |
| PEG 0.5-1.0 | A | Undervalued — Lynch's sweet spot | Strong buy |
| PEG 1.0-1.5 | B | Fairly valued to slightly expensive | Buy if other metrics are strong |
| PEG 1.5-2.0 | C | Expensive relative to growth | Only buy if there is a strong qualitative catalyst (new market, monopoly position, etc.) |
| PEG > 2.0 | F | Overvalued | Do not buy — you are overpaying for growth |

### Why PEG <= 2 is Too Lenient

At PEG 2, you are paying 2x the price justified by earnings growth. For example, a stock with 20% growth at PEG 2 has a PE of 40 — this means you need 4+ years of uninterrupted high growth just to grow into the valuation. Any stumble and the stock can correct 30-40%. Tightening to PEG <= 1.5 significantly improves your margin of safety.

### Which Growth Rate to Use

| Priority | Source | When to Use |
|---|---|---|
| **Best** | Trailing 3-year EPS CAGR | Most reliable; based on actual delivered performance |
| **Good** | Forward 2-3 year analyst consensus growth estimate | Use when business is in an inflection phase (turnaround, new segment) |
| **Avoid** | Single-year growth | Too noisy; a single strong/weak quarter can distort |

### How to Calculate EPS CAGR (3-Year)

```
EPS CAGR (3yr) = [(EPS Year 3 / EPS Year 0) ^ (1/3)] - 1
```

**Example:** EPS grew from ₹12 (FY22) to ₹22 (FY25)  
→ CAGR = [(22/12)^(1/3)] - 1 = 22.4%

**Data Source:** Screener.in (Profit & Loss → EPS row, last 3-5 years)

---

## 3. Advanced Valuation: Intrinsic Value

**Core Question:** What is this business actually worth based on its future earning power?

Intrinsic value estimation provides an anchor independent of market sentiment. The goal is to estimate what the stock SHOULD be worth and compare it to what the market is charging.

### Method: Earnings Power Value (Simplified DCF)

```
Step 1: Project EPS forward
  Future EPS = Current TTM EPS × (1 + EPS CAGR 3yr)^n years

Step 2: Apply exit PE (use 5-Year Median PE as the "fair" PE)
  Future Price = Future EPS × 5-Year Median PE

Step 3: Discount back to present value
  Intrinsic Value = Future Price / (1 + Discount Rate)^n years
```

**Discount Rate:** Use 12% for Indian equities (risk-free rate ~7% + equity risk premium ~5%)

### Worked Example

| Input | Value |
|---|---|
| Current TTM EPS | ₹20 |
| EPS CAGR (3-year trailing) | 20% |
| 5-Year Median PE | 30x |
| Projection Period | 5 years |
| Discount Rate | 12% |

**Calculation:**
- EPS in 5 years: ₹20 × (1.20)^5 = ₹49.8
- Fair price in 5 years: ₹49.8 × 30 = ₹1,494
- Discounted to today: ₹1,494 / (1.12)^5 = ₹848

**Interpretation:** If the current market price (CMP) is below ₹848, the stock is undervalued on an intrinsic basis.

### Margin of Safety

| CMP vs. Intrinsic Value | Grade | Interpretation |
|---|---|---|
| CMP < Intrinsic Value by 30%+ | A (Deep Margin of Safety) | Very strong buy — significant undervaluation |
| CMP < Intrinsic Value by 15-30% | B (Good Margin of Safety) | Buy — reasonable margin for estimation errors |
| CMP within ±15% of Intrinsic Value | C (Fairly Valued) | Proceed if other checks are strong |
| CMP > Intrinsic Value by 15-30% | D (Overpriced) | Wait for correction |
| CMP > Intrinsic Value by 30%+ | F (Significantly Overpriced) | Do not buy |

**Important:** DCF/intrinsic value estimates are only as good as your growth assumptions. Always apply a margin of safety of at least 25-30% to account for estimation errors.

---

## 4. Price Worthiness Analysis

**Core Question:** Is the current stock price justified for a business growing earnings at this rate, or should I wait for a correction?

This check combines growth rate with valuation to determine if the market is asking you to overpay for the growth the business is delivering.

### The Price Worthiness Test

```
Justified PE = EPS CAGR (3yr) × PEG Fair Value (1.0-1.5)
Price Worthiness Ratio = Current PE / Justified PE
```

If Price Worthiness Ratio > 1.0, you are paying MORE than the growth justifies.

### Worked Example

| Input | Value |
|---|---|
| EPS CAGR (3yr) | 25% |
| Justified PE at PEG 1.0 | 25x |
| Justified PE at PEG 1.5 | 37.5x |
| Current PE | 45x |

**Price Worthiness Ratio:** 45 / 37.5 = 1.2 → You are paying 20% more than justified by growth.

### Decision Framework

| Price Worthiness Ratio | Grade | Verdict |
|---|---|---|
| < 0.7 | A (Underpriced for Growth) | **Buy aggressively** — market is not recognizing the growth |
| 0.7 - 1.0 | B (Fairly Priced for Growth) | **Buy** — the price is justified by the earnings trajectory |
| 1.0 - 1.3 | C (Slightly Overpriced) | **Buy cautiously** — only if growth triggers are very strong and you have high conviction |
| 1.3 - 1.7 | D (Overpriced for Growth) | **Wait for correction** — the price implies growth acceleration that may not materialize |
| > 1.7 | F (Significantly Overpriced) | **Do not buy** — price correction of 30%+ needed before entry makes sense |

### The Correction Target

When Price Worthiness says "wait," calculate the price at which the stock becomes a buy:

```
Target Entry Price = CMP × (1 / Price Worthiness Ratio)
Required Correction (%) = (1 - 1/Price Worthiness Ratio) × 100
```

**Example:** CMP = ₹1,200, Price Worthiness Ratio = 1.4  
→ Target Entry Price = ₹1,200 × (1/1.4) = ₹857  
→ Required Correction = (1 - 1/1.4) × 100 = 28.6%  
→ **Wait for a ~29% correction to ₹857 before deploying capital**

---

## 5. Forward PE & Price Projection

**Core Question:** If growth continues at the current trajectory, where will the stock trade in 1-2 years?

This check projects the stock's future PE (cheapness) and price assuming the trailing EPS growth rate continues and the market re-rates the stock to its 5-year median PE.

### Calculation Method

```
Step 1: Project EPS forward
  EPS (1yr forward) = TTM EPS × (1 + EPS CAGR 3yr)
  EPS (2yr forward) = TTM EPS × (1 + EPS CAGR 3yr)^2

Step 2: Calculate forward PE at current price
  Forward PE (1yr) = CMP / EPS (1yr forward)
  Forward PE (2yr) = CMP / EPS (2yr forward)

Step 3: Calculate expected price at 5-Year Median PE
  Expected Price (1yr) = EPS (1yr forward) × 5-Year Median PE
  Expected Price (2yr) = EPS (2yr forward) × 5-Year Median PE

Step 4: Calculate upside/downside
  Expected Return (1yr) = [(Expected Price 1yr / CMP) - 1] × 100
  Expected Return (2yr) = [(Expected Price 2yr / CMP) - 1] × 100
```

### Worked Example

| Input | Value |
|---|---|
| TTM EPS | ₹30 |
| CMP | ₹1,500 |
| Current PE | 50x |
| EPS CAGR (3yr) | 25% |
| 5-Year Median PE | 40x |

| Metric | 1-Year Forward | 2-Year Forward |
|---|---|---|
| Projected EPS | ₹30 × 1.25 = ₹37.5 | ₹30 × 1.25² = ₹46.9 |
| Forward PE (at CMP) | ₹1,500 / ₹37.5 = 40x | ₹1,500 / ₹46.9 = 32x |
| Expected Price (at Median PE) | ₹37.5 × 40 = ₹1,500 | ₹46.9 × 40 = ₹1,876 |
| Expected Return vs. CMP | 0% | +25% |

**Interpretation:** At the current price of ₹1,500, the 1-year forward PE is 40x (which equals the median PE — fairly valued looking 1 year ahead). In 2 years, if the stock trades at its median PE, expected price is ₹1,876 — a 25% return.

### Grading

| Forward PE (1yr) vs. 5-Year Median PE | Grade | Interpretation |
|---|---|---|
| Forward PE < Median PE by 20%+ | A | Deeply undervalued on a forward basis — strong buy |
| Forward PE < Median PE | B | Undervalued forward — buy; growth will make today's price look cheap |
| Forward PE ≈ Median PE (±10%) | C | Fairly valued forward — neutral; growth priced in |
| Forward PE > Median PE by 10-30% | D | Still expensive even 1 year forward — wait |
| Forward PE > Median PE by 30%+ | F | Overvalued even on forward earnings — do not buy |

**Key Insight:** If the 1-year forward PE is below the 5-year median PE, it means the stock is "growing into" its valuation. Today's price will look reasonable or cheap within a year if the company delivers on growth.

---

## 6. Growth Capability Assessment

**Core Question:** Can this company sustain or improve its EPS CAGR (3-year) going forward? What are the growth triggers?

Valuation multiples are meaningless without growth. This check evaluates whether the earnings growth rate used in the above calculations is sustainable, improving, or at risk of decelerating.

### Growth Evidence Checklist

Evaluate each of the following and assign a confidence score:

| # | Growth Evidence | What to Look For | Source |
|---|---|---|---|
| 1 | **Revenue Growth Consistency** | Revenue CAGR (3yr) >= 15%; no sharp YoY decline in any year | Screener P&L |
| 2 | **Operating Leverage** | OPM expanding or stable over last 8 quarters | Screener quarterly results |
| 3 | **Order Book / Pipeline Visibility** | Order book >= 2x annual revenue; management guidance affirms growth | Concall transcripts |
| 4 | **Sector Tailwinds** | Industry growing at 15%+ CAGR; government policy support; regulatory tailwinds | Industry reports, concalls |
| 5 | **Market Share Gains** | Company growing faster than industry; gaining share from competitors | Concalls, brokerage reports |
| 6 | **New Revenue Streams** | New products, geographies, segments, or customer wins in the last 4 quarters | Concalls, annual reports |
| 7 | **Capacity Expansion** | Capex deployed or announced; new plant commissioning timelines | Annual reports, concalls |
| 8 | **Management Guidance** | Management reiterating or raising growth guidance for next 2-3 years | Latest concall transcript |
| 9 | **R&D / Innovation Pipeline** | Spending on R&D; patent filings; new product launches | Annual report, concalls |
| 10 | **Competitive Moat Strengthening** | Switching costs, network effects, brand, or regulatory barriers increasing | Fundamental analysis |

### Growth Sustainability Grading

| Evidence Count (out of 10) | Grade | Confidence in Forward Growth |
|---|---|---|
| 8-10 triggers present | A (High Confidence) | Growth rate will likely sustain or improve |
| 6-7 triggers present | B (Good Confidence) | Growth rate likely to sustain |
| 4-5 triggers present | C (Moderate Confidence) | Growth may sustain but risks exist — use conservative estimates |
| 2-3 triggers present | D (Low Confidence) | Growth deceleration likely — reduce forward projections by 20-30% |
| 0-1 triggers present | F (No Confidence) | Do not rely on forward growth — the party may be over |

### Growth Deceleration Red Flags

If ANY of the following are true, reduce your forward growth assumptions by 30-50%:

| Red Flag | Why It Matters |
|---|---|
| Revenue growth has slowed in each of the last 3 quarters | Deceleration trend underway |
| OPM has contracted for 3+ consecutive quarters | Margin compression destroys earnings growth even if revenue holds |
| Management lowered guidance or used hedging language | They see risks you may not |
| Key customer lost or revenue concentration > 30% in one client | Single-client dependency is a fragile growth model |
| Competition has intensified (new entrants, price wars) | Market share defense often comes at the cost of margins |

---

## 7. Capital Deployment Signal

**Core Question:** Should I deploy a tranche into this stock now? If yes, what is the optimal price range?

This check synthesizes all previous checks into a single deployment decision with a specific price range.

### Deployment Decision Matrix

| Valuation Score (from Scorecard) | Business Quality Score | Deployment Signal |
|---|---|---|
| 80-100 (Grade A) | >= 85 (Quality A) | **Deploy immediately** — full position over 5-6 tranches |
| 80-100 (Grade A) | 70-84 (Quality B) | **Deploy immediately** — standard 5 tranches |
| 65-79 (Grade B) | >= 85 (Quality A) | **Deploy** — standard 5 tranches |
| 65-79 (Grade B) | 70-84 (Quality B) | **Deploy** — standard 5 tranches |
| 50-64 (Grade C) | >= 85 (Quality A) | **Deploy cautiously** — max 3 tranches |
| 50-64 (Grade C) | 70-84 (Quality B) | **Small position** — max 2 tranches |
| 35-49 (Grade D) | Any | **Do not deploy** — add to watchlist; wait for correction |
| Below 35 (Grade F) | Any | **Hard pass** — no margin of safety |

### Optimal Price Range Calculation

When the scorecard says "deploy," calculate the buy range (low-high) for capital deployment:

```
Ideal Buy Price (Low)  = Intrinsic Value × 0.70  (30% margin of safety)
Ideal Buy Price (High) = Intrinsic Value × 0.85  (15% margin of safety)
```

**Alternative method using PE-based range:**

```
Buy Price (Low)  = TTM EPS × (5-Year Median PE × 0.80)   [PE at 20% discount to median]
Buy Price (High) = TTM EPS × (5-Year Median PE × 1.00)    [PE at median]
```

### Worked Example

| Input | Value |
|---|---|
| TTM EPS | ₹25 |
| 5-Year Median PE | 35x |
| Intrinsic Value (from Section 3) | ₹1,100 |
| CMP | ₹950 |

**Intrinsic Value Method:**
- Ideal Buy (Low): ₹1,100 × 0.70 = ₹770
- Ideal Buy (High): ₹1,100 × 0.85 = ₹935

**PE-Based Method:**
- Buy (Low): ₹25 × (35 × 0.80) = ₹25 × 28 = ₹700
- Buy (High): ₹25 × (35 × 1.00) = ₹25 × 35 = ₹875

**Combined Range:** ₹700 – ₹935

**Verdict at CMP ₹950:** Slightly above the buy range ceiling. Deploy T1 as a scout position; wait for a 5-10% correction for full deployment.

---

## 8. Sector-Specific Valuation Metrics

Not all metrics work for all sectors. Here is which metric to prioritize by sector:

| Sector | Primary Metric | Secondary Metric | Avoid |
|---|---|---|---|
| **IT Services** (KPITTECH, PERSISTENT, COFORGE, NEWGEN) | PE, PEG | EV/EBITDA, Revenue per employee | P/B (irrelevant for asset-light) |
| **Banks** (IDFCFIRSTB, FEDERALBNK, RBLBANK) | P/B, ROE, ROA | NPA ratios, NIM, CAR | PE (distorted by provisioning) |
| **NBFCs/Housing Finance** (HOMEFIRST, AAVAS, FIVESTAR) | P/B, ROE, AUM growth | Spread, Cost of borrowing, NPA | PE alone (cyclical earnings) |
| **Pharma/CDMO** (SAILIFE, DCAL, BLUEJET) | EV/EBITDA, PEG | Pipeline value, EBITDA margins | PE (lumpy earnings from contracts) |
| **Manufacturing/Capital Goods** (KAYNES, DIXON, AMBER) | PE, PEG, ROCE | Order book/revenue ratio, capacity utilization | P/B (asset values fluctuate) |
| **Real Estate** (ANANTRAJ, MAHLIFE) | NAV (Net Asset Value), P/B | Pre-sales growth, launch pipeline | PE (lumpy revenue recognition) |
| **Energy/Solar** (WAAREEENER, PREMIERENE, IEX) | EV/EBITDA, PE | Capacity addition, order book | P/S alone (capital intensive) |
| **Insurance** (STARHEALTH) | EV (Embedded Value), P/EV | Combined ratio, persistency | PE (accounting conventions differ) |
| **AMC / Financial Tech** (HDFCAMC, NAM_INDIA, KFINTECH, MCX) | PE, PEG | AUM growth, market share | P/B (intangible-driven value) |
| **Consumer/Hotels** (LEMONTREE, AWFIS, RBA) | EV/EBITDA, PE | Revenue per unit (room/seat), occupancy | P/B (intangibles drive value) |

---

## 9. The Valuation Scorecard

Score each stock across ALL seven valuation checks. This scorecard works alongside the Business Quality Score from `fundamental_analysis.md` to make the final investment decision.

### 9.1 Scoring Table

| # | Check | Max Points | Scoring Guide |
|---|---|---|---|
| 1 | **PE vs. 5-Year Median PE** | 15 | 15 if PE < Median by 20%+ (Grade A); 12 if PE < Median (Grade B); 8 if PE ≈ Median ±10% (Grade C); 4 if PE > Median by 10-30% (Grade D); 0 if PE > Median by 30%+ (Grade F) |
| 2 | **PEG Ratio** | 15 | 15 if PEG < 0.5; 13 if PEG 0.5-1.0; 10 if PEG 1.0-1.5; 5 if PEG 1.5-2.0; 0 if PEG > 2.0 |
| 3 | **Intrinsic Value (Margin of Safety)** | 15 | 15 if CMP < IV by 30%+; 12 if CMP < IV by 15-30%; 8 if CMP within ±15% of IV; 4 if CMP > IV by 15-30%; 0 if CMP > IV by 30%+ |
| 4 | **Price Worthiness** | 15 | 15 if ratio < 0.7; 12 if ratio 0.7-1.0; 8 if ratio 1.0-1.3; 4 if ratio 1.3-1.7; 0 if ratio > 1.7 |
| 5 | **Forward PE (1yr) vs. Median PE** | 15 | 15 if Fwd PE < Median by 20%+; 12 if Fwd PE < Median; 8 if Fwd PE ≈ Median ±10%; 4 if Fwd PE > Median by 10-30%; 0 if Fwd PE > Median by 30%+ |
| 6 | **Growth Capability** | 15 | 15 if 8-10 triggers (Grade A); 12 if 6-7 triggers (Grade B); 8 if 4-5 triggers (Grade C); 4 if 2-3 triggers (Grade D); 0 if 0-1 triggers (Grade F) |
| 7 | **Capital Deployment Signal** | 10 | 10 if CMP within ideal buy range (Low-High); 7 if CMP is 0-10% above buy range; 4 if CMP is 10-20% above buy range; 0 if CMP > 20% above buy range |
| | **TOTAL** | **100** | |

### 9.2 Grade Thresholds

| Score | Grade | Action |
|---|---|---|
| **80-100** | A (Attractively Valued) | Strong buy — deploy tranches aggressively |
| **65-79** | B (Fairly Valued) | Buy — follow normal tranche protocol |
| **50-64** | C (Neutral) | Buy cautiously — only if Business Quality Score is A |
| **35-49** | D (Expensive) | **Do not buy** — add to watchlist; wait for correction |
| **Below 35** | F (Overvalued) | **Hard pass** — no margin of safety |

### 9.3 The Combined Investment Decision

The final BUY/NO-BUY decision uses BOTH the Business Quality Score (`fundamental_analysis.md`) and the Valuation Score (this framework):

| | Valuation A (80-100) | Valuation B (65-79) | Valuation C (50-64) | Valuation D/F (<50) |
|---|---|---|---|---|
| **Quality A (85-100)** | **STRONG BUY** — deploy all tranches | **BUY** — standard tranches | **BUY cautiously** — 3 tranches max | **WAIT** — great business, wrong price |
| **Quality B (70-84)** | **BUY** — standard tranches | **BUY** — standard tranches | **SMALL position** — 2 tranches max | **WAIT** — need price correction |
| **Quality C (55-69)** | **SMALL position** — turnaround bet | **WATCHLIST** | **AVOID** | **AVOID** |
| **Quality D/F (<55)** | **AVOID** — cheap for a reason | **AVOID** | **AVOID** | **AVOID** |

---

## 10. Applying the Framework: Evaluation Template

Use this template for every stock you evaluate. Fill in the data, calculate scores, and arrive at the verdict.

### Stock Evaluation Worksheet

```
═══════════════════════════════════════════════════════════════
STOCK: ________________  CMP: ₹_______  DATE: ________________
TTM EPS: ₹_______  EPS CAGR (3yr): _______%
Current PE: _______  5-Year Median PE: _______
═══════════════════════════════════════════════════════════════

CHECK 1: PE vs. Historical PE
  PE Discount/Premium: [(_____ - _____) / _____] × 100 = _____% 
  Grade: _____  Score: _____/15

CHECK 2: PEG Ratio
  PEG = _____ / _____ = _____
  Grade: _____  Score: _____/15

CHECK 3: Intrinsic Value
  Future EPS (5yr) = ₹_____ × (1 + _____%)^5 = ₹_____
  Future Price = ₹_____ × _____ (Median PE) = ₹_____
  Intrinsic Value = ₹_____ / (1.12)^5 = ₹_____
  CMP vs IV: _____% [above/below]
  Grade: _____  Score: _____/15

CHECK 4: Price Worthiness
  Justified PE (at PEG 1.5) = _____ × 1.5 = _____
  Price Worthiness Ratio = _____ / _____ = _____
  If waiting: Target Entry = ₹_____ × (1/_____) = ₹_____
  Grade: _____  Score: _____/15

CHECK 5: Forward PE & Price Projection
  EPS (1yr fwd) = ₹_____ × (1 + _____%) = ₹_____
  EPS (2yr fwd) = ₹_____ × (1 + _____%)² = ₹_____
  Fwd PE (1yr) = ₹_____ / ₹_____ = _____x
  Fwd PE (2yr) = ₹_____ / ₹_____ = _____x
  Expected Price (1yr, at Median PE) = ₹_____ × _____ = ₹_____
  Expected Price (2yr, at Median PE) = ₹_____ × _____ = ₹_____
  Expected Return (1yr): _____% | (2yr): _____%
  Grade: _____  Score: _____/15

CHECK 6: Growth Capability Assessment
  Growth triggers present: _____/10
  Key triggers: ________________________________
  Key risks: ________________________________
  Grade: _____  Score: _____/15

CHECK 7: Capital Deployment Signal
  Ideal Buy Range (Low): ₹_____  (High): ₹_____
  CMP ₹_____ is [within/above/below] the buy range
  Deploy: YES / WAIT / NO
  Grade: _____  Score: _____/10

═══════════════════════════════════════════════════════════════
VALUATION SCORE: _____/100  |  GRADE: _____
BUSINESS QUALITY SCORE: _____/100 (from fundamental_analysis.md)
═══════════════════════════════════════════════════════════════

COMBINED DECISION:
[ ] STRONG BUY — deploy all tranches aggressively
[ ] BUY — follow standard tranche protocol
[ ] BUY CAUTIOUSLY — limited tranches
[ ] WAIT — great business, wrong price; target entry: ₹_____
[ ] AVOID — fails valuation framework

OPTIMAL CAPITAL DEPLOYMENT:
  Buy Range: ₹_____ to ₹_____
  Tranches: _____ of ₹25,000 = ₹_____
  T1 trigger: ________________________________
═══════════════════════════════════════════════════════════════
```

---

## 11. Final Verdict Decision Guide

After completing the scorecard, use this decision guide for the ultimate buy/wait/avoid signal:

### When to BUY (Valuation Score >= 65)

The business is fairly to attractively valued. Deploy capital using the tranche strategy from `entry_exit_analysis.md`:
- **Score 80+:** Deploy T1+T2 immediately; accelerate the accumulation schedule
- **Score 65-79:** Deploy T1 as scout; follow standard quarterly validation before subsequent tranches
- **Score 50-64 with Quality A:** Deploy T1 only; patience required — the business quality will create value but the price is not yet ideal

### When to WAIT (Valuation Score 35-64, Quality >= 70)

The business is good but the price is not right. This is NOT a rejection — it is discipline:
- Calculate your **target entry price** using the Price Worthiness and Buy Range calculations
- Set **price alerts** on Screener.in or your brokerage app
- **Re-evaluate** after every quarterly result — earnings growth can "grow into" an expensive valuation
- **Do not chase** — the market will give you opportunities; corrections happen every 12-18 months

### When to AVOID (Valuation Score < 35 OR Quality < 55)

The stock fails on hard numbers. No amount of narrative or hype justifies buying:
- If it is a valuation fail (good business, terrible price): **Watchlist** for future correction
- If it is a quality fail (bad business, any price): **Permanent avoid** — cheap stocks are often cheap for a reason
- **Revisit watchlist stocks** quarterly; they graduate to "buy" when valuation improves

---

*Report generated on 27 March 2026. This framework draws from investment principles by Warren Buffett (margin of safety, intrinsic value), Peter Lynch (PEG ratio, growth at reasonable price), Charlie Munger (quality at fair price), and Aswath Damodaran (DCF, forward valuation). All thresholds are guidelines and should be adapted to individual risk tolerance and market conditions. This is not financial advice.*
