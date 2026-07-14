/* ============================================================
   KPIT Technologies Ltd (KPITTECH) — Q4 FY26 / Full Year FY26
   Results announced: 6 May 2026; Concall / Investor Meet: 7 May 2026
   File path: data/KPITTECH/Q4FY26.js
   Live spot @ authoring: ₹748.60 NSE (6 May 2026, 10:28 PM IST)
   Day move: **-3.09% (-₹23.90)** — NEGATIVE reaction T+0 post-results on weak Q4 PAT (-33% YoY) + soft CC growth (+1.8% QoQ) + cautious FY27 guidance
   1Y return: **-40.47%**; 6M: **-35.15%** = significant de-rating already absorbed (auto sector global headwinds)
   Source: Groww MCP get_ltp + fetch_stocks_fundamental_data
   ============================================================ */

window.registerReport("KPITTECH", "Q4FY26", {
    meta: {
        companyName: "KPIT Technologies Ltd",
        ticker: "KPITTECH",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "6 May 2026 (Board approval + Q4 results)",
        concallDate: "7 May 2026 (Post-Earnings Investor Meet, 16:30 IST) — Kishor Patil (Co-Founder, CEO & MD), Sachin Tikekar (President & Joint MD), Anup Sable (Whole-time Director & COO), Chinmay Pandit (Whole-time Director & Head Americas), Priyamvada Hardikar (CFO)",
        resultsBasis:
            "Consolidated. **Pure-play automotive Engineering, Research & Development (ER&D) specialist — among India's leading mobility software companies focused on Connected, Autonomous, Shared & Electric (CASE) vehicle technologies**; ~$760 Mn revenue scale; founded 1990; demerged from KPIT Cummins April 2019 to become focused mobility company; **promoter Kishor Patil + co-founders**. **Differentiation drivers**: (1) **Deep automotive ER&D specialisation = pure-play vs horizontal IT** — focused exclusively on auto/mobility software (vs TCS/Infosys broad-spectrum); deep relationships with **all top 25 global passenger vehicle OEMs + commercial vehicle/off-highway majors** (Mercedes-Benz, BMW, Audi, VW, Stellantis, Ford, GM, Honda, Toyota, John Deere, CNHi, Caterpillar etc.); 100+ active customers; (2) **Strategic positioning in CASE megatrend**: Connected Vehicles + Autonomous Driving + Software Defined Vehicles (SDV) + EV powertrain + Cybersecurity = **highest-growth segments of automotive ER&D**; **$300+ Bn global automotive software TAM by 2030** vs current $40-50 Bn; (3) **23 consecutive quarters of revenue + EBITDA growth** = remarkable operational discipline despite global auto sector headwinds = quality of execution; (4) **Products & Solutions transition** — moving from time-and-material to fixed-price + IP-led monetization; **Fixed-price revenue mix 66% (up from 59% Q3)**; **Beacon (Mobility Intelligence Product) deployed across multiple global OEM platforms**; CodeInsight, FlightFlex.AI-style products = margin-expansion vector; (5) **Strategic acquisitions to deepen moat**: **Cymotive Technologies (Israeli auto cybersecurity specialist) acquisition approved $60-120M total** (Apr/May 2026 announcement); end-to-end vehicle lifecycle cybersecurity (threat modelling, intrusion detection, regulatory compliance for UNECE WP.29 etc.); 100% by mid-2029; complements existing AI + product portfolio = **important capability gap closed**; (6) **Strong financial discipline**: D/E 0.16 (essentially debt-free); ROE 23.68%; ROA 11.33%; DSO 47 days = healthy WC management. **Right earnings frameworks for ER&D specialist in cyclical auto sector**: Constant Currency QoQ Growth + USD Revenue + EBITDA Margin (vs structural 21-22%) + Order Book/Deal Wins TCV + Vertical Mix (Passenger/Commercial/Off-Highway) + OEM Spending Cycle + Products & Solutions Mix + Talent Metrics — *not* simple TTM P/E in isolation. **Critical caveat**: Stock has corrected **-40% in 1 year (-35% in 6 months)** = significant de-rating already absorbed. **TTM P/E 29.43x vs industry P/E 19.65x = 50% PREMIUM to broader IT** but historically traded at 50-80x = currently at lower end of historical band; **forward FY27 P/E ~22-24x; FY28 ~18-20x** = approaching reasonable, but auto sector cyclicality + FY27 guidance caution suggest **CONTRARIAN ACCUMULATION setup** — value emerging post-correction but full bottom not yet confirmed.",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. Always conduct independent research and consult a SEBI-registered investment advisor before making investment decisions.",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            { metric: "Revenue (₹Cr)", current: "1,711", qoq: "+5.8% (vs ₹1,617 cr Q3)", yoy: "**+12.0% (vs ₹1,528 cr Q4 FY25)** — INR growth healthy; **CC QoQ +1.8% only = sequentially weak**" },
            { metric: "USD Revenue ($Mn)", current: "$185 Mn", qoq: "+~5% QoQ", yoy: "+~9% YoY USD" },
            { metric: "EBITDA Margin (%)", current: "20.6%", qoq: "-0 to -20 bps", yoy: "-100-150 bps (vs ~22% Q4 FY25) — **margin compression visible**" },
            { metric: "EBIT Margin (%)", current: "14.04%", qoq: "**-44 bps** (vs 14.48% Q3)", yoy: "-200+ bps — **operating leverage reverse**" },
            { metric: "PAT (₹Cr)", current: "163", qoq: "**+22%** (vs ₹133 cr Q3)", yoy: "**-33% (vs ₹245 cr Q4 FY25)** — significant decline" },
            { metric: "PAT Margin (%)", current: "9.5%", qoq: "+~150 bps QoQ", yoy: "**-650 bps** (vs ~16% Q4 FY25)" },
            { metric: "EPS (₹) — TTM", current: "**₹26.23**", qoq: "—", yoy: "FY26 EPS ~₹23 (down from FY25 ~₹31)" },
        ],
        // Sector-specific business-quality metrics for ER&D specialist
        businessQualityMetrics: [
            { metric: "New Engagements TCV (Q4)", current: "**$349 Mn**", qoq: "Strong sequential ramp", yoy: "Healthy book-building incl. 2 large strategic deals (incl. $50M+ off-highway partnership)" },
            { metric: "Fixed-Price Revenue Mix", current: "**66%**", qoq: "+700 bps QoQ (from 59% Q3)", yoy: "Major shift = **margin-expansion vector via Products & Solutions**" },
            { metric: "DSO (days)", current: "**47 days**", qoq: "Stable / improving", yoy: "Healthy WC management; collections discipline maintained" },
        ],
        footnotes: [
            "Q4 FY26 Forex loss ₹31.2 cr — non-operating drag affecting PAT.",
            "Full Year FY26: Revenue ₹6,455 cr (+10.5% YoY) | PAT ₹637.34 cr (-24% YoY) | EBITDA Margin 20.8% (-120 bps vs FY25 ~22%) — **margin compression theme reflects investments in AI/Products & wage hikes/labor code impact**.",
            "Standalone FY26: Revenue ₹2,608 cr | PAT ₹546 cr.",
            "**23 consecutive quarters of revenue + EBITDA growth** — remarkable operational consistency despite global auto sector cyclicality.",
            "Final dividend ₹5.25/share (52.5% of FV ₹10) — modest payout vs scale.",
            "Q3 FY26 PAT included one-time ₹46.9 cr post-tax labor code impact — adjusted PAT ₹180 cr; **Q4 PAT ₹163 cr clean = sequential improvement on ex-one-off basis**.",
            "Statutory Auditors issued unmodified opinion on FY26 financial statements.",
        ],
        patternDetected:
            "**'Sequential stabilisation, but FY26 trough year for KPIT — auto cyclicality + investment phase compressing PAT'**: Revenue growth INR +12% YoY healthy on surface, BUT (a) **CC QoQ growth +1.8% only** = essentially flat sequential = pace decelerated meaningfully from historic ~3-4% CC QoQ; (b) **EBITDA margin 20.6% vs 22%+ historical** = -150 bps compression visible; (c) **Q4 PAT -33% YoY** despite revenue +12% = double whammy of margin compression + forex loss + tax + investment costs; (d) **FY26 PAT ₹637 cr (-24% YoY)** vs FY25 ₹843 cr = **earnings trough year**. BUT signals of bottoming: (i) **Q4 PAT +22% QoQ** vs Q3 — sequential PAT recovery; (ii) **Q4 new engagements $349 Mn TCV** — strong deal momentum incl. 2 large strategic; (iii) **Fixed-price mix 66% (up from 59%)** = margin lever building; (iv) **23 consecutive quarters of growth** = no operational disruption despite auto sector headwinds. **Read = FY26 trough; FY27 modest recovery on margin guidance 20.5-21.2% + revenue growth pickup; bigger story plays out FY28 onwards as auto SDV adoption accelerates + Cymotive integrates + Products & Solutions monetization scales**.",
        interpretation:
            "Q4 is a **mixed quarter that crystallises the trough thesis on KPIT**. Revenue growth +12% YoY in INR is **flattering on surface** because CC QoQ growth was only +1.8% — essentially flat sequential after correcting for currency tailwind. EBITDA margin 20.6% vs 22%+ historical reflects (a) wage hikes + Indian labor code impact, (b) heavy investments in AI capabilities + Products & Solutions, (c) competency development for next-gen tech (SDV, autonomous, cybersecurity), (d) new market development costs (commercial vehicles US/India/China). PAT -33% YoY captures all of these PLUS ₹31 cr forex loss + reverse operating leverage. **The story is NOT about Q4 numbers — it is about (i) bottoming dynamics (Q4 PAT +22% QoQ = sequential recovery), (ii) order book momentum ($349 Mn TCV with 2 large deals = best in last several quarters), (iii) Cymotive cybersecurity acquisition expanding moat into new high-margin domain, (iv) FY27 guidance signaling H2 acceleration via Products & Solutions, (v) stock already -40% in 12 months pricing in much of the bear case**. Mgmt commentary on call: 'OEM spending under pressure globally, particularly passenger vehicles, with delays in large programs affecting Asia (especially Japan) and Chinese OEM spending' — this is the **honest acknowledgement of cyclical headwinds** and the basis for cautious FY27 guidance. **Cymotive acquisition $60-120M = strategically important** — auto cybersecurity is the **fastest-growing segment of automotive ER&D** (UNECE WP.29 mandates regulatory compliance for all new vehicle types from July 2024), and KPIT had a capability gap here vs competitors like Continental, Capgemini, Tata Elxsi. **Bottom line: trough quarter with green shoots; not a thesis-breaker but not a thesis-confirmer either — needs 2-3 quarters of CC growth recovery to validate H2 FY27 acceleration narrative**.",
        whatWentRight: [
            "**Order book momentum strong — Q4 new engagements $349 Mn TCV including 2 large strategic deals** (incl. $50M+ off-highway partnership + Japanese Tier 1 digital cockpit deal). **23 consecutive quarters of revenue + EBITDA growth** = remarkable operational discipline. **Fixed-price revenue mix 66%** (up from 59% Q3) = significant shift toward Products & Solutions = margin-expansion vector building. **Strategic Cymotive Technologies acquisition approved $60-120M** = important capability addition in fast-growing automotive cybersecurity domain.",
            "**Q4 PAT +22% QoQ recovery** (₹163 cr vs ₹133 cr Q3) signals sequential bottoming after Q3 trough (which had ₹46.9 cr labor code one-off). DSO 47 days = healthy collections discipline. ROE 23.68% maintained = capital efficiency intact despite earnings trough year. Off-Highway + Connected segments led growth = diversification beyond passenger vehicles working. **D/E 0.16 = balance sheet strength** = ample capacity for Cymotive consideration ($120M cash) without leverage stress.",
        ],
        whatWentWrong: [
            "**PAT -33% YoY (₹163 cr vs ₹245 cr Q4 FY25)** — significant earnings decline reflecting EBITDA margin compression -150 bps + ₹31 cr forex loss + reverse operating leverage. **EBIT margin 14.04% (-44 bps QoQ)** = operating leverage running in reverse despite revenue growth. Constant currency QoQ growth **only +1.8%** = sequentially weak; INR growth +12% YoY flattered by USD strength = **underlying business momentum decelerating meaningfully** vs historical 3-4% CC QoQ pace.",
            "**FY27 guidance modest — EBITDA margin 20.5-21.2%** = only +0 to +40 bps expansion from FY26 20.8% = **mgmt signaling NO sharp margin recovery in FY27** despite cost actions; growth acceleration only in **H2 FY27** = first half remains soft. **Global OEM spending pressure persists** (mgmt: 'particularly passenger vehicles, delays in large programs affecting Asia/Japan/Chinese OEM spending') = auto sector cyclical headwinds not fully behind. **Stock -40% in 1 year, -35% in 6 months** = market clearly losing patience with the recovery timeline.",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "Passenger Vehicles (PV) — Largest Vertical (estimated 55-60% of revenue)",
                yoyGrowth: "Modest growth (low-single-digit CC); pressure visible",
                mix: "55-60% of revenue (largest)",
                analysis:
                    "**PV segment under maximum pressure globally** — large OEMs (VW Group restructuring, Mercedes-Benz cost-cutting + layoffs, Stellantis US production cuts, Ford EV slowdown, GM software project delays, Audi/Porsche EV ramp issues) are tightening ER&D budgets as EV transition profitability disappoints + tariff uncertainty + Chinese BYD/NIO competitive pressure. Mgmt: 'OEM spending under pressure globally, particularly passenger vehicles, with delays in large programs affecting Asia (especially Japan) and Chinese OEM spending'. KPIT continues to **expand wallet share** with existing OEMs and **gain new programs in cybersecurity, ADAS Level 3, digital cockpits, after-sales** — but program ramp-ups delayed by 1-3 quarters. **Beacon (Mobility Intelligence Product) deployed across multiple global OEM platforms** = Products & Solutions monetization scaling.",
                triggers:
                    "Watch (a) VW/Stellantis/Mercedes ER&D budget reset for FY27 calendar year, (b) Chinese OEM spending trajectory (BYD, Geely, SAIC, NIO), (c) Japanese Tier 1 partnership ramp-up (digital cockpit), (d) Cybersecurity program wins post Cymotive integration.",
            },
            {
                name: "Commercial Vehicles (CV) + Off-Highway — Strategic Growth Vector",
                yoyGrowth: "**Highest growth segment** — Off-Highway leading Q4 growth",
                mix: "20-25% of revenue (growing share)",
                analysis:
                    "**CV + Off-Highway is the bright spot** — Q4 growth led by Off-Highway segment per mgmt; **$50 Mn+ strategic long-term partnership signed with global off-highway equipment company** (likely John Deere, CNHi, Caterpillar, AGCO or similar). Commercial sectors in **USA, India, China** flagged as FY27 growth drivers. Why this matters: (a) CV/Off-Highway OEMs (Daimler Truck, Volvo, Paccar, Scania, Tata Motors CV, Ashok Leyland, John Deere, CNHi) are at **earlier stage of software-defined transformation** = larger growth runway vs PV which is mature; (b) **Higher spec content per vehicle** (autonomous tractors, connected fleet management, electrification of trucks) = ER&D intensity rising structurally; (c) Less exposed to consumer EV demand swings = **more resilient demand profile**.",
                triggers:
                    "**Sustained CV/Off-Highway growth = single biggest catalyst for FY27 acceleration**. Watch (a) Off-highway partnership ramp-up cadence, (b) US commercial vehicle program wins (Tesla Semi, Daimler Truck, Paccar electrification), (c) India CV electrification programs (Tata Motors, Ashok Leyland, Switch Mobility), (d) Chinese CV market re-acceleration.",
            },
            {
                name: "Connected Vehicles + Autonomous + After-Sales — Strategic Focus Areas",
                yoyGrowth: "Healthy growth led by Connected (per mgmt)",
                mix: "Cross-segment focus areas (~30-35% of total spend)",
                analysis:
                    "Connected Vehicles + Autonomous + After-Sales explicitly called out as **FY27 focus areas**. Connected was the second-leading growth driver in Q4 (after Off-Highway). **OEM spend priorities have shifted toward digital cockpits, Level 3 ADAS, cybersecurity, diagnostics in passenger cars** (per mgmt). **Beacon (Mobility Intelligence Product)** = KPIT's proprietary platform deployed across multiple OEM platforms = **flagship Products & Solutions offering**. **AI-infused solutions for software development triaging** = internal productivity + customer-facing IP.",
                triggers:
                    "Watch (a) Beacon platform deployment cadence + recurring revenue from product layer, (b) ADAS Level 3 / autonomous program wins (regulatory mandates accelerating), (c) Cybersecurity revenue post-Cymotive integration (UNECE WP.29 driving compliance demand), (d) After-sales / connected services revenue layer (sticky recurring ARR).",
            },
            {
                name: "Cybersecurity — NEW STRATEGIC PILLAR (Post Cymotive Acquisition)",
                yoyGrowth: "Small base; expected to scale rapidly post Cymotive integration",
                mix: "5-8% of revenue currently; targeting 10-15% by FY28",
                analysis:
                    "**Cymotive Technologies acquisition $60-120M (Israeli specialist) approved Q4 FY26** — **end-to-end vehicle lifecycle cybersecurity specialist** (threat modelling, intrusion detection, regulatory compliance). **Why critically important**: (a) **UNECE WP.29 regulations mandate cybersecurity compliance for all new vehicle types from July 2024** = regulatory tailwind = mandatory spend by all OEMs globally; (b) KPIT had **capability gap** in deep cybersecurity vs Continental, Capgemini, Tata Elxsi; (c) Israeli auto cyber talent is **world-class** (Cymotive founded by ex-Israeli intelligence + auto cyber specialists with deep VW Group relationship); (d) Initial $10M Preference Capital → 26% on milestones → 100% by mid-2029 = **staged integration de-risking execution**. Total consideration $60-120M = relatively small (~2-4% of mkt cap) but strategically transformational for cybersecurity TAM access.",
                triggers:
                    "Watch (a) Deal close mid-June 2026 (Germany + Austria merger control filings clearing), (b) Cymotive revenue contribution from H2 FY27, (c) Cross-sell of cybersecurity services to existing 100+ OEM customer base, (d) Regulatory tailwind from new vehicle type approvals globally (driving mandatory cyber audits).",
            },
            {
                name: "Geographic Mix — Europe (largest), Americas, APAC",
                yoyGrowth: "Europe softer; Americas + APAC mixed; commercial sector US/India/China growth focus",
                mix: "Europe ~50% (Germany dominant), Americas ~30%, APAC ~20%",
                analysis:
                    "**Europe (largest geo at ~50%) most pressured** — Mercedes-Benz, BMW, Audi/VW, Stellantis Europe all in cost-cutting mode + China EV competitive pressure. **Americas mixed** — passenger OEMs (GM, Ford) cautious post EV slowdown; but **commercial sector US opportunity strong** (Daimler Truck, Paccar, John Deere etc.). **APAC particularly Japan + China challenged** — mgmt: 'delays in large programs affecting Asia (especially Japan) and Chinese OEM spending'. **India growing fast but small base**. KPIT pivoting toward **commercial sectors US + India + China** for FY27 = geographic + segment rebalancing.",
                triggers:
                    "Watch (a) European OEM CY26 budget reset + Trump tariff impact on European auto exports to US, (b) US commercial sector wins (truck, off-highway), (c) Japan recovery (large Tier 1 partnerships), (d) China commercial vehicle re-acceleration.",
            },
        ],
        assessment: [
            "**Segment-level read**: KPIT is in a **clear pivot phase** — passenger vehicle segment (largest) under cyclical pressure, while **commercial vehicles + off-highway + connected + cybersecurity emerging as growth vectors**. The $50M+ off-highway partnership + Japanese Tier 1 digital cockpit deal in Q4 = visible execution on this pivot. **23 consecutive quarters of revenue + EBITDA growth** = no segment is shrinking despite headwinds — just growth pace differs across segments.",
            "**Cymotive cybersecurity acquisition is strategically transformational** — closes a capability gap in the fastest-growing automotive ER&D segment (regulatory-mandated demand from UNECE WP.29). At $60-120M, the deal is small enough to absorb cleanly without balance sheet stress (D/E 0.16, ample cash) but large enough to materially impact cybersecurity revenue trajectory FY28-FY30. **Combined with Beacon mobility intelligence product + AI-infused solutions, KPIT is building a Products & Solutions-led portfolio** that should structurally re-rate margins from FY28 onwards.",
            "**Geographic / vertical de-risking is underway but takes time** — pivot toward US/India/China commercial sectors + Off-Highway + connected/cybersecurity will not fully offset European passenger OEM pressure in FY27 (hence cautious guidance). Real recovery story plays out FY28 as (a) global OEM ER&D budgets normalize post-EV transition reset, (b) regulatory cybersecurity demand kicks in, (c) Products & Solutions revenue mix scales, (d) Cymotive fully integrates. **FY27 = transition year; FY28 = re-acceleration year; FY29-30 = compounder narrative back**.",
        ],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            { metric: "Q4 New Engagements TCV", current: "**$349 Mn**", trend: "Strong sequential ramp", horizon: "Multi-quarter conversion to revenue", remarks: "Includes **2 large strategic deals** — $50M+ off-highway partnership + Japanese Tier 1 digital cockpit. Best deal momentum in last several quarters." },
            { metric: "Pipeline (overall — Products & Solutions contribution)", current: "**21% of overall pipeline**", trend: "Growing P&S share = margin-accretive shift", horizon: "12-24 months conversion", remarks: "Reflects KPIT's Products & Solutions transition; higher gross margins than time-and-material engagements." },
            { metric: "Cymotive Cybersecurity Pipeline (post-acquisition)", current: "$10M initial investment; $60-120M total commitment", trend: "Deal close mid-June 2026; revenue from H2 FY27", horizon: "FY27-FY30 ramp-up", remarks: "**UNECE WP.29 regulatory mandate from July 2024 = compulsory cybersecurity spend** = strong pipeline visibility; cross-sell to existing 100+ OEM customers." },
            { metric: "Commercial Sectors Pipeline (USA/India/China)", current: "Multiple programs in active discussion", trend: "**Mgmt explicitly flagged as FY27 growth driver**", horizon: "FY27 H2 acceleration narrative", remarks: "Off-Highway partnership $50M+ in Q4 = early validation; truck electrification + autonomous + connected fleet management = large TAM." },
            { metric: "OEM Wallet Share Expansion (existing accounts)", current: "Active expansion across Top 10 OEMs", trend: "Steady growth despite OEM budget pressure", horizon: "Continuous", remarks: "**100+ active customers; relationships 10+ years deep**; KPIT consistently gains wallet share even when total OEM ER&D budget is flat = competitive positioning intact." },
        ],
        demandSignals: [
            { signal: "Industry growth rate (Auto ER&D global)", reading: "Cyclical pressure CY25-CY26; structural CASE growth long-term ($300+ Bn TAM by 2030 vs $40-50B today)", verdict: "Adequate" },
            { signal: "OEM customer order patterns", reading: "Spending under pressure globally, particularly passenger vehicles; delays in large programs affecting Asia (Japan) + Chinese OEMs (per mgmt)", verdict: "Weak" },
            { signal: "Order book momentum (Q4 TCV)", reading: "$349 Mn new engagements with 2 large strategic deals = best in several quarters", verdict: "Strong" },
            { signal: "Vertical/segment expansion", reading: "Off-Highway + Commercial Vehicles + Connected + Cybersecurity = 4 growth vectors emerging vs PV pressure", verdict: "Strong" },
            { signal: "Geographic expansion", reading: "Pivot toward US/India/China commercial sectors; Europe softer; Japan/China passenger OEM weak", verdict: "Adequate" },
            { signal: "Products & Solutions traction (Beacon, AI-infused, Cymotive)", reading: "Fixed-price mix 66% (up from 59%); P&S = 21% of pipeline; Beacon deployed across multiple OEM platforms", verdict: "Strong" },
        ],
        demandVerdict: "Adequate-to-Strong (mixed)",
        whatWentRight: [
            "**Q4 new engagements TCV $349 Mn = strong deal momentum** including 2 large strategic deals — $50M+ off-highway equipment company partnership (long-term strategic) + Japanese Tier 1 supplier next-gen digital cockpit programs. **Beacon (Mobility Intelligence Product) deployed across multiple global OEM platforms** = Products & Solutions traction visible. **Fixed-price revenue mix jumped to 66% from 59% QoQ** = significant shift toward IP-led / outcome-based engagements = margin-expansion vector for FY27-FY28.",
            "**Cymotive Technologies acquisition approval ($60-120M total) closes critical cybersecurity capability gap** — UNECE WP.29 regulatory mandates from July 2024 are forcing mandatory cybersecurity compliance for all new vehicle types globally = **regulatory tailwind = compulsory OEM spend**; combined with cross-sell opportunity to existing 100+ OEM customer base = potentially significant FY28+ revenue layer. Off-Highway segment + Connected vehicles led Q4 growth = diversification beyond passenger vehicles working.",
        ],
        whatWentWrong: [
            "**Constant currency QoQ growth only +1.8%** in Q4 = essentially flat sequential business momentum despite +12% YoY INR growth (which was flattered by USD strength). **OEM spending under pressure globally, particularly passenger vehicles** (per mgmt) = largest segment continues under stress. **Asia / Japan / China program delays** = significant weakness in 20%+ of revenue base. **FY27 growth acceleration only in H2** = first half remains soft per mgmt = pipeline conversion timing pushed out.",
            "**Auto sector cyclicality remains the dominant overhang** — VW Group restructuring, Mercedes-Benz cost-cutting + layoffs, Stellantis US production cuts, Ford EV strategy reset, GM software project delays, Tesla margin pressure, Chinese BYD/NIO competitive squeeze on European OEMs = ER&D budget tightening across global PV majors. **No clear inflection point visible in CY26 calendar year** for global OEM ER&D budget recovery — KPIT's growth recovery narrative is back-end loaded into H2 FY27 with execution risk.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            { metric: "FY27 Revenue Growth", current: "FY26 revenue growth +10.5% INR (CC growth in low single-digits)", target: "**Better than FY26**; growth acceleration in **H2 FY27** driven by Products & Solutions; commercial sectors USA/India/China leading" },
            { metric: "FY27 EBITDA Margin", current: "FY26 EBITDA margin 20.8%", target: "**20.5-21.2%** = +0 to +40 bps modest expansion; reflects continued investment in AI/P&S/competency development" },
            { metric: "Products & Solutions Mix Expansion", current: "Fixed-price 66% (up from 59% Q3); P&S 21% of pipeline", target: "Continued shift toward fixed-price + IP-led monetization; Beacon deployment scaling" },
            { metric: "Cymotive Cybersecurity Integration", current: "$10M initial Preference Capital; $60-120M total commitment", target: "Deal close **mid-June 2026** (Germany/Austria merger control); 26% on milestones → 100% by mid-2029; cybersecurity revenue from H2 FY27" },
            { metric: "Commercial Sectors Growth (USA/India/China)", current: "Off-Highway + Connected led Q4 growth", target: "**Stronger growth from commercial sectors USA, India, China** as FY27 priority; Connected Vehicles + Autonomous Driving + After-Sales as focus areas" },
        ],
        commitmentNote:
            "**Mgmt posture: cautiously realistic — explicitly acknowledging headwinds, conservative on near-term, confident on H2 FY27 + medium-term**. The FY27 EBITDA guidance 20.5-21.2% (vs FY26 20.8%) is **deliberately modest** — Mgmt is signaling NO sharp margin recovery despite cost actions, because they want to **continue investing in AI + P&S + competency + new markets** rather than defend short-term margins. This is the **right strategic choice for a 5+ year horizon player** but means FY27 PAT recovery is moderate (likely +30-40% on FY26 ₹637 cr trough base = ~₹830-880 cr; still below FY25 ₹843 cr). **Translation: FY27 = transition year confirming bottoming + setup; FY28 = real re-acceleration**. Track record on guidance is **generally credible** — Kishor Patil + team have delivered 23 consecutive quarters of growth and historically met or beaten guidance, but past 4 quarters have seen guidance reset downward as auto cycle weakened. **Cymotive integration risk** (Israeli company, Germany/Austria regulatory clearances) = key execution watch.",
        growthDrivers: [
            { driver: "**H2 FY27 Acceleration via Products & Solutions** (Beacon platform, AI-infused solutions, fixed-price IP-led engagements)", impact: "Highest. Mgmt explicitly flagged as primary FY27 growth catalyst; P&S already 21% of pipeline; Fixed-price mix 66% and rising = margin-accretive growth vector." },
            { driver: "**Commercial Sectors USA/India/China + Off-Highway + Connected Vehicles**", impact: "High. $50M+ off-highway partnership signed Q4; Daimler Truck, Paccar, John Deere, Tata Motors CV, Ashok Leyland = massive TAM at earlier stage of software transformation." },
            { driver: "**Cymotive Cybersecurity Acquisition + UNECE WP.29 Regulatory Tailwind**", impact: "High (FY28+). Mandatory cybersecurity compliance for all new vehicle types globally; cross-sell to existing 100+ OEM customers; Israeli world-class talent; closes KPIT's capability gap vs Continental/Capgemini/Tata Elxsi." },
            { driver: "**OEM Wallet Share Expansion** (existing 100+ customers; 10+ year relationships; consistent share gain even in flat budget environment)", impact: "Medium-High. KPIT's structural moat in pure-play auto ER&D = consistent wallet share gain regardless of macro; particularly strong in cybersecurity, Level 3 ADAS, digital cockpits, after-sales (per mgmt OEM priority shift)." },
            { driver: "**AI-Native ER&D Capabilities** (AI-infused solutions for software development triaging; AI agents in delivery; competency development investments showing in FY26 margin)", impact: "Medium-High (FY28+). Productivity gains + customer-facing IP monetization; aligns with industry-wide AI-native transition (Coforge, Persistent, etc.); FY26 investment phase converting to FY28+ margin uplift." },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            { title: "23 Consecutive Quarters of Revenue + EBITDA Growth", body: "Remarkable operational consistency — even in a weak Q4 with -33% YoY PAT decline, KPIT still delivered **revenue + EBITDA growth** for the 23rd consecutive quarter. **Quality of execution unmatched among Indian ER&D peers** (Tata Elxsi, LTTS, Cyient have all had at least one negative growth quarter in this period). Demonstrates structural moat + diversified customer base + operational discipline." },
            { title: "Q4 Order Book Momentum Strong — $349 Mn TCV including 2 Large Strategic Deals", body: "**$349 Mn new engagements in Q4** including (a) **$50M+ strategic long-term partnership with global off-highway equipment company** (likely John Deere, CNHi, Caterpillar or AGCO), (b) **Japanese Tier 1 supplier partnership for next-generation digital cockpit programs**. Best deal momentum in several quarters; **validates pipeline conversion narrative** for FY27 H2 acceleration." },
            { title: "Cymotive Cybersecurity Acquisition — Strategically Transformational", body: "**Cymotive Technologies acquisition approved $60-120M total** (Israeli auto cybersecurity specialist). **Why important**: (a) **UNECE WP.29 regulatory mandate from July 2024** = mandatory cybersecurity compliance for all new vehicle types globally = compulsory OEM spend = structural demand; (b) **Closes KPIT's capability gap** vs Continental/Capgemini/Tata Elxsi in cybersecurity; (c) **Cross-sell opportunity** to existing 100+ OEM customer base; (d) Israeli auto cyber talent is world-class (founded by ex-Israeli intelligence + auto cyber specialists with deep VW Group relationship). Staged investment de-risks execution." },
            { title: "Products & Solutions Transition Visible — Fixed-Price Mix 66% (up from 59%)", body: "**Major shift in revenue model toward fixed-price + IP-led monetization** — Fixed-price revenue mix jumped 700 bps QoQ from 59% to 66%. **Beacon (Mobility Intelligence Product) deployed across multiple global OEM platforms** = flagship Products & Solutions offering. **AI-infused solutions for software development triaging** = internal productivity + customer-facing IP. **P&S = 21% of pipeline** (per Q3 commentary). This is **structural margin-expansion vector for FY28+** as P&S revenue mix scales." },
            { title: "Pivot to Commercial Sectors + Off-Highway Working", body: "**Off-Highway segment LED Q4 growth** (per mgmt); **Connected vehicles second-leading driver**. **Commercial sectors USA, India, China explicitly flagged as FY27 growth priority**. Why this matters: (a) CV/Off-Highway OEMs at **earlier stage of software-defined transformation** vs PV = larger growth runway; (b) **Higher spec content per vehicle** (autonomous tractors, connected fleet, electric trucks); (c) **Less exposed to consumer EV demand swings** = more resilient. **Geographic + vertical de-risking visible in Q4 results**." },
        ],
        bearish: [
            { title: "Q4 PAT -33% YoY — Significant Earnings Decline", body: "**PAT ₹163 cr in Q4 vs ₹245 cr in Q4 FY25 = -33% YoY**. FY26 full year PAT ₹637 cr vs FY25 ₹843 cr = **-24% YoY decline** = **earnings trough year for KPIT**. Reflects: (a) EBITDA margin compression -150 bps to 20.8% (from ~22% historical), (b) ₹31 cr forex loss in Q4, (c) ₹46.9 cr labor code one-off in Q3 (now in base), (d) reverse operating leverage as growth decelerated. Markets clearly punishing — stock **-3.09% T+0**, **-40% in 1 year, -35% in 6 months**." },
            { title: "CC QoQ Growth Only +1.8% — Underlying Momentum Weak", body: "**Constant currency QoQ growth in Q4 was just +1.8%** = essentially flat sequential business momentum. INR growth +12% YoY was flattered by USD strength. **Pace decelerated meaningfully from historical 3-4% CC QoQ**. Combined with **OEM spending pressure globally, particularly passenger vehicles** (per mgmt) + **delays in large programs affecting Asia (Japan) + Chinese OEM spending** = clear signal that **underlying business momentum has not yet inflected up**." },
            { title: "FY27 Guidance Modest — EBITDA 20.5-21.2% (only +0 to +40 bps expansion)", body: "**FY27 EBITDA margin guidance 20.5-21.2% vs FY26 20.8% = essentially flat**. Mgmt explicitly signaling **NO sharp margin recovery** in FY27 because of continued investments in AI/Products & Solutions/competency development/new markets. **Growth acceleration only in H2 FY27** = first half remains soft. This is **realistic but disappointing** for investors expecting V-shaped recovery; **PAT recovery in FY27 will be moderate** (~₹830-880 cr likely vs FY26 trough ₹637 cr; still below FY25 peak ₹843 cr)." },
            { title: "Global Auto Sector Cyclical Headwinds Far From Over", body: "**VW Group major restructuring + plant closures**, **Mercedes-Benz cost-cutting + layoffs announced**, **Stellantis US production cuts**, **Ford EV strategy reset**, **GM software project delays**, **Tesla margin pressure**, **Chinese BYD/NIO competitive squeeze on European OEMs** = ER&D budget tightening across global PV majors. Mgmt concedes 'OEM spending under pressure globally, particularly passenger vehicles, with delays in large programs affecting Asia (especially Japan) and Chinese OEM spending'. **No clear inflection point visible in CY26 calendar year** for global OEM ER&D budget recovery." },
            { title: "Cymotive Acquisition Execution Risk + Integration Challenges", body: "**$60-120M Cymotive deal has staged closing** — initial $10M Preference Capital → 26% on milestones → 100% by mid-2029. **Germany + Austria merger control filings required** = regulatory timeline risk. **Israeli company integration** with Indian engineering culture + global OEM customer base = **execution complexity**. **Performance milestones for tranche conversion** = risk of failed milestones. While strategically valuable, near-term contribution to FY27 likely modest (H2 FY27 onwards); meaningful revenue contribution only FY28+ — **does not solve immediate FY27 growth/margin concerns**." },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text: "**FY26 = Earnings Trough Year — Q4 PAT -33% YoY but +22% QoQ = Sequential Bottoming Visible**",
            impact: "neutral",
            note: "Q4 PAT ₹163 cr vs ₹245 cr Q4 FY25 (-33% YoY) confirms FY26 as trough year (FY26 PAT ₹637 cr vs FY25 ₹843 cr = -24% YoY). BUT **Q4 PAT +22% QoQ** signals sequential bottoming. Combined with **23 consecutive quarters of revenue + EBITDA growth** = no operational disruption — just margin trough on investment phase + auto cycle. **FY27 PAT recovery moderate** (₹830-880 cr likely; +30-40% on FY26 base; still below FY25 peak)."
        },
        {
            text: "**Q4 Order Book $349 Mn TCV Including 2 Large Strategic Deals — Best Momentum in Several Quarters**",
            impact: "strengthens",
            note: "**$349 Mn new engagements** including **$50M+ off-highway equipment partnership** + **Japanese Tier 1 digital cockpit programs**. Validates pipeline conversion narrative for H2 FY27 acceleration. Off-Highway + Connected led Q4 growth = vertical/segment de-risking working. **This is the strongest signal of business momentum building for FY27 H2 + FY28**."
        },
        {
            text: "**Cymotive Cybersecurity Acquisition $60-120M = Strategically Transformational, Not Tactical**",
            impact: "strengthens",
            note: "Closes critical cybersecurity capability gap; UNECE WP.29 regulatory mandate from July 2024 = compulsory OEM spend = structural demand; cross-sell to 100+ OEM customers; Israeli world-class talent. Staged closing (mid-June 2026 initial; 100% by mid-2029) de-risks execution. **Material FY28+ revenue contributor**; positions KPIT as full-stack auto software player vs current ER&D-only positioning."
        },
        {
            text: "**FY27 Guidance Cautiously Realistic — Growth Better than FY26 + EBITDA 20.5-21.2% + H2 Acceleration**",
            impact: "neutral",
            note: "Mgmt explicitly signaling **modest margin expansion (+0 to +40 bps)** because of continued investments in AI/P&S/competency/new markets. Growth acceleration only H2 FY27 = first half remains soft. **Realistic but disappointing for V-shape recovery hopes**. Track record on guidance generally credible (23 consecutive quarters of growth) but past 4 quarters have seen downward resets. **Execution credibility intact; pace of recovery is the risk**."
        },
        {
            text: "**Stock -40% in 1 Year, -35% in 6 Months — Significant De-Rating Already Absorbed; P/E 29x vs Historical 50-80x**",
            impact: "strengthens",
            note: "Massive correction already priced in much of the auto cycle bear case. **TTM P/E 29.43x vs historical 50-80x band** = currently at lower end of historical range. Forward FY27 P/E ~22-24x; FY28 ~18-20x = approaching reasonable. Combined with (a) 23 consecutive quarters of growth, (b) $349M Q4 TCV momentum, (c) Cymotive acquisition, (d) FY27 H2 acceleration narrative = **CONTRARIAN ACCUMULATION setup emerging**. Risk: full bottom not yet confirmed; need 2-3 quarters of CC growth recovery to validate."
        },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        thesisIntact: {
            verdict: "Partially",
            reasons: [
                "**Long-term thesis fully intact**: KPIT remains India's leading **pure-play automotive ER&D specialist** in the **CASE megatrend** ($300+ Bn global automotive software TAM by 2030 vs $40-50B today); deep relationships with all top 25 global passenger vehicle OEMs + commercial vehicle/off-highway majors; 100+ active customers; 10+ year relationships; structural moat intact.",
                "**Operational execution thesis intact**: **23 consecutive quarters of revenue + EBITDA growth** = remarkable consistency; no segment shrinking despite global auto headwinds; ROE 23.68% maintained in trough year; D/E 0.16 = balance sheet pristine; DSO 47 days = healthy working capital.",
                "**Strategic transformation thesis strengthening**: Products & Solutions transition (Fixed-price mix 66% from 59%); Beacon platform deployed across multiple OEM platforms; Cymotive cybersecurity acquisition closes capability gap; AI-native investments in flight = **building structural margin-expansion vectors for FY28+**.",
                "**Near-term cyclical thesis disappointed**: FY26 PAT -24% YoY = earnings trough year; Q4 CC QoQ +1.8% only = momentum weak; FY27 guidance modest (EBITDA 20.5-21.2%, H2 acceleration); global PV OEM spending pressure persists. **Recovery timeline pushed out from FY27 to H2 FY27 / FY28** = patience required.",
                "**Net: thesis is PARTIALLY intact** — long-term compounder narrative + structural moat + Products & Solutions transition all confirming, BUT near-term cyclical pressure deeper + recovery timeline longer than originally expected. Stock has already de-rated -40% in 12 months, much of bear case priced in. **For 3-5 year horizon investor: thesis remains compelling at current levels; for 12-month traders: choppy ride ahead with H2 FY27 inflection as catalyst**.",
            ],
        },
        rerateTriggers: [
            { trigger: "**H2 FY27 CC Growth Re-Acceleration to 4-6% QoQ** (validating mgmt's growth recovery narrative)", probability: "Medium", rationale: "If Off-Highway + Commercial Vehicles + Connected + Cybersecurity verticals scale as flagged, plus Products & Solutions monetization kicks in, CC QoQ growth could re-accelerate to 4-6% by Q3-Q4 FY27 (vs current 1.8%). This would re-rate stock 30-50% as growth narrative restored. Risk: global auto cycle stays weak in CY26 calendar year." },
            { trigger: "**Cymotive Integration Success + Cybersecurity Revenue Layer Visible (FY28)**", probability: "Medium-High", rationale: "UNECE WP.29 regulatory mandate = compulsory cybersecurity spend; cross-sell to 100+ OEM customers; Israeli talent quality; staged integration de-risks execution. If Cymotive contributes $50-100M annual revenue by FY29 + drives broader cybersecurity wins, stock can re-rate 20-30% on Products & Solutions premium." },
            { trigger: "**EBITDA Margin Expansion to 22-23% by FY28** (Products & Solutions + AI productivity + scale leverage)", probability: "Medium", rationale: "Fixed-price mix 66% rising; P&S 21% of pipeline; AI-infused solutions productivity gains; Cymotive accretive (cybersecurity higher margin); operating leverage on scale recovery. If FY28 EBITDA margin reaches 22%+ on revenue ₹8,000-8,500 cr, EPS can reach ₹40-45 (vs current ₹26) = stock can hit ₹1,200-1,500 = +60-100% from current." },
            { trigger: "**Global Auto OEM ER&D Budget Inflection + EV Transition Stabilisation (CY26-27)**", probability: "Low-Medium", rationale: "If VW/Mercedes/Stellantis/Ford/GM stabilize ER&D budgets after current restructuring + China EV competitive pressure abates + Tesla margin recovers + tariff uncertainty resolves, KPIT benefits from broader sector re-rating. **Beyond mgmt's control**; sector-wide trigger." },
        ],
        upsideIfGuidanceMet: {
            currentPrice: "₹748.60 (NSE, 6 May 2026)",
            targetPrice: "**₹950-1,100** (12-15 month horizon if FY27 guidance met + H2 acceleration delivers; revaluation to forward FY28 P/E 28-32x)",
            upsidePct: "**+27-47%** in 12-15 months if FY27 guidance met + H2 H2 inflection visible + Cymotive on track",
            horizon: "12-15 months (post Q3-Q4 FY27 validation of growth + margin recovery)",
            assumptions:
                "FY27 Revenue ~₹7,300 cr (+13% YoY) per 'better than FY26' guidance. FY27 EBITDA margin midpoint 20.85% = ₹1,521 cr EBITDA. D&A ~₹250 cr. EBIT ~₹1,271 cr. Tax 25%, PAT ~₹880 cr (+38% on FY26 ₹637 cr trough base; still slightly below FY25 ₹843 cr peak). FY27 EPS ~₹32. **FY28 build**: Revenue ₹8,400 cr (+15% on commercial sectors + Cymotive contribution + H2 FY27 momentum sustaining); EBITDA margin 21.5%; PAT ~₹1,050 cr; EPS ~₹38. **Re-rating to forward FY28 P/E 28-32x** (vs current 29x trailing; vs historical 50-80x = still below historical band) = ₹1,060-1,220 = **fair target ₹950-1,100 range** with margin of safety.",
            workings:
                "Cross-check vs peers: Persistent Systems P/E ~50x; Coforge P/E ~36x (clean ~45x); LTI Mindtree P/E ~32x; Tata Elxsi P/E ~50x (auto-tech specialist comparable); Cyient P/E ~25x (broader ER&D). KPIT's 29x is **modest premium to broader IT, but DEEP discount to direct ER&D peer Tata Elxsi (50x)**. If KPIT re-rates to 32-35x forward FY28 EPS ₹38 = **₹1,200-1,330 = +60-77% upside in 18-24 months** under bull case (full FY28 EPS visibility + margin expansion confirmed). **Conservative 12-15 month target ₹950-1,100** assuming partial re-rating + FY27 partial validation.",
        },
        valuationEntryZone: {
            bestValueRange: "**₹650-780** = current accumulation zone (where stock has been trading in last 6 months); **₹600-680 = aggressive accumulation zone** (if auto sector bear case extends + further capitulation)",
            fairValue: "**₹950-1,100** (12-15 month base case; forward FY28 P/E 28-32x on EPS ₹38)",
            currentZone: "Fair (lower end — Cheap if H2 FY27 acceleration validates)",
            rationale:
                "**Stock at ₹748.60 is at lower end of FAIR ZONE with optionality to CHEAP**. Multiple reference frames support this: (1) **TTM P/E 29.43x vs historical 50-80x band** = currently at **lower end of historical range** = significant valuation reset already done; (2) **Industry P/E 19.65x (broader IT)** — KPIT at 50% premium reflects ER&D specialist + structural CASE moat (DESERVES premium); peer Tata Elxsi at 50x = KPIT actually **trading at 40% discount to closest peer**; (3) **Forward FY27 P/E ~22-24x; FY28 ~18-20x** = approaching reasonable for mid-teens compounder; (4) **Stock down -40% in 1 year, -35% in 6 months** = much of bear case priced in; risk-reward improving; (5) **P/B 6.48x** elevated but justified by ROE 23.68% maintained in trough year. **CONTRARIAN ACCUMULATION STRATEGY**: SIP-style accumulation in **₹650-780 band over next 2-3 quarters** as Q1-Q2 FY27 results provide more visibility on H2 acceleration narrative. **Stop on conviction**: Watch for Q1 FY27 CC QoQ growth — if <1% = thesis deteriorating; if >2.5% = early validation. **Bull case ₹1,200-1,400 (FY28 EPS visibility), Base case ₹950-1,100 (12-15 months), Bear case ₹600-680 (deeper auto cycle)** = **risk-reward 1:1.5 to 1:2.5 = ATTRACTIVE for 18-24 month horizon investor with patience**.",
        },
        summary:
            "**Final Verdict: 'CONTRARIAN ACCUMULATE — FY26 trough year confirmed, H2 FY27 inflection narrative + Cymotive optionality + significant de-rating already absorbed make risk-reward favourable for patient 18-24 month investor; not for 6-12 month traders due to choppy near-term path'.** KPIT delivered a **mixed Q4** that crystallises the bear case (PAT -33% YoY, CC QoQ +1.8% only) but ALSO shows green shoots (Q4 PAT +22% QoQ, $349M order book momentum, 23 consecutive quarters of growth, Cymotive strategic acquisition, Products & Solutions transition visible). **Mgmt is appropriately cautious — FY27 guidance signals modest +0-40 bps margin expansion + better revenue growth + H2 acceleration** = realistic but not exciting for V-shape recovery hopes. **The stock has already corrected -40% in 12 months pricing in much of the auto cycle uncertainty**; TTM P/E 29x is at **lower end of historical 50-80x band**, and forward FY28 P/E ~18-20x is **CHEAP for an ER&D specialist with structural CASE moat**. **Three asymmetric setups support contrarian accumulation**: (a) earnings trough confirmed in FY26 — only direction is up from ₹637 cr PAT base; (b) Cymotive cybersecurity = strategic optionality at small ticket size; (c) Products & Solutions transition + AI-native investments = structural margin-expansion vectors for FY28+. **Three risks merit caution**: (a) global auto OEM spending pressure may extend through CY26 = FY27 H2 acceleration could slip to FY28; (b) Cymotive integration execution risk (Israeli + Germany/Austria regulatory + staged milestones); (c) competitor positioning (Tata Elxsi, Continental, Capgemini, Cyient) all aggressive in same space. **STRATEGY**: Accumulate in **₹650-780 band over next 2-3 quarters as Q1-Q2 FY27 results provide visibility**; **conviction stops** = Q1 FY27 CC QoQ <1% = thesis deteriorating; Q1 FY27 CC QoQ >2.5% + Cymotive deal closure + 2+ large deal wins = early validation = base case ₹950-1,100 in 12-15 months looks achievable. **For investors who already own KPIT**: HOLD with clear conviction stops (₹650 break = re-evaluate; H2 FY27 CC growth <2% = trim); not the time to add aggressively at ₹748 (top of accumulation band) — better entries likely available in Q1-Q2 FY27 weakness. **For new investors**: Initial position 25-30% of intended allocation at current levels; balance to add on Q1 FY27 results clarity OR deeper correction toward ₹650 zone. **Time horizon: 18-24 months minimum; not for momentum traders**.",
    },
});
