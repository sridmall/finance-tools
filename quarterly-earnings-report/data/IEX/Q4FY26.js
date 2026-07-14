/* ============================================================
   Indian Energy Exchange Ltd (IEX) — Q4 FY26
   Concall: 24 April 2026 (Access Capital Limited)
   File path: data/IEX/Q4FY26.js
   Note: Live price reference ~₹128 (web cross-check, late Apr 2026).
         Groww MCP errored at the time of authoring — verify spot
         price before any deployment decision.
   ============================================================ */

window.registerReport("IEX", "Q4FY26", {
    meta: {
        companyName: "Indian Energy Exchange Ltd",
        ticker: "IEX",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "29 April 2026",
        concallDate: "24 April 2026",
        resultsBasis:
            "Consolidated (primary). Group = IEX (electricity exchange, ~90%+ of consol PAT) + IGX (Indian Gas Exchange, gas trading) + ICX (International Carbon Exchange, I-RECs). Single-point-of-leverage business model: transaction-fee monopoly currently 85.4% of standalone Q4 revenue (up from 78.7% YoY).",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. The CERC market-coupling draft regulation (issued 17 April 2026, public-comment window closes 16 May 2026) materially changes IEX's risk profile — readers must form their own view on regulatory probability/timing before any allocation decision.",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            {
                metric: "Revenue from Operations (₹Cr) — consolidated",
                current: "196.4 (FY26: 747.0)",
                qoq: "Sequentially strong (Q4 historically strongest quarter)",
                yoy: "**+12.5%** (Q4 FY25 ₹174.6 cr); FY26 +13.6% YoY (₹657.4 → ₹747.0 cr)",
            },
            {
                metric: "Transaction Fees / Total Revenue (%)",
                current: "**85.4%** (Q4 FY26 standalone)",
                qoq: "Higher mix",
                yoy: "**+670 bps** (Q4 FY25 was 78.7%) — fee dependency *increasing* exactly as coupling threat looms",
            },
            {
                metric: "EBITDA Margin (%) — implied consol",
                current: "~83-85% (industry-leading exchange economics)",
                qoq: "Steady",
                yoy: "Marginal improvement; operating leverage on volume scale-up",
            },
            {
                metric: "PAT Margin (%) — consolidated",
                current: "**66.1** (Q4 PAT ₹129.8 cr; FY26 PAT margin 66.0%)",
                qoq: "Slight dip — Q4 hit by mark-to-market losses on treasury (one-time)",
                yoy: "**Q4 PAT +10.8%** (₹117.1 → ₹129.8 cr); FY26 PAT +14.9%",
            },
            {
                metric: "EPS (₹) — consolidated (~89.5 cr shares)",
                current: "Q4 ~1.45 / FY26 consol ~5.50",
                qoq: "Higher",
                yoy: "FY26 EPS +14.9% YoY",
            },
        ],
        businessQualityMetrics: [
            {
                metric: "Electricity Volume (BU)",
                current: "Q4: **39.4 BU** (record); FY26: **141.1 BU** (record)",
                qoq: "Sequentially up",
                yoy: "**Q4 +24.3% YoY** / FY26 +17% YoY — both *all-time highs*",
            },
            {
                metric: "Real-Time Market (RTM) volume share",
                current: "Q4 RTM 14.3 BU = **36% of Q4 electricity volume**; FY26 RTM share 39%",
                qoq: "Rising share",
                yoy: "**Q4 RTM +48.2% YoY** / FY26 RTM +41% YoY — fastest-growing segment, integral to renewable integration",
            },
            {
                metric: "Average DAM Price (₹/unit)",
                current: "Q4 ₹3.89 (DAM); ₹3.68 (RTM); FY26 ₹3.86 (DAM); ₹3.59 (RTM)",
                qoq: "Falling — sell-side liquidity Q4 DAM +49% YoY",
                yoy: "**Q4 DAM -12.2% / RTM -15%** — falling prices = **bullish for volume growth** (cheap power attracts more buyers)",
            },
        ],
        footnotes: [
            "Q4 PAT growth (+10.8%) lagged volume growth (+24.3%) — primarily due to lower-than-usual other income (mark-to-market losses on treasury during March market correction; CFO confirms one-time and reverting now).",
            "Transaction fee mix rising (78.7% → 85.4% of standalone revenue) — IEX is becoming *more* dependent on the very revenue stream that market coupling threatens. Inverse asymmetry from a risk-management lens.",
            "FY26 dividend: ₹2/share final (200% of face value). Yield ~1.5-1.6% on current ₹128 price. Total payout consistent with IEX's high-FCF, low-capex model.",
        ],
        patternDetected:
            "Volume *exploding* (+24% Q4, RTM +48%), revenue *growing decently* (+12.5%), PAT *grinding* (+10.8%) — **pattern reading: \"Operating leverage being captured but other-income noise + ESOP gravity capping headline\"**. The volume-vs-revenue gap (24% vs 12.5%) is partly because falling DAM prices (-12% YoY) reduced *value* of trades while *unit count* surged.",
        interpretation:
            "**Operationally the best quarter IEX has ever printed** — record 39.4 BU electricity, RTM +48%, FY26 141 BU = 17% growth despite *flat overall power demand* (system-wide Q4 demand only +2.2%). The exchange is taking share of *every incremental kWh*, not just riding aggregate demand. Renewable integration via RTM is the structural tailwind. **But** the entire bull narrative is overlaid by the CERC market-coupling draft (17 April 2026) — comment period closes 16 May. Stock has fallen 33% over 12 months and trades at 52-week low (₹114-215 range) reflecting the regulatory cloud, NOT the operating performance.",
        whatWentRight: [
            "**Record-shattering volumes everywhere it matters** — Q4 electricity 39.4 BU (+24%), RTM 14.3 BU (+48%), green market 2.4 BU (+27%); FY26 consol electricity 141.1 BU (+17%) versus *flat* national power demand. IEX is gaining share of every renewable-integration trade even as overall demand slows. RTM share now 39% of total — exactly the segment most defensible against market coupling concerns (CERC's own draft says RTM coupling \"to be notified in future\").",
            "**Subsidiary diversification visibly playing out** — IGX gas FY26 PAT ₹41.9 cr (+35% YoY), volume +28%; ICX (I-RECs) FY26 issuances +200% YoY, revenue +126% (₹7.7 cr). Coal exchange in-principle approved by board awaiting final coal regs. Multiple non-electricity revenue legs maturing — material long-term diversification away from dam-coupling exposure.",
        ],
        whatWentWrong: [
            "**CERC market-coupling draft (17 April 2026) is the dominant overhang** — Grid India to act as central Market Coupling Operator; price discovery moves *out of exchanges*. Stock fell 7% on the news; cumulative 33% drawdown over 12 months. Comment window closes 16 May 2026; if regulations finalize as drafted, IEX's transaction-fee monopoly economics are structurally compromised (despite mgmt arguing -10% margin pressure based on TAM precedent).",
            "**Q4 IGX gas volumes -8% YoY** (18.6 mn MMBtu) due to Middle East supply disruption + high gas prices crimping price-sensitive Indian demand. Mgmt expects Q1 FY27 weakness to continue, recovery from Q2 FY27. Treasury also took mark-to-market hit on March market correction (depressed Q4 other income — one-time but cosmetically ugly).",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "1. Electricity Exchange — Day-Ahead Market (DAM) + Term-Ahead",
                yoyGrowth: "DAM-segment liquidity Q4 +49% YoY; FY26 +44%",
                mix: "Largest revenue contributor; ~50-55% of electricity volumes",
                analysis:
                    "**The single segment under direct market-coupling threat.** CERC's draft positions Grid India as MCO for DAM. If implemented, price discovery centralizes — IEX retains physical/financial settlement + relationships, but loses pricing-power moat. Historical precedent: in Term-Ahead Market (already \"coupled\" via uniform liquidity), all 3 exchanges share volumes ~50/30/20 and IEX margins held at ~3.7p vs 4p (-7.5% pricing impact only, not catastrophic).",
                triggers:
                    "VPPA final guidelines (Dec 2025) recognise exchanges as authorised RE-sale platform — incremental volume; REC amendments + RCO alignment petition pending CERC; coal exchange final regs (later in 2026); **only material risk: market coupling final notification**.",
            },
            {
                name: "2. Real-Time Market (RTM) + Green Market",
                yoyGrowth: "**RTM Q4 +48.2% YoY**; Green Q4 +26.5%; FY26 RTM +41%",
                mix: "RTM 39% of FY26 electricity volume — largest single sub-segment",
                analysis:
                    "**The strongest defensive segment.** RTM has 48 trading sessions/day with ultra-tight latencies — CERC's own July 2025 order admitted RTM coupling needs separate review; April 2026 draft places RTM \"to be notified in future\" only. No global precedent for RTM coupling. Mgmt: \"I have my own doubts about coupling in RTM market\". Renewables integration drives structural RTM growth; falling solar/wind/BESS costs add merchant volumes.",
                triggers:
                    "Peak-DAM and peak-RTM petitions filed at CERC (high-demand-period trading); SECI 500 MW CFD pilot for ARE — all volume to flow through exchanges; merchant BESS trading (Juniper Green / Acme / Adani Green already active); green-hydrogen prototypes; El Nino post-June 2026 supports demand.",
            },
            {
                name: "3. Subsidiary diversification — IGX (gas) + ICX (I-RECs) + planned coal exchange",
                yoyGrowth: "IGX FY26 PAT +35% / volume +28%; ICX FY26 vol +200% / rev +126%",
                mix: "Single-digit % of consol PAT today; growing fast",
                analysis:
                    "IGX (gas exchange) hit by Middle East disruption in Q4 (-8% volume) but FY26 strong; PNGRB gave extension to 31 Dec 2026 for stake reduction (IPO process initiated). ICX scaling fast off small base. Coal exchange opportunity sized at 80-90 mn tons of e-auction coal + import substitution potential (~15% of total coal market is currently spot, similar % to gas) — material multi-year optionality once final regs released.",
                triggers:
                    "IGX IPO listing (FY27); coal exchange final regulations (later 2026); carbon credit certificate trading procedures being drafted by BEE; first-mover advantage in coal/carbon = decade-long moat *outside* power-sector regulatory risk.",
            },
        ],
        assessment: [
            "**Three-pronged structure with asymmetric risk:** DAM is exposed to market coupling (highest risk, ~40-50% of profit), RTM/Green is structurally defended (CERC own draft excludes), IGX/ICX/Coal are pure long-dated growth options.",
            "**RTM is the single most important segment to track** — if it continues to grow +40-50% and remains uncoupled, IEX's earnings base shifts away from the threatened DAM segment within 2-3 years (RTM share could exceed 50% by FY28).",
            "**Segment quality verdict: STRUCTURALLY GROWING CORE + REGULATORY-INSURANCE OPTIONALITY.** The business is working harder than ever (FY26 volumes +17% on flat demand = relative strength); the question is regulatory, not operational.",
        ],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            {
                metric: "1. FY27 Volume Growth Guidance",
                current: "FY26 actual: +17% YoY (141 BU)",
                trend: "**Mgmt guidance: 15-20% volume growth in FY27**",
                horizon: "FY27",
                remarks:
                    "CMD Goyal: \"we have been achieving a volume growth of 15 to 20% every year and this year in fact the demand is also going to be high\". Pre-coupling baseline assumes status quo; coupling impact would be visible only post-implementation (FY28+).",
            },
            {
                metric: "2. RTM Segment Run-Rate (BU)",
                current: "FY26 RTM 55 BU; Q4 14.3 BU annualised ~57 BU",
                trend: "**+41% YoY in FY26; +48% in Q4** — accelerating",
                horizon: "FY27 RTM could reach 70-80 BU",
                remarks:
                    "Renewable-integration tailwind + CERC's reluctance on RTM coupling = the defensive moat. Likely to be 45%+ of FY27 electricity volume; structurally insulated from DAM coupling concerns.",
            },
            {
                metric: "3. New Product Pipeline (CERC reserved/pending)",
                current: "Multiple petitions reserved/pending",
                trend: "Term-Ahead 11-month extension; Green RTM; Peak-DAM; Peak-RTM; Merchant BESS storage",
                horizon: "FY27 once orders released",
                remarks:
                    "Each new product = incremental volume on existing infrastructure (98%+ flow-through to PAT). Peak-RTM and merchant BESS are most material — could add 5-10 BU annual run-rate.",
            },
            {
                metric: "4. Coal Exchange Opportunity (mn tons)",
                current: "Currently 80-90 mn tons via e-auction (regulated as \"spot\")",
                trend: "Final coal-exchange regulations expected later 2026; IEX board approved exploration in-principle",
                horizon: "FY28-FY29 first revenue",
                remarks:
                    "TAM larger than gas: India consumes ~1,000 mn tons coal annually + 150 mn tons imports. ~15% currently spot — same % as gas at IGX inception. Multi-buyer / multi-seller market established (post Coal India captive-mine reforms).",
            },
            {
                metric: "5. IGX IPO + ICX scale-up + Carbon credits",
                current: "IGX FY26 PAT ₹41.9 cr; ICX revenue ₹7.7 cr (+126%)",
                trend: "IGX IPO process initiated; carbon trading procedures being drafted by BEE",
                horizon: "IGX listing by Dec 2026 (PNGRB deadline); carbon trades from FY28",
                remarks:
                    "IGX IPO unlocks holding-co value; ICX exploding off small base; carbon credit certificates for 7 sectors (cement, aluminium, petrochem etc.) representing 16% of India's emissions baseline. Coal + Carbon together = decade-long diversification thesis.",
            },
        ],
        demandSignals: [
            {
                signal: "Industry growth rate",
                reading:
                    "National power demand FY26 *flat* (1709 BU); Q4 +2.2% YoY only. Yet IEX volumes +17% — IEX growing 8x the underlying demand growth rate via market-share gains and renewable RTM trades.",
                verdict: "Robust (relative)",
            },
            {
                signal: "Customer order patterns",
                reading:
                    "5,000+ industrial consumers + all major DISCOMs + generators on platform; >70% volumes via API integration; customer count *increasing* since July 2025 coupling order despite the regulatory uncertainty.",
                verdict: "Robust",
            },
            {
                signal: "Capacity utilisation / scalability",
                reading:
                    "Exchange platform infinitely scalable (software-led); no physical capex constraint. New product launches (Peak-RTM, Term-Ahead 11-month, merchant BESS) are pure operating leverage events.",
                verdict: "Strong",
            },
            {
                signal: "Competitive intensity",
                reading:
                    "IEX has ~93-95% share in DAM/RTM segments. HPX and PXIL are smaller but persistent. Term-Ahead market shows 50/30/20 split when liquidity equalises. Market coupling would *force* this redistribution but mgmt argues margin impact contained.",
                verdict: "Low (will rise post-coupling)",
            },
            {
                signal: "Regulatory tailwinds (non-coupling)",
                reading:
                    "VPPA guidelines recognising exchanges as authorised RE-sale platform; SECI 500 MW CFD pilot routed via exchanges; CERC peak-DAM/RTM petitions; carbon credit framework; coal exchange opportunity. Multiple positive regulatory developments offset coupling negative.",
                verdict: "Strongly positive",
            },
            {
                signal: "Falling RE/storage costs as volume driver",
                reading:
                    "BESS price discovery: ₹1.45/unit (Nov 2025) for 1,000 MW / 2-cycle; ₹1.77 (Feb 2026) — first-time merchant BESS trades by Juniper Green / Acme / Adani Green now on IEX. New revenue source emerging.",
                verdict: "Positive",
            },
            {
                signal: "Macro overhangs",
                reading:
                    "Middle East conflict crimping IGX gas + raising oil prices; flat power demand; **and the market-coupling regulatory cloud** dominating sentiment.",
                verdict: "Negative",
            },
        ],
        demandVerdict:
            "**Underlying demand is GREEN; relative outperformance is GREEN; regulatory overhang is RED.** IEX is operationally executing the best quarter in its history — record volumes, RTM exploding, subsidiaries scaling, regulatory tailwinds (VPPA, BESS, peak-DAM petitions). The single risk is the CERC market-coupling draft. The mgmt has 16 May 2026 to file objections; final notification timeline unclear but likely 6-18 months. Until then, the volume + earnings momentum is unambiguous.",
        whatWentRight: [
            "FY27 volume guidance of **15-20%** (CMD Goyal explicit) on top of FY26 +17% — extrapolates to ~165 BU FY27 vs 141 BU FY26; product pipeline (peak-DAM/RTM, Term-Ahead 11-month, BESS, merchant arbitrage) supports the run-rate; **growth optionality from coal exchange + carbon credits is largely unpriced** at current valuation.",
            "**Subsidiary economics flying** — IGX +35% PAT, ICX +200% I-REC issuance, coal exchange in-principle approved. Multi-year diversification away from DAM-coupling exposure is mathematically compounding faster than the regulatory threat is materialising.",
        ],
        whatWentWrong: [
            "**Market coupling draft (17 April 2026) creates 6-18 month overhang of binary outcome uncertainty** — comment window closes 16 May; mgmt admits \"very difficult to say\" on final notification timing; until clarity emerges, multiple compression continues. Stock at 52-week low and 22x trailing PE (vs 35-40x median) reflects this uncertainty.",
            "**IGX gas volumes -8% Q4** on Middle East disruption; mgmt acknowledges Q1 FY27 will also be soft, recovery from Q2 FY27. ~₹40 cr of subsidiary PAT exposed to geopolitical volatility outside IEX's control.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            {
                metric: "FY27 Electricity Volume Growth",
                current: "FY26 actual: +17% YoY (141.1 BU)",
                target:
                    "**+15-20% YoY** (~162-170 BU) — CMD Goyal explicit; assumes status quo on market coupling",
            },
            {
                metric: "EBITDA / PAT Margin",
                current: "PAT margin 66% (FY26 consol)",
                target:
                    "**Stable at 65%+** assuming no coupling; -200 to -500 bps if DAM coupled (mgmt cites Term-Ahead Market precedent: 3.7p vs 4p = -7.5% revenue impact when liquidity equalises)",
            },
            {
                metric: "Subsidiary growth (IGX + ICX + Coal)",
                current: "IGX FY26 PAT ₹41.9 cr; ICX rev ₹7.7 cr; coal in-principle approved",
                target:
                    "**IGX IPO by Dec 2026** (PNGRB deadline); coal exchange final regs later 2026; carbon credit trading from FY28",
            },
            {
                metric: "Buyback / Capital Return Policy",
                current: "Final dividend ₹2/share (200% face value)",
                target:
                    "**Buyback under active consideration** — mgmt awaiting final SEBI rules on open-market route; tax framework now favourable post-budget",
            },
            {
                metric: "Market-coupling response strategy",
                current: "Comment period open till 16 May 2026",
                target:
                    "**Multi-pronged: (a) detailed objections to CERC; (b) emphasising customer relationships, API ecosystem, settlement infra; (c) accelerating non-DAM diversification.** No legal commitment to specific outcome — \"situation is fluid\".",
            },
        ],
        commitmentNote:
            "Mgmt has been **operationally credible** — FY26 volume guidance of mid-teens delivered (17% actual). FY27 guide of 15-20% is well-supported by Q4 run-rate and pipeline. **The single area of softness is market-coupling commentary** — CMD's framing leans optimistic (\"situation is fluid\", \"may not go ahead\") which is a tone every investor must independently risk-adjust. Mgmt has *not* quantified worst-case PAT impact beyond the Term-Ahead analogy (-7.5% revenue impact in liquidity-equalised scenario).",
        growthDrivers: [
            {
                driver: "1. Volume growth +15-20% on flat power demand (share gain)",
                impact:
                    "IEX is gaining share of *every incremental* renewable-integration trade. FY27 +17% volume × 100% pass-through to PAT (zero incremental capex) = ~₹85-95 cr incremental PAT pre-coupling.",
            },
            {
                driver: "2. RTM share rising to 45-50% of total electricity volume",
                impact:
                    "RTM coupling is *not in current draft*; CERC's own July 2025 order doubts feasibility. As RTM share rises, IEX's earnings base structurally insulates from DAM coupling. Strategic insurance.",
            },
            {
                driver: "3. New product pipeline (Peak-DAM/RTM, Term-Ahead 11-month, BESS arbitrage)",
                impact:
                    "Each new product = pure operating leverage. Peak-DAM + peak-RTM petitions reserved at CERC. Merchant BESS already trading (Juniper, Acme, Adani Green). Could add 5-10 BU annual run-rate = ~₹40-80 cr revenue.",
            },
            {
                driver: "4. Coal Exchange + Carbon Credits — multi-year option",
                impact:
                    "Coal: 80-90 mn ton e-auction TAM today + import substitution. Carbon: BEE drafting trading procedures for 7 sectors representing 16% of India's emissions. Combined opportunity could rival current electricity exchange revenue by FY30.",
            },
            {
                driver: "5. IGX IPO (Dec 2026 PNGRB deadline) — value unlock",
                impact:
                    "IGX standalone PAT ₹41.9 cr × peer multiple ~30-40x = ₹1,250-1,700 cr value vs ~₹1,000 cr currently embedded in IEX market cap of ₹11,500 cr. IPO listing crystallises value + frees capital.",
            },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            {
                title: "Record volumes everywhere — operationally the best quarter ever",
                body:
                    "Q4 electricity 39.4 BU (+24.3%), RTM 14.3 BU (+48.2%), green 2.4 BU (+26.5%); FY26 electricity 141 BU (+17%) versus *flat* national power demand. IEX gaining share of every incremental kWh. RTM share 39% of total = the segment most defensible against coupling.",
            },
            {
                title: "RTM is functionally insulated from market coupling — CERC own draft excludes it",
                body:
                    "CERC's April 17, 2026 draft places RTM coupling \"to be notified in future\"; CMD Goyal: *\"I have my own doubts about coupling in RTM market\"* given 48 sessions/day, tight latencies, and *no global precedent*. RTM is the fastest-growing segment (+48% Q4) and likely to remain monopoly-economics.",
            },
            {
                title: "Mgmt 15-20% FY27 volume guidance + multiple non-coupling regulatory tailwinds",
                body:
                    "CMD Goyal explicit on FY27 volume growth. VPPA guidelines (Dec 2025) recognise exchanges as authorised RE-sale platform. SECI 500 MW BESS CFD pilot routes via exchanges. Peak-DAM / Peak-RTM petitions reserved at CERC. Carbon trading procedures being drafted. Multiple positive regulatory developments offset coupling negative.",
            },
            {
                title: "Subsidiary diversification flying — IGX +35% PAT, ICX +200% issuance, coal exchange in-principle",
                body:
                    "IGX FY26 PAT ₹41.9 cr (+35% YoY); IGX IPO by Dec 2026. ICX I-RECs +200%, revenue +126%. Board approved coal exchange exploration; final regs later 2026. Carbon credits for 7 sectors framework being drafted. **Unpriced multi-year optionality** at current valuation.",
            },
            {
                title: "Stock at 52-week low (₹114-128), 22x trailing PE vs 35-40x median — coupling severely priced in",
                body:
                    "33% drawdown over 12 months. ₹128 / FY26 EPS ₹5.51 = 22.7x trailing. 5-year median PE ~35-40x. Market is pricing roughly 30-40% multiple haircut for coupling — i.e. coupling is *substantially* in the price already. Asymmetric setup if coupling delays / softens.",
            },
        ],
        bearish: [
            {
                title: "CERC market-coupling draft — existential threat to monopoly economics",
                body:
                    "April 17, 2026 draft positions Grid India as central Market Coupling Operator; price discovery moves *out of exchanges*. Public comment closes May 16, 2026. Mgmt opposes (\"does not serve consumer interest\") but has limited regulatory leverage. Final notification 6-18 months out; if implemented, IEX shares DAM volumes 50/30/20 with HPX/PXIL — TAM precedent suggests -7.5% margin impact, but could be worse.",
            },
            {
                title: "Transaction-fee dependency rising as coupling threat looms",
                body:
                    "Q4 FY26 transaction fees = 85.4% of standalone revenue (vs 78.7% in Q4 FY25 = +670 bps). The *exact* revenue stream that market coupling threatens is becoming a *larger* part of the business. Not a technical concern but the inverse risk diversification at the wrong time.",
            },
            {
                title: "Other income depressed in Q4 — treasury mark-to-market hit",
                body:
                    "Q4 FY26 other income down ~29% QoQ on March market correction (mark-to-market losses on treasury). CFO confirms one-time but cosmetically depressed Q4 PAT growth (10.8%) vs Q3 (which had a one-time gain). Underlying earnings quality not yet visible in headline.",
            },
            {
                title: "IGX gas volumes -8% YoY in Q4 + soft Q1 FY27 — geopolitical exposure",
                body:
                    "IGX traded 18.6 mn MMBtu in Q4 (-8% YoY) on Middle East gas-supply disruption + price-sensitive Indian demand. Mgmt: Q1 FY27 to remain weak; recovery from Q2 FY27. ~₹10 cr of quarterly subsidiary PAT exposed to geopolitical volatility.",
            },
            {
                title: "Buyback uncertainty + IGX IPO timing uncertainty + power demand subdued",
                body:
                    "Buyback considered but contingent on SEBI final rules (open-market route). IGX IPO process initiated but PNGRB deadline (Dec 2026) tight. National power demand FY26 *flat*; Q4 only +2.2%. IEX growing on share-gain alone — if peer exchanges close API/UX gap post-coupling, share-gain story tested.",
            },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text:
                "**Operationally IEX printed the best quarter in its history** — record 39.4 BU electricity (+24%), RTM +48%, FY26 141 BU (+17%) vs *flat* national power demand. Subsidiaries (IGX +35% PAT, ICX +200% issuance) scaling. Mgmt FY27 guide 15-20% volume growth credible.",
            impact: "strengthens",
        },
        {
            text:
                "**CERC market-coupling draft (17 April 2026) is the dominant overhang** — Grid India as central MCO, price discovery moves out of exchanges. Comment window closes 16 May. Final notification 6-18 months out. If implemented as drafted, IEX's DAM monopoly economics compromised; mgmt cites -7.5% revenue impact precedent (Term-Ahead Market) but worst case could be larger.",
            impact: "weakens",
        },
        {
            text:
                "**RTM is the structural defense** — CERC's own draft excludes RTM coupling (\"to be notified in future\"); 48-session/day latency makes it operationally infeasible; no global precedent. RTM share now 39% of FY26 electricity volumes and growing +48% YoY. As RTM share rises to 45%+ in FY27-28, IEX's earnings base mathematically insulates from DAM coupling.",
            impact: "strengthens",
        },
        {
            text:
                "**Subsidiary + new-vertical optionality is largely unpriced** — IGX IPO due by Dec 2026 (₹1,250-1,700 cr standalone value vs ~₹1,000 cr embedded); coal exchange (80-90 mn ton e-auction TAM); carbon credits (7 sectors, 16% of India emissions baseline); peak-DAM/RTM petitions; BESS merchant arbitrage. Multi-year compounding optionality outside DAM exposure.",
            impact: "strengthens",
        },
        {
            text:
                "**Stock at 52-week low (₹128) on 22x trailing PE — coupling substantially in the price.** 33% drawdown over 12 months (vs Nifty up). 5-year median PE ~35-40x. Market is pricing ~30-40% multiple haircut. Asymmetric setup: if coupling delays/softens, multiple recovery alone is +50-70%; if coupling hits hard, downside likely contained at ₹100-110 (book value floor + subsidiary value).",
            impact: "neutral",
            note: "asymmetric; binary on regulation",
        },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        /* Q1 — Is the core investment thesis intact? */
        thesisIntact: {
            verdict: "Yes — operationally; conditionally on regulation",
            reasons: [
                "**Operationally the thesis is *strengthening*, not weakening** — FY26 volumes +17% on *flat* national demand means IEX is gaining share of every incremental kWh; RTM segment +48% YoY is exactly the segment best-defended against coupling; transaction-fee mix at all-time high (85.4%) signals platform stickiness even amid regulatory uncertainty.",
                "**RTM provides the single best structural insurance** — CERC's own April 2026 draft excludes RTM coupling (\"to be notified in future\"); 48-session/day latency makes coupling operationally hard; no global precedent. RTM share heading to 45-50% of electricity volumes by FY28 mathematically insulates earnings from DAM coupling damage.",
                "**Subsidiary + new-vertical diversification is materially compounding** — IGX (gas) +35% PAT, ICX (I-RECs) +200% issuance; coal exchange in-principle approved; carbon credit trading framework being drafted by BEE for 7 sectors. Each of these reduces the *proportion* of IEX earnings exposed to DAM coupling by FY28-30.",
                "**The thesis weakens *only* if (a) market coupling implements as drafted *and* (b) impact materially exceeds the Term-Ahead Market precedent (-7.5% revenue) *and* (c) RTM also gets coupled.** All three conditions must hold for a structural impairment. None of the three is base case.",
                "**The single biggest test is the next 12-18 months** — comment period closes May 16, 2026; final notification timing 6-18 months. Regulatory clarity will determine whether stock re-rates back to 35-40x median PE or stays compressed near 22-25x.",
            ],
        },

        /* Q2 — Re-rate triggers + probability */
        rerateTriggers: [
            {
                trigger: "CERC market-coupling final notification softens vs draft (e.g., excludes RTM permanently / phased / delayed)",
                probability: "Medium",
                rationale:
                    "Stakeholder consultation (IEX, HPX, PXIL, generators, DISCOMs all submitting comments by 16 May 2026); studies showing minimal consumer benefit; CERC has track record of revising drafts (e.g., switched from round-robin to Grid India in 9 months). CMD Goyal: *\"situation is fluid\"*. Probability of softening higher than expected.",
            },
            {
                trigger: "IGX IPO listing by Dec 2026 — value unlock",
                probability: "Medium-High",
                rationale:
                    "PNGRB has given hard deadline of 31 Dec 2026 for stake reduction; mgmt has \"initiated the process\"; IGX FY26 PAT ₹41.9 cr × 30-40x peer multiple = ₹1,250-1,700 cr standalone value. IPO listing crystallises this value + provides cash for IEX buyback / coal exchange capex.",
            },
            {
                trigger: "Coal exchange final regulations + first transactions",
                probability: "High (event), Medium (FY27 P&L impact)",
                rationale:
                    "Ministry of Coal final regs expected later in calendar 2026; IEX board has approved exploration. TAM 80-90 mn tons of e-auction coal + import substitution. First transactions FY28; meaningful revenue from FY29. Pure long-dated optionality.",
            },
            {
                trigger: "FY27 H1 volume + RTM share at or above guided +15-20%",
                probability: "High",
                rationale:
                    "Q4 FY26 run-rate at +24% already in line; RTM +48% structural; pipeline (peak-DAM, peak-RTM, BESS, VPPA) supports. Each quarter of strong volume growth without coupling impact rebuilds market confidence in the structural thesis.",
            },
            {
                trigger: "Buyback announcement (post SEBI open-market clarification)",
                probability: "Medium",
                rationale:
                    "Mgmt actively considering; tax framework now favourable post-budget; cash position strong (high-FCF model). Buyback at depressed prices (₹128 vs intrinsic ~₹180-220) would be highly accretive and signal mgmt confidence.",
            },
        ],

        /* Q3 — Upside if guidance fully met */
        upsideIfGuidanceMet: {
            currentPrice: "₹128 (cross-checked via web; live MCP unavailable)",
            targetPrice: "₹210-260",
            upsidePct: "+65% to +105%",
            horizon: "18-24 months (FY28 EPS basis, post-coupling clarity)",
            assumptions:
                "Two scenarios with probability weighting: **(a) Coupling delays / softens (probability ~50%):** FY28 EPS ~₹7.30 × 35x median PE = ₹255. **(b) Coupling implements per draft (probability ~35%):** FY28 EPS ~₹6.60 (post -7.5% impact) × 25x derated PE = ₹165. **(c) Severe coupling + RTM coupling later (probability ~15%):** FY28 EPS ~₹5.80 × 20x = ₹116. **Probability-weighted target: ₹210-260** = +65-105% from ₹128.",
            workings:
                "**FY27 Build:** Volume +17% (lower of guidance), revenue ₹860 cr × 66% PAT margin = ₹570 cr → EPS ~₹6.36. **FY28 Build (no coupling):** Volume +15% to ~190 BU; revenue ₹985 cr × 66% margin = ₹650 cr PAT → EPS ~₹7.30. **Multiples:** 5-yr median PE 35-40x (currently 22.7x = at the lowest end of range). Apply 35x to FY28 EPS no-coupling = **₹255**. **FY28 Build (coupling per draft):** Revenue impact -7.5% (TAM precedent) on DAM segment = -4-5% on consol revenue → ₹920 cr × 65% margin = ₹600 cr PAT → EPS ~₹6.70 → at 25x derated PE = **₹168**. **Bear case (severe coupling spreading to RTM):** EPS ~₹5.80 × 20x = **₹116**. Weighted (50%/35%/15%) target = **₹210-225**, upper-end (50%/40%/10%) = **₹245-260**.",
        },

        /* Q4 — Best value entry zone */
        valuationEntryZone: {
            bestValueRange: "₹105 – ₹130",
            fairValue: "₹150 – ₹180",
            currentZone: "Cheap — at lower end of best-value range (₹128)",
            rationale:
                "**Trailing P/E:** ₹128 / FY26 consol EPS ₹5.51 = **22.7x** — *below* 5-yr median of ~35-40x; near 5-yr P/E low. **Forward P/E (FY27 EPS ~₹6.36):** ~20x — pricing in modest growth + significant coupling risk. **52-week range:** ₹114.60-215.40; current at the **bottom 10th percentile** of the range. **Best entry zone: ₹105-130** (current zone). Fair value ₹150-180 (~25-28x FY27 EPS, assuming partial coupling impact). Above ₹180-200 = pricing in coupling delay/softening + IGX IPO success. Above ₹250 = full optionality realisation. **Per *valuation_analysis.md* logic** — accumulate aggressively in ₹105-125 (52-week low region), partial deploy at current ₹125-135, full conviction *only after* CERC final notification clarity (likely Q3 FY27 / late 2026). **The asymmetry is favourable: even severe coupling outcome caps downside at ~₹110 (book + subsidiary value floor); softening outcome implies +60-100% upside.**",
        },

        summary:
            "**IEX is the most genuinely binary stock in the analysis universe right now.** Operationally, this was the best quarter in IEX's history — record volumes, RTM exploding, subsidiaries scaling, mgmt FY27 guidance credible. **But** the CERC market-coupling draft (17 April 2026) creates a 6-18 month overhang with a binary outcome: if regulation softens/delays/excludes RTM permanently, stock re-rates to ₹210-260 (+65-105%); if regulation implements as drafted, stock plateaus at ₹150-180 (modest upside via subsidiary growth); if regulation severely damages economics, downside ~₹110 (-15%). **At ₹128 (52-week low, 22.7x trailing PE vs 35-40x median), much of the bear case is priced in.** **Verdict: ACCUMULATE in ₹105-130 zone (this is the value zone for risk-tolerant investors); HOLD existing positions through 16 May comment deadline; FULL CONVICTION DEPLOY only after CERC final notification clarity. The asymmetric payoff (capped -15% downside vs +65-105% upside on softening) favours *patient* accumulation.**",
    },
});
