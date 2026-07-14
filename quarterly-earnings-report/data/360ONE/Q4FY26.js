/* ============================================================
   360 ONE WAM Ltd — Q4 FY26 / Full Year FY26
   Concall: 21 April 2026 (results announced same day)
   File path: data/360ONE/Q4FY26.js
   Live spot @ authoring: ₹1,046.80 NSE / ₹1,046.60 BSE (29 Apr 2026, 18:58 IST)
   Day move: +0.76% (mild positive drift; results 8 days old, broadly digested)
   Source: Groww MCP get_ltp + fetch_stocks_fundamental_data
   ============================================================ */

window.registerReport("360ONE", "Q4FY26", {
    meta: {
        companyName: "360 ONE WAM Ltd",
        ticker: "360ONE",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "21 April 2026",
        concallDate: "21 April 2026 (Q4 FY26 earnings call)",
        resultsBasis:
            "Consolidated. **Multi-engine WAM platform**: (1) UHNI/HNI Wealth Management (~75% of value), (2) Asset Management — alternates + MFs + PMS, (3) 361 Capital (formerly BNK Securities — institutional equities + nascent IB), (4) Lending (Lombard/portfolio loans, zero NPA history), (5) ET Money (digital affluent), (6) UBS strategic collaboration (offshore distribution + cross-referrals). **Right earnings frameworks**: ARR AUM growth + ARR Retention bps + Tangible ROE + Cost-to-Income + Net Flows as % of opening AUM — *not* simple P/E. **Tangible ROE 19.3% (vs 12.37% reported ROE which dilutes for goodwill from acquisitions) is the correct return metric** for an asset-light WAM franchise.",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. 360 ONE is a *high-quality compounder* with structurally attractive economics; valuation is full (P/E 34.69x), so re-rating is muted but **earnings compounding (FY27-29 PAT CAGR 22-26%) is the primary return driver**. Tax demand of ₹336 cr (received Apr 2026) is being appealed and per mgmt is not material to financials.",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            {
                metric: "Total Revenue (₹Cr)",
                current: "**Q4: 780 / FY26: 3,144**",
                qoq: "Q4 vs Q3 ~₹790 cr broadly stable; ARR Revenue ₹605 cr (+20% YoY) is the high-quality recurring contributor",
                yoy: "**Q4: +18.5% YoY / FY26: +18.6% YoY** — driven by ARR revenue +34.5% YoY (+₹588 cr) partially offset by other income normalisation",
            },
            {
                metric: "ARR Revenue (₹Cr) — *the* high-quality recurring stream",
                current: "**Q4: 605 / FY26: 2,289**",
                qoq: "Stable sequentially with mild seasonality",
                yoy: "**Q4 +20.4% YoY / FY26 +34.5% YoY** = **75% of total revenue** (vs ~67% FY25); 5-yr ARR Revenue CAGR 32%; **the dominant high-quality compounder**",
            },
            {
                metric: "PAT (₹Cr) — Profit After Tax",
                current: "**FY26: 1,225 cr** (highest ever)",
                qoq: "Q4 estimated ~₹310-320 cr (calc from FY26 minus 9M run-rate)",
                yoy: "**FY26: +20.7% YoY** (vs FY25 ₹1,015 cr); Tangible ROE 19.3% sustained = high-quality earnings",
            },
            {
                metric: "EPS (TTM) — ₹29.93",
                current: "**₹29.93** (Groww MCP TTM)",
                qoq: "Stable",
                yoy: "FY26 EPS ~₹30 (PAT ₹1,225 cr / 405-410 cr shares); P/E 34.69x = at slight discount to industry 36.16x; **5-yr median P/E ~36-42x**",
            },
            {
                metric: "Cost-to-Income Ratio (%) — operating leverage indicator",
                current: "**FY26: 49.9%** (Q4 ~50% vs Q3 ~49.5%)",
                qoq: "Marginal uptick due to BNK + ET Money consolidation",
                yoy: "**Mgmt target: 46-48% over next 2-3 years** = 200-400 bps improvement = significant operating leverage; **Core wealth + AM C/I already at 44-45%** (best-in-class) — drag from new businesses (361 Capital, ET Money) in investment phase",
            },
        ],
        businessQualityMetrics: [
            {
                metric: "ARR AUM (₹Cr) + ARR Retention (bps) — *the* WAM quality metric",
                current: "**ARR AUM ₹3,11,940 cr (+26% YoY); Retention 78 bps blended** (Wealth 76 / AM 83)",
                qoq: "Sustained growth; retention stable",
                yoy: "**Wealth ARR ₹2,16,000 cr; AM ARR ₹95,000 cr**; 5-yr ARR AUM CAGR 26% (vs total AUM CAGR 22%) = ARR growing *faster* than total = quality mix improving",
            },
            {
                metric: "ARR Net Flows + Organic Flows (% of opening AUM)",
                current: "**FY26 ARR Net Flows ₹55,875 cr; Organic ₹35,199 cr = 14% of opening AUM**",
                qoq: "Strong cadence; Q4 contributed materially",
                yoy: "**Organic flows +36% YoY**; Wealth ₹25,900 cr + AM ₹9,299 cr; **mgmt guide: 12-15% organic flow as % of opening AUM (sustainable rate)** = best-in-class for the industry",
            },
            {
                metric: "Tangible ROE (%) — *the* right return metric for asset-light WAM",
                current: "**FY26: 19.3%**",
                qoq: "Stable",
                yoy: "**Sustained at ~19% range** (vs reported ROE 12.37% which is depressed by goodwill from BNK / ET Money / UBS acquisitions); **mgmt: \"expect Tangible ROE to improve as capital deployed in lending + alternates begins to reflect in earnings\"** = upside to 21-23% over FY27-28",
            },
        ],
        footnotes: [
            "**ARR Revenue at 75% of total = the high-quality moat metric** — TBR (Transaction & Broking Revenues) historically lumpy/transactional; ARR Revenue (management fees + recurring advisory + carry) is the predictable annuity-like stream. ARR Revenue CAGR 32% over 5 years = the franchise has structurally improved its quality mix every year. **Mgmt explicit: ARR will continue to grow faster than TBR**; ARR retention stable at 78 bps blended (Wealth 76 / AM 83) = sustainable economics.",
            "**TBR run-rate revised UP from ₹125-140 cr/qtr to ₹175-180 cr/qtr post-BNK (361 Capital) consolidation** — Q4 TBR ₹230 cr (+53.7% YoY) reflects full-quarter consolidation of 361 Capital institutional equities (formerly BNK). 361 Capital provides 500+ mid-cap research coverage, 300+ institutional clients, 90%+ cash segment share. **Strategic synergy already showing**: UHNI brokerage uplifting; access to 600+ corporate treasuries opening distribution + lending channels.",
            "**Tax demand ₹336 cr received (Apr 2026) — mgmt confident no material impact** — \"adequate factual and legal grounds to substantiate our position; will pursue appeals.\" Standard tax dispute pattern; doesn't change underlying franchise economics. **Provision likely already taken or will be taken in Q1 FY27 as a contingent liability; cash impact several quarters out**.",
            "**Groww MCP reads: P/E 34.69x; Industry P/E 36.16x; Mkt Cap ₹42,190 cr; TTM EPS ₹29.93; ROE 12.37%; ROA 4.47%; P/B 4.29x; D/E 1.62x; Dividend Yield 0.40%**. Reported ROE 12.37% is *deflated* by goodwill from BNK + ET Money + UBS deals (Tangible ROE 19.3% is the right read). P/E 34.69x is *fair to slightly cheap* vs industry 36.16x; **5-yr median P/E 36-42x** = current valuation modestly below trend = reasonable entry zone, not deep value.",
            "**Karan Bhagat (CMD) explicit FY27+ guidance**: (a) Wealth AUM growth 20-25% per year (12-15% organic flows + 10-12% MTM in normal year), (b) RM addition 25-30% per year *front-loaded* (industry consolidation = great hiring opportunity), (c) Wealth profit growth 15-25%, (d) Cost-to-Income compressing to 46-48% over 2-3 years from 49.9%, (e) **\"Hopefully double market share over the next 3-5 years\"** = 1.4x-1.5x current franchise scale by FY29-30.",
        ],
        patternDetected:
            "ARR Revenue +34.5% YoY + Organic flows +36% (14% of opening AUM) + Tangible ROE 19.3% sustained + 361 Capital integration delivering synergies + UBS cross-referrals showing early traction + HNI Reserve program (60 RMs, ₹4,000 cr AUM, 650+ clients at 90 bps yield) maturing + Mgmt explicit FY27+ 20-25% AUM growth + 15-25% PAT growth + cost-to-income 46-48% target — **pattern reading: \"a high-quality WAM franchise with multiple optionality levers (UBS, 361 Capital, ET Money, Reserve, lending, alternates), entering a 3-5 year compounding phase with mgmt aiming to double market share\"**. The investment outcome is *not* dependent on a single binary catalyst — it's about steady earnings compounding at 22-26% PAT CAGR through FY28-29.",
        interpretation:
            "**Q4 FY26 is a textbook \"all engines firing\" quarter for India's largest pure-play WAM franchise**. **ARR AUM ₹3,11,940 cr (+26% YoY) growing faster than total AUM ₹6.7 lakh cr (+16% YoY) = quality mix improving every year**; **ARR Revenue ₹2,289 cr (+34.5% YoY) at 75% of total = annuity dominance entrenched**; **Organic net flows ₹35,199 cr (+36% YoY = 14% of opening AUM) = best-in-class flow generation in Indian WAM**; **Tangible ROE 19.3% sustained**; PAT ₹1,225 cr (+20.7% YoY) record. **Mgmt explicit FY27+ guidance** — 20-25% AUM growth + 15-25% PAT growth + Cost-to-Income compression to 46-48% — implies **FY27 PAT ₹1,500-1,550 cr (+22-26%) → EPS ₹36-37; FY28 PAT ₹1,850-1,950 cr → EPS ₹44-46; FY29 PAT ₹2,300-2,500 cr → EPS ₹56-60**. **Multiple optionality layers**: UBS collaboration (offshore distribution for alternates), 361 Capital (institutional equities + IB platform with 4 of 12 senior IB hires done), ET Money (heading to breakeven near-term), HNI Reserve (60 RMs / ₹4,000 cr / 90 bps premium yield = feeder for UHNI), Lending (zero NPA history; growing on AUM compounding), Carry crystallisation (₹150-325 cr/year on ₹30-35K cr carryable AUM). **Trading at P/E 34.69x vs industry 36.16x = fair to slightly cheap; 5-yr median P/E ~36-42x**. **The setup**: bear case ₹880-950 (FY27 disappointment + tax overhang + market correction = -10-16%), base case ₹1,250-1,400 (FY27 PAT ₹1,500 cr × 32-35x = +20-34%), bull case ₹1,650-1,850 (FY28 visibility + UBS synergies + IB platform mature + ET Money positive = +58-77%). **Verdict: HIGH-QUALITY HOLD WITH ACCUMULATE BIAS**; current ₹1,046 is fair-value zone; aggressive accumulate below ₹950.",
        whatWentRight: [
            "**ARR Revenue ₹2,289 cr (+34.5% YoY) growing 2x faster than ARR AUM (+26% YoY) = retention expanding + mix shifting toward higher-yield products** (alternates 83 bps vs blended 78 bps); **Organic net flows ₹35,199 cr (+36% YoY) = 14% of opening AUM** = best-in-class flow generation in Indian WAM; **Tangible ROE 19.3% sustained** despite consolidation drag from BNK + ET Money (still in investment phase). **Quality of earnings improved meaningfully** — recurring base now 75% of total revenue vs ~67% historical.",
            "**Multiple optionality layers maturing simultaneously**: (a) **361 Capital** delivering immediate synergies (UHNI brokerage uplift, 600+ corporate treasury access, 4 of 12 senior IB hires done = meaningful contribution in 12-18 months); (b) **UBS collaboration** showing early traction (cross-referrals on NRI/resident/global mandates; offshore distribution pathway for alternate strategies); (c) **HNI Reserve program** maturing (60 RMs, ₹4,000 cr AUM, 650+ clients at premium 90 bps yield); (d) **ET Money** heading to breakeven near-term; (e) **Lending arm** zero NPA history compounding. **Mgmt aiming to double market share over 3-5 years** = clear visibility for compounding.",
        ],
        whatWentWrong: [
            "**Tax demand ₹336 cr received Apr 2026** — mgmt confident no material impact (\"adequate factual and legal grounds; will pursue appeals\"), but creates near-term overhang and reputational noise; **even if appeal succeeds, 12-24 month resolution cycle**; meaningful but not thesis-breaking. **Reported ROE 12.37% optically depressed** (vs Tangible 19.3%) due to goodwill amortisation from BNK + ET Money + UBS deals; market may take 4-6 quarters to fully credit Tangible ROE = re-rating runway constrained until acquisitions mature.",
            "**Discretionary PMS lagging on AMC side** — mgmt acknowledges \"growth there has been slightly softer than what we would have wanted\"; pivoting strategy from \"benchmark-hugging\" to \"more active\" with new launch first week of June 2026. **Mutual Fund TER cuts (effective Apr 2026)** affect TBR run-rate by ~2-3% (small but real); BNK was operating at 5-6 bps retention so TER pressure modest. **War for talent (RM compensation)** — mgmt: \"will hire at 90th-110th percentile range; cannot exceed 110th\" = high but bounded OPEX inflation risk; if industry hiring escalates further, cost-to-income target of 46-48% slips.",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "1. UHNI Wealth Management — ~70-75% of value, the core franchise",
                yoyGrowth: "**Wealth ARR AUM ₹2,16,000 cr (+~28% YoY); Wealth net flows ₹25,900 cr FY26**",
                mix: "Largest segment by value; ARR retention 76 bps; Cost-to-Income 44-45% (best-in-class)",
                analysis:
                    "**The dominant franchise.** 18-year track record; brand synonymous with integrity + discretion + long-term thinking; UHNI client relationships across multiple generations. ~3,500 clients (estimate); avg AUM per client ~₹60+ cr. **Mgmt guide: AUM growth 20-25% per year = 12-15% organic flows + 10-12% MTM** (long-term portfolio compounding has been 15.4% over 16 years; new world order 10-14%). RM productivity is the central P&L lever — **front-loading hiring 25-30% per year** in FY27 due to industry consolidation creating great talent availability.",
                triggers:
                    "(a) RM hires 30+ in FY27 (vs 35-40 average FY26); (b) Productivity ramp on new RMs (12-month broker-code-change lag means revenue uplift in FY28); (c) Wealth AUM reaching ₹2,80,000-3,00,000 cr by FY28 (+30% over 2 years); (d) Cost-to-Income holding at 44-45% as new RMs become productive.",
            },
            {
                name: "2. Asset Management — Alternates + MFs + PMS, ~20% of value",
                yoyGrowth: "**AM ARR AUM ₹95,000 cr (+~22% YoY); AM net flows ₹9,299 cr FY26**",
                mix: "Higher-margin segment (retention 83 bps); Cost-to-Income 44-45%; Carry-yield optionality",
                analysis:
                    "**The alpha generator + carry optionality.** Alternates platform leadership (private equity, private credit, real assets, structured); 5,500-6,000 cr 2018-19 PE fund returned at 1.82x / 16% net IRR over 4-5 years. **Carryable AUM ₹30-35K cr (~70-75% of total alternates) generating 10 bps avg carry = ₹150-325 cr/year crystallisation** (lumpy but material). **Discretionary PMS lagging** (mgmt acknowledged); pivot launching June 2026. **SIFs (Specialised Investment Funds) regulatory addition** = directly plays to firm's strengths in alternates. **Mutual Fund** is the area mgmt explicitly wants to do better.",
                triggers:
                    "(a) Carry crystallisation: bad year ₹150-175 cr; good year ₹300-325 cr; (b) New PMS strategy (June 2026 launch) reviving discretionary AUM; (c) SIF launches leveraging alternates expertise; (d) UBS distribution pathway: alternate strategies accessing offshore capital = potentially $5-10B opportunity over 5 years.",
            },
            {
                name: "3. 361 Capital (formerly BNK Securities) — Institutional Equities + IB",
                yoyGrowth: "Q4 TBR ₹230 cr (+53.7% YoY) reflects full-quarter consolidation",
                mix: "Currently institutional brokerage dominant; IB platform being built",
                analysis:
                    "**Strategic acquisition (9-10 months back) creating multiple synergies.** 500+ mid-small cap research coverage; 300+ institutional clients; 90%+ cash segment share. **Synergies already visible**: (a) UHNI brokerage uplift, (b) access to 600+ corporate treasuries opening distribution + lending channels, (c) IB platform building with 4 of 12 senior hires done. **CMD: IB business meaningful contribution over 12-18 months**. The 10,000-family thesis: 360 ONE wants the same 10,000 promoter/professional families as wealth clients + lending clients + IB clients = full-stack relationship.",
                triggers:
                    "(a) IB platform 12 senior hires complete by Q2 FY27; (b) IB revenue contribution from FY28 (target ₹100-200 cr in 2-3 years); (c) Equity TBR ₹85-90 cr/year doubling to ₹170-200 cr over 3-5 years per mgmt explicit guide.",
            },
            {
                name: "4. Lending Arm — Lombard / Portfolio Loans, ~15-20% of capital deployed",
                yoyGrowth: "Loan book growing on AUM compounding (Lombard against client portfolios)",
                mix: "**Zero NPA in 10-year history** since 2016; conservative Lombard product against own wealth clients",
                analysis:
                    "**The under-appreciated lever.** Mgmt: \"stuck to discipline; haven't got carried away or tempted; portfolio lending to wealth management clients only.\" **Zero NPA / zero loss in 10-year history** = exceptional risk discipline. As wealth AUM compounds, Lombard book naturally grows. **D/E 1.62x consol mostly reflects this lending arm**; ROA 4.47% reflects blend of asset-light WAM (high) + capital-intensive lending (lower) — **CMD explicit: Tangible ROE will improve as lending capital begins to reflect in earnings**.",
                triggers:
                    "(a) Lombard book scaling with wealth AUM; (b) Spread expansion as cost of funds eases; (c) Selective expansion into structured credit / specialty lending without compromising risk discipline.",
            },
            {
                name: "5. ET Money (Digital Affluent) + UBS Strategic Collaboration — long-dated optionality",
                yoyGrowth: "ET Money: heading to breakeven near-term; UBS: early cross-referral traction",
                mix: "Currently small but strategically important",
                analysis:
                    "**ET Money**: digital platform for affluent segment (₹25 lakh - 2 cr); FY26 was \"strategic transformation year\"; mgmt: \"with different engines at play, expect business to head towards breakeven in near term\" — **breakeven within FY27 expected**. **UBS Collaboration**: cross-referrals across NRI / resident / global mandates showing positive early traction; **offshore distribution pathway for alternate strategies** = enables 360 ONE alternates to access UBS global client base — could be transformational over 3-5 years.",
                triggers:
                    "(a) ET Money breakeven Q3-Q4 FY27 (eliminates drag, becomes optionality); (b) UBS-360 ONE alternate fund offshore raise of $1-3B over FY28-29; (c) NRI/global wealth referral revenue beginning to show (FY28+).",
            },
        ],
        assessment: [
            "**Multi-engine architecture with structurally diversified revenue + acquisition track record + clear synergy realisation playbook**. The 6-engine model (UHNI Wealth + Asset Management + 361 Capital + Lending + ET Money + UBS) is genuinely diversified across both revenue streams (ARR + TBR + IB + lending NII + carry) and segments (UHNI + HNI + affluent + institutional). **Cross-business feeders are working**: 361 Capital → UHNI brokerage uplift; UBS → offshore distribution; HNI Reserve → UHNI feeder pipeline; Lending → wealth client retention. **The 10,000-family thesis** (same families across wealth + lending + IB) = high cross-sell economics.",
            "**Quality of growth is structurally improving every year** — ARR Revenue CAGR 32% (5-yr) vs Total Revenue CAGR ~25%; ARR AUM CAGR 26% vs Total AUM CAGR 22%; Tangible ROE 19.3% sustained despite multiple acquisitions in investment phase. **The franchise is scaling profitably**, not buying growth. **Cost-to-Income at 49.9% has *negative* drag from new businesses** (361 Capital, ET Money in build-out); core wealth + AM C/I 44-45% (best-in-class); **mgmt confident in 46-48% blended C/I over 2-3 years** = 200-400 bps operating leverage.",
            "**Segment quality verdict: BEST-IN-CLASS WAM FRANCHISE WITH MULTI-LAYER COMPOUNDING ENGINE + ASYMMETRIC OPTIONALITY** (UBS distribution, 361 IB ramp, ET Money breakeven, carry crystallisation). The business model is structurally less cyclical than pure brokerages or pure AMCs because of ARR dominance (75%) + diversified asset allocation (alternates + equity + fixed income + real assets) + UHNI client stickiness. **Multi-year compounder at 22-26% PAT CAGR through FY28-29 is the central case**.",
        ],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            {
                metric: "1. ARR AUM Growth Trajectory — *the* central WAM metric",
                current: "ARR AUM ₹3,11,940 cr (+26% YoY); 5-yr CAGR 26%",
                trend: "**Mgmt FY27 guide: 20-25% Wealth AUM growth (12-15% organic + 10-12% MTM)**; ARR AUM growing *faster* than total AUM",
                horizon: "FY27 ARR AUM ₹3,75,000-3,90,000 cr; FY28 ₹4,60,000-4,80,000 cr; FY29 ₹5,70,000-5,90,000 cr",
                remarks:
                    "**Net flow generation 14% of opening AUM is best-in-class** (industry typically 8-12%). FY27 organic flows estimated ₹40,000-45,000 cr + MTM ₹35,000-45,000 cr = total addition ₹75,000-90,000 cr. **Each 1% incremental ARR retention on ₹4 lakh cr ARR AUM = ₹400 cr revenue impact** = directly to bottom line at 50% margin = ~₹200 cr PAT. **Compounding lever 1**.",
            },
            {
                metric: "2. ARR Retention (bps) — yield discipline + product mix optimisation",
                current: "Blended 78 bps (Wealth 76 / AM 83)",
                trend: "Stable to mildly compressing on yield pressure; **mix shift toward alternates (83 bps) supportive**",
                horizon: "FY27 76-78 bps blended; FY28+ supported by alternates growth + carry crystallisation",
                remarks:
                    "**Mgmt: \"yields broadly in line; not too worried\"**. Product mix shift is the key: alternates (83 bps) growing faster than core wealth (76 bps) = blended yield supported. **Risk**: if MF expense ratio cuts deepen, blended yield compresses 2-3 bps over 2-3 years = ₹80-100 cr revenue drag = ~₹40-50 cr PAT impact. **Manageable** vs growth tailwind.",
            },
            {
                metric: "3. TBR (Transaction & Broking Revenue) — Run-rate Re-rated UP",
                current: "Q4 ₹230 cr (run-rate ₹175-180 cr/qtr post-361 Capital)",
                trend: "**Mgmt revised guide UP from ₹125-140 cr/qtr to ₹175-180 cr/qtr** = ₹40-55 cr quarterly uplift sustained",
                horizon: "FY27 TBR ₹700-720 cr; FY28 ₹780-820 cr (with IB platform ramping)",
                remarks:
                    "**The under-appreciated FY27 P&L lever.** TBR run-rate revision = ₹160-220 cr/year incremental revenue at high contribution margin. CMD: 361 Capital institutional equities + UHNI brokerage uplift + ability to play across asset classes (fixed income, equity rotation). **Equity-related income from UHNI clients alone: target doubling to tripling over 3-5 years from ₹85-90 cr base**.",
            },
            {
                metric: "4. Investment Banking Platform (361 Capital) — Long-dated catalyst",
                current: "4 of 12 senior IB hires done; nascent revenue",
                trend: "Building team in measured manner; meaningful contribution 12-18 months",
                horizon: "FY28 IB revenue ₹50-100 cr; FY29 ₹150-250 cr",
                remarks:
                    "**The 10,000-family monetisation lever.** Once IB platform fully manned, 360 ONE can monetise corporate journey (small business → IPO → block deals → M&A) for the same wealth + lending clients. **High-margin business** (typical IB margins 30-40%); ₹150 cr IB revenue = ₹45-60 cr PAT contribution. **Long-dated FY28-29 catalyst**.",
            },
            {
                metric: "5. UBS Collaboration + Offshore Alternate Distribution",
                current: "Cross-referrals showing early traction; offshore distribution pathway opening",
                trend: "**Mgmt: \"expect to convert to meaningful relationships over coming financial year\"**",
                horizon: "FY28-29: $1-3B offshore raise for alternate funds + meaningful NRI/global wealth referrals",
                remarks:
                    "**The asymmetric optionality lever.** UBS has $4+ trillion global wealth; 360 ONE alternates accessing even 0.1% = $4B = ₹33,000 cr AUM at 100 bps yield (alternates retention) = ₹330 cr revenue = ~₹150 cr PAT. **Long-dated but transformational if it crystallises**. Not in current valuation.",
            },
        ],
        demandSignals: [
            {
                signal: "Indian UHNI/HNI wealth pool growth",
                reading:
                    "**Indian UHNI population growing 12-15% per year** (Hurun India + Knight Frank); operating businesses doing well; capital markets monetisation (IPOs, block deals, PE exits) supportive. **Addressable wealth pool ~₹400 lakh cr** (UHNI + HNI); 360 ONE share <1% = vast headroom. **Industry tailwind structurally strong**.",
                verdict: "Robust",
            },
            {
                signal: "Alternates + private market demand",
                reading:
                    "**Alternates AUM industry growing 25-30% per year**; private credit, private equity, real assets all in demand; SIFs (Specialised Investment Funds) regulatory enablement. 360 ONE alternates ARR retention 83 bps = highest-margin segment. **Mgmt: \"alternates industry continues to grow in a very, very big way\"**.",
                verdict: "Robust",
            },
            {
                signal: "Capital markets monetisation activity",
                reading:
                    "FY26 saw record SIPs; sustained IPO/block deal/PE exit activity despite FII outflows of $15-20B. **TBR Q4 +53.7% YoY benefited from this**; FY27 monetisation activity expected to remain elevated (record pipeline of IPOs).",
                verdict: "Strong",
            },
            {
                signal: "Competitive intensity (WAM consolidation)",
                reading:
                    "Industry in **consolidation phase** — multiple smaller wealth managers seeking platforms; 360 ONE attracting 25-30 senior RMs/year. **CMD: \"industry in phase of consolidation; not scared to attract right set of people; building out 25-34-35 RMs front-loaded\"**. Competitive position strengthening.",
                verdict: "Strong",
            },
            {
                signal: "Regulatory environment",
                reading:
                    "**SEBI progressive over 4-5 years**: alternates rules, accredited investors, SIFs, co-investment guidelines, PMS regulations. **CMD: \"compliance-first organisation; recent changes allow us to play to our strengths\"**. Regulatory tailwind structurally supportive.",
                verdict: "Strong",
            },
            {
                signal: "Geographic expansion + new product traction",
                reading:
                    "**HNI Reserve program**: 60 RMs across 12 locations, ₹4,000 cr AUM, 650+ clients at 90 bps yield (premium to blended 78 bps); **ET Money** heading to breakeven; **UBS** offshore pathway opening. Multiple new engines in build-out simultaneously.",
                verdict: "Robust",
            },
        ],
        demandVerdict:
            "**Demand environment is GREEN across all six dimensions**: UHNI wealth pool + alternates demand + capital markets activity + competitive consolidation + regulatory tailwinds + new engines maturing. **The structural tailwind for top-tier WAM franchises in India is among the strongest of any sector** — the question is *which* franchise captures disproportionate share, not whether the pie grows. 360 ONE's brand + people + partnerships + platform + diversified architecture position it as **a clear share-of-mind leader for UHNI + HNI segments**. Mgmt aiming to **double market share over 3-5 years** = aggressive but credible given infrastructure built. The next 12-24 months see 4 simultaneous compounding levers maturing: 361 Capital IB ramp + UBS offshore distribution + ET Money breakeven + HNI Reserve productivity.",
        whatWentRight: [
            "**Six-engine architecture all delivering simultaneously**: ARR AUM +26% YoY (₹3,11,940 cr); Organic flows +36% YoY (14% of opening AUM = best-in-class); Tangible ROE 19.3% sustained; TBR run-rate re-rated UP from ₹125-140 cr to ₹175-180 cr/qtr; HNI Reserve maturing (₹4,000 cr at 90 bps); 361 Capital synergies showing; UBS cross-referrals starting. **The franchise is in compounding mode with multiple optionality layers**.",
            "**Mgmt explicit FY27+ guidance is unusually concrete and ambitious** — Wealth AUM +20-25%, RM additions +25-30% front-loaded, PAT +15-25%, Cost-to-Income to 46-48%, **\"hopefully double market share over 3-5 years\"**. CMD Karan Bhagat with 18-year track record + proven execution in multiple cycles + disciplined capital allocation (interim dividend ₹6/share). **High mgmt quality + clear visibility = central premise of the compounder thesis**.",
        ],
        whatWentWrong: [
            "**Tax demand ₹336 cr received Apr 2026** — though mgmt confident no material impact, creates 12-24 month appeal cycle overhang + legal cost drag + sentiment risk; even if appeal succeeds, contingent liability disclosure + uncertainty until resolution. **Reported ROE 12.37% optically depressed** vs Tangible 19.3% due to BNK + ET Money + UBS goodwill — **market may take 4-6 quarters to fully credit Tangible ROE** = re-rating runway constrained until acquisitions mature and goodwill amortisation rolls through.",
            "**Discretionary PMS franchise lagging** — mgmt acknowledged \"growth softer than wanted\"; pivot launching June 2026; if new strategy doesn't deliver in FY27, this segment becomes structural drag on AM growth target. **MF TER cuts (effective Apr 2026)** affect TBR ~2-3% (small but real); BNK retention 5-6 bps so impact bounded but trajectory unfavourable. **War for talent / RM compensation inflation** — if industry pushes RM compensation above 110th percentile, cost-to-income target slips and operating leverage thesis weakens.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            {
                metric: "FY27+ Wealth AUM Growth",
                current: "FY26 ARR AUM ₹3,11,940 cr (+26% YoY)",
                target:
                    "**20-25% per year** (12-15% organic flows + 10-12% MTM in normal year); **\"hopefully double market share over 3-5 years\"** = implied 1.4-1.5x current scale by FY29-30",
            },
            {
                metric: "FY27+ PAT Growth",
                current: "FY26 PAT ₹1,225 cr (+20.7% YoY); EPS ₹29.93",
                target:
                    "**Wealth segment PAT growth 15-25%** + AM segment + 361 Capital + Lending = **blended PAT CAGR 22-26% through FY28-29**; FY27 PAT ₹1,500-1,550 cr; FY28 ₹1,850-1,950 cr; FY29 ₹2,300-2,500 cr",
            },
            {
                metric: "Cost-to-Income Compression",
                current: "FY26: 49.9% (Q4: ~50%)",
                target:
                    "**46-48% over 2-3 years**; core wealth + AM C/I already 44-45%; **drag from 361 Capital + ET Money normalising as they mature**",
            },
            {
                metric: "RM Hiring + Capacity Build-out (FY27 front-loaded)",
                current: "FY26: 35-40 RMs avg (closing 64-65 in HNI program)",
                target:
                    "**25-30% RM additions in FY27** = +30-35 senior RMs front-loaded; rationale: industry consolidation + great talent availability; **revenue uplift 12-month lagged due to broker-code-change rules**",
            },
            {
                metric: "TBR Run-rate Sustainability (post-361 Capital)",
                current: "Q4 ₹230 cr; FY26 ₹777 cr",
                target:
                    "**₹175-180 cr/qtr (vs prior ₹125-140 cr) sustainable run-rate**; **target growing to ₹200+ cr/qtr** over 2-3 years as IB platform ramps + equity from UHNI clients doubles-triples",
            },
        ],
        commitmentNote:
            "**Mgmt credibility on guidance is among the highest in Indian financial services** — Karan Bhagat (CMD) has a 18-year track record (since 2008 founding); IIFL Wealth → demerger → 360 ONE WAM rebrand has delivered consistent 20-25% AUM CAGR + 20%+ ROE through multiple cycles. **The Q4 FY26 guidance is unusually concrete and front-loaded**: explicit numbers on AUM growth (20-25%), RM additions (25-30%), PAT growth (15-25%), Cost-to-Income (46-48%), TBR run-rate (₹175-180 cr/qtr → ₹200+). **Mgmt has *raised* guidance on TBR** post-361 Capital integration = positive surprise vs prior commitment. **The \"doubling market share over 3-5 years\" aspiration** is bold but credible given infrastructure (UBS partnership, 361 Capital, ET Money, HNI Reserve). **Watch FY27 quarterly cadence**: ARR Revenue +20% YoY + organic flows ₹35K-40K cr cumulative + Cost-to-Income trending 49% → 48% → 47% = on track. **Disciplined capital allocation**: interim dividend ₹6/share + retaining capacity for growth investment + lending capital deployment + strategic acquisitions = balanced returns + reinvestment philosophy.",
        growthDrivers: [
            {
                driver: "1. ARR Revenue Compounding (+22-26% per year through FY28-29)",
                impact:
                    "ARR AUM ₹3,11,940 cr × 78 bps × 22-26% growth = **+₹500-650 cr ARR Revenue per year** = +₹250-325 cr PAT contribution annually. **The single largest, most predictable lever**. Each ₹1,000 cr incremental ARR revenue at 50% PAT margin = ₹500 cr PAT = ~12 ₹EPS. *5-yr ARR Revenue CAGR has been 32%*; conservative FY27-29 estimate 22-26%.",
            },
            {
                driver: "2. TBR Run-rate Re-rating (₹125-140 cr/qtr → ₹175-180 cr/qtr → ₹200+/qtr)",
                impact:
                    "Quarterly uplift ₹40-55 cr × 4 qtrs = **+₹160-220 cr annual revenue** at high contribution margin (~70-80%) = ~₹100-150 cr PAT addition. **Sustained tailwind**; further upside from IB platform ramp (FY28+) + equity from UHNI clients doubling-tripling.",
            },
            {
                driver: "3. Cost-to-Income Compression (49.9% → 46-48% over 2-3 years)",
                impact:
                    "200-400 bps C/I improvement on FY28E revenue ₹4,500 cr = **₹90-180 cr cost savings = ~₹65-130 cr PAT addition**. Driven by: (a) 361 Capital + ET Money maturing into productive scale, (b) HNI Reserve RM productivity ramp, (c) operational leverage from AUM compounding without proportional headcount additions, (d) AI/tech-driven productivity in research + reporting + monitoring.",
            },
            {
                driver: "4. Carry Crystallisation Optionality (₹150-325 cr/year on ₹30-35K cr carryable AUM)",
                impact:
                    "**Bad year ~₹150-175 cr; good year ₹300-325 cr**; carryable AUM compounding with alternates platform growth. **Lumpy but materially additive to ARR Revenue** — adds 8-15 ₹EPS in good vintage years. *Optional/episodic but structurally accretive*.",
            },
            {
                driver: "5. UBS Offshore Distribution + IB Platform + ET Money Breakeven (FY28+ catalysts)",
                impact:
                    "UBS offshore raise of $1-3B for alternates over FY28-29 = ₹15K-25K cr AUM at 100 bps = ₹150-250 cr revenue = ₹75-125 cr PAT. IB platform contribution from FY28 = ₹50-150 cr revenue = ₹15-50 cr PAT. ET Money breakeven removes drag (~₹50-80 cr annual loss eliminated). **Combined: ₹140-255 cr PAT optionality from FY28-29**. *Long-dated but transformational*.",
            },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            {
                title: "ARR Revenue +34.5% YoY at 75% of total revenue — quality moat entrenched",
                body:
                    "ARR Revenue ₹2,289 cr (+34.5% YoY) = **75% of total revenue (vs ~67% historical) = annuity dominance entrenched**. ARR AUM ₹3,11,940 cr (+26% YoY) growing faster than total AUM (+16%) = quality mix improving every year. ARR retention 78 bps stable; product mix shift toward alternates (83 bps) supportive. **5-yr ARR Revenue CAGR 32%**; **FY27 organic flows guidance 12-15% of opening AUM** = ~₹40,000-45,000 cr incremental ARR AUM = +₹300-340 cr ARR Revenue compounding lever locked in.",
            },
            {
                title: "Mgmt explicit FY27+ guidance: 20-25% AUM growth + 15-25% PAT + double market share over 3-5 years",
                body:
                    "CMD Karan Bhagat (18-year track record): \"Wealth AUM growth 20-25% per year (12-15% organic + 10-12% MTM); RM additions 25-30% front-loaded; PAT growth 15-25%; Cost-to-Income compressing to 46-48% over 2-3 years; **hopefully double market share over 3-5 years**.\" **Combined with proven execution** (delivered 22% 5-yr AUM CAGR, 32% ARR Revenue CAGR, sustained Tangible ROE 19%+) = **high-confidence multi-year compounding setup at 22-26% PAT CAGR**.",
            },
            {
                title: "TBR run-rate UPGRADED from ₹125-140 cr/qtr to ₹175-180 cr/qtr post-361 Capital integration",
                body:
                    "Q4 TBR ₹230 cr (+53.7% YoY); 361 Capital (formerly BNK) full-quarter consolidation = sustainable run-rate ₹175-180 cr/qtr = ₹160-220 cr annual incremental revenue. **Synergies already crystallising**: UHNI brokerage uplift, 600+ corporate treasury access, IB platform ramp (4 of 12 senior hires done). **Mgmt: equity from UHNI clients alone targeting double-triple over 3-5 years from ₹85-90 cr base**. **Multiple expansion vectors layered onto established annuity**.",
            },
            {
                title: "Multiple optionality layers maturing simultaneously — UBS, 361 Capital IB, ET Money breakeven, HNI Reserve",
                body:
                    "(a) **UBS Collaboration**: cross-referrals on NRI/resident/global mandates traction; offshore distribution pathway for alternate strategies = potentially $1-3B offshore raise opportunity; (b) **361 Capital IB platform**: 4 of 12 senior hires done, meaningful contribution 12-18 months; (c) **ET Money** heading to breakeven near-term (eliminates drag); (d) **HNI Reserve program**: 60 RMs / ₹4,000 cr AUM / 650+ clients at premium 90 bps yield — **maturing feeder for UHNI**. **4 simultaneous compounding levers** beyond core wealth + AM business.",
            },
            {
                title: "Tangible ROE 19.3% sustained + Cost-to-Income discipline + Lending zero-NPA history = quality of earnings",
                body:
                    "**Tangible ROE 19.3%** (vs reported ROE 12.37% which is depressed by goodwill from BNK/ET Money/UBS deals = optical only); **mgmt: \"expect Tangible ROE to improve as capital deployed in lending + alternates begins to reflect in earnings\"** = upside to 21-23% over FY27-28. **Lending arm zero NPA / zero loss in 10-year history** since 2016 = exceptional risk discipline. **Disciplined capital allocation** = interim dividend ₹6/share + reinvestment in growth + strategic acquisitions = balanced approach.",
            },
        ],
        bearish: [
            {
                title: "Tax demand ₹336 cr received Apr 2026 — appeal cycle 12-24 months overhang",
                body:
                    "Tax authorities issued aggregate demand ₹336 cr (announced same day as Q4 results); **mgmt: \"have duly discharged all tax liabilities; adequate factual + legal grounds; will pursue appeals; no material impact on financials\"**. Even if appeal ultimately succeeds, **12-24 month resolution overhang** + contingent liability disclosure + legal cost drag + sentiment noise. **Risk**: provisioning hit if Q1-Q2 FY27 conservative accounting requires partial provision = ~₹80-150 cr one-time PAT drag (~6-12% impact). **Manageable but real near-term overhang**.",
            },
            {
                title: "Reported ROE 12.37% optically depressed vs Tangible 19.3% — re-rating runway constrained",
                body:
                    "**Reported ROE 12.37% sits below WAM peer avg 14-18%** due to goodwill from BNK + ET Money + UBS acquisitions; market may take 4-6 quarters to fully credit Tangible ROE 19.3%. **P/E 34.69x vs industry 36.16x already at slight premium on reported metrics**; meaningful re-rating requires either: (a) goodwill amortisation rolling through, (b) acquired businesses reaching full productivity, (c) market explicitly accepting Tangible framework. **Re-rating is a 4-6 quarter slow build, not a near-term catalyst**.",
            },
            {
                title: "Discretionary PMS franchise lagging + MF TER cuts = AM growth targets at risk",
                body:
                    "Mgmt acknowledged: \"growth on discretionary PMS softer than wanted\"; pivot launching June 2026 from \"benchmark-hugging\" to \"more active\" strategy. **If new PMS strategy doesn't deliver in FY27, AM AUM growth slips toward 15-18% (vs 25%+ target)**. **MF TER cuts (effective Apr 2026)** affect TBR ~2-3% (small but real); BNK retention 5-6 bps. **Mutual Fund segment is mgmt's explicit \"area to do better\"** — if MF AUM doesn't accelerate, AM segment growth contribution muted.",
            },
            {
                title: "War for talent / RM compensation inflation + Cost-to-Income target slippage risk",
                body:
                    "Mgmt CMD: \"will hire at 90th-110th percentile range; cannot exceed 110th\"; CFO: **\"with many companies coming into segment + competition + attrition, OPEX pressure real\"**. If industry pushes RM compensation above 110th percentile in FY27, **Cost-to-Income target of 46-48% slips toward 50-52%** = ~150-200 bps below mgmt guide = ₹70-100 cr PAT impact (~5-8% drag). **Operating leverage thesis is dependent on disciplined OPEX management**.",
            },
            {
                title: "Equity market volatility + FII outflows ($15-20B FY26) — TBR + carry highly correlated",
                body:
                    "TBR (Transaction & Broking Revenue) and carry crystallisation are both highly correlated to equity market performance. **FY26 saw $15-20B FII outflows; if continues into FY27 with deeper market correction**, TBR run-rate slips back toward ₹140-160 cr/qtr (vs upgraded ₹175-180); carry crystallisation slips to ₹150-175 cr (vs good-year ₹300-325 cr). **Combined risk: ~₹150-200 cr revenue impact = ~₹100-130 cr PAT drag = 8-11% PAT headwind in adverse market scenario**. *Cyclical risk, not structural*.",
            },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text:
                "**FY26 = 'all-engines-firing' year for the largest pure-play UHNI wealth franchise in India** — ARR Revenue ₹2,289 cr (+34.5% YoY) at 75% of total; ARR AUM ₹3,11,940 cr (+26% YoY); Organic flows ₹35,199 cr (+36% YoY = 14% of opening AUM = best-in-class); PAT ₹1,225 cr (+20.7% YoY); Tangible ROE 19.3% sustained. **The franchise is in entrenched compounding mode**.",
            impact: "strengthens",
        },
        {
            text:
                "**Mgmt explicit FY27+ guidance: 20-25% AUM growth + 15-25% PAT growth + Cost-to-Income compression to 46-48% + double market share over 3-5 years** = **22-26% PAT CAGR through FY28-29 = FY27 PAT ₹1,500-1,550 cr → FY28 ₹1,850-1,950 cr → FY29 ₹2,300-2,500 cr**. CMD Karan Bhagat (18-year track record) credibility at the highest tier in Indian financial services.",
            impact: "strengthens",
        },
        {
            text:
                "**Multiple optionality layers maturing simultaneously**: (a) **361 Capital** synergies + IB platform (4 of 12 senior hires) = meaningful contribution 12-18 months; (b) **UBS** offshore distribution pathway for alternates = potentially $1-3B raise; (c) **ET Money** heading to breakeven; (d) **HNI Reserve** maturing (60 RMs, ₹4,000 cr at 90 bps premium yield); (e) **Lending** zero-NPA scaling on AUM compounding; (f) **Carry crystallisation** ₹150-325 cr/year on ₹30-35K cr carryable AUM. **5 independent compounding levers beyond core wealth + AM**.",
            impact: "strengthens",
        },
        {
            text:
                "**Near-term overhangs: Tax demand ₹336 cr (Apr 2026) + reported ROE 12.37% optically depressed vs Tangible 19.3% + discretionary PMS lagging + MF TER cuts (~2-3% TBR impact)**. None thesis-breaking; tax demand most material (12-24 month appeal cycle + sentiment noise). **Re-rating runway constrained until acquisitions fully credit through Tangible ROE framework** = 4-6 quarter slow build, not near-term catalyst.",
            impact: "neutral",
            note: "manageable near-term overhangs",
        },
        {
            text:
                "**Stock at ₹1,046.80 (live, +0.76%) — P/E 34.69x vs industry 36.16x = fair-to-slightly-cheap; 5-yr median P/E 36-42x**. **Asymmetric setup**: bear case ₹880-950 (FY27 disappointment + tax overhang + market correction = -10-16%), base case ₹1,250-1,400 (FY27 PAT ₹1,500 cr × 32-35x = +20-34%), bull case ₹1,650-1,850 (FY28 visibility + UBS synergies + IB ramp + ET Money positive = +58-77%). **Verdict: HIGH-QUALITY HOLD WITH ACCUMULATE BIAS** — current ₹1,046 is at fair-value zone; aggressive accumulate below ₹950.",
            impact: "strengthens",
        },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        /* Q1 — Is the core investment thesis intact? */
        thesisIntact: {
            verdict:
                "Yes — strengthened materially by Q4 FY26's ARR Revenue +34.5%, multiple optionality maturation, and explicit mgmt FY27+ guidance",
            reasons: [
                "**The core compounder thesis is decisively strengthening** — ARR Revenue ₹2,289 cr (+34.5% YoY) at 75% of total = the high-quality recurring stream is dominant and accelerating; Organic flows 14% of opening AUM = best-in-class for Indian WAM; Tangible ROE 19.3% sustained; PAT ₹1,225 cr (+20.7% YoY) record. **5-yr ARR Revenue CAGR 32% delivered through multiple market cycles** = the franchise has structural moats (brand, people, partnerships, platform, regulatory, AI optionality) that compound.",
                "**Mgmt explicit FY27+ guidance is unusually concrete and ambitious** — Wealth AUM 20-25% / RM additions 25-30% (front-loaded) / PAT growth 15-25% / Cost-to-Income 46-48% / **\"double market share over 3-5 years\"**. CMD Karan Bhagat's 18-year track record + proven execution + disciplined capital allocation (interim dividend + reinvestment + strategic M&A) = **mgmt credibility at the highest tier**. **TBR run-rate UPGRADED** from ₹125-140 cr/qtr to ₹175-180 cr/qtr post-361 Capital = positive guidance revision = confidence signal.",
                "**Six-engine architecture genuinely diversifies revenue + risk**: UHNI Wealth (75% of value, ARR retention 76 bps) + Asset Management (alternates 83 bps + MFs + PMS) + 361 Capital (institutional equities + nascent IB) + Lending (Lombard, zero NPA, 10-yr history) + ET Money (digital affluent, near breakeven) + UBS Collaboration (offshore distribution + cross-referrals). **Cross-business feeders working**: UHNI brokerage uplifting via 361 Capital; Wealth → Lending; HNI Reserve → UHNI; UBS → Alternates offshore.",
                "**Multiple optionality layers maturing in FY27-28**: (a) IB platform contribution from FY28 (₹50-150 cr revenue), (b) UBS offshore raise potential ($1-3B over 2-3 years), (c) ET Money breakeven (eliminates drag), (d) HNI Reserve productivity ramp (12-24 months), (e) Carry crystallisation episodically (₹150-325 cr/year). **None of these are required for base case, all are upside optionality** = asymmetric setup.",
                "**The thesis weakens if**: (a) FY27 Wealth AUM growth <15% (mgmt low-end), (b) Cost-to-Income rises above 51% (RM compensation runaway), (c) Tax demand ₹336 cr partial provision >₹150 cr in FY27, (d) Tangible ROE compresses below 17%, (e) Organic flow rate drops below 10% of opening AUM. **The thesis strengthens if**: (a) FY27 Wealth AUM growth 23-25% (mgmt high-end), (b) UBS offshore raise crystallises in FY28, (c) IB platform contribution > ₹100 cr in FY28, (d) Cost-to-Income tracks toward 47% by FY28, (e) Tangible ROE expands to 21-23% on lending + alternates capital deployment.",
            ],
        },

        /* Q2 — Re-rate triggers + probability */
        rerateTriggers: [
            {
                trigger: "FY27 H1 print: ARR Revenue +20-25% YoY + Organic flows tracking 14%+ of opening AUM",
                probability: "High",
                rationale:
                    "Q4 FY26 already at +20.4% ARR YoY; HNI Reserve maturing; 361 Capital synergies running; UBS cross-referrals starting. **Most likely positive surprise vector**: organic flow rate (14% FY26) sustained into FY27 H1 = mgmt 12-15% guide met = stock supports upper-end of fair value zone (₹1,150-1,250) = +10-20% re-rating.",
            },
            {
                trigger: "TBR run-rate sustaining ₹175-180 cr/qtr through FY27 (361 Capital contribution durable)",
                probability: "High",
                rationale:
                    "Mgmt explicit upgrade; 361 Capital integration complete; UHNI brokerage uplift visible. **If FY27 H1 TBR tracks ₹350-380 cr (vs prior trajectory ₹260-290 cr), market re-prices toward ₹1,250-1,400 zone (+20-34%)**. Critical: any single-quarter dip below ₹150 cr would weaken thesis.",
            },
            {
                trigger: "Tax demand resolution / partial favourable order (12-18 months out)",
                probability: "Medium",
                rationale:
                    "Mgmt confident on legal grounds; appeal cycle typical 12-24 months. **Favourable resolution removes overhang = +5-10% sentiment-driven re-rating**; partial unfavourable = small negative impact already largely priced.",
            },
            {
                trigger: "UBS offshore alternate fund raise of $500M-1B announced (FY27-28)",
                probability: "Low-Medium",
                rationale:
                    "Mgmt: \"expect to convert to meaningful relationships over coming financial year.\" **Asymmetric optionality**: even ₹4,000-8,000 cr offshore raise = +₹40-80 cr ARR Revenue + signals platform validation = potentially +15-25% re-rating to ₹1,300-1,500 zone.",
            },
            {
                trigger: "ET Money breakeven + IB platform meaningful revenue (FY28 trigger)",
                probability: "Medium",
                rationale:
                    "ET Money near-term breakeven per mgmt; IB platform 4 of 12 senior hires done with 12-18 months to revenue. **Combined: removes ₹50-80 cr loss + adds ₹50-150 cr IB revenue = +₹70-120 cr PAT optionality**. Long-dated FY28 catalyst, not near-term.",
            },
        ],

        /* Q3 — Upside if guidance fully met */
        upsideIfGuidanceMet: {
            currentPrice: "₹1,046.80 (live NSE LTP via Groww MCP, 29 Apr 2026 18:58 IST)",
            targetPrice: "₹1,400 – ₹1,650",
            upsidePct: "+34% to +58%",
            horizon: "18-24 months (FY28 EPS-multiple basis with mgmt 22-26% PAT CAGR delivered)",
            assumptions:
                "**Base case (FY27-28 mgmt guidance partially-to-fully delivered):** FY27 Total Revenue ₹3,720-3,800 cr (+18-21%); ARR Revenue ₹2,800-2,880 cr (+22-26%); TBR ₹700-720 cr; PAT ₹1,500-1,550 cr (+22-26%); EPS ₹37-38. **FY28 Total Revenue ₹4,400-4,500 cr; ARR Revenue ₹3,400-3,500 cr; TBR ₹780-820 cr; PAT ₹1,850-1,950 cr (+23-26%); EPS ₹45-47**. **5-yr median P/E for 360 ONE 36-42x; industry 36.16x; current 34.69x**. Apply 32x to FY28 EPS ₹45 = ₹1,440; 35x = ₹1,575; 38x = ₹1,710. **Bull case** (UBS offshore raise + IB ramp + ET Money positive + Tangible ROE expands to 21-23%): apply 38-40x to FY28 EPS ₹47 = ₹1,786-1,880. **Conservative target ₹1,400** (FY28 EPS ₹45 × 31x); Aggressive target ₹1,650** (FY28 EPS ₹47 × 35x). **Range ₹1,400-1,650 (+34-58%) over 18-24 months**.",
            workings:
                "**FY27 Build:** ARR AUM ₹3,75,000 cr; ARR Revenue ₹2,850 cr at 76 bps blended retention; TBR ₹720 cr at ₹180 cr/qtr; Carry ₹175 cr; Other income ₹250 cr; Total Revenue ₹3,995 cr; OPEX ₹1,955 cr (49% C/I); PPOP ₹2,040 cr; Tax 27% = ₹551 cr; **PAT ₹1,489 cr → EPS ₹36.50** (rounded conservatively ₹1,500-1,550). **FY28 Build:** ARR AUM ₹4,60,000 cr; ARR Revenue ₹3,450 cr; TBR ₹800 cr; Carry ₹250 cr (good vintage); Total Revenue ₹4,650 cr; OPEX ₹2,200 cr (47% C/I); PPOP ₹2,450 cr; PAT ₹1,790 cr → **EPS ₹43.65** (rounded ₹45). **FY29 Build:** PAT ₹2,300-2,500 cr → EPS ₹56-60. **Multiples**: Apply 32x to FY28 EPS ₹45 = ₹1,440; 35x = ₹1,575; 38x = ₹1,710 (5-yr median range). **Bull case**: ROE expanding to 21-23% on lending + UBS = supports 38-40x = ₹1,800-1,880. **18-24 month range ₹1,400-1,650 (+34-58%)** weights base case + partial bull.",
        },

        /* Q4 — Best value entry zone */
        valuationEntryZone: {
            bestValueRange: "₹880 – ₹950",
            fairValue: "₹1,000 – ₹1,150",
            currentZone: "Fair — at lower-mid end of fair value (₹1,046.80)",
            rationale:
                "**Trailing P/E:** 34.69x vs industry 36.16x = **slight discount to industry; 5-yr median P/E 36-42x = current ~10-15% below trend**. **P/B:** 4.29x reflects asset-light WAM business; ROE 12.37% (reported) / 19.3% (Tangible). **P/B/Tangible-ROE:** 0.22x = reasonable for high-quality WAM (vs HDFC AMC 0.20-0.25x, Nippon AMC 0.18-0.22x). **Forward P/E on FY27E EPS ₹37**: 28.3x; **on FY28E EPS ₹45**: 23.3x — *cheap if guidance delivered*. **52-week range** (estimated) ₹850-1,150; current ₹1,046 is upper-mid range. **Best value entry ₹880-950** = 24-26x FY27E P/E + tax overhang absorbed + market correction cushion. **Fair value ₹1,000-1,150** = 27-31x FY27E P/E = current zone. **Above ₹1,200** starts pricing FY28 22-26% PAT CAGR explicitly; **above ₹1,500** prices UBS offshore + IB ramp + Tangible ROE 21%+ visibility. **Per *valuation_analysis.md* logic**: deploy moderately at current ₹1,000-1,100 (fair value) with conviction earned from Q4 FY26 print (mgmt guidance delivered + 361 Capital + UBS traction); **aggressive accumulate below ₹950** if any of (a) tax overhang spike, (b) market correction 8-10%, (c) Q1 FY27 disappointment provides better entry. **Asymmetric setup risks: -10-16% downside to ₹880 (FY27 disappointment + tax provision + market correction) vs +34-58% upside to ₹1,400-1,650 (FY28 guidance delivered) = roughly 3:1 to 4:1 reward-to-risk** — *meaningfully attractive* for a quality compounder at fair value.",
        },

        summary:
            "**360 ONE WAM Q4 FY26 is a textbook 'all-engines-firing' quarter for India's largest pure-play UHNI WAM franchise** — ARR Revenue ₹2,289 cr (+34.5% YoY) at 75% of total; ARR AUM ₹3,11,940 cr (+26% YoY); Organic flows ₹35,199 cr (+36% YoY = 14% of opening AUM = best-in-class); Tangible ROE 19.3% sustained; PAT ₹1,225 cr (+20.7% YoY) record. **The franchise is in entrenched compounding mode** with 5-yr ARR Revenue CAGR 32%. **Mgmt explicit FY27+ guidance** — 20-25% AUM growth + 15-25% PAT growth + Cost-to-Income 46-48% + **\"double market share over 3-5 years\"** — implies **22-26% PAT CAGR through FY28-29** (FY27 ₹1,500-1,550 cr → FY28 ₹1,850-1,950 cr → FY29 ₹2,300-2,500 cr). **TBR run-rate UPGRADED** from ₹125-140 cr/qtr to ₹175-180 cr/qtr post-361 Capital integration = positive guidance revision. **Multiple optionality layers maturing simultaneously**: 361 Capital IB platform (4 of 12 senior hires), UBS offshore distribution ($1-3B raise potential), ET Money breakeven, HNI Reserve productivity, Lending zero-NPA scaling, Carry crystallisation. **Near-term overhangs**: Tax demand ₹336 cr (12-24 month appeal), reported ROE optically depressed vs Tangible, discretionary PMS lagging — none thesis-breaking. **Trading at P/E 34.69x vs industry 36.16x = fair-to-slightly-cheap; 5-yr median P/E 36-42x = ~10-15% below trend**. **Asymmetric setup**: bear case ₹880-950 (-10-16%), base case ₹1,400-1,500 (+34-43%), bull case ₹1,650-1,850 (+58-77%) over 18-24 months. **Roughly 3:1 to 4:1 reward-to-risk** at current ₹1,046. **Verdict: HIGH-QUALITY HOLD WITH ACCUMULATE BIAS** — current ₹1,046 sits at lower-mid end of fair value zone; deploy moderately now with conviction earned from Q4 print; aggressive accumulate below ₹950 if market dislocation provides entry. **This is fundamentally different from turnaround stories analysed earlier (RBL, IDFC FB, Five-Star, Piramal Pharma)** — 360 ONE is a *high-quality compounder at fair value* where earnings compounding (not re-rating) is the primary return driver over 24-36 months.",
    },
});
