/* ============================================================
   Eternal Ltd (formerly Zomato Ltd) — Q4 FY26
   Concall: 28 April 2026
   File path: data/ETERNAL/Q4FY26.js
   Live spot @ authoring: ₹256.52 NSE / ₹256.45 BSE (29 Apr 2026)
   Source: Groww MCP get_ltp + fetch_stocks_fundamental_data
   ============================================================ */

window.registerReport("ETERNAL", "Q4FY26", {
    meta: {
        companyName: "Eternal Ltd (formerly Zomato Ltd)",
        ticker: "ETERNAL",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "29 April 2026",
        concallDate: "28 April 2026",
        resultsBasis:
            "Consolidated. Group = Zomato (food delivery) + Blinkit (quick commerce, *now inventory-led from Q1 FY26* — distorts headline revenue) + District (going-out: events, movies, sports) + Hyperpure (B2B restaurant supply). **Track Net Order Value (NOV) and Adjusted EBITDA, not headline revenue/PAT** — Blinkit's inventory-led model shift inflates revenue 196% YoY headline vs 64% on a like-for-like basis.",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. Eternal is a high-growth platform business valued primarily on future Adjusted EBITDA delivery (FY29 $1bn target) and NOV multiples — *not* trailing P/E (1,057x TTM is mathematically valid but economically meaningless during the Blinkit investment phase).",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            {
                metric: "Net Order Value (NOV) — group, ₹Cr",
                current: "Q4: 26,879 (Blinkit 14,386 + FD 9,757 + District 2,736); Annualised run-rate ~$13bn",
                qoq: "+8% sequentially (Blinkit +8.2%, District +5.8%)",
                yoy: "**Blinkit +95.4%, FD +18.8%, District +46.5%** — group NOV ~+50% YoY; **$10bn → $20bn target in <2 years** (vs 18 years for first $10bn)",
            },
            {
                metric: "Reported Revenue (₹Cr) — consolidated",
                current: "Q4: 17,292 (FY26: 54,364)",
                qoq: "+6% (Q3 FY26 ₹16,315 cr)",
                yoy: "**+196% headline** (Q4 FY25 ₹5,833 cr); but **like-for-like only +64%** — accounting shift to inventory-led Blinkit inflates the print",
            },
            {
                metric: "Adjusted EBITDA (₹Cr) — consolidated",
                current: "Q4: **429** (margin 1.6% of NOV)",
                qoq: "Sequentially up",
                yoy: "**+160% YoY** (Q4 FY25 ₹165 cr); Q4 FY26 marks **Blinkit's first-ever EBITDA-positive quarter** (+₹37 cr vs -₹178 cr YoY)",
            },
            {
                metric: "Reported PAT (₹Cr) — consolidated",
                current: "Q4: **174** (FY26: 366; FY25: 527)",
                qoq: "**+70.6% QoQ** (Q3 FY26 ₹102 cr); beat estimates of ₹121 cr",
                yoy: "**Q4 +346% YoY** (vs ₹39 cr); FY26 PAT *down* -30% YoY due to Blinkit investment phase that inflected only in Q4",
            },
            {
                metric: "EPS (₹) — TTM (~957 cr shares)",
                current: "Q4 ~0.18; FY26 ~0.38; TTM (Groww) ₹0.24",
                qoq: "Higher",
                yoy: "TTM EPS depressed by FY26 H1 Blinkit losses; Q4 annualised EPS ~₹0.73 — closer to forward earnings power",
            },
        ],
        businessQualityMetrics: [
            {
                metric: "Blinkit Adj EBITDA Margin (% of NOV)",
                current: "**+0.3%** (₹37 cr) — first-ever positive print",
                qoq: "Up from 0.0% (Q3 FY26 just breakeven at ₹4 cr)",
                yoy: "**Inflection: -3.6% → +0.3%** YoY (Q4 FY25 was -₹178 cr / -2.4% margin); guided to **3-3.5% in 3-4 years**",
            },
            {
                metric: "Food Delivery Adj EBITDA Margin (% of NOV)",
                current: "**5.5%** (₹532 cr)",
                qoq: "Slight improvement",
                yoy: "**+30 bps** YoY (Q4 FY25 was 5.2%); 3rd consecutive quarter of NOV growth acceleration with stable margins",
            },
            {
                metric: "Cash + Investments (₹Cr)",
                current: "**17,972** (~₹18.8/share = ~7.3% of market cap)",
                qoq: "+₹152 cr (working capital release post inventory-model transition)",
                yoy: "Fortress balance sheet — no need to raise capital for Blinkit / District scale-up; debt-to-equity 0.11x",
            },
        ],
        footnotes: [
            "Blinkit's Q1 FY26 shift to first-party (inventory-led) model means *reported revenue* now includes the full GMV value, not just commission — making YoY revenue growth comparisons meaningless until Q1 FY27. **NOV is the only valid YoY growth metric** for Blinkit comparison purposes.",
            "FY26 full-year PAT ₹366 cr vs FY25 ₹527 cr (-30% YoY) is a *result of the Blinkit investment*, not a business deterioration — Q4's ₹174 cr PAT alone is higher than the entire H1 FY26 (~₹65 cr combined). The exit run-rate is what matters.",
            "Hyperpure's Q4 reported revenue -46.8% YoY is *almost entirely accounting* (intercompany eliminations after Blinkit went inventory-led); underlying restaurant supply revenue +37% YoY (CFO disclosure).",
        ],
        patternDetected:
            "Group NOV ~+50% YoY (real growth) + Q4 PAT +346% YoY (accelerating) + Blinkit first ever EBITDA positive — **pattern reading: \"Compounding-into-profitability inflection\"**. Q4 FY26 is the first quarter where every segment has either positive or rapidly improving unit economics. The investment phase that depressed FY26 H1 has paid off in the same fiscal year.",
        interpretation:
            "**Q4 FY26 is the most important quarter Eternal has printed since the IPO.** Blinkit — until now an EBITDA cash-burn — turned positive (+₹37 cr) on a 95% YoY NOV growth base; Zomato food delivery accelerated for the third quarter running at 5.5% margins; group Adj EBITDA +160% YoY. The fact that consolidated PAT *missed* full-year FY25's level (₹366 vs ₹527 cr) is the *cost of building* Blinkit to scale, and the Q4 run-rate (₹174 cr × 4 = ₹696 cr) suggests FY27 will exceed FY25 comfortably. **Mgmt's $1bn Adjusted EBITDA target by FY29** (~₹8,300 cr — implies a ~5x lift from Q4 annualised ₹1,716 cr) is the central valuation anchor; this print directly supports the trajectory.",
        whatWentRight: [
            "**Blinkit turned EBITDA positive (+₹37 cr) on +95.4% NOV growth** — a textbook compounding-into-profitability moment; Q4 FY25 was -₹178 cr loss. Combined with mgmt's confident **60% NOV CAGR guidance** for next 3 years and **3-3.5% margin target** in 3-4 years, Blinkit alone could deliver ~₹3,500-4,500 cr Adj EBITDA by FY29 (vs sub-100 cr today).",
            "**Food Delivery (Zomato) acceleration is the underrated positive** — NOV +18.8% YoY (vs ~15-17% in earlier quarters), 3rd consecutive quarter of growth acceleration, with margins *holding* at 5.5% despite lowered Min Order Value (₹99 vs ₹199). Demonstrates pricing power + addressable market expansion to price-sensitive customers; mgmt expects 20%+ NOV CAGR durably.",
        ],
        whatWentWrong: [
            "**FY26 PAT ₹366 cr is *down* 30% from FY25 ₹527 cr** — the headline annual decline (despite Q4's strength) means full-year reporters and passive screens will paint Eternal as \"declining earnings\" stock; this masks the actual Q4 inflection and could weigh on the stock until FY27 H1 prints.",
            "**District (going-out segment) still loss-making at -₹81 cr Adj EBITDA** despite 46.5% NOV growth; mgmt admits it is \"inherently lumpy\" (depends on IPL, movie releases, events). Combined with management *not* providing specific store-addition guidance beyond March 2027 (3,000 stores) and *not* providing short-term Adj EBITDA guidance, there is execution opacity exactly when investors most want clarity.",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "1. Blinkit (Quick Commerce) — the growth engine",
                yoyGrowth: "NOV ₹14,386 cr (+95.4% YoY); LFL revenue +126% YoY",
                mix: "53% of group NOV; ~70% of incremental NOV growth",
                analysis:
                    "**Profitability inflection quarter**: Adj EBITDA +₹37 cr (vs -₹178 cr YoY) at 0.3% NOV margin. 27.2 mn average MTUs, 273.9 mn orders/Q, 409,000 monthly active delivery partners. 2,243 dark stores at quarter-end (+216 net new in Q4). On track to hit **3,000 stores by March 2027** (FY27-end). Mgmt confidence 60% NOV CAGR for next 3 years driven by assortment expansion + geographic rollout + demand densification.",
                triggers:
                    "3,000 dark stores by Mar 2027 (will be ~$25-30bn NOV run-rate); **3-3.5% EBITDA margin** within 3-4 years (~₹3,500-4,500 cr Adj EBITDA standalone potential); category expansion beyond grocery (electronics, fashion, pharmacy beginning to scale); ad revenue from brands (already meaningful and high-margin).",
            },
            {
                name: "2. Food Delivery (Zomato) — the cash cow",
                yoyGrowth: "NOV ₹9,757 cr (+18.8% YoY); 3rd consecutive quarter of acceleration",
                mix: "36% of group NOV; ~₹2,128 cr/year Adj EBITDA run-rate (Q4 ₹532 cr × 4)",
                analysis:
                    "Adjusted EBITDA ₹532 cr at **5.5% NOV margin** (vs 5.2% YoY). Q4 FY26 was the 3rd straight quarter of NOV growth acceleration. Strategic shift from Q2 FY26: **lowered Min Order Value for Gold members to ₹99 (from ₹199)**, targeted price-sensitive segments, curated <₹250 meals — driving addressable market expansion. Mgmt expectation: **20%+ NOV CAGR durable** with stable margins.",
                triggers:
                    "Continued addressable-market expansion in Tier-2/3 cities at lower AOV; subscription / Gold base growth; ads / restaurant SaaS monetization; AI-driven demand prediction reducing per-order costs further; structural FCF generator that funds Blinkit + District scale-up internally.",
            },
            {
                name: "3. District + Hyperpure — option pool",
                yoyGrowth: "District NOV ₹2,736 cr (+46.5% YoY); Hyperpure rev ₹978 cr (-47% reported, +37% LFL underlying)",
                mix: "11% of group NOV combined; both small but optionality-rich",
                analysis:
                    "**District** (going-out: events, movies, dining, gaming reservations, retail discovery) — 46.5% NOV growth but still EBITDA loss ₹-81 cr (improving from -₹121 cr Q3); FY26 first full year as standalone app, mgmt calls it baseline year. **Hyperpure** (B2B restaurant supply) — Q4 turned EBITDA positive ₹+5 cr (vs -₹22 cr YoY); reported revenue distorted by intercompany accounting; underlying restaurant supply +37% YoY.",
                triggers:
                    "District: IPL/event ramp-up, retail discovery monetization, movie ticketing scale; Hyperpure: restaurant supply consolidation play, EBITDA flipping positive every quarter from here. Combined optionality may not move the needle in FY27 but could become material by FY29-30.",
            },
        ],
        assessment: [
            "**Three-tier portfolio with one star, one cash cow, two options:** Blinkit drives growth (now profitable), Zomato funds the empire (5.5% margin), District + Hyperpure are at-cost optionality. Cleanest segment portfolio in Indian internet.",
            "**Blinkit is becoming the dominant business segment economically** — at 60% NOV CAGR for 3 years and 3% margin terminal, Blinkit alone could exit FY29 at ~₹3,500-4,500 cr Adj EBITDA, exceeding Zomato food delivery by a wide margin.",
            "**Segment quality verdict: BEST-IN-CLASS PLATFORM PORTFOLIO.** Eternal is the only Indian listed name with (a) #1 share in food delivery + (b) #1 share in quick commerce + (c) growing third leg in going-out. Compounding-into-profitability inflection is now visible in Q4 numbers, not just narrative.",
        ],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            {
                metric: "1. Blinkit NOV CAGR target",
                current: "FY26 Q4 run-rate ₹14,386 cr × 4 = ~₹57,544 cr/year",
                trend: "**60%+ NOV CAGR** for next 3 years — explicit mgmt guidance",
                horizon: "FY29 NOV ~₹2.3-2.5 lakh cr (~$28-30bn standalone)",
                remarks:
                    "60% CAGR from ₹57,544 cr × 1.6³ ≈ ₹2.36 lakh cr by FY29; at 3% Adj EBITDA margin = ~₹7,000 cr Blinkit Adj EBITDA contribution; *single-handedly* would deliver the $1bn group target.",
            },
            {
                metric: "2. Blinkit Dark Store count",
                current: "2,243 (end-Mar 2026); +216 net new in Q4",
                trend: "**3,000 by March 2027** (mgmt explicit guidance); pace of ~190/quarter",
                horizon: "FY27 H2 catalysts",
                remarks:
                    "Each new store ~₹6-7 cr annual NOV at maturity; 757 incremental stores × ₹6 cr = ~₹4,500 cr incremental NOV from store expansion alone in FY27. Geographic densification (Tier-2 cities) is the next growth vector.",
            },
            {
                metric: "3. Food Delivery NOV growth durability",
                current: "Q4 ₹9,757 cr (+18.8% YoY)",
                trend: "**20%+ NOV CAGR durable** target; 3 quarters of acceleration",
                horizon: "FY27-28",
                remarks:
                    "Lowered MOV (₹99) + curated affordable meals + Tier-2/3 expansion — addressable market expansion thesis. At 20% growth + stable 5.5% margin: Q4 FY29 Adj EBITDA run-rate ~₹920 cr/quarter = ~₹3,700 cr/year.",
            },
            {
                metric: "4. Group Adj EBITDA — $1 bn target by FY29",
                current: "Q4 FY26 ₹429 cr × 4 = ~₹1,716 cr annualised",
                trend: "**₹8,300 cr (~$1bn) by FY29** — explicit mgmt target",
                horizon: "3 years",
                remarks:
                    "Implies ~5x growth in 3 years (~70% CAGR). Decomposition: Blinkit ₹3,500-4,500 cr + Food Delivery ₹3,000-3,700 cr + Hyperpure ₹200 cr + District (-₹100 cr) = ₹6,600-8,300 cr. **Achievable but stretched** — bull case need everything to compound.",
            },
            {
                metric: "5. NOV Doubling — $10bn → $20bn target",
                current: "FY26 group NOV ~$10bn run-rate",
                trend: "**$20bn in <2 years** — Deepinder Goyal shareholder letter",
                horizon: "FY28",
                remarks:
                    "First $10bn took 18 years; doubling thesis shows mgmt confidence in S-curve dynamics + share gain in Indian consumer internet. Implies group NOV ~75-85% CAGR for 2 years. Aggressive but achievable given Blinkit alone could add $15-18bn over 2 years.",
            },
        ],
        demandSignals: [
            {
                signal: "Quick commerce industry growth",
                reading:
                    "Blinkit NOV +95% YoY signals the Indian QC market is still in early-S-curve phase; Zepto + Instamart + BBNow all reporting similar 70-100% growth — Blinkit holding/growing share of an exploding pie.",
                verdict: "Robust",
            },
            {
                signal: "Customer engagement metrics",
                reading:
                    "MTU 27.2 mn (Blinkit alone), orders 273.9 mn/Q. **CFO admission: orders-per-customer slightly declining** + contribution per order slightly down (seasonal + AOV mix). Engagement pattern bears watching.",
                verdict: "Adequate (mild concern)",
            },
            {
                signal: "Food delivery growth re-acceleration",
                reading:
                    "3 consecutive quarters of NOV growth acceleration (+18.8% Q4 vs ~15-17% earlier); MOV reduction strategy expanding addressable market; mgmt 20%+ CAGR durable target.",
                verdict: "Strong",
            },
            {
                signal: "Competitive intensity",
                reading:
                    "Quick commerce: Zepto (private, well-funded), Instamart (Swiggy public), BBNow (Tata) — all in rapid scale-up. Food delivery: Swiggy duopoly continues. Margin discipline matters more than ever.",
                verdict: "Intense (but manageable)",
            },
            {
                signal: "Geographic expansion / TAM",
                reading:
                    "Blinkit Tier-2 cities scaling; 3,000 stores by Mar 2027 = ~250 cities; food delivery Tier-2/3 push via lower MOV. Mgmt sees long runway. Penetration still <5% of urban grocery TAM.",
                verdict: "Positive",
            },
            {
                signal: "Supply chain / unit economics",
                reading:
                    "Falling delivery cost / order via AI route optimization; supply chain automation; ad revenue (high-margin) growing as % of mix. Operating leverage real.",
                verdict: "Strong",
            },
            {
                signal: "Macro / policy / LPG / other",
                reading:
                    "Mgmt explicitly addressed: \"LPG crisis had zero impact\". No regulatory overhangs. No GST changes affecting platform commission. Clean macro context.",
                verdict: "Neutral-Positive",
            },
        ],
        demandVerdict:
            "**Demand environment is GREEN across all major segments.** Quick commerce industry is in early-S-curve hypergrowth, food delivery has re-accelerated at expanded TAM, going-out (District) is structurally growing on India consumer discretionary spend. Only orange flag: orders-per-customer slightly declining + contribution-per-order dipped (mgmt acknowledged in concall). These are early signals to monitor — not red flags.",
        whatWentRight: [
            "Blinkit's **60% NOV CAGR for 3 years + 3-3.5% margin in 3-4 years** is the cleanest forward guidance any Indian internet name has provided; combined with food delivery's **20%+ NOV CAGR durable target**, the math to **$1 bn EBITDA by FY29** is tractable. Pipeline visibility = highest in Indian internet ecosystem.",
            "Cash position ₹17,972 cr (no need for capital raise) + Q4 inflection across every segment + 17 mn sq ft of physical infrastructure built — **execution moat is real**, mgmt language (Deepinder Goyal: \"Our MOAT is physical\") backed by the 1 mn delivery partners + 400k restaurants + 100k supply chain workers.",
        ],
        whatWentWrong: [
            "**Slight drop in orders-per-customer + contribution-per-order** (Blinkit; mgmt acknowledged in Q&A) — first signs of mature-market slowdown amid intensifying competition (Zepto/Instamart/BBNow). Watch FY27 H1 prints carefully.",
            "**No specific guidance** on store additions beyond March 2027 (3,000 target); no short-term Adj EBITDA quarterly guidance. Mgmt opacity creates execution-risk discount that prevents the stock from re-rating sharply on Q4 inflection.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            {
                metric: "Group Adj EBITDA — $1 billion by FY29",
                current: "Q4 FY26 ₹429 cr × 4 = ~₹1,716 cr annualised",
                target:
                    "**~₹8,300 cr (~$1 bn) by FY29** — Deepinder Goyal shareholder letter; ~5x growth in 3 years",
            },
            {
                metric: "Blinkit NOV — 60% CAGR target",
                current: "FY26 Q4 run-rate ~₹57,500 cr/year",
                target:
                    "**60%+ NOV CAGR for next 3 years** → ~₹2.3-2.5 lakh cr by FY29",
            },
            {
                metric: "Blinkit Adj EBITDA Margin",
                current: "0.3% (Q4 FY26 first positive print)",
                target:
                    "**3-3.5% in 3-4 years** — explicit CFO Akshant Goyal guidance",
            },
            {
                metric: "Blinkit Dark Stores",
                current: "2,243 (end-Mar 2026)",
                target:
                    "**3,000 by March 2027** — explicit Albinder Dhindsa guidance; ~190/quarter pace",
            },
            {
                metric: "Food Delivery NOV growth — durable 20%+",
                current: "Q4 +18.8% (3rd quarter accelerating)",
                target:
                    "**20%+ NOV CAGR durable** with stable 5-6% margins",
            },
        ],
        commitmentNote:
            "Mgmt has been **operationally credible** historically — Blinkit EBITDA inflection (FY24 commit, delivered Q4 FY26 ahead of mid-2026 expectation), $10bn group NOV target hit on time, food delivery margin stability through MOV cut. **Five years of guidance discipline.** The single area of opacity is short-term quarterly guidance (no FY27 Q1 numbers given, no specific store-addition pace beyond Mar 2027). Mgmt strategy: under-promise on quarter-level, deliver on multi-year targets.",
        growthDrivers: [
            {
                driver: "1. Blinkit dark store roll-out (757 net new in FY27)",
                impact:
                    "Each new store ~₹6-7 cr annual NOV at maturity = ~₹4,500-5,500 cr incremental NOV from store expansion alone in FY27. Compounding effect: stores added in earlier quarters mature in later quarters.",
            },
            {
                driver: "2. Blinkit category expansion (electronics, fashion, pharma)",
                impact:
                    "Currently grocery-led; expansion into electronics, fashion, pharma, beauty doubles the addressable basket per delivery without proportional dark store investment. Higher AOV = better unit economics.",
            },
            {
                driver: "3. Blinkit ad revenue (high-margin)",
                impact:
                    "Brands advertising on Blinkit — already \"meaningful\" per CEO Albinder Dhindsa. Brand ad revenue is ~80%+ gross margin. Each 1% of NOV in ad revenue = ~₹2,300 cr annual (FY29 base) at near-pure-profit.",
            },
            {
                driver: "4. Food Delivery TAM expansion via lower MOV (₹99)",
                impact:
                    "MOV reduction Q2 FY26 already showing in Q4 acceleration; expanding to Tier-2/3 cities + price-sensitive segment doubles addressable user base over 3 years. Subscription growth (Gold) layered on top.",
            },
            {
                driver: "5. AI-driven cost efficiency across platforms",
                impact:
                    "Mgmt actively using AI in demand prediction, route optimization, supply chain, fraud detection, customer experience, catalogue quality. Each 1% delivery cost reduction = ~₹500 cr/year operating profit at FY29 scale. Compounding margin lever.",
            },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            {
                title: "Blinkit's first ever EBITDA-positive quarter on +95% NOV growth",
                body:
                    "Adj EBITDA +₹37 cr (vs -₹178 cr YoY) at 0.3% NOV margin. NOV +95.4% YoY at ₹14,386 cr. Mgmt confident on **3-3.5% margin in 3-4 years** + **60% NOV CAGR** for next 3 years. Math: Blinkit alone could deliver ~₹3,500-4,500 cr Adj EBITDA by FY29.",
            },
            {
                title: "Food Delivery 3rd consecutive quarter of NOV acceleration at stable margins",
                body:
                    "NOV +18.8% YoY (vs ~15-17% earlier quarters); margin held at 5.5% despite lowered MOV (₹99 from ₹199). Demonstrates pricing power + addressable market expansion to price-sensitive customers; mgmt 20%+ CAGR durable target.",
            },
            {
                title: "$1 bn Adj EBITDA by FY29 + $20bn NOV target in <2 years",
                body:
                    "Two of the most aggressive multi-year targets any Indian listed internet company has provided — ~5x EBITDA + 2x NOV in 3 years. Mgmt has track record of delivering on multi-year targets (Blinkit EBITDA inflection delivered Q4 FY26 vs mid-2026 expectation).",
            },
            {
                title: "Fortress balance sheet — ₹17,972 cr cash + 0.11x D/E",
                body:
                    "Cash ~₹18.8/share = ~7.3% of market cap. No need for capital raise to fund Blinkit/District scale-up. Debt-to-equity 0.11x. Mgmt evaluating buyback (mentioned in Q&A) given valuation perceived attractive.",
            },
            {
                title: "Hyperpure flipped EBITDA positive (+₹5 cr) — final loss-making segment cleaned up",
                body:
                    "B2B restaurant supply +37% LFL revenue growth, +₹5 cr Adj EBITDA (vs -₹22 cr YoY). Q4 FY26 marks the first quarter where every Eternal segment is positive or rapidly improving. District is the only remaining loss-maker (and improving QoQ).",
            },
        ],
        bearish: [
            {
                title: "Orders-per-customer slight decline + contribution-per-order dipped",
                body:
                    "CFO Akshant Goyal acknowledged in Q&A — orders/customer trending slightly down + contribution/order softer due to seasonal factors + AOV changes. First signs of maturation amid Zepto/Instamart/BBNow competitive intensity. Watch FY27 H1 carefully.",
            },
            {
                title: "FY26 full-year PAT down 30% YoY — passive screens / annual reporters will see decline",
                body:
                    "FY26 PAT ₹366 cr vs FY25 ₹527 cr. Despite Q4's massive Q4 inflection (+346%), the full-year decline will frame Eternal in passive ETFs / annual screens as \"declining earnings\". Stock psychology matters; this overhang likely persists till Q1 FY27 print.",
            },
            {
                title: "No specific short-term guidance — mgmt opacity",
                body:
                    "Mgmt did *not* provide FY27 Q1/H1 guidance, *not* provide store-addition pace beyond Mar 2027, *not* provide quarterly Adj EBITDA target. Discipline historically; but creates execution-risk discount in valuation.",
            },
            {
                title: "Quick commerce competitive intensity — Zepto, Instamart, BBNow scaling fast",
                body:
                    "Zepto private well-funded, Instamart accelerating, BBNow (Tata) entering with deep pockets. Albinder Dhindsa: \"competition is present across all markets\". Margin discipline matters more than ever; any pricing war risks Blinkit's 3% margin path.",
            },
            {
                title: "District still loss-making (-₹81 cr) + mgmt admits \"inherently lumpy\"",
                body:
                    "Going-out NOV +46.5% YoY but losses continued (improving from -₹121 cr Q3). FY26 first \"baseline year\". Mgmt admits dependence on IPL/movie/event seasonality. Path to profitability less clear than Blinkit.",
            },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text:
                "**Q4 FY26 is the most important quarter Eternal has printed since IPO** — Blinkit first ever EBITDA positive (+₹37 cr) on +95% NOV growth, food delivery accelerating for 3rd quarter at stable 5.5% margins, every segment now positive or rapidly improving, group Adj EBITDA +160% YoY. The compounding-into-profitability inflection is *visible in numbers, not just narrative*.",
            impact: "strengthens",
        },
        {
            text:
                "**Mgmt $1 bn Adj EBITDA by FY29 target requires ~5x growth in 3 years** (~70% CAGR). Cleanest forward visibility: Blinkit 60% NOV CAGR + 3-3.5% margin = ~₹3,500-4,500 cr; food delivery 20%+ CAGR at 5.5% margin = ~₹3,000-3,700 cr; Hyperpure ~₹200 cr; District ~breakeven. Math is tractable but stretched.",
            impact: "strengthens",
        },
        {
            text:
                "**Trailing P/E 1,057x is mathematically valid but economically meaningless** — TTM EPS ₹0.24 reflects Blinkit investment phase that ended Q4. Forward FY29 EPS at $1bn EBITDA target ≈ ₹6.50-7.00 → forward P/E at FY29 ≈ 36-40x = reasonable for high-growth platform. Stock is valued on **Adj EBITDA delivery + NOV multiples**, not trailing P/E.",
            impact: "neutral",
            note: "valuation on forward earnings",
        },
        {
            text:
                "**Competitive intensity is the only meaningful structural risk** — Zepto / Instamart / BBNow all in hypergrowth; Q4 saw early signs of maturation (orders-per-customer slightly down, contribution-per-order softer). If competitive pressure forces pricing war, Blinkit's 3% margin path could compress to 1.5-2%, halving the FY29 EBITDA contribution.",
            impact: "weakens",
        },
        {
            text:
                "**Stock at ₹256.52 (live) — middle of 52-week range ₹212.60-368.45.** Cash ₹17,972 cr (~₹18.8/share = 7.3% of market cap). Asymmetric: bear case (~₹165-180) vs base case (₹260-300) vs bull case (₹400-460) over 24 months. Eternal currently trades closer to base than bull — *FY27 quarterly prints will determine the path*.",
            impact: "neutral",
            note: "asymmetric setup pending execution",
        },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        /* Q1 — Is the core investment thesis intact? */
        thesisIntact: {
            verdict: "Yes — Q4 inflection materially strengthens it",
            reasons: [
                "**The core thesis (Blinkit compounds into profitability + Zomato funds the empire) just got Q4 FY26 numerical proof** — Blinkit first ever EBITDA positive (+₹37 cr) on +95% NOV growth at 0.3% margin trajectory toward 3-3.5% in 3-4 years; food delivery 3rd consecutive acceleration at stable 5.5% margins. Every assumption baked into the bull case is materializing.",
                "**Mgmt commit: $1 bn Adj EBITDA by FY29 + $20 bn NOV in <2 years** — most aggressive multi-year guidance any Indian internet name has provided. Track record (Blinkit EBITDA inflection delivered ahead of mid-2026 expectation; $10bn NOV hit on time) supports credibility.",
                "**Fortress balance sheet (₹17,972 cr cash, 0.11x D/E)** insulates the thesis from capital-cycle risk; no need for capital raise to fund 757 incremental dark stores or District scale-up.",
                "**Eternal is the only Indian listed name with a 3-engine consumer internet platform** — #1 share in food delivery + #1 in quick commerce + growing District; physical-execution moat (17 mn sq ft warehousing, 1 mn delivery partners, 400k restaurants); AI applied across the stack.",
                "**The thesis weakens *only* if (a) Blinkit unit economics break under competitive pressure (Zepto/Instamart pricing war), (b) food delivery growth reverts to <15%, or (c) mgmt fails to translate Q4 inflection into FY27 H1 quarterly accelerations. Watch FY27 Q1 print closely** — that's the decisive validation point.",
            ],
        },

        /* Q2 — Re-rate triggers + probability */
        rerateTriggers: [
            {
                trigger: "FY27 Q1 print: Blinkit Adj EBITDA stays positive + grows + food delivery margin stable",
                probability: "Medium-High",
                rationale:
                    "Q4 FY26 was the inflection; FY27 Q1 will confirm whether it's structural (sustaining 0.5-1% Blinkit margin) or seasonal. Mgmt confident; competition real. Most important single data point in next 3 months.",
            },
            {
                trigger: "Blinkit 3,000-store milestone delivery by Mar 2027",
                probability: "High",
                rationale:
                    "Mgmt explicit commit; pace already at ~190/quarter; 757 incremental stores need ~190/quarter run-rate maintained. High execution conviction given track record. Each milestone build = quarterly catalyst.",
            },
            {
                trigger: "Buyback announcement (CFO mentioned considering)",
                probability: "Medium",
                rationale:
                    "Cash ₹17,972 cr; mgmt views current valuation as attractive; tax framework now favourable. Buyback at ₹250-280 range would be highly accretive (~₹0.5/share EPS lift per ₹500 cr deployed). Watch H1 FY27 board meetings.",
            },
            {
                trigger: "Blinkit quarterly Adj EBITDA margin breaks 1.0% — visible structural lever working",
                probability: "Medium",
                rationale:
                    "Path: 0.3% Q4 FY26 → 0.5-0.7% Q4 FY27 → 1.0% Q4 FY28 (conservative). If happens earlier (Q2-Q3 FY27), strong re-rate trigger. Driven by ad revenue scaling + supply chain automation + density gains.",
            },
            {
                trigger: "Food Delivery NOV growth crosses 22-25% sustainably",
                probability: "Low-Medium",
                rationale:
                    "Mgmt target 20%+ \"durable\"; current Q4 +18.8%. Crossing 22-25% would signal MOV strategy + Tier-2 expansion working faster than expected. Unlikely in FY27 but possible by FY28.",
            },
        ],

        /* Q3 — Upside if guidance fully met */
        upsideIfGuidanceMet: {
            currentPrice: "₹256.52 (live NSE LTP via Groww MCP, 29 Apr 2026 14:40 IST)",
            targetPrice: "₹400 – ₹460",
            upsidePct: "+56% to +79%",
            horizon: "24-30 months (FY29 EBITDA basis)",
            assumptions:
                "Bull case (mgmt $1bn Adj EBITDA by FY29 delivered): Adj EBITDA ₹8,300 cr × ~30-35x EV/EBITDA (high-growth platform multiple) = EV ₹2,49,000-2,90,500 cr + cash ₹18,000 cr = market cap ₹2,67,000-3,08,500 cr → ₹279-322/share. **More aggressive (35-40x EV/EBITDA on $1.2 bn EBITDA scenario):** EV ₹3,50,000-4,00,000 cr → ₹385-440/share. **Stretch (Blinkit hits 3% margin earlier + ad revenue scales faster, $1.4 bn EBITDA, 40x):** ₹460/share. **Range: ₹400-460** = +56-79% from ₹256.52.",
            workings:
                "**FY29 Build (mgmt central case):** Group NOV ~₹3.5 lakh cr (Blinkit ₹2.3 lakh cr + FD ₹1 lakh cr + District ₹0.2 lakh cr); Adj EBITDA: Blinkit ₹4,000 cr (3% margin) + FD ₹3,500 cr (5.5%) + Hyperpure ₹200 cr + District ~breakeven = **₹7,700 cr**. With ad revenue upside ₹500-1,000 cr: **₹8,200-8,700 cr** = $1bn met. **Multiples:** EV/EBITDA range 30-40x for high-growth Indian internet platforms (Swiggy, Zepto-comparable, MakeMyTrip historicals); apply 32x = EV ₹2,62,400 cr + cash ₹20,000 cr (FCF accretion) = mkt cap ₹2,82,400 cr → ₹294/share base. **Bull (35x + ad revenue acceleration, $1.2bn EBITDA):** ₹400. **Super bull (40x + Blinkit margin upside, $1.4bn EBITDA):** ₹460. Discount 1 year (24-mo horizon) at 12% = base ₹262, bull ₹356, super bull ₹409. **Probability-weighted target ₹400-460** assumes execution close to mgmt guidance.",
        },

        /* Q4 — Best value entry zone */
        valuationEntryZone: {
            bestValueRange: "₹212 – ₹250",
            fairValue: "₹260 – ₹300",
            currentZone: "Fair — at lower edge of fair zone (₹256.52)",
            rationale:
                "**Trailing P/E:** ₹256.52 / TTM EPS ₹0.24 = 1,057x — *meaningless during Blinkit investment phase*; do not use. **Forward P/E (FY29 implied EPS ~₹7-8 at $1bn EBITDA):** ~32-37x — reasonable for high-growth platform. **EV/Sales:** 5.75x (vs Swiggy 7-9x, US peers 4-6x). **EV/EBITDA TTM:** 105.71x — high but pre-inflection; FY29 implied 30-35x. **52-week range:** ₹212.60-368.45; current at the **30th percentile**. **Best entry zone: ₹212-250** (52-week low region + cushion). Fair value ₹260-300 (current zone). Above ₹300-330 = pricing in clean execution; above ₹400 = fully pricing $1bn target with ad upside. **Per *valuation_analysis.md* logic** — accumulate aggressively in ₹212-235 (52-week low region), partial deploy at current ₹250-265, conviction deploy if Q1 FY27 confirms Blinkit margin progression. **Asymmetric setup (capped -25% downside to ₹192-210, +56-79% upside to ₹400-460) favours patient accumulation.**",
        },

        summary:
            "**Q4 FY26 is the most important quarter Eternal has printed since IPO** — Blinkit first ever EBITDA positive (+₹37 cr) on +95% NOV growth, food delivery 3rd consecutive acceleration at stable 5.5% margins, every segment positive or rapidly improving. The compounding-into-profitability inflection is *visible in numbers, not just narrative*. Mgmt's **$1 bn Adj EBITDA by FY29** target requires ~5x growth (~70% CAGR) — stretched but tractable given Blinkit's NOV CAGR of 60% + 3-3.5% margin path + food delivery's 20%+ CAGR durable target. **At ₹256.52 (mid-range of 52-week ₹212.60-368.45), the stock sits at the lower edge of fair value zone.** Asymmetric setup (capped -25% downside vs +56-79% upside) favours patient accumulation. **Verdict: ACCUMULATE in ₹212-250 zone (best value); HOLD existing positions; CONVICTION DEPLOY upon Q1 FY27 print confirming Blinkit margin progression.** This is the highest-quality compounder on this analysis platform.",
    },
});
