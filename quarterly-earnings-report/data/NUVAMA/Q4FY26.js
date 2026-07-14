/* ============================================================
   Nuvama Wealth Management Ltd — Q4 FY26 / Full Year FY26
   Concall: 12 May 2026 (Q4 + FY26 earnings call)
   File path: data/NUVAMA/Q4FY26.js
   Live spot @ authoring: ₹1,519.30 NSE / ₹1,519.00 BSE (13 May 2026, 18:44 IST)
   Day move: -1.87% (mild profit-taking; results were ~24 hours old)
   Source: Groww MCP get_ltp + fetch_stocks_fundamental_data
   ============================================================ */

window.registerReport("NUVAMA", "Q4FY26", {
    meta: {
        companyName: "Nuvama Wealth Management Ltd",
        ticker: "NUVAMA",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "12 May 2026",
        concallDate: "12 May 2026 (Q4 + FY26 earnings call)",
        resultsBasis:
            "Consolidated. **Integrated capital-markets + wealth platform** with five engines: (1) **Nuvama Wealth** (HNI/affluent wealth — closing client assets **₹1.07 lakh cr, +14% YoY**), (2) **Nuvama Private** (UHNI/family-office — client assets **₹2.07 lakh cr**, ARR avg **~₹50,000 cr at ~90 bps**), (3) **Asset Management** (AIF + PMS + soon SIF + MF — AUM **₹12,807 cr, ~2.5x in 3 yrs**), (4) **Asset Services** (custody / clearing / RTA / trustee for HFTs, FPIs, PMS/AIF), (5) **Capital Markets** (institutional equities + IB) + **Lending arm** (book +27% YoY). **Right earnings frameworks**: ARR / MPIS revenue growth + Net New Money + Cost-to-Income + Operating PAT + Tangible ROE — *not* simple P/E. PAG holds 54.13% as financial sponsor (eventual change of control flagged by mgmt as a long-dated event).",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. Nuvama is a **high-quality wealth platform trading at a *meaningful* discount to peers** (P/E **27.08x** vs industry **36.54x**, vs 360 ONE **35.9x**, Anand Rathi **73x**) — but FY26 was a *modest profit-growth year* (Operating PAT +6%) due to margin compression from RM hiring + finance costs + capital-markets weakness. The setup is **earnings re-acceleration + valuation re-rating optionality** if FY27 wealth + AMC + SIF flows deliver as guided.",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            {
                metric: "Operating Revenue (₹Cr) — *the cleaner read*",
                current: "**Q4: 825 / FY26: 3,122**",
                qoq: "Q4 vs Q3: ₹825 cr vs ₹755 cr = **+9.3% QoQ** (wealth + asset services led)",
                yoy: "**Q4: +7% YoY** (vs Q4 FY25 ₹771 cr); **FY26: +8% YoY** (vs FY25 ₹2,901 cr) — *operating revenue excludes lending finance-cost offset; the headline ₹1,269 cr gross figure is +13.3% YoY but distorted by lending NII growth*",
            },
            {
                metric: "Operating PAT (₹Cr) — *primary profit metric*",
                current: "**Q4: 269 / FY26: 1,049**",
                qoq: "Q4 vs Q3 ₹262 cr = **+2.7% QoQ** — modest sequential due to elevated employee costs",
                yoy: "**Q4: +5.5% YoY / FY26: +6% YoY** (FY25 ₹986 cr) — **profit growth far slower than revenue** = the core issue this quarter. Reported PAT ₹1,041 cr (similar)",
            },
            {
                metric: "Cost-to-Income Ratio (%) — *the margin gauge*",
                current: "**Q4: ~58% / FY26: ~56%** (FY25: 55%)",
                qoq: "Q4 deteriorated sharply from Q3 53% to 58% = **+500 bps QoQ slippage** due to employee variable bonus accrual + Q3 had a reversal benefit",
                yoy: "**FY26 C/I 56% vs FY25 55% = +100 bps deterioration** — mgmt: composition change (asset services + IB lower margin); guide stays at 50% of opex growth toward expansion + 50% inflation",
            },
            {
                metric: "Operating PAT Margin (%) — *blended profitability*",
                current: "**Q4: 21.18% / FY26: 22.4%**",
                qoq: "Q4 vs Q3 22.97% = **−179 bps QoQ** = revenue grew but employee costs absorbed gains",
                yoy: "**FY26 ~22.4% vs FY25 ~23.5% = ~110 bps compression** — driven by employee costs (Q4: ₹345 cr, +12% YoY) + finance costs (Q4: ₹258 cr, +20% YoY)",
            },
            {
                metric: "EPS (₹) — FY26 ₹57.59 (Diluted)",
                current: "**FY26 EPS ₹57.59 vs FY25 ₹55.33**",
                qoq: "Q3 ₹13.62 → Q4 ₹14.40 (post 1:5 split context already baked in)",
                yoy: "**FY26 EPS growth ~4% YoY** = modest; **TTM EPS via Groww ₹57.14**; P/E TTM = **27.08x** (industry P/E **36.54x**) = **trading at >25% discount to peer average**",
            },
        ],
        businessQualityMetrics: [
            {
                metric: "Total Group Client Assets (₹ lakh cr) — *the WAM scale metric*",
                current: "**₹4.53 lakh cr (end-Mar'26)** = Wealth ₹1.07 + Private ₹2.07 + balance MF/AS",
                qoq: "Q3 ₹4.6 lakh cr → Q4 ₹4.53 lakh cr — *mild MTM drag from Q4 equity correction*",
                yoy: "**Wealth +14% YoY** to ₹1.07 lakh cr; Private grew steadily; **Group AUM growth in low-double-digit despite market headwinds** — quality flows offsetting MTM weakness",
            },
            {
                metric: "ARR + MPIS Revenue Mix — *the recurring-revenue moat*",
                current: "**Private ARR ~60% of revenue (+30% YoY 9M); MPIS revenue +38% in FY26**",
                qoq: "Private ARR avg AUM ~₹50,000 cr; blended retention **~90 bps**; MPIS NNM ₹6,500 cr in 9M tracking",
                yoy: "**MPIS revenue +38% YoY in FY26** = high-quality compounding; Wealth Mgmt segment **revenue +21% YoY (9M) / PBT +23% YoY (9M)**; **Wealth = 57% of total revenue** vs 50% prior year",
            },
            {
                metric: "Lending Book (₹Cr) — *the under-appreciated lever*",
                current: "**~₹4,800-5,000 cr est end-Mar'26 (+27% YoY)**; Q3 closing ₹4,300 cr",
                qoq: "Mgmt: \"book to keep growing on AUM compounding\"; Q3 NII +30% YoY",
                yoy: "**Loan book +27% YoY** — *but NII did NOT grow in line due to ECL provisioning + market volatility*; this is a near-term margin headwind in lending arm but book quality remains clean",
            },
        ],
        footnotes: [
            "**The Nuvama P&L is structurally complex** — gross revenue includes interest income (₹554 cr Q4 from lending + treasury), but operating P&L deducts the matching interest expense to derive *net operating revenue*. **Use ₹825 cr Q4 / ₹3,122 cr FY26 as the operating revenue** (not the ₹1,269 cr / ₹4,158 cr gross figure which double-counts NII). Operating PAT ₹1,049 cr is the right profit metric.",
            "**Q4 was a 'mixed-signals' quarter**: top-line +13% gross / +9% net QoQ (best ever quarterly revenue) but bottom-line +5-6% YoY = **revenue growth not translating to commensurate PAT growth**. Drivers: (a) employee benefit expenses Q4 ₹345 cr (+12% YoY, +17% QoQ — variable bonus crystallisation), (b) finance costs Q4 ₹258 cr (+20% YoY), (c) capital-markets revenue **−19% FY26** (F&O regulation impact + ECM billing slip).",
            "**Wealth franchise is firing on all cylinders**: Wealth Mgmt segment revenue **+19% YoY in Q4** to ₹474 cr (57% of total); MPIS revenue **+38% FY26**; closing wealth client assets ₹1.07 lakh cr (+14% YoY). **This is the high-quality, structurally compounding part of Nuvama.**",
            "**Asset Services fully recovered** post the Jane Street SEBI order in early Q1 FY26 — Q4 ran ahead of expectations; float balances back to Q1 levels; HFT activity normalised by Q3; yields stable 2.6-2.9% range. **RTA + trustee services launching in Q1 FY27** = new revenue stream + market-share lever.",
            "**Groww MCP reads** (13 May 2026, 18:44 IST): LTP ₹1,519.30; Mkt Cap ₹28,170 cr; P/E 27.08x; **Industry P/E 36.54x**; TTM EPS ₹57.14; ROE 25.26%; P/B 6.87x; D/E 2.80x; Div Yield 0.90%; Book Value ₹225.31; 52-wk range ₹1,096.90 – ₹1,701.70. **Stock at ~89% of 52-wk high; ~38% above 52-wk low.** **Trading at significant discount to peers**: 360 ONE 35.9x P/E (ROE 18%), Anand Rathi 73x (ROE 39%), Aditya Birla AMC 31x (ROE 26%), Angel One 30x (ROE 31%) — Nuvama is the **only major listed wealth+capital-markets player at <30x P/E with 25%+ ROE**.",
            "**Dividend ₹14/share FY26 (~49% payout ratio)** = disciplined capital return; promoter PAG holds 54.13% (unchanged structurally; mgmt: \"financial sponsor; eventual change of control inevitable\"); FII +56 bps QoQ to 16.95% in Q4 = institutional accumulation continuing; **22 mutual funds hold the stock**.",
        ],
        patternDetected:
            "**Revenue up, margins contracting** — top-line gross +13% YoY (best-ever ₹1,269 cr Q4) but Operating PAT only +5.5% YoY = **business is in a 'spending-to-grow' phase** with deliberate margin compression. Mgmt narrative: front-loaded RM hiring + capacity build (offshore Dubai/Singapore, AMC capabilities, RTA/trustee, SIF launch readiness) + capital-markets cyclical weakness. **This is *not* structural deterioration** — Wealth segment +21% revenue / +23% PBT (9M); MPIS +38%; AS recovered fully. The drag is **capital markets −19% + ECL provisioning in lending + RM compensation inflation**. Pattern reading: \"high-quality wealth franchise navigating a transition year — investments now should compound from FY27 once SIF launches, MF license activates, Dubai/Singapore break-even, and capital-markets cycle turns.\"",
        interpretation:
            "**Q4 FY26 is a 'quality at fair value with investment-phase drag' quarter for India's most-undervalued listed wealth franchise.** **The good**: Wealth client assets ₹1.07 lakh cr (+14% YoY); MPIS revenue +38% FY26; Wealth PBT +23% (9M); Asset Services back to peak; Lending book +27%; Group client assets ₹4.53 lakh cr; AMC AUM **₹12,807 cr (2.5x in 3 yrs)**. **The not-so-good**: Operating PAT only +6% FY26 / +5.5% Q4 YoY (margins compressed); Cost-to-Income deteriorated to 58% Q4 / 56% FY26; Capital markets revenue −19% FY26; NII in lending didn't keep pace with book growth due to ECL provisioning. **Mgmt guidance for FY27** is concrete: (a) 20-25% overall growth, (b) ₹7,000-9,000 cr AMC NNM (vs FY26 estimated ₹4,000-5,000 cr from AMC), (c) SIF launch in Q1 FY27 unlocking ~₹2,000-3,000 cr migration of AIF assets, (d) MF license final approval pending → new distribution channel, (e) commercial real estate fund completing at ₹4,000 cr, second fund launch, (f) credit fund launch Q2 FY27, (g) Dubai broken-even, Singapore breakeven in 2 quarters. **Multiple optionality**: SIF + MF license + offshore scale + Anugrah litigation favourable resolution + potential PAG exit-driven re-rating. **Trading at P/E 27.08x vs industry 36.54x = ~26% discount to peer avg; vs 360 ONE 35.9x P/E with similar business mix = ~25% discount** despite higher ROE (Nuvama 25.26% vs 360 ONE 18.22%). **The setup**: bear case ₹1,200-1,300 (FY27 disappointment + capital markets stays weak = -15-22%), base case ₹1,750-1,950 (FY27 NNM delivers + SIF launches + margins stabilise + partial re-rating to 30-32x = +15-28%), bull case ₹2,200-2,500 (FY28 visibility + SIF/MF scale + PAG event + full re-rating to 33-35x = +45-65%). **Verdict: HIGH-CONVICTION ACCUMULATE on dips** — current ₹1,519 sits at fair value; aggressive accumulate below ₹1,400; primary thesis is **valuation discount closure + FY27 earnings re-acceleration**, asymmetric 3:1 reward-to-risk over 18-24 months.",
        whatWentRight: [
            "**Wealth franchise compounding hard despite a volatile market** — Wealth Mgmt segment **revenue +19% YoY in Q4 / +21% YoY 9M; PBT +23% YoY 9M**; **MPIS revenue +38% FY26**; closing Wealth client assets **₹1.07 lakh cr (+14% YoY)**; Private ARR avg ~₹50,000 cr at **90 bps blended retention** = best-in-class for the affluent + UHNI segments. **Wealth now contributes 57% of group revenue vs 50% prior year** = mix shift toward higher-quality recurring streams. AMC AUM crossed **₹12,807 cr (~2.5x in 3 years)** = AMC fees +31% FY26 to ₹77 cr.",
            "**Asset Services recovered fully from the Jane Street SEBI order (Q1 FY26 disruption)** — Q4 ran *ahead* of expectations; float balances back to Q1 levels; HFT activity at or above pre-disruption levels; **yields stable in 2.6-2.9% range** per mgmt; **RTA + trustee services launching Q1 FY27** as new revenue verticals to capture domestic PMS/AIF backward-integration share. Operating dividend ₹14/share (49% payout) + ROE **27% sustained** = disciplined capital allocation despite growth investments.",
        ],
        whatWentWrong: [
            "**Margin compression broad-based** — Q4 Cost-to-Income jumped to 58% (vs Q3 53%); Operating PAT margin compressed to 21.18% (vs Q3 22.97%); Operating PAT growth only **+6% FY26** vs revenue **+8-13% YoY** = **business is spending faster than it is earning**. Drivers: (a) **employee costs Q4 ₹345 cr (+12% YoY, +17% QoQ)** — variable-bonus catch-up + RM compensation inflation from new private-equity-backed entrants poaching talent; (b) **finance costs Q4 ₹258 cr (+20% YoY)** on growing lending book + treasury operations.",
            "**Capital Markets segment is the structural drag** — FY26 capital-markets revenue **−19% YoY** (institutional equities flat YoY, IB ECM billing slipped, F&O regulation impact); equity cash ADT −6%, futures ADT −14% per mgmt; ECM billing typically lumps into next quarter so partial recovery in FY27 likely but **structural headwind on broking yields + F&O participation** is real. **Lending NII did NOT grow in line with book** due to ECL provisioning + interest-rate cycle = near-term margin headwind in the lending arm despite book +27%.",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "1. Nuvama Wealth (HNI / Affluent) — ~50% of value, the core compounder",
                yoyGrowth: "**Q4 segment revenue +19% YoY to ₹474 cr; Wealth client assets ₹1.07 lakh cr (+14% YoY); MPIS revenue +38% FY26**",
                mix: "**57% of group revenue** (vs 50% prior year); MPIS now 60% of Wealth revenue (+30% YoY assets)",
                analysis:
                    "**The high-quality flywheel.** Affluent / HNI segment via ~1,300 RMs across 100+ offices; **MPIS (Managed Products & Investment Solutions) is the flagship** = AIF + PMS + MF + fixed-income + MLD + insurance + syndication. **NNM in MPIS ₹6,500 cr in 9M = tracking 28-30% of opening assets**. Mgmt: \"two clear trends — (1) competitive intensity rising, validating right space; (2) product innovation + size + balance sheet has become *non-negotiable* to attract RMs and win clients.\" Loan book scaled aggressively in FY26 (from ~₹2,800 cr opening to ~₹4,800-5,000 cr est end-Mar'26 = **+27% YoY**) as a deliberate strategic lever — \"two quarters back I said we'd grow this; that is happening.\"",
                triggers:
                    "(a) FY27 wealth client assets reaching ₹1.30-1.40 lakh cr (+22-30%); (b) MPIS revenue compounding 25-30% per year on flow + retention stability; (c) Lending book reaching ₹6,500-7,000 cr by Mar'27 with NII normalisation post ECL provisioning roll-off; (d) AI-driven RM productivity gains (+25% per mgmt) sustaining as senior RMs lift productivity 2 notches.",
            },
            {
                name: "2. Nuvama Private (UHNI / Family Office) — ~30% of value, the ARR + offshore lever",
                yoyGrowth: "**ARR average assets ~₹50,000 cr at ~90 bps blended retention; ARR revenue ~60% of segment; full-year target ~25% growth on opening assets**",
                mix: "Private client assets ₹2.07 lakh cr; transactional revenue lumpy (Q2 was higher syndication; Q3-Q4 normalised)",
                analysis:
                    "**The premium UHNI franchise + offshore optionality.** Infinity advisory platform (discretionary + non-disc + RIA); **+10% RM capacity added in last 12 months to ~150 RMs**; new locations Jaipur, Surat, Kanpur strengthened beyond Bangalore + Hyderabad. **Offshore: Dubai broken even (~12 months); Singapore breakeven in 2 quarters; ~5% of Private revenue from offshore today** — mgmt: \"major 5-7 year trend will be client portfolios having decent offshore allocation; we are dialing this up via both organic + inorganic.\" Quarterly NNM optically moderated but full-year on-track for 25% growth on opening assets; **gross ARR inflows ~₹4,000-4,500 cr/quarter, net ₹1,500-1,800 cr/quarter after scheduled maturities + redemptions**.",
                triggers:
                    "(a) Offshore scaling: Singapore breakeven Q2-Q3 FY27, share rising from ~5% toward 10-12% over 2-3 years; (b) Potential inorganic M&A offshore (mgmt: \"open to all ideas\"); (c) ARR retention stability at 90 bps with carry crystallisation lumps; (d) Product launches: REIT/InvIT vehicle, dynamic asset product as evergreen offerings.",
            },
            {
                name: "3. Asset Management (AIF + PMS + soon SIF + MF) — ~10% of value, the long-dated optionality",
                yoyGrowth: "**AMC AUM ₹12,807 cr (~2.5x in 3 yrs); AMC fees +31% FY26 to ₹77 cr; mgmt guides ₹7,000-9,000 cr NNM in FY27**",
                mix: "Currently AIF + a bit of PMS; commercial real estate fund ~₹3,000 cr (40% deployed)",
                analysis:
                    "**The phase-2 growth engine.** **SIF launch pending MF license final approval** (in-principle received; final 2-3 months away) — migration of well-positioned flagship AIF strategies (absolute return + long-short, top-quartile performance) to SIF unlocks a **massive distribution upgrade**: better tax profile for clients, IFA distribution channel opening, lower ticket sizes for accredited investors. **Commercial Real Estate fund 1**: ₹3,000 cr raised, 40% deployed, marquee Cat-A transactions; target full ₹4,000 cr in 1-1.5 quarters, then **Fund 2 launch** worth ₹2,500-3,000 cr. **Credit fund launch Q1-Q2 FY27** for another ₹2,000-3,000 cr. Mgmt open to **inorganic M&A in alternates** — \"managers with skill but no platform to raise capital.\" Public markets net flows subdued in FY26 (volatility + scheduled maturities + SIF competition pre-launch) but Q3 trend improving.",
                triggers:
                    "(a) **MF license final approval + SIF launch Q1 FY27** unlocking ₹2,000-2,500 cr migration + new flows; (b) Commercial Real Estate Fund 2 launching ~₹2,500-3,000 cr; (c) Credit fund launch raising ₹2,000-3,000 cr; (d) **Combined FY27 AMC NNM target ₹7,000-9,000 cr**; (e) Potential inorganic alternates M&A.",
            },
            {
                name: "4. Asset Services — ~5-7% of value, the recovered cash cow",
                yoyGrowth: "**FY26 revenue +12% YoY; Q4 ahead of expectations; revenue grew 7% QoQ in Q3 from Jane Street disruption low**",
                mix: "Custody + clearing + RTA + soon trustee services for HFTs / FPIs / domestic PMS+AIF",
                analysis:
                    "**Recovered from Jane Street disruption.** Float balances back to Q1 levels by Q3-end; HFT activity normalised post 30-40 day adjustment period; yields stable in 2.6-2.9% range (function of deposit vs G-Sec mix; mgmt comfortable forecasting 12 months at these levels). **Backward integration playing out**: RTA services for domestic PMS/AIF launching Q1 FY27 (\"largely done; 3 months to live\"); trustee services to follow = **one-stop shop** for domestic alternates ecosystem. RBI bank guarantee norms impact: \"minimal — ~₹10-15 cr annual net cost\"; offset by increased SPI derivative turnover volumes.",
                triggers:
                    "(a) Q1 FY27 RTA services going live + market-share capture in domestic PMS/AIF; (b) Trustee services scaling; (c) New geography HFT client onboarding (newer offshore funds entering India); (d) Float balance + yield combination delivering 12-15% revenue growth FY27.",
            },
            {
                name: "5. Capital Markets (Institutional Equities + Investment Banking) — ~7-10% of value, the cyclical drag",
                yoyGrowth: "**FY26 revenue −19% YoY (institutional equities flat; IB ECM billing slipped; F&O regulation hit; fixed-income IB ~50% of segment doing well)**",
                mix: "Equity + ECM + DCM (fixed-income); DCM margin ~60%, ECM ~40%, blended IB margin ~50%; IE margin 50-65% depending on cycle",
                analysis:
                    "**The cyclical drag with structural cyclical-yield headwinds.** Equity cash ADT **−6% YoY**; futures ADT **−14% YoY**; F&O regulation impact came in Q3-Q4 FY25 creating tough YoY comp. **Fixed-income IB doing well** (~50% of IB revenue) but ECM billing typically lumpy and slipped from Q3 to Q4. **Margin profile**: when revenues rise, cost-to-income compresses; in down-cycle, C/I expands — typical capital-markets pattern. **Mgmt: \"capital markets revenue moderated reflecting broader market trends\"**; full recovery dependent on equity-market cycle turning. Investment banking pipeline healthy (**40-45 live mandates** mgmt mentioned).",
                triggers:
                    "(a) ECM billing recovery in FY27 from lumpy Q4 FY26 slippage; (b) Continued strength in fixed-income IB; (c) **IPO pipeline 40-45 live mandates** convertingyielding 10-15% rev recovery in FY27; (d) Geopolitical-driven fixed-income flows benefit (less impacted by equity vol per CEO); (e) Mean-reversion in F&O turnover (mostly priced in).",
            },
        ],
        assessment: [
            "**5-engine architecture with structurally diversified revenue + asset quality + clear synergy thesis (One Nuvama program)**. Wealth + Private + AMC + Asset Services + Capital Markets each have independent revenue + cost drivers; **the One Nuvama program (2023-24)** drives cross-business synergies (UHNI clients getting wealth + lending + capital-markets services). The portfolio is *deliberately diversified* across (a) recurring-fee businesses (Wealth, Private ARR, AMC) and (b) transactional businesses (IB, Asset Services float, Capital Markets) = structurally less cyclical than pure brokerages.",
            "**Quality is improving where it matters; pressure is in capital markets + margin** — Wealth + Private + AMC together (~80% of value) growing 20-25% on revenue with rich ARR mix; Asset Services recovered; **Capital Markets the cyclical drag (-19%) but cyclically priced + small share of value**. Operating PAT growth ~6% FY26 is the headline disappointment but it's a **'spend now to compound later'** profile: RM hires front-loaded, offshore build-out, AMC capabilities, RTA/trustee, SIF launch readiness. **FY27 should see operating leverage as these investments start delivering revenue without proportional new spend.**",
            "**Segment verdict: HIGH-QUALITY DIVERSIFIED WEALTH PLATFORM in a transition / investment year**. Trading at the *lowest* P/E among credible Indian wealth platforms (27x vs 360ONE 36x, Anand Rathi 73x) despite superior ROE (25-27% vs peers 18-30%). The discount reflects (a) modest FY26 PAT growth optics, (b) capital-markets cyclical weakness, (c) PAG financial-sponsor overhang. **Each of these is addressable in FY27-28** — re-rating + earnings re-acceleration combined could deliver 30-50% returns over 18-24 months.",
        ],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            {
                metric: "1. Group Client Assets (₹ lakh cr) — *the scale metric*",
                current: "**₹4.53 lakh cr (end-Mar'26)**; Wealth ₹1.07 + Private ₹2.07 + balance MF/AS",
                trend: "Wealth +14% YoY; Private grew steadily; **Group AUM ~+12% YoY blended in FY26 despite Q4 market correction**",
                horizon: "FY27 target ₹5.20-5.50 lakh cr (+15-20%); FY28 ₹6.20-6.70 lakh cr",
                remarks:
                    "**Each 1% incremental retention on ₹4.5 lakh cr = ₹450 cr revenue impact** (theoretical maximum, ARR portion only). Realistic FY27 incremental revenue contribution from AUM growth: **+₹200-300 cr** to operating revenue. **The single largest, most predictable lever**.",
            },
            {
                metric: "2. MPIS Revenue / Wealth ARR — *the high-quality recurring base*",
                current: "MPIS revenue **+38% FY26**; Private ARR avg ~₹50,000 cr @ ~90 bps blended retention; **Wealth ARR + MPIS NNM ₹6,500 cr in 9M**",
                trend: "**MPIS revenue growing 2-3x faster than total Wealth revenue** = mix-shift toward recurring",
                horizon: "FY27 MPIS revenue **+30-35% YoY** (mgmt confident); FY28 +25-30%",
                remarks:
                    "**The most under-appreciated quality metric**. ARR-led model means revenue is highly visible — once assets are in MPIS, revenue compounds with retention. Risk: **PMS competition + MF expense ratio cuts** affecting MPIS retention 2-3 bps over 2-3 years = ₹50-80 cr revenue drag = ~₹30-50 cr PAT impact. **Bounded vs growth**.",
            },
            {
                metric: "3. AMC AUM (₹Cr) + FY27 NNM Target — *the long-dated optionality*",
                current: "AUM **₹12,807 cr (~2.5x in 3 yrs)**; AMC fees +31% FY26 to ₹77 cr",
                trend: "**Mgmt FY27 NNM guide ₹7,000-9,000 cr** = +55-70% AUM growth FY27",
                horizon: "FY27 AMC AUM ₹19,000-22,000 cr; FY28 ₹28,000-32,000 cr if SIF + Credit Fund + CRE-2 deliver",
                remarks:
                    "**The asymmetric optionality**. Components per mgmt: (a) CRE Fund 2 ₹2,500-3,000 cr, (b) Credit fund Q1-Q2 launch ₹2,000-3,000 cr, (c) SIF migration of flagship AIF + new flows ₹2,000-2,500 cr. **Each ₹10,000 cr incremental AMC AUM at ~70-80 bps avg retention = ₹70-80 cr revenue = ₹30-40 cr PAT** (alternates-heavier mix improves yield). **Transformational if delivered**.",
            },
            {
                metric: "4. Lending Book (₹Cr) + NII — *under-appreciated lever*",
                current: "Lending book **~₹4,800-5,000 cr (est end-Mar'26, +27% YoY)** from ₹2,800 cr opening",
                trend: "**Book grew aggressively; NII did NOT keep pace due to ECL provisioning**",
                horizon: "FY27 book ₹6,500-7,500 cr; NII normalisation post ECL roll-off = NII growth in line with book",
                remarks:
                    "**The lever waiting to lift**. Mgmt deliberately scaled book in FY26 as a strategic decision (\"two quarters back I said we'd grow this\"). FY27 should see (a) book continuing to compound on AUM growth, (b) NII catching up to book growth as ECL provisioning normalises, (c) margin profile improving as interest-rate cycle stabilises. **Risk**: any uptick in delinquency would hit P&L meaningfully given lending is run as a portfolio-loan / Lombard model against client securities — risk discipline is the test.",
            },
            {
                metric: "5. Capital Markets + Investment Banking Pipeline",
                current: "**40-45 live IB mandates**; ECM billing slipped from Q3 to Q4 FY26 (lumpy)",
                trend: "Fixed-income IB ~50% of segment doing well; equity ECM cyclical recovery dependent on market",
                horizon: "FY27 IB revenue +10-15% on ECM normalisation + healthy DCM pipeline",
                remarks:
                    "**The cyclical recovery lever**. Best-case: equity-market cycle turns + IPO pipeline (40-45 mandates) converts + ECM billing normalises = capital-markets revenue rebounds from FY26 −19% trough to FY27 +10-15% growth. **Worst-case**: another year of capital-markets weakness limits FY27 PAT growth to single-digits and prolongs valuation discount.",
            },
        ],
        demandSignals: [
            {
                signal: "Indian Wealth Pool Growth (UHNI + HNI + Affluent)",
                reading:
                    "Indian financialisation continuing; UHNI population growing 12-15% per year; **Wealth Management segment industry growing 18-22% per year**; **mgmt: \"competitive intensity rising — both traditional brokers + private-equity-backed platforms now competing for affluent + HNI segments\"** = validation Nuvama is in the right space. Addressable wealth pool **~₹400 lakh cr**; Nuvama group AUM <1.5% share = vast headroom.",
                verdict: "Robust",
            },
            {
                signal: "Alternates + Private Market Demand (AIF + SIF + Credit + Real Assets)",
                reading:
                    "Alternates AUM industry growing **25-30% per year**; **SIF regulatory enablement is a major positive for Nuvama** given existing AIF flagship strategies will migrate; commercial real estate, private credit, private equity all in demand. Mgmt: **\"SIF gives significantly improved tax profile + opens INR10 lakh distribution IFA community\"** = distribution upgrade for Nuvama's AMC.",
                verdict: "Robust",
            },
            {
                signal: "Capital Markets / IPO / Block Deal Activity",
                reading:
                    "Equity cash ADT **−6% YoY**; futures ADT **−14% YoY** in FY26 (F&O regulation drag); **but IPO pipeline healthy at 40-45 live mandates**; FII outflows of $15-20B in FY26 created headwind. Mgmt: \"fixed income flows expected to remain stable; geopolitical may benefit fixed income.\" **Mixed signal**: structurally healthy pipeline; cyclically weak realisation.",
                verdict: "Adequate",
            },
            {
                signal: "Competitive Intensity & RM Talent Market",
                reading:
                    "**Mgmt: \"competitive intensity growing — even private-equity-backed platforms now in HNI + affluent segments\"**; **RM compensation inflation is real** (\"new entrants making lofty promises\"). Nuvama positioning: **platform + balance sheet + product innovation + size as differentiator**; **+10% RM capacity added in 12 months** in Private; **AI-driven productivity +25%** per mgmt. **Holding share with discipline, not at any cost** = manageable but **margin headwind near-term**.",
                verdict: "Mixed (Strong demand for Nuvama platform; high cost to retain)",
            },
            {
                signal: "Regulatory & Geographic Expansion",
                reading:
                    "**Regulatory tailwinds**: SIF rules enabled (Nuvama applied for MF license — in-principle approval received); accredited investor framework helping alternates; RBI bank guarantee norms minimal impact (₹10-15 cr annual). **Geographic**: **Dubai broken even**; **Singapore breakeven 2 quarters away**; offshore 5% of Private revenue today targeting 10-12% over 2-3 years. **HFT clients onboarding from new geographies** = Asset Services growth tailwind.",
                verdict: "Strong",
            },
            {
                signal: "New Product / Service Pipeline (FY27)",
                reading:
                    "**Heaviest pipeline in years**: (a) SIF launch Q1 FY27 (migration of AIF + new flows ₹2,000-2,500 cr); (b) MF license final approval (next 2-3 months); (c) Commercial Real Estate Fund 2 (₹2,500-3,000 cr); (d) Credit fund launch Q1-Q2 (₹2,000-3,000 cr); (e) RTA services going live; (f) Trustee services; (g) New REIT/InvIT product + dynamic asset product evergreen vehicle; (h) PE list-outs: Sudeep Pharma already + 2-3 more in 6-8 months.",
                verdict: "Robust",
            },
        ],
        demandVerdict:
            "**Demand environment is GREEN on wealth + AMC + asset services; AMBER on capital markets** — 5 of 6 dimensions positive; only capital markets shows cyclical weakness which mgmt is honest about. **The structural tailwinds for Indian wealth management remain among the strongest of any sector**: financialisation + UHNI growth + alternates demand + regulatory enablement + offshore. Nuvama's positioning as **the only listed integrated wealth+capital-markets platform at <30x P/E with 25%+ ROE** is structurally attractive; **the question is FY27 execution** on SIF launch + AMC NNM ₹7-9K cr + margin discipline + capital-markets cycle turning. **Mgmt explicit 20-25% overall growth guide for FY27** + concrete sub-segment milestones = clear visibility for compounding.",
        whatWentRight: [
            "**Wealth + AMC compounding 5 quarters in a row** — Wealth Mgmt segment **revenue +21% YoY 9M / +19% YoY Q4 / PBT +23% YoY 9M**; **MPIS revenue +38% FY26**; AMC AUM **₹12,807 cr (~2.5x in 3 yrs)**; Wealth client assets **₹1.07 lakh cr (+14% YoY)**; closing group client assets ₹4.53 lakh cr. **The high-quality, recurring-revenue parts of Nuvama are firing on all cylinders**. ROE sustained at **25-27%** = capital efficiency among the best in listed wealth space.",
            "**Massive pipeline of FY27 catalysts maturing simultaneously**: (a) **SIF launch Q1 FY27** unlocking ₹2,000-2,500 cr migration + new flows + distribution upgrade; (b) **MF license final approval imminent**; (c) **CRE Fund 2** worth ₹2,500-3,000 cr; (d) **Credit fund launch Q1-Q2**; (e) **RTA services going live**; (f) **Singapore breakeven 2 quarters**; (g) **40-45 live IB mandates** in pipeline; (h) **AMC NNM target ₹7,000-9,000 cr** (vs FY26 estimated ₹4,000-5,000 cr from AMC alone) = nearly **2x acceleration**.",
        ],
        whatWentWrong: [
            "**Capital Markets segment −19% FY26 is the structural drag** — F&O regulation impact + ECM billing slip + lower cash equity ADT (−6%) + lower futures ADT (−14%). Even with healthy IB pipeline (40-45 mandates), the cyclical recovery in capital markets is **dependent on equity-market cycle turning** + ECM billing normalising — neither is within mgmt's full control. **Risk**: FY27 capital markets stays weak = another year of muted PAT growth = valuation discount persists.",
            "**Margin compression visible quarter on quarter** — Q4 Cost-to-Income jumped to 58% (vs Q3 53%); Operating PAT margin compressed to 21.18% (vs Q3 22.97%); employee costs Q4 +12% YoY / +17% QoQ on variable bonus + RM compensation inflation; finance costs +20% YoY. **If RM compensation arms-race continues in FY27 + capital markets stays weak + ECL provisioning persists in lending, Operating PAT growth could remain sub-10% in FY27** = re-rating thesis weakens.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            {
                metric: "FY27 Overall Group Growth",
                current: "FY26 Operating revenue ₹3,122 cr (+8% YoY); Operating PAT ₹1,049 cr (+6% YoY)",
                target:
                    "**20-25% overall growth in FY27** (mgmt explicit); driven by Wealth + AMC + Asset Services with capital-markets stabilising; **Operating PAT growth target ~15-20%** with operating leverage starting to flow",
            },
            {
                metric: "FY27 AMC Net New Money (NNM)",
                current: "FY26 AMC AUM ₹12,807 cr (NNM est ~₹4,000-5,000 cr)",
                target:
                    "**₹7,000-9,000 cr NNM in FY27** (nearly 2x acceleration) — components: CRE Fund 2 (₹2,500-3,000 cr) + Credit fund (₹2,000-3,000 cr) + SIF migration & new (₹2,000-2,500 cr); **target FY27 AUM ₹19,000-22,000 cr (+55-70%)**",
            },
            {
                metric: "Wealth Management — Net New Money + MPIS Growth",
                current: "FY26 MPIS revenue +38%; Wealth NNM ₹6,500 cr 9M tracking 28-30%",
                target:
                    "**Sustain 28-30% MPIS NNM growth in FY27 + 25% growth on opening Private ARR assets**; Wealth segment revenue **+18-22% FY27** keeping Wealth share of revenue rising toward 60%+",
            },
            {
                metric: "Cost-to-Income / Margin Discipline",
                current: "FY26 C/I 56% (Q4: 58%)",
                target:
                    "**Opex growth 10-12% in FY27** (50% expansion + 50% inflation); **Cost-to-Income trending toward 53-54%** as revenue grows faster than opex; **operating leverage from FY27 H2 onwards** as front-loaded investments mature",
            },
            {
                metric: "Offshore (Dubai + Singapore) Breakeven + Scale",
                current: "Dubai broken-even; Singapore loss-making; offshore ~5% of Private revenue",
                target:
                    "**Singapore breakeven in 2 quarters** (Q2-Q3 FY27); offshore revenue share growing from 5% toward **10-12% over 2-3 years**; potential **inorganic M&A** to accelerate offshore scaling",
            },
        ],
        commitmentNote:
            "**Mgmt credibility track record**: Ashish Kehair (MD/CEO) has guided Nuvama through (a) demerger from Edelweiss in 2022, (b) listing in Sep 2023, (c) Jane Street disruption in Q1 FY26 (asset services fully recovered as guided), (d) PAT CAGR of **45% over last 3 years**, 9M FY26 PAT ₹780 cr vs 9M FY23 ₹253 cr (3.1x). **The FY27 guidance of 20-25% growth + ₹7-9K cr AMC NNM + Singapore breakeven is concrete and achievable** — most levers are within mgmt control (product launches, geographic scaling, RM hires). **The biggest uncertainty is capital-markets cycle** (not in mgmt control). **Mgmt has historically under-promised and over-delivered**; lending book +27% (delivered as guided); MPIS +38% (delivered); Asset Services recovery (delivered). **Watch FY27 H1**: SIF launch + MF license activation + AMC NNM cadence (₹3,500-4,500 cr in H1 = on track) + Cost-to-Income trending below 56% = clear validation. **Dividend discipline**: ₹14/share FY26 (49% payout) + ROE 27% = balanced capital return + reinvestment.",
        growthDrivers: [
            {
                driver: "1. AMC NNM Acceleration to ₹7,000-9,000 cr (FY27) — nearly 2x vs FY26",
                impact:
                    "Combined: CRE Fund 2 (₹2,500-3,000 cr) + Credit fund (₹2,000-3,000 cr) + SIF migration & new flows (₹2,000-2,500 cr) = AMC AUM ₹19,000-22,000 cr exit FY27. **Each ₹10,000 cr AMC AUM at ~70-80 bps blended retention = ₹70-80 cr revenue = ~₹35-40 cr PAT**. **Total FY27 AMC revenue uplift ₹40-60 cr = ~₹20-30 cr incremental PAT**. *Long-dated FY27-28 catalyst*.",
            },
            {
                driver: "2. MPIS + Wealth Segment Compounding (+28-30% NNM, +20%+ revenue)",
                impact:
                    "Wealth ARR + MPIS continues to be the single biggest profit pool. **Each 20% revenue growth on Wealth ₹474 cr Q4 base = +₹380 cr/year incremental Wealth revenue at ~55-60% segment margin = ₹210-230 cr incremental Wealth PBT**. **The single largest, most predictable lever**.",
            },
            {
                driver: "3. Operating Leverage from FY26 Investment Phase (Cost-to-Income compression)",
                impact:
                    "FY26 spent on RM hires + offshore build-out + AMC capabilities + RTA/trustee; FY27 these investments deliver revenue without proportional new spend. **Each 100 bps C/I improvement on FY27E revenue ₹3,800 cr = ₹38 cr cost savings = ~₹25-30 cr PAT**. **C/I 56% → 53-54% over 2-3 years = ₹70-100 cr cumulative PAT savings**.",
            },
            {
                driver: "4. SIF Launch + MF License — Distribution Upgrade",
                impact:
                    "SIF migration of flagship absolute-return + long-short AIFs unlocks **(a) better tax profile for clients = stronger flows, (b) opens INR10-lakh+ distribution IFA community, (c) lower ticket sizes for accredited investors**. **Hard-to-quantify but transformational**: if SIF migration delivers expected NNM uplift, AMC revenue could compound at 35-40% in FY27-28 vs base 25-30%. **Asymmetric upside**.",
            },
            {
                driver: "5. Capital Markets Cyclical Recovery + Lending NII Normalisation",
                impact:
                    "Capital markets FY26 −19% → FY27 +10-15% recovery on ECM billing normalisation + healthy IB pipeline + F&O cycle base-effect = **₹50-80 cr incremental revenue = ~₹25-40 cr PAT**. Lending book +27% with NII catching up post ECL roll-off = **₹30-50 cr incremental NII = ~₹20-30 cr PAT**. **Combined FY27 cyclical recovery: ₹45-70 cr PAT uplift**.",
            },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            {
                title: "Wealth + MPIS franchise compounding 20%+ in a volatile year — quality moat intact",
                body:
                    "**Wealth Mgmt segment revenue +19% YoY in Q4 / +21% YoY 9M; PBT +23% YoY 9M; MPIS revenue +38% FY26**; Wealth client assets ₹1.07 lakh cr (+14% YoY); MPIS NNM ₹6,500 cr in 9M tracking 28-30% of opening assets; Private ARR avg ~₹50,000 cr at ~90 bps blended retention. **Wealth share of group revenue rose from 50% → 57%** in one year = quality mix-shift to recurring streams. **The franchise has compounded through Jane Street disruption + capital-markets weakness + RM-comp inflation — moat is intact**.",
            },
            {
                title: "Heaviest pipeline of FY27 catalysts in Nuvama's history",
                body:
                    "(a) **SIF launch Q1 FY27** unlocking ₹2,000-2,500 cr migration + new flows + IFA distribution upgrade; (b) **MF license final approval imminent** (in-principle approval received); (c) **CRE Fund 2** (₹2,500-3,000 cr); (d) **Credit fund Q1-Q2 launch** (₹2,000-3,000 cr); (e) **RTA + Trustee services going live** = one-stop shop for domestic PMS/AIF; (f) **Singapore breakeven 2 quarters**; (g) **40-45 live IB mandates**; (h) **AMC NNM FY27 ₹7,000-9,000 cr** = nearly **2x acceleration vs FY26**. **No single catalyst is required — multiple independent levers**.",
            },
            {
                title: "Trading at >25% discount to peer median despite higher ROE — re-rating optionality",
                body:
                    "**P/E 27.08x vs Industry P/E 36.54x = ~26% discount**; vs **360 ONE 35.9x (ROE 18.22%)**, **Anand Rathi 73x (ROE 38.69%)**, **Aditya Birla AMC 31x (ROE 25.62%)**, **CRISIL 35x (ROE 28.60%)**. **Nuvama is the ONLY major listed wealth+capital-markets player at <30x P/E with 25%+ ROE**. The discount reflects (a) FY26 modest PAT growth optics, (b) capital-markets weakness, (c) PAG financial-sponsor overhang. **Each is addressable**: FY27 PAT acceleration + capital-markets cyclical recovery + eventual PAG exit. **20-30% multiple re-rating to peer-median 33-35x would deliver ₹1,900-2,200 from ₹1,519** independent of earnings growth.",
            },
            {
                title: "Asset Services recovered fully + new growth verticals launching (RTA + Trustee)",
                body:
                    "Post Jane Street SEBI order in Q1 FY26: **Q4 FY26 ran *ahead* of expectations**; float balances back to Q1 levels; HFT activity normalised post 30-40 day adjustment; yields stable 2.6-2.9% (12-month forecast comfort). **RTA services going live Q1 FY27** = backward integration into domestic PMS/AIF ecosystem capturing market share; **Trustee services to follow** = one-stop shop. **FY26 segment revenue +12% YoY** despite a tough Q1 = resilience proven. **Net new HFT clients from offshore geographies** continuing.",
            },
            {
                title: "Operating leverage thesis intact — FY26 was deliberate investment phase",
                body:
                    "FY26 saw front-loaded RM hires (+10% capacity Private; aggressive in Wealth) + offshore build-out (Dubai broken even, Singapore 2 quarters away) + AMC capabilities + RTA/trustee + SIF launch readiness. **Mgmt opex guide steady at 10-12% (50% expansion + 50% inflation)**. **FY27 should see C/I compression from 56% → 53-54% as revenue grows 20-25% vs opex 10-12% = operating leverage of 800-1,200 bps on revenue base. 100 bps C/I improvement on FY27E ₹3,800 cr revenue = ₹38 cr cost savings = ~₹25-30 cr PAT contribution per year**.",
            },
        ],
        bearish: [
            {
                title: "FY26 Operating PAT only +6% — revenue growth not flowing to bottom-line",
                body:
                    "**Operating PAT FY26 ₹1,049 cr (+6% YoY) vs Operating revenue +8%** = no operating leverage; **PAT margin compressed 110 bps YoY**. Q4 was acute: Operating PAT margin 21.18% (vs Q3 22.97%); Cost-to-Income jumped to 58% (vs Q3 53%). **If FY27 doesn't see clear operating leverage by Q2 FY27, the 'investment phase yielding compounding' narrative weakens** = valuation discount persists. **Critical**: Q1-Q2 FY27 C/I must trend below 56% for thesis validation.",
            },
            {
                title: "Capital Markets segment −19% FY26 — cyclical drag with structural concerns",
                body:
                    "FY26 capital-markets revenue **−19% YoY**; equity cash ADT **−6% YoY**; futures ADT **−14% YoY**; ECM billing slipped from Q3 to Q4. **Mgmt: \"reflects broader market trends\"** — but F&O regulation impact may be partly structural. **Risk**: if equity market cycle stays weak in FY27 + IPO pipeline conversion (40-45 mandates) slows, capital-markets revenue could stay flat or even decline another 5-10% in FY27 = **₹40-80 cr revenue drag**. **Worst-case**: another year of single-digit PAT growth + valuation discount widens.",
            },
            {
                title: "PAG financial-sponsor overhang + RM compensation inflation",
                body:
                    "PAG holds **54.13% as financial sponsor**; mgmt explicit: \"there will be a change of ownership at some point in time.\" **Eventual block-deal or strategic sale creates near-term sentiment overhang** (every 1-2 quarters, news cycle reignites uncertainty); promoter holding slowly drifting down (54.78% → 54.13% over last year). **RM compensation inflation**: mgmt acknowledged \"new entrants making lofty promises\"; **competitive intensity rising in HNI + affluent segments now (was UHNI-only earlier)** = **Q4 employee costs +17% QoQ** is a warning. If RM-comp arms race accelerates, C/I target of 53-54% slips toward 56-58%.",
            },
            {
                title: "Lending NII not growing in line with book — ECL provisioning + interest-rate cycle",
                body:
                    "Loan book grew **+27% YoY** to ~₹4,800-5,000 cr but **NII did NOT keep pace due to ECL provisioning + market volatility**. Mgmt: \"with ECL provisioning, NII growth was not in line with book growth.\" **Risk**: (a) if delinquency uptick in FY27, ECL provisioning persists = NII drag continues; (b) book is portfolio loans / Lombard against client securities — **any sharp market correction could trigger LTV-driven margin calls + provisioning spike**; (c) Debt/Equity 2.80x is high (typical for capital markets firms but adds rate-cycle risk). **Manageable but real near-term margin headwind in lending segment**.",
            },
            {
                title: "Public-market alternates flows subdued + Anugrah litigation overhang (formally admitted)",
                body:
                    "**Public-market alternates net flows flat in FY26** due to volatility + scheduled maturities + SIF-competition pre-launch; **competition from new entrants making lofty promises** to clients. **Anugrah litigation**: Supreme Court formally admitted the case (after 2 years of admission limbo); **mgmt confident on legal merit** but \"decision may take a couple of years\" = sentiment overhang + legal cost drag + reputational noise persist. **Risk**: if adverse partial outcome, sentiment hit + provisioning even if mgmt confident on merits.",
            },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text:
                "**FY26 = a 'transition + investment' year for India's most-undervalued listed wealth franchise** — Wealth franchise compounded hard (Wealth Mgmt PBT +23% 9M; MPIS revenue +38%; Wealth client assets ₹1.07 lakh cr +14% YoY; AMC AUM ₹12,807 cr / 2.5x in 3 yrs) but **Operating PAT only +6% YoY** due to margin compression from front-loaded investments + capital-markets cyclical weakness (−19%) + RM-comp inflation. **The core wealth + AMC franchise is intact; the drag is cyclical + investment-phase, not structural**.",
            impact: "neutral",
            note: "investment-phase optics; quality core intact",
        },
        {
            text:
                "**Heaviest pipeline of FY27 catalysts in Nuvama's history maturing simultaneously**: SIF launch Q1 FY27 (₹2,000-2,500 cr migration + new flows) + MF license final approval imminent + CRE Fund 2 (₹2,500-3,000 cr) + Credit fund (₹2,000-3,000 cr) + RTA + Trustee services + Singapore breakeven + 40-45 live IB mandates + **AMC NNM target ₹7,000-9,000 cr (vs FY26 ~₹4,000-5,000 cr) = nearly 2x acceleration**. **5 independent compounding levers**.",
            impact: "strengthens",
        },
        {
            text:
                "**Mgmt explicit FY27 guidance: 20-25% overall growth + 15-20% Operating PAT growth + C/I compression toward 53-54%** = re-acceleration vs FY26 +6%. Ashish Kehair (MD/CEO) credibility track record: PAT 3-yr CAGR **+45%**; delivered on Jane Street recovery, lending book +27%, MPIS +38%, Dubai breakeven. **Most levers within mgmt control**; primary uncertainty is capital-markets cycle.",
            impact: "strengthens",
        },
        {
            text:
                "**Near-term overhangs: PAG financial-sponsor eventual exit + Anugrah litigation (formally admitted, 2-yr decision) + RM compensation arms race + lending NII normalisation pending + capital-markets cyclical weakness**. None thesis-breaking; PAG exit could even be a *catalyst* (block deal at premium typical pattern); Anugrah mgmt confident on legal merits; RM comp manageable with platform pull. **Manageable cumulatively but material near-term sentiment**.",
            impact: "neutral",
            note: "manageable cumulative overhangs",
        },
        {
            text:
                "**Stock at ₹1,519.30 (live, −1.87%) — P/E 27.08x vs industry P/E 36.54x = ~26% discount; vs 360 ONE 35.9x P/E with similar mix = ~25% discount despite Nuvama's higher ROE (25-27% vs 18-22%)**. **Asymmetric setup**: bear case ₹1,200-1,300 (FY27 disappointment + capital markets weak + PAG event poorly absorbed = -15-22%), base case ₹1,750-1,950 (FY27 NNM delivers + SIF launches + margins stabilise + partial re-rating to 30-32x = +15-28%), bull case ₹2,200-2,500 (FY28 visibility + SIF/MF scale + PAG event + full re-rating to 33-35x = +45-65%). **Roughly 3:1 reward-to-risk over 18-24 months**. **Verdict: HIGH-CONVICTION ACCUMULATE on dips** — aggressive accumulate below ₹1,400.",
            impact: "strengthens",
        },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        /* Q1 — Is the core investment thesis intact? */
        thesisIntact: {
            verdict:
                "Yes — strengthened on Wealth + AMC quality compounding; weakened on near-term margin profile and capital-markets cyclical weakness; net **strengthened** with high optionality from FY27 catalysts",
            reasons: [
                "**The core wealth-platform compounder thesis is intact** — Wealth Mgmt revenue +21% YoY 9M / PBT +23% YoY 9M; MPIS revenue **+38% FY26**; Wealth client assets ₹1.07 lakh cr (+14% YoY); Private ARR avg ~₹50,000 cr at ~90 bps blended retention; AMC AUM ₹12,807 cr (~2.5x in 3 yrs); group client assets ₹4.53 lakh cr. **The high-quality recurring-revenue franchise compounded through Jane Street disruption + capital-markets weakness + RM-comp inflation = moat is real**. 3-yr PAT CAGR **+45%** + ROE sustained 25-27% = best-in-class capital efficiency.",
                "**FY27 guidance is concrete and ambitious**: 20-25% overall growth + AMC NNM ₹7,000-9,000 cr (nearly 2x FY26) + C/I compression to 53-54% + Singapore breakeven + SIF launch + MF license activation. **Mgmt has historically delivered on stated commitments** (Jane Street recovery; lending book +27% as guided 2 quarters back; MPIS +38% as guided; Dubai breakeven as guided). **Ashish Kehair's credibility is among the highest in Indian wealth-management space**.",
                "**Multiple optionality layers maturing in FY27**: (a) **SIF launch Q1 FY27** with flagship AIF migration + IFA distribution upgrade, (b) **MF license** final approval unlocking new distribution, (c) **CRE Fund 2 (₹2,500-3,000 cr) + Credit fund (₹2,000-3,000 cr)**, (d) **RTA + Trustee services** capturing domestic PMS/AIF backward-integration share, (e) **Singapore breakeven** + offshore scale-up, (f) **Capital-markets cyclical recovery** with 40-45 live IB mandates + ECM billing normalisation, (g) **Lending NII normalisation** post ECL roll-off, (h) **Eventual PAG exit** as potential re-rating catalyst (block deal at premium pattern).",
                "**Valuation discount is the asymmetric edge**: P/E 27.08x vs industry 36.54x = ~26% discount; vs 360 ONE 35.9x with similar wealth+AMC+capital-markets mix = ~25% discount despite Nuvama's higher ROE (25-27% vs 18-22%). **Nuvama is the *only* major listed integrated wealth+capital-markets platform at <30x P/E with 25%+ ROE**. The discount reflects FY26 PAT growth optics (+6%), capital-markets weakness, PAG overhang — **each addressable in FY27-28**. **Even without re-rating**, 15-20% earnings growth at constant multiples delivers 15-20% returns; **with partial re-rating** to 30-32x, returns expand to 30-45%.",
                "**The thesis weakens if**: (a) FY27 H1 capital-markets stays flat or declines further, (b) C/I remains above 56% in Q2 FY27 = no operating leverage materialising, (c) Lending NII delinquency uptick = ECL provisioning persists, (d) PAG block deal mis-times market or is structured poorly, (e) RM-comp arms race escalates further. **The thesis strengthens if**: (a) SIF launch delivers ₹2,500 cr+ NNM in Q1 FY27, (b) C/I trends below 55% by Q2 FY27, (c) Capital-markets cyclical recovery in H2 FY27, (d) PAG block deal at a premium triggers price discovery, (e) Anugrah favourable resolution removes overhang.",
            ],
        },

        /* Q2 — Re-rate triggers + probability */
        rerateTriggers: [
            {
                trigger: "FY27 H1 print: AMC NNM tracking ₹3,500-4,500 cr + SIF launch successful",
                probability: "High",
                rationale:
                    "SIF migration mechanics are known (flagship AIFs migrate at lower tax cost); MF license in-principle approval received; CRE Fund 2 + Credit fund roadmap concrete. **Most likely positive vector**: if Q1-Q2 FY27 AMC NNM tracks ₹3,500-4,500 cr cumulatively = on-track for ₹7,000-9,000 cr full year = stock re-rates toward ₹1,750-1,900 (+15-25%).",
            },
            {
                trigger: "Cost-to-Income trends below 56% by Q2 FY27 = operating leverage validated",
                probability: "Medium-High",
                rationale:
                    "FY26 investment-phase opex front-loaded; FY27 revenue growth 20-25% vs opex 10-12% mechanically delivers C/I compression. **Key signal**: Q1-Q2 FY27 employee costs growing <10% YoY = wage discipline holding = thesis validated. **If validated, +10-15% sentiment-driven re-rating** as 'investment-phase' narrative crystallises.",
            },
            {
                trigger: "PAG exit (block deal at premium) — catalyst, not just overhang",
                probability: "Medium",
                rationale:
                    "Mgmt explicit: \"financial sponsor; change of ownership inevitable.\" Typical PE exit at 15-25% premium block deal triggers price discovery + removes overhang. **Timing uncertain (could be FY27-28)**; **if structured well at premium, +15-25% re-rating**; if poorly absorbed, neutral-to-negative for 1-2 quarters then absorbed.",
            },
            {
                trigger: "Capital-markets cyclical recovery + 40-45 IB mandates converting in FY27",
                probability: "Medium",
                rationale:
                    "FY26 capital-markets −19% base creates favourable comp; healthy IB pipeline; mgmt confident on fixed-income (50% of IB) stability. **Risk**: equity-market cycle remaining weak. **Base case FY27 capital-markets +10-15% recovery** = +₹50-80 cr revenue = +₹25-40 cr PAT contribution.",
            },
            {
                trigger: "Anugrah litigation favourable resolution (2-year horizon)",
                probability: "Low-Medium",
                rationale:
                    "Mgmt confident on legal merits but acknowledged 2-year decision timeline. **Asymmetric optionality**: favourable resolution removes overhang = +5-10% sentiment re-rating; adverse outcome already largely priced. **Not a near-term catalyst**.",
            },
        ],

        /* Q3 — Upside if guidance fully met */
        upsideIfGuidanceMet: {
            currentPrice: "₹1,519.30 (live NSE LTP via Groww MCP, 13 May 2026 18:44 IST)",
            targetPrice: "₹1,950 – ₹2,400",
            upsidePct: "+28% to +58%",
            horizon: "18-24 months (FY28 EPS-multiple basis with mgmt 20-25% revenue + 15-20% PAT growth delivered)",
            assumptions:
                "**Base case (FY27 mgmt guidance partially-to-fully delivered):** FY27 Operating revenue ₹3,800-3,900 cr (+22-25%); Operating PAT ₹1,200-1,260 cr (+15-20%); EPS ₹66-69; C/I trending 54-55%. **FY28 Operating revenue ₹4,600-4,800 cr; Operating PAT ₹1,450-1,550 cr; EPS ₹80-86**. **Trailing P/E 27.08x; industry P/E 36.54x; 2-yr median 28-32x (limited listed history since Sep 2023)**. **Base case**: Apply 28-30x to FY28 EPS ₹80 = ₹2,240-2,400; apply 30x to FY27 EPS ₹66 = ₹1,980 (12-month view). **Bull case** (SIF/MF scale + PAG event + Anugrah resolution + capital-markets recovery + Tangible ROE expands toward 28-30%): apply 32-35x to FY28 EPS ₹86 = ₹2,750-3,010. **Conservative target ₹1,950** (FY27 EPS ₹66 × 30x = base case 12 month), **Aggressive target ₹2,400** (FY28 EPS ₹80 × 30x = 18-24 month). **Range ₹1,950-2,400 (+28-58%) over 18-24 months**.",
            workings:
                "**FY27 Build:** Wealth revenue ₹2,100 cr (+19%); AMC revenue ₹150 cr (~+100% on NNM acceleration); Asset Services ₹650 cr (+12%); Capital Markets ₹900 cr (+10-12% cyclical recovery); Other ₹50 cr; **Operating revenue ₹3,850 cr (+23%)**; Opex ₹2,150 cr (+10-12% = C/I 55.8%); Operating PBT ₹1,700 cr; Tax 26% = ₹442 cr; **Operating PAT ₹1,258 cr → EPS ₹69**. **FY28 Build:** Wealth ₹2,520 cr (+20%); AMC ₹230 cr (+53%); Asset Services ₹730 cr (+12%); Capital Markets ₹1,050 cr (+17%); Other ₹70 cr; **Operating revenue ₹4,600 cr (+19%)**; Opex ₹2,500 cr (C/I 54%); Operating PBT ₹2,100 cr; Tax 26% = ₹546 cr; **Operating PAT ₹1,554 cr → EPS ₹86**. **Multiples**: Apply 28x to FY28 EPS ₹86 = ₹2,408; 30x = ₹2,580; 32x = ₹2,752. Apply 30x to FY27 EPS ₹69 = ₹2,070 (12-month base case). **Bull case**: ROE expanding + PAG exit + Anugrah resolution = supports 33-35x = ₹2,838-3,010. **18-24 month range ₹1,950-2,400 (+28-58%)** weights base case + partial bull.",
        },

        /* Q4 — Best value entry zone */
        valuationEntryZone: {
            bestValueRange: "₹1,300 – ₹1,400",
            fairValue: "₹1,500 – ₹1,650",
            currentZone: "Fair — at lower-mid end of fair value zone (₹1,519)",
            rationale:
                "**Trailing P/E 27.08x vs industry P/E 36.54x = ~26% discount = the structural valuation edge**. **P/B 6.87x with ROE 25.26%** = P/B/ROE 0.27x (reasonable for high-quality wealth with embedded growth). **Forward P/E on FY27E EPS ₹66**: 23.0x; **on FY28E EPS ₹80**: 19.0x = **cheap if mgmt guidance delivered**. **52-week range ₹1,096.90 – ₹1,701.70**; current ₹1,519 is upper-mid (~89% of 52-w high; ~38% above 52-w low). **Best-value entry ₹1,300-1,400** = 22-24x FY27E P/E + PAG overhang absorbed + capital-markets weakness cushion + post Q1 FY27 SIF launch confirmation. **Fair value ₹1,500-1,650** = 25-28x FY27E P/E = current zone. **Above ₹1,800** starts pricing FY28 +15-20% PAT growth explicitly; **above ₹2,100** prices SIF/MF scale + PAG event + full peer-parity re-rating. **Per *valuation_analysis.md* logic**: deploy moderately at current ₹1,450-1,550 (fair value) with FY27 catalyst conviction; **aggressive accumulate below ₹1,400** if any of (a) PAG block deal sentiment dip, (b) market correction 5-8%, (c) Q1 FY27 SIF launch delays. **Asymmetric setup**: -15-22% downside to ₹1,200-1,300 (FY27 disappointment + capital markets stays weak + PAG event poorly absorbed) vs +28-58% upside to ₹1,950-2,400 (FY27-28 guidance delivered + partial re-rating to peer-parity) = **roughly 2.5:1 to 3:1 reward-to-risk** — **meaningfully attractive** for a quality wealth platform at a 25%+ peer-discount.",
        },

        summary:
            "**Nuvama Wealth Management Q4 FY26 is a 'high-quality compounder going through a transition / investment year at a peer-discount valuation' quarter** — Wealth franchise compounding hard (Wealth Mgmt revenue +21% 9M / PBT +23% 9M; MPIS revenue +38% FY26; Wealth client assets ₹1.07 lakh cr +14% YoY; AMC AUM ₹12,807 cr / 2.5x in 3 yrs; ROE sustained 25-27%) but **Operating PAT only +6% FY26** due to front-loaded RM hires + offshore build + capital-markets cyclical weakness (−19% FY26) + RM-compensation inflation. **Mgmt explicit FY27 guidance** — 20-25% overall growth + AMC NNM ₹7,000-9,000 cr (nearly 2x FY26) + C/I compression to 53-54% + Singapore breakeven + SIF launch Q1 FY27 + MF license activation + CRE Fund 2 + Credit fund + RTA + Trustee services — implies **15-20% Operating PAT growth FY27-28** (Operating PAT FY27 ₹1,200-1,260 cr → FY28 ₹1,450-1,550 cr → EPS ₹69 → ₹86). **5 independent compounding levers** + valuation discount of ~26% to industry P/E + ~25% to 360 ONE despite higher ROE. **Near-term overhangs**: PAG financial-sponsor eventual exit + Anugrah litigation (formally admitted, 2-yr decision) + RM-comp arms race + lending NII normalisation pending + capital-markets cyclical weakness — none thesis-breaking. **Asymmetric setup**: bear case ₹1,200-1,300 (-15-22%), base case ₹1,950-2,070 (+28-36%), bull case ₹2,400-2,750 (+58-81%) over 18-24 months. **Roughly 2.5:1 to 3:1 reward-to-risk** at current ₹1,519. **Verdict: HIGH-CONVICTION ACCUMULATE on dips** — current ₹1,519 sits at lower-mid end of fair value; deploy moderately now with conviction earned from FY26 wealth + AMC franchise + concrete FY27 catalyst calendar; aggressive accumulate below ₹1,400 if PAG event sentiment dip + market correction provides entry. **The thesis is dual-engine**: (a) FY27 earnings re-acceleration from +6% to +15-20% as investment phase completes, AND (b) valuation discount closure as 26% peer-gap narrows. **Either alone delivers double-digit returns; together delivers 30-50% over 18-24 months** = the most attractive risk-adjusted setup in the listed Indian wealth-management space today.",
    },
});
