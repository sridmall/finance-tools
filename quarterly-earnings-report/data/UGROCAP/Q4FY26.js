/* ============================================================
   Ugro Capital Ltd — Q4 FY26 / Full Year FY26
   Results approved: 20 April 2026; Concall: 21 April 2026
   File path: data/UGROCAP/Q4FY26.js
   Live spot @ authoring: ₹98.07 NSE (20 May 2026 — Choice)
   52w range: ₹80.12 – ₹192.50 (peak in mid-2025; trough Apr-May 2026)
   Mkt cap: ₹1,521 - ₹1,710 Cr | TTM P/E: 8.74-15.08x | P/B: 0.53-0.65x on Book ~₹185
   ROA 2.10% reported (Q4) | ROE ~7% | NIM Spread ~7.3% | Face Value ₹10
   Sources: Ugro Capital IR press release (20 Apr 2026 PDF), AlphaStreet (concall transcript),
            Fortune India (May 12, 2026 — MD Shachindra Nath interview), Choice + KotakNeo + Ventura
            (price/mkt cap), BSE filings (Profectus + DST acquisitions, FY29 commitments)
   ============================================================ */

window.registerReport("UGROCAP", "Q4FY26", {
    meta: {
        companyName: "Ugro Capital Ltd — MSME DataTech NBFC (listed Jul 2018 as India's first listed NBFC startup); Founder/MD Shachindra Nath; CEO Anuj Pandey; CFO Shilpa Bhattair; Marquee institutional backers (₹2,400+ cr raised since inception); Acquired Profectus Capital (8-Dec-2025) + Data Science Technologies (18-Mar-2026); RBI-registered NBFC + RBI-approved factoring license",
        ticker: "UGROCAP",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "20 April 2026 (results announced)",
        concallDate: "21 April 2026, post Q4 FY26 results (Q4 & Full Year FY26 Earnings Conference Call hosted by Founder/MD Shachindra Nath + CEO Anuj Pandey + CFO Shilpa Bhattair)",
        resultsBasis:
            "Consolidated (Ugro + Profectus Capital from 8-Dec-2025 + Data Science Technologies from 18-Mar-2026); FY25 / Q4 FY25 comparatives are standalone Ugro. **MSME DataTech NBFC** addressing India's **₹30 lakh crore MSME credit gap** through (a) **Emerging Market LAP — 317 branches across 13 states** (Tier 2/3/4 secured loans ₹7.5L-50L to micro-SMEs <₹3 cr turnover; GRO Score 3.0 AI/ML underwriting); (b) **Embedded Finance** — MyShubhLife merchant platform with PhonePe/BharatPe/payment partners (daily-EMI; ~₹1L ticket; underwritten on merchant GMV); (c) **Prime Intermediated (run-down)** — legacy DSA-led co-lending heavy book. **The strategic pivot moment**: Management announced **structural reset (7 Feb 2026)** to transition from scale-led intermediated lending to focused high-yield verticals; **FY29 commitments**: 85% AUM in focus verticals + ₹200-220 cr OpEx takeout + 3-3.5% ROA + zero equity dilution + capital adequacy intact. **Q4 FY26 Consolidated Highlights**: **PAT ₹51.1 cr (+26% YoY from ₹40.5 cr; -2% QoQ)**; **Net Total Income ₹348 cr (+51% YoY; +34% QoQ)**; **Interest Income ₹415 cr (+57% YoY; +26% QoQ)**; **NIM Spread ~7.3% (Yield 17.5% - CoB 10.16%) = +25 bps QoQ; +45 bps YoY**; **EPS Q4 ~₹3.35 (consolidated)**; **ROA (reported) 2.10% Q4** (vs 2.40% Q4FY25 = -30 bps as legacy book runs down faster than NPA absolute); Standalone Q4 PAT ₹30 cr (-27% YoY) on ₹25 cr one-time restructuring + co-lending income decline. **FY26 Full Year Consolidated**: **PAT ₹174.8 cr (+21% YoY from ₹143.9 cr)**; **Net Total Income ₹1,067 cr (+31% YoY)**; **PBT ₹243.5 cr (+20%)**; **Total Cost ₹209.4 cr (+21%)**; **ROA 2.10%** (vs 2.40% FY25 = -30 bps); FY26 EPS ~₹7.4 (PAT ₹113 cr on legacy 15.29 cr shares basis); Standalone PAT ~₹113 cr (-21% YoY). **Operational metrics — pivot acceleration**: **AUM ₹15,334 cr** (+28% YoY; flat QoQ — intentional as legacy runs down); **Focus-vertical AUM mix 38% = ₹5,861 cr** (vs 33% Q3FY26 = +500 bps single-quarter shift — FASTEST on record); **EM LAP AUM ₹3,581 cr** (+12% QoQ; ~23% of book; GNPA 1.2%); **Embedded Finance AUM ₹2,280 cr** (+27% QoQ; 6x in 15 months; ~15% of book; GNPA 1.7% vs 4-4.5% underwriting band; ~2.5 lakh active merchants); **Prime Intermediated ~₹9,000 cr+** (~58% of book; declining 15-20% annually). **Asset Quality**: GNPA 2.5% (vs 2.2% Q3FY26 = +30 bps denominator effect); NNPA 1.6% (+20 bps QoQ); PCR ~64% on focus verticals. **Funding**: **CoB 10.16%** (-10 bps QoQ; -45 bps YoY = 5th consecutive quarterly improvement); **CRAR 21.2%** (+40 bps QoQ); **Leverage 3.7x**; **₹1,800 cr liquidity buffer**; **Ratings outlook A+ positive** (CRISIL); ECB pipeline + DFI funding (longer tenor) active. **Q4 corporate actions**: **₹220 cr annualized OpEx takeout fully actioned** (₹25 cr one-time taken Q4; full base reset; FY27 OpEx ₹490-500 cr vs FY26 ₹750 cr combined); **Profectus integration complete** (28 location overlaps consolidated; ~₹120 cr OpEx synergy); CCDs/warrants fully converted (2 lakh shares pending). **Stock performance**: stock **-35% 1-yr** (from ₹192.50 peak to ₹98 zone) reflecting J-curve transition optics + market de-rating during transition year + Q4 standalone PAT optics drag. **52w range ₹80.12-₹192.50**; current ₹98 = **-49% from 52w peak; +22% from 52w low**.",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. **Five critical context items**: (1) **The strategic pivot from *scale-led intermediated lending* to *EM LAP + Embedded Finance* is the single biggest event for this stock in 5 years**: (a) **Founder/MD Shachindra Nath publicly reversed** on 'gung-ho co-lending + scale ambition' philosophy (Feb 2026 reset announcement) acknowledging structural challenges (CoB advantage didn't materialize; DSA-led churn; capital not accreting); (b) **One full quarter into execution every FY29 commitment on track or ahead**: focus mix +500 bps single-quarter, OpEx takeout fully actioned, CoB -45 bps YoY, CRAR up, zero dilution reaffirmed; (c) **FY27 = J-curve transition year** — flat AUM, marginal ROA improvement, weak headline PAT optics (mgmt explicit); (d) **FY28-29 = full pivot reflection** — focus mix 60-70%, OpEx flowing to bottom line, CoB compression embedded, ROA scaling. **The thesis = mid-cap MSME-focused NBFC executing strategic pivot with public 5-metric scorecard + zero dilution commitment + structural ₹30 lakh cr credit gap tailwind**. (2) **Focus verticals = high-quality structurally-better marginal book replacing legacy**: (a) **EM LAP ₹3,581 cr** (+12% QoQ; 317 branches Tier 2/3/4; 17% yields; GNPA only 1.2%; secured loans ₹7.5L-50L); (b) **Embedded Finance ₹2,280 cr** (+27% QoQ; 6x in 15 months; daily-EMI ~₹1L ticket; underwritten on merchant GMV via PhonePe/BharatPe etc; 24-26% yield; GNPA 1.7% vs 4-4.5% underwriting band; ~2.5 lakh active merchants); both segments have proprietary distribution (317 branches built) + data moats (GRO Score 3.0 + GMV underwriting); legacy intermediated book ~58% being deliberately wound down (15-20% per annum); (c) **Focus-vertical mix shift 33% → 38% in single quarter = FASTEST on record**; FY29 target 85% = clear visibility; (d) **Branch network completely built** — 317 vs 127 two years ago; **156 sub-6-month branches yet to ramp** = embedded multi-year disbursement runway without further OpEx; vintage branches ₹68L/month vs ₹80L target = visible productivity uplift. (3) **₹220 cr OpEx takeout fully actioned + zero equity dilution through FY29 = structurally-clean operating leverage setup**: (a) **₹220 cr OpEx takeout already actioned in Q4** = FY27 combined OpEx ₹490-500 cr vs FY26 ₹750 cr = visible bottom-line uplift; (b) **CRAR 21.2% + Leverage 3.7x + ₹1,800 cr liquidity** = no equity raise needed for 3-5 years; entirely funded by retained earnings + ECB + DFI funding; (c) **CoB 10.16% (-45 bps YoY; 5th consecutive quarterly improvement)** + **Ratings A+ positive outlook** = each 25 bps cut = ~₹35-40 cr PBT; potential rating upgrade FY27 = 50-75 bps CoB compression possible; (d) **For mid-cap NBFC this is the strongest possible signal of self-sustaining capital** — historically Ugro was a serial diluter; new no-dilution commitment is structural shift. (4) **Critical concerns + execution gaps remain significant despite strategic clarity**: (a) **Headline AUM flat through FY27** — legacy ₹9,000 cr+ prime book runs down only 15-20% per year (long-tenor LAP); investors anchored on AUM growth will see optical stagnation for 4-6 quarters; (b) **Standalone PAT -27% YoY Q4 / -21% YoY FY26** = optics weak; J-curve earnings dip before recovering; (c) **GNPA crept up 30 bps QoQ to 2.5%** — mgmt calls 'denominator effect' but unverifiable for 2-3 quarters; (d) **Embedded finance unsecured ~15% of AUM with only ~6 cohorts vintage data** — daily-EMI at 24-26% yield; mgmt comfort 4-4.5% GNPA implies credit cost could rise materially if cohort seasoning surprises; this segment now central to FY29 ROA story; (e) **FY29 3-3.5% ROA target ambitious** — Ugro has never crossed 2% ROA at scale; requires execution on every lever with no margin of error; (f) **Strategy reversal risk** — Shachindra acknowledged 'always built for scale' philosophy was wrong; investor perception: what if FY29 also requires another pivot; (g) **Stock -35% 1-yr** = market doubting transition; (h) **Profectus + DST integration risk** — recent acquisitions still bedding in. (5) **Valuation = deep value but optionality-led**: Stock at ₹98 trades at **TTM P/E 8.7-15.1x** (depending on basic vs diluted EPS interpretation); **P/B 0.53-0.65x on Book ~₹185** = significant discount to book; **Forward P/E 6-8x on FY27E EPS ~₹12-14**; **Forward P/E ~4-5x on FY29E EPS ₹20-25 (if 3-3.5% ROA achieved)**. **Peer benchmarks (MSME-focused NBFCs)**: **Mas Financial** P/E 20-25x / ROE 14-15% / ROA 3% (steady-state benchmark); **Five Star Business Finance** P/E 22-28x / ROE 15-16% / ROA 6-7% (MSME unsecured leader); **CSB Bank** P/E 13-15x; **Manappuram** P/E 8-12x; **Muthoot** P/E 10-12x; **Capri Global** P/E 15-18x. **Ugro at 8.7-15.1x P/E / 0.53-0.65x P/B / ROA 2.1% (transition; target 3-3.5% FY29)** = trades at significant discount reflecting (i) Transition execution risk; (ii) J-curve optics; (iii) Standalone PAT decline; (iv) Embedded finance vintage risk; (v) AUM flat headline; **but** structural setup attractive — Bajaj-Finance-quality FY29 ROA target + zero dilution + branch network built + 317-branch runway + 6x embedded finance growth + structural ₹30 lakh cr credit gap. **Verdict**: a 'strategic-pivot-execution-validated-Q4 + branch-network-built-pre-paid + OpEx-takeout-actioned + zero-equity-dilution-through-FY29 + focus-mix-shift-fastest-on-record + J-curve-transition-year-FY27-with-flat-AUM-and-weak-headline-PAT + embedded-finance-vintage-risk + standalone-PAT-decline + stock-down-35-percent-1Y-reflecting-transition-optics + deep-value-P/B-0.53-0.65x + FY29-3-3.5-percent-ROA-target-ambitious' setup; sizing prudent at **2-4%** portfolio given execution risk + J-curve optics + recent listing/pivot complexity; bull case ₹150-180 (+53-84%) on FY28+ ROA delivery + focus mix 60%+ + CoB compression + multiple re-rating to 12-15x FY28E + P/B 1.0x; bear case ₹70-80 (-18 to -29%) on embedded finance credit cost emergence + AUM stagnation + standalone PAT continued decline + multiple compresses to 6-8x FY27E.",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            {
                metric: "Net Total Income (₹Cr) — the *yield-uplift-validation* metric",
                current: "**Q4 ₹348 cr (+51% YoY; +34% QoQ)**; **FY26 ₹1,067 cr (+31% YoY)**",
                qoq: "Q3 ₹260 → Q4 ₹348 = +34% QoQ",
                yoy: "**Q4 +51% YoY** on flat AUM = proof the yield uplift from strategic pivot already showing in P&L; **FY26 +31%** = full-year reflects gradual mix shift toward focus verticals (yields 17-26%) vs legacy intermediated (13-15%). **Mgmt explanation**: 'structural mix shift toward higher-yield on-book assets'.",
            },
            {
                metric: "Interest Income (₹Cr) — Core Lending Revenue",
                current: "**Q4 ₹415 cr (+57% YoY; +26% QoQ)**",
                qoq: "+26% QoQ",
                yoy: "**+57% YoY** despite flat AUM = significant yield uplift from focus-vertical mix shift; Embedded Finance (24-26% yield) + EM LAP (17%) replacing legacy intermediated (13-15%). **Implication**: visible P&L benefit of strategic pivot.",
            },
            {
                metric: "NIM / Spread (%) — the *strategic-pivot-effectiveness* metric",
                current: "**~7.3% spread (Yield 17.5% – CoB 10.16%)**",
                qoq: "+25 bps QoQ",
                yoy: "+45 bps YoY",
                trend: "**Drivers**: (a) Yield uplift from focus verticals; (b) CoB falling -45 bps YoY (5th consecutive quarterly improvement); (c) Co-lending mix declining (lumpy income → annuity book). **Forward**: spread should expand further as focus mix moves 38% → 50%+ and CoB compresses further (rating upgrade catalyst).",
            },
            {
                metric: "PAT (Consolidated, ₹Cr) — Q4 ₹51.1 cr (+26% YoY); FY26 ₹174.8 cr (+21%)",
                current: "**Q4 ₹51.1 cr (+26% YoY from ₹40.5 cr; -2% QoQ)**; **FY26 ₹174.8 cr (+21% YoY from ₹143.9 cr)**",
                qoq: "Q3 ₹52 → Q4 ₹51 = roughly flat",
                yoy: "**Q4 +26% YoY** on flat AUM = pure margin uplift contribution; **FY26 +21%** = visible bottom-line growth. **Note**: Standalone Q4 PAT ₹30 cr (-27% YoY) due to ₹25 cr one-time restructuring + co-lending income decline; **consolidated** includes Profectus contribution (8 Dec 2025 onwards).",
            },
            {
                metric: "EPS (FY26 Consolidated, ₹) — Diluted on Expanded Share Base",
                current: "**~₹7.4 (FY26 PAT ₹113 cr legacy basis / 15.29 cr sh.)**; **Reported consolidated EPS ~₹11.4 on 15.3 cr shares basis**",
                qoq: "n/a",
                yoy: "-21% on legacy basis (standalone optics); **+21% on consolidated basis**",
                trend: "**Share base expansion** from acquisitions (Profectus CCDs converted; DST shares issued); **TTM diluted EPS** complex given mid-year acquisitions; **Q4 standalone EPS hit by ₹25 cr restructuring**.",
            },
            {
                metric: "ROA — 2.10% Reported Q4 (vs 2.40% Q4FY25 = -30 bps Denominator Effect)",
                current: "**Q4 ROA 2.10% reported** (vs 2.40% Q4FY25; -30 bps YoY)",
                qoq: "stable",
                yoy: "**-30 bps** due to (a) legacy run-down faster than NPA absolute = denominator effect on assets; (b) ₹25 cr restructuring drag; (c) Profectus integration costs. **FY29 target 3-3.5%** = significant uplift required.",
            },
        ],
        businessQualityMetrics: [
            {
                metric: "AUM (₹Cr) — Flat QoQ on Strategic Run-Down; +28% YoY on Acquisitions",
                current: "**₹15,334 cr consolidated** (Ugro + Profectus + DST)",
                qoq: "~Flat (intentional)",
                yoy: "+28% (acquisition-led)",
                trend: "**Strategic flat-line**: legacy book runs down 15-20% per year while focus verticals scale +27% QoQ (Embedded Finance) and +12% QoQ (EM LAP); **FY27 outlook**: flat AUM officially guided; **FY28+**: growth resumes as legacy run-off ends and focus verticals dominate.",
            },
            {
                metric: "Focus-Vertical AUM Mix — 38% (vs 33% Q3FY26 = +500 bps Fastest on Record)",
                current: "**38% = ₹5,861 cr** (vs 33% = ₹5,060 cr Q3FY26)",
                qoq: "+500 bps QoQ (fastest single-quarter shift on record)",
                yoy: "+15 pp YoY (from ~23% Q4FY25)",
                trend: "**FY29 target 85%**; **FY27 trajectory**: 38% → 50-55% as focus verticals grow + legacy runs down; **clear visibility** to FY29 commitment.",
            },
            {
                metric: "GNPA / NNPA (%) — Crept Up 30 bps QoQ on Denominator Effect; Underlying Clean",
                current: "**GNPA 2.5% / NNPA 1.6%** Q4FY26",
                qoq: "+30 bps GNPA",
                yoy: "+30 bps GNPA",
                trend: "**Mgmt explanation**: denominator effect (legacy book shrinking faster than absolute NPAs); **EM LAP GNPA 1.2%** + **Embedded Finance GNPA 1.7%** = clean focus verticals; **Legacy Other Products GNPA 3.2%** (discontinued; passive run-off; PCR 45%). **Risk**: needs 2-3 quarters to verify denominator vs underlying deterioration thesis.",
            },
            {
                metric: "Cost of Borrowing (CoB) — 10.16% (5th Consecutive Quarterly Improvement)",
                current: "**10.16%** Q4FY26 (vs 10.26% Q3FY26; 10.61% Q4FY25)",
                qoq: "-10 bps QoQ",
                yoy: "-45 bps YoY",
                trend: "**5th consecutive quarterly improvement**; **Drivers**: ECB pipeline + DFI funding (longer tenor) + repeat lenders + ratings outlook A+ positive (formal upgrade likely FY27); **Each 25 bps cut = ₹35-40 cr PBT impact** at current debt scale ₹10,782 cr.",
            },
            {
                metric: "CRAR / Leverage — 21.2% / 3.7x = Strong Capital + Headroom",
                current: "**CRAR 21.2%** (vs 20.8% Q3FY26); **Leverage 3.7x**",
                qoq: "+40 bps QoQ CRAR",
                yoy: "stable",
                trend: "**Above regulatory minimum 15% by 620 bps** = significant headroom for AUM growth without equity dilution; **₹1,800 cr liquidity buffer**; **Mgmt commitment**: 'No incremental equity through FY29' = structurally-clean operating leverage setup.",
            },
            {
                metric: "Branch Network — 317 Across 13 States (+90% vs FY24); 156 Sub-6-Month Branches Yet to Ramp",
                current: "**317 branches across 13 states**; **vintage branches ₹68L/month disbursement vs ₹80L target**",
                qoq: "stable (build-out complete)",
                yoy: "+30% YoY (vs 244 Q4FY25); **+150% vs FY24 (127)**",
                trend: "**Build-out complete** — no further OpEx required; **156 sub-6-month branches yet to ramp**; vintage productivity at 85% of target; **Each ₹12L/branch/month uplift × 317 branches = ~₹450 cr incremental annual disbursement at higher yields** = pure operating leverage runway.",
            },
            {
                metric: "Embedded Finance AUM — ₹2,280 Cr (+27% QoQ; 6x in 15 Months; 24-26% Yield)",
                current: "**₹2,280 cr AUM** (~15% of book); **~2.5 lakh active merchants**",
                qoq: "+27% QoQ",
                yoy: "+150% YoY (estimate)",
                trend: "**6x growth in 15 months**; **Yield 24-26%** = highest-yielding marginal book Ugro has ever built; **GNPA 1.7% vs 4-4.5% underwriting band** = currently outperforming; **Distribution**: PhonePe + BharatPe + other payment ecosystems; daily-EMI; ~₹1L average ticket; underwritten on merchant GMV data.",
            },
        ],
        footnotes: [
            "**The Ugro story is *MSME DataTech NBFC executing strategic pivot from scale-led intermediated lending to focused high-yield verticals*** with Q4 FY26 PAT ₹51.1 cr (+26% YoY consolidated), FY26 PAT ₹174.8 cr (+21%), NTI ₹1,067 cr (+31%), AUM ₹15,334 cr (+28% YoY; flat QoQ intentional), Focus-vertical mix 38% (+500 bps QoQ = FASTEST on record), CoB 10.16% (-45 bps YoY; 5th consecutive improvement), CRAR 21.2% strong capital, zero equity dilution through FY29 commitment. **No direct listed peer at this exact stage of pivot** — closest comparables are Mas Financial (steady-state benchmark) and Five Star Business Finance (MSME unsecured leader).",
            "**Q4 FY26 print exceptional on consolidated basis**: PAT +26%, NTI +51%, Interest Income +57% — all driven by yield uplift from strategic mix shift while AUM flat. **Standalone Q4 PAT -27% YoY** due to ₹25 cr one-time restructuring + co-lending income decline = J-curve transition cost. **5th consecutive quarterly CoB improvement** = funding side normalizing.",
            "**The strategic pivot announced Feb 7, 2026 = 5 FY29 commitments**: (1) Focus-vertical mix 85% of AUM; (2) OpEx takeout ₹200-220 cr annualized; (3) Run-down of prime intermediated at 15-20% per annum; (4) Zero equity dilution through FY29; (5) ROA 3-3.5% by FY29. **One full quarter into execution**: 3 BEAT (focus mix shift, OpEx takeout, Profectus integration), 4 MET (run-down pace, zero dilution, CoB, asset quality at upper edge), 0 MISSES = high execution credibility.",
            "**Focus verticals = high-quality structurally-better marginal book**: (a) **EM LAP** — 317 branches Tier 2/3/4; 17% yields; GNPA 1.2%; secured ₹7.5L-50L loans; (b) **Embedded Finance** — daily-EMI ~₹1L ticket; 24-26% yields; GNPA 1.7% (vs 4-4.5% underwriting band); ~2.5 lakh active merchants via PhonePe/BharatPe etc. **Legacy Prime Intermediated** ~58% of book being deliberately wound down (low-yield 13-15%, DSA-led, co-lending heavy, capital-not-accretive); **Long-tenor LAP** runs off slowly = ~4-6 quarters of flat AUM optics.",
            "**Eight structural concerns**: (1) **Headline AUM flat through FY27** (J-curve); (2) **Standalone PAT -27% Q4 / -21% FY26** = weak optics; (3) **GNPA +30 bps QoQ** denominator effect or deterioration?; (4) **Embedded finance vintage data thin** (6 cohorts only); (5) **FY29 3-3.5% ROA ambitious** (Ugro never crossed 2% at scale); (6) **Strategy reversal risk** (founder Nath public reversal on co-lending + scale ambition); (7) **Stock -35% 1-yr** = market doubting transition; (8) **Profectus + DST integration risk**. **Mitigating**: 317-branch build-out complete + ₹220 cr OpEx takeout actioned + zero dilution + CoB compression + structural ₹30 lakh cr MSME credit gap + 6x embedded finance growth + public 5-metric scorecard transparency.",
        ],
        patternDetected:
            "**Revenue (NII) up sharply, AUM flat, headline PAT distorted by ₹25 cr one-time restructuring cost** — Q4 NTI ₹348 cr (+51% YoY) + Interest Income ₹415 cr (+57%) + Consolidated PAT ₹51.1 cr (+26%) + FY26 PAT ₹174.8 cr (+21%) + Standalone Q4 PAT ₹30 cr (-27% YoY due to restructuring) + AUM ₹15,334 cr (flat QoQ; +28% YoY) + Focus-vertical mix 38% (+500 bps QoQ — fastest single-quarter shift on record) + EM LAP AUM ₹3,581 cr (+12% QoQ; GNPA 1.2%) + Embedded Finance AUM ₹2,280 cr (+27% QoQ; 6x in 15 months; GNPA 1.7%; 24-26% yields) + GNPA 2.5% / NNPA 1.6% (+30 bps QoQ denominator effect) + CoB 10.16% (5th consecutive quarterly improvement) + CRAR 21.2% (+40 bps QoQ) + Leverage 3.7x + ₹1,800 cr liquidity + 317 branches built (vs 127 FY24) + 156 sub-6-month branches yet to ramp + ₹220 cr annualized OpEx takeout fully actioned + Zero equity dilution through FY29 commitment + Ratings A+ positive outlook + Stock -35% 1-yr / 52w range ₹80.12-192.50 / TTM P/E 8.7-15.1x / P/B 0.53-0.65x — **pattern reading: \"MSME DataTech NBFC in mid-execution of strategic pivot — focus-vertical mix +500 bps single-quarter (33%→38%, fastest on record), CoB -45 bps YoY (5th consecutive improvement), branch network built (317 vs 127 FY24), ₹220 cr OpEx takeout actioned, zero equity dilution through FY29. Q4 consolidated PAT +26% YoY validating yield uplift thesis BUT headline AUM flat + standalone PAT -27% YoY + GNPA +30 bps = J-curve optics weak through FY27. Embedded finance 6x in 15 months + 24-26% yields = highest-quality marginal book but vintage data thin (6 cohorts). FY29 3-3.5% ROA target ambitious (Ugro never crossed 2% at scale). Founder/MD Nath public reversal on scale-led co-lending philosophy = strategy credibility + reversal-risk perception. Premium 'transition execution' story discounted in stock at -35% 1-yr; trades at deep value P/B 0.53-0.65x reflecting J-curve optics + execution risk\"**. **The setup**: bull case if FY27 H1 focus mix 45%+ + CoB <10% + Embedded Finance GNPA stable + OpEx flowing to bottom line + Multiple re-rates to 12-15x FY28E or P/B 1.0x = stock to ₹150-180 (+53-84%); bear case if Embedded Finance credit cost emerges + AUM stagnates + Standalone PAT continues declining + Multiple compresses to 6-8x FY27E = stock to ₹70-80 (-18 to -29%).",
        interpretation:
            "**Ugro Capital Q4 FY26 is the *strategic-pivot-validation-quarter + J-curve-transition-entry-quarter*** — Q4 consolidated PAT ₹51.1 cr (+26% YoY); FY26 PAT ₹174.8 cr (+21%); NTI ₹1,067 cr (+31%); NIM Spread ~7.3% (Yield 17.5% - CoB 10.16% = +45 bps YoY). **AUM ₹15,334 cr flat QoQ** (intentional as legacy runs down while focus scales). **Focus-vertical mix 38% (+500 bps single-quarter = FASTEST on record)**; **EM LAP +12% QoQ + Embedded Finance +27% QoQ (6x in 15 months)**. **Asset Quality**: GNPA 2.5% (+30 bps QoQ denominator effect); focus verticals clean (EM LAP 1.2%; EF 1.7%). **Funding**: CoB 10.16% (-45 bps YoY = 5th consecutive improvement); CRAR 21.2% strong; ₹1,800 cr liquidity; Ratings A+ positive. **₹220 cr OpEx takeout fully actioned** = FY27 cost base structurally reset. **Zero equity dilution through FY29** commitment intact. **The defining narrative**: (a) **Strategic pivot validated Q1 post-Feb-2026-reset** — every FY29 commitment on track or ahead of plan; (b) **Focus verticals high-quality** structurally-better book (EM LAP secured 17%; EF 24-26% with merchant-GMV-underwriting); (c) **Branch network completely built** (317 vs 127 FY24) + 156 sub-6-month branches embedded multi-year runway without further OpEx; (d) **₹220 cr OpEx takeout** + **CoB compression** = visible operating leverage; (e) **FY27 = J-curve transition year** — explicit flat AUM, marginal ROA improvement, weak headline PAT; (f) **FY28-29 = full pivot reflection** — focus mix 60-85%, ROA 3-3.5% target. **Structural strengths**: (1) **Strategic clarity + public 5-metric FY29 scorecard**; (2) **Focus verticals high-quality** (yields 17-26%; GNPA 1.2-1.7%); (3) **Branch network built + 156 sub-6m branches yet to ramp**; (4) **₹220 cr OpEx takeout actioned** = FY27 cost reset; (5) **CoB compression 5th consecutive** = each 25 bps = ₹35-40 cr PBT; (6) **CRAR 21.2% + zero dilution commitment**; (7) **Embedded Finance 6x in 15 months** = highest-quality marginal book; (8) **₹30 lakh cr MSME credit gap** structural tailwind. **Growth catalysts FY27-29**: (1) **Focus-mix shift** 38% → 50%+ FY27 → 85% FY29; (2) **OpEx ₹220 cr** flowing to bottom line from Q1 FY27; (3) **Branch productivity ramp** vintage ₹68L → ₹80L/month; (4) **CoB compression** ratings upgrade A+ → AA- = 50-75 bps; (5) **Embedded Finance scale-up** ₹2,280 cr → ₹5,000+ cr; (6) **Co-lending → on-book interest income** transition fixes earnings volatility; (7) **ROA expansion** 2.1% → 3-3.5% FY29. **Critical concerns**: (a) **Headline AUM flat through FY27** = market may de-rate during optical lull; (b) **Standalone PAT -27% Q4 / -21% FY26** = weak optics + J-curve dip; (c) **GNPA +30 bps QoQ** denominator effect or deterioration?; (d) **Embedded finance vintage data thin** (6 cohorts; central to FY29 ROA); (e) **FY29 3-3.5% ROA ambitious** (Ugro never crossed 2% at scale); (f) **Strategy reversal risk** investor perception; (g) **Stock -35% 1-yr** = market doubting transition; (h) **Profectus + DST integration**. **Valuation context**: Stock at ₹98 trades at **TTM P/E 8.7-15.1x** / **P/B 0.53-0.65x on Book ~₹185** = significant discount to book; **Forward P/E ~6-8x on FY27E EPS ₹12-14**; **~4-5x on FY29E EPS ₹20-25 (if 3-3.5% ROA achieved)**. **Peer benchmarks (MSME-focused NBFCs)**: Mas Financial P/E 20-25x / ROE 14-15% / ROA 3% (steady-state benchmark); Five Star P/E 22-28x / ROE 15-16% / ROA 6-7%; CSB Bank P/E 13-15x; Manappuram P/E 8-12x. **Ugro at 8.7-15.1x P/E / 0.53-0.65x P/B / ROA 2.1% (transition)** = deep value with optionality. **Bear case ₹70-80** (Embedded Finance credit cost emergence + AUM stagnation + Standalone PAT continued decline + Multiple compresses to 6-8x FY27E; -18 to -29% downside). **Base case ₹100-130** (FY27 H1 focus mix 45%+ + Stable GNPA + OpEx flowing to bottom line + Multiple holds 10-12x FY27E EPS ₹12; +2% to +33% upside). **Bull case ₹150-180** (FY28+ ROA delivery + Focus mix 60%+ + CoB compression + Multiple re-rates 12-15x FY28E EPS ₹17 or P/B 1.0x on Book ₹190; +53-84% upside).",
        whatWentRight: [
            "**Q4 FY26 yield-uplift validation**: Net Total Income +51% YoY + Interest Income +57% YoY on FLAT AUM = visible P&L benefit of strategic mix shift toward focus verticals (yields 17-26%) replacing legacy intermediated (13-15%). **Focus-vertical mix 38% (+500 bps single-quarter = FASTEST on record)**; **Embedded Finance +27% QoQ (6x in 15 months)** = highest-quality marginal book.",
            "**Structural execution validation**: (1) **CoB 10.16% (-45 bps YoY; 5th consecutive quarterly improvement)**; (2) **CRAR 21.2% (+40 bps QoQ)**; (3) **₹220 cr OpEx takeout fully actioned** Q4 (FY27 OpEx ₹490-500 cr vs FY26 ₹750 cr = structural reset); (4) **Branch network completely built** (317 vs 127 FY24) + 156 sub-6-m yet to ramp; (5) **Ratings A+ positive outlook**; (6) **₹1,800 cr liquidity buffer**; (7) **Profectus integration** complete with ₹120 cr OpEx synergy; (8) **Zero equity dilution through FY29** reaffirmed. **Walking-the-talk score**: 3 BEAT, 4 MET, 0 MISS on 7 tracked commitments.",
        ],
        whatWentWrong: [
            "**Headline AUM flat + Standalone PAT optics weak**: AUM ₹15,334 cr flat QoQ (intentional but optics drag); **Standalone Q4 PAT -27% YoY** (₹25 cr restructuring + co-lending decline); **Standalone FY26 PAT -21% YoY**; **GNPA crept up 30 bps QoQ** to 2.5% (mgmt 'denominator effect' but unverifiable for 2-3 quarters). **Stock -35% 1-yr** reflecting market de-rating during transition.",
            "**Embedded finance vintage risk + FY29 ROA target ambitious**: (1) **Embedded Finance unsecured ~15% of AUM with only ~6 cohorts vintage data** — mgmt comfort 4-4.5% GNPA implies credit cost could rise materially; central to FY29 ROA story; (2) **FY29 3-3.5% ROA target** — Ugro has never crossed 2% ROA at scale; requires every lever execution with no margin of error; (3) **Strategy reversal risk** — founder Nath public reversal on co-lending + scale ambition only 24-30 months after embracing them.",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "1. Emerging Market LAP (Focus Vertical) — the *secured-yield-engine + branch-productivity-play*",
                yoyGrowth: "+25%+ trajectory; +12% QoQ",
                mix: "**₹3,581 cr AUM (~23% of book)**",
                analysis:
                    "**Built via 317 branches in Tier 2/3/4 cities across 13 states**; secured loans **₹7.5L-50L** to micro-SMEs (turnover <₹3 cr); **GRO Score 3.0** AI/ML underwriting on banking + credit bureau + GST data; **Yield ~17%**; **GNPA only 1.2%** = best-in-class; vintage branches **₹68L disbursement/month vs ₹80L target** (85% of target).",
                triggers:
                    "(a) **Branch maturity** — 156 sub-6-month branches yet to ramp = embedded productivity uplift; (b) **Vintage branch ₹12L/month productivity uplift × 317 branches = ~₹450 cr incremental annual disbursement**; (c) **CoB compression** = wider spread; (d) **Ratings upgrade** (A+ → AA-) = 50-75 bps CoB cut; (e) **Geographic deepening** within 13 states.",
            },
            {
                name: "2. Embedded Finance (Focus Vertical) — the *digital-merchant-GMV-data-moat-vertical*",
                yoyGrowth: "+150% YoY (estimate); +27% QoQ; 6x in 15 months",
                mix: "**₹2,280 cr AUM (~15% of book)**",
                analysis:
                    "**Daily-EMI** with ~₹1L average ticket size embedded in **PhonePe/BharatPe/payment ecosystems**; **underwritten on merchant GMV data**; **Yield 24-26%** = highest in book; **GNPA 1.7%** (vs 4-4.5% underwriting band = outperforming); **~2.5 lakh active merchants**. **Mgmt commentary**: 'underwritten on merchant GMV data; cohort-vintage tracking via MyShubhLife platform'.",
                triggers:
                    "(a) **Hundreds of millions of digital-payment merchants** in India without working capital access; (b) **Partnership depth + new partners** (PhonePe, BharatPe expanding; new platforms onboarding); (c) **Data-science scale economics** improving underwriting precision; (d) **24-26% yield** = highest-quality marginal book; (e) **Negative trigger**: cohort-seasoning credit cost emergence if GNPA drifts toward 4-4.5% band.",
            },
            {
                name: "3. Prime Intermediated (Run-Down) — Business Loans + Machinery Loans + Prime LAP",
                yoyGrowth: "Declining 15-20% annually",
                mix: "**~₹9,000 cr+ AUM (~58% of book; was ~70%)**",
                analysis:
                    "**Intentional run-down**: low-yield (13-15%), DSA-led origination, no pricing edge given Ugro's CoB; co-lending income volatile and not capital-accretive (post CoB + opex + credit cost spread was ~1%); long-tenor LAP runs off slowly. **Run-off pace**: ~₹3,000 cr+ run-off in FY26.",
                triggers:
                    "**None — being deliberately wound down**. Cash flows redirected into focus verticals. **Run-off duration**: 4-6 quarters of flat AUM optics; faster cleanup possible with sale of legacy books (no announcement yet).",
            },
            {
                name: "4. Other Products (Supply Chain Finance, Sathi liberal LAP, Unsecured BL — Discontinued)",
                yoyGrowth: "Run-off",
                mix: "**Tail (~5% of book)**",
                analysis:
                    "**Discontinued last year**; **GNPA elevated at 3.2%** (legacy stress); pure run-off with provisioning intact (PCR 45%); negligible new originations.",
                triggers: "**None — passive run-down**; final cleanup over 4-6 quarters.",
            },
        ],
        assessment: [
            "**The segment structure (EM LAP 23% + Embedded Finance 15% = Focus 38% + Prime Intermediated run-down 58% + Other tail 5%) is *mid-pivot model with fastest single-quarter shift on record***: focus verticals already 38% (vs 23% Q4FY25 = +15 pp YoY); FY29 target 85% = clear visibility; legacy 58% being deliberately wound down at 15-20% per annum.",
            "**Focus verticals = high-quality structurally-better marginal book** vs legacy: (a) **EM LAP yields 17% vs legacy 13-15%** with GNPA 1.2% vs 2.5% headline; (b) **Embedded Finance yields 24-26% vs legacy 13-15%** with GNPA 1.7% vs 2.5%; (c) Both segments have proprietary distribution moats (317 branches + GRO Score AI + merchant GMV underwriting via payment platform partnerships).",
            "**Segment quality verdict: STRONG-IN-TRANSITION-with-J-curve-optics + STRUCTURAL-PIVOT-EXECUTION-FASTEST-IN-COMPANY-HISTORY**. Focus verticals are genuine niches; legacy run-down is right strategic call but creates near-term headline drag through FY27. Embedded Finance vintage risk (6 cohorts only) is the singular execution risk on FY29 ROA story.",
        ],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            {
                metric: "1. Total AUM (₹Cr) — Flat Through FY27; Growth Resumes FY28",
                current: "₹15,334 cr consolidated",
                trend: "+28% YoY (acquisition-led) / Flat QoQ (intentional)",
                horizon: "4-8 quarters flat outlook",
                remarks:
                    "Headline flat through FY27; growth resumes FY28 as legacy run-off ends + focus verticals dominate the marginal book. **FY28E AUM ₹17-18k cr; FY29E ₹20-22k cr** at sustained 15-20% focus growth + flat legacy.",
            },
            {
                metric: "2. Focus-Vertical AUM Mix (%) — 38% Q4 → 50-55% FY27 → 85% FY29 Target",
                current: "**38% (₹5,861 cr)**",
                trend: "+500 bps QoQ (fastest on record) / +15 pp YoY",
                horizon: "FY29 target 85%",
                remarks:
                    "Fastest quarterly shift on record (33% → 38%); FY29 commitment on track. **FY27E**: 50-55%; **FY28E**: 70%; **FY29E**: 85%.",
            },
            {
                metric: "3. Branch Network — 317 Across 13 States (Build-Out Complete)",
                current: "**317 branches (vs 127 FY24)**",
                trend: "+150% vs FY24",
                horizon: "12-24 months productivity ramp",
                remarks:
                    "**156 sub-6-month branches yet to ramp**; vintage branches at 85% of ₹80L/month target. **No further OpEx required** = pure operating leverage runway. **Each ₹12L/branch/month uplift × 317 branches = ~₹450 cr incremental annual disbursement at higher yields**.",
            },
            {
                metric: "4. Cost of Borrowing (%) — 10.16% (5th Consecutive Improvement; Trending Below 10%)",
                current: "**10.16%**",
                trend: "-45 bps YoY (5th consecutive improvement)",
                horizon: "2-3 quarters near-term; 12-18 months for AA- upgrade",
                remarks:
                    "**Each 25 bps cut = ₹35-40 cr PBT impact** at current debt ₹10,782 cr; **Ratings A+ positive outlook** = formal upgrade possible FY27; ECB depth + DFI funding pipeline = 50-75 bps CoB compression potential over 18 months.",
            },
            {
                metric: "5. CRAR / Leverage — 21.2% / 3.7x = Zero Equity Dilution Through FY29",
                current: "**21.2% / 3.7x**",
                trend: "+40 bps QoQ / similar",
                horizon: "Through FY29",
                remarks:
                    "**No incremental equity through FY29** = mgmt commitment; growth fully internally funded by retained earnings + ECB + DFI + bank lines. **Leverage scaling to 4-5x by FY29** = AUM headroom ₹20-25k cr without equity raises.",
            },
        ],
        demandSignals: [
            {
                signal: "Indian MSME credit gap (the primary engine)",
                reading:
                    "**₹30 lakh crore MSME credit gap** vs Ugro AUM ₹15,334 cr = **<0.5% market share**; structural multi-decade tailwind; **mgmt commentary**: 'no saturation foreseen for 10-15 years'.",
                verdict: "Robust",
            },
            {
                signal: "EM LAP branch productivity ramp",
                reading:
                    "Vintage branches at **₹68L/month vs ₹80L target** (85% of target); 156 sub-6-month branches yet to ramp; productivity phase begins.",
                verdict: "Adequate-to-Strong",
            },
            {
                signal: "Embedded Finance demand traction",
                reading:
                    "**6x AUM growth in 15 months**; ~2.5 lakh active merchants; partnerships expanding with PhonePe/BharatPe/payment ecosystems; **mgmt expecting continued 25-30% QoQ growth**.",
                verdict: "Strong",
            },
            {
                signal: "Funding side (CoB compression + ratings upgrade)",
                reading:
                    "CoB -45 bps YoY (5th consecutive); ratings A+ positive outlook; ECB + DFI pipeline active; **mgmt visible path to <10% CoB**.",
                verdict: "Strong",
            },
            {
                signal: "Capital availability (CRAR + leverage)",
                reading:
                    "CRAR 21.2% (vs 15% minimum); leverage 3.7x; ₹1,800 cr liquidity buffer; zero equity dilution through FY29 commitment. **Headroom for AUM ₹20-25k cr at 4-5x leverage**.",
                verdict: "Strong",
            },
            {
                signal: "Competitive intensity",
                reading:
                    "**EM LAP + Embedded Finance more defensible** (proprietary distribution + data moats); legacy prime intermediated being churned by larger banks/NBFCs (lower CoB advantage = Ugro's exit is right move).",
                verdict: "Moderate",
            },
            {
                signal: "Strategy execution credibility",
                reading:
                    "One full quarter post-Feb-2026 reset announcement: **3 BEAT, 4 MET, 0 MISS** on 7 tracked commitments. **Highly unusual fast execution for an NBFC strategic pivot**.",
                verdict: "Strong",
            },
        ],
        demandVerdict:
            "**Demand environment is ROBUST with structural ₹30 lakh cr MSME credit gap** + Embedded Finance 6x growth + branch productivity ramp + CoB compression + ratings upgrade path + zero dilution commitment + strategy execution credibility. **Adequate caveats**: Embedded Finance vintage data thin (6 cohorts); FY29 3-3.5% ROA ambitious; legacy run-off slow (long-tenor LAP). **The dominant variable for FY27-29 stock trajectory is Focus-vertical-mix-shift-pace + Embedded-Finance-asset-quality-sustainability + OpEx-flowing-to-bottom-line + CoB-compression + ROA-expansion-from-2.1-to-3-3.5%**: if FY27 H1 mix 45%+ + Embedded GNPA stable + OpEx flowing + CoB <10% + Multiple re-rates to 12-15x FY28E = stock to ₹150-180 (+53-84%); if Embedded Finance credit cost emerges + AUM stagnates + multiple compresses to 6-8x FY27E = ₹70-80 (-18 to -29%). **Q1 FY27 results (July 2026) will be the critical near-term catalyst** — first Q1 post-pivot; AUM trajectory + Focus mix + Embedded Finance asset quality + OpEx flowing + CoB.",
        whatWentRight: [
            "**Focus-vertical mix jumped 500 bps in single quarter (33%→38%)** = fastest single-quarter strategic shift in company's history; **Embedded Finance +27% QoQ (6x in 15 months)** = leading indicators of successful pivot. **Branch network completely built** (317 vs 127 FY24) provides multi-year disbursement capacity without further OpEx investment.",
            "**CoB fell 45 bps YoY** to 10.16% (5th straight quarterly improvement); **CRAR rose to 21.2%**; ₹1,800 cr cash buffer + ECB pipeline (DFI-led, longer tenor) = funding side robust; **ratings upgrade A+ positive outlook** in pipeline for FY27.",
        ],
        whatWentWrong: [
            "**Headline AUM flat through FY27** — legacy ₹9,000 cr+ prime book runs down only 15-20% per year (long-tenor LAP); investors expecting AUM-led growth will see optical stagnation for ~4 quarters.",
            "**GNPA / NNPA both crept up 30 bps QoQ**; **embedded-finance GNPA could drift toward management's 4-4.5% underwriting band** as cohorts season; credit-cost guidance of <2% of avg AUM assumes execution clean = limited margin of error.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            {
                metric: "Focus-Vertical AUM Mix",
                current: "38% of AUM",
                target: "85% of AUM by FY29",
            },
            {
                metric: "Annualized OpEx Takeout",
                current: "₹220 cr identified, **fully actioned in Q4**",
                target: "OpEx ₹490-500 cr in FY27 (vs combined ₹750 cr in FY26)",
            },
            {
                metric: "Run-Down of Prime Intermediated Portfolio",
                current: "~₹9,000 cr book",
                target: "15-20% per annum run-down",
            },
            {
                metric: "Incremental Equity Raise",
                current: "None planned",
                target: "**No incremental equity through FY29**",
            },
            {
                metric: "Steady-State ROA",
                current: "~2.1% transitional",
                target: "**3.0-3.5% by FY29** (largely cash interest income, minimal co-lending)",
            },
            {
                metric: "FY27 ROA",
                current: "n/a",
                target: "**Marginally better than FY26**; major step-up in FY28-29",
            },
            {
                metric: "Credit Cost",
                current: "1.9% of avg AUM (Q4)",
                target: "**<2% steady-state**",
            },
            {
                metric: "Embedded-Finance GNPA Underwriting Band",
                current: "1.7%",
                target: "Underwriting band 4-4.5% (currently outperforming by 230-280 bps)",
            },
        ],
        commitmentNote:
            "**Mgmt explicitly does NOT give annual ROA guidance** — only the **five FY29 commitments**. **FY27 = J-curve transition year** (flat AUM, marginally better ROA, weak headline PAT). **Walking-the-talk score Q4 FY26**: 3 BEAT (focus mix shift, OpEx takeout, Profectus integration), 4 MET (run-down, zero dilution, CoB, asset quality at upper edge), **0 MISSES** — high execution credibility one full quarter post-Feb-2026 strategic reset announcement. **Founder Shachindra Nath transparency**: publicly acknowledged strategy reversal ('we were gung-ho on co-lending; structural challenges forced re-think') and avoided blame-shifting = high trust factor for mid-cap NBFC.",
        growthDrivers: [
            {
                driver: "1. Branch Productivity Ramp (Vintage ₹68L → ₹80L; 156 Sub-6m Branches)",
                impact:
                    "**Each ₹12L/branch/month uplift × 317 branches = ~₹450 cr incremental annual disbursement at higher yields** = pure operating-leverage play with NO additional OpEx.",
            },
            {
                driver: "2. ₹220 Cr OpEx Takeout (Fully Actioned)",
                impact:
                    "**Drops straight to PBT from Q1 FY27 onward**; combined entity OpEx ₹490-500 cr vs ₹750 cr = equivalent to ~9% ROA uplift on existing book; structural reset (not one-time saving).",
            },
            {
                driver: "3. Embedded Finance Scale-Up (24-26% Yields; GNPA 1.7%)",
                impact:
                    "**Each ₹500 cr incremental AUM at 24-26% yield = ~₹125 cr revenue at <2% credit cost** = highest-quality marginal book Ugro has ever had; FY27 target ₹3,500-4,000 cr.",
            },
            {
                driver: "4. CoB Compression (10.16% Trending Lower; ECBs + Ratings Upgrade)",
                impact:
                    "**Each 25 bps cut = ₹35-40 cr to PBT** at current debt ₹10,782 cr; pipeline includes ratings upgrade A+ → AA- (50-75 bps), deeper ECB participation, repeat DFI funding.",
            },
            {
                driver: "5. Co-Lending → On-Book Interest Income Transition",
                impact:
                    "**Fixes earnings volatility** (co-lending lumpy → on-book annuity); accretes to capital adequacy; raises quality-of-earnings; supports zero-dilution commitment.",
            },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            {
                title: "500 bps focus-vertical mix shift in single quarter (33%→38%) = fastest single-quarter strategic shift in company's history; EM LAP GNPA 1.2% + Embedded Finance GNPA 1.7% — new book quality markedly better than legacy",
                body:
                    "**Founder/MD Shachindra Nath Q4 commentary**: 'The strategic transition is being executed at a faster pace than what we had originally envisaged in February 2026...this single-quarter shift of 500 bps in focus-vertical mix is the fastest in our history.' **EM LAP at 1.2% GNPA** + **Embedded Finance at 1.7% GNPA** vs legacy 2.5% headline = visible asset quality improvement at the marginal book level. **Implication**: strategic clarity validated + execution credibility established Q1 post-reset.",
            },
            {
                title: "CoB fell 45 bps YoY to 10.16% (5th consecutive quarterly improvement); Ratings A+ positive outlook = formal upgrade possible FY27 = 50-75 bps additional compression",
                body:
                    "**Fifth consecutive quarterly improvement**. With ratings outlook at **A+ positive**, a formal upgrade in FY27 is plausible. **Each 25 bps cut at current debt scale ≈ ₹35-40 cr to PBT** — enormous lever. ECB pipeline + DFI funding (longer tenor) + repeat lenders = visible structural compression path.",
            },
            {
                title: "Branch network completely built (317 vs 127 FY24); 156 sub-6-month branches embedded multi-year disbursement runway pre-paid; no further OpEx required",
                body:
                    "**317 branches across 13 states** = build-out complete; **156 sub-6-month branches yet to contribute meaningfully** — multi-year disbursement runway pre-paid. **Vintage productivity at 85% of target** (₹68L vs ₹80L); each ₹12L/month uplift × 317 = ~₹450 cr incremental annual disbursement. **Pure operating leverage from here onward**.",
            },
            {
                title: "₹220 cr annualized OpEx takeout fully actioned Q4; FY27 combined OpEx ₹490-500 cr vs ₹750 cr FY26 = structural reset",
                body:
                    "**FY27 combined OpEx ₹490-500 cr vs ₹750 cr in FY26**. Structural reset (not one-time saving); mgmt committed publicly to NOT breach this base = operating leverage from here onward. **CFO Shilpa Bhattair Q4 commentary**: 'OpEx ₹180 cr ex-one-time; full ₹220 cr base reset achieved.'",
            },
            {
                title: "No incremental equity through FY29 backed by CRAR 21.2% + ₹1,800 cr liquidity + leverage 3.7x — strongest possible signal of self-sustaining capital",
                body:
                    "**CRAR 21.2% (vs 15% minimum) + ₹1,800 cr liquidity + leverage only 3.7x** + growth funded by internal accruals + ECB + DFI. For a mid-cap NBFC this is the strongest possible signal of self-sustaining capital — **historically Ugro has been a serial diluter**; new no-dilution commitment is structural shift.",
            },
        ],
        bearish: [
            {
                title: "AUM flat (or mildly declining) through FY27 — explicitly guided J-curve transition year",
                body:
                    "Investors who anchor on AUM growth will be disappointed for 4-6 quarters; market may de-rate stock during optical lull even if underlying ROA improves. **Stock -35% 1-yr** likely reflects this dynamic.",
            },
            {
                title: "GNPA crept up 30 bps QoQ (2.2%→2.5%); NNPA up 20 bps — denominator effect unverifiable 2-3 quarters",
                body:
                    "Management attributes this to **denominator effect** (legacy book shrinking faster than absolute NPAs), which is plausible but unverifiable for 2-3 quarters. **Risk**: if underlying deterioration, credit cost emergence possible.",
            },
            {
                title: "Standalone PAT -27% YoY Q4; FY26 PAT -21% YoY — J-curve earnings dip",
                body:
                    "Transition from co-lending income (lumpy, cash-up-front) to on-book interest income (annuity, slower) creates J-curve where earnings dip first before recovering. **Headline PAT print weak for 2-3 more quarters** as ₹25 cr restructuring + continued co-lending decline.",
            },
            {
                title: "Strategy reversal risk — founder Nath publicly reversed on 'co-lending + scale ambition' philosophy only 24-30 months after embracing",
                body:
                    "**Shachindra Nath himself acknowledged**: 'we were gung-ho about co-lending only 24-30 months ago. Now both ideas jettisoned.' **Investor perception risk**: what if FY29 also requires another pivot?",
            },
            {
                title: "Embedded Finance unsecured ~15% of AUM with thin vintage data (~6 cohorts only); central to FY29 ROA story",
                body:
                    "Daily-EMI at 24-26% yield with only ~6 cohorts of vintage data. **Management's comfort up to 4-4.5% GNPA** implies credit cost could rise materially if cohort seasoning surprises — and **this segment is now central to FY29 ROA**. **Risk**: GNPA drift from 1.7% to 3%+ = material credit cost emergence.",
            },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text:
                "**The strategic pivot from *scale-led intermediated lending* to *EM LAP + Embedded Finance* is the single biggest event for this stock in 5 years** — one full quarter into execution every FY29 commitment is on track or ahead of plan: Focus mix +500 bps single-quarter (FASTEST on record); ₹220 cr OpEx takeout fully actioned; CoB -45 bps YoY (5th consecutive improvement); CRAR up to 21.2%; zero dilution reaffirmed; Profectus integration complete. **Walking-the-talk score: 3 BEAT, 4 MET, 0 MISS** = high execution credibility validates management.",
            impact: "strengthens",
        },
        {
            text:
                "**FY27 = J-curve transition year — flat AUM, marginal ROA improvement, weak headline PAT** explicitly guided; Standalone PAT -27% Q4 / -21% FY26; **GNPA +30 bps QoQ** (denominator effect; unverifiable for 2-3 quarters). Markets typically de-rate stocks in J-curve transitions; **stock already -35% 1-yr** reflecting this; near-term price action could be choppy until Q1/Q2 FY27 confirms OpEx flowing + Embedded Finance asset quality stable.",
            impact: "neutral",
        },
        {
            text:
                "**CoB compression + Branch network built + ₹220 cr OpEx takeout = pure operating leverage setup unmatched in mid-cap NBFC space**: (a) CoB 10.16% (-45 bps YoY) + Ratings A+ positive = 50-75 bps further compression possible = ~₹70-100 cr to PBT; (b) 317 branches built (vs 127 FY24) + 156 sub-6m yet to ramp = embedded multi-year runway pre-paid; (c) ₹220 cr OpEx takeout fully actioned = FY27 cost base structurally reset; (d) Zero equity dilution through FY29. **The cleanest single setup in the Indian mid-cap NBFC space**.",
            impact: "strengthens",
        },
        {
            text:
                "**Embedded Finance ₹2,280 cr AUM (+27% QoQ; 6x in 15 months; 24-26% yield; 1.7% GNPA today vs 4-4.5% underwriting band) = highest-yielding marginal book Ugro has ever built**. But it is also **unsecured, daily-EMI, with only ~6 cohorts seasoned** + **central to FY29 ROA story**. **If credit cost surprises here, the FY29 3-3.5% ROA target is at material risk** = singular execution risk.",
            impact: "strengthens",
            note: "with high tail-risk to monitor on cohort seasoning",
        },
        {
            text:
                "**Stock at ₹98 (TTM P/E 8.7-15.1x; P/B 0.53-0.65x on Book ~₹185; ROA 2.1%; ROE ~7%; Beta 1.2; Mkt cap ₹1,521-1,710 cr; 52w ₹80.12-192.50; -35% 1-yr; -49% from 52w high; +22% from 52w low). Forward P/E 6-8x on FY27E EPS ₹12-14; 4-5x on FY29E EPS ₹20-25 if 3-3.5% ROA achieved**. **Peer benchmarks (MSME NBFCs)**: Mas Financial P/E 20-25x / ROE 14-15% / ROA 3% (steady-state benchmark); Five Star P/E 22-28x / ROA 6-7%; CSB Bank P/E 13-15x. **Ugro at deep value with optionality**. **Bear case ₹70-80 (-18 to -29%)** — Embedded Finance credit cost emergence + AUM stagnation + multiple compresses to 6-8x FY27E. **Base case ₹100-130 (+2 to +33%)** — focus mix 45%+ + OpEx flowing + multiple 10-12x FY27E. **Bull case ₹150-180 (+53 to +84%)** — FY28+ ROA delivery + focus mix 60%+ + multiple 12-15x FY28E or P/B 1.0x. **Verdict: ACCUMULATE at ₹80-90 zone; DEPLOY 30-40% at current ₹95-100; HOLD at ₹100-130; sizing 2-4% portfolio (could go 4-6% if Q1 FY27 confirms OpEx flowing + Embedded Finance GNPA stable + focus mix 45%+); PARE 30-40% if >₹160**.",
            impact: "neutral",
            note: "deep value with execution-led optionality; J-curve risk warrants cautious sizing",
        },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        thesisIntact: {
            verdict: "Strengthening (with J-curve caveat) — Strategic pivot validated Q1 post-Feb-2026-reset + all FY29 commitments on track + focus mix shift FASTEST on record + 317-branch network built + ₹220 cr OpEx takeout actioned + zero dilution + CoB compression + structural ₹30 lakh cr MSME credit gap; HOWEVER FY27 J-curve transition (flat AUM + weak headline PAT) + Embedded Finance vintage risk + FY29 3-3.5% ROA ambitious + Standalone PAT -27% YoY cap full thesis confidence near-term",
            reasons: [
                "**Core fundamental thesis strengthening**: (a) **Strategic pivot validated Q1 post-Feb-2026-reset** — every FY29 commitment on track or ahead; (b) **Focus-vertical mix +500 bps single-quarter = FASTEST on record**; (c) **Branch network completely built** (317 vs 127 FY24); (d) **₹220 cr OpEx takeout fully actioned** = FY27 cost base structurally reset; (e) **CoB compression 5th consecutive quarterly improvement** + Ratings A+ positive; (f) **Zero equity dilution through FY29** backed by CRAR 21.2% + ₹1,800 cr liquidity; (g) **Embedded Finance 6x in 15 months** = highest-quality marginal book.",
                "**FY27-29 catalysts**: (a) Focus mix 38% → 50-55% FY27 → 85% FY29; (b) Branch productivity ramp (156 sub-6m branches); (c) ₹220 cr OpEx flowing to bottom line from Q1 FY27; (d) CoB compression toward <10% (rating upgrade); (e) Embedded Finance scale-up ₹2,280 cr → ₹5,000+ cr; (f) Co-lending → on-book transition; (g) ROA expansion 2.1% → 3-3.5%.",
                "**Eight concerns cap full thesis confidence**: (1) AUM flat through FY27 J-curve; (2) Standalone PAT -27% Q4; (3) GNPA +30 bps QoQ; (4) Embedded Finance vintage data thin; (5) FY29 3-3.5% ROA ambitious; (6) Strategy reversal risk perception; (7) Stock -35% 1-yr market doubt; (8) Profectus + DST integration.",
                "**Thesis Strengthens If**: Q1 FY27 focus mix 42-45% + OpEx flowing + Embedded Finance GNPA stable + CoB <10.1% + Multiple holds/expands 10-15x FY27E. **Thesis Breaks If**: Embedded Finance GNPA >2.5% + AUM continues stagnating + Standalone PAT continues declining + Multiple compresses to 6-8x FY27E = stock back to ₹70-80.",
            ],
        },

        rerateTriggers: [
            {
                trigger: "Q1 FY27 Focus Mix + OpEx Flowing + Embedded Finance GNPA (July 2026 Results)",
                probability: "Medium-High (60-70%)",
                rationale: "First post-pivot quarter validation; focus mix to 42-45%; ₹50-60 cr OpEx flowing through; Embedded Finance GNPA <2%. **Stock impact**: +10-15% if confirmed.",
            },
            {
                trigger: "CRISIL Rating Upgrade A+ → AA- (FY27)",
                probability: "Medium-High (60-70%)",
                rationale: "Currently A+ positive outlook; **50-75 bps CoB compression possible** = ₹70-100 cr PBT impact. **Stock impact**: +10-15%.",
            },
            {
                trigger: "Focus-Vertical Mix Crossing 50%+ (FY27-FY28)",
                probability: "High (70-80%)",
                rationale: "On track at current pace (33%→38% in single quarter); cleared majority threshold = visible pivot validation. **Stock impact**: +15-25%.",
            },
            {
                trigger: "ROA Expansion 2.1% → 2.5%+ FY27 (Marginal Improvement Guidance)",
                probability: "Medium (50-60%)",
                rationale: "Mgmt explicit FY27 'marginally better than FY26'; visible operating leverage + CoB compression. **Stock impact**: +10-15%.",
            },
            {
                trigger: "Long-Term FY29 3-3.5% ROA Validation (FY28-FY29)",
                probability: "Medium (40-50%)",
                rationale: "Ambitious target (Ugro never crossed 2% ROA); requires every lever execution. **Stock impact**: +30-50% on visible validation.",
            },
        ],

        upsideIfGuidanceMet: {
            currentPrice: "₹98.07 (NSE 20 May 2026 — Choice; range ₹98-110 May 2026; 52w ₹80.12-192.50; -49% from 52w high; +22% from 52w low; -35% 1-yr; Market Cap ₹1,521-1,710 cr)",
            targetPrice: "₹150 – ₹180",
            upsidePct: "+53% to +84%",
            horizon: "24-36 months (FY27 J-curve transition + FY28 full pivot reflection + FY29 ROA validation)",
            assumptions:
                "**Base case (FY28 ROA 2.5%; AUM ₹17k cr; Focus mix 60%):** **FY28 PAT ₹350-400 cr** (vs FY26 ₹175 cr = 2x); **EPS ₹20-23**; Multiple 8-10x FY28E = ₹160-230. **Bull (FY29 ROA 3% / AUM ₹20k cr / Focus mix 80%):** **PAT ₹600+ cr; EPS ₹35**; Multiple 6-8x FY29E = ₹210-280 (long-term). **P/B basis**: Book ~₹185; if pivot validated → P/B re-rates to 0.9-1.0x = ₹170-185. **Range ₹150-180** blends 24-36 month with focus mix + OpEx + CoB + Embedded Finance scaling + multiple re-rating.",
            workings:
                "**FY27 PAT ₹220-250 cr** on focus mix 50% + OpEx flowing partial + CoB compression = +25-43% YoY. **FY28 PAT ₹340-380 cr** on focus mix 65% + full OpEx flowing + CoB <10% = +40-55%. **FY29 PAT ₹500-600 cr** on focus mix 85% + ROA 3% + AUM ₹20k cr = +30-45%. EPS trajectory: FY26 ₹11.4 → FY27 ₹14.5 → FY28 ₹22 → FY29 ₹35. Multiple holds 8-10x mid-cycle on confirmed execution.",
        },

        valuationEntryZone: {
            bestValueRange: "₹80 – ₹90",
            fairValue: "₹90 – ₹130",
            currentZone: "Lower Fair Value — current ₹98 sits at lower-half of fair value zone; significant margin of safety with execution-led optionality",
            rationale:
                "**TTM P/E**: 8.7-15.1x (range reflects basic vs diluted); **P/B 0.53-0.65x on Book ~₹185** = significant discount; **Forward P/E ~6-8x FY27E EPS ₹12-14**; **~4-5x FY29E EPS ₹20-25**; **Beta 1.2** = aligned with mid-cap NBFC volatility. **Peer benchmarks (MSME NBFCs)**: Mas Financial P/E 20-25x / ROE 14-15% / ROA 3% (steady-state benchmark = target Ugro state); Five Star P/E 22-28x / ROA 6-7%; CSB Bank P/E 13-15x; Manappuram P/E 8-12x; Capri Global P/E 15-18x. **Ugro at 8.7-15.1x P/E / 0.53-0.65x P/B / ROA 2.1% (transition; target 3-3.5%)** = deep value with optionality. **ACCUMULATE aggressively ₹80-90** (52w low zone; +18-25% upside to fair value); **DEPLOY 30-40% at current ₹95-100** (high-confidence value); **HOLD at ₹100-130** (fair value); **PARE 30-40% if >₹160** (post-rally profit booking). **Asymmetric setup**: -18 to -29% downside to ₹70-80 vs +53 to +84% upside to ₹150-180 = **~2-2.5x reward-to-risk at current ₹98 = positive**; significantly better at ₹80-90 (~3-4x reward-to-risk). **Sizing 2-4% portfolio** given execution risk + J-curve optics + Embedded Finance vintage; could go to **4-6%** at ₹80-90 entry or after Q1 FY27 confirms.",
        },

        summary:
            "**Ugro Capital Q4 FY26 = strategic-pivot-validation-quarter + J-curve-transition-entry**: Q4 consolidated PAT ₹51.1 cr (+26% YoY); FY26 PAT ₹174.8 cr (+21%); NTI ₹1,067 cr (+31%); NIM Spread 7.3% (+45 bps YoY); AUM ₹15,334 cr (flat QoQ intentional); **Focus-vertical mix 38% (+500 bps single-quarter = FASTEST on record)**; CoB 10.16% (-45 bps YoY = 5th consecutive improvement); CRAR 21.2% strong; **₹220 cr OpEx takeout fully actioned**; **Zero equity dilution through FY29** reaffirmed. **Stock -35% 1-yr** reflecting J-curve optics. **Walking-the-talk score 3 BEAT, 4 MET, 0 MISS** = high execution credibility. **Structural strengths**: (1) Strategic clarity + public 5-metric FY29 scorecard; (2) Focus verticals high-quality (yields 17-26%; GNPA 1.2-1.7%); (3) Branch network built (317 vs 127 FY24) + 156 sub-6m yet to ramp; (4) ₹220 cr OpEx takeout actioned; (5) CoB compression 5th consecutive + Ratings A+ positive; (6) CRAR 21.2% + zero dilution; (7) Embedded Finance 6x in 15 months; (8) ₹30 lakh cr MSME credit gap. **FY27-29 catalysts**: Focus mix 38%→85% FY29; OpEx flowing FY27; CoB compression toward <10%; Embedded Finance scale-up; ROA 2.1%→3-3.5%. **Concerns**: AUM flat through FY27 (J-curve); Standalone PAT -27% Q4; GNPA +30 bps QoQ; Embedded Finance vintage thin (6 cohorts); FY29 3-3.5% ROA ambitious; Strategy reversal risk; Stock -35% 1-yr; Profectus/DST integration. **Valuation**: Stock at ₹98 — TTM P/E 8.7-15.1x; P/B 0.53-0.65x on Book ₹185; Forward P/E 6-8x FY27E; 4-5x FY29E if 3-3.5% ROA achieved. **Peer benchmarks**: Mas P/E 20-25x / ROA 3%; Five Star P/E 22-28x; Manappuram P/E 8-12x. **Ugro at deep value with optionality**. **Bear ₹70-80 (-18 to -29%)**: Embedded credit cost emerges + AUM stagnates + multiple compresses 6-8x FY27E. **Base ₹100-130 (+2 to +33%)**: focus mix 45%+ + OpEx flowing + multiple 10-12x FY27E. **Bull ₹150-180 (+53-84%)**: FY28+ ROA delivery + focus mix 60%+ + multiple 12-15x FY28E or P/B 1.0x. **Verdict**: ACCUMULATE ₹80-90 zone; DEPLOY 30-40% current ₹95-100; HOLD ₹100-130 (current lower fair value); sizing 2-4% portfolio (4-6% on Q1 FY27 confirmation); PARE 30-40% if >₹160. **Critical milestones**: Q1 FY27 results (July 2026) focus mix + OpEx flowing + Embedded Finance GNPA; CoB <10%; ratings upgrade A+ → AA-; FY28 ROA delivery toward 3%. **A 'strategic-pivot-execution-validated-Q1-post-Feb-2026-reset + branch-network-built-pre-paid + OpEx-takeout-actioned + zero-dilution-FY29 + focus-mix-fastest-on-record + J-curve-transition-FY27-with-flat-AUM-and-weak-standalone-PAT + Embedded-Finance-vintage-risk + FY29-3-3.5-ROA-ambitious + stock-down-35-percent-1Y-reflecting-transition-doubt + deep-value-P/B-0.53-0.65x' opportunity**.",
    },
});
