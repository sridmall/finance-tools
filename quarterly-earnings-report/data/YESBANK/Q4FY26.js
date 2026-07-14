/* ============================================================
   YES Bank Ltd — Q4 FY26 / Full Year FY26
   Results approved: 18 April 2026 (Saturday); Concall: 18 April 2026 (same-day post results)
   File path: data/YESBANK/Q4FY26.js
   Live spot @ authoring: ₹22.00 NSE close (20 May 2026 — ETMoney)
   Result-day: 18 Apr 2026 (Saturday); stock rallied +25-30% over 6 weeks post-results (₹17.20 Mar-30 low → ₹22-23 zone)
   52w range: ₹17.20 – ₹24.30 (peak Oct 2025; trough Mar 30, 2026)
   Mkt cap: ₹68,922 - ₹71,957 Cr | TTM P/E: 17.8-20.7x | P/B: 1.24-1.44x on Book ₹16.30
   ROA 1.0% (Q4); ROE 6-7%; NIM 2.7% Q4 / 2.6% FY26 | Face Value ₹2
   Sources: Multibagg AI (Q4 + FY26 detail), Hindu Business Line (Q4 + concall), Yahoo Finance (Q4 transcript),
            AlphaStreet (Q4 concall transcript), Yes Bank IR press release Q4 FY26 PDF,
            CNBC TV18 + ETMoney + ETNow + India Infoline (price/market cap), Outlook Business (CFO guidance),
            ET Now (SMBC deal completion), LinkedIn SMBC Group, GuruFocus (Q4 highlights), BSE filings,
            Economic Times (Tonse interview — Top 5 private bank ambition), New Indian Express (SMBC ₹13,483 cr deal)
   ============================================================ */

window.registerReport("YESBANK", "Q4FY26", {
    meta: {
        companyName: "YES Bank Ltd — Largest Shareholder: SMBC Sumitomo Mitsui Banking Corporation (Japan) 24.2% (post 4.22% Carlyle additional buy from base 20%); Other key: SBI 10.8% (post 13.18% sale to SMBC May 2025; retains 1 non-executive director nomination); Advent International 9.20%; LIC 3.98%; Carlyle 2.6% (residual); HDFC Bank 2.75%; ICICI Bank 2.39%; Other banks (Kotak 1.21%, Axis 1.01%, IDFC First, Bandhan, Federal) ~3%; Vinay Tonse - MD & CEO (effective 6 April 2026; ex-State Bank of India); Prashant Kumar demitted office 5 April 2026 (led 6-year transformation from 2020 RBI-managed reconstruction)",
        ticker: "YESBANK",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "18 April 2026 (Saturday — results announced; first post-Tonse-takeover earnings)",
        concallDate: "18 April 2026, post Q4 FY26 results (Q4 & Full Year FY26 Earnings Conference Call hosted by Vinay M. Tonse — MD & CEO + Niranjan Banodkar — CFO + Rajan Pental — Executive Director + senior leadership team)",
        resultsBasis:
            "Standalone audited (primary). **India's 6th-largest private sector bank** with **1,200+ pan-India branches** + leading digital and transaction banking capabilities + RBI-reconstructed via SBI-led consortium March 2020. **Q4 FY26 = the *first-post-SMBC-deal-completion-quarter* + *first-quarter-under-new-CEO-Tonse* = inflection point quarter**. **Shareholding evolution (May 2025)**: **SMBC bought 20% stake at ₹21.50/share = ₹13,483 cr** (₹8,889 cr from SBI 13.18% + ₹4,594 cr from 7 other banks = HDFC, ICICI, Kotak, Axis, IDFC First, Federal, Bandhan); **single-largest cross-border investment in Indian banking sector**; **SMBC subsequently bought 4.22% from Carlyle Group** = total 24.2% (close to 24.99% RBI ceiling — open offer trigger at 25%+); **SMBC has *ruled out* exceeding 24.99%** (avoiding mandatory open offer + control change); **SBI retains ~10.8%** + 1 non-executive director nomination; **board representation**: SMBC 2 directors joined Yes Bank board. **CEO transition**: **Vinay Muralidhar Tonse appointed MD & CEO effective 6 April 2026** (ex-SBI executive; **'Top 5 private bank' ambition** per ET interview); **Prashant Kumar demitted office 5 April 2026** after 6-year transformation tenure (took over post-March 2020 RBI reconstruction; led bank from ₹16,418 cr loss FY20 to ₹3,476 cr profit FY26). **Q4 FY26 Standalone Highlights**: **Net Profit ₹1,068 cr (+44.7% YoY from ₹738 cr; +12% QoQ from ₹952 cr)** — highest in 6+ years; **NII ₹2,638 cr (+15.9% YoY from ₹2,276 cr; +7% QoQ from ₹2,466 cr)**; **Non-Interest Income ₹1,730 cr (-0.5% YoY from ₹1,739 cr; +6% QoQ from ₹1,633 cr)**; **Operating Profit ₹1,618 cr (+23.1% YoY from ₹1,314 cr; +31.2% QoQ from ₹1,234 cr)** — strong operating leverage; **NIM 2.70% (+20 bps YoY from 2.50%; +10 bps QoQ from 2.60%)** — front-loaded deposit repricing + CASA traction + RIDF reduction; **Cost-to-Income 63.0% (vs 67.3% Q4FY25; vs 66.1% Q3FY26 = -300-400 bps improvement)**; **Loan Loss Provisions ₹188 cr (-41% YoY from ₹318 cr)** = visible normalization. **FY26 Full Year**: **Net Profit ₹3,476 cr (+44.5% YoY from ₹2,406 cr)**; **NII ₹9,776 cr (+9.3% YoY from ₹8,944 cr)**; **Non-Interest Income ₹6,759 cr (+15.4% YoY from ₹5,857 cr)**; **Operating Profit ₹5,506 cr (+29.4% YoY from ₹4,254 cr)**; **NIM 2.6% (+20 bps YoY from 2.4%)**; **Cost-to-Income 66.7% (vs 71.3% FY25 = -460 bps)**; **Credit Cost 0.17% (vs 0.30% FY25 = -130 bps)**. **Asset Quality — best in 24 quarters (FY20 onwards)**: **GNPA 1.3% (vs 1.6% Q4FY25; 1.5% Q3FY26 = -30 bps YoY / -20 bps QoQ)** = lowest since FY20; **NNPA 0.2% (vs 0.3% Q4FY25; 0.3% Q3FY26 = -10 bps YoY/QoQ)** = lowest since FY20; **Provision Coverage Ratio 81.9% (vs 79.7% Q4FY25)** = best-in-class; **Total Recoveries + Upgrades FY26 ₹4,795 cr** (including ₹1,547 cr on Security Receipts); **FY27 SR Recovery guidance ₹800-1,000 cr**. **Balance Sheet — milestone year**: **Total Assets ₹4,68,105 cr (+10.6% YoY from ₹4,23,422 cr)**; **Net Advances ₹2,73,445 cr (+11.1% YoY from ₹2,46,188 cr; +6.2% QoQ)** — driven by Corporate +19.7%, Commercial +14.5%, Retail Disbursement +41% (granular); **Total Deposits ₹3,18,969 cr (+12.1% YoY from ₹2,84,525 cr; +9.0% QoQ) = crossed ₹3 lakh cr milestone**; **CASA Deposits ₹1,11,959 cr (+14.9% YoY) = crossed ₹1 lakh cr milestone**; **CASA Ratio 35.1% (vs 34.3% Q4FY25; 34.0% Q3FY26 = +80 bps YoY; +110 bps QoQ)**; CA balances +20.8% YoY; SA balances +10.1% YoY; **C/D Ratio 85.7%** (vs 86.5% Q4FY25 / 88.0% Q3FY26 = optimization); **LCR 119%**; **CET-1 13.8%** (vs 13.5% Q4FY25); **RWA/Total Assets 69.7%**; **PSL Shortfall Deposits ₹27,931 cr** (-24.5% YoY; declining from 11% peak FY24 to 6.0% Q4FY26 of total assets; **target <5% FY27**). **ROA 1.0% Q4 reported (1.1% normalized) = in line with FY26 exit guidance**. **Stock performance**: stock rallied **+25-30% over 6 weeks post-results** (from ₹17.20 Mar-30 52w low → ₹22-23 zone); **52w range ₹17.20-₹24.30**; **TTM P/E 17.8-20.7x basic**; **P/B 1.24-1.44x on Book ₹16.30**; **Market Cap ₹68,922-71,957 cr**.",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. **Five critical context items**: (1) **Yes Bank Q4 FY26 = the *first-post-SMBC-deal-completion + first-quarter-under-Tonse-CEO + post-RBI-reconstruction-validation-quarter* — multi-year transformation inflection point**: (a) **SMBC became largest shareholder May 2025** at ₹21.50/share = ₹13,483 cr (single-largest cross-border banking investment in India); subsequently raised to 24.2% via Carlyle 4.22% additional buy; (b) **Q4 PAT ₹1,068 cr (+45% YoY)** = highest in 6+ years; **FY26 PAT ₹3,476 cr (+44.5%)**; (c) **Asset quality best in 24 quarters** — GNPA 1.3%; NNPA 0.2% (both lowest since FY20); PCR 81.9%; Credit Cost 0.17%; (d) **NIM expansion 2.5% → 2.7%** (+20 bps YoY) on front-loaded deposit repricing + CASA traction + PSL/RIDF reduction; (e) **Cost-to-Income 63% (vs 67-71% historically)** = visible operating leverage; (f) **ROA reached 1.0% Q4 (1.1% normalized)** = in line with stated FY26 exit guidance; (g) **CEO transition**: Vinay Tonse (ex-SBI; 'Top 5 private bank' ambition) took over April 6, 2026; Prashant Kumar (the 6-year transformation architect) demitted April 5, 2026; (h) **Mgmt FY27 priorities**: ROA >1% annual, Credit Growth 14-15%, CASA growth 11%+, Retail growth 10-11%, Corporate growth ~20%, Commercial growth ~18%, SR Recoveries ₹800-1,000 cr, NIM medium-term 3-3.5% (2-3 year horizon). **The thesis = post-reconstruction-fully-cleaned-bank-with-SMBC-strategic-ownership-and-fresh-CEO-transitioning-from-clean-up-to-growth-phase**. (2) **The SMBC strategic ownership = the *defining structural transformation* unlocking growth phase**: (a) **24.2% holding** by global G-SIB Japanese banking powerhouse; (b) **Single-largest cross-border investment in Indian banking sector**; (c) **SMBC has *ruled out* exceeding 24.99%** (avoiding open offer + control change) = stable strategic ownership without disruption; (d) **2 SMBC nominees joined board**; (e) **Strategic value-add**: corporate + cross-border banking expertise; SMBC global network access; technology + risk management transfer; G-SIB credit lines; (f) **SMBC also sold 1.65% Kotak Mahindra stake to focus India bet on Yes Bank**; (g) **Mgmt commentary**: 'ongoing collaboration with SMBC provides helpful strategic support, particularly in corporate and cross-border banking'; (h) **Implication**: institutional-quality strategic anchor + governance + cross-border franchise = re-rating catalyst over 2-3 years. (3) **Asset quality validation post-reconstruction + new CEO Tonse 'Top 5 private bank' ambition = visible growth phase signal**: **Tonse explicit Q4 commentary**: 'We are ambitious and working to become a top 5 private bank again' + 'NIM can move towards 3% — medium term 3.25-3.5% over 2-3 years' + 'Credit growth 14-15% targeting industry-line' + 'Top 4 priorities: People, Products, Processes, Technology + One YES BANK customer experience'. **Strong commentary**: 'YES BANK concluded FY26 on a strong footing, delivering a Q4 ROA of 1.0% in line with our guidance...lowest GNPA and NNPA levels since FY20. Business momentum continued to strengthen, with broad based growth across advances and deposits, underpinned by a robust CASA led deposit engine that contributed to lower Cost of Deposits.' **Strategic priorities FY27**: 'strengthening the franchise, accelerating high quality growth, and advancing our journey toward building a resilient YES BANK'. **Retail banking turned profitable** Q4 FY26 (after break-even Q3) per concall = critical inflection. **Wealth Management AUM ₹30,000 cr**; cross-sell opportunity with corporate + branch. (4) **The structural concerns + execution gaps remain significant despite improvement**: (a) **NIM 2.7% still significantly below peer leaders** — HDFC 3.6%; ICICI 4.4%; Axis 3.9%; Kotak 5.1%; even IndusInd 4.0% + IDFC First 6.0%; PSL/RIDF legacy still drags 50-80 bps; (b) **ROA 1.0% still well below industry leaders** — HDFC/ICICI 1.8-2.3%; Kotak 2.1%; reflects gap to be closed; (c) **ROE 6-7% half of peer leaders' 14-18%** = significant gap to scale; (d) **Cost-to-Income 63% high vs peer leaders 38-45%** = operating leverage still needs maturation; (e) **PSL shortfall deposits ₹27,931 cr (6% of total assets)** still legacy drag — target <5% FY27 but elimination 3-4 years out; (f) **Retail loan growth only +4.7% YoY on stock basis** (disbursement +41% but base low) = retail franchise still small; (g) **Wealth management AUM ₹30,000 cr** is tiny vs HDFC ₹6.5L cr / Kotak ₹6L cr; (h) **CEO transition risk** — Tonse new April 6, 2026; learning curve + strategic continuity questions; (i) **MSME exposure caution per Tonse** on geopolitical risks; (j) **Recovery dependence** — SR recoveries ₹800-1,000 cr FY27 still source of profitability; sustainability of clean operating earnings to be tested. (5) **Valuation reflects transformation premium + SMBC catalyst but is *premium* on book vs peer mid-cap private banks**: Stock at ₹22 trades at **TTM P/E 17.8-20.7x basic** (EPS ₹1.11-1.12); **Forward P/E ~13-15x on FY27E EPS ₹1.50-1.70** (on continued PAT growth +30-40%); **P/B 1.24-1.44x on Book ₹16.30**; **EV/Net Worth ~1.4x**; **ROA 1.0%; ROE 6-7%; Beta 0.31**. **Peer benchmarks (Indian Private Banks)**: **HDFC Bank** P/E 20-22x / ROE 14-15% / ROA 1.8-2.0% / NIM 3.6% (premium leader); **ICICI Bank** P/E 18-20x / ROE 17-18% / ROA 2.2-2.3% / NIM 4.4% (best-in-class quality); **Axis Bank** P/E 12-15x / ROE 15-16% / ROA 1.7-1.8%; **Kotak Bank** P/E 25-28x / ROE 13-14% / ROA 2.0-2.2% / NIM 5.1% (premium); **IndusInd** P/E 8-10x / ROE 9-10% / ROA 1.3-1.5%; **IDFC First** P/E 18-20x / ROE 9-10% / ROA 1.0-1.2% / NIM 6.0%+; **RBL Bank** P/E 10-12x / ROE 6-8% / ROA 0.8-1.0%; **Federal Bank** P/E 11-13x / ROE 13-14% / ROA 1.3-1.4%. **Yes Bank at 17.8-20.7x P/E / 1.24-1.44x P/B / ROA 1.0% / ROE 6-7% / NIM 2.7%** = trades at P/E premium to most mid-cap banks (RBL, IDFC First, Federal, IndusInd) and P/B at parity = transformation/SMBC premium embedded; bull case requires ROA expansion to 1.3-1.5% + ROE to 10-12% + NIM to 3.0%+ = peer-leader-junior-bracket re-rating. **Verdict**: a 'post-RBI-reconstruction-fully-cleaned-bank + SMBC-strategic-ownership-as-largest-shareholder + fresh-CEO-Tonse-transitioning-clean-up-to-growth-phase + asset-quality-best-in-24-quarters-validated + NIM-expansion-trajectory + Top-5-private-bank-ambition + significant-execution-gap-to-peer-leaders + premium-P/B-1.4x-vs-mid-cap-peers + valuation-already-reflects-substantial-improvement-leaving-modest-upside' setup; sizing prudent at **2-4%** portfolio given execution risk + CEO transition + gap to peer leaders + premium P/B; bull case ₹28-32 (+27-45%) on continued PAT growth + NIM 3%+ + RoA 1.3-1.5% + SMBC synergies visible + multiple sustains 18-22x FY27E; bear case ₹17-19 (-14 to -23%) on slowdown + execution misses + multiple compresses to 13-16x FY27E.",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            {
                metric: "Net Interest Income (NII) — ₹2,638 Cr Q4 (+15.9% YoY) / FY26 ₹9,776 Cr (+9.3%) — the *core-spread-engine*",
                current: "**Q4 NII ₹2,638 cr (+15.9% YoY from ₹2,276 cr; +7% QoQ from ₹2,466 cr)**; **FY26 NII ₹9,776 cr (+9.3% YoY from ₹8,944 cr)** — first ₹9,500+ cr year",
                qoq: "Q3 ₹2,466 → Q4 ₹2,638 = +7% QoQ = visible sequential momentum",
                yoy: "**Q4 NII +15.9% YoY** driven by (a) **NIM expansion 2.5% → 2.7% (+20 bps YoY)**; (b) Advances growth +11.1%; (c) PSL/RIDF burden reduction; (d) CASA traction. **FY26 NII +9.3%** = full-year reflects gradual NIM expansion; **Q4 acceleration to +15.9%** = momentum building into FY27. **Mgmt commentary**: 'improvement in NIM was driven by front-loaded repricing of deposits, which benefited the Bank through the year, continued traction in CASA (current account, savings account) deposits, and also reduction in high-cost borrowings and RIDF-related mandated deposits.'",
            },
            {
                metric: "Non-Interest Income — ₹1,730 Cr Q4 (-0.5% YoY) / FY26 ₹6,759 Cr (+15.4%) — Fee + Treasury + Recovery Income",
                current: "**Q4 Non-Interest Income ₹1,730 cr (-0.5% YoY from ₹1,739 cr; +6% QoQ from ₹1,633 cr)**; **FY26 ₹6,759 cr (+15.4% YoY from ₹5,857 cr)**",
                qoq: "Q3 ₹1,633 → Q4 ₹1,730 = +6% QoQ sequential growth",
                yoy: "**Q4 marginally flat** on weak base + Q4 FY25 had elevated recovery component; **FY26 +15.4%** = full-year robust as fee + treasury + recovery scale. **Components**: (a) **Fee income** (CASA fees, card fees, lending fees) growing; (b) **Treasury income** = market-dependent; (c) **Recovery in written-off accounts ₹4,795 cr FY26** (including ₹1,547 cr on Security Receipts); **FY27 SR Recovery guidance ₹800-1,000 cr** = visible continuing tailwind. **Implication**: Other income remains supportive but recovery dependence reducing as core fee income matures.",
            },
            {
                metric: "Operating Profit — ₹1,618 Cr Q4 (+23.1% YoY; +31.2% QoQ) / FY26 ₹5,506 Cr (+29.4%) — Visible Operating Leverage",
                current: "**Q4 Operating Profit ₹1,618 cr (+23.1% YoY from ₹1,314 cr; +31.2% QoQ from ₹1,234 cr)**; **FY26 ₹5,506 cr (+29.4% YoY from ₹4,254 cr)**",
                qoq: "Q3 ₹1,234 → Q4 ₹1,618 = +31.2% QoQ = exceptional sequential acceleration",
                yoy: "**Q4 Operating Profit +23.1% YoY on NII +15.9% + Non-Interest Income -0.5% + Cost reduction** — Cost-to-Income 67.3% → 63.0% (-430 bps). **FY26 +29.4%** = full-year visible operating leverage. **Implication**: operating leverage clearly emerging; further improvement in cost ratio could compound bottom-line in FY27.",
            },
            {
                metric: "PAT — ₹1,068 Cr Q4 (+44.7% YoY; +12% QoQ) / FY26 ₹3,476 Cr (+44.5%) — Highest in 6+ Years",
                current: "**Q4 PAT ₹1,068 cr (+44.7% YoY from ₹738 cr; +12% QoQ from ₹952 cr)** — highest in 6+ years; **FY26 PAT ₹3,476 cr (+44.5% YoY from ₹2,406 cr)** — visible transformation validation",
                qoq: "Q1 ₹? → Q2 ₹? → Q3 ₹952 → Q4 ₹1,068 = continuous QoQ improvement",
                yoy: "**Q4 PAT +44.7% YoY** on (a) Operating Profit +23.1%; (b) Loan loss provisions -41% to ₹188 cr (vs ₹318 cr Q4 FY25); (c) Other provisions normalized. **FY26 PAT +44.5%** = strongest delivery in 6 years. **Key driver: provisions normalization** — credit cost 0.17% FY26 vs 0.30% FY25 = -130 bps = ~₹600 cr provision reduction = ~80% of FY26 PAT growth. **Implication**: future PAT growth dependent on (i) NII expansion as NIM rises toward 3%; (ii) Operating leverage further improvement; (iii) SR recovery sustainability ₹800-1,000 cr FY27.",
            },
            {
                metric: "EPS — ₹1.11-1.12 TTM (FY26); Q4 ~₹0.34 — Low Absolute on Diluted Share Base",
                current: "**FY26 EPS ₹1.11-1.12 TTM** (per various sources); Q4 EPS ~₹0.34",
                qoq: "Continuous improvement on PAT growth",
                yoy: "**EPS growth +44.5% YoY** with FY25 EPS ~₹0.77; **Share base ~3,135 cr shares** (post 2020 reconstruction QIP + warrant conversion); **FY27E EPS ₹1.50-1.70** on continued PAT growth +30-40%. **TTM P/E at ₹22 / ₹1.11 = 19.8x**; **Forward P/E ~13-15x FY27E** = competitive vs peer mid-cap private banks.",
            },
            {
                metric: "NIM — 2.70% Q4 / 2.6% FY26 (+20 bps YoY both) — Visible Expansion But Still Below Peer Leaders",
                current: "**Q4 NIM 2.70%** (vs 2.50% Q4FY25; vs 2.60% Q3FY26 = +20 bps YoY; +10 bps QoQ); **FY26 NIM 2.6%** (vs 2.4% FY25 = +20 bps)",
                qoq: "+10 bps QoQ; trending up",
                yoy: "**Drivers**: (a) **Front-loaded deposit repricing** completed during FY26 = cost of deposits lowering; (b) **CASA Ratio 35.1% (+80 bps YoY)** = deposit cost lever; (c) **PSL/RIDF burden reduction** — RIDF balances declining from 11% peak FY24 to 6% Q4FY26 of assets; **target <5% FY27** = significant NIM lever; (d) **Mgmt commentary**: 'NIM would be higher on normalised basis. In the presentation, normalised NIM 3.0%'. **Forward trajectory**: Tonse Q4 interview — 'NIM can move towards 3% — medium term 3.25-3.5% over 2-3 years' = visible NIM expansion thesis. **Peer benchmarks**: HDFC 3.6%; ICICI 4.4%; Axis 3.9%; Kotak 5.1%; IndusInd 4.0%; IDFC First 6.0%+ = Yes Bank significantly below = structural gap reflecting deposit franchise quality + RIDF legacy + corporate-heavy book.",
            },
            {
                metric: "Cost-to-Income Ratio — 63.0% Q4 / 66.7% FY26 — Visible Improvement Across Periods",
                current: "**Q4 C-I Ratio 63.0%** (vs 67.3% Q4FY25; vs 66.1% Q3FY26 = -430 bps YoY; -310 bps QoQ); **FY26 66.7%** (vs 71.3% FY25 = -460 bps)",
                qoq: "Improving consistently",
                yoy: "**Drivers**: (a) Operating profit acceleration faster than cost growth; (b) **Tech investments paying off**; (c) **Productivity improvement** across employees + branches. **Peer benchmarks**: HDFC 38-40%; ICICI 38-40%; Axis 45-47%; Kotak 47-50%; IndusInd 45-47% = **Yes Bank still 15-20 pp higher than top private banks** = significant operating leverage opportunity FY27-FY28. **Tonse target**: continued reduction toward 55-60% range over 2-3 years = ~₹500-700 cr PAT impact possible.",
            },
            {
                metric: "ROA — 1.0% Q4 Reported / 1.1% Normalized — Achieved FY26 Exit Target",
                current: "**Q4 ROA 1.0% reported / 1.1% normalized** (after PSL impact adjustment) = in line with FY26 exit guidance set in Q3 by CFO Banodkar",
                qoq: "Improving consistently",
                yoy: "**Significant milestone**: First full quarter of >=1.0% ROA since pre-reconstruction era. **Drivers**: NIM expansion + Operating leverage + Provision normalization. **FY27 target**: 'annual ROA will exceed 1% in FY27' (CFO commentary). **Peer benchmarks**: HDFC 1.8-2.0%; ICICI 2.2-2.3%; Axis 1.7-1.8%; Kotak 2.0-2.2% = Yes Bank still 80-130 bps below = visible re-rating runway as ROA expands toward 1.5%+.",
            },
            {
                metric: "Asset Quality — GNPA 1.3% / NNPA 0.2% / PCR 81.9% — Best in 24 Quarters (Since FY20)",
                current: "**GNPA 1.3% Q4FY26 (vs 1.5% Q3FY26; 1.6% Q4FY25 = -30 bps YoY; -20 bps QoQ); NNPA 0.2% (vs 0.3% Q3FY26; 0.3% Q4FY25 = -10 bps both); PCR 81.9% (vs 79.7% Q4FY25 = +220 bps)**",
                qoq: "Improving consistently",
                yoy: "**Best in 24 quarters (FY20 onwards)** = post-reconstruction normalization complete. **Credit Cost FY26 0.17% (vs 0.30% FY25)** = lowest in 6 years; Loan Loss Provisions Q4 ₹188 cr (-41% YoY). **Recoveries + Upgrades FY26 ₹4,795 cr** (including ₹1,547 cr SR); **FY27 SR Recovery guidance ₹800-1,000 cr**. **Implication**: legacy book fully cleaned; future credit cost should stabilize at 0.20-0.30% range (industry-normal); recovery tailwind continues 2-3 years.",
            },
            {
                metric: "Balance Sheet — Total Assets ₹4,68,105 Cr; Net Advances ₹2,73,445 Cr; Deposits ₹3,18,969 Cr; CASA ₹1,11,959 Cr (₹3L cr + ₹1L cr milestones crossed)",
                current: "**Total Assets ₹4,68,105 cr (+10.6% YoY from ₹4,23,422 cr); Net Advances ₹2,73,445 cr (+11.1% YoY; +6.2% QoQ); Total Deposits ₹3,18,969 cr (+12.1% YoY; +9.0% QoQ) — crossed ₹3 lakh cr milestone; CASA Deposits ₹1,11,959 cr (+14.9% YoY) — crossed ₹1 lakh cr milestone**",
                qoq: "+6.2% Advances; +9.0% Deposits; +14.9% CASA growth",
                yoy: "**Critical**: **CASA Ratio 35.1% (vs 34.3% Q4FY25; 34.0% Q3FY26 = +80 bps YoY; +110 bps QoQ)** = structural improvement in funding mix; **CA balances +20.8% YoY**; **SA balances +10.1% YoY**. **Advances breakdown**: **Retail Disbursement +41% YoY** (acceleration; stock book +4.7%); **Corporate +19.7% YoY**; **Commercial +14.5% YoY**; **Retail stock +4.7% YoY** (small base). **C/D Ratio 85.7%** (vs 86.5% Q4FY25; 88.0% Q3FY26 = optimization). **CET-1 13.8%** (vs 13.5% Q4FY25); **RWA/Total Assets 69.7%** (vs 71.3% Q4FY25); **LCR 119%**. **PSL Shortfall Deposits ₹27,931 cr (6% of total assets; declining from 11% peak FY24; target <5% FY27)** = significant NIM lever remaining.",
            },
        ],
        businessQualityMetrics: [
            {
                metric: "SMBC Largest Shareholder 24.2% — Strategic Anchor; G-SIB Japanese Banking Powerhouse Partnership",
                current: "**SMBC 24.2%** (post 20% initial buy at ₹21.50/share + 4.22% Carlyle additional buy); SBI ~10.8%; Advent 9.20%; LIC 3.98%; Other ~50%",
                qoq: "Stable post 2025 transaction completion",
                yoy: "**SMBC ruled out exceeding 24.99%** (avoiding open offer trigger at 25%+); **2 SMBC nominees on board**; **single-largest cross-border investment in Indian banking sector**. **Mgmt commentary**: 'ongoing collaboration with SMBC provides helpful strategic support, particularly in corporate and cross-border banking'. **Strategic value-add**: (a) Global G-SIB credentials; (b) Corporate banking expertise; (c) Cross-border franchise; (d) Technology + risk transfer; (e) Credit line access; (f) Governance discipline. **Re-rating optionality**: 2-3 year horizon as SMBC synergies materialize.",
            },
            {
                metric: "Retail Banking Turned Profitable Q4 FY26 (After Q3 Break-Even) — Critical Inflection",
                current: "**Retail Banking internally profitable Q4** (after break-even Q3) per concall; **Wealth Management AUM ~₹30,000 cr**",
                qoq: "Q3 break-even → Q4 profitable",
                yoy: "**Significant milestone**: Retail banking, which had reported losses at segmental level, **turned internally profitable** in Q4 after adjusting for accounting classifications + one-off costs. **Mgmt commentary**: 'aided by lower credit costs and improved product mix'. **Wealth Management ₹30,000 cr AUM** = tiny vs HDFC ₹6.5L cr / Kotak ₹6L cr = visible growth potential via SMBC cross-border + branch network synergies. **Retail Disbursement +41% YoY** despite small stock book (+4.7%) = ramp-up in granular lending franchise.",
            },
            {
                metric: "PSL Shortfall / RIDF Balances 6% of Total Assets (Declining from 11% FY24 Peak; Target <5% FY27)",
                current: "**PSL Shortfall Deposits ₹27,931 cr Q4FY26 = 6.0% of total assets** (vs ~11% FY24 peak; -24.5% YoY)",
                qoq: "-4.4% QoQ = continued reduction",
                yoy: "**Significant NIM lever**: RIDF (Rural Infrastructure Development Fund) deposits earn below-market yields (~5%) vs core advances yields 9-10% = drag on NIM 50-80 bps. **As RIDF matures**: bank systematically retires higher-cost borrowings + redeploys into higher-yielding advances. **CFO Banodkar Q3 commentary**: 'on track to further reduce it to below 5% of total assets by FY27'. **Implication**: structural NIM expansion lever for next 2-3 years from RIDF normalization.",
            },
            {
                metric: "CET-1 13.8% (vs 13.5% Q4FY25) — Strong Capital Adequacy; Growth Headroom Without Equity Dilution",
                current: "**CET-1 Ratio 13.8% Q4FY26**; Tier-I ~14.5%; Total CRAR ~15.5%",
                qoq: "Stable",
                yoy: "**Above regulatory minimum CET-1 8% by 580 bps** = significant capital headroom for AUM growth without equity dilution. **Mgmt strategy**: SMBC stake stable; no near-term equity raise needed for 2-3 years; growth funded by retained earnings + Tier-II + deposit scale-up. **Peer benchmarks**: HDFC 16.5%; ICICI 16.0%; Axis 14.5%; Kotak 21%+; IndusInd 16.5% = Yes Bank in line with peer mid-cap private banks; **could fund 15% AUM growth for 3 years without equity raise**.",
            },
            {
                metric: "Vinay Tonse Appointed MD & CEO April 6, 2026 — 'Top 5 Private Bank' Ambition + Ex-SBI Credentials",
                current: "**Vinay Muralidhar Tonse — MD & CEO (effective 6 April 2026)**; ex-State Bank of India executive",
                qoq: "First quarter under new CEO",
                yoy: "**CEO Transition**: Tonse succeeded Prashant Kumar who demitted office 5 April 2026 after 6-year transformation tenure (the architect who led from 2020 RBI reconstruction to FY26 ₹3,476 cr profit). **Tonse ambition (ET interview)**: 'We are ambitious and working to become a top 5 private bank again' + 'NIM can move towards 3% — medium term 3.25-3.5% over 2-3 years' + 'P-P-P-T priorities: People, Products, Processes, Technology' + 'One YES BANK customer experience'. **MSME caution**: 'caution about lending to MSMEs amid geopolitical risks, but no stress visible so far'. **Strategic continuity**: Tonse retains CFO Banodkar + ED Pental + ED Jain + IR head Parnami = full leadership continuity below CEO.",
            },
            {
                metric: "FY26 Recoveries + Upgrades ₹4,795 cr (Including ₹1,547 cr Security Receipts); FY27 SR Recovery Guidance ₹800-1,000 cr",
                current: "**FY26 Total Recoveries + Upgrades ₹4,795 cr**; **₹1,547 cr from Security Receipts**; **FY27 SR Recovery guidance ₹800-1,000 cr**",
                qoq: "Strong continuing contribution",
                yoy: "**Recovery tailwind continuing**: SR pool legacy from 2020 reconstruction; **₹1,547 cr Q4 FY26 SR recoveries**; **₹800-1,000 cr FY27 guidance**; **₹500-700 cr FY28 estimated**. **Implication**: provision write-back contribution sustaining 2-3 years before normalizing. **Asset quality risk**: as SR pool runs out, core NPA generation visibility critical = retail + commercial credit cost trajectory key.",
            },
            {
                metric: "Beta 0.31 (5-Year Monthly) — Defensive on Recovery Stock Cycle; Low Volatility",
                current: "**Beta 0.31** (5-year monthly per Yahoo Finance)",
                qoq: "Stable",
                yoy: "**Significantly below 1.0 = defensive stock** vs broader market; reflects (a) post-reconstruction stable profile; (b) Strong institutional ownership; (c) Limited speculative trading. **Implication**: capital preservation in downcycle + steady upside on transformation execution.",
            },
            {
                metric: "Tonse FY27 Guidance: ROA >1% Annual, Credit Growth 14-15%, NIM 3%+ (Medium-Term 3.25-3.5%), Retail Growth 10-11%, Corporate ~20%, Commercial ~18%",
                current: "**Mgmt FY27 guidance**: ROA >1% annual; Credit Growth 14-15% (industry-line); CASA growth 11%+; Retail growth 10-11%; Corporate growth ~20%; Commercial growth ~18%; SR Recoveries ₹800-1,000 cr; NIM medium-term 3.0-3.5% (2-3 year horizon)",
                qoq: "First Tonse-led guidance",
                yoy: "**Conservative but visible**: 14-15% credit growth lower than HDFC 16-18% / ICICI 15-17% but pragmatic given transition; **NIM 3%+ achievable** as RIDF declines + SMBC corporate book grows + retail mix shifts. **Risk-balanced approach** per Tonse: 'calibrated and sustainable expansion rather than aggressive risk-taking'.",
            },
        ],
        footnotes: [
            "**The Yes Bank story is *India's 6th-largest private sector bank emerging from RBI-managed 2020 reconstruction into post-SMBC-strategic-ownership growth phase under fresh CEO Tonse*** with Q4 FY26 PAT ₹1,068 cr (+45% YoY = highest in 6 years), FY26 PAT ₹3,476 cr (+44.5%), Asset Quality best in 24 quarters (GNPA 1.3%; NNPA 0.2%; PCR 81.9%), ROA reached 1.0% (1.1% normalized), NIM 2.7% (+20 bps YoY trending toward 3.0%+), Cost-to-Income 63% (-430 bps), Deposits crossed ₹3 lakh cr + CASA crossed ₹1 lakh cr milestones, CET-1 13.8% strong capital. **No direct listed peer at this stage of recovery curve** — closest comparables are post-reconstruction banks like IDFC First Bank (longer rebuild story) and South Indian Bank (smaller). **The 3-5 yr structural compounding setup**: PAT ₹3,476 cr FY26 → ₹5,500-7,500 cr FY29-FY30 (1.5-2x growth) on (a) NIM expansion 2.7% → 3.5%; (b) Operating leverage Cost-to-Income 63% → 50%; (c) Credit growth 14-15% sustained; (d) SMBC corporate + cross-border synergies; (e) Retail franchise scaling; (f) PSL/RIDF normalization.",
            "**Q4 FY26 print is exceptional across every metric**: Q4 PAT +44.7%, NII +15.9%, Operating Profit +23.1%, Asset Quality best in 24 quarters, NIM +20 bps YoY, Cost-to-Income improved -430 bps, ROA 1.0% achieving FY26 exit guidance. **FY26 milestones**: First full year of >₹3,000 cr PAT post reconstruction; **Crossed ₹3 lakh cr deposits + ₹1 lakh cr CASA milestones**. **Retail Banking turned profitable** Q4 = inflection.",
            "**The SMBC strategic ownership = defining structural transformation unlocking growth phase**: (a) **24.2% holding** by G-SIB Japanese banking powerhouse; (b) **Single-largest cross-border investment in Indian banking sector**; (c) **SMBC ruled out exceeding 24.99%** (no open offer disruption); (d) **2 SMBC board nominees**; (e) **Strategic value-add**: corporate + cross-border banking; SMBC global network; technology + risk transfer; G-SIB credit lines. **Implication**: institutional-quality strategic anchor + governance + cross-border franchise = re-rating catalyst over 2-3 years.",
            "**CEO Transition risk + opportunity**: Vinay Tonse appointed April 6, 2026 (ex-SBI; 'Top 5 private bank' ambition). Prashant Kumar (architect of 6-year transformation) demitted April 5. **Continuity**: CFO Banodkar + ED Pental + ED Jain + IR head Parnami all retained = full leadership continuity below CEO. **Tonse's first earnings = Q4 FY26** validated strong fundamentals + clear forward guidance + 'Top 5 private bank' aspirational vision.",
            "**Shareholding evolution post May 2025 SMBC deal**: SMBC 24.2% / SBI 10.8% / Advent 9.20% / LIC 3.98% / Carlyle 2.6% (residual) / HDFC Bank 2.75% / ICICI Bank 2.39% / Kotak 1.21% / Axis 1.01% / Public + Other ~42%. **Pre-deal**: SBI 23.97%; SMBC 0%; SBI exit + SMBC entry transformed governance + strategic positioning.",
            "**Critical risks + execution gaps**: (a) **NIM 2.7% still significantly below peer leaders** (HDFC 3.6% / ICICI 4.4% / Axis 3.9% / Kotak 5.1%); (b) **ROA 1.0% well below industry leaders 1.7-2.3%**; (c) **ROE 6-7% half of peer leaders 14-18%**; (d) **Cost-to-Income 63% high vs 38-45% peer leaders**; (e) **PSL/RIDF 6% legacy drag**; (f) **Retail loan book stock +4.7%** still small base; (g) **Wealth Management ₹30,000 cr** tiny vs peers ₹5-6 L cr; (h) **CEO transition** Tonse 2 months tenure = strategic continuity questions; (i) **MSME exposure caution** per Tonse on geopolitical risks; (j) **Recovery dependence** SR ₹800-1,000 cr FY27 still supports profitability.",
        ],
        patternDetected:
            "Q4 PAT ₹1,068 cr (+44.7% YoY from ₹738 cr; +12% QoQ from ₹952 cr = highest in 6+ years) + Q4 NII ₹2,638 cr (+15.9% YoY; +7% QoQ) + Q4 Non-Interest Income ₹1,730 cr (-0.5% YoY; +6% QoQ) + Q4 Operating Profit ₹1,618 cr (+23.1% YoY; +31.2% QoQ) + Q4 NIM 2.70% (+20 bps YoY; +10 bps QoQ from 2.50% Q4FY25 / 2.60% Q3FY26) + Q4 Cost-to-Income 63.0% (vs 67.3% Q4FY25 = -430 bps; vs 66.1% Q3FY26 = -310 bps) + Q4 Loan Loss Provisions ₹188 cr (-41% YoY from ₹318 cr) + Q4 ROA 1.0% reported / 1.1% normalized + **FY26 PAT ₹3,476 cr (+44.5% YoY from ₹2,406 cr)** + FY26 NII ₹9,776 cr (+9.3%) + FY26 Non-Interest Income ₹6,759 cr (+15.4%) + FY26 Operating Profit ₹5,506 cr (+29.4%) + FY26 NIM 2.6% (+20 bps YoY from 2.4%) + FY26 Cost-to-Income 66.7% (vs 71.3% FY25 = -460 bps) + FY26 Credit Cost 0.17% (vs 0.30% FY25 = -130 bps) + **Asset Quality best in 24 quarters (FY20 onwards)**: GNPA 1.3% (vs 1.6% Q4FY25; 1.5% Q3FY26 = -30 bps YoY / -20 bps QoQ) + NNPA 0.2% (vs 0.3% Q4FY25; 0.3% Q3FY26 = -10 bps YoY/QoQ) + PCR 81.9% (vs 79.7% Q4FY25 = +220 bps) + Recoveries + Upgrades FY26 ₹4,795 cr (including ₹1,547 cr Security Receipts) + **FY27 SR Recovery guidance ₹800-1,000 cr** + **Balance Sheet milestones**: Total Assets ₹4,68,105 cr (+10.6% YoY) + Net Advances ₹2,73,445 cr (+11.1% YoY; +6.2% QoQ) — driven by Corporate +19.7%, Commercial +14.5%, Retail Disbursement +41% (granular), Retail stock +4.7% + Total Deposits ₹3,18,969 cr (+12.1% YoY; +9.0% QoQ) = **crossed ₹3 lakh cr milestone** + CASA Deposits ₹1,11,959 cr (+14.9% YoY) = **crossed ₹1 lakh cr milestone** + CASA Ratio 35.1% (vs 34.3% Q4FY25; 34.0% Q3FY26 = +80 bps YoY; +110 bps QoQ) + CA balances +20.8% YoY + SA balances +10.1% YoY + C/D Ratio 85.7% (vs 86.5% Q4FY25; 88.0% Q3FY26 = optimization) + LCR 119% + **CET-1 13.8%** (vs 13.5% Q4FY25) + RWA/Total Assets 69.7% (vs 71.3% Q4FY25) + **PSL Shortfall Deposits ₹27,931 cr (-24.5% YoY; declining from 11% peak FY24 to 6.0% Q4FY26 of total assets; target <5% FY27)** + **Retail Banking turned profitable Q4 FY26** (after break-even Q3) = critical inflection + Wealth Management AUM ₹30,000 cr + **CEO Transition**: Vinay Tonse appointed MD & CEO 6 April 2026 (ex-SBI; 'Top 5 private bank' ambition); Prashant Kumar demitted 5 April 2026 (architect of 6-year transformation) + **Shareholding (post May 2025 SMBC deal)**: SMBC 24.2% (largest; ₹13,483 cr at ₹21.50/share = single-largest cross-border banking M&A in India; SMBC ruled out exceeding 24.99%); SBI 10.8% (down from 23.97%; 1 board nominee retained); Advent 9.20%; LIC 3.98%; Carlyle 2.6%; HDFC 2.75%; ICICI 2.39%; Kotak 1.21%; Axis 1.01%; Public/Other ~42% + 2 SMBC nominees on board + Stock rallied **+25-30% over 6 weeks post-results** (from ₹17.20 Mar-30 52w low → ₹22-23 zone) + 52w range ₹17.20-₹24.30 + TTM P/E 17.8-20.7x basic on EPS ₹1.11-1.12 + P/B 1.24-1.44x on Book ₹16.30 + Market Cap ₹68,922-71,957 cr + Beta 0.31 (defensive) + Mgmt FY27 guidance: ROA >1% annual; Credit Growth 14-15%; CASA growth 11%+; Retail growth 10-11%; Corporate ~20%; Commercial ~18%; SR Recoveries ₹800-1,000 cr; NIM medium-term 3.0-3.5% (2-3 year horizon); 'Top 5 private bank' ambition — **pattern reading: \"India's 6th-largest private sector bank emerging from RBI-managed 2020 reconstruction into post-SMBC-strategic-ownership growth phase under fresh CEO Tonse delivered breakthrough Q4/FY26 — Q4 PAT ₹1,068 cr (+45% YoY = highest in 6 years) + FY26 PAT ₹3,476 cr (+44.5%) + Asset Quality best in 24 quarters (GNPA 1.3%; NNPA 0.2%; PCR 81.9%) + ROA reached 1.0% (1.1% normalized) achieving FY26 exit target + NIM 2.7% (+20 bps YoY trending toward 3.0%+) + Cost-to-Income 63% (-430 bps) + Deposits crossed ₹3 lakh cr + CASA crossed ₹1 lakh cr milestones + Retail Banking turned profitable Q4 + Strong capital CET-1 13.8% + Recoveries continuing FY27 SR ₹800-1,000 cr. SMBC strategic ownership 24.2% (single-largest cross-border banking M&A in India) + 2 board nominees + cross-border + corporate banking synergies. CEO Vinay Tonse (ex-SBI) succeeded Prashant Kumar (6-year transformation architect) April 6, 2026; 'Top 5 private bank' ambition; medium-term NIM 3-3.5%; calibrated 14-15% credit growth. Premium valuation embedded — TTM P/E 17.8-20.7x basic / P/B 1.24-1.44x; transformation + SMBC premium reflected; significant execution gap to peer leaders remains (NIM 2.7% vs HDFC 3.6% / ICICI 4.4%; ROA 1.0% vs 1.8-2.3%; ROE 6-7% vs 14-18%; Cost-to-Income 63% vs 38-45%; PSL/RIDF 6% legacy drag)\"**. **The setup**: bull case requires (i) FY27 PAT +30-40% to ₹4,500-4,900 cr; (ii) NIM expansion to 3.0%+; (iii) ROA to 1.2-1.3%; (iv) Cost-to-Income to 60%; (v) Credit growth 14-15% sustained; (vi) SMBC synergies visible (corporate + cross-border revenue); (vii) Asset quality sustained; (viii) Retail franchise scaling; (ix) Multiple sustains 18-22x FY27E EPS = stock to ₹28-32 (+27-45% upside); bear case if execution misses + NIM stagnates at 2.7-2.8% + ROA stays at 1.0-1.1% + Credit cost emerges in retail/MSME + multiple compression to 13-16x FY27E = ₹17-19 (-14 to -23% downside).",
        interpretation:
            "**Yes Bank Q4 FY26 is the *post-RBI-reconstruction-transformation-validation-quarter + post-SMBC-deal-completion-first-quarter + first-quarter-under-new-CEO-Tonse-multi-inflection-point*** — Q4 PAT ₹1,068 cr (+45% YoY from ₹738 cr; +12% QoQ from ₹952 cr) = highest in 6+ years; **FY26 PAT ₹3,476 cr (+44.5% YoY from ₹2,406 cr)**; **Asset Quality best in 24 quarters (since FY20)** — GNPA 1.3%; NNPA 0.2%; PCR 81.9%; Credit Cost 0.17%. **NIM 2.7% (+20 bps YoY; +10 bps QoQ)** trending toward 3.0%+. **Cost-to-Income 63.0% (-430 bps YoY)** = visible operating leverage. **ROA 1.0% Q4 reported / 1.1% normalized** = achieved FY26 exit target. **Balance Sheet milestones**: Total Deposits crossed ₹3 lakh cr; CASA crossed ₹1 lakh cr; CASA Ratio 35.1% (+80 bps YoY); CET-1 13.8% strong capital. **Retail Banking turned profitable Q4** (after Q3 break-even) = critical inflection. **The defining narrative**: (a) **Post-RBI-managed-2020-reconstruction transformation complete** — Q4 PAT highest in 6 years; Asset Quality best in 24 quarters; (b) **SMBC strategic ownership 24.2%** (single-largest cross-border banking M&A in India) = institutional anchor + governance + cross-border synergies; (c) **New CEO Tonse 'Top 5 private bank' ambition** (ex-SBI) = visible growth phase signal; (d) **NIM expansion thesis 2.7% → 3.0-3.5%** over 2-3 years on RIDF normalization + SMBC corporate book + retail mix shift; (e) **Operating leverage** Cost-to-Income 63% → 50% over 2-3 years; (f) **SR recovery tailwind** ₹800-1,000 cr FY27 continues. **Structural strengths**: (1) **Post-reconstruction fully cleaned bank** — Asset Quality best in 24 quarters; (2) **SMBC strategic ownership** anchor + cross-border synergies; (3) **CEO continuity** Tonse-led + senior management retained; (4) **Deposit + CASA milestones** ₹3L cr + ₹1L cr crossed; (5) **PSL/RIDF declining** 11% → 6% → <5% FY27 = structural NIM lever; (6) **CET-1 13.8%** strong capital headroom; (7) **Retail Banking profitable** inflection; (8) **₹4,795 cr recoveries** FY26 + ₹800-1,000 cr FY27 guidance; (9) **Beta 0.31 defensive** stock profile; (10) **6th-largest private sector bank with 1,200+ branches**. **Growth catalysts FY27+**: (1) **NIM expansion 2.7% → 3.0%+** (RIDF normalization + CASA + corporate book); (2) **Operating leverage** Cost-to-Income 63% → 55-60%; (3) **Credit growth 14-15%** sustained; (4) **SMBC synergies** visible (corporate + cross-border revenue); (5) **Retail franchise scaling** (+41% disbursement growth); (6) **Wealth Management** ₹30,000 cr → ₹50,000+ cr; (7) **SR recoveries** continuing tailwind; (8) **ROA expansion** 1.0% → 1.3-1.5%; (9) **ROE expansion** 6-7% → 10-12%; (10) **Long-term**: 'Top 5 private bank' ambition. **Critical concerns**: (a) **NIM 2.7% significantly below peer leaders** (HDFC 3.6% / ICICI 4.4% / Axis 3.9% / Kotak 5.1%); (b) **ROA 1.0% well below industry leaders 1.7-2.3%**; (c) **ROE 6-7% half of peer leaders 14-18%**; (d) **Cost-to-Income 63% high vs 38-45% peer leaders**; (e) **PSL/RIDF 6% legacy drag**; (f) **Retail loan book stock +4.7%** still small base; (g) **Wealth Management ₹30,000 cr** tiny vs peers; (h) **CEO transition** Tonse only 2 months tenure; (i) **MSME exposure caution** per Tonse on geopolitical risks; (j) **Recovery dependence** SR ₹800-1,000 cr FY27 still supports profitability; (k) **Premium P/B 1.24-1.44x** to mid-cap peers reflects transformation. **Valuation context**: Stock at ₹22 trades at **TTM P/E 17.8-20.7x basic** (EPS ₹1.11-1.12); **Forward P/E ~13-15x on FY27E EPS ₹1.50-1.70**; **P/B 1.24-1.44x on Book ₹16.30**; **Market Cap ₹68,922-71,957 cr**; **ROA 1.0%; ROE 6-7%; Beta 0.31**. **Peer benchmarks (Indian Private Banks)**: HDFC Bank P/E 20-22x / ROE 14-15% / ROA 1.8-2.0% / NIM 3.6%; ICICI Bank P/E 18-20x / ROE 17-18% / ROA 2.2-2.3% / NIM 4.4%; Axis Bank P/E 12-15x / ROE 15-16% / ROA 1.7-1.8%; Kotak Bank P/E 25-28x / ROE 13-14% / ROA 2.0-2.2% / NIM 5.1%; IndusInd P/E 8-10x / ROE 9-10% / ROA 1.3-1.5%; IDFC First P/E 18-20x / ROE 9-10% / ROA 1.0-1.2%; RBL Bank P/E 10-12x / ROE 6-8% / ROA 0.8-1.0%; Federal Bank P/E 11-13x / ROE 13-14% / ROA 1.3-1.4%. **Yes Bank at 17.8-20.7x P/E / 1.24-1.44x P/B / ROA 1.0% / ROE 6-7% / NIM 2.7%** = trades at P/E premium to most mid-cap banks and P/B at parity = transformation/SMBC premium embedded. **Bear case ₹17-19** (execution misses + NIM stagnates + credit cost emerges + multiple compresses to 13-16x FY27E; -14 to -23% downside). **Base case ₹22-25** (FY27 PAT +30% + NIM 2.9% + ROA 1.1% + multiple holds 16-18x FY27E EPS ₹1.50; -5% to +14% upside). **Bull case ₹28-32** (FY27 PAT +40% + NIM 3.0%+ + ROA 1.2-1.3% + SMBC synergies + multiple expands 18-22x FY27E EPS ₹1.55-1.70; +27-45% upside).",
        whatWentRight: [
            "**Q4 FY26 exceptional metrics**: PAT ₹1,068 cr (+44.7% YoY = highest in 6+ years); NII ₹2,638 cr (+15.9%); Operating Profit ₹1,618 cr (+23.1% YoY; +31.2% QoQ); NIM 2.70% (+20 bps YoY); Cost-to-Income 63.0% (-430 bps); Loan Loss Provisions ₹188 cr (-41%); ROA 1.0% (1.1% normalized). **FY26 milestones**: PAT ₹3,476 cr (+44.5%); Operating Profit +29.4%; Deposits crossed ₹3 lakh cr; CASA crossed ₹1 lakh cr; Asset Quality best in 24 quarters.",
            "**Strategic transformation validation + future positioning**: (1) **SMBC 24.2% largest shareholder** (single-largest cross-border banking M&A in India); 2 board nominees; corporate + cross-border synergies; (2) **CEO Tonse appointment** with 'Top 5 private bank' ambition; (3) **Asset Quality best in 24 quarters** post-reconstruction; (4) **Retail Banking turned profitable** Q4 = inflection; (5) **PSL/RIDF declining** to 6% (target <5% FY27); (6) **CET-1 13.8%** strong capital headroom; (7) **₹4,795 cr recoveries** FY26 + ₹800-1,000 cr FY27 guidance; (8) **Stock rallied +25-30% post-results**.",
            "**Ten structural strengths intact**: (1) **Post-RBI-2020-reconstruction transformation complete**; (2) **SMBC strategic ownership 24.2%**; (3) **CEO continuity + senior management retained**; (4) **Asset Quality best in 24 quarters**; (5) **NIM expansion trajectory** 2.7% → 3.0%+; (6) **Operating leverage** Cost-to-Income 63% → 50%; (7) **Deposit + CASA milestones**; (8) **PSL/RIDF normalization** structural NIM lever; (9) **CET-1 13.8% capital headroom**; (10) **6th-largest private bank with 1,200+ branches**.",
        ],
        whatWentWrong: [
            "**NIM 2.7% still significantly below peer leaders** (HDFC 3.6% / ICICI 4.4% / Axis 3.9% / Kotak 5.1%) = structural gap reflecting deposit franchise quality + PSL legacy + corporate-heavy book. **ROA 1.0% well below industry leaders 1.7-2.3%**. **ROE 6-7% half of peer leaders 14-18%**. **Cost-to-Income 63% high vs 38-45% peer leaders**. **PSL/RIDF 6% legacy drag**. **Retail loan book stock +4.7%** still small. **Wealth Management ₹30,000 cr** tiny vs peers ₹5-6 L cr. **CEO transition** Tonse 2 months tenure = strategic continuity questions. **MSME caution** per Tonse on geopolitical risks. **Recovery dependence** SR ₹800-1,000 cr FY27 still supports profitability.",
            "**Eleven structural concerns**: (1) **NIM gap to peers**; (2) **ROA gap**; (3) **ROE gap**; (4) **Cost-to-Income gap**; (5) **PSL/RIDF legacy drag**; (6) **Retail franchise still small**; (7) **Wealth Management tiny**; (8) **CEO transition risk**; (9) **MSME exposure caution**; (10) **Recovery dependence**; (11) **Premium P/B 1.24-1.44x** to mid-cap peers. **Mitigating**: post-RBI-reconstruction fully cleaned + SMBC strategic ownership + asset quality best in 24 quarters + NIM expansion thesis + Operating leverage visible + CET-1 13.8% + Retail profitable inflection + Tonse ambition + ₹4,795 cr recovery FY26 + Indian banking structural growth.",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "1. Corporate & Institutional Banking — Advances ₹? Cr (+19.7% YoY) — the *anchor-engine + SMBC-synergy-vertical*",
                yoyGrowth: "**Advances +19.7% YoY**; estimated ~50-55% of total advances ₹2,73,445 cr = ₹1.4-1.5 lakh cr book",
                mix: "~50-55% of advances; the largest segment + highest growth",
                analysis:
                    "**The dominant + accelerating segment**: Corporate banking advances grew **+19.7% YoY** = fastest growth across segments. **SMBC synergy opportunity**: SMBC's global G-SIB credentials + cross-border banking expertise + Japanese corporate relationships in India = visible SMBC-driven corporate book growth. **Mgmt commentary**: 'SMBC collaboration provides helpful strategic support, particularly in corporate and cross-border banking'. **Tonse interview**: 'Corporate book growing at about 20%' — sustaining current pace.",
                triggers:
                    "(a) SMBC cross-border + Japanese corporate referrals; (b) Indian large corporate capex cycle; (c) Negative trigger: corporate concentration risk; credit cycle deterioration; competitive intensity from PSB + private peer banks.",
            },
            {
                name: "2. Commercial Banking — Advances ₹? Cr (+14.5% YoY) — Mid-Corporate + SME Lending",
                yoyGrowth: "**Advances +14.5% YoY**; estimated ~20-25% of total advances = ₹55-70k cr book",
                mix: "~20-25% of advances",
                analysis:
                    "**Mid-corporate + SME lending segment**: solid 14.5% growth. **Mgmt commentary (Tonse interview)**: 'caution about lending to MSMEs amid geopolitical risks, but no stress is visible so far' = calibrated approach. **Tonse target**: 'Commercial banking delivering ~18% growth' — slight acceleration target.",
                triggers:
                    "(a) MSME sector tailwinds; (b) Tonse cautious approach + tight credit underwriting; (c) Negative trigger: MSME stress amid geopolitical risks (per Tonse caution); credit cost emergence; PSL compliance compounding.",
            },
            {
                name: "3. Retail Banking — Advances ₹? Cr (+4.7% YoY stock; +41% YoY disbursement) — the *granular-franchise-scaling-vertical-turned-profitable-Q4*",
                yoyGrowth: "**Advances stock +4.7% YoY**; **Disbursement +41% YoY** (acceleration); estimated ~25-30% of total advances",
                mix: "~25-30% of advances; smallest segment by growth in stock but fastest in disbursement",
                analysis:
                    "**The critical inflection segment**: **Retail Banking turned profitable Q4 FY26** (after Q3 break-even) per concall — major milestone. **Disbursement +41% YoY** vs stock +4.7% = ramp-up in fresh originations significantly outpacing run-off; **stock conversion** = visible in coming quarters. **Mgmt commentary**: 'Retail banking, which has reported losses at the segmental level, is now internally profitable after adjusting for accounting classifications and one-off costs...The business turned profitable in the March quarter after breaking even in December, aided by lower credit costs and improved product mix.' **Mgmt FY27 target**: 'aiming for 10-11% growth in the retail book over the year'.",
                triggers:
                    "(a) Disbursement +41% momentum sustaining; (b) Cross-sell from SMBC corporate relationships; (c) Wealth management synergies (AUM ₹30k cr); (d) Branch productivity improvement; (e) Negative trigger: retail slippages (concerns raised on Q4 call); credit cost emergence; competitive intensity from HDFC/ICICI/Axis retail-led banks.",
            },
            {
                name: "4. Wealth Management — AUM ₹30,000 Cr — Emerging Cross-Sell Opportunity + SMBC Synergy Potential",
                yoyGrowth: "Mgmt commentary suggests growing through synergies with corporate and branch networks",
                mix: "~5-7% of revenue (estimated); long-term contribution 2-3 years",
                analysis:
                    "**Mgmt Q4 commentary**: 'wealth management business has assets under management of around ₹30,000 crore and is expected to grow through synergies with corporate and branch networks.' **Peer benchmarks**: HDFC Wealth ₹6.5L cr; Kotak Wealth ₹6L cr; ICICI Wealth ₹4L cr; Axis Wealth ₹3L cr = Yes Bank significantly smaller = huge runway. **SMBC synergy opportunity**: SMBC's global private banking franchise + Japanese HNI relationships = visible cross-border wealth referrals.",
                triggers:
                    "(a) AUM scaling ₹30k cr → ₹50k+ cr FY27-FY28; (b) Cross-sell from corporate banking + branch network; (c) SMBC cross-border wealth referrals; (d) Negative trigger: market downturn affects AUM; competitive intensity from established wealth players.",
            },
        ],
        assessment: [
            "**The 4-segment structure (Corporate 50-55% + Commercial 20-25% + Retail 25-30% + Wealth Management emerging) is *Corporate-heavy-with-Retail-Acceleration-and-SMBC-Synergy-Drivers* model**: Corporate remains dominant cash-engine (+19.7% growth); Commercial steady (+14.5%); Retail just turned profitable + +41% disbursement acceleration = visible scaling; Wealth Management emerging optionality.",
            "**Corporate concentration risk** (>50% of book) **mitigated by**: (a) SMBC G-SIB credentials enabling top-tier Indian corporate exposure; (b) Retail scaling reducing concentration over time; (c) Wealth Management diversification; (d) Cross-border banking with SMBC.",
            "**Segment quality verdict: POST-RBI-RECONSTRUCTION-TRANSFORMATION-COMPLETE + SMBC-STRATEGIC-OWNERSHIP-CATALYST + CEO-TONSE-GROWTH-AMBITION + ASSET-QUALITY-BEST-24-QUARTERS + NIM-EXPANSION-2.7-TO-3.0+ + RETAIL-BANKING-PROFITABLE-INFLECTION + DEPOSITS-3L-CR + CASA-1L-CR + GROWTH-EXECUTION-RISK + GAP-TO-PEER-LEADERS-SIGNIFICANT**. **Risk profile**: 'post-reconstruction-fully-cleaned-bank-with-SMBC-anchor + Tonse-growth-phase-but-execution-gaps-vs-peers-significant + premium-P/B-1.24-1.44x-already-reflecting-transformation + asset-quality-validated + NIM-expansion-trajectory + Retail-Banking-profitable-inflection + structural-execution-gap-to-peer-leaders-remaining + Wealth-Management-tiny-base-but-runway'.",
        ],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            {
                metric: "1. FY27 Credit Growth 14-15% (Industry-Line) — Calibrated Approach",
                current: "**FY26 Advances ₹2,73,445 cr (+11.1% YoY)** — slightly below industry growth",
                trend: "**Mgmt FY27 guidance**: 'The bank aims to deliver growth in line with the industry, targeting a 14-15% growth rate' + 'with SMBC coming in, there is an opportunity for an upside' (CFO Banodkar).",
                horizon: "**FY27 Advances ₹3,15,000-3,20,000 cr (+15%)**",
                remarks:
                    "**Drivers**: (a) **Corporate growth +19-20%** (SMBC synergies); (b) **Commercial +14-18%**; (c) **Retail growth +10-11%** (acceleration from +4.7%); (d) **Wealth Management scaling**. **Conservative**: ₹3,12,000 cr; **Aggressive**: ₹3,20,000+ cr.",
            },
            {
                metric: "2. NIM Expansion 2.7% → 3.0% Near-Term; Medium-Term 3.25-3.5% (2-3 Year Horizon)",
                current: "Q4 NIM 2.70%; FY26 NIM 2.6%",
                target: "**Tonse interview explicit**: 'NIM can move towards 3%' + 'Medium term 3.25-3.5% over 2-3 years'",
                horizon: "FY27 + FY28 + FY29 progressive expansion",
                remarks:
                    "**Drivers**: (a) **PSL/RIDF normalization** 6% → <5% FY27 → <3% FY28 = 30-50 bps NIM lift; (b) **CASA ratio 35.1% → 38%+** = 20-30 bps NIM lift; (c) **Retail mix shift** higher yields; (d) **SMBC corporate book** quality + better pricing; (e) **Refinancing high-cost borrowings** as RIDF matures. **Each 10 bps NIM = ~₹350 cr operating profit incremental** = significant ROA leverage.",
            },
            {
                metric: "3. PAT Growth: FY26 ₹3,476 cr → FY27E ₹4,500-4,900 cr (+30-40%)",
                current: "FY26 PAT ₹3,476 cr (+44.5%)",
                target: "**FY27 PAT ₹4,500-4,900 cr** on (a) NII +15-20% on NIM expansion + Advances +15%; (b) Operating leverage Cost-to-Income → 60%; (c) Credit cost stable 0.20-0.25%; (d) SR Recovery ₹800-1,000 cr",
                horizon: "FY27 + FY28 compounding 30%+ sustainable",
                remarks:
                    "**FY27 PAT build**: Revenue from operations ₹40,000+ cr (+18%); NII ₹11,500 cr (+18%); Operating Profit ₹6,500-7,000 cr (+20%); PBT ₹6,000-6,500 cr; Tax 25% = PAT ₹4,500-4,900 cr → EPS ₹1.50-1.65. **FY28 build**: Revenue ₹45,000 cr; PAT ₹5,500-6,000 cr → EPS ₹1.85-2.00.",
            },
            {
                metric: "4. ROA Expansion: 1.0% Q4 → 1.2-1.3% FY27 → 1.5%+ Medium-Term",
                current: "**Q4 ROA 1.0% reported / 1.1% normalized** — achieved FY26 exit target",
                target: "**Mgmt FY27 target**: '>1% on annual basis'; **Medium-term 1.3-1.5%**",
                horizon: "FY27 1.1-1.2% / FY28 1.2-1.3% / FY29-30 1.5%+",
                remarks:
                    "**ROA expansion drivers**: (a) **NIM 2.7% → 3.0%+** = ~30-50 bps ROA contribution; (b) **Cost-to-Income 63% → 55-60%** = ~20-30 bps; (c) **Credit cost normalization** stable 0.20-0.25%; (d) **PSL/RIDF normalization** eliminating drag. **Peer benchmarks**: HDFC 1.8-2.0%; ICICI 2.2-2.3%; Yes Bank could reach 1.5%+ over 3 years = visible re-rating.",
            },
            {
                metric: "5. Long-Term: 'Top 5 Private Bank' Ambition — Tonse Strategic Vision",
                current: "**6th-largest private sector bank** with 1,200+ branches",
                target: "**Tonse interview ambition**: 'We are ambitious and working to become a top 5 private bank again'",
                horizon: "FY28-FY30 long-term",
                remarks:
                    "**Path to Top 5**: Currently 6th by advances/deposits. **Top 5 = HDFC + ICICI + Axis + Kotak + IndusInd** (some overlap). **Yes Bank needs to overtake one of**: IndusInd (~₹3.3L cr advances) or smaller. **At 15% growth pace** to ₹3.15L cr FY27 → ₹3.6L cr FY28 → ₹4.2L cr FY29 = close to IndusInd; could overtake by FY29-FY30 if Yes Bank growth sustains 15% vs IndusInd 10-12%. **Implication**: visible long-term scale target = re-rating catalyst.",
            },
        ],
        demandSignals: [
            {
                signal: "Indian banking industry credit growth (the primary engine)",
                reading:
                    "**Industry credit growth 12-15% FY26**; **expected 13-15% FY27** on continued capex cycle + retail demand + financialization. **RBI policy supportive** with calibrated rate cuts. **Tonse target**: industry-line 14-15% growth.",
                verdict: "Strong",
            },
            {
                signal: "SMBC strategic synergies (corporate + cross-border banking)",
                reading:
                    "**SMBC 24.2% largest shareholder** + 2 board nominees + Japanese G-SIB credentials + global corporate network. **Mgmt commentary**: 'SMBC collaboration provides helpful strategic support, particularly in corporate and cross-border banking'. **Implication**: visible corporate + cross-border revenue uplift over 2-3 years.",
                verdict: "Strong",
            },
            {
                signal: "Asset quality stable post-reconstruction (best in 24 quarters)",
                reading:
                    "**GNPA 1.3% / NNPA 0.2% / PCR 81.9%** — best in 24 quarters (FY20 onwards). **Credit Cost 0.17%** = lowest in 6 years. **Risk**: retail slippages emerging (concern raised on Q4 call); MSME exposure caution per Tonse on geopolitical risks; SR recovery dependence reducing over time.",
                verdict: "Adequate-to-Strong",
            },
            {
                signal: "CASA franchise + deposit cost optimization",
                reading:
                    "**CASA Ratio 35.1% (+80 bps YoY)** + **Crossed ₹1 lakh cr CASA milestone**; **CA balances +20.8% YoY; SA balances +10.1% YoY**. **Implication**: structural improvement in funding cost.",
                verdict: "Strong",
            },
            {
                signal: "PSL/RIDF normalization (NIM lever)",
                reading:
                    "**RIDF balances 11% peak FY24 → 6% Q4FY26 → <5% target FY27 → <3% FY28**. As RIDF matures: bank retires higher-cost borrowings + redeploys into higher-yielding advances. **CFO target**: 'below 5% of total assets by FY27'.",
                verdict: "Strong",
            },
            {
                signal: "Capital availability (CET-1 13.8%; no equity raise needed)",
                reading:
                    "**CET-1 13.8%** = significant capital headroom for AUM growth without equity dilution; **SMBC stable at 24.2%**; **no equity raise planned**; growth funded by retained earnings + Tier-II.",
                verdict: "Strong",
            },
            {
                signal: "CEO transition risk + opportunity",
                reading:
                    "**Tonse new April 6, 2026 = 2 months tenure**. Risk: strategic continuity questions; learning curve. Opportunity: 'Top 5 private bank' ambition; ex-SBI credentials; fresh leadership without Prashant Kumar's legacy context.",
                verdict: "Adequate",
            },
            {
                signal: "Retail Banking profitability inflection",
                reading:
                    "**Retail Banking turned profitable Q4** (after Q3 break-even); **Disbursement +41% YoY**; **mgmt target 10-11% retail growth FY27**. **Risk**: retail slippage emergence; competitive intensity.",
                verdict: "Adequate-to-Strong",
            },
        ],
        demandVerdict:
            "**Demand environment is ROBUST with post-RBI-reconstruction transformation + SMBC strategic ownership + asset quality at 24-quarter best + NIM expansion thesis + Indian banking sector credit growth momentum + CEO Tonse ambition + Retail Banking profitable inflection + PSL/RIDF normalization NIM lever + CET-1 strong capital + CASA franchise scaling**. **Adequate caveats**: NIM gap to peer leaders; ROA gap; Cost-to-Income gap; PSL/RIDF legacy drag; retail loan book stock small; CEO transition risk; MSME caution; recovery dependence. **The dominant variable for FY27-28 stock trajectory is NIM-expansion-execution + Operating-leverage-realization + Asset-quality-sustained-without-recovery-dependence + SMBC-synergy-revenue-materialization + Retail-franchise-scaling + Tonse-execution-track-record**: if FY27 NIM 3.0%+ + ROA 1.2-1.3% + Cost-to-Income 60% + Credit growth 14-15% + SMBC synergies visible + multiple sustains 18-22x FY27E = stock to ₹28-32 (+27-45%); if execution misses + NIM stagnates 2.7-2.8% + ROA stays 1.0-1.1% + credit cost emerges + multiple compresses to 13-16x FY27E = ₹17-19 (-14 to -23%). **Q1 FY27 results (mid-July 2026) will be the critical near-term catalyst** — first Tonse-led quarter; NIM trajectory + Cost-to-Income + Retail Banking sustainability + SR recovery progress.",
        whatWentRight: [
            "**Multi-engine FY27 growth setup**: (a) **Credit Growth 14-15% guidance** to ₹3,15,000+ cr; (b) **NIM expansion 2.7% → 3.0%+** (RIDF normalization + CASA + corporate book + retail mix); (c) **Operating leverage** Cost-to-Income 63% → 55-60%; (d) **PAT growth +30-40%** to ₹4,500-4,900 cr; (e) **ROA expansion** 1.0% → 1.2-1.3%; (f) **SMBC synergies** corporate + cross-border visible; (g) **Retail Banking** profitable inflection; (h) **SR Recoveries** ₹800-1,000 cr FY27 continuing tailwind. **Implied FY27 PAT ₹4,500-4,900 cr (+30-40%); EPS ₹1.50-1.65**.",
            "**Ten structural strengths intact**: (1) **Post-RBI-reconstruction transformation complete**; (2) **SMBC strategic ownership**; (3) **CEO Tonse 'Top 5 private bank' ambition**; (4) **Asset Quality best in 24 quarters**; (5) **NIM expansion thesis 2.7% → 3.0%+**; (6) **Operating leverage** Cost-to-Income improvement; (7) **Deposit + CASA milestones**; (8) **PSL/RIDF normalization NIM lever**; (9) **CET-1 13.8% capital headroom**; (10) **Retail Banking profitable inflection**.",
        ],
        whatWentWrong: [
            "**Eleven structural concerns**: (1) **NIM 2.7% vs peer leaders 3.6-5.1%**; (2) **ROA 1.0% vs 1.7-2.3%**; (3) **ROE 6-7% vs 14-18%**; (4) **Cost-to-Income 63% vs 38-45%**; (5) **PSL/RIDF 6% legacy drag**; (6) **Retail stock +4.7% small base**; (7) **Wealth Management ₹30k cr tiny**; (8) **CEO transition** 2 months tenure; (9) **MSME caution geopolitical risks**; (10) **Recovery dependence** SR ₹800-1,000 cr FY27; (11) **Premium P/B 1.24-1.44x** to mid-cap peers reflects transformation. **Q1 FY27 results critical** — first Tonse-led quarter validation.",
            "**Mitigating factors**: post-RBI-reconstruction fully cleaned + SMBC strategic ownership + asset quality best in 24 quarters + NIM expansion thesis + Operating leverage visible + CET-1 13.8% + Retail profitable inflection + Tonse ambition + ₹4,795 cr recovery FY26 + Indian banking structural growth + Deposit ₹3L cr + CASA ₹1L cr milestones.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            {
                metric: "FY26 ROA 1.0% Exit Target — Delivered (Q4 ROA 1.0% reported / 1.1% normalized)",
                current: "**Q4 FY26 ROA 1.0% reported / 1.1% normalized**",
                target:
                    "**Delivered**: CFO Banodkar Q3 commentary 'The bank will exit the current fiscal year with an ROA of 1 per cent' = delivered.",
            },
            {
                metric: "FY27 ROA >1% Annual + Medium-Term 1.3-1.5%",
                current: "**Mgmt FY27 guidance**: 'on an annual basis, the ROA will exceed 1 per cent in the next fiscal year'; **Medium-term**: 1.3-1.5%",
                target:
                    "**Explicit FY27**: ROA >1% (annualized); **Medium-term**: 1.3-1.5% — target ROA 'sustain and improve the 1% ROA'",
            },
            {
                metric: "FY27 Credit Growth 14-15% (Industry-Line; Calibrated)",
                current: "FY26 Advances +11.1% YoY",
                target:
                    "**Mgmt explicit**: 'The bank aims to deliver growth in line with the industry, targeting a 14-15% growth rate' + 'with SMBC coming in, there is an opportunity for an upside'.",
            },
            {
                metric: "FY27 Retail Growth 10-11%; Corporate ~20%; Commercial ~18%",
                current: "FY26: Retail +4.7% stock (+41% disbursement); Corporate +19.7%; Commercial +14.5%",
                target:
                    "**Mgmt explicit (Q&A)**: 'aiming for 10-11% growth in the retail book over the year. The corporate book is growing at about 20%, and commercial banking is delivering about 18% growth. The bank plans to maintain similar mix composition'.",
            },
            {
                metric: "FY27 NIM 3%+ Near-Term; Medium-Term 3.25-3.5% (2-3 Year Horizon)",
                current: "**Q4 NIM 2.70%; FY26 NIM 2.6%**",
                target:
                    "**Tonse interview explicit**: 'NIM can move towards 3%' + 'Medium term 3.25-3.5% over 2-3 years'",
            },
            {
                metric: "FY27 SR Recoveries ₹800-1,000 cr",
                current: "FY26 Recoveries ₹4,795 cr (including ₹1,547 cr SR)",
                target:
                    "**Mgmt explicit**: 'remains on track to deliver Rs 800-1,000 crore of such recoveries in FY27'.",
            },
            {
                metric: "PSL/RIDF <5% of Total Assets by FY27 (from 6% Q4FY26; 11% FY24 peak)",
                current: "**Q4 FY26 PSL/RIDF 6% of total assets (-24.5% YoY)**",
                target:
                    "**CFO target**: 'on track to further reduce it to below 5% of total assets by FY27'. **Critical NIM lever**.",
            },
            {
                metric: "FY27 CASA Growth 11%+",
                current: "FY26 CASA +14.9% YoY",
                target:
                    "**Mgmt explicit**: 'CASA growth has been around 11% year-on-year, and the bank plans to maintain this momentum'.",
            },
            {
                metric: "Long-Term Ambition: 'Top 5 Private Bank'",
                current: "**6th-largest private sector bank** (1,200+ branches)",
                target:
                    "**Tonse interview ambition**: 'We are ambitious and working to become a top 5 private bank again'. **Strategic vision** for FY28-FY30 horizon.",
            },
            {
                metric: "Strategic Priorities: P-P-P-T (People, Products, Processes, Technology) + One YES BANK",
                current: "Tonse strategic framework Q4 FY26 concall",
                target:
                    "**Mgmt explicit**: 'I track four key pillars-what I call P, P, P and T-people, processes, products and technology' + 'building on the power of One YES BANK to ensure a consistent customer experience across businesses'.",
            },
        ],
        commitmentNote:
            "**Mgmt's track record on commitments — EXCELLENT on FY26 ROA target + Asset Quality + Operating leverage; QUANTITATIVELY SPECIFIC on FY27 guidance (ROA >1%; Credit Growth 14-15%; CASA growth 11%+; Retail 10-11%; Corporate ~20%; Commercial ~18%; SR Recoveries ₹800-1,000 cr; NIM medium-term 3-3.5%; PSL/RIDF <5%); ASPIRATIONAL on long-term ('Top 5 private bank')**: (a) **FY26 PAT ₹3,476 cr (+44.5%)** = significant improvement on guidance; (b) **Q4 ROA 1.0%** = delivered exit target; (c) **NIM +20 bps YoY** = visible expansion; (d) **Asset Quality best in 24 quarters**; (e) **Cost-to-Income -460 bps** = visible operating leverage; (f) **Credit Cost 0.17%** = lowest in 6 years; (g) **CASA crossed ₹1 lakh cr** milestone; (h) **Retail Banking profitable** inflection; (i) **PSL/RIDF -24.5% YoY** to 6%. **Mixed signals**: (a) **NIM expansion pace** — target 3% near-term but trajectory needs to accelerate; (b) **Cost-to-Income** still high vs peers; (c) **ROA expansion pace** — 1.0% to 1.5% requires multiple levers; (d) **SMBC synergy materialization** — early stage; (e) **CEO continuity** — Tonse 2 months tenure. **Overall track record**: STRONG operational execution + SMBC strategic anchor + Tonse growth ambition + visible NIM/Cost/ROA trajectory; SPECIFIC forward guidance with management actively executing across multiple levers. **Critical signals to track**: (1) **Q1 FY27 results (mid-July 2026)** — first Tonse-led quarter; NIM trajectory + Cost-to-Income + Retail profitable sustainability; (2) **NIM expansion** 2.7% → 3.0% trajectory; (3) **Cost-to-Income reduction** 63% → 60% trajectory; (4) **Credit growth** 14-15% pace; (5) **ROA expansion** 1.0% → 1.2-1.3% trajectory; (6) **SR Recoveries** ₹800-1,000 cr FY27 progress; (7) **SMBC synergies** corporate + cross-border revenue contribution; (8) **PSL/RIDF reduction** 6% → <5% pace; (9) **Asset Quality** maintained at 24-quarter best; (10) **Retail Banking** profitability sustained + scaling.",
        growthDrivers: [
            {
                driver: "1. NIM Expansion 2.7% → 3.0%+ Near-Term / 3.25-3.5% Medium-Term",
                impact:
                    "**Each 10 bps NIM = ~₹350 cr operating profit incremental** = ~₹250 cr PAT. **From 2.7% to 3.0% = +30 bps = ~₹750 cr PAT impact** = +22% PAT growth from NIM alone. **Stock impact**: +15-25% on visible NIM expansion thesis.",
            },
            {
                driver: "2. Operating Leverage (Cost-to-Income 63% → 55-60%)",
                impact:
                    "**Each 1 pp reduction in Cost-to-Income = ~₹150-200 cr operating profit savings**. **From 63% to 58% = -500 bps = ~₹800-1,000 cr PAT impact**. **Stock impact**: +15-20% on visible operating leverage realization.",
            },
            {
                driver: "3. SMBC Strategic Synergies (Corporate + Cross-Border Revenue)",
                impact:
                    "**Corporate book accelerating at +20%; SMBC cross-border banking opportunities**; **Japanese corporate referrals**; **G-SIB credit lines**. **Estimated revenue uplift ₹1,000-1,500 cr FY27-FY28** = +3-5% revenue / +5-8% PAT impact. **Stock impact**: +15-25% on visible SMBC synergies materializing.",
            },
            {
                driver: "4. Asset Quality Sustainability (GNPA 1.3% / NNPA 0.2%) + SR Recoveries ₹800-1,000 cr FY27",
                impact:
                    "**Credit Cost stable 0.20-0.25% = low provision burden**; **SR Recoveries ₹800-1,000 cr FY27 + ₹500-700 cr FY28 = ₹1,300-1,700 cr provisional write-backs over 2 years**. **Stock impact**: +10-15% on sustained asset quality + recovery tailwind.",
            },
            {
                driver: "5. Long-Term: 'Top 5 Private Bank' Ambition + Tonse Execution + Retail Franchise Scaling",
                impact:
                    "**Path from 6th to 5th** requires sustained 15% growth + overtaking peer. **Retail franchise scaling** (+41% disbursement) + **Wealth Management ₹30k cr → ₹50-70k cr** + **SMBC cross-border franchise**. **Stock impact**: +20-30% over 3-5 years as long-term ambition validated.",
            },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            {
                title: "Q4 FY26 PAT ₹1,068 cr (+45% YoY = highest in 6+ years); FY26 PAT ₹3,476 cr (+44.5%); Asset Quality best in 24 quarters (GNPA 1.3%; NNPA 0.2%; PCR 81.9%); ROA 1.0% achieved FY26 exit target",
                body:
                    "**Tonse Q4 commentary**: 'YES BANK concluded FY26 on a strong footing, delivering a Q4 RoA of 1.0% in line with our guidance, supported by a 20 bps improvement in NIMs, improvement in Cost to Income ratio and the lowest GNPA and NNPA levels since FY20. Business momentum continued to strengthen, with broad based growth across advances and deposits, underpinned by a robust CASA led deposit engine that contributed to lower Cost of Deposits.' **Tonse FY27 priorities**: 'strengthening the franchise, accelerating high quality growth, and advancing our journey toward building a resilient YES BANK that consistently creates sustainable value for all stakeholders.'",
            },
            {
                title: "FY27 Explicit Guidance: Credit Growth 14-15% (industry-line); NIM 3%+ near-term + 3.25-3.5% medium-term (2-3 years); ROA >1% annual; Retail 10-11%; Corporate ~20%; Commercial ~18%; SR Recoveries ₹800-1,000 cr",
                body:
                    "**Mgmt explicit forward guidance**: 'The bank aims to deliver growth in line with the industry, targeting a 14-15% growth rate. CASA growth has been around 11% year-on-year, and the bank plans to maintain this momentum.' **NIM target (Tonse interview)**: 'NIM can move towards 3%' + 'Medium term 3.25-3.5% over 2-3 years'. **ROA target**: 'sustain and improve the 1% ROA on annual basis; medium-term 1.3-1.5%'. **Implication**: clear quantitative framework for FY27 + medium-term.",
            },
            {
                title: "SMBC Strategic Ownership 24.2% (Largest Shareholder) — Single-Largest Cross-Border Banking M&A in India; 2 Board Nominees; Corporate + Cross-Border Synergies",
                body:
                    "**Tonse Q4 commentary**: 'FY26 also marked an important strategic milestone with SMBC becoming our largest shareholder, reaffirming global institutional confidence in the Bank's long term potential.' + 'ongoing collaboration with SMBC provides helpful strategic support, particularly in corporate and cross-border banking'. **Strategic value-add**: G-SIB credentials + Japanese corporate referrals + cross-border banking franchise + technology transfer + G-SIB credit lines. **Implication**: institutional-quality strategic anchor + visible synergy revenue uplift FY27-FY28.",
            },
            {
                title: "New CEO Vinay Tonse 'Top 5 Private Bank' Ambition (ex-SBI Executive; April 6, 2026); P-P-P-T Strategic Framework + One YES BANK",
                body:
                    "**Tonse interview ambition**: 'We are ambitious and working to become a top 5 private bank again' + 'I track four key pillars-what I call P, P, P and T-people, processes, products and technology' + 'building on the power of One YES BANK to ensure a consistent customer experience across businesses'. **Tonse Q4 commentary tribute to Prashant Kumar**: 'Over the past several years, he led YES BANK through a multi-year and truly unique transformation. His leadership was pivotal in stabilizing, strengthening and also re-anchoring the institution.'",
            },
            {
                title: "NIM Expansion Trajectory: 2.7% → 3.0% Near-Term / 3.25-3.5% Medium-Term — RIDF Normalization + CASA + Corporate Book + Retail Mix",
                body:
                    "**Tonse Q4 commentary on NIM drivers**: 'the improvement in NIM was driven by front-loaded repricing of deposits, which benefited the Bank through the year, continued traction in CASA (current account, savings account) deposits, and also reduction in high-cost borrowings and RIDF (Rural Infrastructure Development Fund)-related mandated deposits.' **CFO target**: 'PSL/RIDF below 5% of total assets by FY27' (from 6% Q4FY26; 11% FY24 peak). **Implication**: structural NIM expansion lever for next 2-3 years.",
            },
            {
                title: "Retail Banking Turned Profitable Q4 FY26 (After Q3 Break-Even) — Critical Inflection; Disbursement +41% YoY",
                body:
                    "**Mgmt Q4 commentary**: 'Retail banking, which has reported losses at the segmental level, is now internally profitable after adjusting for accounting classifications and one-off costs...The business turned profitable in the March quarter after breaking even in December, aided by lower credit costs and improved product mix.' **Retail Disbursement +41% YoY** vs stock +4.7% = visible ramp-up. **Implication**: granular retail franchise scaling = future deposits + cross-sell + lower cost of funds.",
            },
            {
                title: "Deposit + CASA Milestones: Deposits Crossed ₹3 Lakh Cr + CASA Crossed ₹1 Lakh Cr; CASA Ratio 35.1% (+80 bps YoY)",
                body:
                    "**Significant milestones**: **Total Deposits ₹3,18,969 cr (+12.1% YoY) = crossed ₹3 lakh cr**; **CASA Deposits ₹1,11,959 cr (+14.9% YoY) = crossed ₹1 lakh cr**; **CASA Ratio 35.1% (+80 bps YoY; +110 bps QoQ)**; **CA balances +20.8% YoY**; **SA balances +10.1% YoY**. **Implication**: structural improvement in funding mix + deposit franchise quality.",
            },
            {
                title: "Strong Capital CET-1 13.8% + Stock +25-30% Post-Results Rally + Beta 0.31 Defensive",
                body:
                    "**CET-1 13.8%** = significant capital headroom for AUM growth without equity dilution; **SMBC ownership stable**; **growth funded by retained earnings + Tier-II**. **Stock performance**: rallied **+25-30% over 6 weeks post-results** from ₹17.20 52w low (Mar 30) to ₹22-23 zone; **Beta 0.31** = defensive profile. **Implication**: capital + investor confidence aligned with transformation.",
            },
        ],
        bearish: [
            {
                title: "NIM 2.7% still significantly BELOW peer leaders (HDFC 3.6% / ICICI 4.4% / Axis 3.9% / Kotak 5.1%) — Structural Gap",
                body:
                    "**NIM gap**: Yes Bank 2.7% vs HDFC 3.6% (90 bps gap); ICICI 4.4% (170 bps); Axis 3.9% (120 bps); Kotak 5.1% (240 bps); IndusInd 4.0% (130 bps); IDFC First 6.0%+ (330 bps). **Reasons**: (a) PSL/RIDF legacy drag; (b) Corporate-heavy book lower yield; (c) Deposit franchise quality gap; (d) Retail mix small. **Mitigation**: structural NIM expansion thesis 2.7% → 3.0%+ over 2-3 years; not closing to peer leaders entirely but narrowing.",
            },
            {
                title: "ROA 1.0% well below industry leaders 1.7-2.3%; ROE 6-7% half of peer leaders 14-18%; Cost-to-Income 63% high vs 38-45% peer leaders",
                body:
                    "**Performance gap to peer leaders**: ROA 1.0% vs HDFC 1.8% / ICICI 2.2% / Axis 1.7% / Kotak 2.1%; ROE 6-7% vs HDFC 14% / ICICI 17% / Axis 15% / Kotak 13%; Cost-to-Income 63% vs HDFC 38% / ICICI 38% / Axis 45% / Kotak 47%. **Implication**: visible re-rating runway if performance gap closes but execution challenge significant; **3-5 years** likely required for meaningful narrowing.",
            },
            {
                title: "CEO Transition: Tonse New (April 6, 2026) Only 2 Months Tenure; Strategic Continuity + Learning Curve Questions",
                body:
                    "**Tonse appointed MD & CEO April 6, 2026**; Q4 FY26 was his first earnings call (April 18 — 12 days into role). **Risks**: (a) Strategic continuity from Prashant Kumar (6-year transformation architect); (b) Learning curve on Yes Bank legacy + culture; (c) SBI background may lean toward PSB conservatism; (d) Stakeholder relationship building. **Mitigation**: Senior management (CFO Banodkar, ED Pental, ED Jain, IR Parnami) all retained; Tonse 'Top 5 private bank' ambition aligned with shareholder expectations.",
            },
            {
                title: "PSL/RIDF Legacy Drag (6% of Total Assets); Recovery Dependence (SR ₹800-1,000 cr FY27)",
                body:
                    "**Legacy drag**: PSL Shortfall Deposits ₹27,931 cr (6% of total assets) = NIM 50-80 bps drag; declining to <5% FY27 but full normalization 3-4 years out. **Recovery dependence**: SR ₹1,547 cr in FY26; ₹800-1,000 cr guidance FY27 = ~30% of PAT; as SR pool depletes, sustainability of clean operating earnings to be tested.",
            },
            {
                title: "MSME Exposure Caution per Tonse; Retail Slippages Concern Raised on Q4 Call",
                body:
                    "**Tonse interview caution**: 'caution about lending to MSMEs amid geopolitical risks, but no stress is visible so far'. **Q4 Q&A**: 'retail slippages' concerns raised by analysts. **Implication**: while asset quality 24-quarter best, watch for retail + MSME credit cost emergence in FY27 + macro stress.",
            },
            {
                title: "Premium P/B 1.24-1.44x to Mid-Cap Peers; TTM P/E 17.8-20.7x at NBFC Mid-Cap Median; Limited Margin of Safety Post +25-30% Rally",
                body:
                    "**Valuation premium**: P/B 1.24-1.44x reflects transformation premium vs peers RBL Bank 0.9-1.0x; Federal Bank 1.4-1.6x; IndusInd 1.2-1.4x; IDFC First 1.6-1.8x; TTM P/E 17.8-20.7x = at peer mid-cap median. **Stock +25-30% post-results rally** has compressed margin of safety; **52w range ₹17.20-₹24.30**; current ₹22 = -10% from peak / +28% from trough = upper-half range. **Mitigation**: Forward P/E ~13-15x FY27E narrows gap; ROA expansion thesis supports re-rating.",
            },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text:
                "**Yes Bank Q4 FY26 = post-RBI-2020-reconstruction transformation validation + post-SMBC-deal-completion-first-quarter + first-quarter-under-CEO-Tonse multi-inflection-point** — Q4 PAT ₹1,068 cr (+44.7% YoY = highest in 6+ years); FY26 PAT ₹3,476 cr (+44.5%); **Asset Quality best in 24 quarters (FY20 onwards)**: GNPA 1.3%; NNPA 0.2%; PCR 81.9%; Credit Cost 0.17%. **NIM 2.7% Q4 (+20 bps YoY) trending toward 3.0%+**. **Cost-to-Income 63.0% (-430 bps YoY)** = visible operating leverage. **ROA 1.0% Q4 reported / 1.1% normalized** = achieved FY26 exit target. **Balance Sheet milestones**: Total Deposits crossed ₹3 lakh cr; CASA crossed ₹1 lakh cr; CASA Ratio 35.1% (+80 bps); CET-1 13.8% strong capital. **Retail Banking turned profitable Q4** (after Q3 break-even). Stock rallied **+25-30% over 6 weeks post-results** (from ₹17.20 Mar-30 52w low → ₹22-23 zone).",
            impact: "strengthens",
        },
        {
            text:
                "**The SMBC strategic ownership = defining structural transformation unlocking growth phase**: (a) **24.2% holding** by G-SIB Japanese banking powerhouse (Sumitomo Mitsui Banking Corporation); (b) **₹13,483 cr investment** at ₹21.50/share = **single-largest cross-border investment in Indian banking sector**; (c) **SMBC has ruled out exceeding 24.99%** (avoiding open offer trigger at 25%+) = stable strategic ownership; (d) **2 SMBC board nominees**; (e) **Strategic value-add**: corporate + cross-border banking expertise; G-SIB global network access; technology + risk management transfer; G-SIB credit lines; (f) **CEO Vinay Tonse appointed April 6, 2026** (ex-SBI; 'Top 5 private bank' ambition); succeeded Prashant Kumar (6-year transformation architect); (g) **Senior management continuity** — CFO Banodkar, ED Pental, ED Jain, IR Parnami all retained. **Implication**: institutional-quality strategic anchor + visible synergy revenue uplift FY27-FY28.",
            impact: "strengthens",
        },
        {
            text:
                "**FY27+ multi-engine catalysts + management guidance**: (1) **Credit Growth 14-15% (industry-line)** to ₹3,15,000+ cr; (2) **NIM expansion 2.7% → 3.0%+** near-term; **3.25-3.5% medium-term (2-3 years)** — RIDF normalization (6% → <5% FY27) + CASA + corporate book + retail mix; (3) **Operating leverage** Cost-to-Income 63% → 55-60% over 2-3 years; (4) **ROA expansion** 1.0% → 1.2-1.3% FY27 → 1.5%+ medium-term; (5) **PAT growth +30-40%** to ₹4,500-4,900 cr; (6) **SMBC synergies** corporate + cross-border visible; (7) **Retail Banking** profitable + scaling (+41% disbursement); (8) **SR Recoveries** ₹800-1,000 cr FY27; (9) **Long-term 'Top 5 private bank' ambition** (currently 6th-largest). **Implied FY27 PAT ₹4,500-4,900 cr; EPS ₹1.50-1.65**.",
            impact: "strengthens",
        },
        {
            text:
                "**Eleven structural concerns**: (1) **NIM 2.7% significantly below peer leaders** (HDFC 3.6% / ICICI 4.4% / Axis 3.9% / Kotak 5.1%); (2) **ROA 1.0% well below industry leaders 1.7-2.3%**; (3) **ROE 6-7% half of peer leaders 14-18%**; (4) **Cost-to-Income 63% high vs 38-45% peer leaders**; (5) **PSL/RIDF 6% legacy drag** (declining to <5% FY27 but full normalization 3-4 years); (6) **Retail loan book stock +4.7%** still small base (+41% disbursement encouraging); (7) **Wealth Management ₹30,000 cr tiny** vs HDFC/Kotak ₹6L cr; (8) **CEO transition** Tonse only 2 months tenure; (9) **MSME exposure caution** per Tonse on geopolitical risks; (10) **Recovery dependence** SR ₹800-1,000 cr FY27 still supports ~30% of PAT; (11) **Premium P/B 1.24-1.44x** to mid-cap peers reflects transformation. **Mitigating**: post-RBI-reconstruction fully cleaned + SMBC strategic ownership + asset quality best in 24 quarters + NIM expansion thesis + Operating leverage visible + CET-1 13.8% + Retail profitable inflection + Tonse ambition + Indian banking structural growth.",
            impact: "weakens",
        },
        {
            text:
                "**Stock at ₹22 (TTM P/E 17.8-20.7x basic on FY26 EPS ₹1.11-1.12; Forward P/E ~13-15x FY27E EPS ₹1.50-1.70; P/B 1.24-1.44x on Book ₹16.30; Market Cap ₹68,922-71,957 cr; ROA 1.0%; ROE 6-7%; NIM 2.7%; Beta 0.31; Dividend Yield 0%). 52w range ₹17.20-₹24.30; current -10% from 52w high / +28% from 52w low**. **Peer benchmarks (Indian Private Banks)**: HDFC Bank P/E 20-22x / ROE 14-15% / ROA 1.8-2.0% / NIM 3.6% (premium leader); ICICI Bank P/E 18-20x / ROE 17-18% / ROA 2.2-2.3% / NIM 4.4% (best-in-class); Axis Bank P/E 12-15x / ROE 15-16% / ROA 1.7-1.8%; Kotak Bank P/E 25-28x / ROE 13-14% / ROA 2.0-2.2% / NIM 5.1%; IndusInd P/E 8-10x / ROE 9-10% / ROA 1.3-1.5%; IDFC First P/E 18-20x / ROE 9-10% / ROA 1.0-1.2% / NIM 6.0%+; RBL Bank P/E 10-12x / ROE 6-8% / ROA 0.8-1.0%. **Yes Bank at 17.8-20.7x P/E / 1.24-1.44x P/B / ROA 1.0% / ROE 6-7% / NIM 2.7%** = trades at P/E premium to most mid-cap banks + P/B at parity = transformation/SMBC premium embedded. **Bear case ₹17-19 (-14 to -23%)**: execution misses + NIM stagnates 2.7-2.8% + ROA stays 1.0-1.1% + credit cost emerges + multiple compresses to 13-16x FY27E. **Base case ₹22-25 (-5% to +14%)**: FY27 PAT +30% + NIM 2.9% + ROA 1.1% + multiple holds 16-18x FY27E EPS ₹1.50. **Bull case ₹28-32 (+27-45%)**: FY27 PAT +40% + NIM 3.0%+ + ROA 1.2-1.3% + SMBC synergies + multiple expands 18-22x FY27E EPS ₹1.55-1.70. **Verdict: ACCUMULATE aggressively in ₹17-19 zone (would require some retracement); HOLD at fair value ₹19-25 (current ₹22 mid-zone) with sizing capped at 2-4% portfolio (could go to 4-6% if Q1 FY27 confirms continued NIM expansion + Operating leverage + Retail profitable sustainability + SMBC synergies); PARE 30-40% if >₹28 (post-rally profit booking)**. **Critical FY27 milestones**: Q1 FY27 results (mid-July 2026) NIM trajectory + Cost-to-Income + Retail sustainability; SR recovery progress; SMBC synergy revenue contribution.",
            impact: "neutral",
            note: "post-reconstruction transformation + SMBC catalyst; sizing prudent given execution gap to peer leaders + CEO transition + premium P/B",
        },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        /* Q1 — Is the core investment thesis intact? */
        thesisIntact: {
            verdict: "Strengthening (with execution caveats) — Post-RBI-2020-reconstruction transformation complete + SMBC strategic ownership 24.2% (single-largest cross-border banking M&A in India) + CEO Tonse 'Top 5 private bank' ambition + Asset Quality best in 24 quarters + NIM expansion thesis 2.7% → 3.0%+ + Operating leverage 63% → 55-60% + Retail Banking profitable inflection + CET-1 13.8% capital; HOWEVER significant execution gap to peer leaders + CEO transition + premium P/B 1.24-1.44x + PSL/RIDF legacy drag + recovery dependence cap full thesis confidence",
            reasons: [
                "**The core fundamental thesis is *strengthening*** post Q4 FY26 print: (a) **Post-RBI-2020-reconstruction transformation complete** — Q4 PAT ₹1,068 cr highest in 6+ years; FY26 PAT ₹3,476 cr (+44.5%); Asset Quality best in 24 quarters (GNPA 1.3%; NNPA 0.2%; PCR 81.9%); (b) **SMBC strategic ownership 24.2%** (single-largest cross-border banking M&A in India) = institutional anchor + cross-border synergies; (c) **CEO Tonse 'Top 5 private bank' ambition** (ex-SBI); senior management retained; (d) **NIM expansion 2.7% → 3.0%+** trajectory; (e) **Operating leverage** Cost-to-Income 63% → 55-60%; (f) **Retail Banking profitable inflection** Q4; (g) **Deposit + CASA milestones** ₹3L cr + ₹1L cr; (h) **CET-1 13.8% strong capital**; (i) **Recoveries** ₹4,795 cr FY26 + ₹800-1,000 cr FY27.",
                "**FY27+ catalysts**: (a) **Credit Growth 14-15% (industry-line)** to ₹3,15,000+ cr; (b) **NIM 3%+ near-term / 3.25-3.5% medium-term**; (c) **ROA expansion** 1.0% → 1.2-1.3%; (d) **Cost-to-Income** 63% → 55-60%; (e) **PAT growth +30-40%** to ₹4,500-4,900 cr; (f) **SMBC corporate + cross-border synergies** visible; (g) **Retail franchise scaling** (+41% disbursement); (h) **SR Recoveries** ₹800-1,000 cr FY27 continuing.",
                "**Long-term 'Top 5 private bank' ambition + Indian banking structural growth megatrend intact**: financialization + RBI policy supportive + capex cycle + retail credit growth + digital banking adoption.",
                "**Eleven concerns cap full thesis confidence**: (1) **NIM gap to peer leaders** (90-240 bps below); (2) **ROA gap** (80-130 bps below); (3) **ROE gap** (700-1100 bps below); (4) **Cost-to-Income gap** (15-25 pp above); (5) **PSL/RIDF legacy drag**; (6) **Retail stock small base**; (7) **Wealth Management tiny**; (8) **CEO transition risk**; (9) **MSME exposure caution**; (10) **Recovery dependence**; (11) **Premium P/B 1.24-1.44x**.",
                "**Thesis Strengthens If**: Q1 FY27 NIM 2.85-2.9% + Cost-to-Income 60% + Retail sustained profitable + SMBC synergies visible + ROA 1.1% + Multiple sustains 18-22x FY27E. **Thesis Breaks If**: NIM stagnates 2.7-2.8% + Cost-to-Income stays 63% + Retail credit cost emerges + SR recovery slowdown + Multiple compresses to 13-16x FY27E = stock back to ₹17-19.",
            ],
        },

        /* Q2 — Re-rate triggers + probability */
        rerateTriggers: [
            {
                trigger: "Q1 FY27 NIM + Cost-to-Income + Retail Sustainability (July 2026 Results) — THE Near-Term Catalyst",
                probability: "Medium-High (60-70%) for continued momentum",
                rationale:
                    "**Q1 FY27 results (mid-July 2026) will be critical** — first Tonse-led quarter; NIM 2.7% → 2.85-2.90% trajectory; Cost-to-Income 63% → 61-62%; Retail Banking sustained profitable; SR Recovery progress. **Scenarios**: (a) **NIM 2.85-2.90% + Cost-to-Income 60% + Retail sustained + Strong asset quality** (40-50% probability) → +10-15% stock; (b) **NIM stable 2.75% + Cost-to-Income flat + Modest growth** (30-35%) → flat to +5%; (c) **NIM stagnation + Credit cost emergence** (15-25%) → -10-15%. **Probability-weighted impact**: +3-7% over Q1 results window.",
            },
            {
                trigger: "NIM Expansion Trajectory (2.7% → 3.0% Near-Term / 3.25-3.5% Medium-Term)",
                probability: "Medium-High (60-70%) over 18-24 months",
                rationale:
                    "**Mgmt explicit medium-term target**; **PSL/RIDF normalization** 6% → <5% FY27 → <3% FY28 = structural lever. **Each 10 bps NIM = ~₹250 cr PAT impact**. **Stock impact**: +15-25% on visible NIM expansion validation.",
            },
            {
                trigger: "SMBC Strategic Synergies Materialization (Corporate + Cross-Border Revenue)",
                probability: "Medium-High (60-70%) over 18-24 months",
                rationale:
                    "**Already commencing**: corporate book +19.7% accelerating; SMBC 2 board nominees engaged. **Required**: visible corporate + cross-border revenue contribution emerging (5-10% revenue uplift). **Stock impact**: +15-25% on visible SMBC synergies validation.",
            },
            {
                trigger: "Operating Leverage Realization (Cost-to-Income 63% → 55-60%)",
                probability: "Medium (50-60%) over 24-36 months",
                rationale:
                    "**Already visible** -460 bps FY26; **further -300-800 bps achievable** over 2-3 years. **Required**: continued operating expense discipline + revenue growth. **Stock impact**: +15-20% on visible operating leverage realization.",
            },
            {
                trigger: "ROA Expansion (1.0% → 1.3-1.5%) + ROE Expansion (6-7% → 12-14%)",
                probability: "Medium (50-60%) over 24-36 months",
                rationale:
                    "**Dual driver**: NIM expansion + Operating leverage + Credit cost normalization. **Required**: sustained execution across multiple levers. **Stock impact**: +20-30% on visible ROA expansion to peer-leader-junior-bracket.",
            },
            {
                trigger: "Long-Term: 'Top 5 Private Bank' Validation",
                probability: "Low-Medium (30-40%) over 36-60 months",
                rationale:
                    "**Currently 6th**; **needs to overtake IndusInd or another peer**. **Required**: sustained 15-16% growth + share gain. **Stock impact**: +30-50% on 'Top 5' validation over 3-5 years.",
            },
        ],

        /* Q3 — Upside if guidance fully met */
        upsideIfGuidanceMet: {
            currentPrice: "₹22.00 (NSE close 20 May 2026 per ETMoney; recent prints ₹21.92-22.95; 52w range ₹17.20-₹24.30; -10% from 52w high; +28% from 52w low; +25-30% post-results rally from ₹17.20 Mar-30 low; Market Cap ₹68,922-71,957 cr)",
            targetPrice: "₹28 – ₹32",
            upsidePct: "+27% to +45%",
            horizon: "18-24 months (FY27-FY28 NIM expansion + Operating leverage + SMBC synergies + Retail franchise scaling + ROA expansion)",
            assumptions:
                "**Base case (FY27 PAT +30% / NIM 2.9% / ROA 1.1% / Cost-to-Income 61%):** **FY27 PAT ₹4,500 cr (+30% YoY)**; NII ₹11,500 cr (+18%); Operating Profit ₹6,500 cr (+18%); Credit Cost 0.20-0.25%; SR Recovery ₹800 cr → **EPS ₹1.43-1.50** (post 3,135 cr shares + minor dilution from ESOPs). **FY28 Build (PAT +25%):** PAT ₹5,600 cr; NII ₹13,200 cr (+15%); NIM 3.0%; ROA 1.2%; → **EPS ₹1.75-1.85**. **Multiples**: TTM 17.8-20.7x basic reflects transformation premium; **as ROA expands and SMBC synergies visible**, premium sustained 18-22x FY27E. **Conservative (FY27E lens):** 16x × ₹1.43 = ₹22.90 (+4%). **Base (FY27E + multiple holds):** 18x × ₹1.50 = ₹27.00 (+23%). **Bull (FY27E + expansion):** 20x × ₹1.55 = ₹31.00 (+41%). **Premium bull (FY28E lens):** 17x × ₹1.80 = ₹30.60 (+39%). **Range ₹28-₹32** blends 18-24 month with NIM expansion + Operating leverage + SMBC synergies + Retail scaling + ROA expansion + multiple stability/slight expansion.",
            workings:
                "**FY27 Build (PAT +30%; NIM 2.9%; ROA 1.1%):** Net Advances ₹3,15,000 cr (+15%); Average Advances ₹2,93,000 cr; NII ₹11,500 cr (+18%) on NIM 2.9% × Average Assets ₹5.2L cr; Non-Interest Income ₹7,500 cr (+11%); Operating Profit ₹6,500 cr (+18%); Cost-to-Income 61%; Credit Cost 0.22%; Provisions ₹1,200 cr; SR Recoveries ₹800-1,000 cr; PBT ₹6,000 cr; Tax 25% = PAT ₹4,500 cr (+30%) → EPS ₹1.43-1.50. **FY28 Build (PAT +25%; NIM 3.0%; ROA 1.2%):** Advances ₹3,60,000 cr; PAT ₹5,600 cr → EPS ₹1.78-1.85. **Multiples logic**: TTM 17.8-20.7x basic reflects transformation premium; **fair value 18-22x FY27E** on continued execution; **bull case 22-25x** on SMBC synergies + 'Top 5' validation signals. **Conservative (FY27E lens):** 16x × ₹1.50 = ₹24.00 (+9%). **Base (FY27E + multiple holds):** 18x × ₹1.55 = ₹27.90 (+27%). **Bull (FY27E + expansion):** 21x × ₹1.55 = ₹32.55 (+48%). **Range ₹28-₹32** blends 18-24 month with NIM + Operating + SMBC + ROA + multiple stability.",
        },

        /* Q4 — Best value entry zone */
        valuationEntryZone: {
            bestValueRange: "₹17 – ₹19",
            fairValue: "₹19 – ₹25",
            currentZone: "Mid Fair Value — current ₹22 sits in middle of fair value zone; modest margin of safety after +25-30% post-results rally",
            rationale:
                "**TTM P/E (basic)**: 17.8-20.7x on FY26 EPS ₹1.11-1.12 = at peer mid-cap median ~18-20x; **Forward P/E (FY27E EPS ₹1.50)**: 14.7x = below median for growing transformation bank; **FY28E P/E (EPS ₹1.80)**: 12.2x = inexpensive; **P/B**: 1.24-1.44x on Book ₹16.30 = mid-range vs RBL 0.9-1.0x; Federal 1.4-1.6x; IndusInd 1.2-1.4x; IDFC First 1.6-1.8x; **EV/Net Worth ~1.4x**; **Beta 0.31** = defensive. **Peer benchmarks (Indian Private Banks)**: HDFC P/E 20-22x / ROE 14-15% / ROA 1.8-2.0% / NIM 3.6% (premium leader); ICICI P/E 18-20x / ROE 17-18% / ROA 2.2-2.3% / NIM 4.4% (best-in-class); Axis P/E 12-15x / ROE 15-16%; Kotak P/E 25-28x / ROE 13-14% (premium); IndusInd P/E 8-10x / ROE 9-10%; IDFC First P/E 18-20x / ROE 9-10% / ROA 1.0-1.2%; RBL P/E 10-12x / ROE 6-8% / ROA 0.8-1.0%; Federal P/E 11-13x / ROE 13-14%. **Yes Bank at 17.8-20.7x P/E / 1.24-1.44x P/B / ROA 1.0% / ROE 6-7% / NIM 2.7%** sits at premium to weaker peer (RBL 10-12x; IndusInd 8-10x) justified by (i) SMBC strategic ownership + cross-border synergies; (ii) Asset quality best in 24 quarters; (iii) NIM expansion trajectory; (iv) Tonse 'Top 5' ambition; (v) Post-reconstruction fully cleaned bank. **Per *valuation_analysis.md* logic**: ACCUMULATE aggressively in ₹16-18 zone (would require some retracement or sector-wide derating); **DEPLOY 30-40% at ₹17-19** (high-confidence value); **HOLD at fair value ₹19-25** (current ₹22 in middle of zone); **PARE 30-40% if >₹28** (post-rally profit booking). **52w range ₹17.20-₹24.30**; current ₹22 = -10% from 52w-high / +28% from 52w-low = mid-zone. **Asymmetric setup**: -14% to -23% downside to ₹17-19 vs +27% to +45% upside to ₹28-32 over 18-24 months = **~1.5-2x reward-to-risk at current ₹22 = moderate-positive**; significantly better at ₹17-19 (~2.5-3.5x reward-to-risk). **Sizing prudent at 2-4% portfolio** given execution gap to peer leaders + CEO transition + premium P/B + PSL/RIDF legacy drag + recovery dependence; could go to **4-6%** if Q1 FY27 confirms continued NIM expansion + Operating leverage + Retail profitable sustainability + SMBC synergies visible.",
        },

        summary:
            "**Yes Bank Q4 FY26 = post-RBI-2020-reconstruction transformation validation + post-SMBC-deal-completion-first-quarter + first-quarter-under-CEO-Tonse multi-inflection-point** — Q4 PAT ₹1,068 cr (+44.7% YoY = highest in 6+ years); FY26 PAT ₹3,476 cr (+44.5%); **Asset Quality best in 24 quarters (FY20 onwards)** — GNPA 1.3%; NNPA 0.2%; PCR 81.9%; Credit Cost 0.17%. **NIM 2.7% Q4 (+20 bps YoY) trending toward 3.0%+**. **Cost-to-Income 63.0% (-430 bps YoY)** = visible operating leverage. **ROA 1.0% Q4 reported / 1.1% normalized** = achieved FY26 exit target. **Balance Sheet milestones**: Total Deposits crossed ₹3 lakh cr; CASA crossed ₹1 lakh cr; CASA Ratio 35.1% (+80 bps YoY); CET-1 13.8% strong capital. **Retail Banking turned profitable Q4** (after Q3 break-even) = critical inflection. **The defining narrative**: (a) **Post-RBI-managed-2020-reconstruction transformation complete** — Q4 PAT highest in 6 years; Asset Quality best in 24 quarters; (b) **SMBC strategic ownership 24.2%** (single-largest cross-border banking M&A in India; ₹13,483 cr at ₹21.50/share) = institutional anchor + governance + cross-border synergies; SMBC ruled out exceeding 24.99% = stable ownership; (c) **CEO Vinay Tonse appointed April 6, 2026** (ex-SBI; 'Top 5 private bank' ambition); succeeded Prashant Kumar (6-year transformation architect); (d) **NIM expansion thesis** 2.7% → 3.0%+ near-term / 3.25-3.5% medium-term (RIDF normalization + CASA + corporate book + retail mix); (e) **Operating leverage** Cost-to-Income 63% → 55-60% over 2-3 years; (f) **SR recovery tailwind** ₹4,795 cr FY26 + ₹800-1,000 cr FY27 continuing. **Structural strengths**: (1) **Post-reconstruction fully cleaned bank**; (2) **SMBC strategic ownership** anchor + cross-border synergies + 2 board nominees; (3) **CEO continuity** Tonse-led + senior management retained; (4) **Asset Quality best in 24 quarters**; (5) **NIM expansion trajectory**; (6) **Operating leverage visible**; (7) **Deposit + CASA milestones**; (8) **PSL/RIDF normalization** structural NIM lever; (9) **CET-1 13.8%** strong capital headroom; (10) **Retail Banking profitable** inflection. **FY27+ catalysts**: (1) **Credit Growth 14-15%** (industry-line) to ₹3,15,000+ cr; (2) **NIM 3%+ near-term**; **3.25-3.5% medium-term**; (3) **Operating leverage** Cost-to-Income 63% → 55-60%; (4) **ROA expansion** 1.0% → 1.3-1.5%; (5) **PAT growth +30-40%** to ₹4,500-4,900 cr; (6) **SMBC corporate + cross-border synergies** visible; (7) **Retail franchise scaling** (+41% disbursement); (8) **SR Recoveries** ₹800-1,000 cr FY27; (9) **Long-term 'Top 5 private bank' ambition**; (10) **Indian banking structural growth megatrend** intact. **Critical concerns**: (a) **NIM 2.7% significantly below peer leaders** (HDFC 3.6% / ICICI 4.4% / Axis 3.9% / Kotak 5.1%); (b) **ROA 1.0% well below industry leaders 1.7-2.3%**; (c) **ROE 6-7% half of peer leaders 14-18%**; (d) **Cost-to-Income 63% high vs 38-45% peer leaders**; (e) **PSL/RIDF 6% legacy drag** (target <5% FY27 but full normalization 3-4 years); (f) **Retail loan book stock +4.7%** still small base; (g) **Wealth Management ₹30,000 cr tiny** vs peers; (h) **CEO transition** Tonse only 2 months tenure; (i) **MSME exposure caution** per Tonse on geopolitical risks; (j) **Recovery dependence** SR ₹800-1,000 cr FY27 still supports ~30% of PAT; (k) **Premium P/B 1.24-1.44x** to mid-cap peers reflects transformation. **Valuation context**: Stock at ₹22 trades at **TTM P/E 17.8-20.7x basic** (EPS ₹1.11-1.12); **Forward P/E ~13-15x on FY27E EPS ₹1.50-1.70**; **~12x on FY28E EPS ₹1.80**; **P/B 1.24-1.44x on Book ₹16.30**; **Market Cap ₹68,922-71,957 cr**; **ROA 1.0%; ROE 6-7%; NIM 2.7%; Beta 0.31**. **Peer benchmarks (Indian Private Banks)**: HDFC Bank P/E 20-22x / ROE 14-15% / ROA 1.8-2.0% / NIM 3.6%; ICICI Bank P/E 18-20x / ROE 17-18% / ROA 2.2-2.3% / NIM 4.4%; Axis Bank P/E 12-15x / ROE 15-16% / ROA 1.7-1.8%; Kotak Bank P/E 25-28x / ROE 13-14% / ROA 2.0-2.2% / NIM 5.1%; IndusInd P/E 8-10x / ROE 9-10% / ROA 1.3-1.5%; IDFC First P/E 18-20x / ROE 9-10% / ROA 1.0-1.2%; RBL Bank P/E 10-12x / ROE 6-8% / ROA 0.8-1.0%; Federal Bank P/E 11-13x / ROE 13-14% / ROA 1.3-1.4%. **Yes Bank at 17.8-20.7x P/E / 1.24-1.44x P/B / ROA 1.0% / ROE 6-7% / NIM 2.7%** = premium to weaker peer (RBL, IndusInd) justified by SMBC ownership + Asset quality + NIM expansion thesis + post-reconstruction fully cleaned. **Bear case ₹17-19 (execution misses + NIM stagnates 2.7-2.8% + ROA stays 1.0-1.1% + Credit cost emerges + Multiple compresses to 13-16x FY27E; -14 to -23% downside)**. **Base case ₹22-25 (FY27 PAT +30% + NIM 2.9% + ROA 1.1% + Multiple holds 16-18x FY27E EPS ₹1.50; -5% to +14% upside)**. **Bull case ₹28-32 (FY27 PAT +40% + NIM 3.0%+ + ROA 1.2-1.3% + SMBC synergies + Multiple expands 18-22x FY27E EPS ₹1.55-1.70; +27 to +45% upside)**. Asymmetric **1.5-2x reward-to-risk** at current price = moderate-positive; significantly better at ₹17-19 (~2.5-3.5x reward-to-risk). **Verdict: ACCUMULATE aggressively in ₹16-18 zone (would require some retracement or sector-wide derating); DEPLOY 30-40% at ₹17-19 (high-confidence value); HOLD at fair value ₹19-25 (current ₹22 in middle of zone) with sizing capped at 2-4% portfolio (could go to 4-6% if Q1 FY27 confirms continued NIM expansion + Operating leverage + Retail profitable sustainability + SMBC synergies visible); PARE 30-40% if >₹28 (post-rally profit booking)**. **Critical FY27 milestones to watch**: (1) **Q1 FY27 results (mid-July 2026)** = first Tonse-led quarter; NIM trajectory + Cost-to-Income + Retail profitable sustainability + SMBC synergy progress; (2) **NIM expansion** 2.7% → 2.85-2.90% Q1 → 3.0% by Q4; (3) **Cost-to-Income reduction** 63% → 60-61% trajectory; (4) **Credit growth** 14-15% pace; (5) **ROA expansion** 1.0% → 1.15-1.20%; (6) **SR Recoveries** ₹200-250 cr quarterly pace; (7) **SMBC synergies** corporate + cross-border revenue contribution; (8) **PSL/RIDF reduction** 6% → <5%; (9) **Asset Quality** maintained best in 24 quarters; (10) **Retail Banking** profitability sustained + scaling. **This is a *'post-RBI-2020-reconstruction-transformation-complete + SMBC-strategic-ownership-as-largest-shareholder-24.2% + fresh-CEO-Tonse-transitioning-clean-up-to-growth-phase + Top-5-private-bank-ambition + asset-quality-best-in-24-quarters-validated + NIM-expansion-trajectory-2.7-to-3.0+ + Operating-leverage-63-to-55-60 + Retail-Banking-profitable-inflection + significant-execution-gap-to-peer-leaders + premium-P/B-1.24-1.44x-already-reflecting-transformation'* opportunity** — post-reconstruction fully cleaned bank + SMBC strategic ownership + CEO Tonse ambition + asset quality at 24-quarter best + NIM expansion thesis + Operating leverage visible + CET-1 13.8% + Retail profitable inflection + Indian banking structural growth intact; *but* significant gap to peer leaders (NIM 2.7% vs 3.6-5.1%; ROA 1.0% vs 1.7-2.3%; ROE 6-7% vs 14-18%; Cost-to-Income 63% vs 38-45%) + CEO transition risk + PSL/RIDF legacy drag + recovery dependence + premium P/B vs mid-cap peers warrant cautious sizing (2-4%) at current ₹22; significantly better entry at ₹17-19 if retracement occurs (4-6% sizing); **HOLD existing positions through FY27 H1 NIM expansion + Operating leverage + Retail Banking sustainability + SMBC synergies + ROA expansion validation**.",
    },
});
