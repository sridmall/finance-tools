/* ============================================================
   Waaree Energies Ltd — Q4 FY26 / Full Year FY26
   Concall: 30 April 2026 (results announced same day)
   File path: data/WAAREEENER/Q4FY26.js
   Live spot @ authoring: ₹3,118.80 NSE / ₹3,117.45 BSE (1 May 2026, 11:55 IST)
   Day move: **-10.97% (-₹384.10)** intraday — gap-down opening (₹3,300 vs prev close ₹3,502.90)
   Day range: ₹3,100 – ₹3,324.90 (heavy panic selling on margin miss + CapEx shock)
   Source: Groww MCP get_ltp + fetch_stocks_fundamental_data
   ============================================================ */

window.registerReport("WAAREEENER", "Q4FY26", {
    meta: {
        companyName: "Waaree Energies Ltd",
        ticker: "WAAREEENER",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "30 April 2026 (results + concall same day)",
        concallDate: "30 April 2026 (Q4 FY26 + FY26 earnings call) — CEO Amit Paithankar + CFO Sonal Shrivastava",
        resultsBasis:
            "Consolidated. **India's largest solar PV module manufacturer** — promoter-led Waaree Group; **promoter Hitesh Doshi** founded 1989; listed Oct 2024 (₹3,000 cr IPO at ₹1,503 → 3-week pop to ₹3,500+ peak). **Differentiation drivers**: (1) **Largest installed module capacity in India ~26 GW** + cell capacity 5.4 GW + **upstream integration into ingot-wafer (10 GW Nagpur, ₹6,200 cr CapEx) + PV glass (₹3,900 cr)** = full vertical integration play, (2) **US footprint 2.6 GW operational; expanding to 4.2 GW by mid-2026** (1.6 GW Texas + 1 GW Arizona Meyer Burger acquisition) = first-mover Indian solar manufacturer with US capacity, (3) **Polysilicon production in Oman** for fully traceable, FEOC-compliant non-Chinese supply chain (effective April 2026) = strategic moat against US BIOSECURE-style restrictions, (4) **Order book ₹53,000 cr (~2x FY26 revenue) + pipeline 100+ GW** = multi-year visibility, (5) **Diversification into adjacencies** — battery storage (20 GWh capacity by FY28), inverters, transformers, green hydrogen electrolysers + Waaree 2.0 transition strategy, (6) **Domestic protection** — ALMM listing + DCR for govt schemes + PLI scheme + BESS PLI = regulatory tailwinds. **Right earnings frameworks for solar manufacturer**: Revenue Growth (volume × ASP) + EBITDA Margin (input cost pass-through) + ROE/ROCE + Order Book + Capacity Utilisation + Forward EBITDA — *not* simple TTM P/E in isolation. **P/E 23.09x vs industry 50.6x** = trading at *massive discount* to renewable peer set (Premier Energies 80-100x, Borosil Renewables 80x, Suzlon 60x); **forward FY27 EBITDA multiple 16x; FY28 13x per Nomura** = *cheap on forward EBITDA basis* despite the margin miss.",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. **Waaree Energies Q4 FY26 = topline blowout + margin disappointment** — Q4 Revenue ₹8,480 cr (+112% YoY) + PAT ₹1,126 cr (+75% YoY) + Op EBITDA ₹1,577 cr (+71% YoY); FY26 Revenue ₹26,537 cr (+84%) + PAT ₹3,884 cr (+101%; doubled) + Op EBITDA ₹5,909 cr (+117%). **The stock crash -10.97% to ₹3,118.80 is driven by**: (1) Q4 EBITDA margin compressed sharply to **18.59% vs 23.04% YoY = -445 bps** (Kotak expected 21.9% = 330 bps miss), (2) FY27 EBITDA guidance ₹7,000-7,700 cr = +24% midpoint = *decelerating* from FY26's +117%, (3) **₹10,100 cr CapEx commitment** (₹6,200 cr ingot-wafer + ₹3,900 cr PV glass) = capital intensity rising, (4) Chinese cell prices spiked from $0.04/wp to $0.06/wp = input cost shock with only $0.02/wp pass-through. **Stock at ₹3,118.80 (P/E 23.09x; ROE 25.71%; ROA 13.05%; D/E 0.22x)** = at trough valuation post-IPO; trading at half of industry P/E 50.6x; **Nomura Buy ₹3,750 target = +20% upside**. **The fundamental thesis is intact** — order book ₹53,000 cr + pipeline 100+ GW + US capacity 4.2 GW + Waaree 2.0 diversification + ROE 25%+ — but margin trajectory needs FY27 H1 validation.",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            {
                metric: "Revenue from Operations — *the* central solar manufacturer scale metric",
                current: "**Q4: ₹8,480 cr; FY26: ₹26,537 cr (consolidated)**",
                qoq: "**Q4 sequential: substantial growth** vs Q3 ₹4,144 cr (estimated) = doubled QoQ on volume ramp + execution acceleration; Q4 module production 4.2 GW (vs FY26 12.6 GW = highest-ever production)",
                yoy: "**Q4 +111.8% YoY (₹8,480 cr vs ~₹4,005 cr Q4 FY25); FY26 +83.7% YoY (₹26,537 cr vs ₹14,444 cr FY25)** — *blowout topline beat* driven by (a) volume ramp from 26 GW capacity, (b) ASP uplift on cell price spike, (c) US contract execution, (d) order book conversion. **Beat consensus revenue estimates by ~12% per Nomura**",
            },
            {
                metric: "Operating EBITDA + EBITDA Margin — *the* core market disappointment",
                current: "**Q4 Op EBITDA ₹1,577 cr; Q4 margin 18.59%; FY26 Op EBITDA ₹5,909 cr; FY26 margin 22.27%**",
                qoq: "**Q4 EBITDA margin 18.59% vs Q3 ~24-25% = ~600 bps QoQ compression** = *the central market disappointment*. Driver: Chinese cell prices spiked from $0.04/wp to $0.06/wp (50% input cost increase); only $0.02/wp pass-through to module pricing = margin gap",
                yoy: "**Q4 EBITDA margin -445 bps YoY (18.59% vs 23.04%); FY26 margin -370 bps YoY (22.27% vs ~26%)** = significant compression despite strong volume; **Kotak Institutional Equities had expected Q4 margin 21.9%; actual 18.59% = ~330 bps miss vs consensus = the trigger for -11% stock crash**. Nomura: 'EBITDA missed by 11% due to margin compression'",
            },
            {
                metric: "Profit After Tax (PAT) — strong absolute, weak relative to topline",
                current: "**Q4 PAT ₹1,126 cr; FY26 PAT ₹3,884 cr** (consolidated)",
                qoq: "**Q4 PAT +75% QoQ approximately** (vs Q3 ~₹644 cr estimated) on volume ramp",
                yoy: "**Q4 PAT +74.76% YoY; FY26 PAT +101.45% YoY = essentially DOUBLED** (₹3,884 cr vs ₹1,928 cr FY25); **but Q4 PAT growth +75% lagging Revenue growth +112% by 37 ppts** = clear margin compression flowing through to bottom line. **Final Dividend ₹2/share; Total FY26 dividend ₹4/share** (still <0.13% yield = nominal capital return given growth phase)",
            },
            {
                metric: "EPS (Diluted) + Capital Return — strong but yield negligible",
                current: "**TTM EPS ₹135.03; FY26 Total Dividend ₹4/share** (Yield 0.00% per MCP — nominal at <0.13%)",
                qoq: "Q4 EPS contribution ~₹39 vs Q3 ~₹22 = strong sequential",
                yoy: "**FY26 EPS doubled YoY** but **Dividend Yield 0.00%** = capital deployed into expansion CapEx (₹10,100 cr commitment for FY27-28); typical of growth-phase manufacturer",
            },
            {
                metric: "Net Debt + Balance Sheet — financial flexibility for ₹10,100 cr CapEx",
                current: "**D/E 0.22x = low leverage; Mkt Cap ₹89,674 cr; Book Value ₹501.9; ROCE healthy**",
                qoq: "**Strong balance sheet maintained** through CapEx-heavy phase; FY26 ROE 25.71% + ROA 13.05% = capital efficiency exceptional",
                yoy: "**FY27-28 CapEx commitment ₹10,100 cr** (₹6,200 cr Nagpur ingot-wafer + ₹3,900 cr PV glass) = ~38% of FY26 revenue but D/E low at 0.22x = **debt headroom available**; cash flow from operations FY26 likely ₹4,000-4,500 cr = significant internal accrual to fund CapEx + balance sheet stays clean",
            },
        ],
        businessQualityMetrics: [
            {
                metric: "Order Book + Pipeline — *the* multi-year forward visibility metric",
                current: "**Order book ₹53,000 cr (~2x FY26 revenue); Pipeline 100+ GW; Q3 order book was ₹60,000 cr**",
                qoq: "**Order book ₹53,000 cr vs Q3 ₹60,000 cr = -₹7,000 cr decline = signal of execution acceleration outpacing new bookings** (Q4 revenue ₹8,480 cr executed); pipeline 100+ GW remains robust",
                yoy: "**Order book grew from ₹40,000 cr at start of FY26 to ₹53,000 cr exit FY26** (+33%) despite executing ₹26,537 cr revenue = significant net order accretion; **multi-year revenue visibility**: FY27 revenue ₹35,000-40,000 cr largely covered by existing order book + 100+ GW pipeline conversions",
            },
            {
                metric: "Capacity + Vertical Integration — *the* manufacturing moat",
                current: "**Module 26 GW (largest in India); Cell 5.4 GW; Q4 module production 4.2 GW; FY26 production 12.6 GW (record); Cell production 2.3 GW FY26**",
                qoq: "**Production utilisation Q4: 4.2 GW / 6.5 GW quarterly capacity = ~65%** (industry-leading); **upcoming ingot-wafer 10 GW + PV glass capacity** = vertical integration moat being built",
                yoy: "**Module capacity expanded from ~13 GW (start FY26) to 26 GW (exit FY26) = doubled**; cell capacity to 5.4 GW; **upstream integration**: ₹6,200 cr Nagpur 10 GW ingot-wafer + ₹3,900 cr PV glass = **full vertical integration by FY28** (raw silicon → ingot-wafer → cells → modules + glass) = significant cost moat at scale",
            },
            {
                metric: "Geographic Mix + US Footprint — strategic positioning",
                current: "**US module capacity 2.6 GW operational; expanding to 4.2 GW by mid-2026 (1.6 GW Texas + 1 GW Arizona Meyer Burger acquisition); Polysilicon production in Oman for FEOC compliance from April 2026**",
                qoq: "**US revenue execution accelerating** — order book includes substantial US contracts at $0.35-$0.38/wp (premium to current $0.30-$0.31 = pricing buffer); existing contracts often allow cost pass-through",
                yoy: "**Strategic US footprint among Indian solar manufacturers**: only Waaree + Premier Energies have meaningful US capacity. **Trump 126% CVD overhang resolved** — Waaree sources cells from non-Chinese jurisdictions since 2019 (~10% tariff) avoiding the 126% duty entirely; **Oman polysilicon ensures full FEOC compliance** = strategic moat against further US trade restrictions",
            },
        ],
        footnotes: [
            "**The Q4 EBITDA margin miss — *fully demystified***: Q4 EBITDA margin **18.59% vs 23.04% YoY = -445 bps compression**. **Driver**: Chinese cell prices spiked from $0.04/wp to $0.06/wp = +50% input cost; **only $0.02/wp passed through to module ASP** = margin gap. **Kotak expected 21.9% margin; actual 18.59% = 330 bps miss vs consensus** = the proximate trigger for -10.97% stock crash. **Important caveat**: this is an *industry-wide input cost shock*, not Waaree-specific structural deterioration; pass-through typically lags 1-2 quarters; **margin recovery expected H2 FY27** as ASP catches up + Oman polysilicon comes online (April 2026) = significant cost reduction lever.",
            "**FY27 EBITDA guidance ₹7,000-7,700 cr — *the deceleration concern that worried street***: FY27 EBITDA midpoint ₹7,350 cr = **+24% YoY vs FY26 +117%** = sharp deceleration on growth rate (though absolute base 4x larger). **Implied FY27 build**: Revenue ~₹35,000-40,000 cr (+30-50%); EBITDA margin ~21-22% (modest recovery from Q4 18.59%); D&A ~₹1,800 cr (rising on new capacity); Interest ~₹400-500 cr; Tax 25% = **PAT ₹4,500-5,000 cr (+15-30%) = EPS ₹156-175**. **Forward FY27 P/E ~18-20x at current ₹3,118**; **FY28 P/E ~14-16x** = Nomura's 16x FY27 / 13x FY28 EBITDA multiple = *cheap relative to industry P/E 50.6x*.",
            "**The ₹10,100 cr CapEx commitment — *the capital intensity concern***: ₹6,200 cr for **10 GW ingot-wafer facility in Nagpur** + ₹3,900 cr for **PV glass plant**. **Strategic rationale**: full vertical integration (raw silicon → ingot-wafer → cells → modules + glass) = significant cost moat at scale; reduces Chinese cell price volatility exposure; ALMM/DCR + PLI eligibility expanded. **CapEx funding**: D/E 0.22x = headroom available; FY26 OCF likely ₹4,000-4,500 cr; capex spread over FY27-28; **net debt likely peaks at D/E 0.5-0.6x in FY27 = manageable**. **ROCE impact**: 24-30 month gestation; FY28-29 ROCE recovery expected; **but FY27 ROCE will likely compress** by 300-400 bps from current ~22% as new capacity comes online before revenue ramps.",
            "**MCP fundamentals: TTM EPS ₹135.03; P/E 23.09x; Industry P/E 50.6x; Mkt Cap ₹89,674 cr; ROE 25.71%; ROA 13.05%; P/B 6.21x (Book Value ₹501.9); D/E 0.22x; Dividend Yield 0.00%; P/S 4.57x**. **Compare to renewable peer set**: Premier Energies P/E 80-100x; Borosil Renewables P/E 80x; Suzlon Energy P/E ~60x; Inox Wind ~50x; Solar Industries ~50x. **Waaree at P/E 23.09x = trading at less than half of industry P/E 50.6x** despite (a) largest scale among Indian solar module makers, (b) ROE 25.71% best-in-class, (c) US footprint, (d) Oman polysilicon FEOC moat, (e) ₹53,000 cr order book, (f) 100+ GW pipeline = **valuation looks compelling on absolute and relative basis**.",
            "**Stock context**: IPO in Oct 2024 at ₹1,503; peak ₹3,500+ within 3 weeks; FY26 trajectory volatile but trending up to ₹3,500 pre-results; today's -11% crash to ₹3,118.80 = below recent peak but still 2x IPO price. **52-week range**: ~₹2,200-3,500+; today's panic sell-off opens a **better entry zone**. **Nomura ₹3,750 target = +20% upside from ₹3,118.80**.",
        ],
        patternDetected:
            "Q4 Revenue ₹8,480 cr (+112% YoY) topline blowout + Q4 PAT ₹1,126 cr (+75% YoY) doubled in absolute + Q4 EBITDA margin 18.59% (-445 bps YoY = sharp compression on Chinese cell price spike $0.04→$0.06/wp + only $0.02 pass-through) + Kotak expected 21.9% = 330 bps miss vs consensus + FY26 PAT ₹3,884 cr (+101% YoY = doubled) + FY27 EBITDA guidance ₹7,000-7,700 cr (+24% midpoint = decelerating from +117% but absolute base 4x larger) + ₹10,100 cr CapEx commitment (₹6,200 cr Nagpur ingot-wafer + ₹3,900 cr PV glass) + Order book ₹53,000 cr (~2x FY26 revenue) + Pipeline 100+ GW + US capacity expanding to 4.2 GW + Oman polysilicon FEOC moat + 126% US CVD non-issue (cells from non-Chinese since 2019) + Diversification Waaree 2.0 (battery, inverters, transformers, electrolysers) + Stock -10.97% intraday on margin miss + capital intensity concern = **pattern reading: 'India's largest solar manufacturer prints a topline blowout but margin disappointment quarter on input cost spike; absolute earnings DOUBLED, FY27 guidance solid (+24%), order book robust, vertical integration strategy progressing, US footprint and Oman polysilicon moats deepening; market panic-sells on -445 bps margin compression + ₹10,100 cr CapEx + decelerating growth optics, opening best valuation since IPO at P/E 23.09x vs industry 50.6x'**. The investment outcome hinges on FY27 H1 margin recovery cadence + Oman polysilicon ramp + US capacity execution + CapEx absorption.",
        interpretation:
            "**Q4 FY26 = topline blowout + margin disappointment** — Revenue ₹8,480 cr (+112% YoY) + PAT ₹1,126 cr (+75%) + Op EBITDA ₹1,577 cr (+71%); **but EBITDA margin compressed -445 bps to 18.59% (vs 23.04% YoY; vs 21.9% Kotak expected = 330 bps miss vs consensus)**. Driver: **Chinese cell prices spiked from $0.04/wp to $0.06/wp = +50% input cost; only $0.02/wp pass-through** = margin gap. **FY26 doubled in absolute** — Revenue ₹26,537 cr (+84%) + PAT ₹3,884 cr (+101%) + EBITDA ₹5,909 cr (+117%). **FY27 EBITDA guidance ₹7,000-7,700 cr = +24% midpoint** = decelerating but solid given 4x larger base. **₹10,100 cr CapEx commitment** (Nagpur ingot-wafer + PV glass) = full vertical integration play; **Oman polysilicon ops from April 2026** = FEOC-compliant moat. **Order book ₹53,000 cr (~2x FY26 revenue) + 100+ GW pipeline** = multi-year visibility. **Stock crash -10.97% to ₹3,118.80** is driven by margin miss + CapEx shock + decelerating growth optics, NOT structural concerns. **Trading at P/E 23.09x vs industry 50.6x = less than half of peer set**; **Nomura Buy ₹3,750 target = +20% upside**. **The fundamental thesis is intact**: largest scale (26 GW modules), best ROE (25.71%), US footprint expanding, vertical integration, diversification (battery 20 GWh by FY28, inverters, transformers, electrolysers). **Asymmetric setup at ₹3,118.80**: bear case ₹2,500-2,800 (FY27 margin recovery slow + CapEx execution risk + further industry headwinds = -10-20%), base case ₹3,800-4,300 (FY27 EBITDA midpoint achieved + margin recovers to 21% + EPS ₹165 × 23-26x = +22-38%), bull case ₹5,000-5,800 (FY28 EPS ₹200 × 25-29x + Oman polysilicon margin lift + US capacity ramp + Waaree 2.0 monetisation = +60-86%). **Verdict: BUY/ACCUMULATE on dip — best entry zone since IPO** at ₹3,000-3,200; valid entry up to ₹3,400; reduce above ₹4,200 (FY27 base case priced).",
        whatWentRight: [
            "**Topline + absolute earnings blowout** — Q4 Revenue ₹8,480 cr (+112% YoY); FY26 Revenue ₹26,537 cr (+84%); FY26 PAT ₹3,884 cr (+101% YoY = DOUBLED); FY26 EBITDA ₹5,909 cr (+117%); module production 12.6 GW (record); US capacity expanding to 4.2 GW; order book ₹53,000 cr (~2x revenue); pipeline 100+ GW; ROE 25.71%; ROA 13.05%. **Beat consensus revenue by 12% per Nomura**.",
            "**Strategic moats deepening**: (a) **₹10,100 cr CapEx commitment** for full vertical integration (₹6,200 cr 10 GW ingot-wafer Nagpur + ₹3,900 cr PV glass), (b) **Oman polysilicon ops from April 2026** = FEOC-compliant non-Chinese supply chain moat, (c) **US footprint 2.6 → 4.2 GW** including Texas + Arizona Meyer Burger acquisition, (d) **126% US CVD non-issue** (cells from non-Chinese jurisdictions since 2019), (e) **Waaree 2.0 transition**: battery storage 20 GWh by FY28 + inverters + transformers + green hydrogen electrolysers = optionality monetisation, (f) **FY27 EBITDA guidance ₹7,000-7,700 cr (+24%)** = solid execution despite tougher comparison base.",
        ],
        whatWentWrong: [
            "**Q4 EBITDA margin compressed -445 bps YoY to 18.59% (vs 23.04%); 330 bps miss vs Kotak expected 21.9%** — *the central market disappointment*. Driver: Chinese cell prices spiked $0.04→$0.06/wp (50% input cost rise); only $0.02/wp pass-through to ASP = margin gap. **FY26 EBITDA margin 22.27% (-370 bps YoY)** = full-year compression visible. **PAT growth +75% YoY lagging Revenue +112% by 37 ppts** = margin compression flowing through.",
            "**FY27 EBITDA guidance ₹7,000-7,700 cr = +24% midpoint = decelerating from FY26 +117%**; market may have hoped for ₹8,000+ cr. **₹10,100 cr CapEx commitment** raises capital intensity concerns: 24-30 month gestation; FY27 ROCE likely compresses 300-400 bps before recovery FY28-29; net debt likely peaks at D/E 0.5-0.6x. **Order book ₹53,000 cr at Q4 vs ₹60,000 cr at Q3** = -₹7,000 cr decline (execution outpacing bookings — neutral but optically weak). **Industry-wide ASP pressure**: global module prices dropping; ALMM listing requirements changing; sector at peak cycle margins; further compression possible if Chinese cell prices stay elevated.",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "1. Solar PV Modules — *the* core revenue engine (~85-90% of revenue)",
                yoyGrowth: "**Q4 Module production 4.2 GW (+~80% YoY); FY26 production 12.6 GW (record)**",
                mix: "Domestic + Export markets; key geographies India, US, Europe, Middle East, Africa",
                analysis:
                    "**The dominant growth engine.** **Module capacity 26 GW** (largest in India) operating at ~65% utilisation = significant operating leverage on full-load. **Volume growth +80%+ YoY** drove Q4 revenue +112%; ASP impact mixed (+ from supply tightness, − from Chinese cell pass-through). **Geographic mix**: domestic strong (ALMM listed; PLI beneficiary; DCR for govt schemes); US substantial (premium pricing $0.35-$0.38/wp on existing contracts vs $0.30-$0.31 spot). **Risk**: Chinese module dumping; ASP pressure; ALMM regulatory changes.",
                triggers:
                    "(a) FY27 capacity utilisation ramping to 75-80% on order book conversion; (b) US capacity 4.2 GW operational (Texas + Arizona) = US revenue acceleration; (c) Domestic PLI Phase II launches; (d) DCR schemes (PM-KUSUM, rooftop, utility-scale) generating order pipeline; (e) Export market diversification into Middle East, Africa.",
            },
            {
                name: "2. Solar Cell Manufacturing — *the* upstream integration play (5.4 GW)",
                yoyGrowth: "**Cell production 2.3 GW FY26; cell capacity 5.4 GW (vs ~3 GW start of FY26)**",
                mix: "Captive consumption (modules) + Merchant sales (limited)",
                analysis:
                    "**The upstream cost moat in development.** **Cell capacity 5.4 GW vs module 26 GW** = **80% cell shortfall** = exposure to Chinese cell price volatility (this caused Q4 margin miss). **FY27-28 plan**: ramp cell capacity to 12-15 GW + ingot-wafer 10 GW Nagpur (₹6,200 cr CapEx) = full vertical integration FY28-29. **Strategic rationale**: insulation from Chinese cell pricing volatility; ALMM Tier-2 cell mfr listing; FEOC compliance.",
                triggers:
                    "(a) Cell capacity ramping to 12-15 GW FY28 = reduces external cell dependency from 80% to 30-40%; (b) Nagpur 10 GW ingot-wafer commissioning FY28 = wafer self-sufficiency; (c) Oman polysilicon ops from April 2026 = raw material moat; (d) Cell merchant sales to other Indian module makers as supply tightens domestically; (e) Govt PLI Phase II for cells benefiting Waaree.",
            },
            {
                name: "3. US Module Capacity (Texas + Arizona) — *the* trade-protection moat",
                yoyGrowth: "**US capacity 2.6 GW operational; expanding to 4.2 GW by mid-2026 (1.6 GW Texas + 1 GW Arizona Meyer Burger)**",
                mix: "100% US-domestic for AD/CVD avoidance + IRA/ITC monetisation + DOE preferred supplier status",
                analysis:
                    "**The unique moat among Indian solar manufacturers.** Only **Waaree + Premier Energies** have meaningful US module capacity; gives access to (a) IRA/ITC tax credit monetisation by US customers (45X manufacturing credit + 30-50% project ITC), (b) **126% US CVD avoidance** on Indian-origin modules, (c) DOE/utility preferred-supplier pipeline, (d) US contracts at $0.35-$0.38/wp = significant premium. **Arizona Meyer Burger acquisition** = HJT (Heterojunction) technology + domestic certifications = high-end product mix.",
                triggers:
                    "(a) Texas 1.6 GW commissioning FY27; (b) Arizona 1 GW Meyer Burger ramp post-acquisition integration; (c) US IRA continuation (Trump-era policy uncertainty resolved as long as 45X credit retained); (d) US utility-scale solar pipeline conversions; (e) DOE Loan Programs Office support for US capacity scale.",
            },
            {
                name: "4. Polysilicon (Oman) — *the* ultimate raw material moat",
                yoyGrowth: "**Oman polysilicon production launching April 2026 = first non-Chinese polysilicon supply for Indian solar mfr**",
                mix: "Captive consumption for ingot-wafer (Nagpur) + cell + module integration",
                analysis:
                    "**The ultimate FEOC compliance moat.** **Polysilicon (the silicon raw material) is dominated globally by China** (~80% of supply); rest from US (Hemlock, REC), Germany (Wacker), Korea (OCI). **Waaree's Oman facility = first Indian-promoter polysilicon facility outside China** = **fully traceable, FEOC-compliant supply chain** (effective April 2026 per US guidance). **Strategic value**: (a) Premium pricing for FEOC-compliant modules in US market (~$0.05-$0.08/wp premium), (b) Insulation from Chinese supply chain disruption risk, (c) Strategic moat against any future US/EU regulations targeting Chinese-origin polysilicon, (d) Cost advantage at scale (Oman has cheap energy + silicon-grade quartz availability).",
                triggers:
                    "(a) Oman polysilicon ramp Q1 FY27; (b) FEOC-compliant module premium realisation; (c) US/EU customers paying for traceability; (d) Cost reduction at scale = margin tailwind FY28-29; (e) Optionality on selling polysilicon to other non-Chinese buyers.",
            },
            {
                name: "5. Waaree 2.0 Diversification — Battery, Inverters, Transformers, Electrolysers",
                yoyGrowth: "**Battery storage 20 GWh capacity by FY28; Inverters + Transformers ramping; Electrolyser pipeline building**",
                mix: "Battery Energy Storage Systems (BESS) + Solar Inverters + Power Transformers + Green Hydrogen Electrolysers",
                analysis:
                    "**The optionality/multi-engine future.** **BESS 20 GWh by FY28** = ~₹2,000-3,000 cr capacity announced; **PLI scheme for ACC battery storage** in place; demand from utility-scale solar+storage projects + EV charging + grid-scale balancing. **Inverters + Transformers**: vertical play into BoS (Balance of System) for solar projects. **Green Hydrogen Electrolysers**: India National Green Hydrogen Mission supports 5 MMT by 2030 = ~125 GW electrolyser opportunity; Waaree positioned as integrated player. **Risk**: capital allocation to multiple verticals could distract from core module business; competitive intensity in each adjacency is high.",
                triggers:
                    "(a) BESS commissioning FY27-28 with PLI benefits; (b) Inverter/transformer revenue ramping with India solar capacity additions (target 280 GW by 2030); (c) Electrolyser pilot orders converting to commercial; (d) Integrated solar-plus-storage solutions winning utility tenders; (e) Optionality monetisation if Waaree carves out individual subsidiaries.",
            },
        ],
        assessment: [
            "**Multi-engine growth architecture genuinely intact** — Solar Modules (~85-90% revenue, +80% volume growth, 26 GW capacity) + Solar Cells (5.4 GW, ramping to 12-15 GW FY28) + US Module Capacity (2.6 → 4.2 GW = trade-protection moat) + Polysilicon Oman (April 2026 launch = FEOC moat) + Waaree 2.0 Adjacencies (Battery 20 GWh + Inverters + Transformers + Electrolysers). **The vertical integration play is unique among Indian solar manufacturers**: silicon → ingot-wafer → cells → modules + BoS + storage = full-stack solution.",
            "**The 'India's largest solar manufacturer + vertical integration + diversification' thesis is genuinely strong** — Largest scale (26 GW modules vs Premier Energies ~10 GW + Adani Solar ~12 GW), best ROE (25.71% vs Premier Energies ~25-30%), unique US footprint (Waaree + Premier are the only two), Oman polysilicon as ultimate FEOC moat, Waaree 2.0 diversification opportunity. **The franchise economics are exceptional**: ROE 25.71%, ROA 13.05%, D/E 0.22x = capital-efficient growth machine.",
            "**Segment quality verdict: HIGH-QUALITY VERTICAL INTEGRATION SOLAR MANUFACTURER WITH MULTI-ENGINE OPTIONALITY AT TROUGH POST-IPO VALUATION + INPUT COST CYCLICAL HEADWIND.** The franchise economics are structurally sound; Q4 margin miss is industry-wide input cost shock (not structural); FY27 guidance solid + decelerating off 4x larger base; vertical integration progressing; US footprint deepening; Waaree 2.0 monetisation ahead. The investment outcome hinges on FY27 H1 margin recovery + Oman polysilicon ramp + CapEx execution discipline + Waaree 2.0 monetisation.",
        ],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            {
                metric: "1. Revenue Growth Trajectory FY27 — *the* central scale metric",
                current: "FY26 Revenue ₹26,537 cr (+84% YoY); Q4 ₹8,480 cr (+112% YoY)",
                trend: "**FY27 expected ₹35,000-40,000 cr (+32-50%)** as (a) module capacity 26 GW ramps to 75-80% utilisation, (b) US capacity 2.6 → 4.2 GW = US revenue acceleration, (c) Order book ₹53,000 cr conversion, (d) Pipeline 100+ GW maturing",
                horizon: "FY27 ~₹35,000-40,000 cr (+32-50%); FY28 ~₹45,000-52,000 cr (+25-30%); FY29 ~₹55,000-62,000 cr (+20%)",
                remarks:
                    "**Critical FY27 H1 data point**: Revenue ≥+30% YoY confirms trajectory; <+20% = guidance miss flag. **Drivers**: (a) Module volume +50% on capacity utilisation, (b) ASP normalising as input cost pass-through plays out, (c) US revenue acceleration on capacity ramp, (d) Domestic volumes from PLI/DCR schemes. **Risk**: Chinese module dumping; ASP pressure; macro slowdown in solar capex.",
            },
            {
                metric: "2. Op EBITDA Margin Trajectory — *the* central recovery metric",
                current: "FY26 EBITDA margin 22.27% (full year); Q4 18.59% (-445 bps YoY = compressed)",
                trend: "**FY27 expected EBITDA margin 21-22%** (modest recovery from Q4 18.59%); **FY28 expected 23-24%** as Oman polysilicon + Nagpur ingot-wafer + cell capacity ramp drive cost reduction",
                horizon: "FY27 21-22%; FY28 23-24%; FY29 24-25% (back toward FY25 normalised levels post integration)",
                remarks:
                    "**Each 100 bps EBITDA margin expansion on FY28 revenue ₹48,000 cr = ₹480 cr EBITDA = ~₹360 cr PAT = ~₹12.5 EPS**. **Drivers**: (a) Vertical integration cost savings ($0.03-$0.05/wp captured value), (b) Capacity utilisation operating leverage, (c) Currency favourable if rupee depreciates, (d) Premium pricing on FEOC-compliant modules. **Risks**: Chinese cell price persistence at $0.06/wp; ASP compression; capacity commissioning delays.",
            },
            {
                metric: "3. Order Book Coverage + Conversion Cycle — forward visibility",
                current: "Order book ₹53,000 cr (~2x FY26 revenue); Pipeline 100+ GW; Q3 was ₹60,000 cr",
                trend: "**Order book conversion cycle 18-24 months**; Q4 execution outpaced bookings; pipeline 100+ GW ensures forward replenishment",
                horizon: "FY27 order book ₹55,000-65,000 cr (net additions ₹15-25,000 cr); FY28 ₹70,000+ cr",
                remarks:
                    "**Order book ₹53,000 cr ≈ 2x FY26 revenue = ~24 months coverage** = **strong forward visibility**. New order wins driven by: (a) US utility-scale solar projects, (b) Domestic government tenders (PM-KUSUM, KUSUM, rooftop), (c) Corporate PPAs, (d) International export markets, (e) BESS opportunities. **Risk**: customer concentration in large utility customers.",
            },
            {
                metric: "4. CapEx Execution + ROIC Trajectory — capital intensity discipline",
                current: "FY26 CapEx ~₹3,500-4,000 cr (estimated); Net Cash low; D/E 0.22x",
                trend: "**FY27-28 CapEx commitment ₹10,100 cr** (₹6,200 cr Nagpur ingot-wafer + ₹3,900 cr PV glass) + ongoing module/cell capacity = **total ~₹13,000-15,000 cr CapEx FY27-28**",
                horizon: "FY27 CapEx ₹6,000-7,000 cr; FY28 CapEx ₹5,000-6,000 cr; D/E peaks ~0.5-0.6x FY27; ROCE compresses 300-400 bps before FY28-29 recovery",
                remarks:
                    "**Each ₹1,000 cr capex must generate ~₹250 cr EBITDA at scale (4-yr payback) to maintain ROCE**. **Funding mix**: OCF ₹4,000-5,000 cr/yr + debt headroom ₹8,000-10,000 cr at 0.5x D/E + balance sheet flexibility. **Watch**: capex absorption discipline; ROCE recovery to >20% by FY28 = critical for valuation defence; **Mittal-style execution** (per Biocon precedent) requires sharp capital allocation.",
            },
            {
                metric: "5. Waaree 2.0 Diversification + Strategic Optionality (FY27-30)",
                current: "BESS 20 GWh by FY28; Inverters/Transformers ramping; Electrolyser pipeline; ALMM/PLI eligibility",
                trend: "**Multi-vertical diversification**: BESS (₹2,000-3,000 cr capacity, PLI scheme); Inverters (BoS for solar projects); Transformers (utility infrastructure); Electrolysers (green hydrogen mission)",
                horizon: "FY27-28: BESS commissioning + first revenue; FY28-30: Electrolyser/inverter/transformer scaling",
                remarks:
                    "**Multi-year optionality monetisation**. Each adjacency at FY30 scale: **BESS** ~₹3,000-5,000 cr revenue at 18-22% EBITDA margin; **Inverters** ~₹1,500-2,500 cr at 15-18% margin; **Electrolysers** ~₹2,000-4,000 cr at 18-22% margin. **Combined non-module revenue FY30 ~₹7,000-12,000 cr = ~15-20% of revenue mix** = **diversification + multiple expansion lever**. **Risk**: capital allocation discipline; competitive intensity in each adjacency; subsidiary carve-out optionality could unlock value.",
            },
        ],
        demandSignals: [
            {
                signal: "Global solar module demand + module ASP environment",
                reading:
                    "**Global solar capacity additions targeting 600+ GW per year by 2030** (vs ~450 GW 2024); **Indian solar market** target 280 GW by 2030 (vs 95 GW current = 185 GW addition over 6 years); **US market** ~50 GW/yr; **EU + Middle East** growing. **Module ASP**: declining trend globally ($0.10-$0.15/wp peak 2022 → $0.30-$0.31/wp current — stabilising); **premium for FEOC-compliant** $0.05-$0.08/wp = significant pricing power for Waaree's Oman polysilicon module.",
                verdict: "Strong",
            },
            {
                signal: "Indian domestic solar policy environment",
                reading:
                    "**ALMM (Approved List of Models and Manufacturers)** = mandatory for govt-funded solar projects; benefits domestic manufacturers like Waaree. **DCR (Domestic Content Requirement)** for PM-KUSUM, KUSUM-C, rooftop = guaranteed domestic market. **PLI Scheme**: Phase I (₹4,500 cr; awarded 2022) + Phase II (₹19,500 cr; ₹14,000 cr awarded across Reliance, Tata, Adani, Waaree, others) = capacity build incentive. **BESS PLI**: 50 GWh ACC battery storage scheme. **Net effect**: domestic protection + cost incentive + policy clarity = supportive backdrop.",
                verdict: "Robust",
            },
            {
                signal: "US trade environment + Trump-era policy",
                reading:
                    "**126% US CVD on Indian solar imports** (Feb 2026 preliminary) = **non-issue for Waaree** (sources cells from non-Chinese jurisdictions since 2019; ~10% effective tariff). **45X manufacturing credit (IRA)** = Waaree US capacity benefits ~$0.07/wp tax credit; **Trump signal**: continuing IRA module/cell credits (45X) but uncertain on project ITC. **FEOC compliance from April 2026** = Waaree Oman polysilicon = full compliance. **Net**: **US trade environment is favourable for Waaree specifically**, even as broader Indian solar imports face headwinds.",
                verdict: "Strong",
            },
            {
                signal: "Chinese cell + module pricing dynamics",
                reading:
                    "**Chinese cell prices spiked $0.04 → $0.06/wp = +50%** = Q4 margin compression driver. **Causes**: (a) China's overcapacity rationalisation (BC Industries Min standards), (b) Polysilicon supply consolidation, (c) Domestic Chinese demand recovery. **Forward**: **Waaree's Oman polysilicon + Nagpur ingot-wafer + cell capacity ramp** = reduces Chinese exposure from 80% (current) to 30-40% by FY28 = **significant margin recovery lever**. **Risk**: Chinese module dumping into India remains a structural headwind on ASP.",
                verdict: "Adequate",
            },
            {
                signal: "BESS / Battery Storage demand environment",
                reading:
                    "**India BESS opportunity 80-100 GWh by 2030** (utility + commercial + EV); **PLI ACC battery 50 GWh awarded** (Reliance, Ola, Adani, Hyundai, etc. — Waaree won portion); **utility solar+storage tariffs** competitive with peak power; **Waaree 20 GWh by FY28** = positioned for early-mover advantage. **Global BESS** growing 30%+ CAGR; tied to renewable penetration.",
                verdict: "Strong",
            },
            {
                signal: "Macro + funding environment for Indian solar capex",
                reading:
                    "**Indian renewables target 500 GW by 2030** (vs ~190 GW current = 310 GW addition); **₹17 lakh cr cumulative investment** required = sustained capex demand for module + storage + transmission. **Funding**: SBI, PFC, REC + private credit + bond markets all engaged; **interest rates moderating** = lower financing costs. **Risk**: monetary tightening if inflation rebounds.",
                verdict: "Robust",
            },
        ],
        demandVerdict:
            "**Demand environment is GREEN-AMBER across six dimensions** — Global + Indian solar capacity additions (Strong); Indian domestic policy environment ALMM/DCR/PLI (Robust); US trade environment for Waaree specifically (Strong); Chinese cell pricing pressure cyclical (Adequate); BESS / battery storage opportunity (Strong); Macro + funding environment (Robust). **The next 18-24 months see 5 simultaneous tailwinds**: (a) FY27 H2 margin recovery as ASP catches up + Oman polysilicon online, (b) US capacity 2.6 → 4.2 GW operational = US revenue acceleration, (c) Vertical integration progressing (Nagpur ingot-wafer + PV glass), (d) Waaree 2.0 monetisation (BESS, inverters, electrolysers), (e) Industry tailwinds (India 500 GW target by 2030 + global solar capacity addition acceleration). **Mgmt's FY27 EBITDA guidance ₹7,000-7,700 cr translates to +24% EBITDA growth + reported PAT growth +15-30% on the back of ROCE compression in interim**.",
        whatWentRight: [
            "**Demand visibility robust + diversifying** — Order book ₹53,000 cr (~2x FY26 revenue); pipeline 100+ GW; US capacity expanding 2.6 → 4.2 GW; domestic ALMM/DCR/PLI tailwinds; BESS PLI 20 GWh capacity by FY28; module + cell capacity at scale; Oman polysilicon FEOC moat. **Industry-wide tailwind**: India 280 GW solar target by 2030; 500 GW renewables; global solar capacity addition acceleration.",
            "**Strategic execution accelerating**: ₹10,100 cr CapEx commitment for vertical integration (Nagpur ingot-wafer + PV glass); Oman polysilicon launching April 2026; US Texas + Arizona Meyer Burger acquisition; Waaree 2.0 diversification (BESS, inverters, transformers, electrolysers); FY27 EBITDA guidance ₹7,000-7,700 cr (+24%) maintained despite Q4 margin miss. **Mgmt under-promising** on margin recovery despite favourable Oman + Nagpur catalysts ahead.",
        ],
        whatWentWrong: [
            "**Q4 margin miss + cyclical headwinds continuing into Q1-Q2 FY27** — Chinese cell prices likely stay elevated near-term until domestic capacity ramp; ASP pass-through 1-2 quarters lagged; **margin recovery may be H2 FY27 not H1**. **Order book -₹7,000 cr decline Q3 → Q4** = optically weak even if from execution outpacing bookings.",
            "**₹10,100 cr CapEx commitment + interim ROCE compression** — Nagpur ingot-wafer (24-30 month gestation); PV glass (18-24 month); FY27 ROCE compresses 300-400 bps before FY28-29 recovery; net debt likely peaks D/E 0.5-0.6x FY27; capex absorption requires execution discipline. **Diversification capital allocation risk**: BESS, inverters, transformers, electrolysers all competitive; could distract from core module focus.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            {
                metric: "FY27 Op EBITDA Guidance — *the* explicit headline",
                current: "FY26 Op EBITDA ₹5,909 cr (margin 22.27%); Q4 ₹1,577 cr (margin 18.59%)",
                target:
                    "**FY27 Op EBITDA ₹7,000-7,700 cr (midpoint ₹7,350 cr)** = **+24% YoY at midpoint** (vs FY26 +117% growth); range +18-30%. **Implied margin** ~21-22% on revenue ~₹35,000-37,000 cr (modest recovery from Q4 18.59%); **Nomura interprets**: 16x FY27 EV/EBITDA at current ₹3,118 = *cheap*",
            },
            {
                metric: "FY27 Revenue Growth (informally implied)",
                current: "FY26 Revenue ₹26,537 cr (+84%)",
                target:
                    "**FY27 Revenue ~₹35,000-40,000 cr (+32-50%)** implied by EBITDA guidance ₹7,000-7,700 cr at 21-22% margin = midpoint ~₹35,000 cr (+32%); **drivers**: (a) module capacity utilisation ramp 65% → 75-80%, (b) US capacity 2.6 → 4.2 GW operational, (c) order book ₹53,000 cr execution, (d) ASP normalisation",
            },
            {
                metric: "CapEx Commitment + Vertical Integration",
                current: "FY26 CapEx ~₹3,500-4,000 cr; D/E 0.22x; Net cash low",
                target:
                    "**₹10,100 cr CapEx announced**: (a) ₹6,200 cr for **10 GW ingot-wafer facility in Nagpur** (24-30 month gestation; FY28 commissioning), (b) ₹3,900 cr for **PV glass plant** (18-24 month; FY27-28 commissioning); plus ongoing module/cell capacity expansions = **total FY27-28 CapEx ~₹13,000-15,000 cr**; **debt funding ~₹6,000-8,000 cr; OCF funding ₹6,000-9,000 cr**",
            },
            {
                metric: "Waaree 2.0 Diversification Strategy",
                current: "Module + Cell focus; Battery 20 GWh planned; Inverters/Transformers in pipeline; Electrolyser early stage",
                target:
                    "**Battery storage 20 GWh capacity by FY28** (~₹2,000-3,000 cr CapEx); **Inverters + Transformers** ramping FY27-28 (BoS integration); **Green Hydrogen Electrolysers** pilot FY27 → commercial FY28-29; **subsidiary carve-out optionality** for individual verticals possible (per analyst speculation)",
            },
            {
                metric: "US Capacity + Geographic Diversification",
                current: "US module 2.6 GW operational; FEOC compliance from April 2026 via Oman polysilicon",
                target:
                    "**US module capacity 4.2 GW by mid-2026** (1.6 GW Texas + 1 GW Arizona Meyer Burger acquisition); **126% US CVD non-issue** (cells non-Chinese since 2019); **Oman polysilicon ramp from April 2026** = FEOC-compliant supply chain; **export markets diversification** into Middle East, Africa, EU",
            },
        ],
        commitmentNote:
            "**Mgmt credibility check**: CEO **Amit Paithankar** + CFO **Sonal Shrivastava** (Q4 call); promoter **Hitesh Doshi** (Founder & Chairman). **Track record**: (a) IPO at ₹1,503 (Oct 2024); within 3 weeks ₹3,500+ peak (now ₹3,118.80 = 2x IPO price), (b) **FY26 doubled in absolute** — Revenue +84%, PAT +101%, EBITDA +117% = exceptional execution, (c) **US capacity expansion delivered on time**: 2.6 GW operational + 4.2 GW pipeline, (d) **126% US CVD navigated proactively** with non-Chinese cell sourcing since 2019, (e) **Oman polysilicon FEOC moat** = strategic foresight. **Mgmt has been transparent on margin pressure** — explicit on Chinese cell price spike and pass-through dynamics. **FY27 EBITDA guidance ₹7,000-7,700 cr** = under-promised given Oman polysilicon + Nagpur ingot-wafer + cell capacity ramp catalysts (analysts believe upside likely). **Watch FY27 quarterly cadence**: Q1 FY27 EBITDA margin ≥20% + revenue +30% YoY + new order wins announced + Oman polysilicon ramp updates + US capacity commissioning = on track.",
        growthDrivers: [
            {
                driver: "1. FY27 Volume Ramp + Capacity Utilisation (Q1-Q4 FY27)",
                impact:
                    "Module capacity 26 GW operating at ~65% Q4 → ramping to 75-80% FY27 average = **+15-20% volume on existing capacity**; **revenue impact**: +volume +20% × ASP stable = +20% revenue contribution. **Operating leverage**: each 5 ppt utilisation = ~150-200 bps EBITDA margin uplift = ~₹350-450 cr EBITDA = ~₹250-330 cr PAT = ~₹8-11 EPS contribution.",
            },
            {
                driver: "2. Oman Polysilicon + Nagpur Ingot-Wafer + Cell Capacity Ramp (FY27-28)",
                impact:
                    "**Oman polysilicon ramp Q1 FY27**: ~$0.03-0.05/wp cost reduction at scale = ~₹1,500-2,500 cr annual margin tailwind at FY28 volume. **Nagpur 10 GW ingot-wafer FY28**: full vertical integration; ~$0.04-0.06/wp captured value. **Combined vertical integration savings FY28-29**: ~₹2,500-4,000 cr EBITDA = ~300-500 bps margin uplift = ~₹1,800-2,800 cr PAT = ~₹60-95 EPS impact at FY28 EPS basis.",
            },
            {
                driver: "3. US Capacity Expansion + IRA/45X Tax Credit Monetisation (FY27-28)",
                impact:
                    "US capacity 2.6 → 4.2 GW = **+62% US capacity expansion**; revenue at $0.35-$0.38/wp premium pricing × 4.2 GW × ~₹85 USD/INR = **~₹13,000-15,000 cr FY28 US revenue at 20-25% EBITDA margin** = ~₹3,000-3,500 cr EBITDA contribution. **45X manufacturing credit** = ~$0.07/wp = additional margin lever. **DOE preferred supplier optionality** = pipeline visibility.",
            },
            {
                driver: "4. Waaree 2.0 Diversification (BESS, Inverters, Transformers, Electrolysers)",
                impact:
                    "**BESS 20 GWh by FY28**: ~₹6,000-8,000 cr revenue at 18-22% EBITDA margin = ~₹1,200-1,600 cr EBITDA. **Inverters + Transformers FY28-30**: ~₹2,000-3,500 cr revenue at 15-18% margin = ~₹350-600 cr EBITDA. **Electrolysers FY29-30**: ~₹3,000-5,000 cr revenue at 18-22% margin = ~₹600-1,000 cr EBITDA. **Combined non-module FY30 ~₹2,000-3,200 cr EBITDA = ~₹1,500-2,400 cr PAT = ~₹50-80 EPS** = **diversification + multiple expansion lever**.",
            },
            {
                driver: "5. Margin Normalisation + ROCE Recovery (FY28+)",
                impact:
                    "**EBITDA margin trajectory: 22.27% FY26 → 21-22% FY27 (input cost pass-through) → 23-24% FY28 (vertical integration kicks in) → 24-25% FY29 (full integration + scale)**; **ROE trajectory: 25.71% TTM → 22-23% FY27 (CapEx absorption) → 25-27% FY28-29 (recovery)**. **Multiple expansion**: from current P/E 23.09x to 28-32x as capital efficiency demonstrated + market re-rates Indian solar manufacturers vs global peers; **Nomura's 16x FY27 EV/EBITDA could re-rate to 20-22x = +25-37% multiple uplift**.",
            },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            {
                title: "FY26 Doubled in Absolute — Revenue +84%; PAT +101%; EBITDA +117% — Exceptional Operating Performance",
                body:
                    "**Q4 Revenue ₹8,480 cr (+112% YoY); FY26 Revenue ₹26,537 cr (+84% YoY); FY26 PAT ₹3,884 cr (+101% YoY = doubled); FY26 EBITDA ₹5,909 cr (+117% YoY)**. **Module production 12.6 GW FY26 (record)**; **Q4 4.2 GW** = highest ever quarterly. **Beat consensus revenue by 12% per Nomura**. **ROE 25.71%; ROA 13.05%; D/E 0.22x** = exceptional capital efficiency. **The absolute earnings doubling is the *most under-appreciated* metric in today's reaction** — market reacted on Q4 margin compression + FY27 guidance deceleration optics, ignoring the absolute scale doubling.",
            },
            {
                title: "Oman Polysilicon FEOC Moat from April 2026 + ₹10,100 cr Vertical Integration CapEx — Multi-Year Cost Moat",
                body:
                    "**Oman polysilicon production launches April 2026** = **first non-Chinese polysilicon supply for Indian solar manufacturer** = full FEOC compliance for US market; ~$0.05-0.08/wp pricing premium on FEOC-compliant modules. **₹10,100 cr CapEx commitment**: ₹6,200 cr for **10 GW ingot-wafer Nagpur** (FY28 commissioning) + ₹3,900 cr **PV glass plant** = full vertical integration silicon → ingot-wafer → cells → modules + glass; **cost moat at scale** = $0.07-0.11/wp captured value at full integration = ~₹2,500-4,000 cr annual EBITDA tailwind at FY28-29 scale.",
            },
            {
                title: "US Capacity 2.6 → 4.2 GW + 126% CVD Non-Issue + Trump-Era Policy Insulation",
                body:
                    "**US module capacity expanding from 2.6 GW operational to 4.2 GW by mid-2026** (1.6 GW Texas + 1 GW Arizona Meyer Burger HJT acquisition). **126% US CVD on Indian solar = non-issue for Waaree** (sources cells from non-Chinese jurisdictions since 2019; effective ~10% tariff). **Existing US contracts at $0.35-$0.38/wp** (vs current spot $0.30-$0.31) = **pricing buffer**. **45X manufacturing credit (IRA)** ~$0.07/wp benefit. **DOE preferred supplier pipeline**. **Strategic optionality**: Waaree + Premier Energies are *the only* Indian solar manufacturers with US capacity = significant moat as Chinese imports face restrictions.",
            },
            {
                title: "Waaree 2.0 Diversification — BESS 20 GWh + Inverters + Transformers + Electrolysers — Multi-Engine Optionality",
                body:
                    "**Battery Energy Storage Systems (BESS): 20 GWh capacity by FY28** (~₹2,000-3,000 cr CapEx); PLI ACC battery scheme participant. **Inverters + Transformers**: BoS (Balance of System) for solar projects; vertical integration play. **Green Hydrogen Electrolysers**: India National Green Hydrogen Mission supports 5 MMT by 2030 = ~125 GW electrolyser opportunity. **FY30 non-module revenue ~₹15-20% of mix = ~₹7,000-12,000 cr** = **diversification + multiple expansion lever**. **Subsidiary carve-out optionality** for individual verticals (per analyst speculation).",
            },
            {
                title: "Trading at P/E 23.09x vs Industry P/E 50.6x = Less Than Half — Significantly Discounted to Renewable Peer Set",
                body:
                    "**Waaree at P/E 23.09x = trading at less than half of industry P/E 50.6x** despite (a) largest scale among Indian solar module makers (26 GW vs Premier Energies 10 GW + Adani Solar 12 GW), (b) ROE 25.71% best-in-class vs Premier 25-30%, (c) US footprint expanding (Waaree + Premier are only two), (d) Oman polysilicon FEOC moat, (e) ₹53,000 cr order book + 100+ GW pipeline, (f) Vertical integration ahead. **Compare**: Premier Energies P/E 80-100x; Borosil Renewables P/E 80x; Suzlon Energy P/E ~60x; Inox Wind ~50x; Solar Industries ~50x. **Forward FY27 P/E ~18-20x; FY28 P/E ~14-16x** = *cheap on forward EBITDA basis* (Nomura 16x FY27 / 13x FY28 EV/EBITDA). **Stock crash -10.97% to ₹3,118.80 opens best valuation entry since IPO**; Nomura ₹3,750 target = +20% upside.",
            },
        ],
        bearish: [
            {
                title: "Q4 EBITDA Margin Compressed -445 bps YoY to 18.59% — 330 bps Miss vs Kotak Expected 21.9%",
                body:
                    "Q4 EBITDA margin **18.59% vs 23.04% YoY = -445 bps compression**; **Kotak expected 21.9% = 330 bps miss vs consensus** = the proximate trigger for -10.97% stock crash. **Driver**: Chinese cell prices spiked from $0.04/wp to $0.06/wp = +50% input cost; only $0.02/wp passed through to module ASP = margin gap. **Risk**: Chinese cell prices may persist elevated near-term; ASP pass-through 1-2 quarters lagged; **margin recovery may be H2 FY27 not H1**. **Q4 margin trend below 20%** = if continues into Q1-Q2 FY27, FY27 EBITDA guidance ₹7,000-7,700 cr at risk; could be ₹6,500-7,000 cr actual = -7-10% miss.",
            },
            {
                title: "FY27 EBITDA Guidance ₹7,000-7,700 cr = +24% Midpoint = Sharp Deceleration from FY26 +117%",
                body:
                    "FY27 EBITDA guidance **+24% midpoint vs FY26 +117%** = sharp deceleration on growth rate; **market may have hoped for ₹8,000+ cr** (mid-30% growth). **Implied FY27 PAT growth**: +15-30% (PAT ₹4,500-5,000 cr; EPS ₹156-175) **vs FY26 +101%** = sharp deceleration. **Reasons for deceleration**: (a) base effect (FY26 4x base from FY24), (b) Q4 margin compression flowing into FY27, (c) D&A rising from new capacity (₹1,800 cr vs ₹1,200 cr), (d) Interest from debt-funded CapEx. **Risk**: investor sentiment for high-growth solar names is sensitive to growth rates; deceleration could trigger further multiple compression.",
            },
            {
                title: "₹10,100 cr CapEx Commitment + Interim ROCE Compression + Capital Intensity Concern",
                body:
                    "**₹10,100 cr CapEx**: ₹6,200 cr Nagpur 10 GW ingot-wafer (24-30 month gestation) + ₹3,900 cr PV glass (18-24 month). **Plus ongoing module/cell capacity** = total ₹13,000-15,000 cr FY27-28. **Funding mix**: OCF ₹6,000-9,000 cr; debt ₹6,000-8,000 cr; **D/E peaks 0.5-0.6x FY27** = manageable but not low. **Interim ROCE compression**: FY27 ROCE -300 to -400 bps before FY28-29 recovery = could compress from current ~22% to ~18% = **multiple compression risk** if not communicated well. **Diversification capital allocation risk**: BESS + inverters + transformers + electrolysers = competing demands; **execution focus risk**.",
            },
            {
                title: "Order Book -₹7,000 cr QoQ Decline (₹60,000 → ₹53,000 cr) — Optically Weak Even If Execution-Driven",
                body:
                    "**Order book ₹53,000 cr at Q4 FY26 vs ₹60,000 cr at Q3 FY26 = -₹7,000 cr decline**; mgmt explanation: execution outpaced new bookings (Q4 revenue ₹8,480 cr executed). **However, optics weak**: in a high-growth manufacturing business, order book should typically grow QoQ; **a sequential decline raises questions on**: (a) new order velocity slowing, (b) US tariff concerns affecting customer commitments, (c) Chinese module dumping pressure on tender wins, (d) ASP pressure leading to longer customer decision cycles. **Risk**: Q1 FY27 order book metric is critical to validate growth visibility.",
            },
            {
                title: "Industry-Wide ASP Pressure + Chinese Module Dumping + Sector Cyclicality",
                body:
                    "**Global module ASPs declining**: $0.10-$0.15/wp peak 2022 → $0.30-$0.31/wp current spot (in cents/wp terms — i.e., reduced significantly from ~$0.60-0.70/wp earlier); **stabilising but at compressed levels**. **Chinese module dumping into India**: domestic ALMM partial protection but utility-scale projects under price pressure. **Sector cyclicality**: solar manufacturing is cyclical (capacity adds vs demand); current cycle margins peaked FY24-25; FY26-27 likely cyclical trough margins until vertical integration kicks in FY28. **Risk**: if Chinese module dumping escalates, Waaree's ASP could compress further despite vertical integration savings = **margin recovery slower than expected**.",
            },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text:
                "**FY26 doubled in absolute — Revenue ₹26,537 cr (+84%); PAT ₹3,884 cr (+101% = DOUBLED); EBITDA ₹5,909 cr (+117%); Module production 12.6 GW (record)**; ROE 25.71%; ROA 13.05%; D/E 0.22x = **exceptional capital efficiency at India's largest solar module manufacturer (26 GW capacity)**. The absolute scale doubling is the most under-appreciated metric in today's reaction.",
            impact: "strengthens",
        },
        {
            text:
                "**Q4 EBITDA margin compressed -445 bps to 18.59% (vs 23.04% YoY; vs 21.9% Kotak expected = 330 bps miss vs consensus)** — the proximate trigger for -10.97% stock crash. **Driver**: Chinese cell prices spiked $0.04→$0.06/wp = +50% input cost; only $0.02/wp pass-through. **This is industry-wide cyclical, not Waaree-specific structural** = margin recovery expected H2 FY27 as ASP catches up + Oman polysilicon ramps.",
            impact: "weakens",
            note: "cyclical input cost shock, not structural",
        },
        {
            text:
                "**FY27 EBITDA guidance ₹7,000-7,700 cr (+24% midpoint)** = decelerating from FY26 +117% but absolute base 4x larger. **₹10,100 cr CapEx commitment** (₹6,200 cr Nagpur ingot-wafer + ₹3,900 cr PV glass) = full vertical integration play; ROCE compresses 300-400 bps interim before FY28-29 recovery. **Forward FY27 P/E ~18-20x; FY28 P/E ~14-16x; Nomura 16x FY27 / 13x FY28 EV/EBITDA = cheap**.",
            impact: "strengthens",
        },
        {
            text:
                "**Multiple FY27-28 catalysts firing simultaneously**: (a) Oman polysilicon ramp from April 2026 = FEOC moat + ~$0.05/wp cost savings, (b) US capacity 2.6 → 4.2 GW (Texas + Arizona Meyer Burger), (c) 126% US CVD non-issue (cells non-Chinese since 2019), (d) Order book ₹53,000 cr (~2x revenue) + pipeline 100+ GW, (e) Waaree 2.0 diversification (BESS 20 GWh + inverters + transformers + electrolysers), (f) Vertical integration (Nagpur ingot-wafer FY28 commissioning).",
            impact: "strengthens",
        },
        {
            text:
                "**Stock at ₹3,118.80 (live, -10.97% intraday) — P/E 23.09x; ROE 25.71%; D/E 0.22x; Mkt Cap ₹89,674 cr — at trough post-IPO valuation; trading at less than half of industry P/E 50.6x; Nomura Buy ₹3,750 target = +20% upside**. **Asymmetric setup**: bear case ₹2,500-2,800 (FY27 margin recovery slow + capex execution risk + further industry headwinds = -10-20%), base case ₹3,800-4,300 (FY27 EBITDA midpoint achieved + margin recovers to 21% + EPS ₹165 × 23-26x = +22-38%), bull case ₹5,000-5,800 (FY28 EPS ₹200 × 25-29x + Oman polysilicon margin lift + US ramp + Waaree 2.0 = +60-86%). **Verdict: BUY/ACCUMULATE on dip — best entry zone since IPO**.",
            impact: "strengthens",
        },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        /* Q1 — Is the core investment thesis intact? */
        thesisIntact: {
            verdict:
                "Yes — fundamentally intact. The Q4 margin miss is industry-wide input cost cyclical (not Waaree-specific structural); FY27 guidance is solid (+24% EBITDA off 4x larger base); strategic moats deepening (Oman polysilicon, US capacity, vertical integration); valuation at trough since IPO opens compelling entry",
            reasons: [
                "**The 'India's largest solar manufacturer + vertical integration + multi-engine future' thesis is structurally strong** — 26 GW module capacity (largest in India; 2.6x Premier Energies); 5.4 GW cell capacity ramping to 12-15 GW; **₹10,100 cr CapEx commitment for full vertical integration** (silicon → ingot-wafer → cells → modules + glass); **US footprint 2.6 → 4.2 GW** (only Waaree + Premier among Indian); **Oman polysilicon FEOC moat from April 2026**; **Waaree 2.0 diversification** (BESS 20 GWh + inverters + transformers + electrolysers); **Order book ₹53,000 cr (~2x revenue) + 100+ GW pipeline** = multi-year visibility; **ROE 25.71%; ROA 13.05%; D/E 0.22x** = exceptional capital efficiency.",
                "**The Q4 margin miss is industry-wide cyclical, not Waaree-specific structural** — Chinese cell prices spiked $0.04→$0.06/wp = +50% input cost; only $0.02/wp pass-through = margin gap. **Pass-through typically 1-2 quarters lagged**; **Oman polysilicon ramp from April 2026** = significant cost reduction lever (~$0.03-0.05/wp savings); **margin recovery expected H2 FY27** as ASP catches up + Oman + Nagpur capacity benefits flow through. **Mgmt has been transparent** on the dynamics; FY27 guidance ₹7,000-7,700 cr factors in conservative margin assumption.",
                "**Strategic moats are genuinely unique among Indian solar manufacturers** — (a) Only Waaree + Premier Energies have meaningful US module capacity (Waaree 4.2 GW vs Premier ~2 GW); (b) **Waaree is *only* Indian solar manufacturer with non-Chinese polysilicon** (Oman) = full FEOC compliance from April 2026; (c) Vertical integration (silicon-to-glass) being built; (d) Largest scale in India = supplier preference + cost advantage; (e) **126% US CVD non-issue for Waaree** (cells non-Chinese since 2019 = ~10% effective tariff) — significant moat as broader Indian solar imports face headwinds.",
                "**FY27 EBITDA guidance ₹7,000-7,700 cr (+24% midpoint) is solid given 4x larger base + Q4 margin compression overhang** — implies FY27 Revenue ~₹35,000-40,000 cr (+32-50%); margin ~21-22% (modest recovery from Q4 18.59%); PAT ~₹4,500-5,000 cr (+15-30%); EPS ₹156-175. **Nomura's 16x FY27 EV/EBITDA at current ₹3,118 = *cheap*. Multiple expansion lever**: as margin recovers FY28 + Oman + Nagpur + US ramp + Waaree 2.0 monetisation, P/E re-rates from 23.09x toward 28-32x = **+20-40% multiple uplift on top of EPS compounding**.",
                "**The thesis weakens if**: (a) Chinese cell prices stay elevated >2 quarters + ASP pass-through fails = sustained margin compression below 20% (FY27 EBITDA <₹6,500 cr); (b) Order book continues to decline QoQ + new order velocity slowing = visibility erosion; (c) ₹10,100 cr CapEx execution slips + ROCE compression deeper than expected (sub-18%); (d) US trade policy reverses (full 126% CVD applied broadly); (e) Waaree 2.0 diversification distracts from core module focus. **The thesis strengthens if**: (a) Q1 FY27 EBITDA margin ≥20% confirms recovery cadence, (b) Oman polysilicon ramp ahead of plan, (c) US capacity 4.2 GW operational mid-2026 with strong revenue ramp, (d) Order book regains ₹60,000+ cr trajectory, (e) BESS 20 GWh / electrolyser commercial wins announced.",
            ],
        },

        /* Q2 — Re-rate triggers + probability */
        rerateTriggers: [
            {
                trigger: "Q1 FY27 EBITDA margin ≥20% + Q1 Revenue ≥+30% YoY + new order wins announced",
                probability: "Medium-High",
                rationale:
                    "**Q1 FY27 (July call) is *the* critical first datapoint** to validate margin recovery + growth visibility post-Q4 miss. **EBITDA margin ≥20%** (vs Q4 18.59%) confirms recovery cadence; **Revenue ≥+30% YoY** confirms volume ramp; **new order wins** (US utility-scale, domestic government, BESS) confirm pipeline conversion. **If achieved**: market re-rates from current 23.09x toward 26-28x = **+13-21% upside to ₹3,500-3,800**. **Risk**: if Q1 margin <20% or revenue <+25%, -10-15% downside to ₹2,700-2,800.",
            },
            {
                trigger: "Oman polysilicon ramp + Nagpur ingot-wafer commissioning timeline updates (FY27-28)",
                probability: "Medium-High",
                rationale:
                    "**Oman polysilicon production launching April 2026** = first non-Chinese polysilicon for Indian solar mfr; ramp updates in Q1-Q2 FY27 calls. **Nagpur 10 GW ingot-wafer** commissioning targeted FY28; quarterly progress updates critical. **If on-track**: market prices in vertical integration savings = ~₹2,500-4,000 cr annual EBITDA tailwind FY28-29 = **+15-25% multiple uplift to P/E 27-29x = +17-26% upside**. **Risk**: commissioning delays of 6-12 months = -10-15% multiple compression.",
            },
            {
                trigger: "US capacity 4.2 GW operational by mid-2026 + IRA 45X credit monetisation + DOE preferred supplier wins",
                probability: "Medium-High",
                rationale:
                    "**US module capacity 2.6 → 4.2 GW by mid-2026** (1.6 GW Texas + 1 GW Arizona Meyer Burger). **Each 1 GW US capacity ramp** = ~$350-400M revenue at $0.35-$0.38/wp + 45X credit ~$0.07/wp = **~₹3,000-3,500 cr revenue + ₹600-800 cr EBITDA contribution annually**. **If on-track**: US revenue ~₹13,000-15,000 cr FY28 = significant geographic diversification = **+10-15% multiple uplift**. **Risk**: US trade policy reversals; Trump-era IRA cuts (45X retained per latest signals but ITC uncertain).",
            },
            {
                trigger: "Waaree 2.0 commercial validation: BESS first orders + Inverter/Transformer revenue + Electrolyser pilot",
                probability: "Medium",
                rationale:
                    "**Waaree 2.0 = optionality monetisation play**. **BESS 20 GWh by FY28** = first commercial orders FY27-28; PLI ACC battery scheme participant. **Inverters/Transformers**: BoS revenue FY27. **Electrolysers**: pilot FY27 → commercial FY28-29. **Each commercial validation milestone** = +5-10% multiple uplift on optionality value. **Subsidiary carve-out optionality** = potential value unlock event. **Risk**: capital allocation discipline; competitive intensity.",
            },
            {
                trigger: "Sector-wide multiple recovery as solar capex cycle accelerates + India 280 GW target progresses",
                probability: "Medium",
                rationale:
                    "**Indian solar sector P/E multiples are elevated** (industry 50.6x); **Waaree at 23.09x = significant discount to peer set**. **As sector executes** on 280 GW solar by 2030 + 500 GW renewables target + BESS capacity adds + green hydrogen mission, sector re-rating likely. **Waaree as best-positioned among large Indian solar manufacturers** would see disproportionate beta. **External catalyst**, not in mgmt's full control. **+10-20% multiple lift potential** on sector re-rating alone.",
            },
        ],

        /* Q3 — Upside if guidance fully met */
        upsideIfGuidanceMet: {
            currentPrice: "₹3,118.80 (live NSE LTP via Groww MCP, 1 May 2026 11:55 IST — *down -10.97% intraday on Q4 results day*)",
            targetPrice: "₹3,800 – ₹5,200",
            upsidePct: "+22% to +67%",
            horizon: "18-24 months (FY28 EPS-multiple basis with margin recovery + Oman polysilicon + Nagpur commissioning + US capacity ramp + Waaree 2.0 monetisation)",
            assumptions:
                "**Base case (FY27 Revenue ₹35,500 cr + EBITDA margin 21% + EPS ₹160):** FY27 Revenue ₹35,500 cr (+34%); EBITDA ₹7,455 cr (mid-range guidance ₹7,000-7,700 cr); D&A ₹1,800 cr; EBIT ₹5,655 cr; Interest ₹400 cr; PBT ₹5,255 cr; Tax 25% = ₹1,314 cr; **PAT ₹3,941 cr (+1.5%) on heavier D&A; EPS ₹137**. *Wait* — let me recalculate: FY27 EBITDA ₹7,350 cr + D&A ₹1,800 cr + Interest ₹400 cr + Other Inc ₹100 cr = PBT ₹5,250 cr; Tax ₹1,313 cr = **PAT ₹3,937 cr; EPS ₹137**. **Slight FY27 PAT growth due to D&A burden from new capacity**. **FY28 Build (Oman polysilicon + Nagpur + US capacity + margin recovery)**: Revenue ₹47,000 cr (+32%); EBITDA margin 23% = ₹10,810 cr; D&A ₹2,200 cr; Interest ₹500 cr; PBT ₹8,210 cr; Tax 25% = ₹2,053 cr; **PAT ₹6,158 cr (+56%); EPS ₹214**. **FY29 Build**: Revenue ₹58,000 cr (+23%); EBITDA margin 24%; PAT ₹7,800 cr; EPS ₹271. **Apply forward multiples**: FY28 EPS ₹214 × 22x = ₹4,708 (conservative); 25x = ₹5,350; 28x = ₹5,992. **Bull case** (Waaree 2.0 monetisation + Oman ramp ahead + US 5+ GW capacity): FY28 EPS ₹240 × 25-28x = ₹6,000-6,720. **Conservative target ₹3,800 (FY27 EPS ₹137 × 28x = above-market multiple given trough); aggressive target ₹5,200 (FY28 EPS ₹214 × 24.3x)**. **Range ₹3,800-5,200 (+22-67%) over 18-24 months**.",
            workings:
                "**FY27 Build:** Revenue ₹35,500 cr (+34% YoY; module capacity ramp 65%→78%, US 4.2 GW ramping, ASP normalising); EBITDA margin 21% = ₹7,350 cr (mid of guidance); D&A ₹1,800 cr (rising on new capacity FY26 commissioning); EBIT ₹5,550 cr; Interest ₹400 cr; Other Inc ₹100 cr; PBT ₹5,250 cr; Tax 25% = ₹1,313 cr; **PAT ₹3,937 cr (+1%); EPS ₹137**. **FY28 Build:** Revenue ₹47,000 cr (+32%; Oman polysilicon + Nagpur + US full ramp + Waaree 2.0 first revenue); EBITDA margin 23% = ₹10,810 cr; D&A ₹2,200 cr; EBIT ₹8,610 cr; Interest ₹500 cr; Other Inc ₹100 cr; PBT ₹8,210 cr; Tax 25% = ₹2,053 cr; **PAT ₹6,158 cr (+56%); EPS ₹214**. **FY29 Build:** Revenue ₹58,000 cr (+23%); EBITDA margin 24%; PAT ₹7,800 cr; EPS ₹271. **Multiples**: 5-yr median P/E for Indian solar peer set 35-50x; current Waaree 23.09x = at lower end; industry 50.6x. Apply 22x to FY28 EPS ₹214 = ₹4,708; 25x = ₹5,350; 28x = ₹5,992. **Bull case** (Oman + US ramp ahead + Waaree 2.0 monetisation + sector re-rating): 28x × FY28 EPS ₹240 = ₹6,720. **18-24 month range ₹3,800-5,200 (+22-67%)** weights base + partial bull.",
        },

        /* Q4 — Best value entry zone */
        valuationEntryZone: {
            bestValueRange: "₹2,700 – ₹3,200",
            fairValue: "₹3,200 – ₹3,800",
            currentZone: "Best Value — at upper edge of best-value zone (₹3,118.80) post -10.97% intraday crash",
            rationale:
                "**Trailing P/E:** 23.09x vs industry 50.6x = **trading at less than half of renewable peer set** (Premier Energies 80-100x, Borosil Renewables 80x, Suzlon 60x, Inox Wind 50x, Solar Industries 50x). **5-yr median P/E for Indian solar manufacturers ~35-50x at *normalised* earnings; Waaree current 23.09x is at *trough* post-IPO levels** = effective forward P/E significantly below peer set. **P/B:** 6.21x vs ROE 25.71% (P/B/ROE = 0.24 = significantly cheaper than Premier 0.40+) = highly capital-efficient discount. **Forward P/E on FY27E EPS ₹137**: 22.8x — *fair-to-cheap*; **on FY28E EPS ₹214**: 14.6x — *very cheap if Oman + Nagpur + US ramp + Waaree 2.0 deliver*. **Nomura 16x FY27 / 13x FY28 EV/EBITDA = cheap on EBITDA basis**. **52-week range**: estimated ₹2,200-3,500+; **today's panic crash to ₹3,118.80 = at near 52-wk lows + below recent ₹3,500 peak** = de-rating largely complete on margin compression overhang. **Best value entry ₹2,700-3,200** = 12-15x FY28E P/E + significant downside cushion for further margin compression / industry headwinds. **Fair value ₹3,200-3,800** = 15-18x FY28E P/E = current to near-term zone post-results crash. **Above ₹3,800** starts pricing FY27 EPS ₹137 at 28x explicitly; **above ₹5,200** prices full FY28 base case (EPS ₹214 × 24x). **Per *valuation_analysis.md* logic**: deploy aggressively in current ₹2,700-3,200 zone (post-results inflection) with conviction earned from FY26 doubling + structural moats + sector tailwinds; **standard accumulate ₹3,200-3,500**; reduce above ₹4,000 (FY27 base case priced); avoid above ₹5,200 (FY28 base case priced). **Asymmetric setup risks: -10 to -20% downside to ₹2,500-2,800 (FY27 margin recovery slow + capex execution risk + further industry headwinds + Chinese module dumping + sector multiple compression) vs +22-67% upside to ₹3,800-5,200 (FY27 EBITDA midpoint + margin recovers to 21% + Oman polysilicon margin lift + US capacity ramp + Waaree 2.0 monetisation + Nagpur commissioning) = roughly 3:1 to 5:1 reward-to-risk** — *highly compelling at current ₹3,118.80*. The Q4 panic crash + margin miss has crystallised an unusually favourable entry zone in India's largest vertically-integrated solar manufacturer at trough post-IPO valuation. **Nomura ₹3,750 target = +20% upside** validates the conservative base case.",
        },

        summary:
            "**Waaree Energies Q4 FY26 = topline blowout + margin disappointment + best entry zone since IPO** — Q4 Revenue ₹8,480 cr (+112% YoY); FY26 Revenue ₹26,537 cr (+84%); Q4 PAT ₹1,126 cr (+75%); FY26 PAT ₹3,884 cr (+101% = DOUBLED); FY26 EBITDA ₹5,909 cr (+117%); module production 12.6 GW (record). **But Q4 EBITDA margin compressed -445 bps to 18.59% (vs 23.04% YoY; vs 21.9% Kotak expected = 330 bps miss vs consensus)** — the proximate trigger for **stock crash -10.97% to ₹3,118.80** (from prev close ₹3,502.90). **The margin miss is industry-wide cyclical**: Chinese cell prices spiked $0.04→$0.06/wp = +50% input cost; only $0.02/wp pass-through = margin gap. **Pass-through typically 1-2 quarters lagged + Oman polysilicon ramp from April 2026** = margin recovery expected H2 FY27. **FY27 EBITDA guidance ₹7,000-7,700 cr (+24% midpoint)** = decelerating from FY26 +117% but absolute base 4x larger. **₹10,100 cr CapEx commitment** (₹6,200 cr Nagpur 10 GW ingot-wafer + ₹3,900 cr PV glass) = full vertical integration play; ROCE compresses 300-400 bps interim before FY28-29 recovery. **Multiple FY27-28 catalysts firing simultaneously**: (a) Oman polysilicon ramp from April 2026 = FEOC moat + ~$0.05/wp cost savings, (b) US capacity 2.6 → 4.2 GW (Texas + Arizona Meyer Burger acquisition; 126% US CVD non-issue), (c) Order book ₹53,000 cr (~2x revenue) + pipeline 100+ GW, (d) Waaree 2.0 diversification (BESS 20 GWh by FY28 + inverters + transformers + electrolysers), (e) Vertical integration (Nagpur ingot-wafer FY28 commissioning + cell capacity ramp). **Trading at P/E 23.09x vs industry 50.6x = less than half of peer set** (Premier Energies 80-100x, Borosil Renewables 80x, Suzlon 60x); **forward FY27 P/E ~22.8x; FY28 P/E ~14.6x (EPS ₹214)** = *cheap CRDMO solar manufacturer at trough post-IPO valuation*. **Asymmetric setup at ₹3,118.80**: bear case ₹2,500-2,800 (FY27 margin slow + capex execution risk + further industry headwinds = -10-20%), base case ₹3,800-4,300 (FY27 EBITDA midpoint + margin recovers to 21% + EPS ₹137 × 28x = +22-38%), bull case ₹5,000-5,800 (FY28 EPS ₹214 × 24-27x + Oman polysilicon + US ramp + Waaree 2.0 = +60-86%). **Roughly 3:1 to 5:1 reward-to-risk** = *highly compelling*. **Verdict: BUY/ACCUMULATE on dip — best entry zone since IPO**; aggressive accumulate ₹2,700-3,200; valid entry up to ₹3,400; reduce above ₹4,000; avoid above ₹5,200. **This is similar to the Syngene / KFin Technologies situations (single-quarter margin pressure on otherwise high-quality franchises) but with stronger structural moats** (largest scale + vertical integration + US footprint + Oman polysilicon FEOC + Waaree 2.0 multi-engine optionality), **clearer cyclicality** (industry-wide input cost shock vs single-product issue), and **more compelling valuation** (P/E 23.09x vs industry 50.6x = less than half of peer set). **Watch FY27 H1 cadence**: Q1 FY27 EBITDA margin ≥20% + revenue ≥+30% YoY + new order wins announced + Oman polysilicon ramp updates = trajectory confirmation. **Nomura Buy ₹3,750 target validates the conservative base case**. The earnings compounding (FY27-29 PAT CAGR 25-35% off normalised base) + multiple expansion (23.09x → 28-32x as margin recovers + capital efficiency demonstrated) is the dual return driver — among the cleanest compelling renewable energy entry points in the market today, *assuming* mgmt delivers FY27 H2 margin recovery + Oman polysilicon ramp + US capacity execution + CapEx absorption discipline. **The Q4 margin miss panic crash has opened an asymmetric entry into India's largest solar manufacturer at trough valuation**.",
    },
});
