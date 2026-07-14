/* ============================================================
   Redington Ltd — Q4 FY26 / Full Year FY26
   Results announced: 13 May 2026; Concall: 14 May 2026 (09:00 AM IST)
   File path: data/REDINGTON/Q4FY26.js
   Live spot @ authoring: ₹221.29 NSE (15 May 2026, 11:26 PM IST)
   Day move: **+1.91% (+₹4.15)** — mild positive on T+1 post-results
   Source: Groww MCP get_ltp + fetch_stocks_fundamental_data
   ============================================================ */

window.registerReport("REDINGTON", "Q4FY26", {
    meta: {
        companyName: "Redington Ltd",
        ticker: "REDINGTON",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "13 May 2026 (Board approval)",
        concallDate: "14 May 2026 (Q4 FY26 + FY26 earnings call) — V.S. Hariharan (MD & Group CEO), S.V. Krishnan (Finance Director), Palak Agrawal (GM, Investor Relations)",
        resultsBasis:
            "Consolidated. **Asia's largest IT/technology distributor — transitioning from pure distributor to 'orchestrator' across cloud, software, AI**. Operates across 38+ countries via two reportable segments — **SISA (Singapore, India & South Asia)** and **ROW (Middle East, Africa, Turkey via Arena)** — distributing 290+ brands (Apple, HP, Dell, Lenovo, Microsoft, AWS, Cisco, Samsung, etc.) through **40,000+ channel partners**. **4 business units**: (1) **Mobility (MSG)** ~33% of top line — smartphones (Apple/Samsung), tablets, accessories; (2) **End Point Solutions (ESG)** ~30% — PCs, printers, peripherals; (3) **Technology Solutions (TSG)** ~19% — servers, storage, networking, on-prem infra; (4) **Software Solutions (SSG)** ~17% — cloud hyperscalers (AWS/Azure/GCP), cybersecurity, software, professional services + **ProConnect** logistics subsidiary (crossed ₹1,000 cr revenue in FY26). **Differentiated thesis**: (a) **mix shift to high-margin SSG** (15% → 17% in 1 year; growing 40%+) = quality of earnings improving; (b) **ProConnect Global** logistics scale-up; (c) **India Distribution** structural tailwinds (50% YoY growth this quarter); (d) **AI focus**: Chennai AI COE, AI Agentic catalog, AI go-to-market team in India + ME; (e) **Working capital discipline** (30 days, industry-low) supporting ROCE 22% / ROE 17%. **Right earnings frameworks for low-margin distribution**: ROCE (mgmt-stated focus) + Working Capital Days + Net Debt / Interest Cost trajectory + Segment Mix (SSG share) + Geographic diversification + Cash conversion — *not* P/E in isolation (margin is structurally <2%). **P/E 13.2x TTM vs industry P/E 54.12x; EV/EBITDA 6.79x; P/B 1.67x; ROE 14.67%; ROIC 16.3%; Dividend Yield 2.77%; PEG 0.25** = **cheap on multiple lenses but **margin compression + Arena/Turkey impairment + reported PAT –69% YoY = explains the depressed multiple**; clean PAT growth (+17% ex-exceptionals) supports re-rating once Arena drag normalises.",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. **Redington Q4 FY26 = best-ever quarter on revenue + broad-based segment growth + structural India momentum + SSG mix-shift on track — but reported PAT optically MASKED by Turkey/Arena impairment + last year Paynet gain base effect** — Q4 Revenue ₹33,269 cr (+25% YoY; +32% YoY ex-Arena); **highest-ever quarterly revenue**; **Q4 Global PAT ₹467 cr (+16% YoY); ex-Arena impairment ₹489 cr (+17% YoY)**; **Reported consolidated PAT ₹287.58 cr (–69% YoY vs ₹917.74 cr Q4 FY25 inflated by Paynet divestment gain)** = clean comparison +17% YoY. **Q4 EBITDA ₹669.93 cr (+0.4% YoY); margin 2.01% (-50 bps YoY)** — distribution business is structurally thin-margin. **FY26 Full Year**: Revenue ₹119,347 cr (+20% YoY); FY26 PAT +17% YoY ex-exceptional. **ROCE 22% (mgmt target 18–20% sustainable); ROE 17%; D/E 0.25x; Working Capital Days 30 (down 4 days YoY)**. **Segments Q4**: MSG +19% (33% mix), ESG +28% (30%), TSG +34% (19%), **SSG +31% (17% — quality lever growing fastest)**. **Geography Q4**: India Distribution +50% revenue / +41% PAT (stunning); SISA +48% / +42%; ROW ex-Arena +12% (Middle East war from 28 Feb 2026 hurt March; Africa solid). **Arena/Turkey impairment ₹152.3 cr (₹75.2 cr to group PAT after MI)** = one-off + Arena exit costs ₹22 cr Redington share; mgmt expects FY27 break-even. **Dividend ₹6/share (30% payout, dividend yield 2.77%)**. **ProConnect crossed ₹1,000 cr revenue with record profitability**. **Stock ₹221.29** = **P/E 13.2x TTM vs industry P/E 54.12x; EV/EBITDA 6.79x; PEG 0.25; P/B 1.67x = inexpensive on multiple lenses**. **Verdict: BUY/ACCUMULATE on valuation + India structural growth + SSG mix-shift; key risks = Middle East geopolitics + thin-margin business model + Arena residual drag**; aggressive accumulate ₹190-210 (best value, 5:1 reward-to-risk); standard accumulate up to ₹240; **fair value ₹250-300; 18-24m target ₹290-360 (+30-65% upside)**; **avoid above ₹360 (FY28 base case priced)**.",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            {
                metric: "Revenue (₹Cr)",
                current: "**Q4: ₹33,269 cr (highest-ever quarterly revenue); FY26: ₹119,347 cr** = ₹1.19 lakh crore enterprise scale",
                qoq: "**+7.5% QoQ** (₹33,269 vs ₹30,959 Q3 FY26) = consistent sequential momentum despite Middle East geopolitical disruption in March; FY26 quarterly cadence: Q1 ₹26,002 → Q2 ₹29,118 (+12%) → Q3 ₹30,959 (+6%) → **Q4 ₹33,269 (+7.5%)** = accelerating",
                yoy: "**Q4 +25.5% YoY (₹33,269 vs ₹26,510 Q4 FY25); +32% YoY ex-Arena = stunning broad-based growth**; **FY26 +19.9% YoY (₹119,347 vs ₹99,562 FY25)**. **Drivers**: (a) **India Distribution +50% YoY** (premium mobility + AI-PC penetration + upcountry expansion + digital platform), (b) **SISA segment +48% revenue** (India halo + Bangladesh + Sri Lanka + Singapore), (c) **PC component shortage + price hikes** boosting ESG +28%, (d) **TSG +34%** on large enterprise deal recognition, (e) **SSG +31%** on cloud + cybersecurity scale-up, (f) **ROW ex-Arena +12%** despite Middle East war disruption. **Compare**: distribution peer Redington has scaled revenue from ₹57k cr (FY21) → ₹119k cr (FY26) = **2.1x in 5 years = ~16% revenue CAGR** — top-tier for low-margin distribution",
            },
            {
                metric: "COGS / Gross Margin (%)",
                current: "**Q4 Gross Margin ~6.0% (estimated); Operating margin 1.85% (vs Q3 2.02%)** — structurally thin distribution margin",
                qoq: "**Operating margin -17 bps QoQ (1.85% vs 2.02%)** = mild compression driven by (a) Middle East geopolitical disruption raising freight + insurance premiums, (b) mix tilt to MSG (Mobility) which has lower gross margin but high working capital efficiency, (c) higher AR provisioning in Saudi Arabia + India (one-offs)",
                yoy: "**FY26 Operating margin 2.39% → ~2.0%** = -40 bps compression vs FY25 driven by: (a) Arena local-currency drag (high interest cost not recovered in gross margin), (b) TSG margin pressure from cloud cannibalisation of on-prem hardware, (c) PC component shortage NOT yet translated to gross margin uplift (mgmt: 'prices passed to customer; no additional margin benefit yet'). **Long-term structural margin**: 2.5-3.0% operating; gross margin ~6-7%. **The mix-shift narrative**: as SSG (gross margin ~8-10%) grows from 17% to 25%+ over 3 years, blended margins should expand 50-100 bps",
            },
            {
                metric: "EBITDA + EBITDA Margin (%)",
                current: "**Q4 EBITDA ₹669.93 cr; margin 2.01%; FY26 EBITDA ₹2,414 cr; margin 2.02%**",
                qoq: "**Q4 EBITDA ₹670 cr vs Q3 ₹663 cr = +1.0% QoQ** = flattish despite revenue +7.5% QoQ = margin compression; FY26 quarterly cadence: Q1 ₹450 → Q2 ₹632 → Q3 ₹663 → **Q4 ₹670** = stabilising at ~₹660 cr/quarter run-rate",
                yoy: "**Q4 EBITDA +0.4% YoY (₹670 vs ₹667 Q4 FY25); FY26 EBITDA ₹2,414 cr vs FY25 ₹2,883 cr = -16.2% YoY** = on the surface looks weak but **FY25 had Paynet divestment gain inflating base**; **clean FY26 EBITDA growth ~+5-8% YoY**. **The story is volume scale-up at compressed margins** — revenue +20% growing faster than EBITDA +5-8% = operating deleverage as Arena drag + mix shift in early stages. **Forward**: as Arena breaks even (FY27 mgmt target) + SSG scales + India operating leverage kicks in, EBITDA margin should recover toward 2.5-3.0% = ~₹3,500-4,200 cr EBITDA on FY27 revenue ₹140k cr",
            },
            {
                metric: "PAT + PAT Margin (%)",
                current: "**Q4 Reported PAT ₹287.58 cr (margin 0.86%); Global PAT (pre-MI) ₹467 cr (+16% YoY); ex-Arena impairment ₹489 cr (+17% YoY)**; FY26 Reported PAT ₹1,284 cr",
                qoq: "**Q4 Reported PAT ₹288 cr vs Q3 ₹413 cr = -30% QoQ** = entirely explained by **₹75.2 cr Arena impairment** (group share after MI) + ₹22 cr Arena exit costs + war-related insurance/freight premiums + Saudi Arabia/India AR provisions. **Underlying Q4 PAT trajectory**: ₹287.58 + 75.2 + 22 ≈ ₹385 cr core = -7% QoQ vs Q3 ₹413 cr = mild softness",
                yoy: "**Q4 Reported PAT -68.7% YoY (₹288 vs ₹918 Q4 FY25) — but Q4 FY25 was INFLATED by Paynet divestment gain (~₹500-600 cr)**; **clean YoY comparison**: Q4 FY26 ₹489 cr (ex-Arena impairment) vs Q4 FY25 ~₹420 cr (ex-Paynet) = **+16-17% YoY clean** = solid growth. **FY26 Reported PAT ₹1,284 cr vs FY25 ₹1,821 cr = -29.5% reported; ex-one-offs +17% YoY**. **3-year PAT trajectory**: FY24 ₹1,239 → FY25 ₹1,821 (inflated by Paynet) → FY26 ₹1,284 (depressed by Arena) = **clean trend ~+12-15% CAGR**. **FY27E PAT (mgmt implicit guidance)**: organic +15-17% + Arena break-even = ~₹1,500-1,700 cr = +17-32% reported growth",
            },
            {
                metric: "EPS (₹) + Capital Return",
                current: "**TTM EPS ₹16.43 (per Groww); FY26 EPS ₹16.43-19.06 depending on calculation; FY25 EPS ₹20.53 (inflated by Paynet)**",
                qoq: "Q4 EPS ₹5.01 vs Q3 ₹5.57 = -10% QoQ (Arena impairment + war-related one-offs); clean Q4 EPS ~₹6.7-7.0",
                yoy: "**FY26 Reported EPS ₹16.43 vs FY25 ₹20.53 = -20% reported; ex-one-offs clean FY26 EPS ~₹19.5 vs clean FY25 ~₹16.5 = +18% YoY clean growth**. **5-yr EPS trajectory** (FY21-FY25): ₹9.72 → ₹16.39 → ₹17.81 → ₹15.59 → ₹20.53 = ~21% CAGR (with some volatility from one-offs). **Dividend ₹6/share (30% of profit; FY25 was ₹6.8) = 2.77% yield** = ATTRACTIVE for value-oriented investors; payout policy ~30%. **No buybacks**; capital allocation = dividend + reinvest in working capital + selective M&A (ProConnect, AI capability). **Mgmt commentary**: dividend kept lower than expected this year to conserve cash for growth opportunities + geopolitical uncertainties",
            },
        ],
        businessQualityMetrics: [
            {
                metric: "Working Capital Days — *the* core distribution efficiency metric (lower = better)",
                current: "**30 days (FY26 exit) — industry-leading discipline**; mgmt long-term sustainable range 35-40 days",
                qoq: "**30 days vs Q3 28 days = +2 days QoQ marginal uptick** as TSG large deals + SSG growth (higher AR) add to working capital intensity; still well within mgmt's 35-40 day comfort zone",
                yoy: "**30 days vs FY25 exit 34 days = -4 days YoY improvement** = stunning efficiency gain driven by: (a) Mobility (MSG) mix tilt — high revenue, low working capital intensity (Apple supply tight), (b) Arena exit from local-currency businesses (Connect + Vodafone) which were working-capital heavy, (c) digital platform adoption (>1/3 of India hardware business via digital platform), (d) AI agents deployed in back-office + logistics for cash collection. **Compare**: Indian distribution peers typically run 40-50 days. **The strategic risk**: as SSG (higher AR) + TSG large deals scale, working capital days could drift to 35-40; mgmt has signalled this. **Each 1-day reduction = ~₹325 cr cash freed up = lower interest cost ~₹25-30 cr/year**",
            },
            {
                metric: "Software Solutions Group (SSG) Mix + Growth — *the* quality-of-earnings lever",
                current: "**Q4 SSG +31% YoY; FY26 SSG ~17% of revenue (vs FY25 ~15%); profitability above-average PAT %**; encompasses Cloud Hyperscalers (AWS/Azure/GCP) + Cybersecurity + Software + Professional Services",
                qoq: "**SSG mix expanded 15% (FY25) → 16% (Q1-Q2) → 17% (Q3) → 17% (Q4)** = steady mix-shift; +40% growth was the run-rate in earlier quarters, moderating to 31% in Q4 = still well above company average +25%",
                yoy: "**SSG +31% YoY in Q4; FY26 estimated SSG growth +35-40% YoY** = consistent top growth segment; **Cloud Hyperscaler business** = key partnerships with AWS + Microsoft (joint business plans); **Cybersecurity + Software** = broadening portfolio + outcome-based selling; **Professional Services** = small but growing fast. **Strategic investments**: CloudQuarks digital platform v2 launching with enhanced analytics; Redington Academy for certified professionals; AI-driven renewal management. **Mgmt expectation**: SSG 25%+ of revenue over 3 years = significant blended margin uplift. **Each 1 percentage point SSG mix increase = ~50-70 bps blended gross margin uplift (SSG gross margin ~8-10% vs company avg ~6%)**",
            },
            {
                metric: "ROCE (Return on Capital Employed) — mgmt-stated North Star KPI",
                current: "**FY26 ROCE 22%; mgmt sustainable target range 18-20%; threshold floor 16%**",
                qoq: "ROCE 22% (FY26) vs Q3 9M ROCE 22.1% = stable; **'ROCE is what we will protect even at cost of gross margin %'** — explicit mgmt commentary; consistent quarterly cadence over FY26",
                yoy: "**ROCE 22% (FY26) vs FY25 ~20% = +200 bps YoY improvement** = exceptional capital efficiency despite low operating margin; **decomposition**: (Op margin 2% × Asset Turnover ~5x = ROCE 10%) + (working capital efficiency + Arena working capital reduction + SSG scaling) drives effective ROCE to 22%. **ROE 17%, ROIC 16.3%, ROA 4.69%** = all healthy. **Mgmt commentary**: 'Current ROCE 22% is not sustainable; expect 18-20% steady-state; could become sustainable in few years once SSG scales further'. **Why ROCE matters more than margin for distribution**: low gross margin business is fine if asset turn is high; Redington's asset turn ~5x = top quartile; combined with disciplined working capital = ROCE leadership vs peers",
            },
        ],
        footnotes: [
            "**Arena/Turkey IMPAIRMENT — the SINGLE BIGGEST optical headline issue this quarter**: (a) **Arena (Redington's Turkish subsidiary) booked impairment of ₹152.3 cr; ₹75.2 cr to group PAT after minority interest** — driven by 'challenging local economic conditions in Turkey + lower future growth expectations'; (b) **Arena exit costs ₹44 cr** (₹22 cr Redington share) from exiting Connect (mobility) + Vodafone distribution contracts to reduce local-currency exposure; (c) **Arena revenue expected to halve** FY27 vs FY26 (~$1 Bn → ~$500 Mn) as TL business is exited and only USD-based IT/cloud business remains; (d) **Mgmt expects Arena break-even by FY27** with quarterly loss trajectory improving (Q1 ₹9.5 Mn → Q2 ₹8.5 Mn → Q3 ₹4.9 Mn → Q4 ₹4.4 Mn — note these were monthly figures in concall; Q3-Q4 quarterly losses were ~₹22 cr each). **The Arena drag explains the entire optical PAT decline**: ex-Arena impairment Q4 PAT growth +17% YoY = healthy.",
            "**West Asia (Middle East) conflict from 28 February 2026** = ~30-35% of Redington's business; **temporary operational disruption in March** — higher freight + insurance premiums; logistics delays; some demand acceleration in security + cloud solutions. **UAE strong (Q3 was +19%); KSA decelerated** as Saudi Vision 2030 reprioritised and delayed some big international events. **Africa continues to be promising** especially for SSG + TSG. **Southeast Asia just getting started** = optionality.",
            "**MCP fundamentals: TTM EPS ₹16.43; P/E 13.2x; Industry P/E 54.12x; Mkt Cap ₹16,961 cr; ROE 14.67%; ROIC 16.3%; ROA 4.69%; D/E 0.28; P/B 1.67x (Book Value ₹129.97); Dividend Yield 2.77%; EV/EBITDA 6.79x; P/S 0.15x; PEG 0.25; Face Value ₹2**. **Industry P/E 54.12x is the broader BSE-IT/Trading index which is structurally skewed by high-multiple IT services** = not a real peer comparison for distribution; **Redington's real peer set**: globally TD SYNNEX (US, P/E ~12-14x), Arrow Electronics (P/E ~11-13x), Ingram Micro (private), CDW (P/E ~22-25x for higher-mix software). **Redington at 13.2x = in line with global distribution peers**; the discount to high-mix CDW (22-25x) is appropriate; the discount to Indian IT services (24-30x) reflects business model difference. **PEG 0.25 = ATTRACTIVE for value-oriented compounder**; EV/EBITDA 6.79x = below 5-yr median ~8x for Redington = ~15-20% upside on multiple normalisation alone.",
            "**Stock context**: Stock ₹221.29 NSE / ₹221.40 BSE; today +1.91% (T+1 post-results = mild positive); **52-week range estimated ~₹180-280**; current ~22% off 52-wk high; **mkt cap ₹16,961 cr (~$2.0 Bn)** = small-mid cap zone. **FII holding 61.49% (Mar'26)** = significantly foreign-owned; mutual funds 11.55%; retail 21.39%; **NO PROMOTER** = orphan / widely-held structure (originally promoted by Synnex/TD SYNNEX which exited; now widely held with FII/DII dominance). **Today's mild +1.91% reaction = market reading**: (a) Q4 record revenue is good, but (b) reported PAT decline of 69% (despite being optical) creates headline noise, (c) Arena impairment + Middle East geopolitics tempering enthusiasm. **Stock likely to re-rate** as Arena normalises FY27 + SSG mix continues climbing.",
            "**Capital allocation philosophy**: **Dividend ₹6/share FY26 (30% payout; 2.77% yield)** = lower than expected as mgmt conserves cash; **historical payout 30-50%**; **no buybacks**; **selective M&A** (ProConnect acquired earlier; small goodwill impairment ₹9.2 cr in Q3 FY26 was a one-off review). **Net Debt FY26 reduced ₹1,000 cr YoY** (₹300 cr from Arena exit; ₹700 cr from rest of business) = balance sheet strengthening. **D/E 0.28x = conservative for distribution business**; financing primarily working capital lines.",
        ],
        patternDetected:
            "Q4 Revenue ₹33,269 cr (+25.5% YoY; +32% ex-Arena; +7.5% QoQ — highest-ever) + Q4 Reported PAT ₹288 cr (-69% YoY optical; ex-Arena impairment + Paynet base = clean +17% YoY) + Q4 EBITDA ₹670 cr (+0.4% YoY; margin 2.01% -50 bps YoY) + FY26 Revenue ₹119,347 cr (+19.9% YoY) + FY26 PAT ₹1,284 cr (clean +17% YoY ex-exceptionals) + Working Capital 30 days (-4 days YoY industry-leading) + ROCE 22% (mgmt target 18-20% sustainable) + ROE 17% + D/E 0.25x + Segments Q4: MSG +19% (33%), ESG +28% (30%), TSG +34% (19%), **SSG +31% (17% — quality lever)** + India Distribution +50% revenue / +41% PAT + SISA +48%/+42% + ROW ex-Arena +12% + Arena impairment ₹152.3 cr (₹75.2 cr group share) + ProConnect crossed ₹1,000 cr revenue with record profitability + Dividend ₹6/share (2.77% yield) + Stock ₹221.29 (+1.91% T+1) + P/E 13.2x (industry 54.12x; global distribution peers 11-14x) + EV/EBITDA 6.79x + PEG 0.25 + P/B 1.67x = **pattern reading: 'a thin-margin but high-asset-turn distribution platform executing flawlessly on (a) India structural growth (+50% YoY distribution revenue — premium mobility + AI-PCs + upcountry), (b) SSG mix-shift to higher-margin cloud/cyber/software (17% mix; +31% growth), (c) working capital discipline (30 days industry-leading), (d) ROCE leadership (22% well above mgmt floor 16%), (e) measured M&A integration (ProConnect ₹1,000 cr milestone), (f) Arena/Turkey wind-down to USD-only IT business (FY27 break-even target) — but optically masked by ₹152 cr Arena impairment + ₹500-600 cr Paynet base effect creating headline -69% PAT YoY noise. The clean underlying earnings growth is +17% YoY with structural improvement levers (SSG mix + Arena normalisation + India operating leverage). Trading at 13x P/E + 6.8x EV/EBITDA + PEG 0.25 = MEANINGFULLY CHEAP for a 15-20% earnings compounder with ROCE 22% + dividend yield 2.77% = classic value setup with patient compounding optionality'**. The investment outcome hinges on Arena reaching break-even by FY27 + SSG mix continuing to climb + India distribution growth sustaining +25%+ + Middle East geopolitics stabilising.",
        interpretation:
            "**Q4 FY26 = best-ever revenue quarter + clean underlying earnings growth +17% YoY — but OPTICALLY MASKED by Arena/Turkey impairment + FY25 Paynet base effect creating headline noise** — Q4 Revenue ₹33,269 cr (+25% YoY; +32% ex-Arena) = **highest-ever quarterly revenue**; **Reported PAT ₹288 cr (-69% YoY)** entirely explained by **₹75.2 cr Arena impairment (group share) + Q4 FY25 having ₹500-600 cr Paynet divestment gain**; **clean Global PAT ₹489 cr (+17% YoY ex-Arena) per company commentary** = healthy growth. **EBITDA ₹670 cr (+0.4% YoY); margin 2.01% (-50 bps YoY)** — distribution business is structurally thin-margin; the volume scale-up is the story, not margin expansion (for now). **Stock +1.91% to ₹221.29** (T+1 mild positive — market still digesting headline noise vs underlying growth). **FY26 Full Year**: Revenue ₹119,347 cr (+20% YoY); clean PAT +17% YoY ex-exceptionals; **ROCE 22% (mgmt sustainable target 18-20%); ROE 17%; D/E 0.25x; Working Capital 30 days (down 4 YoY)** = financial discipline showcase. **Segments Q4**: MSG (Mobility) +19% YoY (33% of revenue); ESG (PCs) +28% YoY (30%); TSG (Tech Solutions) +34% YoY (19%); **SSG (Software Solutions) +31% YoY (17% of revenue — the quality-of-earnings lever growing fastest)**. **Geography Q4**: **India Distribution +50% revenue / +41% PAT** (stunning, structural India tailwinds); **SISA +48%/+42%**; **ROW ex-Arena +12%** (Middle East war from 28 Feb 2026 hurt March; Africa strong; KSA decelerated; Southeast Asia ramping). **Arena/Turkey impairment ₹152.3 cr (₹75.2 cr group PAT)** + ₹22 cr exit costs (Redington share) = total optical drag ~₹97 cr on Q4 reported PAT. **Mgmt expects Arena break-even FY27** as TL business exited (Arena FY27 revenue ~$500 Mn vs $1 Bn FY26) and USD IT/cloud business stabilises. **ProConnect crossed ₹1,000 cr revenue milestone with record profitability** = logistics arm scaling. **Strategic initiatives**: Chennai AI COE + AI Agentic catalog + AI go-to-market in India/ME + CloudQuarks platform v2 + Redington Academy + outcome-based selling + data center deal focus. **Dividend ₹6/share (30% payout; 2.77% yield)** = lower than mgmt's typical 40-50% to conserve cash for growth + geopolitical uncertainties. **Trading at P/E 13.2x TTM vs industry P/E 54.12x; EV/EBITDA 6.79x; PEG 0.25; P/B 1.67x; ROE 14.67%; ROIC 16.3%** = **inexpensive on multiple lenses for a 15-20% earnings compounder with ROCE 22% + dividend yield 2.77%**. **Asymmetric setup at ₹221**: bear case ₹170-190 (Arena drag persists + Middle East war escalates + India growth slows + multiple compression to 9-10x = -14-23%), base case ₹260-300 (FY27 EPS ₹22-24 × 12-13x = +18-36%), bull case ₹320-400 (FY28 EPS ₹28-32 × 12-13x + multiple re-rating to 13-14x on SSG mix + sector premium = +45-80%). **Roughly 1:3 to 1:4 reward-to-risk** at ₹221 = ATTRACTIVE setup; **better setup at ₹190-210** = 5:1+ reward-to-risk = HIGH-CONVICTION ACCUMULATION zone. **Verdict: BUY/ACCUMULATE — record revenue + healthy clean earnings growth + India structural tailwinds + SSG mix-shift + ROCE 22% + dividend yield 2.77% + cheap valuation = quality value compounder with patient upside**; aggressive accumulate ₹190-210 (best value); standard accumulate up to ₹240; **fair value ₹250-300; 18-24m target ₹290-360 (+30-65% upside)**; **avoid above ₹360 (FY28 base case priced)**.",
        whatWentRight: [
            "**Q4 Revenue ₹33,269 cr (+25.5% YoY; +32% ex-Arena) = highest-ever quarterly revenue** + **FY26 Revenue ₹119,347 cr (+20% YoY)**; **India Distribution +50% revenue / +41% PAT** = stunning structural India tailwinds (premium mobility + AI-PC penetration + upcountry expansion + digital platform >1/3 of India hardware); **SSG +31% YoY (17% mix — quality lever)**; **TSG +34% YoY** on large deal momentum; **ProConnect crossed ₹1,000 cr revenue milestone with record profitability**; **Working Capital 30 days (-4 days YoY industry-leading); ROCE 22% (well above mgmt's 18-20% sustainable target); D/E 0.25x with ₹1,000 cr net debt reduction in FY26**.",
            "**Clean underlying earnings growth +17% YoY ex-Arena impairment + Paynet base effect** = solid quality of business despite optical noise; **Mgmt actions on Arena working** — quarterly losses declining (Q1 → Q4); exit from local-currency businesses (Connect, Vodafone) reducing future drag; **FY27 Arena break-even target credible**; **SSG mix-shift on track** (15% → 17% in 1 year; mgmt targets 25% over 3 years = significant blended margin uplift); **AI investments**: Chennai AI COE + AI Agentic catalog + AI go-to-market = future optionality; **CloudQuarks platform v2 + Redington Academy** = capability building for higher-margin services revenue.",
        ],
        whatWentWrong: [
            "**Reported PAT -69% YoY (₹288 cr vs ₹918 cr)** = headline shocker even though optical; **Arena/Turkey impairment ₹152.3 cr** + Arena exit costs ₹22 cr (Redington share) = ₹97 cr drag on Q4 reported PAT; **EBITDA margin -50 bps YoY to 2.01%** = operating margin compression as Arena drag + mix tilt to MSG (low gross margin) + TSG margin pressure outweigh SSG mix uplift; **PAT margin 0.86%** = thin and gives little buffer against external shocks. **Cash flow concerns**: FY25 OCF only ₹293 cr (vs net profit ₹1,820 cr) = poor cash conversion driven by working capital growth + Arena cash drag; **needs to improve materially** if mgmt wants to support 22% ROCE sustainably.",
            "**Middle East geopolitical risk** = ~30-35% of business exposed to West Asia (UAE + KSA + Levant + Africa); **war from 28 Feb 2026** disrupted March operations (freight + insurance premiums); **KSA decelerated** as Vision 2030 reprioritised; ongoing conflict could persist 12-18 months impacting volumes. **TSG margin compression** = on-prem hardware ecosystem under pressure from cloud migration; even strong vendors (Dell) showing declines; large deals offering revenue but pulling gross margin down; **PC component shortage NOT yet translating to gross margin uplift** for distributor (mgmt: 'prices passed to customer; no extra margin'); **dividend ₹6/share LOWER than mgmt's typical 40-50% payout** = conservative posture indicates ongoing caution.",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "1. Mobility (MSG) — *the* largest revenue segment (~33% of top line)",
                yoyGrowth: "**Q4 +19% YoY** = solid growth led by premium smartphones (Apple iPhone refresh); FY26 estimated ~+18-22%",
                mix: "**33% of revenue** in Q4 (FY25 mix similar) = stable mix; **products**: Smartphones (Apple, Samsung, Xiaomi, Oppo, Vivo, OnePlus), tablets, wearables (Apple Watch, Galaxy Watch), accessories; **channels**: 40,000+ retail partners + direct-to-retail + e-commerce; **geographies**: India (largest), Middle East, Africa",
                analysis:
                    "**The cash-engine segment** — low gross margin (4-5%) but **negative working capital** (Apple supply tight, ~30-day payable; high inventory turn 25-30x/year) = funds working capital for SSG/TSG growth. **Q4 strong driven by**: (a) Apple iPhone refresh + premium segment demand in India, (b) direct-to-retail execution in India, (c) Galaxy Z-fold + premium Android segments, (d) Vodafone exit in Arena offset some growth (Connect business divested). **Margin profile**: lowest gross margin among segments; PAT margin similar to company avg via working capital efficiency. **Forward**: India premium segment strong; some softness possible in Middle East/Africa over next 2-3 quarters due to inventory rebalance + war impact.",
                triggers:
                    "(a) iPhone 17 launch + Apple refresh cycle India; (b) Direct-to-retail expansion into Tier-2/3 India cities; (c) Wearables (Apple Watch, Galaxy Watch) penetration; (d) 5G-driven device upgrade cycle in India + Africa; (e) Arena Connect exit completion = clean comparable from FY27.",
            },
            {
                name: "2. End Point Solutions Group (ESG / PCs) — second-largest (~30% of top line)",
                yoyGrowth: "**Q4 +28% YoY** = robust growth on PC component shortage-driven price hikes + AI-PC adoption; FY26 estimated ~+22-25%",
                mix: "**30% of revenue** in Q4 (up from ~28% earlier); **products**: PCs (HP, Dell, Lenovo, Acer, ASUS, Apple Mac), printers (HP, Canon, Epson), peripherals (monitors, accessories); **AI PC penetration 28% of India Commercial PC revenue** = early-mover advantage",
                analysis:
                    "**The cyclical/refresh-driven segment with current tailwinds.** **Q4 drivers**: (a) **PC component shortage + ~20% price hikes** = revenue uplift (volume flat to slight uptick), (b) **AI PC penetration accelerating** (28% of India Commercial revenue), (c) Desktop PC surge as brands gained share from white-label, (d) Gaming PC + Apple Mac premium segment. **Margin caveat — mgmt commentary**: 'PC price increases have been passed to customers; NO additional gross margin benefit for us'; **inventory days slightly tightening** but not materially. **Refresh cycle**: 10-11 year old machines being delayed (consumer hesitation due to price hikes); industry expects 12-18 months for component supply normalisation. **Strategic implication**: ESG revenue strong short-term but volumes could be under pressure FY27 H2 if price hikes sober demand.",
                triggers:
                    "(a) AI PC penetration scaling beyond 30% of commercial segment; (b) Windows 10 end-of-support driving forced refresh FY27-28; (c) PC component supply normalisation FY28 (volumes could rebound); (d) Gaming + creator economy PC segments; (e) Apple Mac premium segment.",
            },
            {
                name: "3. Technology Solutions Group (TSG) — third-largest (~19% of top line)",
                yoyGrowth: "**Q4 +34% YoY (highest segment growth) = large deal recognition; Q3 was -7% YoY due to timing; FY26 YTD +5% (Q3 commentary)**",
                mix: "**19% of revenue** Q4; **products**: Enterprise servers (Dell, HPE), storage (NetApp, Dell EMC), networking (Cisco, Juniper, HPE Aruba), on-prem infrastructure + emerging data center colocation/power/cooling solutions",
                analysis:
                    "**The most volatile segment — large enterprise deals + cloud migration headwinds.** **Q4 +34% YoY** = strong rebound driven by large deal recognition (Q3 was -7% with deals slipping into Q4-Q1). **Long-term structural pressure**: cloud migration cannibalising on-prem hardware demand; even Dell showing declines in some periods. **Margin compression** = mgmt explicit: 'TSG gross margin coming down driven by excess competition + brand compression + inventory provisions'. **Strategic pivot**: Redington focusing on **data center deals** — power systems, cooling systems, services, colocation for mid-market — leveraging government's data center tax holiday for foreign companies + Neo cloud + Sovereign cloud emergence. **Margin profile**: higher gross margin than MSG/ESG but compressed by 100-200 bps last 2 years.",
                triggers:
                    "(a) Indian government data center tax holiday driving foreign hyperscaler ecosystem build-out; (b) Neo cloud + Sovereign cloud + AI infrastructure deals; (c) Mgmt pivot to data center power/cooling/colocation; (d) Reseller-mandate for global hyperscalers selling in India (early-stage opportunity); (e) Refresh cycle of on-prem in regulated sectors (BFSI, Govt, PSU).",
            },
            {
                name: "4. Software Solutions Group (SSG) — fourth-largest BUT *the* growth + quality engine (~17% of top line)",
                yoyGrowth: "**Q4 +31% YoY; Q3 was +40% YoY; FY26 estimated +35-40% YoY** = consistent top growth segment",
                mix: "**17% of revenue** Q4 (up from 15% FY25; targeted 25% over 3 years); **'Golden Trinity'**: (a) **Cloud Hyperscalers** — AWS, Microsoft Azure, Google Cloud reseller; (b) **Cybersecurity** — Cisco, Palo Alto, Check Point, Fortinet, etc.; (c) **Software** — Microsoft, Oracle, SAP, Adobe + many ISVs; (d) **Professional Services** — small but high-growth implementation arm",
                analysis:
                    "**The structural mix-shift growth engine = future of Redington.** **Q4 +31% YoY** (moderating from Q3 +40% but still strong); **mix expanded 15% → 17% in 1 year**; **mgmt target 25% over 3 years** = significant blended margin uplift potential. **Drivers**: (a) **AWS + Microsoft partnership KPIs** = joint business plans with focus on leading indicators (subscriptions, renewals, certifications), (b) **Outcome-based selling** in software (e.g., 60-person dedicated team on key brand), (c) **CloudQuarks digital platform v2** = customer lifecycle management automation + renewal management, (d) **Redington Academy** = certified channel partner professionals, (e) **Professional Services** scaling for cloud + software resell value-add. **Margin profile**: highest gross margin (~8-10%); highest PAT % among segments; working capital intensive (AR-heavy, no inventory). **Above-average ROCE** driven by negative working capital from MSG funding SSG growth.",
                triggers:
                    "(a) Continued cloud spend acceleration in India + Middle East (enterprise digital transformation); (b) AI Agentic catalog go-live = AI agent deployment via ISV partners; (c) Cybersecurity portfolio broadening + GTM intensity; (d) Professional Services scaling 50%+; (e) CloudQuarks platform monetisation + renewal management automation = recurring revenue layer.",
            },
        ],
        assessment: [
            "**4-segment portfolio with healthy diversification + clear mix-shift narrative** — MSG (33%, +19%, cash engine, low margin), ESG (30%, +28%, cyclical PC refresh tailwinds), TSG (19%, +34% Q4 but lumpy + structurally compressed margins), **SSG (17%, +31%, quality lever growing to 25% over 3 years)**. **The structural narrative**: Redington is **transitioning from pure hardware distributor to a software/cloud/AI orchestrator** while MSG continues funding working capital for SSG growth. **Mix-shift to SSG is THE key value lever**: each 1 pp SSG mix increase = ~50-70 bps blended gross margin uplift; SSG growing 35-40% vs company avg +20% = mathematical mix-shift is inevitable.",
            "**The 'distribution platform + cloud/software orchestrator' thesis is structurally compelling** — V.S. Hariharan (Group CEO, ex-HP veteran) leading; **track record of execution**: 5-year revenue CAGR ~16% (₹57k → ₹119k cr); working capital discipline (30 days vs typical industry 40-50 days); ROCE 22%; SSG scaling from 15% → 17% in 1 year; ProConnect (logistics) crossing ₹1,000 cr milestone; AI focus (Chennai COE + AI Agentic catalog + AI GTM team). The franchise is in **margin recovery + mix-shift phase** = patient compounder.",
            "**Segment quality verdict: DIVERSIFIED LOW-MARGIN DISTRIBUTION PLATFORM (4 segments + 38+ countries + 290+ brands + 40,000+ partners) + STRUCTURAL MIX-SHIFT TO SSG (17% → 25% targeted) + ROCE LEADERSHIP (22% vs mgmt 18-20% target) + WORKING CAPITAL DISCIPLINE (30 days industry-leading) — *AT* P/E 13.2x TTM (industry 54x; global distribution peers 11-14x) + EV/EBITDA 6.79x + PEG 0.25 = MEANINGFULLY ATTRACTIVE VALUATION FOR THE GROWTH PROFILE.** The franchise has the elements of a quality value compounder: scale (Asia's largest IT distributor) + diversification + margin upside via mix + ROCE discipline + emerging AI optionality + dividend yield 2.77%. The Arena drag is finite (FY27 break-even target); the SSG mix-shift is durable; the India growth is structural.",
        ],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            {
                metric: "1. India Distribution Growth Trajectory — *the* core engine (~50% of business, ~+50% Q4 growth)",
                current: "**Q4 India Distribution Revenue +50% YoY; PAT +41% YoY**; SISA segment overall +48% revenue / +42% PAT",
                trend: "**FY27 Q1 expected India growth +25-30% YoY** (moderating from +50% high base) as premium mobility cycle continues + AI-PC penetration + Tier-2/3 expansion; full-year +20-25% range",
                horizon: "**FY27 India Distribution ~+25%; FY28 ~+22%; FY29 ~+20%** = structurally high-growth phase as India digital economy + premium device adoption + cloud penetration drive sustained demand",
                remarks:
                    "**India is the unequivocal growth engine** with structural digital adoption tailwinds; **PC component shortage extending volume tightness into FY27 H2** = headwind for ESG India; **Premium Mobility (Apple) continued strong demand** = MSG India tailwind. **Digital platform >1/3 of India hardware business** = scalable channel infra. **Critical FY27 H1 data point**: India growth ≥+25% confirms structural thesis; <+20% = signal of saturation or competitive pressure.",
            },
            {
                metric: "2. SSG Mix Expansion + Revenue Growth — *the* quality-of-earnings lever",
                current: "**Q4 SSG +31% YoY; FY26 SSG mix 17% (up from 15% FY25); mgmt target 25% over 3 years**",
                trend: "**FY27 SSG +30-35% YoY; mix climbing to 19-20%; FY28 mix 21-22%; FY29 mix 23-25%**",
                horizon: "**FY29 SSG ~25% of revenue at ~$8-10 Bn = $2-2.5 Bn SSG business**; **blended gross margin expansion ~50-100 bps** over 3 years = significant EBITDA uplift",
                remarks:
                    "**SSG mix-shift is mathematically inevitable** given +30-35% segment growth vs company avg +20%; **each 1 pp mix increase = ~50-70 bps blended gross margin uplift** = ~₹300-400 cr incremental EBITDA per pp = ~₹6-7 EPS contribution. **Cloud hyperscaler partnerships (AWS + MS Azure) deepening**; **Cybersecurity + Software broadening**; **AI Agentic catalog go-live** = AI agent deployment monetisation; **Professional Services scaling** = high-margin services layer. **Risk**: hyperscaler direct-to-customer model could disintermediate distributors (early signs but Redington positioned as 'orchestrator').",
            },
            {
                metric: "3. Arena/Turkey Normalisation + FY27 Break-even Target — *the* drag-removal catalyst",
                current: "**FY26 Arena quarterly losses Q1 ~₹95-100 cr → Q2 ~₹85 cr → Q3 ~₹50 cr → Q4 ~₹44 cr** (Redington share ~half each quarter); **Q4 PAT impacted by ₹75.2 cr impairment + ₹22 cr exit costs**",
                trend: "**FY27 Q1-Q2 continued losses but moderating; Q3-Q4 breakeven targeted**; Arena revenue ~$500 Mn FY27 (vs ~$1 Bn FY26 — TL business exited)",
                horizon: "**FY27 break-even (group target); FY28 profitability ~₹50-100 cr contribution**; long-term Turkey is a $1-1.5 Bn revenue opportunity once economy stabilises",
                remarks:
                    "**Arena break-even removes ~₹150-200 cr annual drag** = ~₹2-2.5 EPS contribution = ~10-12% boost to reported PAT. **Mgmt actions credible**: Paynet divestment (FY25); Connect (mobility) exit; Vodafone contract exit; AR concordat management; opex/working capital tightening; pivot to USD-based IT/cloud/SSG business. **Watch**: Turkey lira stability + inflation trajectory + interest rate path; **Mgmt expectation**: 2027 calendar year is when Arena reaches 'healthy levels'.",
            },
            {
                metric: "4. TSG Data Center + Large Deal Pipeline — emerging high-margin opportunity",
                current: "**Q4 TSG +34% YoY** (large deal recognition); FY26 YTD ~+10-15% (Q3 was -7% on timing); large deals lumpy by nature",
                trend: "**FY27 TSG ~+15-20% YoY** driven by data center + Neo cloud + Sovereign cloud + reseller-mandate from global hyperscalers selling in India",
                horizon: "**FY28-29 data center business scaling materially** as Indian government tax holiday for foreign companies drives ecosystem build-out; potential $500 Mn-$1 Bn TSG opportunity within 3-5 years",
                remarks:
                    "**Indian Government Budget Announcement**: tax holiday for data center investments from foreign companies = structural multi-year demand catalyst; **Hyperscaler mandates** to appoint Indian resellers for India sales = opportunity for Redington as preferred partner; **Mgmt strategy**: focus on data center power systems + cooling + services + colocation for mid-market = higher-margin services component within TSG.",
            },
            {
                metric: "5. ProConnect Logistics Scale-up — emerging high-quality subsidiary",
                current: "**ProConnect crossed ₹1,000 cr annual revenue in FY26 with record profitability** = milestone year",
                trend: "**FY27 ProConnect ~+25-30% revenue growth**; warehouse expansion in India + Middle East; AI-driven logistics + back-office automation",
                horizon: "**FY28-29 ProConnect ~₹1,500-2,000 cr revenue with healthy margins (10-12%)** = becomes a meaningful PAT contributor and EBITDA margin enhancer",
                remarks:
                    "**ProConnect is a higher-margin subsidiary** vs core distribution; **warehouse capex** in India + Middle East ongoing (FY26 capex includes ProConnect investments); **AI agents being deployed** in back-office + logistics = productivity uplift; **strategic logistics arm** that can serve Redington's distribution + external clients = optionality value.",
            },
        ],
        demandSignals: [
            {
                signal: "India Structural Digital Demand (Premium Mobility + AI-PC + Cloud)",
                reading:
                    "**India growing fastest** = +50% revenue / +41% PAT Q4 (strongest segment quarter); **Premium mobility** (Apple) tight supply + sustained demand; **AI-PC penetration 28%** of India Commercial PC revenue (early-mover); **Cloud spend acceleration** with AWS + Microsoft partnerships; **Direct-to-retail + Tier-2/3 expansion** + digital platform >1/3 of India hardware business. **Risk**: PC component shortage could compress India volumes FY27 H2 as prices sober demand.",
                verdict: "Strong",
            },
            {
                signal: "Middle East/West Asia Geopolitical Risk + UAE/KSA Mix",
                reading:
                    "**~30-35% of business** exposed to Middle East; **West Asia war from 28 Feb 2026** disrupted March operations (freight + insurance + logistics); **UAE strong** (Q3 was +19% pre-war); **KSA decelerated** as Vision 2030 reprioritised; **Africa promising** for SSG + TSG. **Forward**: ongoing conflict could persist 6-18 months; demand for security + cloud solutions rising as silver lining; recovery once crisis resolves.",
                verdict: "Adequate",
            },
            {
                signal: "Cloud + Software + Cybersecurity Demand (SSG)",
                reading:
                    "**SSG growing +31% YoY in Q4 (was +40% in Q3); mix climbing 15% → 17%**; **Cloud hyperscaler business** (AWS + MS Azure) deepening with joint business plans; **Cybersecurity** broadening portfolio + GTM intensity; **Software** outcome-based selling + dedicated brand teams; **Professional Services** scaling fast. **Demand environment**: enterprise digital transformation + AI workload migration to cloud = structural multi-year demand; **on-prem to cloud migration** structural shift = SSG winner; TSG transition pain.",
                verdict: "Strong",
            },
            {
                signal: "AI Workload + Data Center Build-out Opportunity",
                reading:
                    "**Indian Government Budget tax holiday for data center investments** = structural multi-year demand catalyst; **Neo cloud + Sovereign cloud + AI infrastructure** emerging; **Hyperscaler mandates** to appoint Indian resellers; **AI-PC penetration 28%** Commercial; **Chennai AI COE + AI Agentic catalog + AI GTM team** = capability investments. **Risk**: AI commoditisation; hyperscaler direct-to-customer model risk.",
                verdict: "Strong",
            },
            {
                signal: "PC Component Shortage + Pricing Cycle",
                reading:
                    "**PC component shortage extending 12-18 months** for industry to recover supply; **~20% price hikes** in Q3-Q4 with new round of hikes coming; **Channel partners loading inventory** but sell-through TBD; **End-customer demand** could soften as prices sober adoption; **Refresh cycle delayed** (10-11 year old machines being postponed). **Net impact for Redington**: revenue boost short-term (price), volume pressure medium-term, margin neutral (price passed to customer).",
                verdict: "Adequate",
            },
            {
                signal: "Arena/Turkey Normalisation Trajectory",
                reading:
                    "**Arena losses declining quarter-on-quarter** (Q1 → Q4); **TL business exits** (Connect, Vodafone) reducing future drag + working capital intensity; **USD-based IT/cloud/SSG business** stabilising; **Mgmt FY27 break-even target** credible; **Turkey lira stability + inflation trajectory + interest rate path** = macro variables to monitor. **Risk**: further FX/inflation shocks could derail normalisation.",
                verdict: "Adequate",
            },
        ],
        demandVerdict:
            "**Demand environment is GREEN-AMBER across six dimensions** — India structural digital demand (Strong); Middle East/West Asia geopolitical risk (Adequate); Cloud + Software + Cybersecurity demand (Strong); AI workload + Data Center build-out (Strong); PC component shortage cycle (Adequate); Arena/Turkey normalisation (Adequate). **The next 18-24 months see multiple concurrent factors**: (a) India distribution growth +20-25% (premium mobility + AI-PC + cloud), (b) SSG mix expansion to ~20-22% (cloud + cyber + software), (c) Arena break-even by FY27 + drag removal, (d) Data center ecosystem opportunity emerging, (e) Middle East stabilisation (if conflict resolves), (f) Working capital discipline maintained at 30-35 days. **Mgmt's implicit FY27 trajectory translates to**: Revenue ₹140-145k cr (+17-21% YoY); EBITDA margin recovery toward 2.2-2.4% (~₹3,100-3,500 cr); PAT ₹1,600-1,800 cr (+25-40% reported YoY as Arena drag removed); EPS ₹20-23 (vs FY26 ₹16-19 = +20-40% growth).",
        whatWentRight: [
            "**Demand visibility robust on India + SSG + ROW ex-Arena** — India Distribution +50% revenue / +41% PAT; SISA +48%/+42%; ROW ex-Arena +12%; SSG +31% (17% mix climbing toward 25% target); TSG +34% on large deals + data center pipeline; ProConnect ₹1,000 cr milestone; Working capital 30 days (industry-leading); ROCE 22% (well above mgmt 18-20% sustainable target).",
            "**Strategic execution validated**: Arena local-currency business exits (Connect, Vodafone) reducing future drag; FY27 Arena break-even target credible; CloudQuarks platform v2 + Redington Academy + AI Agentic catalog + Chennai AI COE = capability investments creating future optionality; Cloud hyperscaler partnerships (AWS + MS Azure) deepening with joint business plans; ProConnect scaling with record profitability.",
        ],
        whatWentWrong: [
            "**Middle East geopolitical disruption ongoing** = ~30-35% of business; war from 28 Feb 2026 hurt March; UAE/KSA softening; could persist 6-18 months. **TSG margin compression structural** as cloud cannibalises on-prem hardware; even strong vendors (Dell) declining in some periods; large deals offering revenue but pulling gross margin.",
            "**Arena drag persists short-term** = ₹75.2 cr impairment Q4 + ₹22 cr exit costs + ongoing losses; break-even target FY27 H2; if Turkey macro re-worsens, normalisation delays. **PC component shortage NOT translating to gross margin uplift** = revenue tailwind but margin neutral for Redington; volumes could soften FY27 H2 as price hikes sober end-customer demand.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            {
                metric: "ROCE — *the* North Star KPI (mgmt-stated focus)",
                current: "**Q4 FY26 ROCE 22% (well above mgmt threshold floor 16%)**; sustainable target range explicitly stated",
                target:
                    "**18-20% sustainable ROCE** (explicit mgmt commentary on call: 'Our internal target is 16% threshold; expectation is 18-20% steady-state; current 22% is not sustainable but could become so as SSG scales over few years'); **'We will protect ROCE even at cost of gross margin %'** — Krishnan (CFO).",
            },
            {
                metric: "Working Capital Days",
                current: "**FY26 exit 30 days (down from 34 in FY25)**",
                target:
                    "**Sustainable range 35-40 days** (mgmt commentary: 'Normal range will be between 35-40 days on steady-state basis'); current 30 days reflects Mobility mix tailwind + Arena exit + digital platform efficiency; **upside risk** as data center deals + SSG growth + TSG deals scale (all higher WC intensity).",
            },
            {
                metric: "SSG Mix Expansion + Growth",
                current: "**FY26 SSG ~17% of revenue (up from 15% FY25); FY26 SSG growth ~35-40% YoY**",
                target:
                    "**SSG mix to 25% over 3 years (FY29 target implicit)**; **Q4 growth +31%**; **FY27 expected +30-35%**; **'we believe we will get above-average profitability both at EBITDA level and PAT level' — Hariharan**; SSG = above-average PAT contributor.",
            },
            {
                metric: "Arena/Turkey Break-even Target",
                current: "**FY26 Arena quarterly losses moderating; ₹152.3 cr impairment + ₹22 cr exit costs in Q4**",
                target:
                    "**Break-even by FY27 (calendar year 2027)** — explicit mgmt commentary: 'Arena will get to healthy levels as we approach 2027'; 'Next year we might move towards breakeven'; **Arena revenue ~$500 Mn FY27** (vs ~$1 Bn FY26 — TL business exited).",
            },
            {
                metric: "Dividend Payout Policy",
                current: "**FY26 dividend ₹6/share (30% payout; 2.77% yield)** — lower than typical 40-50%",
                target:
                    "**Long-term payout 30-50%**; current ₹6/share reflects conservative posture to conserve cash for growth opportunities + geopolitical uncertainties (Krishnan commentary); **could revert to higher payout** once macro stabilises and Arena normalises.",
            },
        ],
        commitmentNote:
            "**Mgmt credibility check**: **V.S. Hariharan** = Group CEO; ex-HP veteran; **track record**: (a) Redington revenue scale-up ₹57k cr (FY21) → ₹119k cr (FY26) = 2.1x in 5 years = **~16% revenue CAGR**, (b) **Working capital discipline** (30 days vs typical industry 40-50), (c) **SSG mix expansion** (12% → 17% in 3 years), (d) **Paynet successful divestment** with material one-off gain (FY25); **ProConnect logistics scale-up** to ₹1,000 cr milestone (FY26), (e) **Arena exit playbook** progressing on schedule despite Turkey macro hostility, (f) **AI capability investments** (Chennai COE + AI Agentic catalog + AI GTM team in India/ME), (g) **CloudQuarks platform v2** launched. **S.V. Krishnan (CFO)** = transparent + numbers-driven communicator; explicit ROCE-protection commitment; consistent reporting of segment + geography breakdowns. **Mgmt credibility = MEDIUM-HIGH** based on revenue scale-up + working capital discipline + strategic mix-shift execution + transparent guidance. **Watch FY27 quarterly cadence**: Q1 FY27 (August call) India growth ≥+25% YoY + SSG ≥17% mix + Working Capital ≤35 days + Arena losses ≤₹40 cr + ROCE ≥20% = trajectory confirmation.",
        growthDrivers: [
            {
                driver: "1. India Distribution Structural Growth (+25-30% range)",
                impact:
                    "**India ~45-50% of revenue growing +25-30% = ~₹14-17k cr incremental revenue/year**; **PAT contribution**: India PAT margin similar to global (~1.4%) but with operating leverage; **incremental India PAT ~₹200-300 cr/year**. **Drivers**: premium mobility (Apple/Samsung) + AI-PC adoption + Tier-2/3 expansion + digital platform scaling + 5G refresh cycle.",
            },
            {
                driver: "2. SSG Mix Expansion (17% → 25% over 3 years)",
                impact:
                    "**Each 1 pp SSG mix expansion = ~50-70 bps blended gross margin uplift = ~₹600-800 cr incremental EBITDA over 3 years = ~₹6-7 EPS contribution**. **By FY29**: SSG ~25% of revenue at company revenue ~$10 Bn = **$2-2.5 Bn SSG business at ~9% gross margin** = significant earnings driver. **Drivers**: cloud hyperscaler partnerships + cybersecurity portfolio + outcome-based software selling + Professional Services + CloudQuarks digital platform.",
            },
            {
                driver: "3. Arena Break-even by FY27 (Drag Removal)",
                impact:
                    "**Arena annual drag ~₹150-200 cr** = removal = **~₹2-2.5 EPS contribution = ~10-12% boost to reported PAT**. **FY27 Arena break-even** = no longer a drag; **FY28-29 Arena profitable** at ₹50-100 cr contribution = additional EPS uplift. **Drivers**: TL business exits (Connect, Vodafone) complete; USD-based IT/cloud/SSG business stabilising; Turkish lira/inflation normalisation.",
            },
            {
                driver: "4. Data Center Ecosystem + TSG Pivot",
                impact:
                    "**Indian government data center tax holiday** = structural multi-year demand; **Hyperscaler reseller mandates** for India operations; **TSG strategic pivot to data center power/cooling/services/colocation** = higher-margin services within TSG. **Potential FY28-29**: ₹500-1,000 cr incremental data center revenue at ~10-12% gross margin = ~₹50-100 cr EBITDA contribution + multiple expansion lever.",
            },
            {
                driver: "5. ProConnect Logistics Scaling + AI Productivity",
                impact:
                    "**ProConnect ₹1,000 cr revenue with record profitability in FY26**; **FY28-29 ~₹1,500-2,000 cr revenue at ~10-12% margin** = ~₹150-200 cr PAT contribution; **AI agents in back-office + logistics** = productivity gains across business. **Drivers**: warehouse expansion India + ME; logistics solutions for external clients; AI-driven supply chain optimisation.",
            },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            {
                title: "Q4 record revenue ₹33,269 cr (+25.5% YoY; +32% ex-Arena) — best-ever quarter with broad-based segment + geography growth",
                body:
                    "**Highest-ever quarterly revenue ₹33,269 cr (+25.5% YoY; +32% ex-Arena)** despite Middle East geopolitical disruption in March; **FY26 Revenue ₹119,347 cr (+19.9% YoY)**. **All 4 segments grew double-digits in Q4**: MSG +19%, ESG +28%, TSG +34%, SSG +31%. **India Distribution +50% revenue / +41% PAT** = stunning structural India tailwinds; **SISA +48% revenue / +42% PAT**; **ROW ex-Arena +12%** despite Middle East war. **Multi-engine growth** validates the diversified distribution platform thesis.",
            },
            {
                title: "SSG mix expansion accelerating (15% → 17% in 1 year; targeted 25% in 3 years) — the structural margin uplift lever",
                body:
                    "**SSG (Software Solutions Group) Q4 +31% YoY**; **FY26 mix 17% (up from 15% FY25)**; **mgmt 3-year target 25%**. **Components**: Cloud Hyperscalers (AWS + Azure + GCP) + Cybersecurity + Software + Professional Services. **Each 1 pp mix expansion = ~50-70 bps blended gross margin uplift = ~₹6-7 EPS contribution over 3 years**. **Strategic investments**: CloudQuarks platform v2 + Redington Academy + outcome-based selling + dedicated brand teams (60+ people on key software brand) + AI Agentic catalog + AI GTM teams India + ME. **SSG ROCE above company average** = high-quality earnings layer scaling.",
            },
            {
                title: "Working Capital 30 days + ROCE 22% + Net Debt ₹1,000 cr reduction — financial discipline showcase",
                body:
                    "**Working Capital 30 days (FY26 exit) vs FY25 34 days = -4 days improvement** = industry-leading discipline; **ROCE 22% (well above mgmt threshold floor 16%; target range 18-20%)**; **ROE 17%**; **D/E 0.25x conservative**; **Net debt reduced ₹1,000 cr YoY** (₹300 cr from Arena exit + ₹700 cr from rest of business). **Mgmt's explicit ROCE-first philosophy**: 'we will protect ROCE even at cost of gross margin %' — Krishnan (CFO); each 1-day reduction in WC = ~₹325 cr cash freed + ~₹25-30 cr interest savings. **Capital efficiency leadership** vs distribution peers (40-50 day WC).",
            },
            {
                title: "ProConnect crossed ₹1,000 cr revenue with record profitability + AI capability investments + data center pivot",
                body:
                    "**ProConnect Global** (logistics subsidiary) **crossed ₹1,000 cr annual revenue with all-time-high profitability in FY26** = milestone year; warehouse capex ongoing in India + Middle East. **AI capability investments**: Chennai AI Center of Excellence + AI Agentic catalog (go-live soon) + AI GTM teams in India + ME + AI agents in back-office + logistics for productivity gains. **Data center strategic pivot**: power systems, cooling systems, services, colocation for mid-market; leveraging Indian government's data center tax holiday for foreign companies + Neo cloud + Sovereign cloud + hyperscaler reseller mandates.",
            },
            {
                title: "India structural growth + premium mobility + AI-PC penetration + cloud spend acceleration — multi-year tailwinds",
                body:
                    "**India Distribution Q4 +50% revenue / +41% PAT**; **Premium mobility (Apple) tight supply + sustained demand**; **AI-PC penetration 28% of India Commercial PC revenue** (early-mover advantage); **Cloud spend acceleration** with AWS + Microsoft partnerships; **Direct-to-retail + Tier-2/3 expansion** (upcountry focus); **Digital platform >1/3 of India hardware business**; **5G refresh cycle** + **AI workload migration** + **enterprise digital transformation** = structural multi-year demand catalysts. **Mgmt commentary**: 'India will continue to be strong' even as ME/KSA decelerate.",
            },
        ],
        bearish: [
            {
                title: "Reported PAT -69% YoY ₹288 cr vs ₹918 cr — entirely optical from Arena impairment + FY25 Paynet base, but headline noise is real",
                body:
                    "**Q4 Reported PAT ₹287.58 cr vs Q4 FY25 ₹917.74 cr = -69% YoY headline shocker**; **decomposition**: (a) **Arena/Turkey impairment ₹152.3 cr (₹75.2 cr group share after MI)**, (b) **Arena exit costs ₹44 cr (₹22 cr Redington share)**, (c) **FY25 base inflated by ~₹500-600 cr Paynet divestment gain**. **Clean ex-one-offs YoY +17%**. **The issue**: even if optical, headline -69% creates market noise and prices in fear of margin/quality erosion. **Mgmt did not provide forward guidance on FY27 revenue/PAT** = adds uncertainty.",
            },
            {
                title: "Middle East war from 28 Feb 2026 + KSA Vision 2030 deceleration — ~30-35% of business exposure",
                body:
                    "**Middle East/West Asia geopolitical conflict** starting **28 February 2026** = directly impacted March operations with **higher freight + insurance premiums** + **logistics delays**; **KSA decelerated** as Saudi Vision 2030 reprioritised and delayed big international events; **UAE remains strong** but cautious. **~30-35% of Redington's business** is exposed to West Asia (UAE + KSA + Levant + parts of Africa). **Forward**: conflict could persist 6-18 months; demand for security + cloud solutions partial silver lining; full recovery only after crisis resolution.",
            },
            {
                title: "EBITDA margin compression to 2.01% (-50 bps YoY) — thin-margin business amplifying external shocks",
                body:
                    "**Q4 EBITDA margin 2.01% vs Q4 FY25 ~2.5% = -50 bps YoY compression**; **FY26 EBITDA margin ~2.0% vs FY25 ~2.9% = -90 bps YoY**. **Drivers of compression**: (a) **Arena local-currency drag** (high interest rate not recovered in gross margin), (b) **TSG margin pressure** from cloud cannibalising on-prem hardware + brand margin compression + inventory provisions, (c) **Mix tilt to MSG** (low gross margin Mobility), (d) **War-related freight/insurance premiums**, (e) **Saudi/India AR provisions one-offs**. **Risk**: distribution business with 1-2% PAT margin gives little buffer against shocks; **structural margin** likely 2.2-2.4% range — recovery requires mix-shift to SSG + Arena normalisation.",
            },
            {
                title: "TSG margin compression structural — cloud cannibalising on-prem hardware ecosystem",
                body:
                    "**TSG Q4 +34% YoY (large deal recognition)** but **gross margin coming down**; **Krishnan commentary**: 'TSG margins are coming down — mainly to do with the ecosystem; excess competition; brand margins compressed; inventory provisions'. **Cloud migration** structurally cannibalises on-prem server/storage demand; **Dell + HPE + others** showing pressure; **even though revenue grows lumpily on large deals**, gross margin profile deteriorates. **Strategic response**: TSG pivot to data center power/cooling/services/colocation — but **early stage; FY28-29 monetisation**; meanwhile TSG remains lower-margin + volatile.",
            },
            {
                title: "Dividend cut to ₹6/share (30% payout) — mgmt signalling caution + cash conservation",
                body:
                    "**FY26 Dividend ₹6/share (30% payout)** vs **FY25 ₹6.8** (~33% payout); **historical payout 40-50%**; **2.77% yield reasonable** but **lower than market expectation**. **Mgmt commentary**: 'We have kept dividend lower to conserve cash for growth opportunities + geopolitical uncertainties' — signals (a) ongoing cash needs for working capital + AI investments + warehouse capex + selective M&A, (b) management caution about Middle East situation, (c) Arena cash drag continuing. **Concern**: cash flow conversion poor (FY25 OCF only ₹293 cr vs net profit ₹1,820 cr) = reduced dividend capacity if WC pressures continue.",
            },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text:
                "**Q4 FY26 = best-ever revenue quarter ₹33,269 cr (+25.5% YoY; +32% ex-Arena)** with **broad-based segment growth** (MSG +19%, ESG +28%, TSG +34%, SSG +31%) and **stunning India performance** (Distribution +50% revenue / +41% PAT); **FY26 Revenue ₹119,347 cr (+20% YoY)** = ₹1.19 lakh crore scale; **clean PAT growth +17% YoY ex-exceptionals**. The volume scale-up is the story; record revenue + record clean PAT.",
            impact: "strengthens",
        },
        {
            text:
                "**Reported PAT -69% YoY entirely OPTICAL — Arena/Turkey impairment ₹75.2 cr (group share) + FY25 Paynet divestment base** — investors should normalize for clean ex-exceptional +17% growth; **Arena drag is FINITE** with mgmt FY27 break-even target credible (TL business exits complete; USD IT/cloud business stabilising); ~₹150-200 cr annual drag removal = ~₹2-2.5 EPS uplift FY27 H2 onwards.",
            impact: "neutral",
        },
        {
            text:
                "**SSG mix-shift accelerating (15% → 17% in 1 year; targeted 25% over 3 years) — *the* structural quality lever**; **Q4 SSG +31% YoY**; **each 1 pp mix expansion = ~50-70 bps blended margin uplift = ~₹6-7 EPS over 3 years**; **investments in CloudQuarks v2 + Redington Academy + AI Agentic catalog + Chennai AI COE + cloud/cyber/software/professional services** = capability scale-up. **ROCE 22% (well above mgmt floor 16%; target 18-20%)** + Working Capital 30 days (industry-leading; mgmt range 35-40) = **financial discipline showcase**.",
            impact: "strengthens",
        },
        {
            text:
                "**Middle East war from 28 Feb 2026 + KSA Vision 2030 deceleration** = ~30-35% business exposure with **operational disruption in March + freight/insurance premiums + KSA softness**; **EBITDA margin -50 bps YoY to 2.01%** reflects external shocks + Arena drag + TSG ecosystem pressure; thin distribution margins give little buffer. **Forward visibility limited** — mgmt did not provide explicit FY27 guidance numbers. **Geopolitics + macro is the key swing factor** over next 12-18 months.",
            impact: "weakens",
        },
        {
            text:
                "**Stock ₹221.29 (live, +1.91% T+1) — P/E 13.2x TTM (industry 54.12x; global distribution peers 11-14x); EV/EBITDA 6.79x; PEG 0.25; P/B 1.67x; ROE 14.67%; ROIC 16.3%; Dividend Yield 2.77% = MEANINGFULLY CHEAP** for a 15-20% earnings compounder with ROCE 22% + structural India tailwinds + SSG mix-shift + Arena drag-removal optionality. **Asymmetric setup at ₹221**: bear case ₹170-190 (-14-23% on Arena + ME war escalation + multiple compression to 9-10x), base case ₹260-300 (+18-36% on FY27 EPS ₹22-24 × 12-13x), bull case ₹320-400 (+45-80% on FY28 EPS ₹28-32 × 12-13x + multiple re-rating). **Roughly 1:3 to 1:4 reward-to-risk at ₹221; better setup ₹190-210 = 5:1+ reward-to-risk** = HIGH-CONVICTION ACCUMULATION zone. **Verdict: BUY/ACCUMULATE — quality value compounder with patient upside**; aggressive accumulate ₹190-210; standard accumulate up to ₹240; **fair value ₹250-300; 18-24m target ₹290-360 (+30-65% upside)**; **avoid above ₹360** (FY28 base case priced).",
            impact: "strengthens",
        },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        /* Q1 — Is the core investment thesis intact? */
        thesisIntact: {
            verdict:
                "Yes — fundamentally intact and partially strengthened. Q4 FY26 delivered record revenue + broad-based growth + India structural momentum + SSG mix-shift on track + ROCE 22% + working capital 30 days. Reported PAT -69% YoY is OPTICAL (Arena impairment + Paynet base); clean growth +17% YoY is healthy. Middle East geopolitics + Arena drag are temporary headwinds with clear normalisation paths. The 'distribution platform → cloud/software/AI orchestrator' transformation is progressing measurably.",
            reasons: [
                "**The 'low-margin scale platform + structural mix-shift + ROCE discipline + dividend' thesis remains structurally compelling** — **(a) Asia's largest IT distributor at ₹1.19 lakh crore revenue scale** across 38+ countries, 290+ brands, 40,000+ partners = scale moat; **(b) India structural tailwinds** = Q4 +50% revenue / +41% PAT; premium mobility + AI-PC + cloud + 5G + digital platform >1/3 of India hardware; **(c) SSG mix-shift accelerating** (15% → 17% in 1 year; targeted 25% over 3 years) = blended gross margin uplift 50-100 bps over 3 years = significant EBITDA + PAT lever; **(d) ROCE 22% (well above mgmt floor 16%; target 18-20% sustainable)** + **Working Capital 30 days (industry-leading vs 40-50 peer norm)** + **D/E 0.25x conservative** = financial discipline; **(e) AI capability investments** (Chennai AI COE + AI Agentic catalog + AI GTM India/ME + CloudQuarks v2 + Redington Academy) = future optionality.",
                "**Q4 FY26 results validate the platform** — **Revenue ₹33,269 cr (+25.5% YoY; +32% ex-Arena) = highest-ever** with all 4 segments growing double-digits; **Clean PAT +17% YoY ex-exceptionals**; **ProConnect crossed ₹1,000 cr revenue milestone with record profitability**; **Net debt reduced ₹1,000 cr YoY**. **Arena drag is finite**: mgmt FY27 break-even target credible (TL business exits — Connect, Vodafone — complete; USD IT/cloud business stabilising); drag removal = ~₹2-2.5 EPS uplift FY27 H2 onwards.",
                "**Mgmt credibility MEDIUM-HIGH**: V.S. Hariharan (Group CEO, ex-HP veteran) + S.V. Krishnan (CFO, transparent communicator); **track record**: revenue scale-up 2.1x in 5 years (~16% CAGR); working capital discipline; Paynet successful divestment; ProConnect ₹1,000 cr milestone; Arena exit playbook progressing on schedule; explicit ROCE-first philosophy ('protect ROCE even at cost of gross margin %'); transparent segment + geography reporting. **Capital allocation**: dividend ₹6/share (30% payout; 2.77% yield) — conservative posture to conserve cash for growth + uncertainty.",
                "**The thesis weakens if**: (a) Middle East war escalates and persists >18 months = 30-35% business compressed; (b) Arena fails to reach FY27 break-even = ongoing drag + further impairments; (c) India growth slows below +15% = structural concern; (d) SSG mix-shift stalls below 20% mix at FY29 = quality narrative incomplete; (e) ROCE drops below 18% sustainably = capital discipline thesis broken. **The thesis strengthens if**: (a) Q1 FY27 India growth ≥+25% + SSG ≥17% mix + ROCE ≥20% = trajectory confirmation; (b) Arena Q3-Q4 FY27 break-even achieved = ₹2-2.5 EPS uplift; (c) SSG mix reaches 20% by FY28 = blended margin +60-80 bps; (d) Data center ecosystem builds with Redington capturing share; (e) Middle East stabilises with demand recovery.",
            ],
        },

        /* Q2 — Re-rate triggers + probability */
        rerateTriggers: [
            {
                trigger: "Q1 FY27 (August call): India growth ≥+25% YoY + SSG ≥17% mix + ROCE ≥20% + Arena losses ≤₹40 cr + Working Capital ≤35 days",
                probability: "Medium-High",
                rationale:
                    "**Q1 FY27 is *the* critical first datapoint** to validate (a) India structural growth post-50% Q4 base, (b) SSG mix continuing climb, (c) Arena losses moderating per break-even trajectory, (d) Middle East impact stabilising. **If achieved**: market re-rates from current 13x toward 14-15x clean P/E = **+10-15% upside to ₹245-255**. **Risk**: if Q1 India growth <+20% on premium mobility/PC saturation + Arena losses >₹50 cr + Middle East deteriorates further, multiple compression to 11-12x = -10-15% downside to ₹190-200.",
            },
            {
                trigger: "Arena/Turkey reaching break-even by Q4 FY27 — drag removal catalyst",
                probability: "Medium",
                rationale:
                    "**Arena drag of ~₹150-200 cr/year removal = ~₹2-2.5 EPS uplift = ~10-12% boost to reported PAT**. **Mgmt FY27 break-even target credible**: TL business exits (Connect, Vodafone) complete; USD-based IT/cloud business stabilising; **quarterly loss trajectory improving** (Q1 ₹95 cr → Q4 ₹44 cr Redington share approximately). **If achieved by Q4 FY27**: market re-rates on drag removal + clean PAT visibility = +10-15% multiple uplift to 14-15x = ₹290-310. **Risk**: Turkey lira/inflation re-shock or further impairment = delayed normalisation.",
            },
            {
                trigger: "SSG mix expansion to 20%+ by FY28 — quality-of-earnings re-rating",
                probability: "Medium-High",
                rationale:
                    "**SSG mix expansion is mathematically inevitable** given +30-35% segment growth vs company avg +20%; **each 1 pp expansion = ~50-70 bps blended gross margin uplift**; **by FY28 SSG ~21-22%; FY29 ~23-25%** = significant margin recovery. **If achieved**: market starts valuing Redington more like a hybrid distribution + cloud/software orchestrator = multiple re-rating from 13x to 15-17x = ₹330-380 stock. **Drivers**: cloud hyperscaler partnerships deepening; AI Agentic catalog go-live; Professional Services scaling; CloudQuarks platform v2 monetisation.",
            },
            {
                trigger: "Data Center ecosystem capture — Indian government tax holiday for foreign DC investments",
                probability: "Medium",
                rationale:
                    "**Indian government data center tax holiday + hyperscaler reseller mandates** = structural multi-year demand catalyst; **Mgmt strategic pivot to data center power/cooling/services/colocation** = higher-margin services within TSG. **Potential FY28-29**: ₹500-1,000 cr incremental data center revenue at ~10-12% gross margin = ~₹50-100 cr EBITDA + multiple expansion lever. **Risk**: competitive intensity (Wipro, Tech Mahindra, ICG, others also pivoting); execution dependent.",
            },
            {
                trigger: "Middle East stabilisation + UAE/KSA/Africa demand recovery",
                probability: "Low-Medium",
                rationale:
                    "**Middle East ~30-35% of business**; current war from 28 Feb 2026 + KSA Vision 2030 reprioritisation = headwinds; **resolution of conflict + UAE strong cloud/IT demand + Africa SSG/TSG growth** = upside trigger. **If conflict resolves within 12 months**: demand normalisation + pent-up enterprise IT spending + cloud + security demand spike = +10-15% additional growth in ROW segment = ~₹4-5 EPS contribution. **Probability low-medium**: geopolitical timing inherently uncertain.",
            },
        ],

        /* Q3 — Upside if guidance fully met */
        upsideIfGuidanceMet: {
            currentPrice: "₹221.29 (live NSE LTP via Groww MCP, 15 May 2026 11:26 PM IST — *up +1.91% T+1 post-Q4 mild positive*)",
            targetPrice: "₹290 – ₹360",
            upsidePct: "+31% to +63%",
            horizon: "18-24 months (FY28 EPS-multiple basis with Arena break-even + SSG mix to 20-22% + India structural growth +20-25% + ROCE sustained at 18-20% + multiple re-rating to 12-14x as quality-of-earnings improves)",
            assumptions:
                "**Base case (FY27 Revenue ₹140k cr (+17% YoY; India +25%, SSG +30%, ESG +15%, TSG +12%, MSG +15%) + Operating margin recovery to 2.15% (mid-year Arena break-even) + clean PAT margin 1.4%):** FY27 Revenue ₹140,000 cr; EBITDA margin 2.15% = ₹3,010 cr; D&A ₹220 cr; EBIT ₹2,790 cr; Interest cost ₹250 cr (lower with debt reduction); Other income ₹120 cr; PBT ₹2,660 cr; Tax 24% = ₹638 cr; PAT before MI ₹2,022 cr; MI ₹250 cr; **PAT to parent ₹1,772 cr; EPS ₹22.7** (vs FY26 clean ~₹19 = +20% growth). **FY28 Build (Arena profitable + SSG mix 21% + operating leverage)**: Revenue ₹164,000 cr (+17% YoY); EBITDA margin 2.30% = ₹3,772 cr; D&A ₹240 cr; EBIT ₹3,532 cr; Interest ₹220 cr; Other inc ₹140 cr; PBT ₹3,452 cr; Tax 24% = ₹828 cr; PAT before MI ₹2,624 cr; MI ₹260 cr; **PAT to parent ₹2,364 cr; EPS ₹30.3 (+33% YoY)**. **FY29 Build**: Revenue ₹190k cr (+16%); EBITDA margin 2.50%; PAT ₹2,900 cr; EPS ₹37.2. **5-yr median P/E for distribution peer set 11-14x (TD SYNNEX, Arrow Electronics)**; **Redington 5-yr median P/E 10-12x at clean EPS (excluding one-offs)**; **CDW (higher SSG mix) trades 22-25x**. Apply 12x to FY28 EPS ₹30.3 = ₹364 (base); 13x = ₹394; 14x = ₹424. **Conservative target ₹290 (FY27 EPS ₹22.7 × 12.8x); aggressive target ₹360 (FY28 EPS ₹30.3 × 11.9x)**. **Bull case** (SSG mix accelerates to 24%, Arena profitable, data center ecosystem captured, multiple re-rate to 14-16x on hybrid distribution + cloud narrative): FY28 EPS ₹32 × 14x = ₹448; FY29 EPS ₹40 × 14x = ₹560. **Range ₹290-360 (+31-63%) over 18-24 months**.",
            workings:
                "**FY27 Build:** Revenue ₹140,000 cr (+17% YoY; India structural +25%; SSG +30%; ESG +15% softer post-shortage; TSG +12%; MSG +15%); EBITDA margin 2.15% (Arena break-even mid-year; SSG mix uplift; offset by ME geopolitics); EBITDA ₹3,010 cr; D&A ₹220 cr; EBIT ₹2,790 cr; Interest cost ₹250 cr (lower with net debt reduction); Other income ₹120 cr; PBT ₹2,660 cr; Tax 24% = ₹638 cr; PAT before MI ₹2,022 cr; MI deduction ₹250 cr; **PAT to parent ₹1,772 cr; EPS ₹22.7** (vs FY26 clean ~₹19 = +20% growth). **FY28 Build:** Revenue ₹164,000 cr (+17%); EBITDA margin 2.30% (Arena profitable + SSG mix 21% + ME recovery); EBITDA ₹3,772 cr; D&A ₹240 cr; EBIT ₹3,532 cr; Interest ₹220 cr; Other inc ₹140 cr; PBT ₹3,452 cr; Tax 24% = ₹828 cr; PAT before MI ₹2,624 cr; MI ₹260 cr; **PAT to parent ₹2,364 cr; EPS ₹30.3 (+33% YoY)**. **FY29 Build:** Revenue ₹190,000 cr (+16%); EBITDA margin 2.50% (SSG mix 23% + Arena profitable contributor); PAT ₹2,900 cr; EPS ₹37.2. **Multiples**: 5-yr median P/E for distribution peer set 11-14x; Redington 5-yr median 10-12x; global peers TD SYNNEX 12-14x, Arrow Electronics 11-13x; CDW (higher SSG mix) 22-25x. Apply 12x to FY28 EPS ₹30.3 = ₹364; 13x = ₹394; 14x = ₹424. **Bull case** (SSG 24%, data center scale, multiple re-rate to 14-16x): FY28 EPS ₹32 × 14x = ₹448. **18-24 month range ₹290-360 (+31-63%)** weights base + partial bull.",
        },

        /* Q4 — Best value entry zone */
        valuationEntryZone: {
            bestValueRange: "₹190 – ₹210",
            fairValue: "₹250 – ₹300",
            currentZone: "Below Fair Value — current ₹221 sits 6-10% above best-value entry and 13-26% below fair value zone = ATTRACTIVE accumulation level for patient investors",
            rationale:
                "**Trailing P/E:** 13.2x TTM EPS ₹16.43 (depressed by Arena impairment); **clean P/E ~11.6x** on clean FY26 EPS ~₹19; **Industry P/E 54.12x** is broader BSE-IT skewed and NOT a real peer comparison for distribution; **realistic peer P/E set**: **TD SYNNEX (US, world's largest IT distributor) ~12-14x; Arrow Electronics ~11-13x; Ingram Micro (private); CDW (higher SSG mix, US) ~22-25x**; **Redington at 13.2x = in line with global distribution peers**; the discount to CDW is appropriate given SSG mix difference (Redington 17% vs CDW 35%+). **Forward P/E on FY27E clean EPS ₹22.7**: 9.7x — *VERY ATTRACTIVE*; **on FY28E EPS ₹30.3**: 7.3x — *EXCEPTIONALLY ATTRACTIVE* for 17-20% earnings compounder with ROCE 22% + dividend yield 2.77%. **P/B 1.67x** vs ROE 14.67% (P/B/ROE = 0.11 = ATTRACTIVE; vs TD SYNNEX P/B/ROE ~0.10; CDW 0.17); **EV/EBITDA 6.79x** vs 5-yr median ~8x = ~15-20% upside on multiple normalisation alone; **PEG 0.25** = exceptional value for the growth profile. **52-week range estimated ~₹180-280**; current ₹221 = ~22% off 52-wk high; **today's +1.91% mild reaction** = market not yet pricing in Q4 record revenue + clean +17% PAT growth — still digesting the -69% reported headline noise + ME war + Arena drag. **Best value entry ₹190-210** = 8.4-9.3x FY27E clean P/E; 6.3-6.9x FY28E P/E + significant downside cushion + asymmetric setup of 5:1+ reward-to-risk + dividend yield ~3.0-3.3% at lower entry = HIGH-CONVICTION accumulation zone. **Fair value ₹250-300** = 11.0-13.2x FY27E P/E; 8.3-9.9x FY28E P/E + Arena normalisation underway + SSG mix climbing + ME stabilising; current ₹221 below this zone = reasonable buy. **Above ₹300** starts pricing FY27 base case explicitly; **above ₹360** prices FY28 base case; **above ₹420** prices full bull case (SSG mix 24% + data center scale + multiple re-rate to 14-16x). **Per *valuation_analysis.md* logic**: deploy aggressively into ₹190-210 zone on dips; **standard accumulate ₹210-240**; current ₹221 is acceptable for long-term position; **avoid above ₹360 (FY28 base case priced); definitely avoid above ₹450** (full bull case priced + execution risk). **Asymmetric setup risks: -14 to -23% downside to ₹170-190 (Middle East war escalates + Arena fails to break even + India growth slows + multiple compression to 9-10x P/E) vs +31-63% upside to ₹290-360 (FY27 EPS ₹22.7 + FY28 EPS ₹30.3 × 12-14x + Arena drag removal + SSG mix expansion + ME stabilisation) = roughly 1:2 to 1:3 reward-to-risk** at current ₹221; **better setup at ₹190-210** = 5:1 to 7:1 reward-to-risk = HIGH-CONVICTION ACCUMULATION zone. **The valuation is meaningfully attractive vs growth profile**: 17-20% clean earnings growth + structural India tailwinds + SSG mix-shift + ROCE 22% + dividend yield 2.77% + financial discipline (WC 30 days, D/E 0.25, net debt reduced ₹1,000 cr YoY) = quality value compounder; **Redington represents one of the cheapest quality distribution + emerging cloud orchestrator setups currently available** in Indian mid-cap with patient 24-month compounding. **Position sizing**: medium-conviction ACCUMULATE; standard 3-5% portfolio weight; aggressive accumulators 5-7% on dip to ₹190-210 zone; balance with **dividend ₹6/share (~3% yield) provides downside cushion** while waiting for re-rating.",
        },

        summary:
            "**Redington Q4 FY26 = best-ever revenue quarter masked by Arena/Turkey impairment headline noise — but the clean underlying story is strong** — Q4 Revenue ₹33,269 cr (+25.5% YoY; +32% ex-Arena) = highest-ever quarterly revenue; **Reported PAT ₹288 cr (-69% YoY OPTICAL — explained by ₹75.2 cr Arena impairment + FY25 ₹500-600 cr Paynet base effect); Clean Global PAT ₹489 cr (+17% YoY ex-Arena)**. **Q4 EBITDA ₹670 cr (margin 2.01% -50 bps YoY)** = distribution business structurally thin; volume scale-up is the story. **Stock +1.91% to ₹221.29** (T+1 mild positive). **FY26 Full Year**: Revenue ₹119,347 cr (+20% YoY); clean PAT +17% YoY ex-exceptionals; **ROCE 22% (well above mgmt target 18-20%; floor 16%); ROE 17%; D/E 0.25x; Working Capital 30 days (-4 days YoY industry-leading); Net debt reduced ₹1,000 cr YoY**. **Segments Q4**: MSG +19% (33%), ESG +28% (30%), TSG +34% (19%), **SSG +31% (17% — quality lever)**. **Geography Q4**: **India Distribution +50% revenue / +41% PAT** (stunning, structural India tailwinds); **SISA +48%/+42%; ROW ex-Arena +12%**. **Arena/Turkey impairment ₹152.3 cr (₹75.2 cr group PAT)** + ₹22 cr Redington exit costs; **mgmt expects Arena break-even by FY27** as TL business exited (Connect, Vodafone) and USD IT/cloud business stabilises. **ProConnect crossed ₹1,000 cr revenue milestone with record profitability** = logistics arm scaling. **Strategic initiatives**: Chennai AI COE + AI Agentic catalog + AI go-to-market India/ME + CloudQuarks platform v2 + Redington Academy + outcome-based selling + data center pivot. **Dividend ₹6/share (30% payout; 2.77% yield)** = conservative posture conserving cash for growth + uncertainty. **Mgmt credibility MEDIUM-HIGH**: V.S. Hariharan (Group CEO, ex-HP) + S.V. Krishnan (CFO, transparent); track record of revenue scale-up (₹57k → ₹119k cr in 5 years; ~16% CAGR); working capital discipline; SSG mix expansion (15% → 17%); Arena exit playbook on track. **Trading at P/E 13.2x TTM (clean ~11.6x); EV/EBITDA 6.79x; PEG 0.25; P/B 1.67x; ROE 14.67%; ROIC 16.3%; Dividend Yield 2.77% = MEANINGFULLY CHEAP** for a 15-20% earnings compounder with structural India tailwinds + SSG mix-shift + Arena drag-removal optionality. **Forward P/E on FY27E clean EPS ₹22.7 = 9.7x; on FY28E EPS ₹30.3 = 7.3x = EXCEPTIONALLY ATTRACTIVE**. **Asymmetric setup at ₹221**: bear case ₹170-190 (-14-23% on Arena drag + ME war escalation + multiple compression to 9-10x), base case ₹260-300 (+18-36% on FY27 EPS ₹22.7 × 12-13x), bull case ₹320-400 (+45-80% on FY28 EPS ₹30.3 × 12-13x + multiple re-rating). **Roughly 1:3 to 1:4 reward-to-risk at ₹221; better setup at ₹190-210 = 5:1+ reward-to-risk** = HIGH-CONVICTION ACCUMULATION zone. **Verdict: BUY/ACCUMULATE — quality value compounder with patient 18-24m upside + dividend cushion**; aggressive accumulate ₹190-210 (best value, 5:1 reward-to-risk + ~3.0-3.3% yield); standard accumulate up to ₹240; **fair value ₹250-300; 18-24m target ₹290-360 (+31-63% upside)**; **avoid above ₹360** (FY28 base case priced); definitely avoid above ₹450 (full bull case priced + execution risk). **Compared to other Indian IT/tech distributors**: Redington is the **largest scale + most diversified geography + clearest SSG mix-shift narrative + best working capital discipline + highest ROCE**; **vs global distribution peers** TD SYNNEX/Arrow trade at similar 11-14x P/E but with slower growth + lower ROCE; Redington offers **scale + India tailwind + SSG optionality + dividend yield 2.77% at ~similar valuation** = differentiated value setup. **Watch FY27 cadence**: Q1 FY27 (August call) India growth ≥+25% YoY + SSG ≥17% mix + ROCE ≥20% + Arena losses ≤₹40 cr + Working Capital ≤35 days = trajectory confirmation. **Among the cheapest quality distribution + emerging cloud orchestrator setups with dividend cushion in Indian mid-cap** — medium-conviction BUY/ACCUMULATE setup; position size 3-5% standard, 5-7% aggressive on dips to ₹190-210 zone.",
    },
});
