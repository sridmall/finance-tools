/* ============================================================
   Star Health & Allied Insurance Co Ltd — Q4 FY26
   Concall: 29 April 2026 (results announced 28 April 2026)
   File path: data/STARHEALTH/Q4FY26.js
   Live spot @ authoring: ₹533.80 NSE / ₹534.25 BSE (29 Apr 2026)
   Source: Groww MCP get_ltp + fetch_stocks_fundamental_data
   ============================================================ */

window.registerReport("STARHEALTH", "Q4FY26", {
    meta: {
        companyName: "Star Health & Allied Insurance Company Ltd",
        ticker: "STARHEALTH",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "29 April 2026",
        concallDate: "29 April 2026",
        resultsBasis:
            "Standalone (primary; insurance sector convention). Single segment retail+group health insurer; #1 in retail health (~31% market share). **Track Combined Ratio (CR), Loss Ratio, Persistency, ROE, GWP** — not P/E (TTM EPS ₹7.58 reported by Groww is depressed by FY25's bushfire claims base). Company also reports a *Normalised PAT* metric (₹1,222 cr FY26, +45% YoY) that excludes one-time items — a more honest read of underlying earnings power.",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. Star Health is transitioning to Ind AS from FY27 onwards (transition date 1 April 2025) — quarterly comparability will improve from Q1 FY27. Use Combined Ratio + Normalised PAT + Persistency for primary trend analysis.",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            {
                metric: "Gross Written Premium (GWP) — ₹Cr",
                current: "Q4: 6,529 (FY26: 20,369)",
                qoq: "Up sequentially (Q3 FY26 GWP ₹5,047 cr; Q4 typically strongest)",
                yoy: "**Q4 +17% YoY / FY26 +16% YoY** (FY25 ₹17,560 cr); Fresh Retail GWP **+37% YoY** at ₹4,567 cr — accelerating new business",
            },
            {
                metric: "Net Earned Premium (NEP) — ₹Cr",
                current: "Q4: 4,327 (FY26 implied ~16,200-16,500)",
                qoq: "Up sequentially",
                yoy: "**+14% YoY** (Q4) — slightly slower than GWP due to reinsurance ceding mix",
            },
            {
                metric: "Combined Ratio (CR) — *the* turnaround metric",
                current: "**Q4 95.7%** / FY26 98.8%",
                qoq: "Q4 CR (95.7%) significantly better than 9M CR of 99.8%",
                yoy: "**FY26 CR -230 bps** (vs FY25 101.1%); first sub-100% print since post-COVID claims spike — *underwriting now profitable*",
            },
            {
                metric: "Underwriting Profit / (Loss) — ₹Cr",
                current: "FY26 **+206 cr** (Q4 contribution: large)",
                qoq: "Q4 was the strongest underwriting quarter",
                yoy: "**Swing of ₹371 cr** (FY25 was -₹165 cr loss → FY26 +₹206 cr profit) — core operating turnaround",
            },
            {
                metric: "PAT — Reported & Normalised (₹Cr)",
                current: "Q4 standalone: **₹111** (vs ₹50 lakh YoY); FY26 Reported: ₹911; FY26 Normalised: **₹1,222**",
                qoq: "Q4 PAT below QoQ due to Q4 seasonality (claims pressure historically heavier)",
                yoy: "**Q4 +22,000% YoY** (off near-zero base); FY26 Reported PAT +16% YoY (FY25 ₹786 cr); **Normalised PAT +45% YoY**",
            },
        ],
        businessQualityMetrics: [
            {
                metric: "Loss Ratio — claims/NEP",
                current: "**FY26 ~68.7%** (Q3 was 68.8% vs FY25 71.9%)",
                qoq: "Marginally lower in Q4",
                yoy: "**~-300 bps YoY** — pricing actions + ANH (Agreed Network Hospital) contracting flowing through; structural improvement, not noise",
            },
            {
                metric: "Persistency / Renewal Ratio (%)",
                current: "**99%** (FY26 annual)",
                qoq: "Steady",
                yoy: "Industry-leading; among the best in any insurer globally — speaks to product stickiness + agent relationship moat",
            },
            {
                metric: "Solvency Ratio (%)",
                current: "**205%**",
                qoq: "Steady",
                yoy: "Well above IRDAI's 150% regulatory minimum; significant capital headroom for growth + buybacks if mgmt chooses",
            },
        ],
        footnotes: [
            "Q4 standalone PAT ₹111 cr is *down* sequentially from Q3 (~₹500 cr area implied by 9M ₹966 cr split) — but this is **structurally seasonal** (Q4 has historically the heaviest hospitalisation claims due to winter respiratory + post-festive elective surgeries). The YoY swing (vs Q4 FY25's ₹50 lakh) is the more meaningful read.",
            "Groww MCP shows TTM EPS ₹7.58 / P/E 68.21x — these reflect the bushfire-claims-impacted FY25 base + early FY26 pre-turnaround. **Forward P/E on FY26 reported EPS (~₹16) is ~33x**; on FY26 normalised EPS (~₹21.4) is **~25x** — closer to the right valuation framework for an insurer.",
            "New Labour Codes added ₹18.63 cr incremental gratuity expense in FY26 — recurring impact; small but watchable. ESOPs granted FY26: 52,35,764 (~0.9% of share base) — modest dilution.",
        ],
        patternDetected:
            "GWP +16-17% (steady) + Combined Ratio -230 bps (improving) + Normalised PAT +45% (operating leverage) — **pattern reading: \"Underwriting discipline finally compounding into earnings power\"**. After three years of post-COVID claims spike + price-war headwinds, Star Health has restored unit-economic discipline. Loss ratio normalised, expense ratio steady at 30%, fresh retail GWP +37%.",
        interpretation:
            "**Q4 FY26 is the most important quarter Star Health has printed since IPO** — for the first time since the post-COVID claims spike of FY23, the underwriting business is *profitable on a full-year basis* (+₹206 cr vs -₹165 cr loss YoY). Q4 alone delivered a 95.7% combined ratio (best in years). The ₹371 cr swing in underwriting profit + 230 bps combined ratio improvement are not statistical noise — they are the result of: (a) pricing actions taken in FY24-25, (b) ANH contracting expanding to 84% of cashless claims, (c) loss-ratio actions in fraud-heavy geographies. Mgmt is reaffirming **mid-teen ROE long-term target** vs current 7.16% — closing this gap is the central FY27-29 thesis.",
        whatWentRight: [
            "**Combined ratio inflection is structural, not cosmetic** — Q4 95.7% (best Q4 in 3+ years), FY26 98.8% (-230 bps); loss ratio under control at 68.7% via ANH contracting (84% of cashless claims processed via Agreed Network Hospitals — material moat against fraud); pricing actions from FY24-25 fully flowing through. **₹206 cr underwriting profit vs ₹165 cr loss = ₹371 cr swing** — the core operating thesis confirmed.",
            "**Fresh Retail GWP +37% YoY at ₹4,567 cr — accelerating new business writing** despite slipping market share. Combined with **persistency at 99%** + **NPS rising from 54 → 62** + **8.3 lakh proprietary agency network (91% of fresh retail)** = the customer franchise + distribution moat is *intact and strengthening* even amid competitive pressure.",
        ],
        whatWentWrong: [
            "**Retail health market share slipped to 31% (vs 33% in FY24 + FY25)** — Star is losing share at the margin to bank-led / digital-first competitors (Care, Niva Bupa, ICICI Lombard health). Mgmt's prioritisation of profitability over share is correct, but the market-share narrative is now meaningfully different from the IPO thesis (35%+ share).",
            "**Reported ROE only 7.16% vs management's mid-teen target** — gap of ~700-800 bps. Even Normalised PAT of ₹1,222 cr translates to ~10% ROE, still well below industry-leader peers (ICICI Lombard ~17%, HDFC Ergo ~18%). The path to mid-teens depends on combined ratio compressing further from 98.8% to 94-95% range — possible but not yet visible in numbers.",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "1. Retail Health Insurance — the core franchise",
                yoyGrowth: "Fresh Retail GWP +37% YoY (₹4,567 cr); FY26 Retail NEP ₹15,744 cr",
                mix: "~85-90% of GWP; ~95% of operating profit",
                analysis:
                    "**The crown jewel.** ~31% market share in retail health (#1 by long margin); 8.3 lakh proprietary agents (91% of fresh retail business); 99% persistency on renewals; covered lives 2.8 cr. Q4 FY26 fresh retail acceleration to +37% (vs ~25-30% in earlier quarters) suggests the price-correction cycle is over and growth is reaccelerating. **Loss ratio improvement (~300 bps YoY) is also concentrated in retail.**",
                triggers:
                    "Continued combined ratio improvement (95-96% target by FY28); ANH contracting expansion; AI-driven claims fraud detection (mentioned by mgmt — early days); cross-sell into chronic disease management; geographic expansion in Tier-3/4 markets where penetration is single-digit.",
            },
            {
                name: "2. Group / Corporate Health Insurance — the secondary engine",
                yoyGrowth: "FY26 Group NWP ₹852 cr (modest base, growing)",
                mix: "<10% of GWP; lower-margin segment by design",
                analysis:
                    "Star runs Group selectively — *not* chasing volume in price-competitive corporate tenders. Mgmt has historically discounted this segment given thin margins; Q4 results consistent with that discipline. Used as a defensive profitability filter rather than growth segment.",
                triggers:
                    "Selective renewals at improved pricing; inclusion-of-new-corporates only at margin-protective rates; no near-term catalyst — segment is a profitability-discipline marker, not a growth driver.",
            },
            {
                name: "3. Digital Channel + Direct-to-Consumer (D2C)",
                yoyGrowth: "Digital Fresh Retail GWP ₹928 cr (~₹650-700 cr in FY25 = +35-40% YoY)",
                mix: "20% of fresh retail sales (up from ~15-17% earlier)",
                analysis:
                    "**Fastest-growing channel within retail.** 14 mn+ app downloads; 20% of fresh retail sales via digital. Mgmt's 'Digital First' strategy is real — claim cashless processing 92% settled, 84% via ANH. Digital improves both customer acquisition cost (CAC) and renewal economics; long-term margin lever.",
                triggers:
                    "Digital share to 25-30% of fresh retail by FY28; AI-driven product personalisation; native chronic-disease management platforms; cross-sell of OPD/wellness add-ons. Scale benefits + lower CAC = potential 200-300 bps margin tailwind by FY28.",
            },
        ],
        assessment: [
            "**Single-segment focus with channel diversification:** Retail health is ~85-90% of business; group is selective; digital is the fastest-growing sub-channel within retail. Cleanest pure-play retail health insurer in India.",
            "**Agency network is the core moat** — 8.3 lakh proprietary agents is *dwarfed only by LIC* in scale; replicating this network is a 5-10 year project for any new entrant. 91% of fresh retail flowing through this channel = relationship-led distribution that bank channels and digital aggregators cannot match.",
            "**Segment quality verdict: PURE-PLAY DOMINANT FRANCHISE WITH RECOVERING UNIT ECONOMICS.** The agency network + 99% persistency + 31% market share combination is genuinely defensible. The Q4 turnaround in combined ratio confirms the operating thesis. Investment case rests on closing the ROE gap (7% → 14-15%) over FY27-29.",
        ],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            {
                metric: "1. GWP Growth Trajectory",
                current: "FY26 GWP ₹20,369 cr (+16% YoY)",
                trend: "Mgmt focus on **profitable growth** rather than volume-chasing",
                horizon: "FY27 GWP ₹23,500-24,500 cr (+15-20%)",
                remarks:
                    "Steady mid-teens growth aligned with industry; fresh retail GWP +37% suggests upside if competitive intensity moderates; mgmt deliberately skipping price-war segments to protect margin.",
            },
            {
                metric: "2. Combined Ratio Trajectory",
                current: "FY26 98.8% (Q4 95.7%)",
                trend: "**Sub-100% sustainably; targeting 94-96% by FY28** (mgmt commentary)",
                horizon: "Each 100 bps CR improvement = ~₹160-200 cr underwriting profit",
                remarks:
                    "From 101.1% (FY25) to 98.8% (FY26) = -230 bps. Path to 95% by FY28 is the central earnings-power thesis. Drivers: ANH expansion (target 90%+ of cashless), AI-fraud detection, digital channel CAC efficiency, expense ratio leverage on premium growth.",
            },
            {
                metric: "3. Normalised PAT Trajectory",
                current: "FY26 ₹1,222 cr (+45% YoY)",
                trend: "Operating leverage as CR compresses + investment income compounding",
                horizon: "FY27E ₹1,500-1,700 cr (+25-35%); FY28E ₹2,000-2,300 cr",
                remarks:
                    "If CR sustains 95-97% range + GWP grows 15-18% + investment yield steady at ~7% → FY28 normalised PAT ~₹2,100-2,300 cr possible. Implies ROE 15-17% — meeting mgmt mid-teen target.",
            },
            {
                metric: "4. Agency Network — fresh retail engine",
                current: "8.3 lakh agents (proprietary); 91% of fresh retail",
                trend: "Agency fresh business +35% YoY in FY26",
                horizon: "9-10 lakh agents by FY28; productivity rising via digital tools",
                remarks:
                    "Each 1 lakh additional agents = potential ~₹500-700 cr incremental fresh retail GWP at current productivity. Digital agent tools (mgmt mentioned) lifting productivity per agent — second-order leverage.",
            },
            {
                metric: "5. Investment Float — silent compounder",
                current: "Investment book ~₹17,000-18,000 cr (estimate based on solvency ratio + reserves)",
                trend: "Float grows with NEP + technical reserves; ~7% yield on debt-heavy mix",
                horizon: "₹22,000-25,000 cr by FY28",
                remarks:
                    "Insurance float = perpetual low-cost capital. Each ₹1,000 cr of float at 7% yield = ₹70 cr investment income. The 99% persistency means reserve build-up is highly stable and predictable.",
            },
        ],
        demandSignals: [
            {
                signal: "Industry growth rate",
                reading:
                    "Indian retail health insurance industry growing 18-22% YoY structurally; penetration <40% of urban + <15% of rural; long runway. Star at +16-17% slightly below industry average — share-protection vs growth prioritisation tradeoff.",
                verdict: "Robust",
            },
            {
                signal: "Customer engagement / persistency",
                reading:
                    "Persistency 99% (best-in-class), NPS 62 (up from 54), 14 mn+ app downloads, 2.8 cr covered lives. **Customer franchise is genuinely improving**, not just being defended.",
                verdict: "Strong",
            },
            {
                signal: "Capacity utilisation / scalability",
                reading:
                    "Insurance is software + agency capacity; no physical capex. ANH network at 84% of cashless claims (mgmt target 90%+); claims platform handling 30 lakh claims/year smoothly. Scalable.",
                verdict: "Strong",
            },
            {
                signal: "Competitive intensity",
                reading:
                    "Care Health, Niva Bupa, ICICI Lombard, HDFC Ergo, Aditya Birla all aggressive in retail health; bank-led channels (HDFC, ICICI, SBI) are gaining share. Star's market share slipped from 33% → 31%.",
                verdict: "Intensifying (but manageable)",
            },
            {
                signal: "Pricing environment",
                reading:
                    "Star's CR improvement to 98.8% suggests pricing discipline is back industry-wide; mgmt comment that they're \"skipping price-war segments\" implies competition isn't fully rational yet but Star is exercising option to be selective.",
                verdict: "Adequate",
            },
            {
                signal: "Regulatory environment",
                reading:
                    "IRDAI regulator focused on consumer protection (claim rejection norms, premium hike caps). Star's 92% cashless settlement + ANH network well-aligned with regulatory direction. Composite license framework (proposed by IRDAI) could allow life+non-life under one company — long-term strategic question.",
                verdict: "Neutral-Positive",
            },
            {
                signal: "Fraud / loss ratio drivers",
                reading:
                    "Loss ratio 68.7% (vs 71.9% FY25) — improvement structural via ANH. AI-driven fraud detection mentioned by mgmt (early stage). Hospital-bill fraud remains industry-wide concern; Star's response is contracting + technology.",
                verdict: "Improving",
            },
        ],
        demandVerdict:
            "**Demand environment is GREEN; relative competitive position is YELLOW; unit economics are recovering.** Industry growth 18-22% supports steady mid-teens GWP growth for Star; persistency/NPS/app-engagement metrics show customer franchise is *improving*, not eroding; market share slip (33% → 31%) is the watchpoint. The Q4 combined ratio inflection is the most important data point — it confirms the unit-economic thesis.",
        whatWentRight: [
            "**Combined ratio path to 94-96% by FY28** is mathematically tractable — Q4 already at 95.7% standalone. Each 100 bps improvement = ~₹160-200 cr underwriting profit; reaching 95% would deliver ~₹500-600 cr underwriting profit (vs ₹206 cr today) and lift ROE to mid-teens. **Single largest earnings lever** in the model.",
            "**Agency network growth + digital channel acceleration** = two-engine growth in fresh retail; Q4 fresh retail GWP +37% suggests the engines are gaining speed. Combined with 99% persistency, embedded value is compounding even before mainstream growth re-accelerates.",
        ],
        whatWentWrong: [
            "**Market share slip (33% → 31%)** + **mgmt's choice not to chase volume** = a real execution tension. If competitors continue gaining share at lower combined ratios (i.e., they've also fixed unit economics), Star's selectivity could turn into long-term irrelevance in some sub-segments.",
            "**Q4 standalone PAT (₹111 cr) is the lowest absolute PAT in any quarter of FY26** — Q4 seasonality is real, but the absolute decline tells investors who screen on quarterly trends a confused story. **Ind AS transition from FY27** will (hopefully) smooth this seasonality.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            {
                metric: "Long-term ROE Target",
                current: "FY26 Reported ROE: 7.16%; Normalised ROE: ~10%",
                target:
                    "**Mid-teen ROE (14-16%)** — long-term reaffirmed; gap of ~600-700 bps to close over FY27-29",
            },
            {
                metric: "Combined Ratio Target",
                current: "FY26 98.8% (Q4 95.7%)",
                target:
                    "**Continue improvement; aspirational sub-95% over FY27-28** — implied via mgmt commentary on pricing + ANH expansion",
            },
            {
                metric: "GWP Growth Strategy",
                current: "FY26 +16% YoY",
                target:
                    "**Profitable growth focus** — won't chase volume in price-war segments; aim mid-teens GWP growth at improving CR",
            },
            {
                metric: "Channel Mix Evolution",
                current: "Agency 91% / Digital 20% / Bank/Other ~9%",
                target:
                    "Agency to remain dominant; **Digital share to 25-30% by FY28** (productivity + CAC lever)",
            },
            {
                metric: "Capital Position",
                current: "Solvency 205%",
                target:
                    "Maintain comfortable cushion above 150% IRDAI minimum; **buyback option preserved** if surplus capital builds",
            },
        ],
        commitmentNote:
            "Mgmt has been **transparently focused on profitable growth** for 3 years — even at the cost of market share. The combined ratio trajectory (101.1% → 98.8% → targeting 94-96%) and Q4 inflection (95.7%) confirm the operating discipline. **The single area to watch is the ROE gap** — at 7% reported, even normalised ~10% is well below the mid-teen target. Closing this requires CR sustainably below 96% AND investment yield steady AND no major regulatory hit. Each is plausible; together they need to all happen in sequence.",
        growthDrivers: [
            {
                driver: "1. Combined Ratio compression to 94-96% by FY28",
                impact:
                    "Each 100 bps = ~₹160-200 cr underwriting profit. Going from 98.8% (FY26) to 95% (FY28) = +400 bps × ₹180 cr/100 bps = **+₹720 cr** incremental underwriting PAT — single largest earnings lever.",
            },
            {
                driver: "2. Fresh Retail GWP +30%+ sustained for 3 years",
                impact:
                    "FY26 fresh retail ₹4,567 cr × 1.3³ ≈ ₹10,000 cr by FY29. With 99% persistency, this compounds into a much larger GWP base by FY29 — *premium income compounding without churn*.",
            },
            {
                driver: "3. Agency network expansion + productivity (8.3 lakh → 9-10 lakh)",
                impact:
                    "Each 1 lakh new agents at current productivity = ~₹500-700 cr fresh retail GWP. Digital tools (mentioned by mgmt) lift productivity 10-15% — second-order leverage. **+₹1,500-2,000 cr GWP capacity** over 2 years.",
            },
            {
                driver: "4. Investment float + yield",
                impact:
                    "Float ~₹17,000-18,000 cr today → ~₹22,000-25,000 cr by FY28; at 7% yield = ~₹350-500 cr incremental investment income annually by FY28. Compounding effect — the silent earnings driver.",
            },
            {
                driver: "5. AI-driven fraud + claims efficiency",
                impact:
                    "Mgmt mentioned AI in claims fraud detection (early stage). Each 1% loss-ratio improvement = ~₹160 cr direct PAT. Big optionality but unproven yet — will be visible in FY27-28 prints.",
            },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            {
                title: "Combined Ratio inflection — 98.8% FY26 vs 101.1% FY25 (-230 bps)",
                body:
                    "Q4 alone at **95.7%** — best in 3+ years. ₹371 cr swing in underwriting profit (from -₹165 cr loss to +₹206 cr profit). Driven by ANH contracting (84% of cashless claims), pricing actions from FY24-25 flowing through, expense ratio steady at 30%. **The central operating turnaround is confirmed.**",
            },
            {
                title: "Fresh Retail GWP +37% YoY at ₹4,567 cr — accelerating new business",
                body:
                    "Despite slipping market share at the headline level (33% → 31%), Star is *writing more new retail business* than ever — 8.3 lakh agents driving 91% of fresh retail; digital channel +35-40% YoY contributing 20% share. Combined with 99% persistency = embedded value compounding.",
            },
            {
                title: "Normalised PAT +45% YoY at ₹1,222 cr — underlying earnings power inflecting",
                body:
                    "Reported PAT ₹911 cr (+16%) is depressed by FY25 base + one-time items; **Normalised PAT ₹1,222 cr (+45%)** is the cleaner read. Forward FY27 EPS at +25-30% growth → ~₹27 → forward P/E ~20x = reasonable entry valuation for a leading insurer.",
            },
            {
                title: "Customer franchise metrics improving — NPS 54 → 62 + persistency 99%",
                body:
                    "Net Promoter Score lifted from 54 (FY25) to 62 (FY26); persistency at industry-best 99%; 2.8 cr covered lives; 14 mn+ app downloads. Customer satisfaction is *increasing*, not just being maintained — strong leading indicator for renewal economics.",
            },
            {
                title: "Solvency at 205% + 0.06x D/E — fortress balance sheet preserves optionality",
                body:
                    "Capital headroom for: (a) ANH expansion + tech investment; (b) potential buyback (mgmt has authority); (c) bolt-on M&A in OPD / wellness adjacencies. Crucially, *no need to raise equity* even in adverse claim scenarios.",
            },
        ],
        bearish: [
            {
                title: "Trailing P/E 68.21x vs industry 16.05x — 4.3x sector premium",
                body:
                    "Even at normalised PAT (FY26 EPS ~₹21.4), P/E is ~25x — still ~50% above sector. Justified historically by retail-health leadership; risk if combined ratio improvement plateaus or market share continues slipping.",
            },
            {
                title: "Reported ROE only 7.16%; even normalised ROE only ~10%",
                body:
                    "Mid-teen ROE target requires combined ratio sustainably below 96% AND investment yields steady AND GWP growth maintained. Achievable but not yet visible in numbers; closing the gap will take 2-3 years of consistent execution.",
            },
            {
                title: "Market share slip (33% → 31%) — competitive narrative is shifting",
                body:
                    "Bank-led + digital-first competitors (Care, Niva Bupa, ICICI Lombard, HDFC Ergo) gaining at the margin. Mgmt's profitability-first stance is right but creates a long-term valuation question: is Star a *#1 share growing into profitability* or a *#1 share gradually losing relevance*?",
            },
            {
                title: "Q4 standalone PAT only ₹111 cr — significantly below Q1-Q3 run-rate",
                body:
                    "Q4 is structurally seasonal (winter respiratory + post-festive elective surgeries) but the absolute QoQ drop will confuse passive investors who screen on sequential trends. **Ind AS transition from FY27** should smooth this volatility.",
            },
            {
                title: "Concentration risk: ~85-90% of GWP from Retail + ~91% of fresh from Agency",
                body:
                    "Single-segment, single-channel concentration. If retail health slows industry-wide (due to medical inflation, regulatory cap on premium hikes, or substitution by employer cover), Star has limited diversification. Group / digital are too small to compensate today.",
            },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text:
                "**Q4 FY26 confirms the underwriting turnaround** — Combined Ratio Q4 95.7% (FY26 98.8% vs FY25 101.1%); first sub-100% full-year print since post-COVID claims spike; ₹371 cr swing in underwriting profit (from -₹165 cr loss to +₹206 cr profit). The single most important data point for the investment thesis.",
            impact: "strengthens",
        },
        {
            text:
                "**Mgmt mid-teen ROE target (vs current 7.16%) requires CR sustainably <96%** — possible but stretched. Each 100 bps CR improvement = ~₹160-200 cr underwriting profit. Going from 98.8% → 95% by FY28 = ~+₹720 cr incremental underwriting PAT, lifting ROE to ~14-15%. Achievable, not assured.",
            impact: "strengthens",
        },
        {
            text:
                "**Trailing P/E 68x vs industry 16x is misleading** — TTM EPS reflects FY25 bushfire-claims base. **Forward P/E on FY26 normalised EPS (~₹21.4) is ~25x; FY27E P/E ~20x**. Reasonable for a leading retail health insurer with 99% persistency, 31% share, and recovering CR. The headline P/E should not deter long-term investors.",
            impact: "neutral",
            note: "valuation framework matters",
        },
        {
            text:
                "**Market share slipping (33% → 31%) is the watchpoint** — bank-led + digital-first competitors gaining at the margin. Mgmt's profitability-first stance is *correct*, but the long-term question is whether Star is the dominant franchise growing into mid-teen ROE, or a slowly-eroding leader. Watch fresh retail GWP growth + retail share trend in FY27.",
            impact: "weakens",
        },
        {
            text:
                "**Stock at ₹533.80 (live) — middle of 52-week range; up +3.19% post-results.** Forward P/E ~25x (normalised) places it in a *reasonable* zone for a leading insurer; fortress balance sheet (solvency 205%, D/E 0.06x); buyback optionality. Asymmetric setup: bear case ~₹400 (de-rate to 18x), base case ~₹540-580 (current+10%), bull case ~₹650-720 (mid-teen ROE delivered).",
            impact: "neutral",
            note: "balanced setup",
        },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        /* Q1 — Is the core investment thesis intact? */
        thesisIntact: {
            verdict: "Yes — Q4 FY26 confirms operational turnaround; ROE gap remains the question",
            reasons: [
                "**The core thesis (dominant retail-health insurer with recovering unit economics) just got Q4 numerical proof** — Combined Ratio 95.7% in Q4 / 98.8% FY26 (vs 101.1% FY25); first underwriting profit (+₹206 cr vs -₹165 cr loss). The fundamental operating thesis is confirmed.",
                "**Distribution moat intact and strengthening** — 8.3 lakh proprietary agents (91% of fresh retail), 99% persistency (industry-leading), 2.8 cr covered lives, NPS 62 (up from 54). This is a 5-10 year moat that no new entrant can replicate; the franchise is *getting better*, not just being defended.",
                "**Multiple earnings levers visible:** (a) Combined ratio compression to 94-96% by FY28 = +₹500-700 cr underwriting PAT; (b) fresh retail GWP +37% compounding via 99% persistency; (c) investment float at ~₹17,000 cr → ₹22,000-25,000 cr by FY28; (d) AI-driven fraud detection (early stage). Earnings power could double over 3 years.",
                "**Fortress balance sheet (solvency 205%, D/E 0.06x, normalised PAT +45%)** preserves optionality — buyback, M&A, or organic capacity expansion all financeable internally; no equity dilution risk.",
                "**The thesis weakens only if:** (a) Combined ratio reverts above 100% in any FY27 quarter signalling discipline broke, or (b) market share slips below 28% confirming structural competitive disadvantage, or (c) regulatory action (premium-hike caps + claim-rejection norms) compresses margins beyond mgmt control. None is base case; all are watchpoints.",
            ],
        },

        /* Q2 — Re-rate triggers + probability */
        rerateTriggers: [
            {
                trigger: "FY27 Q1 print: Combined Ratio sustains <100% (ideally 96-98%)",
                probability: "Medium-High",
                rationale:
                    "Q4 FY26 95.7% suggests structural improvement; FY27 Q1 will validate whether it sustains across seasonal quarters. Mgmt confidence + ANH expansion + pricing actions all flowing through. Most important single data point in next 3 months.",
            },
            {
                trigger: "ROE crossing 12% in FY27 (vs FY26 7.16%)",
                probability: "Medium",
                rationale:
                    "Requires CR ~96-97% + GWP +15-18% + investment yield steady. Achievable in FY27 if Q4 inflection persists; would re-rate stock toward ICICI Lombard's ~17% ROE / 30x P/E zone.",
            },
            {
                trigger: "Market share stabilising at 31% (no further slip)",
                probability: "Medium-High",
                rationale:
                    "Fresh retail GWP +37% + persistency 99% + agency growth = math says share should stabilise. If Q1-Q2 FY27 prints show steady share, the long-term concern recedes. Watch IRDAI quarterly market share data.",
            },
            {
                trigger: "Buyback announcement (mgmt has flagged optionality)",
                probability: "Low-Medium",
                rationale:
                    "Solvency 205% gives capital cushion; mgmt has authority. Less explicit than other companies but not ruled out. Would be most accretive at current ~25x normalised P/E.",
            },
            {
                trigger: "AI-fraud detection delivering visible loss-ratio benefit",
                probability: "Low",
                rationale:
                    "Mgmt mentioned but no quantification yet; FY27 H2 / FY28 likely first visible impact. Each 1% loss-ratio improvement = ~₹160 cr direct PAT. Long-dated optionality.",
            },
        ],

        /* Q3 — Upside if guidance fully met */
        upsideIfGuidanceMet: {
            currentPrice: "₹533.80 (live NSE LTP via Groww MCP, 29 Apr 2026 15:19 IST)",
            targetPrice: "₹680 – ₹780",
            upsidePct: "+27% to +46%",
            horizon: "18-24 months (FY28 EPS basis with mid-teen ROE delivery)",
            assumptions:
                "**Base case (mgmt mid-teen ROE delivered, CR ~95%):** FY28 GWP ₹27,500 cr, NEP ₹22,500 cr, CR 95%, Underwriting profit ₹1,125 cr, Investment income ₹1,400 cr (on ₹22,000 cr float at ~6.5% net), Total PBT ~₹2,300 cr, Tax 25%, **PAT ~₹1,725 cr → EPS ~₹30.3** (57 cr shares). At 23-25x P/E (normalised insurer multiple) = **₹700-760**. **Bull case (CR <94%, ad/cross-sell upside):** EPS ₹35-37 × 22-24x = **₹770-890**. **Range: ₹680-780** = +27-46% from ₹533.80.",
            workings:
                "**FY27 Build:** GWP ₹23,500 cr (+15%), NEP ₹19,500 cr, CR 96.5% (1H), Underwriting profit ~₹680 cr, Investment income ₹1,250 cr, PBT ~₹1,930 cr, **PAT ~₹1,450 cr → EPS ~₹25.4**. **FY28 Build:** GWP ₹27,500 cr (+17%), NEP ₹22,500 cr, CR 95%, Underwriting profit ₹1,125 cr, Investment income ₹1,400 cr, PBT ~₹2,300 cr, **PAT ~₹1,725 cr → EPS ~₹30.3**. **Multiples:** Star Health historical 5-yr P/E range 35-70x (post-IPO premium); converging to insurer-fair 22-28x as ROE normalises. Apply 23x to FY28 EPS = **₹697**. **Bull (25x + earnings beat):** ₹758. **Stretch (28x):** ₹848. **Range ₹680-780** = +27-46% upside.",
        },

        /* Q4 — Best value entry zone */
        valuationEntryZone: {
            bestValueRange: "₹420 – ₹510",
            fairValue: "₹520 – ₹600",
            currentZone: "Fair — at lower edge of fair value zone (₹533.80)",
            rationale:
                "**Trailing P/E:** ₹533.80 / TTM EPS ₹7.58 = **70.4x** — *not the right framework* (TTM depressed by FY25 bushfire claims base). **Forward P/E (FY26 reported EPS ~₹16):** ~33x — high but not unreasonable for inflection insurer. **Forward P/E (FY26 normalised EPS ~₹21.4):** **~25x** — *the right framework*; reasonable for leading insurer. **FY27 forward P/E (~₹25.4 EPS):** ~21x — clearly fair. **52-week range (~₹420-650 estimated based on 1Y -ve return):** current at the upper-mid of range, +3.19% post-results pop. **Best entry zone: ₹420-510** (this would be 5-yr P/E lows + cushion). Fair value ₹520-600. Above ₹650 starts pricing mid-teen ROE delivery; above ₹750 pricing in CR <94% bull case. **Per *valuation_analysis.md* logic** — accumulate aggressively if dips to ₹450-490 (would require some sentiment shock); partial deploy at current ₹520-540; full conviction *only after* FY27 Q1 print confirms CR sustains <100%. **Asymmetric setup (capped -25% downside to ~₹400, +27-46% upside to ₹680-780) favours patient accumulation.**",
        },

        summary:
            "**Star Health Q4 FY26 is the textbook turnaround quarter every long-term holder has been waiting for** — Combined Ratio 95.7% (best in 3+ years), FY26 underwriting profit of ₹206 cr (vs ₹165 cr loss YoY = ₹371 cr swing), Fresh Retail GWP +37%, Normalised PAT +45%. The investment thesis (dominant retail-health insurer with recovering unit economics) is *confirmed*, not just promised. **Mgmt's mid-teen ROE target requires CR sustainably below 96% — Q4 already at 95.7% suggests path is real but unproven across seasons.** **At ₹533.80 (forward P/E ~25x normalised, 21x FY27E), valuation sits at lower edge of fair value zone.** Asymmetric setup (capped -25% downside vs +27-46% upside) favours patient accumulation. **Verdict: ACCUMULATE in ₹420-510 zone (best value); HOLD existing positions through FY27 Q1 print; CONVICTION DEPLOY upon CR sustaining <100% across FY27 Q1.** This is the kind of operating turnaround that compounds quietly for 24-36 months once confirmed.",
    },
});
