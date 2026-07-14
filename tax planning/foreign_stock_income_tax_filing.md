# Filing Indian Taxes on Foreign (NYSE) RSUs, ESPP & Dividends

**Report Date:** 13 July 2026
**Purpose:** A step-by-step guide to filing your Indian ITR for FY 2025-26 (AY 2026-27) when you hold US/NYSE-listed shares from RSUs, ESPP, and dividends — covering how to compute the tax and which USD→INR rate to apply on each transaction
**Applies to:** A salaried **Resident & Ordinarily Resident (ROR)** individual, no business income
**Companion Reports:** `fundamental_analysis.md` · `valuation_analysis.md` · `entry_exit_analysis.md`
**Disclaimer:** This document is for educational and personal decision-making purposes only. It is **not tax or legal advice**. Tax law changes and has interpretive grey areas — confirm material amounts and any ambiguous position with a qualified Chartered Accountant before filing.

---

## 1. Overview — the two-layer model

Your income from foreign shares is taxed in **two separate layers**, and your Form 16 only covers the first one.

| Layer | What it is | Where it appears | Who reports it |
|---|---|---|---|
| **Layer 1 — Perquisite** | RSU vesting value + ESPP discount, taxed as **salary** | Form 16 (Part B), TDS deducted | Your employer (already done) |
| **Layer 2 — Investment income** | Capital gains on sale + dividends + foreign-asset disclosure + foreign tax credit | **NOT in Form 16** | **You, at ITR filing** |

So the perquisite on vesting/allotment is likely already in your Form 16 (verify it). What you must add yourself at filing time: **capital gains when you sell**, **dividends received**, **Schedule FA disclosure**, and the **Foreign Tax Credit** for US tax withheld.

**Which ITR form:** **ITR-2** — it is the correct form for a salaried resident with capital gains and foreign assets but no business/professional income. (ITR-3 is needed only if you have business income, e.g. F&O or intraday treated as business.)

**Due date (AY 2026-27, non-audit):** **31 July 2026**. Belated/revised return allowed up to **31 December 2026**.

---

## 2. RSUs — two taxable events

**Event (a): Vesting → salary perquisite (already in Form 16).**
On the vesting date, the Fair Market Value (FMV) of the vested shares (less any price paid, normally nil for RSUs) is taxed as a **salary perquisite** under **Section 17(2)(vi)**. Your Indian employer deducts TDS and reports it in Form 16. **Action: confirm this figure is present in your Form 16.**

**Event (b): Sale → capital gains (you report at ITR).**
When you sell, compute:

```
Capital gain = Sale price − Cost of acquisition
Cost of acquisition = FMV that was taken as the perquisite value at vesting   (Section 49(2AA))
```

Using the vesting FMV as the cost prevents double taxation. Report this in **Schedule CG**. Holding period runs **from the vesting date** (not the grant date).

---

## 3. ESPP — two taxable events

**Allotment → salary perquisite (already in Form 16).**
On the purchase/allotment date:

```
Perquisite = FMV on purchase date − discounted price you actually paid
```

Your ~15% discount is the taxable perquisite, taxed as salary under Section 17(2)(vi). Verify it in Form 16.

**Sale → capital gains (you report at ITR).**
Same mechanism as RSUs — cost of acquisition = **FMV on the purchase date** (Section 49(2AA)). Report in Schedule CG. Holding period runs from the **purchase/allotment date**.

---

## 4. Capital gains rules for foreign shares (FY 2025-26)

Foreign-listed shares are **not listed on a recognised Indian stock exchange**, so for Indian tax they are treated as **unlisted shares** — governed by **Section 112, NOT Section 112A**.

| Rule | Treatment for foreign (NYSE) shares |
|---|---|
| Classification | **Unlisted** → Section 112 (not 112A) |
| ₹1.25 lakh LTCG exemption | **Not available** (that is exclusive to Sec 112A listed shares) |
| Holding period cutoff | **> 24 months = Long-term (LTCG)**; **≤ 24 months = Short-term (STCG)** |
| LTCG rate (transfers on/after 23 Jul 2024) | **12.5% without indexation** (Section 112) |
| STCG rate | **Your applicable slab rate** (the Sec 111A 20% concessional rate does NOT apply) |

Holding period starts from the **vest/purchase date**. Compute gains **lot by lot** (each vest tranche / each ESPP purchase is a separate lot with its own acquisition date and cost).

---

## 5. Foreign dividends

- **Taxable head:** **Income from Other Sources** → report in **Schedule OS** at your **applicable slab rate**. There is no special/flat rate.
- Report the **gross dividend** (the full amount *before* US tax was withheld), converted to INR.
- **US withholding:** The US withholds tax on dividends paid to Indian residents. Under **Article 10 of the India-US DTAA**, the rate for individual investors is capped at **25%** (default is 30%). **File Form W-8BEN with your US broker** to secure the 25% treaty rate. You reclaim this 25% as a Foreign Tax Credit (Section 6).

---

## 6. Foreign Tax Credit (FTC) — for the US tax you already paid

You can offset the US tax withheld against your Indian tax on the same income, under **Section 90 / Rule 128**.

**Steps:**
1. **File Form 67 online** on the income-tax portal — this is **mandatory** to claim FTC. File it **before or along with** your ITR (statutory outer limit: end of the assessment year, i.e. **31 December 2026**, provided the ITR itself is filed on time).
2. Report the foreign income and foreign tax paid, country-wise, in **Schedule FSI** (Foreign Source Income).
3. Claim the relief in **Schedule TR** (Tax Relief).

**Credit amount = lower of** (a) Indian tax payable on that foreign income, or (b) the US tax actually paid. If US tax (25%) exceeds the Indian tax on that income, the excess is **not refunded and not carried forward**.

---

## 7. Schedule FA — mandatory foreign-asset disclosure

As an ROR holding foreign shares, you **must disclose them in Schedule FA even if you never sold and earned nothing** — there is **no minimum value threshold**.

- **⚠ Reporting period = CALENDAR YEAR 2025 (1 Jan 2025 – 31 Dec 2025)**, NOT the Indian financial year. This is the key exception versus every other ITR schedule.
- **Where:** brokerage/custodial account → **Table A2**; each equity holding (one row per security) → **Table A3**.
- **Values to report (in INR):** initial/acquisition value, **peak value** during CY2025, **closing balance** on 31 Dec 2025, gross dividend received, and sale proceeds (if any).
- **Black Money Act, 2015 penalties:** non-disclosure attracts a flat **₹10 lakh per year** (Section 43); willful evasion can lead to prosecution. **Carve-out (from 1 Oct 2024):** the ₹10 lakh penalty does not apply where the aggregate value of non-immovable foreign assets does **not exceed ₹20 lakh** — but **the disclosure itself remains mandatory regardless of value.**

---

## 8. USD → INR conversion — Rule 115 (SBI TT buying rate)

Rule 115 of the Income Tax Rules converts foreign-currency income to INR using the **State Bank of India Telegraphic Transfer (TT) buying rate**, on a "specified date" that **depends on the head of income**:

| Head of income | Convert at SBI TT buying rate as of… |
|---|---|
| **Salary / perquisite** (RSU vest, ESPP allotment) | **last day of the month *before*** the month the salary is due |
| **Capital gains** (sale) | **last day of the month *before*** the month the asset is transferred/sold |
| **Dividends** | **last day of the month *before*** the month the dividend is declared/paid |

**Example of the timing rule:** an RSU that vests in **March 2025** → use the SBI TT buying rate as of **28 Feb 2025**. Shares sold in **June 2026** → use the rate as of **31 May 2026**.

**Cost of acquisition — practical treatment (View A):** the cost is already fixed in INR at the vest/allotment stage (the perquisite value in Form 16, per Sec 49(2AA)), converted at the salary rate for the vest month. At sale, only the **sale consideration** is converted (at the sale-month-prior rate). So:

```
LTCG/STCG (INR) = (Sale USD × sale-month-prior TTBR) − (Vest FMV USD × vest-month-prior TTBR)
```

> **Grey area:** Rule 115's literal capital-gains wording keys conversion to the transfer month, which some read as applying one transfer-date rate to the whole computation (View B). View A (above) is the prevailing practitioner approach and is consistent with Sec 49(2AA). For material amounts, confirm with a CA.

**Where to get the rate:** the published SBI TT buying reference rate for the relevant month-end.

---

## 9. Worked example (illustrative round numbers)

Assume 100 RSUs vest and are later sold, plus a dividend. (Rates below are placeholders — use the actual SBI TTBR for your dates.)

**Vesting — Layer 1 (in your Form 16):**
| Item | Value |
|---|---|
| Vest date | March 2025 |
| FMV per share | $50 → 100 shares = **$5,000** |
| SBI TTBR (28 Feb 2025, month before) | ₹86.00 |
| **Perquisite in Form 16 = cost of acquisition** | $5,000 × 86 = **₹4,30,000** |

**Sale — Layer 2 (Schedule CG):**
| Item | Value |
|---|---|
| Sale date | June 2026 |
| Sale price per share | $70 → 100 shares = **$7,000** |
| SBI TTBR (31 May 2026, month before) | ₹88.00 |
| Sale consideration | $7,000 × 88 = **₹6,16,000** |
| Cost of acquisition (from vest) | **₹4,30,000** |
| **Capital gain** | **₹1,86,000** |

Holding period Mar 2025 → Jun 2026 ≈ 15 months → **≤ 24 months = STCG** → taxed at your **slab rate**. (Had it been held > 24 months, it would be **LTCG @ 12.5% without indexation** = ₹1,86,000 × 12.5% ≈ ₹23,250.)

**Dividend + FTC (Schedule OS + FSI + TR):**
| Item | Value |
|---|---|
| Gross dividend | $200 |
| SBI TTBR (dividend month−1) | ₹87.00 → **₹17,400** (report gross in Schedule OS) |
| US tax withheld @ 25% (DTAA) | $50 → ₹4,350 |
| Indian tax on ₹17,400 (say 30% slab) | ₹5,220 |
| **FTC allowed = lower of (₹5,220, ₹4,350)** | **₹4,350** |
| Net additional Indian tax on dividend | ₹5,220 − ₹4,350 = **₹870** |

**Regime note:** foreign **LTCG stays 12.5%** regardless of regime. The **slab-rate** portions (STCG on foreign shares + dividends) follow whichever regime you file under — pick the regime that minimises your total liability across your whole return, then apply its slabs to these items.

---

## 10. Filing checklist (in order)

1. **File Form W-8BEN** with your US broker (so dividends are withheld at 25%, not 30%). *(Do once; before dividends are paid.)*
2. **Gather documents:** broker statements, dividend/1042-S statements, RSU vest & ESPP purchase confirmations, and the **SBI TT buying rates** for each relevant month-end.
3. **Confirm perquisites** (RSU vest, ESPP discount) are correctly reflected in **Form 16**.
4. **Compute capital gains lot by lot** (Section 4 + Rule 115 rates) → **Schedule CG**.
5. **Convert & report gross dividends** → **Schedule OS**.
6. **Complete Schedule FA** on a **calendar-year 2025** basis (Tables A2 & A3) — even for unsold holdings.
7. **File Form 67 online** (before/with the ITR).
8. **Report foreign income & tax** in **Schedule FSI** and claim relief in **Schedule TR**.
9. **File ITR-2** by **31 July 2026**.

---

## 11. Key references

- **Section 17(2)(vi)** — perquisite taxation of RSU/ESPP/ESOP.
- **Section 49(2AA)** — cost of acquisition = FMV taken as perquisite value.
- **Section 112** — LTCG on unlisted/foreign shares @ 12.5% without indexation (transfers on/after 23 Jul 2024).
- **Rule 115, Income Tax Rules 1962** — SBI TT buying rate conversion, by head of income.
- **Rule 128 / Form 67** — Foreign Tax Credit.
- **India-US DTAA, Article 10** — 25% dividend withholding cap for individuals.
- **Black Money Act, 2015 (Sec 42/43)** — Schedule FA non-disclosure penalties.
- Portal: incometax.gov.in (ITR-2, Form 67 utilities and user manuals).

*Not tax advice. Verify current-year notifications and confirm any ambiguous position with a Chartered Accountant.*
