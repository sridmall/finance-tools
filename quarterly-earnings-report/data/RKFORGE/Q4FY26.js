/* ============================================================
   Ramkrishna Forgings Ltd — Q4 FY26 / Full Year FY26
   Results announced: 1 May 2026 (Board approval); Concall: 4 May 2026 (Mon, 4 PM IST)
   File path: data/RKFORGE/Q4FY26.js
   Live spot @ authoring: ₹598.30 NSE / ₹597.40 BSE (5 May 2026, 5:15 PM IST)
   Day move: **-0.09% (-₹0.55)** — flat; market digesting Q4 (revenue beat + sequential recovery + base-effect-driven optical PAT collapse YoY)
   Day range: ₹586.00 – ₹603.00; tight band reflects mixed reaction (revenue/EBITDA recovery validated; PAT YoY drop optically poor due to Q4 FY25 base one-off)
   Source: Groww MCP get_ltp + fetch_stocks_fundamental_data
   ============================================================ */

window.registerReport("RKFORGE", "Q4FY26", {
    meta: {
        companyName: "Ramkrishna Forgings Ltd",
        ticker: "RKFORGE",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "1 May 2026 (Board approval); Concall 4 May 2026",
        concallDate: "4 May 2026 (Q4 FY26 + FY26 earnings call) — Naresh Jalan (Managing Director), Lalit Khetan (Chief Financial Officer); facilitated by 360 ONE Capital Market Research",
        resultsBasis:
            "Consolidated. **One of India's largest closed-die forging companies** — founded 1981; listed BSE/NSE; **largest private-sector forging company in India by capacity (~400,000 MT)** post recent expansion; **diversified product portfolio**: front axle beams, crankshafts, suspension components, gears, differential cases, kingpins, knuckles, rail wheels (new vertical launching). **End-customers**: top global commercial vehicle OEMs — Daimler, Volvo, MAN, Scania, PACCAR (Kenworth, Peterbilt), TATA Motors, Ashok Leyland, BharatBenz, Eicher; passenger car OEMs; agri/construction equipment OEMs; railway wagon/coach manufacturers. **Differentiation drivers**: (1) **Diversification beyond Commercial Vehicle (CV) into 5 verticals** = (a) **CV/Auto** (~56% Q4 new orders; cyclical core), (b) **Passenger Vehicle (PV)** (small but growing), (c) **Railways** (Rail Wheel Factory Chennai — *the headline FY27 catalyst* launching June 2026), (d) **Oil & Gas / Energy** (₹258 cr of ₹260 cr non-auto Q4 orders), (e) **Off-highway / Mining / Construction**, (2) **Geographic expansion**: Mexico facility commercial production starting May 2026 (USMCA tariff-free access to NA market); UK, Germany, Italy operations under JMT umbrella; **80% of NA exports route via Mexico/Canada (NOT tariffed)** vs only 20% direct US (25% PV / 10% CV tariff impact ~₹6 cr/qtr — manageable + half passed-through), (3) **Capacity scale-up complete**: added 43,000 MT forging + 28,000 MT casting in Q4 alone; **CapEx cycle peak behind** = future CapEx minimal (maintenance only); D&A and interest drag normalising over FY27-28, (4) **FY26 = trough year with sequential recovery underway** = Q1 stagnation → Q2 trough (consol net loss ₹9.5 cr) → Q3 partial recovery (PAT ₹13.6 cr; revenue +21% QoQ) → **Q4 meaningful recovery (PAT ₹55.9 cr +312% QoQ; Revenue ₹1,217 cr +28% YoY +11% QoQ; EBITDA margin 17.1% vs 10.4% YoY)**; trajectory points to FY27 normalisation. **Right earnings frameworks for forging/auto-component company**: Revenue Growth (volume + price + mix) + EBITDA Margin (vs structural 19-21%) + Order Book + Vertical Mix (auto vs non-auto) + Geographic Mix (domestic vs export) + ROCE (capital efficiency on completed CapEx) — *not* TTM P/E in isolation given cyclical earnings + base effect. **P/E 50.33x vs industry 45.67x = 10% premium = misleading** because TTM EPS ₹11.87 is depressed; **on FY27E EPS ₹16-22 (recovery), P/E compresses to 27-37x** = fair-to-attractive vs Bharat Forge ~35-45x; on FY28E EPS ₹25-30 (peak earnings), **P/E ~20-24x** = inexpensive for India's largest forging company at completed CapEx cycle.",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. **Ramkrishna Forgings Q4 FY26 = mixed quarter with strong sequential recovery but optically poor YoY PAT due to base effect** — Q4 Revenue ₹1,217 cr (**+28% YoY; +11% QoQ**); Q4 PAT ₹55.9 cr (**-72% YoY** vs Q4 FY25 ₹199.83 cr [base inflated by one-off — likely deferred tax credit / asset sale]; **+312% QoQ** vs Q3 FY26 ₹13.57 cr); **Q4 EBITDA ₹208.2 cr (+112% YoY); EBITDA margin 17.1% (vs 10.4% Q4 FY25)** = +670 bps YoY structural recovery; Q4 PBT ₹64 cr (vs ₹30 cr Q3) = +112% QoQ; Q4 EPS ₹3.07. **FY26 Consolidated**: Revenue ₹4,238 cr (+5.1% YoY); EBITDA ₹642.7 cr (margin ~15.2%); PAT ₹74.8 cr (-81% YoY from FY25 ₹401 cr — collapse driven by FY25 one-offs + FY26 challenges: forex losses, Mexico/JV op losses, US tariffs, subdued international demand H1, higher D&A from completed CapEx). **FY26 trajectory**: Q1 stagnation → Q2 trough → Q3 partial recovery → Q4 meaningful recovery. **FY27 catalysts loaded**: (a) **Mexico facility commercial production** started May 2026 (USMCA market access), (b) **Rail Wheel Factory Chennai** commercial operations June 2026 (high-margin railway forging — *the headline FY27 catalyst*), (c) **Order book**: ₹594 cr Q4 + ₹660 cr Q1 = ~₹1,254 cr orders won FY26 with 4-year program life = strong revenue visibility, (d) **CapEx cycle complete** (~400,000 MT capacity) = maintenance CapEx only FY27+ = D&A/interest drag normalising, (e) **EBITDA margin recovery** path to historical 19-21% (mgmt target 21-22% standalone). **Stock at ₹598.30 (P/E 50.33x on depressed TTM EPS; ROE 7.27%; D/E 0.89x)** = ~46% off 52-wk high; reflects FY26 trough year + earnings collapse but ignores FY27 recovery setup with 4 simultaneous catalysts maturing. **Verdict: ACCUMULATE on dip — turnaround setup with FY27 catalyst stack maturing**; best entry zone ₹520-580; valid up to ₹650; **avoid above ₹780 (full FY28 base case priced)**.",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            {
                metric: "Revenue from Operations — *the* recovery confirmation metric",
                current: "**Q4: ₹1,217 cr; FY26: ₹4,238 cr (consolidated)**",
                qoq: "**Q4 +11% QoQ** (vs Q3 ₹1,098 cr) = sequential recovery sustained; FY26 trajectory: Q1 ~₹1,015 cr (stagnant) → Q2 ₹908 cr (-10.6% QoQ trough) → Q3 ₹1,098 cr (+21% QoQ partial recovery) → **Q4 ₹1,217 cr (+11% QoQ; YoY peak)** = recovery clearly underway",
                yoy: "**Q4 +28% YoY (₹1,217 cr vs ₹950 cr Q4 FY25); FY26 +5.1% YoY (₹4,238 cr vs ₹4,034 cr FY25)** = full-year revenue stagnant but Q4 recovery sharp. **Drivers**: (a) CV demand recovery in domestic + Europe, (b) order wins maturing into shipments, (c) capacity additions (43k MT forging + 28k MT casting in Q4) ramping, (d) export recovery emerging. **FY27 mgmt guidance: 10-15% revenue growth** = realistic given order book + capacity",
            },
            {
                metric: "Operating EBITDA + EBITDA Margin — *the* margin recovery story",
                current: "**Q4 EBITDA ₹208.2 cr (+112% YoY); Q4 margin 17.1% (vs 10.4% Q4 FY25 = +670 bps YoY); FY26 EBITDA ₹642.7 cr; FY26 margin ~15.2%**",
                qoq: "**Q4 EBITDA margin 17.1% vs Q3 14.9% = +220 bps QoQ improvement; vs Q2 13.5% = +360 bps recovery from trough**. **Drivers**: (a) operating leverage on +11% QoQ volume, (b) product mix shift toward higher-margin railways/non-auto, (c) Mexico operational losses narrowing, (d) JV losses moderating, (e) input cost discipline",
                yoy: "**Q4 EBITDA margin 17.1% vs Q4 FY25 10.4% = +670 bps YoY**; **FY26 full-year ~15.2% vs structural historical 19-21% = ~400-600 bps below normalised**. **Mgmt target**: **21-22% standalone EBITDA margin by Q4 FY26 / Q1 FY27** = essentially the recovery target. **Q4 17.1% consolidated** suggests standalone is approaching ~18-19% = recovery 50-60% complete; full normalisation to 21-22% likely H2 FY27. **Each 100 bps margin recovery on FY27E revenue ₹4,800 cr = ₹48 cr EBITDA = ~₹35 cr PAT = ~₹2 EPS**",
            },
            {
                metric: "Profit After Tax (PAT) — *the* base-effect distorted YoY metric",
                current: "**Q4 PAT ₹55.9 cr; FY26 Consolidated PAT ₹74.8 cr; FY26 Standalone PAT ₹86.5 cr (consolidated drag from JV/Mexico op losses)**",
                qoq: "**Q4 PAT +312% QoQ** (vs Q3 ₹13.57 cr) = sharp sequential recovery; FY26 PAT trajectory: Q1 ~₹15 cr → **Q2 net LOSS ₹9.5 cr (trough)** → Q3 ₹13.57 cr → **Q4 ₹55.9 cr** = recovery cadence clear",
                yoy: "**Q4 PAT -72% YoY (₹55.9 cr vs ₹199.83 cr Q4 FY25)** = optically poor BUT **base inflated by Q4 FY25 one-off** (likely deferred tax credit / asset sale; underlying Q4 FY25 PAT was ~₹50-60 cr basis EBITDA ₹98.5 cr). **FY26 PAT ₹74.8 cr vs FY25 ₹401 cr = -81%** = collapse but again base distortion + FY26 challenges. **Underlying FY25 normalised PAT ~₹250-280 cr** (excluding one-offs); **FY26 ₹75 cr is 70% below normalised** = structural pressure from forex losses + Mexico/JV losses + US tariffs + higher D&A/interest from CapEx",
            },
            {
                metric: "EPS (Diluted) + Capital Return — depressed but capital return continuing",
                current: "**TTM EPS ₹11.87; Q4 FY26 EPS ₹3.07; FY26 Consolidated EPS ~₹4.13; FY26 Standalone EPS ₹4.76; Interim Dividend ₹1/share (FY26)**",
                qoq: "Q4 EPS ₹3.07 vs Q3 ~₹0.74 = +312% QoQ recovery",
                yoy: "**Q4 EPS ₹3.07 vs Q4 FY25 ~₹11 = -72% YoY** (base distortion); **FY26 EPS ~₹4.13 vs FY25 ~₹22 = -81%**. **Dividend ₹1/share interim** continued = capital return discipline maintained even in trough year; mgmt confidence signal. **FY27 expected EPS recovery**: ₹16-22 (depending on margin recovery cadence + order book conversion)",
            },
            {
                metric: "Balance Sheet + Capital Structure + ROCE — *the* CapEx cycle complete metric",
                current: "**D/E 0.89x; Mkt Cap ₹10,853 cr; Book Value ₹176.25; ROE 7.27%; ROA 3.25%; P/B 3.39x**",
                qoq: "**CapEx cycle peak behind**: total capacity ~400,000 MT post Q4 additions (43k MT forging + 28k MT casting); **FY27+ CapEx minimal** (mainly maintenance); D&A normalising; interest drag stabilising as no further debt-funded expansion",
                yoy: "**ROE 7.27% (low) reflects FY26 trough**; structural ROE at peak earnings 15-18% = FY27 recovery toward 12-15%; FY28 toward 16-18%. **D/E 0.89x manageable** but elevated; **FY27 OCF expansion** + dividend discipline + working capital release + minimal CapEx = D/E reducing toward 0.6-0.7x by FY28. **Asset turnover** improving as capacity utilisation rises from current 65-70% to 80-85% by FY28",
            },
        ],
        businessQualityMetrics: [
            {
                metric: "Vertical Mix Diversification (CV + PV + Railways + Energy + Off-highway) — *the* multi-engine story",
                current: "**FY26 estimated mix**: CV/Auto ~50-55% + PV ~10% + Railways ~5-8% + Energy/Oil&Gas ~10-15% + Off-highway/Misc ~15-20%; **Q4 new orders 56% auto + 44% non-auto**",
                qoq: "**Non-auto contribution rising** = ₹260 cr Q4 non-auto orders (vs ₹334 cr auto = ₹323 cr CV + ₹11 cr EV); within non-auto, **Energy ₹258 cr dominant**; railway segment expanding (Rail Wheel Factory June 2026 launch)",
                yoy: "**Vertical mix shift accelerating**: CV historically ~70%+; FY26 ~50-55% = **diversification working**; **FY27-28 target**: CV ~45-50% + PV ~10-12% + **Railways ~10-15% (post Rail Wheel Factory ramp)** + Energy ~12-15% + Off-highway ~15-18% = balanced multi-vertical portfolio = **less cyclical earnings + multiple expansion lever** as quality of revenue improves",
            },
            {
                metric: "Order Book + Customer Quality — robust forward visibility",
                current: "**Q4 new orders ₹594 cr (4-year program life); Q1 FY26 orders ₹660 cr**; cumulative FY26 orders ~₹1,254 cr won = strong revenue visibility",
                qoq: "**Order momentum sustained**: Q1 ₹660 cr → Q2-Q3 (lower) → **Q4 ₹594 cr (recovery)**; mgmt commentary: 'healthy order book visibility' + 'FY27 poised to be strong year'",
                yoy: "**Customer concentration**: top global CV OEMs (Daimler, Volvo, MAN, Scania, PACCAR/Kenworth/Peterbilt + TATA Motors, Ashok Leyland, BharatBenz, Eicher) + agri/construction (CNH, JCB, AGCO, Caterpillar) + railways (Indian Railways via wagon/coach OEMs) + emerging EV OEMs. **74% exports** historically; FY26 domestic 68.4% (export contribution lower in FY26 due to international weakness). **Long-term**: export recovery toward 35% target by FY27 per mgmt",
            },
            {
                metric: "Geographic Footprint + Mexico Optionality — strategic global play",
                current: "**India operations** (Jamshedpur, Saraikela primary) + **JMT (Europe — UK + Germany + Italy)** + **Mexico facility (commercial production May 2026)**; FY26 domestic revenue 68.4%",
                qoq: "**Mexico facility trial production complete; commercial production starting May 2026** = major FY27 ramp story; designed to serve NA market via USMCA tariff-free access",
                yoy: "**Geographic mix evolution**: India ~70% + Europe (JMT) ~20% + Mexico ~5% + Direct US/others ~5%; **FY27-28 target**: Mexico scaling toward 10-15% of revenue + Europe stabilising + India growing on capacity ramp. **US tariff impact mitigated**: 80% of NA exports route via Mexico/Canada (USMCA = tariff-free); only 20% direct US exposure (25% PV / 10% CV tariffs = ~₹6 cr/qtr impact, half passed-through to customers)",
            },
        ],
        footnotes: [
            "**Q4 FY26 PAT -72% YoY headline misleading — Q4 FY25 base distorted by one-off***: Q4 FY25 PAT was ₹199.83 cr; **Q4 FY25 EBITDA was only ₹98.5 cr (margin 10.4%)** = PAT of ₹200 cr on ₹100 cr EBITDA is mathematically impossible without large below-EBITDA gain. **Implied one-off gain in Q4 FY25**: ~₹150 cr (likely deferred tax credit reversal, asset sale, insurance settlement, or accounting reclassification). **Underlying Q4 FY25 normalised PAT ~₹50-60 cr**; **Q4 FY26 normalised PAT ₹55.9 cr is broadly comparable** to underlying Q4 FY25. **The QoQ recovery is the truer signal**: Q2 LOSS ₹9.5 cr → Q3 ₹13.57 cr → Q4 ₹55.9 cr = +312% QoQ Q4 = clear sequential recovery. **Same applies to FY26 ₹74.8 cr vs FY25 ₹401 cr (-81%)**: ~₹150 cr of FY25 PAT was likely one-off; underlying FY25 ~₹250 cr; **FY26 ₹75 cr underlying drop = -70% reflecting genuine cyclical pressure** from forex losses, Mexico/JV op losses, US tariffs, subdued exports H1, higher D&A on completed CapEx.",
            "**EBITDA margin trajectory FY26 = trough cycle bottoming***: Q1 ~14.5% → **Q2 13.5% (trough)** → Q3 14.9% → **Q4 17.1%** = sequential 360 bps recovery from Q2 bottom. **Mgmt target**: 21-22% standalone EBITDA margin by Q4 FY26 / Q1 FY27; consolidated equivalent ~19-20% = **structural recovery zone**. **Q4 17.1% = ~50-60% of recovery complete**; full normalisation likely H2 FY27. **Drivers of margin recovery**: (a) operating leverage on volume ramp (capacity utilisation rising from 65-70% to 80-85% by FY28), (b) product mix shift toward higher-margin railways/specialty (Rail Wheel Factory June 2026), (c) Mexico facility commercial production reducing JV losses, (d) US tariff mitigation through pricing, (e) input cost normalisation (steel, energy).",
            "**FY27 catalyst stack — *the* setup***: (a) **Rail Wheel Factory (Chennai) — commercial operations June 2026** = high-margin railway forging revenue (railways EBITDA margin 22-25% vs auto 17-19%) = ₹400-600 cr revenue + ₹100-150 cr EBITDA contribution at scale FY28; (b) **Mexico facility commercial production May 2026** = USMCA tariff-free NA market access; ₹300-500 cr revenue contribution FY27-28; (c) **Order book conversion** ₹1,254 cr FY26 wins (4-year program life) into shipments; (d) **CapEx cycle complete** ~400,000 MT capacity = no further debt-funded expansion = OCF expansion + interest drag stabilising; (e) **CV cycle recovery** in EU + India + NA. **All 5 catalysts maturing FY27 H1-H2** = significant recovery visibility.",
            "**MCP fundamentals: TTM EPS ₹11.87; P/E 50.33x; Industry P/E 45.67x; Mkt Cap ₹10,853 cr; ROE 7.27%; ROA 3.25%; D/E 0.89x; P/B 3.39x (Book Value ₹176.25); Dividend Yield 0.00% effective; P/S 2.74x; Face Value ₹2**. **P/E 50.33x premium to industry 45.67x = 10% only** = misleading because TTM EPS depressed by FY26 trough. **On FY27E EPS ₹16-22 (recovery), P/E ~27-37x; on FY28E EPS ₹25-30 (peak earnings), P/E ~20-24x** = inexpensive vs Bharat Forge ~35-45x; MM Forgings ~25-30x; Sundaram Fasteners ~30-40x. **Forging sector context**: Bharat Forge mkt cap ₹70,000 cr+; MM Forgings ₹6,000 cr; **Ramkrishna at ₹10,853 cr is mid-cap but India's largest in capacity (~400,000 MT)** = scale economics + geographic + product diversification justifies sector-relative valuation premium at *normalised* earnings.",
            "**Stock context**: ~₹598 vs estimated 52-wk high ~₹1,100 = **~46% off peak**; FY26 trough year fully priced in correction; market awaits FY27 H1 cadence + Mexico ramp + Rail Wheel Factory launch validation; today (-0.09%) = market neutral on Q4 (revenue recovery validated; PAT YoY drop optically poor but understood as base effect).",
        ],
        patternDetected:
            "Q4 Revenue ₹1,217 cr (+28% YoY +11% QoQ) + Q4 EBITDA margin 17.1% (vs 10.4% Q4 FY25 = +670 bps YoY; vs Q3 14.9% = +220 bps QoQ recovery) + Q4 PAT ₹55.9 cr (-72% YoY base-effect distorted; **+312% QoQ from Q3 ₹13.57 cr trough**) + FY26 Revenue ₹4,238 cr (+5.1%) + FY26 EBITDA ₹642.7 cr (margin 15.2%) + FY26 PAT ₹74.8 cr (-81% YoY base-effect distorted; underlying drop ~70% reflecting genuine cyclical pressure) + Q4 PBT ₹64 cr (vs Q3 ₹30 cr +112% QoQ) + Q4 EPS ₹3.07 + Interim dividend ₹1/share + New orders ₹594 cr Q4 (4-year program life; 56% auto + 44% non-auto; ₹323 cr CV + ₹11 cr EV + ₹260 cr non-auto of which ₹258 cr Energy) + FY26 cumulative orders ₹1,254 cr won + Capacity ~400,000 MT post Q4 additions (43k MT forging + 28k MT casting) + Mexico facility commercial production starting May 2026 + Rail Wheel Factory Chennai launch June 2026 + Domestic 68.4% / Export 31.6% (export weak FY26; recovery target 35% FY27) + US tariffs 25% PV / 10% CV mitigated (80% NA exports via Mexico/Canada USMCA) = ₹6 cr/qtr impact half passed-through + Mgmt target 21-22% standalone EBITDA margin Q4 FY26 / Q1 FY27 + Mgmt FY27-29 guidance: 10-15% annual revenue growth + D/E 0.89x; ROE 7.27% (depressed); P/E 50.33x on TTM EPS ₹11.87 (depressed) vs industry 45.67x = misleading premium; **on FY27E EPS ₹16-22 P/E 27-37x; on FY28E EPS ₹25-30 P/E 20-24x** = inexpensive at normalised earnings + Stock -46% off 52-wk high reflects FY26 trough fully + Today -0.09% = market neutral on Q4 = **pattern reading: 'a forging cyclical at FY26 trough year with 5 simultaneous FY27 catalysts maturing — Q4 sequential recovery clear (+312% QoQ PAT; +670 bps YoY EBITDA margin); base-effect-distorted YoY headlines mask underlying recovery; CapEx cycle complete (₹400k MT capacity); Mexico + Rail Wheel Factory launches; order book ₹1,254 cr 4-year visibility; mgmt 21-22% margin recovery target; trading at depressed earnings P/E that compresses sharply on FY27E recovery'**. The investment outcome hinges on FY27 H1 margin recovery cadence (≥18% by Q2 FY27) + Mexico ramp + Rail Wheel Factory commissioning + order book conversion + CV cycle continuing recovery. **Asymmetric setup with significant catalyst stack and de-rated valuation cushion**.",
        interpretation:
            "**Q4 FY26 = mixed quarter with strong sequential recovery but optically poor YoY due to base effect** — Q4 Revenue ₹1,217 cr (**+28% YoY; +11% QoQ**); Q4 PAT ₹55.9 cr (**-72% YoY** vs Q4 FY25 ₹199.83 cr inflated by ~₹150 cr one-off; **+312% QoQ** from Q3 ₹13.57 cr); **Q4 EBITDA ₹208.2 cr (+112% YoY); EBITDA margin 17.1% vs Q4 FY25 10.4% = +670 bps YoY structural recovery**; Q4 PBT ₹64 cr vs Q3 ₹30 cr = +112% QoQ. **The sequential cadence is the truer signal**: FY26 was a clear **trough year with U-shaped recovery** — Q1 stagnation → **Q2 net LOSS ₹9.5 cr (trough)** → Q3 partial recovery → **Q4 meaningful recovery**. **FY26 Consolidated**: Revenue ₹4,238 cr (+5.1%); EBITDA ₹642.7 cr (margin 15.2%); PAT ₹74.8 cr (-81% YoY largely base-effect; underlying drop ~70% reflecting genuine pressure from forex, Mexico/JV op losses, US tariffs, subdued exports, higher D&A from CapEx). **FY27 catalyst stack loaded**: (1) **Rail Wheel Factory Chennai launching June 2026** = high-margin railway forging (22-25% EBITDA margin) = ₹400-600 cr revenue + ₹100-150 cr EBITDA at scale, (2) **Mexico facility commercial production May 2026** = USMCA tariff-free NA market access; ₹300-500 cr revenue FY27-28, (3) **Order book ₹1,254 cr won FY26** (4-year program life; 56% auto + 44% non-auto), (4) **CapEx cycle complete** (~400,000 MT capacity) = future CapEx maintenance only = OCF expansion + D&A normalising, (5) **Margin recovery toward mgmt target 21-22% standalone** = path to FY28 normalised earnings. **Stock at ₹598.30 (~46% off 52-wk high) — P/E 50.33x on depressed TTM EPS ₹11.87** misleading; **on FY27E EPS ₹16-22, P/E 27-37x; on FY28E EPS ₹25-30, P/E 20-24x** = significant valuation cushion built in. **Asymmetric setup at ₹598**: bear case ₹450-520 (FY27 margin recovery slower than expected + Mexico/Rail Wheel ramp delays + CV cycle weakening + multiple compression to 22-25x FY28E = -13-25%), base case ₹780-880 (FY27 EPS ₹19 + FY28 EPS ₹26 × 30-34x = +30-47%), bull case ₹1,000-1,200 (FY28 EPS ₹28-30 × 35-40x + Mexico/Rail Wheel scaling ahead of plan + sector premium re-rating + export recovery accelerating = +67-100%). **Roughly 2.5:1 to 5:1 reward-to-risk** at current ₹598. **Verdict: ACCUMULATE on dip — turnaround setup with FY27 catalyst stack maturing**; best entry zone ₹520-580 (deeper cushion + FY27 H1 cadence visibility); standard accumulate up to ₹650; **avoid above ₹780 (FY28 base case priced); definitely avoid above ₹1,000** (full bull case priced).",
        whatWentRight: [
            "**Strong sequential recovery confirmed across every metric** — Q4 Revenue +28% YoY +11% QoQ; **Q4 EBITDA margin 17.1% vs Q4 FY25 10.4% = +670 bps YoY**; Q4 PAT ₹55.9 cr +312% QoQ from Q3 trough; Q4 PBT ₹64 cr +112% QoQ; capacity ramp (43k MT forging + 28k MT casting added Q4); domestic revenue 68.4% reflecting strong domestic CV cycle; new orders ₹594 cr Q4 (4-year program life). **The FY26 U-shape is clear**: Q2 trough → Q4 meaningful recovery = trajectory points to FY27 normalisation.",
            "**FY27 catalyst stack genuinely loaded with 5 simultaneous triggers maturing**: (a) **Rail Wheel Factory Chennai launching June 2026** = high-margin railway forging (22-25% EBITDA vs auto 17-19%); (b) **Mexico facility commercial production May 2026** = USMCA tariff-free NA market access; (c) **Order book ₹1,254 cr won FY26** (4-year program life; mix balanced 56% auto + 44% non-auto + ₹258 cr Energy dominant); (d) **CapEx cycle complete** (~400,000 MT capacity = India's largest private forging) = future CapEx maintenance only = OCF expansion; (e) **Margin recovery path** to mgmt target 21-22% standalone EBITDA margin. **Vertical diversification working**: CV from 70%+ historical to ~50-55% FY26 + Railways + Energy + Off-highway scaling = **less cyclical earnings + multiple expansion lever as quality of revenue improves**.",
        ],
        whatWentWrong: [
            "**FY26 was a trough year with significant earnings collapse** — FY26 Revenue +5% only (vs historical +15-20%); FY26 EBITDA margin 15.2% (vs structural 19-21% = ~400-600 bps below normal); FY26 PAT ₹74.8 cr (-81% YoY base-effect distorted; underlying drop ~70% reflecting genuine pressure); **Q2 FY26 net LOSS ₹9.5 cr** = first quarterly loss in years. **Drivers of trough**: (a) forex losses (rupee volatility), (b) Mexico/JV operational losses pre-commercial production, (c) US tariffs (25% PV / 10% CV) impact ~₹6 cr/qtr, (d) subdued international demand H1 FY26, (e) higher D&A from completed CapEx, (f) elevated interest costs (D/E 0.89x).",
            "**Below-EBITDA pressures continuing FY27 H1** — D&A drag from CapEx cycle takes 6-12 months to normalise as capacity utilisation rises; interest cost on D/E 0.89x ~₹220-250 cr/yr (vs OCF ~₹600-700 cr); forex risk continuing if rupee volatile; Mexico ramp risks (commissioning, customer qualification, working capital); **Rail Wheel Factory ramp risk** (June 2026 launch could see 6-12 month customer qualification cycles before meaningful revenue). **ROE 7.27% (low) and ROA 3.25%** reflect cyclical trough — recovery to 12-15% ROE FY27 / 16-18% FY28 needs margin recovery + revenue compounding combined.",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "1. Commercial Vehicle (CV) — *the* historical cyclical core (~50-55% of revenue)",
                yoyGrowth: "**Q4 new orders ₹323 cr CV; FY26 CV mix ~50-55% (down from 70%+ historical = diversification working); Q4 CV demand resilient**",
                mix: "Heavy CV (Class 8 trucks NA market; Daimler, Volvo, MAN, Scania, PACCAR/Kenworth/Peterbilt) + Medium/Light CV (TATA, Ashok Leyland, BharatBenz, Eicher) + EV CV (₹11 cr Q4 orders) + components: front axle beams, crankshafts, suspension components, gears, differential cases, kingpins, knuckles",
                analysis:
                    "**The historical core that's been diversified down to ~50-55% of revenue.** **Q4 strength**: domestic CV cycle recovery + European CV truck OEM exports continuing; FY26 ₹406 cr CV new orders Q3 + ₹323 cr Q4 = sustained CV order momentum. **Customer quality**: Tier-1 global CV OEMs = sticky long-cycle relationships (5-7 year programs); top customer concentration ~35-40% of CV revenue. **Risk**: CV cyclicality (NA Class 8 cycle, Europe truck cycle); commodity steel input cost pressure; tariff-related demand sensitivity.",
                triggers:
                    "(a) NA Class 8 truck cycle continuing recovery FY27; (b) European CV demand stable; (c) Indian CV cycle on infrastructure CapEx; (d) EV CV scaling (₹11 cr Q4 = small but accelerating); (e) New CV programs from order book conversion; (f) Wallet-share expansion in existing top customers.",
            },
            {
                name: "2. Railways — *the* headline FY27 catalyst (Rail Wheel Factory Chennai launching June 2026)",
                yoyGrowth: "**FY26 contribution ~5-8% emerging; FY27-28 target ₹400-600 cr revenue post Rail Wheel Factory ramp = ~10-15% of revenue**",
                mix: "Forged rail wheels (passenger coach + freight wagon) + axles + brake components + safety-critical components; customers: Indian Railways via wagon/coach OEMs (BEML, Titagarh, Texmaco, RWF, ICF, RCF) + international freight rail OEMs",
                analysis:
                    "**The crown jewel FY27 catalyst.** **Rail Wheel Factory Chennai** = greenfield manufacturing facility for forged rail wheels (passenger + freight); **commercial operations June 2026**; designed capacity ~50,000-100,000 wheels/year; at full ramp = ₹400-600 cr annual revenue. **Margin profile**: railway forgings are **highest margin** at 22-25% EBITDA (vs auto 17-19%) due to specialty + safety-critical + long-cycle tendering + lower competitive intensity. **Indian Railways CapEx**: ₹2.5+ lakh cr annual; **wagon procurement scaling rapidly** (DFCC corridors, Vande Bharat, freight modernisation). **Acutaas-style optionality**: **first major private-sector forged rail wheel facility** in India = strategic moat + government support + import substitution narrative.",
                triggers:
                    "(a) **Rail Wheel Factory commissioning Q1 FY27** — June 2026 launch; (b) **Indian Railways tender wins** (passenger + freight wheels); (c) **International rail wheel customer qualification** (12-18 month cycles); (d) **Capacity ramp** to 80% utilisation by FY28; (e) **Vande Bharat + Vande Metro + freight wagon procurement** scaling from PLI + budget allocation.",
            },
            {
                name: "3. Energy / Oil & Gas — *the* fastest-growing non-auto vertical",
                yoyGrowth: "**Q4 ₹258 cr new orders (out of ₹260 cr non-auto = 99% non-auto driven by Energy); FY26 mix ~10-15%; FY27-28 target ~12-15%**",
                mix: "Forged components for oil & gas drilling (mud pumps, BOPs, valves, flanges) + power generation (gas turbine components, generator shafts) + offshore platform structures + LNG processing equipment",
                analysis:
                    "**The fastest-growing non-auto vertical anchored by ₹258 cr Q4 single order.** **Customer base**: domestic + international oil & gas majors (ONGC, Reliance, Saudi Aramco, ExxonMobil, Chevron suppliers); power generation OEMs (BHEL, GE, Siemens). **Margin profile**: 18-22% EBITDA at scale; **higher than auto due to specialty + longer cycle + non-cyclical relative to auto**. **Demand environment**: oil & gas CapEx recovery; LNG infrastructure; renewable + grid storage adjacent demand; India energy security investments. **Q4 ₹258 cr single order suggests anchor customer win** with multi-year visibility.",
                triggers:
                    "(a) Q4 ₹258 cr Energy order conversion to shipments FY27-28; (b) Additional Energy/Oil&Gas customer wins; (c) Indian energy infrastructure CapEx cycle (refining, LNG, gas grid); (d) Saudi/Middle East oil & gas customer qualification; (e) Offshore wind / renewable adjacency.",
            },
            {
                name: "4. Off-highway / Mining / Construction / Agri — diversified industrial",
                yoyGrowth: "**FY26 mix ~15-20%; stable contribution; customers global agri + construction OEMs**",
                mix: "Forged components for construction equipment (excavators, loaders, dozers — JCB, Caterpillar, Komatsu, Volvo CE) + mining equipment + agricultural equipment (CNH, AGCO, John Deere) + earth-moving + material handling",
                analysis:
                    "**Stable diversified industrial vertical providing earnings smoothing.** **Customer base**: global Tier-1 agri/construction OEMs (CNH, AGCO, John Deere, JCB, Caterpillar, Komatsu, Volvo CE). **Demand environment**: India construction cycle (infrastructure, real estate); global agri equipment cycle; mining cycle stable. **Margin profile**: 16-19% EBITDA = comparable to auto. **Geographic mix**: significant export contribution — Europe, NA, ASEAN.",
                triggers:
                    "(a) India construction equipment cycle on infrastructure spending; (b) Global agri equipment recovery; (c) Mining equipment cycle on commodity prices; (d) Customer additions in NA/EU; (e) Off-highway EV adjacent components emerging.",
            },
            {
                name: "5. Geographic Mix (Domestic 68.4% + Mexico + JMT Europe + NA Direct) + Mexico Optionality",
                yoyGrowth: "**Domestic 68.4% Q4; Export 31.6% (down from historical ~50% due to FY26 export weakness); Mexico facility commercial production May 2026**",
                mix: "India operations (Jamshedpur primary) ~70% + JMT Europe (UK + Germany + Italy) ~20% + Mexico facility (commercial May 2026) ~5% + Direct US/others ~5%; Q4 Mexico trial production complete; **80% NA exports route via Mexico/Canada (USMCA tariff-free) vs 20% direct US (25% PV / 10% CV tariffs)**",
                analysis:
                    "**Strategic global footprint with Mexico as the FY27 ramp story.** **Mexico facility**: greenfield in Mexico to serve NA market via USMCA tariff-free access; designed capacity ~50,000-75,000 MT; commercial production May 2026; ramp to 80% utilisation by FY28 = ₹500-700 cr annual revenue. **JMT Europe**: UK + Germany + Italy operations under JMT umbrella; serves European OEMs; FY26 weakness from European CV slowdown; FY27 recovery emerging. **US tariff mitigation**: 80% of NA exports route via Mexico/Canada (USMCA = tariff-free); only 20% direct US exposure with 25% PV / 10% CV tariffs = ~₹6 cr/qtr impact, **half passed-through to customers**. **Export recovery target 35% by FY27** per mgmt = significant lever.",
                triggers:
                    "(a) **Mexico facility commercial ramp** May-Dec 2026; (b) **JMT Europe recovery** with EU CV cycle; (c) **NA Class 8 truck cycle** continuing; (d) **Currency tailwind** (rupee weakening); (e) **Export recovery** to 35% target by FY27.",
            },
        ],
        assessment: [
            "**Multi-vertical diversification working with FY27 catalysts maturing simultaneously** — Commercial Vehicle (~50-55%, historical cyclical core, resilient demand) + Railways (~5-8% rising to ~10-15% FY28 post Rail Wheel Factory June 2026 launch — *the headline catalyst*) + Energy/Oil&Gas (~10-15%, ₹258 cr Q4 anchor order) + Off-highway/Mining (~15-20%, stable industrial) + Geographic (Domestic 68.4% + Mexico May 2026 commercial production + JMT Europe + NA tariff-mitigated). **The vertical mix shift is the most important strategic narrative**: from 70%+ CV-dependent historical to ~50-55% CV by FY26 with railways + energy + off-highway scaling = **less cyclical earnings + multiple expansion lever** as quality of revenue improves over 2-3 years.",
            "**The 'turnaround with catalyst stack' thesis is genuinely emerging** — Naresh Jalan (MD, reappointed for 3 years effective Nov 2026 — leadership continuity signal) + Lalit Khetan (CFO) leading the recovery; **CapEx cycle complete** (~400,000 MT capacity = India's largest private forging); **Q4 sequential recovery clear** (+312% QoQ PAT; +670 bps YoY EBITDA margin); **Order book ₹1,254 cr FY26 won** (4-year program life) = strong revenue visibility; **Rail Wheel Factory + Mexico** = 2 simultaneous capacity launches FY27 H1. **The franchise economics at normalised earnings**: ROE 15-18%; EBITDA margin 19-21% (mgmt target 21-22% standalone); D/E reducing toward 0.6-0.7x by FY28; OCF expansion from completed CapEx = **structurally recovering profile** if catalyst execution delivers.",
            "**Segment quality verdict: TURNAROUND PLAY WITH 5 SIMULTANEOUS FY27 CATALYSTS — INDIA'S LARGEST PRIVATE-SECTOR FORGING (~400,000 MT) WITH GENUINE VERTICAL DIVERSIFICATION (CV + Railways + Energy + Off-highway) + GEOGRAPHIC EXPANSION (Mexico May 2026 + JMT Europe) + ORDER BOOK VISIBILITY (₹1,254 cr 4-year) + COMPLETED CapEx CYCLE — *AT* DE-RATED VALUATION ~46% OFF 52-WK HIGH WITH P/E 50.33x ON DEPRESSED TTM EPS ₹11.87 (BUT FY27E P/E 27-37x ON RECOVERY EPS ₹16-22).** The franchise has scale advantages and customer quality; FY26 was clearly a trough year with sequential recovery; FY27 catalyst stack provides multiple paths to normalisation. The investment outcome hinges on FY27 H1 margin recovery cadence + Mexico ramp + Rail Wheel Factory commissioning + order book conversion + CV cycle continuing recovery.",
        ],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            {
                metric: "1. FY27 Revenue Growth Trajectory — *the* recovery confirmation metric",
                current: "FY26 Revenue ₹4,238 cr (+5.1% YoY)",
                trend: "**FY27 mgmt guidance +10-15% revenue growth**; realistic FY27 trajectory likely +13-17% given catalyst stack (Mexico ramp + Rail Wheel Factory + order book conversion)",
                horizon: "FY27 ~₹4,800-5,000 cr (+13-18%); FY28 ~₹5,500-5,800 cr (+13-16%); FY29 ~₹6,200-6,600 cr (+13-14%)",
                remarks:
                    "**Critical FY27 H1 data point**: Revenue ≥+13% YoY confirms recovery; <+10% = catalyst execution risk flag. **Drivers**: (a) Mexico facility ramp (₹100-300 cr FY27 contribution), (b) Rail Wheel Factory ramp (₹50-150 cr FY27 H2 contribution), (c) Order book conversion to shipments, (d) Capacity utilisation rising (65-70% to 75-80%), (e) CV cycle continuing recovery. **Risk**: CV cycle weakening; Mexico/Rail Wheel commissioning delays; export demand subdued; commodity cost spike.",
            },
            {
                metric: "2. EBITDA Margin Recovery Trajectory — *the* central thesis metric",
                current: "FY26 EBITDA margin 15.2% (Q4 17.1%); historical structural 19-21%; mgmt target 21-22% standalone",
                trend: "**FY27 EBITDA margin expected 17-19%** (continuing Q4 trajectory); **FY28 toward 19-21%** (full normalisation as Mexico + Rail Wheel scale + CapEx absorbed)",
                horizon: "FY27 17-19%; FY28 19-21%; FY29 20-22% (peak normalised); each 100 bps recovery = ~₹50 cr EBITDA on FY28E revenue ₹5,600 cr",
                remarks:
                    "**Each 100 bps EBITDA margin recovery on FY28 revenue ₹5,600 cr = ₹56 cr EBITDA = ~₹40 cr PAT = ~₹2.2 EPS**. **Drivers of recovery**: (a) operating leverage on volume (capacity utilisation rising), (b) product mix shift toward railways (22-25% margin) + energy (18-22%), (c) Mexico operational profitability (post commercial ramp), (d) JV losses ending, (e) input cost normalisation (steel, energy), (f) currency tailwind. **The single most important investment driver** = if FY27 margin reaches 19% + FY28 21%, EPS doubles from ₹11.87 to ₹25-30.",
            },
            {
                metric: "3. Vertical Mix Evolution — quality of revenue lever",
                current: "FY26 mix: CV ~50-55% + PV ~10% + Railways ~5-8% + Energy ~10-15% + Off-highway ~15-20%",
                trend: "**FY28 target mix**: CV ~45-50% + PV ~10-12% + **Railways ~10-15% (post Rail Wheel Factory)** + Energy ~12-15% + Off-highway ~15-18%",
                horizon: "FY27 CV 50-55%; FY28 45-50%; FY29 ~45%; multi-vertical balance with railways/energy/off-highway combined ~50%+",
                remarks:
                    "**Quality of revenue lever**: CV-dependent forgings earn 25-35x P/E (Bharat Forge, MM Forgings); multi-vertical diversified forgings earn 35-45x P/E (Sundaram Fasteners, Bharat Forge premium-rated periods); **as Ramkrishna mix shifts toward less cyclical balanced portfolio, multiple expansion lever** = 15-25% blended multiple uplift over 24-36 months independent of EPS growth. **Risk**: railways/energy execution; Mexico/JMT margin profile.",
            },
            {
                metric: "4. Mexico Facility + Rail Wheel Factory Ramp Cadence — *the* dual catalyst",
                current: "Mexico commercial production May 2026; Rail Wheel Factory June 2026 launch; both pre-revenue currently",
                trend: "**Mexico ramp**: ₹100-200 cr FY27 → ₹300-500 cr FY28 → ₹500-700 cr FY29 (steady-state ~80% utilisation); **Rail Wheel Factory ramp**: ₹50-150 cr FY27 → ₹250-400 cr FY28 → ₹400-600 cr FY29",
                horizon: "FY27 combined contribution ₹150-350 cr (3-7% of revenue); FY28 ₹550-900 cr (10-16%); FY29 ₹900-1,300 cr (14-20%)",
                remarks:
                    "**Both facilities' ramp cadence is the single biggest swing factor for FY28 EPS**. Mexico EBITDA margin 17-19% (auto-comparable); Rail Wheel margin 22-25% (specialty premium). **Combined FY28 contribution at scale**: ~₹800 cr revenue × 20% blended EBITDA = ₹160 cr EBITDA = ~₹110 cr PAT = ~₹6 EPS contribution = **significant needle-moving optionality**. **Risk**: customer qualification cycles (12-18 months for Mexico; 6-12 months for Rail Wheel); commissioning teething; capital working capital intensity.",
            },
            {
                metric: "5. CapEx + Free Cash Flow + Deleveraging — capital efficiency post completed cycle",
                current: "FY26 CapEx ~₹500-600 cr (peak); D/E 0.89x; OCF ~₹500-600 cr",
                trend: "**FY27-28 CapEx ramp DOWN to ~₹150-200 cr/yr (maintenance only)**; OCF expansion as capacity utilisation rises; FCF turning meaningfully positive",
                horizon: "FY27 FCF ₹200-300 cr; FY28 FCF ₹400-500 cr; FY29 FCF ₹500-600 cr; D/E reducing to 0.6-0.7x by FY28",
                remarks:
                    "**Each ₹100 cr FCF on existing ₹10,853 cr mkt cap ≈ 1% FCF yield uplift = multiple expansion driver**. **Deleveraging path**: D/E 0.89x current → 0.7x FY28 → 0.5-0.6x FY29 = interest cost reducing ~₹50-70 cr/yr by FY29 = ~₹35-50 cr PAT = ~₹2-3 EPS. **Capital allocation**: dividend continuity; selective inorganic optionality (M&A in adjacent verticals); buyback emerging if valuation depressed.",
            },
        ],
        demandSignals: [
            {
                signal: "Indian Commercial Vehicle (CV) cycle + Class 8 NA + European CV",
                reading:
                    "**Indian CV cycle on infrastructure CapEx + GST collections + replacement demand**; CV volumes growth +8-12% FY27 expected. **NA Class 8 truck cycle**: post-2024 cyclical correction; recovery underway with EPA 2027 emission norm pre-buy + freight rate normalisation; production volumes recovery FY26 H2 to FY28. **European CV**: weakness FY26 H1 due to macro slowdown; recovery emerging on truck modernisation + green truck mandates. **Acutaas positioning**: Tier-1 supplier to Daimler, Volvo, MAN, Scania, PACCAR globally + India Tier-1 to TATA, Ashok Leyland, BharatBenz, Eicher = direct beneficiary.",
                verdict: "Strong",
            },
            {
                signal: "Indian Railway CapEx + Rail Wheel Factory Chennai Demand",
                reading:
                    "**Indian Railways CapEx ₹2.5+ lakh cr annual** (Vande Bharat, Vande Metro, freight modernisation, DFCC corridors, station redevelopment); **wagon procurement scaling rapidly** (~50,000+ wagons annual ordering); **rail wheel imports historically ~70%+ of demand** = significant import substitution opportunity. **Ramkrishna Rail Wheel Factory Chennai (June 2026 launch)** = **first major private-sector forged rail wheel facility in India**; designed capacity ~50,000-100,000 wheels/year; **margin profile 22-25% EBITDA** (specialty + safety-critical pricing). **Government support**: PLI + Make-in-India + import substitution narrative = strong tailwind.",
                verdict: "Robust",
            },
            {
                signal: "Mexico USMCA Tariff-Free NA Market Access",
                reading:
                    "**Mexico facility commercial production May 2026** = USMCA tariff-free NA market access; **80% of NA forging exports route via Mexico/Canada** vs 20% direct US (25% PV / 10% CV tariffs). **NA forging market** ~$15-20B annual; **India share <2%** = significant addressable market expansion. **Customer wins**: NA Class 8 truck OEMs already qualified for Mexico capacity; ramp to 80% utilisation by FY28 = ₹500-700 cr annual revenue. **Strategic moat**: Mexico facility provides **structural tariff arbitrage** + supply chain diversification narrative for NA OEMs reducing China dependency.",
                verdict: "Strong",
            },
            {
                signal: "Energy / Oil & Gas + Industrial CapEx Cycle",
                reading:
                    "**Q4 ₹258 cr Energy single anchor order** = strong demand signal; oil & gas CapEx recovery (drilling + LNG + offshore); **Indian energy infrastructure CapEx** (refining capacity additions, gas grid, LNG terminals); power generation OEM demand (BHEL, GE, Siemens). **Renewable + grid storage adjacency**: forging demand for wind turbines, BESS, transmission infrastructure. **Margin profile**: 18-22% EBITDA at scale = premium to auto.",
                verdict: "Strong",
            },
            {
                signal: "Forex + Macro Environment for Export-Led Forging",
                reading:
                    "**USD/INR favourable trajectory** (rupee weakening); **export contribution 31.6% Q4 FY26** (down from historical ~50%; recovery target 35% FY27 per mgmt). **China+1 forging displacement**: post-COVID supply chain diversification + ESG = NA/EU OEMs diversifying from China to India = multi-year structural tailwind. **Risk**: currency volatility; geopolitical trade tensions; tariff escalation.",
                verdict: "Adequate",
            },
            {
                signal: "Order Book + Customer Pipeline Quality",
                reading:
                    "**FY26 cumulative orders ₹1,254 cr won** (4-year program life; mix balanced 56% auto + 44% non-auto); **Q4 ₹594 cr** (₹323 cr CV + ₹11 cr EV + ₹260 cr non-auto with ₹258 cr Energy dominant); customer pipeline includes Mexico ramp customers, Rail Wheel Factory IR + private rail OEM tenders, energy/oil&gas major OEMs. **Customer concentration**: top 10 ~50%+ of revenue = some concentration risk; **mitigation through vertical + geographic diversification**.",
                verdict: "Strong",
            },
        ],
        demandVerdict:
            "**Demand environment is GREEN-AMBER across six dimensions** — Indian CV + Class 8 NA + European CV (Strong); Indian Railway CapEx + Rail Wheel Factory demand (Robust); Mexico USMCA tariff-free NA access (Strong); Energy/Oil & Gas + Industrial CapEx (Strong); Forex + macro for export-led forging (Adequate); Order Book + Customer Pipeline (Strong). **The next 18-24 months see 5 simultaneous tailwinds**: (a) Mexico facility ramp from May 2026 (₹100-200 cr FY27 → ₹300-500 cr FY28), (b) Rail Wheel Factory Chennai launch June 2026 (₹50-150 cr FY27 → ₹250-400 cr FY28; high-margin specialty), (c) Order book ₹1,254 cr FY26 conversion (4-year program life), (d) NA Class 8 truck cycle continuing recovery, (e) Indian CV + railway CapEx tailwind. **Mgmt's FY27 +10-15% revenue guidance translates to ~₹4,800 cr base case + ₹5,000 cr realistic + EBITDA margin 17-19% + PAT ₹300-400 cr + EPS ₹16-22** = strong recovery trajectory.",
        whatWentRight: [
            "**Demand visibility robust + accelerating** — Indian CV cycle on infrastructure + replacement; NA Class 8 truck cycle recovering; European CV stabilising; Indian Railway CapEx ₹2.5+ lakh cr; Mexico USMCA tariff-free access; Energy/Oil&Gas anchor orders (₹258 cr Q4); order book ₹1,254 cr (4-year visibility); customer pipeline expanding across verticals + geographies.",
            "**Strategic execution accelerating**: **CapEx cycle complete** (~400,000 MT — India's largest private forging); **Mexico facility commercial production May 2026** (USMCA NA market access); **Rail Wheel Factory Chennai June 2026 launch** (high-margin specialty); **vertical diversification working** (CV from 70%+ to ~50-55%); **margin recovery underway** (Q4 EBITDA 17.1% vs Q4 FY25 10.4% = +670 bps YoY); **Naresh Jalan reappointment** = leadership continuity signal.",
        ],
        whatWentWrong: [
            "**Mexico + Rail Wheel Factory ramp execution risk** — both facilities pre-revenue currently; **commissioning + customer qualification cycles** could see 6-18 month delays; **Mexico working capital intensity** during ramp; **Rail Wheel customer qualification** for Indian Railways tendering may take 12-18 months. **Margin recovery** to mgmt target 21-22% standalone needs full FY27 to play out; if margin stuck at 17-18% range, EBITDA growth narrows + EPS recovery cadence weaker.",
            "**CV cyclicality + Macro risks** — NA Class 8 truck cycle has historical 3-4 year peak-trough swings; Indian CV cycle sensitive to GST/freight rates/macro; European CV demand uncertain; commodity steel input cost volatility; currency volatility on 31.6% exports. **High D/E 0.89x** = interest cost ~₹220-250 cr/yr drag on PAT; deleveraging path takes 18-24 months. **Forex risk** continuing if rupee volatile; **forex losses were a key FY26 drag**.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            {
                metric: "FY27-29 Revenue Growth Guidance — *the* explicit headline",
                current: "FY26 Revenue ₹4,238 cr (+5.1% YoY)",
                target:
                    "**FY27-29 mgmt guidance: 10-15% annual revenue growth**; **FY26 'double-digit revenue growth reaffirmed'** for full year (achieved +5.1% on consolidated; near double-digit on standalone base). **Realistic FY27 trajectory**: +13-17% given catalyst stack; **implied FY27 Revenue ~₹4,800-5,000 cr**. **Drivers**: Mexico ramp + Rail Wheel Factory + order book conversion + capacity utilisation rising + CV cycle recovery",
            },
            {
                metric: "EBITDA Margin Recovery — Mgmt Target 21-22% Standalone",
                current: "FY26 Standalone EBITDA margin estimated ~15.5%; FY26 Consolidated ~15.2%; Q4 Consol 17.1%",
                target:
                    "**Mgmt explicit target**: **21-22% standalone EBITDA margin by Q4 FY26 / Q1 FY27** (essentially the recovery target; consolidated equivalent ~19-20%). **Realistic trajectory**: FY27 17-19% → FY28 19-21% → FY29 20-22% (full normalisation). **Drivers**: operating leverage on volume + product mix shift toward railways/specialty + Mexico operational profitability + JV losses ending + input cost normalisation",
            },
            {
                metric: "Mexico + Rail Wheel Factory Strategic Catalysts",
                current: "Mexico trial production complete; Rail Wheel Factory pre-launch",
                target:
                    "**Mexico facility commercial production May 2026** (USMCA tariff-free NA market access); ramp to ~80% utilisation by FY28 = ₹500-700 cr annual revenue. **Rail Wheel Factory Chennai commercial operations June 2026** = ₹400-600 cr annual revenue at scale; high-margin specialty (22-25% EBITDA). **Combined FY28 contribution at scale**: ~₹800 cr revenue + ~₹160 cr EBITDA = ~₹110 cr PAT = ~₹6 EPS contribution",
            },
            {
                metric: "Capacity + CapEx Roadmap — Cycle Complete",
                current: "FY26 capacity ~400,000 MT post Q4 additions (43k MT forging + 28k MT casting); FY26 CapEx peak ~₹500-600 cr",
                target:
                    "**FY27+ CapEx ramp DOWN to ~₹150-200 cr/yr (maintenance only)**; **major CapEx cycle complete** = future capital allocation toward deleveraging + dividend + selective inorganic + R&D. **Capacity utilisation target**: rising from current 65-70% to 80-85% by FY28 = ~25% revenue growth from utilisation alone (without further capacity additions)",
            },
            {
                metric: "Vertical Mix + Order Book Diversification",
                current: "Q4 orders 56% auto + 44% non-auto; FY26 cumulative orders ₹1,254 cr (4-year program life)",
                target:
                    "**Continued vertical diversification** = CV from ~50-55% toward ~45% FY28 + Railways from ~5-8% to ~10-15% + Energy/Off-highway expanding. **Customer + product diversification accelerating**: Mexico (NA Class 8 OEMs), Rail Wheel Factory (Indian Railways + private rail OEMs), Energy (oil & gas + power generation). **Reducing CV cyclicality dependency** = strategic priority for sustainable compounding",
            },
        ],
        commitmentNote:
            "**Mgmt credibility check**: **Naresh Jalan (Managing Director, reappointed for 3 years effective Nov 5, 2026 — leadership continuity)** + **Lalit Khetan (CFO)** = experienced leadership team with 20+ years at Ramkrishna. **Track record**: (a) **FY18-25 Revenue CAGR ~17%**: ₹1,200 cr → ₹4,034 cr (FY25); (b) **Built ~400,000 MT capacity** = India's largest private-sector forging; (c) **Vertical diversification** from CV-only historical to multi-vertical FY26 = strategic transformation; (d) **JMT Europe acquisition** (UK + Germany + Italy) = international footprint; (e) **Mexico + Rail Wheel Factory** = forward-looking capacity build-up; (f) **FY26 trough year** with sequential recovery underway = execution discipline through cyclical pressure. **Mgmt commentary**: 'FY27 poised to be strong year with healthy order book visibility'; **mgmt confidence in 10-15% revenue + margin recovery + Mexico/Rail Wheel ramps**. **Risk to credibility**: FY26 PAT collapse -81% YoY (base-effect distorted but underlying ~70% drop genuine); margin still 5-6 ppts below structural; Mexico/Rail Wheel ramp execution. **Watch FY27 quarterly cadence**: Q1 FY27 EBITDA margin ≥18% + Revenue ≥+13% YoY + Mexico revenue contribution disclosed + Rail Wheel customer wins announced + order book disclosure = trajectory confirmation. **Mgmt credibility = MEDIUM-HIGH** — strong long-term track record but FY26 trough has tested credibility; FY27 H1 cadence is the validation window.",
        growthDrivers: [
            {
                driver: "1. CV Cycle Continued Recovery + Volume Growth (FY27)",
                impact:
                    "**FY26 CV ~₹2,300 cr → FY27 ~₹2,600-2,800 cr (+13-22%)** on capacity utilisation + NA Class 8 cycle + European CV recovery + Indian CV cycle. **Margin profile**: 17-19% EBITDA at scale = ~₹450-530 cr EBITDA contribution (vs FY26 ~₹350 cr) = ~₹100-180 cr incremental EBITDA = ~₹70-130 cr PAT = **~₹4-7 EPS contribution**.",
            },
            {
                driver: "2. Rail Wheel Factory Ramp (FY27-29)",
                impact:
                    "**FY26 Railways ~₹250 cr → FY27 ~₹350-450 cr (+40-80%); FY28 ~₹600-800 cr; FY29 ~₹800-1,000 cr**. **Margin profile**: 22-25% EBITDA (premium specialty). **FY28 contribution incremental over FY26**: ~₹400-550 cr revenue × 22% = ~₹90-120 cr EBITDA = ~₹65-85 cr PAT = **~₹4-5 EPS**. **The single highest-margin growth vertical** = quality of revenue uplift.",
            },
            {
                driver: "3. Mexico Facility Commercial Ramp (FY27-29)",
                impact:
                    "**FY26 Mexico contribution near-zero → FY27 ₹100-200 cr; FY28 ₹300-500 cr; FY29 ₹500-700 cr**. **Margin profile**: 17-19% EBITDA at scale (auto-comparable). **FY28 contribution**: ₹400 cr × 18% = ~₹72 cr EBITDA = ~₹50 cr PAT = **~₹2.7 EPS**. **Strategic value**: USMCA tariff arbitrage + NA market access + supply chain diversification narrative.",
            },
            {
                driver: "4. EBITDA Margin Recovery to 19-21% (FY27-29)",
                impact:
                    "**Each 100 bps margin recovery on FY28 revenue ₹5,600 cr = ₹56 cr EBITDA = ~₹40 cr PAT = ~₹2.2 EPS**. **Recovery path**: Q4 FY26 17.1% → FY27 17-19% → FY28 19-21%. **Drivers**: operating leverage + product mix + Mexico profitability + JV losses ending + input cost normalisation.",
            },
            {
                driver: "5. Deleveraging + FCF Expansion + Multiple Re-Rating (FY27-29)",
                impact:
                    "**D/E 0.89x → 0.6-0.7x by FY28** = interest cost reducing ~₹50-70 cr/yr by FY29 = ~₹35-50 cr PAT = ~₹2-3 EPS. **FCF expansion**: ₹200-300 cr FY27 → ₹400-500 cr FY28 → ₹500-600 cr FY29. **Multiple re-rating**: as quality of revenue improves (vertical diversification + railways + Mexico) + margin normalises + earnings cyclicality reduces, multiple may re-rate from current 50x (depressed earnings) toward 30-35x FY28E peak earnings = **+15-25% multiple uplift on EPS recovery alone**.",
            },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            {
                title: "Q4 sequential recovery clear: PAT +312% QoQ + EBITDA margin +220 bps QoQ + Revenue +11% QoQ — U-shaped FY26 trajectory completed at strong Q4",
                body:
                    "**FY26 PAT trajectory**: Q1 ~₹15 cr → **Q2 net LOSS ₹9.5 cr (trough)** → Q3 ₹13.57 cr → **Q4 ₹55.9 cr (+312% QoQ)** = clear U-shaped recovery. **Q4 EBITDA margin 17.1%** vs Q3 14.9% (+220 bps) vs Q2 13.5% trough (+360 bps); **Q4 Revenue ₹1,217 cr +11% QoQ +28% YoY**; **Q4 PBT ₹64 cr +112% QoQ from ₹30 cr Q3**. **The cadence confirms** FY26 was a trough year with sequential recovery underway; **FY27 trajectory points to normalisation** as catalyst stack matures (Mexico May 2026 + Rail Wheel Factory June 2026 + order book conversion + CV cycle recovery + capacity ramp).",
            },
            {
                title: "Q4 EBITDA margin 17.1% vs Q4 FY25 10.4% = +670 bps YoY structural recovery — margin normalisation underway",
                body:
                    "**Q4 EBITDA margin 17.1% vs Q4 FY25 10.4% = +670 bps YoY recovery**; **vs structural historical 19-21% = ~250-400 bps below normal** = recovery 50-60% complete. **Mgmt target**: 21-22% standalone EBITDA margin by Q4 FY26 / Q1 FY27 = essentially the recovery target. **Drivers**: (a) operating leverage on +28% YoY volume, (b) product mix shift toward higher-margin railways/non-auto, (c) Mexico operational losses narrowing, (d) JV losses moderating, (e) input cost discipline. **Each 100 bps margin recovery on FY28 revenue ₹5,600 cr = ₹56 cr EBITDA = ~₹40 cr PAT = ~₹2.2 EPS** = significant earnings lever.",
            },
            {
                title: "FY27 Catalyst Stack Loaded: Mexico (May 2026) + Rail Wheel Factory (June 2026) + Order Book ₹1,254 cr + CapEx Cycle Complete + Margin Recovery Path",
                body:
                    "**5 simultaneous FY27 catalysts maturing**: (a) **Mexico facility commercial production May 2026** = USMCA tariff-free NA market access; ramp to 80% utilisation by FY28 = ₹500-700 cr annual revenue; (b) **Rail Wheel Factory Chennai commercial operations June 2026** = high-margin railway forging (22-25% EBITDA); ₹400-600 cr annual revenue at scale; (c) **Order book ₹1,254 cr won FY26** (4-year program life; 56% auto + 44% non-auto); (d) **CapEx cycle complete** ~400,000 MT capacity = India's largest private forging; future CapEx maintenance only; (e) **Margin recovery path** to mgmt target 21-22% standalone. **Combined FY28 contribution from Mexico + Rail Wheel**: ~₹800 cr revenue + ~₹160 cr EBITDA = ~₹110 cr PAT = ~₹6 EPS contribution = significant needle-moving optionality.",
            },
            {
                title: "Vertical Diversification Working: CV from 70%+ historical to ~50-55% FY26 with Railways + Energy + Off-highway scaling — Quality of Revenue Lever",
                body:
                    "**FY26 vertical mix evolution**: CV/Auto ~50-55% (from 70%+ historical) + PV ~10% + **Railways ~5-8% (rising to ~10-15% post Rail Wheel Factory)** + **Energy ~10-15% (₹258 cr Q4 anchor order)** + Off-highway ~15-20%. **Q4 new orders**: 56% auto + 44% non-auto = **balanced order momentum**. **Strategic value**: less cyclical earnings + multi-engine compounding architecture + multiple expansion lever as quality of revenue improves. **Less CV-dependent forging companies trade at 35-45x P/E premium** to single-vertical CV peers.",
            },
            {
                title: "Naresh Jalan Reappointment (3 years from Nov 2026) + Capital Return Continuing (Interim Dividend ₹1/share) — Mgmt Confidence Signal",
                body:
                    "**Naresh Jalan reappointed as MD for 3 years effective Nov 5, 2026** = leadership continuity through FY27-29 catalyst execution period; signals board confidence in execution capability. **Interim dividend ₹1/share FY26** continuing capital return discipline even in trough year = mgmt confidence in earnings sustainability + balance sheet strength. **D/E 0.89x manageable**; **CapEx cycle complete** = future capital allocation toward deleveraging + dividend + selective inorganic + R&D.",
            },
        ],
        bearish: [
            {
                title: "FY26 PAT Collapse -81% YoY + Q4 PAT -72% YoY — Optically Poor; Underlying Genuine Cyclical Pressure",
                body:
                    "**FY26 Consolidated PAT ₹74.8 cr vs FY25 ₹401 cr = -81%**; **Q4 PAT ₹55.9 cr vs Q4 FY25 ₹199.83 cr = -72% YoY**. **Headlines optically poor** even though base distorted (~₹150 cr FY25 one-off + ~₹50 cr Q4 FY25 one-off). **Underlying drop ~70%** reflects genuine pressure: (a) forex losses (rupee volatility), (b) Mexico/JV operational losses pre-commercial production, (c) US tariffs (25% PV / 10% CV) impact ~₹6 cr/qtr, (d) subdued international demand H1 FY26, (e) higher D&A from completed CapEx, (f) elevated interest costs (D/E 0.89x). **Q2 FY26 net LOSS ₹9.5 cr** = first quarterly loss in years.",
            },
            {
                title: "EBITDA Margin Still 5-6 ppts Below Structural — Recovery Cadence Slower Than Expected Risk",
                body:
                    "**FY26 EBITDA margin 15.2% vs structural 19-21% = ~400-600 bps below normal**; Q4 17.1% closing 50-60% of gap but full normalisation likely H2 FY27. **Risk**: if FY27 margin stuck at 17-18% range (vs mgmt target 21-22% standalone), EBITDA growth narrows + EPS recovery cadence weaker = **valuation defence question**. **Drivers of slower recovery**: (a) Mexico operational losses extending, (b) Rail Wheel ramp delays, (c) commodity steel cost spike, (d) commodity price volatility, (e) JV losses persistent.",
            },
            {
                title: "Mexico + Rail Wheel Factory Ramp Execution Risk — Pre-Revenue Currently",
                body:
                    "**Both facilities pre-revenue currently**; commissioning + customer qualification cycles typically 6-18 months. **Mexico ramp risks**: customer qualification (NA OEMs requiring full validation); working capital intensity during ramp; commissioning teething; tariff/trade environment changes. **Rail Wheel Factory risks**: Indian Railways tender qualification 12-18 months; private rail OEM customer onboarding; technology validation for safety-critical components; capacity utilisation building cadence. **Combined FY27 revenue contribution may be lower than expected** if both ramps see 6-12 month delays = ~₹300-500 cr FY27 revenue impact = ~₹50-90 cr EBITDA = ~₹35-65 cr PAT = ~₹2-4 EPS deferred.",
            },
            {
                title: "High D/E 0.89x + ROE 7.27% + ROA 3.25% — Financial Leverage + Capital Efficiency Pressure",
                body:
                    "**D/E 0.89x = elevated**; interest cost ~₹220-250 cr/yr drag on PAT. **ROE 7.27% (low) + ROA 3.25% (low)** reflect FY26 trough; structural ROE 15-18%; recovery to 12-15% FY27 / 16-18% FY28 needs margin recovery + revenue compounding combined. **Deleveraging path**: D/E 0.89x → 0.6-0.7x FY28 = takes 18-24 months; **FCF expansion** path needed = FY27 ₹200-300 cr → FY28 ₹400-500 cr requires margin recovery + capacity utilisation rise. **Risk**: if FCF recovery slower, deleveraging delayed = interest cost drag persists = EPS recovery slower.",
            },
            {
                title: "CV Cyclicality + Forging Sector Cyclicality + Macro Risks — Inherent Industry Volatility",
                body:
                    "**CV cycle volatility**: NA Class 8 truck cycle has 3-4 year peak-trough swings; Indian CV cycle GST/freight rate sensitive; European CV macro slowdown risk. **Forging sector cyclicality**: peak margins/multiples in FY18-19 cycle (corrected sharply 2020-21); **risk of cyclical correction** if commodity steel prices spike or auto demand weakens. **Macro risks**: India infrastructure CapEx cycle continuing required; European recovery stable; NA Class 8 truck cycle volatility; commodity cost volatility. **Sector multiple compression risk**: industry P/E currently 45.67x; cyclical corrections historically see -25-30% multiple compression.",
            },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text:
                "**Q4 FY26 = mixed quarter with strong sequential recovery + optically poor YoY due to base effect** — Q4 Revenue ₹1,217 cr (**+28% YoY; +11% QoQ**); Q4 PAT ₹55.9 cr (-72% YoY base-effect distorted; **+312% QoQ from Q3 trough ₹13.57 cr**); **Q4 EBITDA margin 17.1% vs Q4 FY25 10.4% = +670 bps YoY** structural recovery; Q4 PBT ₹64 cr (+112% QoQ); FY26 Consolidated Revenue ₹4,238 cr (+5.1%); FY26 PAT ₹74.8 cr (-81% YoY); Interim dividend ₹1/share continuing.",
            impact: "neutral",
            note: "trough year with U-shaped recovery confirmed",
        },
        {
            text:
                "**FY27 catalyst stack loaded with 5 simultaneous triggers maturing**: (a) **Mexico facility commercial production May 2026** (USMCA tariff-free NA access; ₹500-700 cr at scale FY28), (b) **Rail Wheel Factory Chennai commercial operations June 2026** (high-margin specialty 22-25% EBITDA; ₹400-600 cr at scale FY28), (c) **Order book ₹1,254 cr won FY26** (4-year program life), (d) **CapEx cycle complete** (~400,000 MT — India's largest private forging; future maintenance only), (e) **Margin recovery path** to mgmt target 21-22% standalone EBITDA.",
            impact: "strengthens",
        },
        {
            text:
                "**Vertical diversification working** — CV from 70%+ historical to ~50-55% FY26 + Railways scaling + Energy ₹258 cr Q4 anchor + Off-highway stable = **less cyclical earnings + multiple expansion lever**. **Q4 new orders 56% auto + 44% non-auto** = balanced momentum. **FY28 target mix**: CV ~45-50% + Railways ~10-15% + Energy ~12-15% + Off-highway ~15-18% = multi-vertical balanced portfolio.",
            impact: "strengthens",
        },
        {
            text:
                "**FY26 PAT collapse -81% YoY masks underlying ~70% drop driven by genuine pressure** — forex losses + Mexico/JV op losses + US tariffs (₹6 cr/qtr; half passed-through) + subdued exports H1 + higher D&A from CapEx + elevated interest (D/E 0.89x). **EBITDA margin 15.2% FY26 vs structural 19-21%** = ~400-600 bps below normal; **mgmt target 21-22% standalone** = path to FY28 normalised earnings. **Naresh Jalan reappointed MD for 3 years** = leadership continuity signal.",
            impact: "neutral",
            note: "structural pressures real but recovering",
        },
        {
            text:
                "**Stock at ₹598.30 (live, -0.09%) — P/E 50.33x on TTM EPS ₹11.87 misleading because earnings depressed**; **on FY27E EPS ₹16-22, P/E 27-37x; on FY28E EPS ₹25-30, P/E 20-24x** = inexpensive vs Bharat Forge ~35-45x at *normalised* earnings. **Stock ~46% off 52-wk high ~₹1,100** = FY26 trough fully priced. **Asymmetric setup**: bear case ₹450-520 (FY27 margin recovery slower + Mexico/Rail Wheel ramp delays + CV cycle weakening = -13-25%), base case ₹780-880 (FY27 EPS ₹19 + FY28 EPS ₹26 × 30-34x = +30-47%), bull case ₹1,000-1,200 (FY28 EPS ₹28-30 × 35-40x + Mexico/Rail Wheel scaling ahead + sector premium = +67-100%). **Verdict: ACCUMULATE on dip — turnaround setup with FY27 catalyst stack maturing**; best entry zone ₹520-580.",
            impact: "neutral",
            note: "turnaround setup with significant catalyst stack and de-rated valuation cushion",
        },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        /* Q1 — Is the core investment thesis intact? */
        thesisIntact: {
            verdict:
                "Yes — the turnaround thesis with FY27 catalyst stack is intact and progressing. FY26 was clearly a trough year (Q2 quarterly loss, FY26 PAT collapse driven by forex + Mexico/JV losses + US tariffs + higher D&A from completed CapEx); Q4 sequential recovery clear (+312% QoQ PAT; +670 bps YoY EBITDA margin); 5 FY27 catalysts maturing simultaneously. But execution risk is real — Mexico + Rail Wheel ramp + margin recovery cadence are key validation points",
            reasons: [
                "**The forging cyclical with multi-vertical diversification thesis is structurally sound** — **(a) India's largest private-sector forging company by capacity (~400,000 MT)** post completed CapEx cycle = scale economics moat; **(b) Vertical diversification working** = CV from 70%+ historical to ~50-55% FY26 + Railways scaling (Rail Wheel Factory June 2026 launch) + Energy (₹258 cr Q4 anchor order) + Off-highway stable; **(c) Geographic expansion** = Mexico facility commercial production May 2026 (USMCA tariff-free NA access) + JMT Europe + Indian operations; **(d) Customer quality** = top global CV OEMs (Daimler, Volvo, MAN, Scania, PACCAR) + Indian CV (TATA, Ashok Leyland, BharatBenz, Eicher) + agri/construction (CNH, JCB, AGCO, Caterpillar) + railways + energy majors; **(e) Order book ₹1,254 cr won FY26** (4-year program life) = strong revenue visibility.",
                "**Q4 sequential recovery confirmed across every metric** — Q4 Revenue +28% YoY +11% QoQ; **Q4 EBITDA margin 17.1% vs Q4 FY25 10.4% = +670 bps YoY**; Q4 PAT ₹55.9 cr +312% QoQ from Q3 trough; Q4 PBT ₹64 cr +112% QoQ. **The FY26 U-shape is clear**: Q1 stagnation → Q2 trough net LOSS ₹9.5 cr → Q3 partial recovery → **Q4 meaningful recovery**. **Trajectory points to FY27 normalisation** as catalysts mature: Mexico May 2026 + Rail Wheel Factory June 2026 + order book conversion + CV cycle continuing + capacity utilisation rising from 65-70% to 80-85% by FY28.",
                "**FY26 trough drivers identifiable + recovering**: (a) forex losses (rupee volatility) — currency stabilising; (b) Mexico/JV op losses pre-commercial production — Mexico commercial May 2026 = losses ending; (c) US tariffs (25% PV / 10% CV) — ~₹6 cr/qtr impact, half passed-through, 80% NA exports via Mexico/Canada USMCA tariff-free; (d) subdued international demand H1 FY26 — recovery emerging; (e) higher D&A from completed CapEx — normalising as capacity utilisation rises; (f) elevated interest (D/E 0.89x) — deleveraging FY27-28. **Each driver has a recovery mechanism** in FY27.",
                "**Mgmt credibility = MEDIUM-HIGH** — **Naresh Jalan (MD, reappointed for 3 years from Nov 2026)** + **Lalit Khetan (CFO)** = experienced leadership team. **Track record**: FY18-25 Revenue CAGR ~17% (₹1,200 cr → ₹4,034 cr); built ~400,000 MT capacity (India's largest private forging); JMT Europe acquisition; vertical diversification + Mexico + Rail Wheel Factory = forward-looking capacity build-up. **FY26 trough has tested credibility but not broken it**; FY27 H1 cadence is the validation window. **Dividend continuity** (₹1/share interim FY26) signals capital return discipline through trough.",
                "**The thesis weakens if**: (a) Q1 FY27 EBITDA margin <16% or Revenue <+10% YoY = recovery cadence slower; (b) Mexico ramp <₹100 cr FY27 revenue = customer qualification delays; (c) Rail Wheel Factory delays > 6 months = FY27 contribution minimal; (d) CV cycle weakening (NA Class 8, Europe macro) = volume pressure; (e) commodity steel cost spike = margin recovery delayed; (f) forex volatility continuing. **The thesis strengthens if**: (a) Q1 FY27 EBITDA margin ≥18% + Revenue ≥+13% YoY, (b) Mexico revenue ₹50+ cr quarterly run-rate by Q2 FY27, (c) Rail Wheel Factory commercial operations confirmed June 2026 + customer wins announced, (d) CV cycle continuing recovery, (e) Order book conversion accelerating.",
            ],
        },

        /* Q2 — Re-rate triggers + probability */
        rerateTriggers: [
            {
                trigger: "Q1 FY27 EBITDA margin ≥18% + Revenue ≥+13% YoY + Mexico revenue contribution disclosed",
                probability: "Medium-High",
                rationale:
                    "**Q1 FY27 (August call) is *the* critical first datapoint** to validate Q4 sequential recovery sustaining + FY27 catalyst execution. **EBITDA margin ≥18%** confirms structural recovery (vs 17.1% Q4 FY26); **Revenue ≥+13% YoY** confirms growth trajectory + Mexico/Rail Wheel contribution emerging; **Mexico revenue disclosure** unlocks geographic optionality value. **If achieved**: market re-rates from current 50.33x (depressed earnings) toward 35-40x on FY27E EPS = **+15-25% upside to ₹690-750**. **Risk**: if Q1 margin <16% or revenue <+10%, multiple stays compressed = -10-15% downside to ₹510-540.",
            },
            {
                trigger: "Rail Wheel Factory Chennai commercial operations confirmed June 2026 + first customer wins announced",
                probability: "Medium-High",
                rationale:
                    "**Rail Wheel Factory launch is *the* headline FY27 catalyst** — commercial operations June 2026; high-margin specialty (22-25% EBITDA); ₹400-600 cr revenue at scale; first private-sector forged rail wheel facility in India = strategic moat. **First customer wins (Indian Railways tendering or private rail OEM)** = revenue visibility unlock. **If achieved**: market prices in railway vertical optionality = +10-15% multiple uplift = ~₹60-90 stock price impact. **Risk**: commissioning delays; customer qualification cycles 12-18 months; lower-than-expected initial pricing/volume.",
            },
            {
                trigger: "Mexico Facility Commercial Ramp + NA Customer Wins Announcement (FY27 H1)",
                probability: "Medium",
                rationale:
                    "**Mexico facility commercial production May 2026** = USMCA tariff-free NA market access = strategic optionality. **By Q2 FY27**: Mexico revenue ≥₹50 cr quarterly + NA Class 8 OEM customer wins announcements = visible scaling. **If achieved**: market prices in geographic optionality = +5-10% multiple uplift = ~₹30-60 stock price impact. **Risk**: customer qualification delays; commissioning teething; working capital intensity; tariff/trade environment changes.",
            },
            {
                trigger: "FY28 EBITDA Margin Recovery to 19-21% + PAT Doubling from FY26 Base",
                probability: "Medium-High",
                rationale:
                    "**Mgmt target 21-22% standalone EBITDA margin** = essentially the recovery thesis. **By FY28**: blended EBITDA margin 19-21% (consolidated equivalent) + Revenue ₹5,500-5,800 cr = EBITDA ₹1,050-1,200 cr + PAT ₹450-550 cr = EPS ₹25-30. **If achieved**: market prices in normalised earnings = multiple compression to 25-32x FY28E = stock target ₹780-960 = **+30-60% upside**. **Risk**: margin recovery cadence slower; commodity cost volatility; cyclical correction.",
            },
            {
                trigger: "Sector-wide Forging/Auto-Component Re-rating + India Manufacturing Premium",
                probability: "Medium",
                rationale:
                    "**Indian forging/auto-component sector multiples elevated** (industry P/E 45.67x) reflecting India manufacturing premium + China+1 displacement narrative. **If sector premium sustains**, Ramkrishna re-rates from current depressed 50x (TTM) toward sector median 35-40x on FY28E EPS = upside on multiple. **If cyclical correction** (Chinese forging supply normalising, macro slowdown), sector compresses 25-30% = Ramkrishna hit but cushioned by multiple already de-rated. **External catalyst**, not in mgmt's full control. **+5-10% multiple lift on sustained tailwind; -10-15% on cyclical correction**.",
            },
        ],

        /* Q3 — Upside if guidance fully met */
        upsideIfGuidanceMet: {
            currentPrice: "₹598.30 (live NSE LTP via Groww MCP, 5 May 2026 5:15 PM IST — *flat -0.09%; market neutral on Q4*)",
            targetPrice: "₹780 – ₹1,200",
            upsidePct: "+30% to +100%",
            horizon: "18-24 months (FY28 EPS-multiple basis with EBITDA margin recovery to 19-21% + Mexico/Rail Wheel ramps + CV cycle continuing + order book conversion + deleveraging)",
            assumptions:
                "**Base case (FY27 Revenue +14% + EBITDA margin 18% + EPS ₹19):** FY27 Revenue ₹4,830 cr (+14%); EBITDA margin 18% = ₹870 cr; D&A ₹220 cr; EBIT ₹650 cr; Interest ₹220 cr; PBT ₹430 cr; Tax 25% = ₹108 cr; **PAT ₹322 cr (+330% on FY26 ₹74.8 cr base; +30% on underlying FY25 normalised ₹250 cr); EPS ₹17.7**. **FY28 Build (margin recovery + Mexico + Rail Wheel scaling)**: Revenue ₹5,600 cr (+16%); EBITDA margin 20% = ₹1,120 cr; D&A ₹230 cr; EBIT ₹890 cr; Interest ₹200 cr; PBT ₹690 cr; Tax 25% = ₹173 cr; **PAT ₹518 cr (+61%); EPS ₹28.5**. **FY29 Build**: Revenue ₹6,400 cr (+14%); EBITDA margin 21%; PAT ₹650 cr; EPS ₹35.7. **5-yr median P/E for forging companies 25-40x at normalised earnings; current 50.33x at depressed earnings**. Apply 28x to FY28 EPS ₹28.5 = ₹798 (conservative); 32x = ₹912; 38x = ₹1,083. **Bull case** (margin reaches 21-22% + Mexico/Rail Wheel ahead of plan + sector premium): FY28 EPS ₹30-32 × 35-40x = ₹1,050-1,280. **Conservative target ₹780 (FY28 EPS ₹28.5 × 27x); aggressive target ₹1,200 (FY29 EPS ₹35.7 × 34x)**. **Range ₹780-1,200 (+30-100%) over 18-24 months**.",
            workings:
                "**FY27 Build:** Revenue ₹4,830 cr (+14% YoY; CV cycle +12% + Mexico ₹150 cr + Rail Wheel ₹100 cr + base growth); EBITDA margin 18% (recovery from Q4 FY26 17.1%); EBITDA ₹870 cr; D&A ₹220 cr; EBIT ₹650 cr; Interest ₹220 cr (D/E 0.89x); PBT ₹430 cr; Tax 25% = ₹108 cr; **PAT ₹322 cr; EPS ₹17.7** (vs FY26 ₹4.13; vs underlying FY25 normalised ~₹14 = +27%). **FY28 Build:** Revenue ₹5,600 cr (+16%; Mexico ramp ₹400 cr + Rail Wheel ramp ₹400 cr + CV cycle +10% + base growth); EBITDA margin 20% (further recovery toward mgmt target); EBITDA ₹1,120 cr; D&A ₹230 cr; EBIT ₹890 cr; Interest ₹200 cr (deleveraging); PBT ₹690 cr; Tax 25% = ₹173 cr; **PAT ₹518 cr; EPS ₹28.5**. **FY29 Build:** Revenue ₹6,400 cr (+14%); EBITDA margin 21% (peak normalised); PAT ₹650 cr; EPS ₹35.7. **Multiples**: 5-yr median P/E for forging 25-40x at normalised earnings; Bharat Forge ~35-45x; MM Forgings ~25-30x; Sundaram Fasteners ~30-40x; Apply 28x to FY28 EPS ₹28.5 = ₹798; 32x = ₹912; 38x = ₹1,083. **Bull case** (margin 22%+ + Mexico/Rail Wheel ahead + sector premium): 38x × FY28 EPS ₹32 = ₹1,216. **18-24 month range ₹780-1,200 (+30-100%)** weights base + partial bull.",
        },

        /* Q4 — Best value entry zone */
        valuationEntryZone: {
            bestValueRange: "₹520 – ₹580",
            fairValue: "₹580 – ₹720",
            currentZone: "Within Fair Value — at lower edge of fair value zone (₹598.30); slightly above best-value entry but acceptable accumulation level",
            rationale:
                "**Trailing P/E:** 50.33x vs industry 45.67x = **only 10% premium** but misleading because **TTM EPS ₹11.87 is depressed** (FY26 trough year). **Forward P/E on FY27E EPS ₹17.7**: 33.8x — *fair* given recovery trajectory; **on FY28E EPS ₹28.5**: 21x — *attractive* for India's largest private forging at normalised earnings. **P/B:** 3.39x vs ROE 7.27% (P/B/ROE = 0.47 = compressed valuation reflecting FY26 trough); **at peak earnings ROE 16-18% on book ₹176, fair P/B 2.8-3.5x = stock value zone ₹490-620** = **current ₹598 within fair zone**. **52-week range estimated ~₹450-1,100**; current ₹598 = ~46% off 52-wk high; **today flat (-0.09%)** = market neutral on Q4 (revenue/EBITDA recovery validated; PAT YoY drop optically poor but understood as base effect). **Best value entry ₹520-580** = 18-21x FY28E P/E + significant downside cushion for FY27 catalyst execution risk + 52-wk range bottom; gives 35-65% upside to ₹780-1,000 base case targets. **Fair value ₹580-720** = 20-25x FY28E P/E + FY27 catalyst execution proceeding + Mexico/Rail Wheel commissioning + margin recovery to 18-19%; current ₹598 within this zone. **Above ₹720** starts pricing FY27 base case explicitly; **above ₹880** prices FY28 base case; **above ₹1,000** prices full bull case (margin reaches 22%+ + Mexico/Rail Wheel ahead + sector premium). **Per *valuation_analysis.md* logic**: deploy aggressively only on dip to ₹520-580 zone (best-value cushion) with conviction earned from Q4 sequential recovery + Mexico/Rail Wheel commissioning timeline + 4-year order book visibility; **standard accumulate ₹580-650**; **avoid above ₹780 (FY28 base case priced); definitely avoid above ₹1,000** (full bull case priced + cyclical peak setup). **Asymmetric setup risks: -13 to -25% downside to ₹450-520 (FY27 margin recovery slower + Mexico/Rail Wheel ramp delays + CV cycle weakening + commodity cost spike + multiple stays compressed) vs +30-100% upside to ₹780-1,200 (FY27 EPS ₹19 + FY28 EPS ₹28.5 × 28-38x + Mexico/Rail Wheel scaling + margin recovery to 19-21% + deleveraging + sector premium sustained) = roughly 2.5:1 to 5:1 reward-to-risk** at current ₹598; **even better setup at ₹520-580** = 4:1 to 7:1 reward-to-risk. **The Q4 results validate the recovery setup but execution risk on Mexico + Rail Wheel + margin recovery cadence is real** = scale into corrections on Q4-FY27 transition; entry timing matters.",
        },

        summary:
            "**Ramkrishna Forgings Q4 FY26 = trough year ending with strong sequential recovery + 5 simultaneous FY27 catalysts maturing** — Q4 Revenue ₹1,217 cr (**+28% YoY; +11% QoQ**); Q4 PAT ₹55.9 cr (**-72% YoY base-effect distorted; +312% QoQ from Q3 trough**); **Q4 EBITDA margin 17.1% vs Q4 FY25 10.4% = +670 bps YoY structural recovery**; Q4 PBT ₹64 cr (+112% QoQ); FY26 Consolidated Revenue ₹4,238 cr (+5.1%); FY26 PAT ₹74.8 cr (-81% YoY); FY26 EBITDA ₹642.7 cr (margin 15.2%). **The FY26 U-shape**: Q1 stagnation → **Q2 net LOSS ₹9.5 cr (trough)** → Q3 partial recovery → **Q4 meaningful recovery**. **Stock at ₹598.30 (-0.09%, flat)**; ~46% off 52-wk high ~₹1,100. **5 simultaneous FY27 catalysts**: (1) **Mexico facility commercial production May 2026** = USMCA tariff-free NA market access (₹500-700 cr at scale FY28), (2) **Rail Wheel Factory Chennai commercial operations June 2026** = high-margin specialty 22-25% EBITDA (₹400-600 cr at scale FY28; first private-sector forged rail wheel facility in India), (3) **Order book ₹1,254 cr won FY26** (4-year program life; 56% auto + 44% non-auto), (4) **CapEx cycle complete** ~400,000 MT capacity (India's largest private forging; future maintenance only), (5) **Margin recovery path** to mgmt target 21-22% standalone EBITDA. **Vertical diversification working**: CV from 70%+ historical to ~50-55% FY26 + Railways scaling + Energy (₹258 cr Q4 anchor) + Off-highway stable = multi-engine compounding architecture. **Mgmt credibility MEDIUM-HIGH**: Naresh Jalan (MD reappointed 3 years from Nov 2026) + Lalit Khetan (CFO); FY18-25 Revenue CAGR ~17%; built India's largest private forging; FY26 trough has tested credibility but FY27 H1 cadence is validation window. **Trading at P/E 50.33x on TTM EPS ₹11.87 misleading because earnings depressed**; **on FY27E EPS ₹17.7, P/E 33.8x; on FY28E EPS ₹28.5, P/E 21x** = inexpensive vs Bharat Forge ~35-45x; MM Forgings ~25-30x at normalised earnings. **Asymmetric setup at ₹598**: bear case ₹450-520 (FY27 margin recovery slower + Mexico/Rail Wheel ramp delays + CV cycle weakening + commodity cost spike = -13-25%), base case ₹780-880 (FY28 EPS ₹28.5 × 28-31x = +30-47%), bull case ₹1,000-1,200 (FY29 EPS ₹35.7 × 28-34x + Mexico/Rail Wheel scaling ahead + margin reaches 22%+ + sector premium sustained = +67-100%). **Roughly 2.5:1 to 5:1 reward-to-risk** at current ₹598; **even better setup at ₹520-580** = 4:1 to 7:1. **Verdict: ACCUMULATE on dip — turnaround setup with FY27 catalyst stack maturing**; aggressive accumulate ₹520-580; standard accumulate up to ₹650; **avoid above ₹780** (FY28 base case priced); definitely avoid above ₹1,000 (full bull case + cyclical peak risk). **This is similar to Acutaas as a quality play — but inverse setup**: Acutaas at peak earnings + premium valuation (P/E 60x); Ramkrishna at trough earnings + de-rated valuation (P/E 50x but 21x on FY28E). **Watch FY27 H1 cadence**: Q1 FY27 (August call) EBITDA margin ≥18% + Revenue ≥+13% YoY + Mexico revenue disclosed + Rail Wheel customer wins = trajectory confirmation. **The Q4 sequential recovery validates the setup; execution on Mexico + Rail Wheel + margin recovery cadence is the FY27 H1 validation window**. **Among the cleanest forging turnaround stories in Indian mid-cap with completed CapEx cycle + multi-vertical diversification + geographic expansion + completed leadership continuity** — at de-rated valuation with significant catalyst stack. The earnings recovery (FY27-29 PAT CAGR 50-70%) + multi-vertical compounding + Mexico/Rail Wheel optionality + asset-heavy India's largest forging make Ramkrishna a quality cyclical turnaround hold but **catalyst execution validation matters** = scale aggressively on dips below ₹580 rather than chasing recovery in linear progression.",
    },
});
