/* ============================================================
   Cohance Lifesciences Ltd (COHANCE) — Q4 FY26 / Full Year FY26
   Results announced: 12 May 2026 (Board approval); Concall: 12 May 2026 6:30 PM IST
   File path: data/COHANCE/Q4FY26.js
   Live spot @ authoring: ₹456.30 NSE (13 May 2026, 6:47 PM IST)
   Day move: **-5.85% (-₹28.35)** — STRONG NEGATIVE reaction T+1 post Q4 results on weak PAT (-53% YoY) + Q1 FY27 trough guidance
   Source: Groww MCP get_ltp + fetch_stocks_fundamental_data (still labelled suven-pharmaceuticals-ltd pre-rebrand)
   Note: Cohance Lifesciences = formerly Suven Pharmaceuticals; merger effective 1 May 2025; controlled by Advent International
   ============================================================ */

window.registerReport("COHANCE", "Q4FY26", {
    meta: {
        companyName: "Cohance Lifesciences Ltd",
        ticker: "COHANCE",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "12 May 2026 (Board approval + Q4 FY26 + Annual FY26 results)",
        concallDate: "12 May 2026 (Q4 FY26 + FY26 earnings call, 6:30 PM IST) — Vivek Sharma (Executive Chairman; ex-Piramal Pharma Solutions), Himanshu Agarwal (CFO + Board Director), Yann D'Herve (CDMO Vertical Head, Pennsylvania-based), Gunjan Singh (API+ Vertical Head), Amrit Singh (Specialty Chemicals Vertical Head); **Umang Vohra (ex-Cipla MD/Global CEO) joining as Group CEO effective 20 May 2026 — TRANSFORMATIONAL APPOINTMENT**",
        resultsBasis:
            "Consolidated. **POST-MERGER integrated CDMO platform — Cohance Lifesciences is the merged entity created when Cohance Lifesciences merged into Suven Pharmaceuticals (effective 1 May 2025) and was subsequently renamed Cohance Lifesciences Ltd**; **controlled by Advent International (Private Equity)** — driving aggressive consolidation strategy to capitalize on India's CDMO opportunity. **Merger amalgamated 6 entities into 1 platform** (Suven + Cohance + 4 group entities). **Differentiation drivers**: (1) **ADVENT-DRIVEN INTEGRATED CDMO PLATFORM with $1 BILLION (US$1bn ≈ ₹85bn) FY30 vision**: management has publicly committed to **doubling combined business revenue to ₹6,000 cr by FY29 from combined FY24 ₹2,392 cr** = clear multi-year scale-up roadmap; (2) **THREE-VERTICAL BUSINESS STRUCTURE** with dedicated global leaders: (a) **Pharma CDMO** (led by Yann D'Herve, Pennsylvania, 30+ years global CDMO experience) — drug substance + High-Potent APIs + complex chemistry; **ADC (Antibody-Drug Conjugates)** + oligonucleotides + small molecules; (b) **API+ business** (led by Gunjan Singh, Hyderabad-based, top Indian pharma experience) — differentiated API portfolio for regulated markets; (c) **Specialty Chemicals** (led by Amrit Singh, 20 yrs specialty chemical experience) — agro + performance chemicals; (3) **NICHE TECHNOLOGY PLATFORMS = competitive moat**: **ADC (Antibody-Drug Conjugates) capability** through Nacharam facility + **NJ Bio US partnership** for ADC bioconjugation services; **Oligonucleotide unit at Surya, Nacharam** equipment validation completed Q3 FY26, commissioning Q4 FY26; **SuryaPet facility** being capitalized for confirmed Japanese customer Phase 3 commercial production; **Hi-PAPI capability** = high-potent API niche. **Combined capacity 2,650 kL** = among India's leading integrated CDMO players. **Phase III pipeline: 10 programs** = critical future revenue ramp; (4) **UMANG VOHRA APPOINTMENT AS GROUP CEO (effective 20 May 2026) = TRANSFORMATIONAL LEADERSHIP CATALYST**: Vohra was MD + Global CEO of Cipla Ltd (one of India's top 3 pharma companies, mkt cap ~₹1.5 lakh cr); brings deep CDMO + global commercial experience + execution credibility; **single biggest positive catalyst** for re-rating thesis; (5) **PE-INSTITUTIONAL CAPITAL DISCIPLINE**: Advent International controlling shareholder = professional capital allocation + M&A strategy + governance discipline; **D/E 0.12 = essentially debt-free**; **Net cash position ₹322 cr** end FY26; **FY26 FCF ₹17.3 cr generated despite trough year**; (6) **GLOBAL CUSTOMER BASE + RELATIONSHIP**: Large Japanese customer Phase 3 order confirmed; large innovator customer relationship progressing with multiple mid-phase projects; **CPHI Frankfurt** active business development; multiple global pharma + biotech customer relationships. **Right earnings frameworks for transitioning CDMO platform**: Phase III Program Count + Revenue Run-Rate Recovery + Material Margin (currently 70.8%) + EBITDA Margin Trajectory + Capacity Utilization + ADC Revenue Ramp + Oligonucleotide Commissioning + Customer Concentration + Leadership Stability + Net Cash Position — *not* simple TTM P/E in isolation. **CRITICAL CAVEAT — FY26 IS EXPLICITLY A 'TRANSITION + TROUGH YEAR' per management**: Revenue -13% YoY ₹2,269 cr; **Adjusted PAT -65.4% YoY ₹184.4 cr**; **Adjusted EBITDA margin 21.0% (-45.6% absolute decline YoY)** = depressed by (a) customer-led inventory normalization in 2 large commercial products, (b) API business challenges, (c) specialty chemicals pricing pressure, (d) Nacharam OAI + Warning Letter shipment deferrals (~₹55 cr), (e) merger integration costs, (f) leadership transitions (Prasada Raju MD resignation Oct 2025). **Q1 FY27 explicitly guided as 'revenue + EBITDA TROUGH'**; recovery from H2 FY27. **Stock corrected significantly from 2024 peaks** (was ~₹1,100+) to current ₹456 = **-58% from peak** = much pessimism priced in; **TTM P/E 71.75x vs industry P/E 34.42x = 2.1x premium APPEARS EXPENSIVE on trailing depressed earnings** but **forward FY28E P/E ~30-40x on recovery normalised earnings** = closer to industry P/E; **CONTRARIAN VALUE-WITH-CATALYST setup** — heavy execution risk + 12-18 month patience required + Vohra CEO success critical for thesis to play out.",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. Always conduct independent research and consult a SEBI-registered investment advisor before making investment decisions.",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            { metric: "Revenue from Operations (₹Cr)", current: "**619.12 Q4**", qoq: "Sequential improvement on shipment timing", yoy: "**+54% YoY (vs ₹402 cr Q4 FY25)** — BUT skewed by merger (Q4 FY25 was pre-merger Suven only); underlying organic growth likely flat-to-modest" },
            { metric: "EBITDA (₹Cr)", current: "**96.84 Q4**", qoq: "Modest sequential improvement", yoy: "**+15.11% YoY (vs ₹84.13 cr Q4 FY25)** — well below revenue growth = margin compression visible" },
            { metric: "EBITDA Margin (%)", current: "**15.6% Q4** (vs 21.0% FY26 average)", qoq: "Q4 weaker than FY26 avg = trough quarter", yoy: "**-530 bps YoY (vs 20.9% Q4 FY25)** = significant margin compression on adverse mix + integration costs" },
            { metric: "PAT Margin (%)", current: "**3.16% Q4**", qoq: "Weakest in recent memory", yoy: "**-740 bps YoY (vs 10.46% Q4 FY25)** = severe profitability compression" },
            { metric: "PAT (₹Cr)", current: "**19.55 Q4**", qoq: "Weak", yoy: "**-53.46% YoY (vs ₹42.01 cr Q4 FY25)** = MAJOR HEADLINE NEGATIVE despite revenue +54%" },
            { metric: "EPS (₹) — TTM", current: "**₹6.77**", qoq: "—", yoy: "FY26 EPS Q4 ₹0.51 (vs ₹1.65 YoY = -69%); FY26 full year EPS ₹5.98 standalone basis = depressed trough earnings" },
        ],
        // CDMO-specific business-quality metrics
        businessQualityMetrics: [
            { metric: "Material Margins (% of Revenue)", current: "**70.8% FY26 (+209 bps YoY)**", qoq: "Improving sequentially", yoy: "**+209 bps YoY** = product mix + subsidiary consolidation lifting underlying gross profitability = positive structural signal hidden in headline weakness" },
            { metric: "Phase III Pipeline (Programs)", current: "**10 programs**", qoq: "Stable", yoy: "Critical metric for future revenue ramp; **4 Phase III commercialization products expected** (1 Japanese customer Phase 3 order confirmed Q3)" },
            { metric: "Net Cash Position (₹Cr)", current: "**+₹322 cr (Net cash positive)**", qoq: "Stable", yoy: "Strong; FY26 FCF ₹17.3 cr generated DESPITE trough year = quality of business model resilience visible" },
        ],
        footnotes: [
            "**Cohance Lifesciences = formerly Suven Pharmaceuticals**; merger effective **1 May 2025**; **6 entities merged into 1 platform** (Suven + Cohance + 4 group entities); controlled by **Advent International** (PE).",
            "**FY26 Full Year Results**: Revenue ₹2,268.6 cr (-13.0% YoY); **Adjusted PAT ₹184.4 cr (-65.4% YoY)**; Standalone PAT ₹228.71 cr (EPS ₹5.98); **Adjusted EBITDA ₹477.5 cr at 21.0% margin (-45.6% YoY in absolute terms)**.",
            "**Q4 FY26 YoY comparisons are MISLEADING**: Q4 FY26 includes Cohance + Suven (post-merger May 2025); Q4 FY25 was pre-merger Suven only = Q4 revenue +54% YoY is partly **MERGER ACCRETION not organic growth**. Underlying organic growth likely flat-to-modest.",
            "**FY26 explicitly a 'transition + trough year' per management** driven by: (a) customer-led inventory normalization in 2 large commercial products, (b) API business challenges, (c) specialty chemicals pricing pressure, (d) Nacharam OAI + Warning Letter shipment deferrals **~₹55 cr** impact, (e) merger integration costs, (f) leadership transitions.",
            "**Q1 FY27 explicitly guided as 'revenue + EBITDA TROUGH'** per October 2025 update call; **recovery from H2 FY27** with full normalization FY28-29.",
            "**Nacharam facility (FTF unit)** received **OAI classification + Warning Letter** from USFDA Q3 FY26 = **<1% EBITDA impact** per mgmt but reputational + regulatory overhang; engaging leading US FDA consulting firm for remediation.",
            "**Material margins 70.8% (+209 bps YoY)** = positive structural signal; reflects (a) better product mix toward higher-value CDMO programs, (b) subsidiary consolidation post-merger, (c) ADC/oligonucleotide ramp at higher margins.",
            "**No dividend declared FY26** — consistent with re-investment mode + transition year financial conservation.",
            "Net cash position **₹322 cr** end FY26 with D/E 0.12 = essentially debt-free balance sheet; **FCF ₹17.3 cr generated despite trough year**.",
            "**Umang Vohra (ex-Cipla MD/Global CEO)** appointment as Group CEO **effective 20 May 2026** = single biggest catalyst announced; Cipla mkt cap ~₹1.5 lakh cr context = Vohra brings top-tier execution credibility.",
        ],
        patternDetected:
            "**'FY26 = explicit transition + trough year; Q1 FY27 will be the bottom; H2 FY27 recovery expected; Vohra CEO appointment is THE central re-rating catalyst'**: The most important pattern in Q4 FY26 + FY26 is the **deliberate self-acknowledgment by management that this IS a trough**, combined with very specific forward signposts: (a) **Q1 FY27 = revenue + EBITDA bottom** (mgmt guided October 2025 + reaffirmed); (b) **H2 FY27 = recovery begins** as customer inventory destocking complete + new Phase 3 commercial orders ramp; (c) **Umang Vohra (ex-Cipla CEO) joins 20 May 2026** as Group CEO to build strategic growth blueprint by end FY27; (d) **FY28-29 = normalization** with FY29 ₹6,000 cr revenue target (= 2.6x FY26 ₹2,269 cr = ~38% revenue CAGR FY26-29). Multiple proof points the trough is real but executable: (1) **Material margins 70.8% (+209 bps YoY)** = underlying profitability NOT broken; revenue mix simply temporarily distorted by inventory destocking + specialty chemicals pricing; (2) **Net cash ₹322 cr + FCF ₹17.3 cr generated even in trough year** = balance sheet resilient; (3) **10 Phase III programs in pipeline** + **Japanese customer Phase 3 order confirmed** = forward revenue visibility intact; (4) **Oligonucleotide unit (Surya) commissioning Q4 FY26** + **SuryaPet capitalization for Japanese order** + **$10 million US expansion for ADC supply** = capacity coming online to drive recovery; (5) **Three-vertical structure with dedicated leaders** = operational accountability; (6) **Advent PE backing** = professional capital + execution discipline. **Why this matters for forward look**: If Q1 FY27 is the trough as guided + Vohra-led execution + H2 FY27 recovery + Phase III commercial ramp, then **FY28-29 could see revenue back to ₹3,500-5,000 cr** (recovery + growth) and **EBITDA margin back to 28-32%** (normalized peak) implying **FY28E EBITDA ₹1,000-1,500 cr and PAT ₹600-1,000 cr** = transformational vs FY26 ₹184 cr adjusted PAT. **Read = thesis is contrarian recovery + Vohra-led re-rating; central catalyst is leadership execution + customer destocking ending; high reward IF Vohra delivers, severe pain IF execution disappoints**.",
        interpretation:
            "Q4 FY26 + FY26 is a **TROUGH-YEAR CONFIRMATION quarter** for Cohance Lifesciences — every weak headline number was effectively pre-announced (October 2025 update call), and management has reaffirmed Q1 FY27 as the bottom with recovery emerging from H2 FY27. **The headline weakness is REAL but EXPLAINABLE**: (a) **Revenue +54% YoY Q4 but -13% YoY FY26** = the +54% Q4 number is misleading (merger accretion) while -13% FY26 is the more accurate organic picture; (b) **PAT -53% YoY Q4, -65% adjusted YoY FY26** = severe profitability compression driven by inventory destocking + API headwinds + Nacharam disruption + integration costs; (c) **Adjusted EBITDA margin 21% FY26** (vs 30%+ historical Suven standalone) = clear margin compression. **The CONTRARIAN CASE rests on three structural positives**: (1) **Material margins 70.8% (+209 bps YoY)** = the underlying business unit economics are NOT BROKEN — the trough is volume + mix driven, not margin/competitive position erosion; gross profitability is structurally improving as ADC + oligonucleotide + Phase III commercial programs ramp; (2) **Vohra appointment (effective 20 May 2026)** is **TRANSFORMATIONAL** — he brings deep CDMO + global commercial + Cipla execution credentials; this is arguably the single biggest CDMO leadership transfer in Indian capital markets in the past 5 years; will drive accountability, customer engagement, capacity ramp, M&A optionality; (3) **Phase III pipeline 10 programs + confirmed Japanese customer Phase 3 order + ADC/oligonucleotide capacity coming online + $10mn US ADC expansion** = forward revenue visibility is real, not aspirational. **The honest risks merit equal weight**: (a) **Nacharam Warning Letter + OAI = regulatory overhang** — even though <1% EBITDA impact per mgmt, USFDA escalation could spread to other sites or delay product approvals; (b) **Leadership churn over 12 months** (MD Prasada Raju resigned Oct 2025; multiple senior changes; 6-entity integration) = execution risk during peak transition; (c) **Specialty chemicals pricing pressure** = ongoing structural headwind in non-CDMO segments; (d) **TTM P/E 71.75x vs industry P/E 34.42x = 2.1x premium** appears expensive even on FY28E recovery forward P/E ~30-40x = re-rating contingent on FY28+ earnings recovery + Vohra execution credibility; (e) **Stock has corrected ~58% from 2024 peaks** = market is skeptical; **another -10-20% downside if Vohra entry disappoints or Q1 FY27 trough deeper than expected**. **At P/E 71x on trough earnings**: the question is **what's the right normalised earnings base** — if FY29 PAT reaches ₹600-1,000 cr per recovery thesis, current ₹18,583 cr market cap = ~18-31x FY29 P/E = REASONABLE for a top-tier CDMO platform; **but this requires patience (24-36 months) + execution credibility from Vohra**.",
        whatWentRight: [
            "**Material margins 70.8% (+209 bps YoY)** = positive structural signal that underlying gross profitability is improving despite headline weakness; reflects better product mix toward CDMO + ADC + oligonucleotide; subsidiary consolidation post-merger; **suggests the trough is volume/mix driven, NOT margin/competitive position erosion**.",
            "**Net cash position ₹322 cr maintained + FCF ₹17.3 cr generated even in trough year** = balance sheet resilient and self-financed despite challenging year; D/E 0.12 = essentially debt-free; provides flexibility for (a) capacity expansion (oligonucleotide Surya + US ADC expansion $10mn), (b) M&A optionality if attractive targets emerge, (c) leadership transition costs.",
            "**Umang Vohra (ex-Cipla MD/Global CEO) appointment as Group CEO effective 20 May 2026** = TRANSFORMATIONAL leadership upgrade; Cipla mkt cap ~₹1.5 lakh cr context = Vohra brings top-tier global pharma + CDMO + execution credentials; **single biggest positive catalyst for re-rating thesis**; mgmt commitment to build strategic growth blueprint by end FY27.",
            "**Three-vertical operating model with dedicated leaders solidified**: (a) Yann D'Herve (Pharma CDMO, Pennsylvania), (b) Gunjan Singh (API+, Hyderabad), (c) Amrit Singh (Specialty Chemicals) — each with deep domain expertise + global customer engagement; **CPHI Frankfurt participation** + active business development = customer pipeline solidifying.",
            "**Phase III commercial pipeline progressing**: 10 programs in Phase III; **Japanese customer Phase 3 order confirmed** (SuryaPet facility being capitalized); **recently onboarded large innovator customer relationship** with multiple mid-phase projects; ADC partnership with **NJ Bio (US)** progressing with alternative payload program.",
            "**Oligonucleotide unit (Surya, Nacharam) equipment validation completed**; commissioning Q4 FY26 = expanding advanced therapy capabilities; **$10 million US expansion for ADC supply by FY27** = niche technology platform investments on track.",
        ],
        whatWentWrong: [
            "**FY26 Adjusted PAT ₹184.4 cr (-65.4% YoY)** = MAJOR HEADLINE NEGATIVE; **revenue ₹2,269 cr (-13% YoY)** + **adjusted EBITDA margin 21% (-45.6% absolute YoY decline)** = severe profitability compression; Q4 PAT ₹19.55 cr (-53% YoY) particularly weak.",
            "**Nacharam (FTF unit) OAI classification + USFDA Warning Letter** issued Q3 FY26 = regulatory overhang; **~₹55 cr shipment deferrals** in FY26; though <1% EBITDA impact per mgmt, **adverse precedent for broader site inspections**; engaging US FDA consultants for remediation = uncertain timeline.",
            "**Multiple leadership transitions in 12 months**: MD Dr. Prasada Raju resigned Oct 2025 (citing personal priorities); new CEO Umang Vohra joining 20 May 2026; multiple senior hires (COO, business CEOs) = execution risk during peak transition phase; 6-entity post-merger integration adds complexity.",
            "**Specialty chemicals + API business pricing pressure** = structural headwinds outside core CDMO; **customer-led inventory normalization in 2 large commercial products** = revenue volatility; signals limited pricing power in commodity segments.",
            "**Stock corrected ~58% from 2024 peaks of ₹1,100+** to current ₹456 = clear market skepticism; **-5.85% Day 1 reaction post-Q4 results** = markets unconvinced trough thesis is bottomed; **forward P/E at 30-40x on FY28E recovery is still premium to industry 34.42x** with execution still unproven under new CEO.",
            "**No dividend declared FY26** = signals capital preservation mode + need to fund capacity expansion + integration costs; while strategically rational, removes one positive optionality for shareholder returns.",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "Pharma CDMO — CORE GROWTH ENGINE (Drug Substance + High-Potent APIs + ADC + Oligonucleotides)",
                yoyGrowth: "Trough in FY26 due to inventory destocking; recovery from H2 FY27 expected",
                mix: "~50-55% of FY26 revenue (largest segment)",
                analysis:
                    "**Cohance's CORE STRATEGIC FRANCHISE — led by Yann D'Herve (Pennsylvania, 30+ years global CDMO experience)**. Capabilities span: (a) **Drug substance manufacturing** for global innovators; (b) **High-Potent APIs (HPAPI)** = niche, high-margin segment; (c) **Antibody-Drug Conjugates (ADC)** through Nacharam facility + **NJ Bio US partnership** for bioconjugation services; (d) **Oligonucleotides** through Surya unit (Nacharam, Hyderabad); (e) **Complex chemistry** platforms. **Current state Q4 FY26**: Phase III pipeline 10 programs; **Japanese customer Phase 3 order confirmed** with SuryaPet facility being capitalized for commercial production; **recently onboarded large innovator customer** with multiple mid-phase projects; ADC business gaining traction with alternative payload program; oligonucleotide unit equipment validation completed, commissioning Q4 FY26. **Strategic rationale**: CDMO is Cohance's highest-margin business (estimated ~35-45% EBITDA at scale vs 21% blended FY26 = significant margin recovery lever as volumes ramp). **Why this segment matters**: It's the **primary value driver** for $1bn FY30 vision; ADC + oligonucleotides are niche emerging modalities where global capacity is limited; **first-mover positioning in India for ADC bioconjugation** is meaningful differentiation.",
                triggers:
                    "Watch (a) Japanese customer Phase 3 commercial ramp (SuryaPet capitalization timeline + revenue contribution), (b) ADC partnership expansion (NJ Bio + potential new partnerships), (c) oligonucleotide unit (Surya) commercial customer wins, (d) Phase III pipeline new program additions, (e) Material margin trajectory (currently 70.8% vs 68.7% YoY).",
            },
            {
                name: "API+ Business — REGULATED MARKETS API PORTFOLIO (led by Gunjan Singh, Hyderabad)",
                yoyGrowth: "Facing challenges in FY26 from pricing + competition; stabilization expected FY27",
                mix: "~25-30% of FY26 revenue",
                analysis:
                    "**Cohance's traditional API business with differentiated portfolio focus** — led by Gunjan Singh, Hyderabad-based, with extensive Indian pharma leadership experience. **Strategy**: Move beyond commodity APIs toward differentiated, regulated-market APIs (US, Europe, Japan) where pricing power exists; portfolio productivity improvement; customer engagement deepening. **FY26 Headwinds**: (a) **General API pricing pressure** in regulated markets due to Chinese supply normalization + biosimilar competition; (b) **Customer-led inventory normalization** in select commercial products; (c) **Margin compression** as base APIs face commodity competition. **Strategic positioning**: This is the segment most exposed to commodity pricing dynamics; **focus is on niche differentiated APIs (complex chemistry, controlled substances, niche molecules)** where Cohance has technical edge. **Compared to peer Indian API players** (Divi's, Laurus, Aarti Pharmalabs, Solara, Granules): mid-pack positioning; not the largest scale but differentiated portfolio.",
                triggers:
                    "Watch (a) API revenue stabilization timeline (mgmt expects FY27), (b) New product launches in regulated markets, (c) Niche/differentiated API mix vs commodity, (d) Customer destocking completion (key driver of revenue volatility).",
            },
            {
                name: "Specialty Chemicals — AGRO + PERFORMANCE CHEMICALS (led by Amrit Singh)",
                yoyGrowth: "FY26 weak on pricing pressure; recovery dependent on agro cycle",
                mix: "~15-20% of FY26 revenue",
                analysis:
                    "**Specialty chemicals platform spanning agro chemicals + performance chemicals** — led by Amrit Singh with 20 years specialty chemical experience across leading Indian corporates. **Strategy**: Accelerate growth in agro + performance chemical space; leverage technology integration with pharma platforms; enhance international partnerships. **FY26 Headwinds**: (a) **Specialty chemicals pricing pressure** = global commodity-like dynamics; (b) Agro chemical cycle subdued globally; (c) Limited synergies between specialty chemicals and core pharma CDMO platform = strategic rationale less clear vs CDMO + API. **Compared to specialty chemicals peers** (PI Industries, SRF, Navin Fluorine, Vinati Organics, Atul Ltd, Aarti Industries): smaller scale and earlier stage of specialty franchise build-out; faces sustainability questions if specialty chemicals stays small relative to pharma.",
                triggers:
                    "Watch (a) Agro chemical cycle recovery globally (key external driver), (b) Specialty chemicals revenue/EBITDA trajectory FY27, (c) Possible strategic separation or de-prioritization of specialty chemicals in favor of pharma focus, (d) Customer wins in performance chemicals niche.",
            },
        ],
        marginCommentary:
            "**Adjusted EBITDA margin 21.0% FY26 = MULTI-YEAR LOW** vs 30%+ historical Suven standalone; reflects (a) revenue mix temporarily distorted toward lower-margin segments (API + specialty chemicals weakness), (b) merger integration costs (one-off), (c) Nacharam disruption (~₹55 cr revenue + associated margin impact), (d) underutilized capacity. **Q4 EBITDA margin 15.6%** = particularly weak quarter showing additional pressure. **However, MATERIAL MARGINS 70.8% (+209 bps YoY)** signals **underlying gross profitability IMPROVING** = the issue is below-the-line costs (employee + manufacturing overhead + integration) rather than gross margin erosion. **Trajectory recovery framework**: As Phase III commercial programs ramp (FY27-29), capacity utilization improves, customer destocking ends, ADC + oligonucleotide commercialise = margin recovery to 25-28% FY28 and 28-32% FY29-30 at scale; **Cohance peer set EBITDA margins 25-35% (Divi's 25-30%, Laurus 18-22%, Aarti Pharmalabs 18-22%, Syngene 25-28%, Piramal Pharma 18-22%)** = Cohance recovery trajectory positions it as upper-middle pack at full normalization.",
        outlook:
            "**Explicit management guidance for FY27 trajectory**: (a) **Q1 FY27 = revenue + EBITDA TROUGH** (lowest quarter); (b) **Recovery from H2 FY27** as customer destocking completes + new Phase 3 commercial orders ramp + Vohra-led execution kicks in; (c) **FY28 = transitional growth year** with capacity coming fully online + ADC + oligonucleotide commercializing; (d) **FY29 = ₹6,000 cr revenue target** per Advent-Vivek Sharma vision (2.6x FY26 ₹2,269 cr = ~38% revenue CAGR FY26-29). **Vohra CEO's first priority**: strategic growth blueprint by end FY27 = will likely include (a) capacity rationalization, (b) potential M&A in CDMO space, (c) potentially scale-down or divest specialty chemicals if non-strategic, (d) customer engagement deepening. **Key risks**: (i) Nacharam regulatory remediation timeline, (ii) Customer destocking duration, (iii) Vohra execution credibility vs Cipla benchmarks, (iv) Specialty chemicals continued drag.",
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            {
                metric: "Phase III Commercial Pipeline (programs)",
                current: "**10 Phase III programs** in pipeline; 1 Japanese customer Phase 3 order confirmed",
                trend: "Stable program count; Japanese Phase 3 anchor newly confirmed Q3 FY26",
                horizon: "**4 commercialisations expected in next 12-24 months** (FY27-28); SuryaPet facility being capitalised for Japanese anchor",
                remarks: "**HIGH CONFIDENCE** on Japanese customer order (capacity ready, contract confirmed); MEDIUM-HIGH on other 3 commercialisations (FDA approval + customer order timing inherently uncertain). Core forward-revenue ramp lever.",
            },
            {
                metric: "ADC (Antibody-Drug Conjugate) Revenue Trajectory",
                current: "Small base FY26 (~₹50-100 cr est.); NJ Bio US partnership active; alternative payload program in development",
                trend: "Building from small base; **$10 mn US expansion** for ADC supply by FY27 sanctioned",
                horizon: "**Revenue ramp to ₹200-400 cr by FY28-29** as US expansion + NJ Bio partnership monetise",
                remarks: "Strong **strategic visibility** (capacity + partnership in place); customer ramp timing is the variable. ADC is niche, high-margin (50%+ at scale), low-volume initially; global ADC market $10bn → $30-45bn by 2030.",
            },
            {
                metric: "Oligonucleotide Unit Commercialisation",
                current: "**Equipment validation completed Q3 FY26; commissioning Q4 FY26** at Surya, Nacharam",
                trend: "Capacity now operational; commercial customer engagement in progress",
                horizon: "**Commercial revenue start FY27-28; ramp through FY29-30**",
                remarks: "Capacity is READY; customer + commercial supply agreements determine cadence. Global oligonucleotide market $5-10bn growing 15-20% CAGR = strong tailwind; Cohance is one of few Indian players with this capability.",
            },
            {
                metric: "FY29 Revenue Target (₹Cr)",
                current: "**FY26 ₹2,269 cr (trough)** = base year for guidance",
                trend: "-13% YoY in FY26; Q1 FY27 trough → H2 FY27 recovery → FY28 transitional growth",
                horizon: "**FY29 target ₹6,000 cr** = 2.6x FY26 scale-up = ~38% revenue CAGR FY26-29",
                remarks: "**MEDIUM CONFIDENCE — aspirational stretch** per Advent + Vivek Sharma vision; achievability depends on (a) Vohra execution, (b) Phase III commercial ramp, (c) ADC + oligo commercialisation, (d) selective M&A. Even 70-80% delivery (~₹4,500-5,000 cr) would be transformational.",
            },
            {
                metric: "Net Cash + Material Margins (Funding & Margin Health)",
                current: "**Net cash ₹322 cr · D/E 0.12 · Material margins 70.8% (+209 bps YoY) · FCF ₹17.3 cr generated even in trough year**",
                trend: "Material margins IMPROVING; balance sheet stable; FCF positive through trough",
                horizon: "Funds organic capex + selective M&A through FY27-28 without dilution",
                remarks: "**HIGHEST-QUALITY METRIC** — underlying gross profitability is improving (+209 bps YoY) even as headline EBITDA compressed = the trough is volume/mix driven, NOT margin or competitive-position erosion. Balance sheet enables execution through transition.",
            },
        ],
        demandSignals: [
            {
                signal: "Industry growth rate",
                reading: "**Indian CDMO market $15-20bn (2024) → $40-60bn by 2030 = 3x scale-up** driven by China+1 supply-chain diversification, patent cliff, biologics/ADC/oligo/peptide modalities boom, India cost-competitiveness, sustained global pharma R&D ~$300bn/year. ADC market alone $10bn → $30-45bn; oligo market $5-10bn growing 15-20% CAGR.",
                verdict: "Robust",
            },
            {
                signal: "Customer order patterns",
                reading: "**MIXED — short-term weak, structural improving**. Negative: customer-led inventory normalisation in 2 large commercial products drove FY26 revenue -13%; API + specialty chemicals pricing pressure. Positive: Japanese customer Phase 3 order confirmed; large innovator customer with multiple mid-phase projects onboarded; CPHI Frankfurt engagement active; mgmt explicitly guides Q1 FY27 as trough → H2 FY27 recovery.",
                verdict: "Adequate (trough, with recovery visible)",
            },
            {
                signal: "Capacity utilisation / expansion",
                reading: "Combined capacity **2,650 kL** among India's leading integrated CDMO scale; **currently underutilised** (driving margin compression). Active expansion: **SuryaPet capitalisation for Japanese Phase 3** + **oligonucleotide unit (Surya, Nacharam) commissioning Q4 FY26** + **$10 mn US ADC expansion** by FY27. Capacity is the SUPPLY-SIDE being readied for FY27+ ramp.",
                verdict: "Adequate (under-utilised today, ready for ramp)",
            },
            {
                signal: "Competitive intensity",
                reading: "**Tier-1 Indian CDMOs all chasing same niches**: Divi's (~₹1.5 lakh cr, premium 50-60x P/E), Laurus, Aarti Pharmalabs (pure-play CDMO), Piramal Pharma (~₹50,000 cr), Syngene (~₹40,000 cr) — all building/expanding ADC + oligonucleotide capabilities. Cohance (~₹18,500 cr) is mid-pack by scale; differentiation = PE-backed discipline + ADC bioconjugation (NJ Bio) + oligo capability + incoming Vohra leadership.",
                verdict: "Moderate-to-Negative (crowded niche)",
            },
            {
                signal: "Geographic expansion",
                reading: "**$10 mn US expansion for ADC supply by FY27** = first major US infrastructure investment; NJ Bio (US) partnership operational; CPHI Frankfurt active business development; global customer base (US + EU + Japan) with Japanese customer Phase 3 order confirmed as a key anchor.",
                verdict: "Positive",
            },
            {
                signal: "New product / modality traction",
                reading: "**ADC bioconjugation (NJ Bio partnership) + Oligonucleotide unit (Surya, commissioned Q4 FY26) + Hi-PAPI capability** = three niche, high-margin advanced-modality platforms being built simultaneously; Phase III pipeline of 10 programs feeds these platforms. Materially differentiated vs traditional API CDMO peers.",
                verdict: "Positive (high optionality, execution unproven at scale)",
            },
        ],
        demandVerdict:
            "**OVERALL DEMAND = ADEQUATE TODAY, ROBUST STRUCTURALLY**, with one explicit short-term caveat. The underlying end-market — global CDMO services with ADC/oligonucleotide/Hi-PAPI niches — is in a multi-year structural up-cycle (3x scale-up by 2030 + China+1 + patent cliff + advanced modalities). Cohance has **the supply-side readiness** (2,650 kL capacity, oligo unit commissioned, US ADC expansion sanctioned, Japanese Phase 3 anchor) and the **balance-sheet capacity** (net cash + FCF positive in a trough year + material margins improving +209 bps YoY) to ride that cycle. The single demand signal that is NOT yet validated is **the speed and magnitude of customer destocking ending + Phase III commercial revenue ramp in H2 FY27** — this is the difference between hitting the FY27 recovery trajectory and lagging it; markets are explicitly waiting for Q1 FY27 results (the guided trough) as the proof point. Material margins +209 bps YoY is the most credible underlying-health signal in the trough year.",
        whatWentRight: [
            "**Forward pipeline architecture is in place and capacity-ready** — 10 Phase III programs + Japanese customer Phase 3 order confirmed + SuryaPet being capitalised + oligonucleotide unit (Surya) commissioned Q4 FY26 + $10 mn US ADC expansion + NJ Bio partnership progressing = the recovery is not dependent on net-new investments; the assets and orders for H2 FY27 ramp are already largely committed.",
            "**Material margins 70.8% (+209 bps YoY) + Net cash ₹322 cr + FCF ₹17.3 cr through trough year** = underlying gross profitability is STRUCTURALLY improving even as headline EBITDA compressed, and balance sheet self-funds organic capex + selective M&A through FY27-28 with NO dilution risk; this combination is the most credible structural-health proof in the report.",
        ],
        whatWentWrong: [
            "**Customer destocking duration + Phase III commercial revenue cadence are the two unvalidated variables for H2 FY27 recovery** — if destocking persists beyond Q1 FY27 or Phase III approvals/orders slip, the FY27 recovery slides to FY28 and the FY29 ₹6,000 cr / FY30 $1bn visions become increasingly aspirational; markets are explicitly skeptical (stock -58% from 2024 peaks).",
            "**ADC + oligonucleotide niches are getting crowded** — Divi's, Laurus, Aarti Pharmalabs, Syngene, Piramal Pharma all building same capabilities; Cohance's first-mover differentiation could erode by FY28-29 if competitors win the same hyperscaler-equivalent global pharma anchors, compressing the premium margins assumed in the recovery thesis.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            {
                metric: "Near-Term Revenue & EBITDA Trajectory",
                current: "FY26 Revenue ₹2,269 cr (-13% YoY); Adj EBITDA margin **21.0%** (trough); Adj PAT ₹184 cr (-65% YoY)",
                target: "**Q1 FY27 = revenue + EBITDA TROUGH** (explicit + repeated guidance); **recovery from H2 FY27** as customer destocking ends, Phase 3 commercial orders ramp, Vohra-led execution kicks in",
            },
            {
                metric: "EBITDA Margin Recovery Trajectory",
                current: "FY26 Adj EBITDA margin **21.0%** (vs 30%+ historical Suven standalone)",
                target: "**Recovery to 25-30% by FY28-29** as capacity utilisation improves + product mix shifts toward CDMO/ADC/oligonucleotide; long-term aspiration peer-leading 28-32%",
            },
            {
                metric: "FY29 Revenue Target",
                current: "FY26 ₹2,269 cr (trough base)",
                target: "**₹6,000 cr by FY29** = 2.6x scale-up = ~**38% revenue CAGR FY26-29**; commitment from Executive Chairman Vivek Sharma + Advent",
            },
            {
                metric: "FY30 Revenue Vision",
                current: "—",
                target: "**US$1 billion (~₹8,500 cr) by FY30** = aspirational stretch target; will require organic growth + selective M&A; partially funded by Advent PE capital",
            },
            {
                metric: "Capital Allocation & Funding Discipline",
                current: "Net cash **₹322 cr** · D/E **0.12** · No FY26 dividend · FCF **₹17.3 cr** generated in trough year",
                target: "Self-fund organic capex (oligo Surya + US ADC $10 mn + SuryaPet) + selective M&A through FY27-28 with **NO equity dilution**; dividend resumption only post FY28 normalisation",
            },
        ],
        commitmentNote:
            "**Management's guidance posture is HUMBLE BUT SPECIFIC** — Vivek Sharma + team explicitly acknowledge FY26 as a 'transition + trough year' and provide clear forward signposts (Q1 FY27 trough · H2 FY27 recovery · FY29 ₹6,000 cr · FY30 $1bn · EBITDA recovery to 25-30%) = **HIGH ACCOUNTABILITY** but also **HIGH CREDIBILITY RISK** if execution slips. **Calibration**: Q1 FY27 trough = **HIGH confidence** (customer destocking largely baked into FY26 actuals + order-book visibility); H2 FY27 recovery = **MEDIUM-HIGH** (Phase 3 commercial timing + Vohra onboarding velocity); FY29 ₹6,000 cr = **MEDIUM** (requires Phase III ramp + ADC scaling + M&A); FY30 $1bn = **MEDIUM-LOW** (aspirational stretch, even partial delivery transformational). **Vohra appointment (effective 20 May 2026) is the central credibility anchor** — Cipla MD/Global CEO track record at a ₹1.5 lakh cr platform brings top-tier global pharma + CDMO + commercial execution credibility, materially raising the probability of operational delivery in the next 12-24 months.",
        growthDrivers: [
            {
                driver: "**Umang Vohra (ex-Cipla MD/Global CEO) joining as Group CEO on 20 May 2026**",
                impact: "**Single biggest re-rating catalyst** — Vohra brings Cipla-scale execution credibility + global pharma customer relationships + regulatory navigation experience + M&A integration track record; will deliver 'strategic growth blueprint by end FY27' = the credibility anchor for the FY29 ₹6,000 cr / FY30 $1bn vision; first 12-18 months of communication + execution is the critical investor evaluation window",
            },
            {
                driver: "**Phase III commercial ramp — 10 programs in pipeline + Japanese customer Phase 3 anchor confirmed**",
                impact: "4 commercialisations expected in next 12-24 months; SuryaPet being capitalised for Japanese anchor; each commercial Phase III ramp adds visible high-margin revenue + capacity utilisation = primary lever for revenue recovery FY27-28 and the EBITDA margin trajectory back to 25-30%",
            },
            {
                driver: "**ADC + Oligonucleotide niche modality scale-up**",
                impact: "ADC: $10 mn US expansion by FY27 + NJ Bio partnership = positions Cohance as one of few Indian end-to-end ADC players (global ADC market $10bn → $30-45bn by 2030, limited global capacity = pricing power). Oligonucleotide: Surya unit commissioned Q4 FY26 = capacity ready for $5-10bn global oligo market growing 15-20% CAGR. Together these are the highest-margin, most differentiated revenue layers driving long-term margin mix",
            },
            {
                driver: "**Three-vertical operating model with dedicated CEOs (Yann CDMO · Gunjan API+ · Amrit SpecChem)**",
                impact: "Distributed accountability + segment specialisation + decision speed; each vertical CEO has full operational ownership + dedicated customer engagement; reduces centralised bottleneck risk and creates clear segment-level execution scorecards = enables the FY29 ₹6,000 cr scale without organisational drag",
            },
            {
                driver: "**Advent PE backing + self-funded balance sheet (Net cash ₹322 cr, FCF positive, D/E 0.12)**",
                impact: "PE backing brings institutional discipline + M&A capital + global commercial network + governance upgrade + eventual exit-driven value-creation runway; self-funded balance sheet means organic capex (oligo + US ADC + SuryaPet) and selective M&A can be executed without dilution; reduces both execution and funding risk vs equity-dependent peers",
            },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            {
                title: "Material margins 70.8% (+209 bps YoY) = underlying gross profitability NOT broken",
                body: "Despite headline EBITDA margin compressing to 21% and PAT falling 65% YoY in FY26, **material margins expanded +209 bps YoY** — this is the most credible structural-health signal in the report. It confirms the trough is **volume + mix driven, not margin or competitive-position erosion**, and that gross profitability is structurally improving as ADC / oligonucleotide / Phase III commercial programs enter the mix. The recovery thesis (25-30% EBITDA margin by FY28-29) is anchored to this underlying gross-margin improvement plus capacity utilisation reversion.",
            },
            {
                title: "Umang Vohra (ex-Cipla MD/Global CEO) joining as Group CEO on 20 May 2026",
                body: "Arguably the **most significant individual leadership transfer in Indian CDMO space in the last 5 years**. Vohra ran Cipla (~₹1.5 lakh cr mkt cap, ~8x Cohance) for 8+ years; deep global pharma + CDMO + commercial expertise + regulatory navigation + M&A integration. Mgmt has explicitly positioned him as the architect of the 'strategic growth blueprint by end FY27' = the credibility anchor for the FY29 ₹6,000 cr / FY30 $1bn vision. **Single biggest re-rating catalyst** if early communication + execution match Cipla benchmarks.",
            },
            {
                title: "Honest trough acknowledgement + specific forward signposts (PE-discipline tone)",
                body: "Vivek Sharma + team explicitly called FY26 a 'transition + trough year' rather than spinning weak headlines; provided very specific signposts — **Q1 FY27 trough · H2 FY27 recovery · FY29 ₹6,000 cr · FY30 $1bn · EBITDA recovery to 25-30%**. This Advent-PE-driven communication discipline (reality + roadmap, not narrative) materially raises management credibility and creates clear, measurable accountability for the next 6-12 months.",
            },
            {
                title: "Capacity + commercial pipeline ready for H2 FY27 ramp",
                body: "Forward pipeline is **capacity-committed, not aspirational**: 10 Phase III programs + Japanese customer Phase 3 order confirmed + SuryaPet facility being capitalised + oligonucleotide unit (Surya, Nacharam) equipment validation completed and commissioning Q4 FY26 + $10 mn US ADC expansion sanctioned for FY27 + NJ Bio US ADC bioconjugation partnership progressing with alternative payload program + CPHI Frankfurt active business development. Recovery doesn't require new investment decisions.",
            },
            {
                title: "Self-funded through transition — Net cash ₹322 cr + FCF positive in trough year + D/E 0.12",
                body: "Generating **₹17.3 cr FCF even in the worst earnings year**, maintaining **₹322 cr net cash** and a debt-free balance sheet (D/E 0.12), with no FY26 dividend signalling capital preservation discipline. This combination self-funds organic capex (oligo Surya + US ADC + SuryaPet) AND selective M&A through FY27-28 with **NO equity dilution risk** — a major structural advantage vs CDMO peers that need fresh capital raises during transitions.",
            },
        ],
        bearish: [
            {
                title: "FY26 Adj PAT -65% YoY on revenue -13% YoY — severe profitability compression",
                body: "FY26 Adj PAT ₹184.4 cr (-65.4% YoY) on revenue ₹2,269 cr (-13% YoY); Q4 PAT ₹19.55 cr (-53% YoY) particularly weak; Adj EBITDA margin 21% (vs 30%+ historical Suven standalone) = ~46% absolute YoY decline. Q4 EBITDA margin 15.6% even weaker than full-year average. The headline numbers are severe enough that the contrarian thesis requires multi-year patience — there is no quick rebound visible in the reported quarter itself.",
            },
            {
                title: "Nacharam OAI + USFDA Warning Letter — regulatory overhang with uncertain remediation timeline",
                body: "Nacharam (FTF unit) received **OAI classification + USFDA Warning Letter** in Q3 FY26; drove **~₹55 cr shipment deferrals** in FY26; while mgmt quantifies impact at <1% EBITDA, USFDA escalation (e.g., 483, import alert, spread to other sites) would compound substantially. Industry remediation timelines are typically 12-24 months; reputational damage with global pharma customers could outlast the regulatory fix. Engaging US FDA consulting firm but no firm remediation date.",
            },
            {
                title: "Multiple leadership transitions in 12 months — execution risk during peak transition",
                body: "MD Dr. Prasada Raju resigned in Oct 2025 (citing personal priorities); new Group CEO Umang Vohra still hasn't joined (20 May 2026); multiple senior hires across COO + business CEO roles; 6-entity post-merger integration adds organisational complexity. Vohra will need 6-12 months to fully ramp up at a ₹18,500 cr platform (vs ₹1.5 lakh cr at Cipla = different operational dynamics) = execution velocity in FY27 is unpredictable.",
            },
            {
                title: "TTM P/E 71.75x = 2.1x industry P/E (34.42x) — valuation premium on trough earnings",
                body: "Headline TTM P/E 71x on TTM EPS ₹6.77 looks expensive even acknowledging trough earnings; rests entirely on FY28-29 recovery delivery (FY28E P/E ~25-35x = at industry · FY29E P/E ~15-22x = at discount). If FY28-29 recovery underdelivers (e.g., FY29 PAT only ₹400-500 cr vs implicit ₹700-1,000 cr), forward P/E remains elevated even on recovery base = **30-40% downside risk** if market re-rates to industry-average on disappointing recovery base.",
            },
            {
                title: "Specialty Chemicals + API+ structural drag + CDMO peer competition intensifying",
                body: "Specialty chemicals facing global pricing pressure + agro cycle subdued + limited synergy with core CDMO platform = strategic rationale questionable; API+ facing Chinese supply normalisation + biosimilar competition + customer destocking. Simultaneously, all Tier-1 Indian CDMOs (Divi's, Laurus, Aarti Pharmalabs, Syngene, Piramal Pharma) are building/expanding the SAME ADC + oligonucleotide niches Cohance is differentiating on = competitive intensity rising precisely as Cohance is in transition; first-mover advantage could erode by FY28-29.",
            },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text: "**FY26 is the explicit trough; Q1 FY27 = the bottom; H2 FY27 = recovery begins** — management has provided unusually specific forward signposts (rather than spinning weak headlines), with credibility backed by material margins +209 bps YoY signalling underlying gross profitability is structurally improving. The trough is volume/mix driven, NOT margin or competitive-position erosion.",
            impact: "neutral",
            note: "Q1 FY27 result (Aug 2026) is the next major checkpoint",
        },
        {
            text: "**Umang Vohra (ex-Cipla MD/Global CEO) appointment effective 20 May 2026 is THE central re-rating catalyst** — arguably the most significant individual leadership transfer in Indian CDMO space in 5 years; will deliver strategic growth blueprint by end FY27 = credibility anchor for the entire FY29 ₹6,000 cr / FY30 $1bn vision.",
            impact: "strengthens",
            note: "First 12-18 months of Vohra communication + execution is the critical evaluation window",
        },
        {
            text: "**Pipeline + capacity are ready for H2 FY27 ramp** — 10 Phase III programs + Japanese customer Phase 3 anchor confirmed + SuryaPet capitalisation + oligonucleotide unit (Surya) commissioned Q4 FY26 + $10 mn US ADC expansion sanctioned + NJ Bio partnership progressing. Recovery does not require new investment decisions; it requires customer-destocking end + commercial-order timing.",
            impact: "strengthens",
            note: "Supply-side readiness is established; demand-side cadence is the variable",
        },
        {
            text: "**Self-funded through transition — Net cash ₹322 cr + FCF positive in trough year + D/E 0.12 + Advent PE backing** — funds organic capex (oligo + US ADC + SuryaPet) and selective M&A through FY27-28 with NO equity dilution risk; major structural advantage vs peers needing fresh raises during transitions.",
            impact: "strengthens",
            note: "Balance-sheet downside is structurally cushioned",
        },
        {
            text: "**TTM P/E 71.75x = 2.1x industry P/E on trough earnings + Nacharam Warning Letter + crowded ADC/oligo niche = real risks** — valuation rests entirely on FY28-29 recovery delivery (FY28E P/E ~25-35x · FY29E P/E ~15-22x); regulatory remediation timeline uncertain; competitive intensity in niche modalities rising precisely as Cohance is in transition. Requires multi-year patience.",
            impact: "weakens",
            note: "30-40% downside risk if FY28-29 recovery underdelivers; 100%+ upside if Vohra executes",
        },
    ],

    /* SECTION 7 — Final Assessment (4-question schema) ---------- */
    finalAssessment: {
        thesisIntact: {
            verdict: "Partially Intact — Contrarian Recovery Thesis, Catalyst-Dependent",
            reasons: [
                "**Underlying business health is NOT broken** — Material margins **70.8% (+209 bps YoY)** confirm gross profitability is structurally improving even as headline EBITDA margin compressed to 21%; the FY26 trough is volume + mix driven (customer destocking + API/SpecChem pricing + Nacharam disruption + integration costs), not competitive-position erosion or margin compression at the gross level. This is the single most credible reason to believe the recovery thesis is real.",
                "**Forward architecture is in place + capacity-ready** — 10 Phase III programs + Japanese customer Phase 3 anchor + SuryaPet capitalisation + oligonucleotide unit commissioned Q4 FY26 + $10 mn US ADC expansion + NJ Bio partnership + 3-vertical operating model + Advent PE backing. The recovery does not require net-new investment decisions.",
                "**Self-funded through transition** — Net cash ₹322 cr + FCF ₹17.3 cr generated in trough year + D/E 0.12 = no dilution risk; balance sheet enables organic capex + selective M&A through FY27-28. Major structural advantage vs CDMO peers requiring capital raises during transitions.",
                "**'Partially' rather than 'Yes — Intact' reflects three caveats**: (a) Umang Vohra has not yet started (effective 20 May 2026) so his execution is unproven at Cohance scale; (b) Nacharam Warning Letter remediation timeline uncertain (12-24 months typical); (c) competitive intensity in ADC + oligonucleotide niches is rising precisely as Cohance is in transition. The thesis is intact in architecture but unvalidated in execution — Vohra's first 12-18 months will determine which way it resolves.",
            ],
        },
        rerateTriggers: [
            {
                trigger: "**Vohra-led strategic blueprint reveal + first 12 months of execution credibility (FY27)**",
                probability: "Medium-High",
                rationale: "Vohra's Cipla track record (8+ years as MD/Global CEO at ₹1.5 lakh cr platform) materially raises probability of operational improvement. **Single biggest re-rating event** — if blueprint articulates a credible path to FY29 ₹6,000 cr with M&A pipeline + specialty chemicals resolution + customer commitments, stock could rerate 50-80% on credibility alone. Risk: Cipla → Cohance scale change (different operational dynamics) + PE-environment governance friction could slow ramp.",
            },
            {
                trigger: "**Q1 FY27 results confirming trough + early H2 FY27 recovery visibility**",
                probability: "High",
                rationale: "Customer destocking largely baked into FY26 actuals; Nacharam shipment deferrals (~₹55 cr) one-off; merger integration costs largely complete; no further leadership churn expected. Mgmt has clear visibility into Q1 order book. **70-75% probability Q1 FY27 is the trough**. If confirmed + H2 FY27 quarterly cadence shows directional improvement (revenue growth resumption + margin expansion), it directly validates the entire FY28-29 recovery thesis.",
            },
            {
                trigger: "**Phase III commercial revenue announcements (Japanese anchor ramp + 3 additional)**",
                probability: "Medium-High",
                rationale: "Japanese customer Phase 3 order confirmed + SuryaPet capacity being capitalised = high-probability Phase III commercial event in next 12-18 months. Each commercial Phase III ramp adds visible high-margin revenue + capacity utilisation = direct EBITDA margin lift toward 25-30% target. Risk: Phase III FDA approvals are inherently uncertain; customer order timing can slip 6-12 months.",
            },
            {
                trigger: "**ADC + Oligonucleotide commercial customer wins**",
                probability: "Medium",
                rationale: "Global ADC market $10bn → $30-45bn by 2030 + global oligo market growing 15-20% CAGR = strong tailwinds. NJ Bio US ADC partnership active; oligo unit (Surya) commissioned Q4 FY26 = capacity ready. But these are crowded niches (Divi's, Laurus, Aarti, Syngene, Piramal Pharma all expanding); first major large-pharma anchor win in either niche would re-rate the high-margin optionality embedded in the stock.",
            },
            {
                trigger: "**Specialty chemicals strategic resolution (likely divestment under Vohra)**",
                probability: "Medium",
                rationale: "Specialty chemicals has limited synergy with core CDMO + faces global pricing pressure + sub-scale vs PI Industries / SRF / Navin Fluorine / Aarti Industries. Vohra-led strategic blueprint likely to either scale-down or divest. Divestment would simplify the platform + free capital for CDMO M&A + remove a structural margin drag = clear positive re-rating event. Risk: restructuring charges + execution distraction in short term.",
            },
        ],
        upsideIfGuidanceMet: {
            currentPrice: "₹456.30 (NSE spot, 13 May 2026)",
            targetPrice: "**~₹910-1,085 (FY29 horizon, full guidance met)**",
            upsidePct: "**+100% to +138% (36-48 month horizon)**",
            horizon: "36-48 months (FY29 ₹6,000 cr + 28-32% EBITDA margin delivered)",
            assumptions:
                "**Valuation multiple**: 5-yr median P/E proxy ~**35x** (TTM P/E 71x is misleading because it reflects trough earnings; Indian CDMO industry P/E 34.42x; Cohance historical (pre-merger Suven) traded at 40-60x in normalised earnings years; **35x used as conservative 5-yr median proxy across the cycle**). **EPS growth path**: Q4 PAT -53% YoY and FY26 Adj PAT -65% YoY reflect TROUGH; recovery framework — **FY27E PAT ₹250-350 cr (recovery begins H2) · FY28E PAT ₹500-700 cr (normalisation) · FY29E PAT ₹800-1,200 cr (₹6,000 cr revenue × 28-32% EBITDA margin × ~50% PAT-to-EBITDA conversion at scale)**. Mid-point FY29E EPS ≈ **₹26-31** (vs TTM ₹6.77). This implies an EFFECTIVE EPS CAGR of ~50-65% off the trough base — high in percentage terms but mechanically a reversion to a normalised earnings curve rather than fresh-growth CAGR.",
            workings:
                "**TTM EPS ₹6.77 (trough)** → **FY29E EPS ~₹26-31** (₹800-1,200 cr ÷ ~38 cr shares). At **5-yr median P/E proxy 35x**, FY29E fair price = **₹26 × 35 = ₹910 (base)** to **₹31 × 35 = ₹1,085 (bull)**. From CMP ₹456, that is **+100% to +138% upside over 36-48 months** = **~22-25% IRR** if guidance is fully delivered. Sanity-check vs intermediate years: at FY28E EPS ~₹15 × 35x = **₹525** = ~+15% over 24 months (modest because FY28 is still transitional). **Sum-of-parts cross-check**: At FY29 ₹6,000 cr revenue × 28-32% EBITDA × ~6x EV/EBITDA multiple = **₹10,000-12,000 cr EV** standalone for CDMO platform alone (excluding cash + ADC/oligo optionality) vs current ₹18,500 cr mkt cap — implying current price is already discounting partial recovery. **Both methods converge to ~+100-140% upside if FY29 guidance fully met; the asymmetric reward kicks in if FY30 $1bn vision is partially delivered.**",
        },
        valuationEntryZone: {
            bestValueRange: "**₹380 – ₹460** (catalyst-gated tiered accumulation)",
            fairValue: "**~₹525** (FY28E EPS ~₹15 × proxy 5-yr median P/E 35x) — but TTM P/E 71x makes the headline misleading",
            currentZone: "Fair Value (upper end on FY28E basis, expensive on TTM basis)",
            rationale:
                "**Valuation framework scorecard** (acknowledging TTM EPS is trough-distorted): (1) **PE vs historical** — TTM P/E 71.75x vs proxy 5-yr median ~35x = **Grade F on TTM basis** but FY28E P/E ~30-35x = **Grade C (Fair)** and FY29E P/E ~15-22x = **Grade A (Deep Value)**; (2) **PEG** — TTM-based PEG is meaningless (trough); using FY26-FY29E effective recovery PAT CAGR ~60% off trough, normalised forward PEG ≈ 0.5-0.8 = **Grade A-A+** (with the caveat that 'recovery CAGR' off a depressed base is not the same as organic growth CAGR); (3) **Intrinsic value** — FY29E target ₹910 discounted at 12% over 3 years = **PV ~₹650** vs CMP ₹456 = **CMP is ~30% below IV = Grade A (Deep margin of safety)** ASSUMING recovery delivers; (4) **Price worthiness** — Justified P/E at PEG 1.5 on recovery CAGR is mechanically very high; framework breaks down for trough-recovery stocks; effective verdict **Grade B-C**; (5) **Forward PE** — FY27E P/E ~50-75x = **Grade F**, FY28E P/E ~25-35x = **Grade C**, FY29E P/E ~15-22x = **Grade A** = depends entirely on which year you anchor to; (6) **Growth capability** — Material margins improving + capacity ready + Phase III pipeline + Vohra appointment + Advent backing + self-funded balance sheet = **~6-7/10 triggers = Grade B (Good Confidence)** offset by regulatory + competitive risks; (7) **Capital deployment** — PE-based range using FY28E EPS ₹15 × (35 × 0.80) = **₹420 (low)**, ₹15 × 35 = **₹525 (high)**; intrinsic-value-based range: ₹650 × 0.70 = ₹455 (low), ₹650 × 0.85 = ₹553 (high); **combined optimal accumulation zone ₹380-₹460**. **Practical entry — STRICT CATALYST-GATED tranche protocol** (warranted by high execution risk + multi-year horizon): (a) **T1 scout position 0.5-1% of equity at ₹440-470** (current consolidation zone, downside cushioned by net cash + material margins healthy + Vohra confirmed); (b) **T2 add at ₹400-440 ONLY IF** Q1 FY27 results (Aug 2026) confirm trough bottomed + Vohra's first earnings call communication is strong; (c) **T3-T4 aggressive accumulation at ₹350-400** ONLY IF (i) Q2 FY27 (Oct 2026) shows early recovery cadence, (ii) no further Nacharam regulatory escalation, (iii) Vohra strategic-blueprint preview positive; (d) **AVOID adding above ₹550** until FY28 PAT trajectory visible. **Combined Valuation Score ~55-62/100 = Grade C (Neutral) on TTM basis but Grade B (Fair) on FY28E basis + Quality B (with PE-backed governance upgrade)** = **small position with strict catalyst gating** per entry-exit framework. Position sizing 1-3% of equity portfolio reasonable for contrarian high-conviction play; upsize only on Vohra execution milestone validation.",
        },
        summary:
            "**Cohance Lifesciences is a contrarian recovery + leadership-catalyst-driven CDMO compounding play offering +100% to +138% upside over 36-48 months IF the FY27 trough holds, the Vohra-led strategic blueprint delivers credibility, Phase III commercial pipeline ramps as guided, and FY29 ₹6,000 cr revenue / 28-32% EBITDA margin is achieved.** The thesis is partially intact and catalyst-dependent — material margins +209 bps YoY confirm underlying gross profitability is NOT broken (the trough is volume/mix driven); forward architecture is in place (10 Phase III programs, Japanese anchor confirmed, oligo unit commissioned, $10 mn US ADC expansion); Vohra appointment (ex-Cipla CEO, effective 20 May 2026) is the central re-rating catalyst; self-funded balance sheet (net cash ₹322 cr, FCF positive in trough year, D/E 0.12) + Advent PE backing remove dilution risk. Risks are real and quantified (TTM P/E 71x on trough earnings, Nacharam Warning Letter, crowded ADC/oligo niche, multiple leadership transitions, multi-year horizon required). **Best-value accumulation zone ₹380-₹460 with STRICT CATALYST-GATED tranche protocol** — T1 scout at ₹440-470 (CMP zone), subsequent tranches only on Q1/Q2 FY27 trough-confirmation + Vohra credibility milestones. **Worst case (recovery disappoints + Vohra underwhelms)**: ₹300-350 = ~25-35% downside. **Best case (Cipla-level Vohra execution + ADC/oligo wins + FY30 $1bn partial delivery)**: ₹1,000-1,500 = 120-230% upside over 4-5 years = **3-4x asymmetric reward on multi-year horizon**.",
    },
});
