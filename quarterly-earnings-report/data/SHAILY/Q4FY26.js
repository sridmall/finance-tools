/* ============================================================
   Shaily Engineering Plastics Ltd — Q4 FY26 / Full Year FY26
   Concall: 20 May 2026 (results announced 19 May 2026)
   File path: data/SHAILY/Q4FY26.js
   Live spot @ authoring: ₹2,695 NSE close (22 May 2026 — Screener)
   52w range: ₹1,534 – ₹2,847 (52w-high 15 May 2026)
   Mkt cap: ₹12,397 Cr | TTM P/E: 73x | ROCE 29% | ROE 27%
   Sources: Screener.in (consolidated), MarketScreener Q4 FY26 transcript,
            AlphaStreet Q3 FY26 transcript (rich context), TradeBrains,
            MarketsMojo Q4 FY26 result analysis, BSE filings, ScanX
   ============================================================ */

window.registerReport("SHAILY", "Q4FY26", {
    meta: {
        companyName: "Shaily Engineering Plastics Ltd",
        ticker: "SHAILY",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "19 May 2026",
        concallDate: "20 May 2026 (Q4 & FY26 Earnings Conference Call)",
        resultsBasis:
            "Consolidated (primary). Three-segment precision plastics player pivoting to high-margin drug-delivery devices: **Healthcare (~44% of Q4 revenue, +139% FY26 YoY — the central re-rating story; pen injectors for GLP-1s, insulin, biologics), Consumer (~46% — IKEA-style home furnishings, FMCG packaging, LED lighting, toys via Spin Master; currently declining on EU/US demand softness), Industrial (~10% — power tools, LED lights, *new* semiconductor casings).** **Track Pen Manufacturing Capacity (M units), Healthcare revenue share, EBITDA margin, P/E vs 5-yr median — *not* current P/E in isolation (73x optically rich but FY27-28E compounding 35-45% justifies premium).** Q4 FY26 revenue ₹236.8 cr (+8.7% YoY, -5.5% QoQ on tactical mix); FY26 PAT ₹169.9 cr (+83% YoY) = highest-ever profitability; board approved ₹3 final dividend + ₹500 cr enabling fundraise + appointed COO (Joe Kam, ex-SHL Taiwan). **Healthcare contribution doubled to 42-44% of revenue from ~21% in FY25** — this is the single most important business-quality shift.",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. **Valuation is the central risk: TTM P/E 73x (Screener) — 2x peer Astral/Supreme/Garware median ~36x — only justified by FY27-29 pen-volume ramp (30M → 60M+ → 100M+) + healthcare margin profile + Abu Dhabi 75M pen facility commissioning Q4 FY28**. Any GLP-1 launch delay, semaglutide price-erosion >15%, or consumer business deeper decline could trigger multiple compression to 45-55x = ₹1,800-2,200 zone. Conversely, innovator-pharma GLP-1 contract win (50-100M pens) could re-rate to ₹3,800-4,500 (DAM Capital target ₹3,810).",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            {
                metric: "Revenue from Operations — ₹Cr",
                current: "**Q4: 236.8 (FY26: 990.7)**",
                qoq: "**-5.5% QoQ** (Q3: ₹250.5 cr) — *tactical* mix decline (consumer business softer + healthcare scaling more slowly than ramp; high-speed line still in qualification through Q4)",
                yoy: "**Q4: +8.7% YoY** (Q4 FY25 ₹217.8 cr); **FY26: +25.9% YoY** (vs FY25 ₹786.8 cr) — strong full-year beat; healthcare +139% offsetting consumer -1% on EU/US slowdown",
            },
            {
                metric: "Total Expenses / Sales (%) — proxy COGS+Opex",
                current: "**Q4: 72.3% / FY26: 71.7%**",
                qoq: "Q4 72.3% vs Q3 73.5% = **-120 bps QoQ improvement** — milestone-based income from UK/Dubai operations booked in Q4 (deferred from Q3)",
                yoy: "Q4 72.3% vs Q4 FY25 74.9% = **-260 bps YoY**; FY26 71.7% vs FY25 77.5% = **-580 bps YoY** = mix shift toward high-margin healthcare + operating leverage",
            },
            {
                metric: "EBITDA Margin (%)",
                current: "**Q4: 27.7% / FY26: 29.0%**",
                qoq: "Q4 27.7% vs Q3 26.4% = **+130 bps QoQ** — deferred milestone income + lower exhibition costs vs Q3",
                yoy: "Q4 +271 bps YoY (Q4 FY25 25.0%); **FY26 +630 bps YoY** (FY25 22.7%); **highest-ever full-year EBITDA margin**. Healthcare segment margin ~35%+ pulling consolidated higher.",
            },
            {
                metric: "PAT (₹Cr)",
                current: "**Q4: ₹40.2 cr / FY26: ₹169.9 cr — highest-ever**",
                qoq: "Q4 +7.4% QoQ (Q3 ₹37.4 cr — Q3 was depressed by ₹0.9-1.0 cr labor-code one-off + ~₹3-5 cr deferred milestone income); **FY26 +82.5% YoY**",
                yoy: "**Q4 +40.5% YoY** (Q4 FY25 ₹28.6 cr); **FY26 +82.5% YoY** (FY25 ₹93.1 cr) — operating leverage + healthcare scale-up + lower effective tax rate (23.3% vs 27.8% Q4 FY25)",
            },
            {
                metric: "EPS (₹) — Face Value ₹2",
                current: "**Q4: ₹8.74 / FY26: ₹36.97**",
                qoq: "Q4 +7.5% QoQ (Q3 ₹8.13)",
                yoy: "**Q4 +40.5% YoY** (Q4 FY25 ₹6.22); **FY26 +82.5% YoY** (FY25 ₹20.26); **3-yr profit CAGR 69%; FY26 TTM growth 83%** — compounding rate among highest in Indian midcap manufacturing",
            },
        ],
        businessQualityMetrics: [
            {
                metric: "Pen Manufacturing Capacity — Million Units/Year (the central business-quality KPI)",
                current: "**~80M units end-FY26 (vs 40M end-FY25); 30M pens supplied in FY26 (~38% utilisation)**",
                qoq: "+50M capacity added across Q3-Q4 FY26 (₹125-150 cr capex)",
                yoy: "**+100% YoY capacity doubling**; first 25M line under operational qualification Q3-Q4 (high-speed line, 80 parts/minute, 30% rejection rate during qual — typical for new lines); second 25M line arriving April-May 2026 (commercial production by July-Aug 2026). **Abu Dhabi 75M facility (₹300-350 cr capex) commissioning Q4 FY28 → total 150M+ by FY29**. Innovator GLP-1 contract (50-100M pen optionality, *in advanced discussion* per mgmt 'this calendar year').",
            },
            {
                metric: "Healthcare Segment Revenue Contribution % (the re-rating engine)",
                current: "**Q4: ~44% / 9M: 37% / FY26: ~40% (vs ~21% FY25)** — *doubled* contribution in 12 months",
                qoq: "Healthcare segment Q3 ₹104 cr (+139% YoY) on a base of ₹44 cr Q3 FY25; Q4 estimated ~₹100-110 cr",
                yoy: "**FY26 Healthcare revenue +139% YoY**; share of revenue moved from ~21% to ~40% — the single most important business-quality shift. **Healthcare gross margin ~55%+ (vs Consumer ~35%)** = each 100 bps of Healthcare share gain adds ~20 bps consolidated EBITDA margin. **Mgmt: 'Healthcare to grow 30-40% annually for next few years'**.",
            },
            {
                metric: "Export Share of Revenue % + ROCE (capital efficiency)",
                current: "**Exports ~71% of revenue (Q4 + 9M FY26); ROCE 38.4% (9M, peak); FY26 trailing ~29%; D/E 0.3x; Net Debt/EBITDA <1x**",
                qoq: "Sustained — Healthcare exports + EU/UK consumer dominant",
                yoy: "**ROCE jumped from 14-20% historically to 29% FY26 / 38.4% peak Q3** — operating leverage + asset efficiency in healthcare visible. Take-or-pay GLP-1 contracts with 20-40% upfront advances + minimum-volume guarantees = unusually high revenue visibility for a *contract manufacturer*. **Customer relationships moat: 65-75% of first 6-8 Canada semaglutide filers use Shaily's pen platform.**",
            },
        ],
        footnotes: [
            "**Q4 sequential revenue decline (-5.5% QoQ) is *tactical*, not structural** — Q3 FY26 carried ~₹3-5 cr deferred milestone income (UK/Dubai licensing fees on pen platforms) which spilled into Q4; the *underlying* run-rate has not weakened. High-speed line still in qualification through Q4 means full healthcare volume ramp is FY27 H1 event. Mgmt explicit Q3: 'Q1 FY27 will show full normalisation — quarter four still has line under qual; will only have small contribution from high-speed line in Q4.' **The FY27 H1 print is the binary inflection — if revenue +25%+ YoY with EBITDA margin >30%, the multiple holds; if revenue <+15%, multiple compresses.**",
            "**The ₹423 cr ($50M) pen injector order from a domestic pharma company (announced Feb 2026)** = single largest domestic contract win; represents ~3-4 years of supply at run-rate; signals Indian pharma's GLP-1/biologic device adoption is structural. Combined with **Orbicular Pharma launching generic semaglutide in Canada with Shaily's pen (May 2026)**, **ShailyPen Neo's USFDA TA + Health Canada + India approvals**, and **semaglutide launches in India via Lupin/Torrent partnership**, the regulatory + commercial validation is now indisputable.",
            "**FIIs +9.35 percentage points in one year (Mar-25 7.4% → Mar-26 16.7%)** — fastest institutional accumulation in any Indian midcap manufacturer; DIIs *reduced* by 3.6 pp (profit-booking after 1,100%+ 5-yr return). Ace investor **Ashish Kacholia holds 5.2% (his largest single-stock holding by value)**. **Promoter at 43.4% (stable; zero pledge) — Sanghvi/Shah family**. Promoter + FII + DII = ~70.7% (high institutional ownership for a midcap).",
            "**₹500 cr enabling resolution for fund-raise (approved 19 May 2026)** — not a commitment to raise; provides optionality for QIP/preferential to fund Abu Dhabi capex + innovator-pharma contract if won + semiconductor casings capex. **Note: company currently has ₹110 cr operating cash flow (FY26) + ₹250-300 cr internal accruals available + ₹177 cr borrowings (D/E 0.3x)** = could fund Abu Dhabi entirely from debt + internal accruals without dilution. Fundraise will likely be *opportunistic* (only if innovator contract closes).",
            "**Q4 FY26 segment estimate (mgmt didn't disclose Q4 segmental but inferred from 9M + FY26 trends):** Consumer ~₹110 cr (~46%, flat-to-down YoY on EU/US softness); Healthcare ~₹105 cr (~44%, growing 100%+ YoY); Industrial ~₹22 cr (~9%, growing 50%+ YoY on power tools + LED). **The 80M pen capacity is contractually pre-booked at ~80% utilisation via take-or-pay contracts** = FY27 healthcare revenue floor is high-visibility ~₹500-600 cr (vs FY26 ~₹400 cr).",
        ],
        patternDetected:
            "Revenue +8.7% YoY + EBITDA margin +271 bps YoY at 27.7% (full-year 29.0%, highest ever) + PAT +40% YoY + Healthcare +139% (now 40%+ of revenue) + pen capacity doubled to 80M + Abu Dhabi 75M facility announced + ₹423 cr domestic pharma order + Orbicular semaglutide Canada launch + ShailyPen Neo USFDA/Canada/India approvals + ROCE 29% (peaked 38% in Q3) — **pattern reading: \"consumer-segment slowdown is masking a textbook healthcare-platform inflection; Q4 *understates* underlying healthcare run-rate due to high-speed line still in qualification; FY27 H1 will reveal the *real* earnings power\"**. **3-yr profit CAGR 69% / TTM 83% + 5-yr stock CAGR 64% / 3-yr 119% = compounding rate sustainable IF pen volumes ramp 30M → 60M → 100M as guided.**",
        interpretation:
            "**FY26 was Shaily's coming-of-age year as a *drug-delivery-device IP company*, not just a precision plastics manufacturer.** Revenue +26% to ₹991 cr; EBITDA margin expanded 630 bps to 29% (highest ever); PAT +83% to ₹170 cr; ROCE 29%; pen capacity doubled from 40M to 80M units. **Healthcare contribution doubled to ~40% of revenue (from ~21%)** — this is the single most important business-quality shift. The journey from generic injection moulding to **proprietary pen-injector platforms (Harmony for variable-dose, Neo for fixed-dose, Axiom Max next-gen non-priming with dose counter)** has produced (a) USFDA TA + Health Canada + India approvals for ShailyPen Neo, (b) Orbicular Pharma launching generic semaglutide in Canada with Shaily's pen, (c) ₹423 cr domestic pharma pen-injector contract (Feb 2026), (d) co-marketing partnership with Lupin & Torrent for semaglutide India, (e) 65-75% share of first 6-8 Canada semaglutide filers, (f) Korean semiconductor casing supply agreement, (g) Abu Dhabi 75M-pen facility commissioned by Q4 FY28 (₹300-350 cr capex) for global pharma proximity. **The central FY27 question: will the 30M pen run-rate ramp to 50-60M+ as guided? If yes (mgmt: 'all expansion fully backed by take-or-pay contracts'), this is a structural growth story with 35-45% EPS CAGR for 3 years. If no (high-speed line further qualification delays, GLP-1 price-erosion >15%, US/EU launch slippage), the 73x P/E compresses to 45-55x = ₹1,800-2,200 downside.** **The asymmetric upside trigger is the *innovator-pharma GLP-1 contract*** (mgmt: 'this calendar year', 50-100M pens potential) — would re-rate the multiple to 80x+ on higher FY29-30 visibility = ₹4,000-4,500. **A binary-FY27 setup with strong base + huge optionality.**",
        whatWentRight: [
            "**FY26 record across all metrics + healthcare contribution doubled to 40% of revenue + pen capacity 40M → 80M + first major regulatory approvals for ShailyPen Neo (USFDA TA, Health Canada, India)** — Revenue +26% to ₹991 cr; EBITDA margin 29% (+630 bps YoY, highest ever); PAT +83% to ₹170 cr; ROCE 29%/peaked 38% Q3. **Healthcare segment +139% YoY** = the central re-rating engine working. Orbicular Pharma launched generic semaglutide in Canada with Shaily's pen platform (May 2026) — first commercial GLP-1 device launch — validates the entire 5-year strategy. **65-75% share of first 6-8 Canada semaglutide filers + Lupin/Torrent India co-marketing + ₹423 cr domestic pharma order (Feb 2026)** = multi-customer + multi-geography validation, not single-customer dependency.",
            "**Strategic capacity + capability moat being built — Abu Dhabi 75M-pen facility, Axiom Max next-gen GLP-1 device, semiconductor casing entry, COO appointment (Joe Kam ex-SHL Taiwan), take-or-pay contracts with 20-40% upfront advances** — Abu Dhabi (₹300-350 cr, Q4 FY28 commissioning) provides *business-continuity-plan* moat (mgmt: 'lost a large contract during Op Sindoor on geopolitical risk'); brings facility *closer to international clientele*; takes total capacity to 150M+ by FY29. **Axiom Max** (non-priming, dose counter, true fixed-dose) is positioned for innovator-pharma GLP-1 programs — 'this CY signing possible'. **Semiconductor casings** (Korean supply agreement, FY27 commercial start, 12-18 months scale-up) is a long-dated optionality at consumer-electronics scale ($300-600M revenue potential per Chinese peer benchmark). **Joe Kam appointment + Joe leading global healthcare ops** signals manufacturing-scale maturity.",
        ],
        whatWentWrong: [
            "**Consumer segment de-growth (FY26 Consumer flat-to-slightly-down YoY on EU/US home-furnishings demand softness; Q4 ~-15% YoY) + high-speed line qualification delay (originally Oct-25, now extending into Q1 FY27 with 30% rejection rate) + Q4 sequential revenue decline -5.5% QoQ** — Consumer ~46% of Q4 revenue is the *largest* segment by absolute size and is *not growing*; mgmt cannot predict EU/US rebound timing. **High-speed line at 30% rejection rate during qualification = full healthcare volume ramp is delayed by ~3-6 months** (mgmt now guides 'Q1 FY27 full normalisation'). Combined with semaglutide price erosion of 10-15% on large-volume contracts (vs initial pricing) + intense competition (15+ semaglutide filers globally) = revenue visibility in FY27 H1 is *less certain* than mgmt's confidence suggests.",
            "**Valuation premium leaves zero margin of safety — TTM P/E 73-76x vs peer median ~36x + EV/EBITDA 45x + P/B 17x + premium has stretched ahead of execution + 5-yr stock CAGR 64% / 3-yr 119% / 1Y +52% = elevated technical positioning** — DAM Capital initiated BUY @ ₹3,810 target (April 2026) but most other brokers (MOFSL, YES, JM) have lower targets. **Stock is currently ~5% off 52w high ₹2,847; +1,115% over 5 years; +985% over 3 years** = significant gains already in the price. **PEG 0.86** offers *some* comfort but assumes 80%+ EPS growth continues — *one quarter of disappointment* (Q1 FY27 revenue <+15% YoY or EBITDA margin <26%) could trigger 20-30% multiple compression = ₹1,800-2,000 zone before any fundamental concern crystallises. Working capital stretching (CCC 135 days FY26 vs 114 FY25 vs 81 FY24) + FCF only ₹38 cr FY26 = the *quality* of compounding is good but not stress-tested.",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "1. Healthcare — ~40% of FY26 revenue (vs ~21% FY25); the central re-rating engine",
                yoyGrowth: "**FY26: ~₹400 cr (+139% YoY); Q3: ₹104 cr (+139%); Q4 estimated ~₹100-110 cr** — healthcare segment alone contributed ~70% of incremental FY26 revenue",
                mix: "Largest growth segment; highest margins (~35%+ EBITDA); contract-locked via take-or-pay agreements; the entire investment thesis hinges here",
                analysis:
                    "**The structural inflection.** Pen injector platforms (Harmony variable-dose, Neo fixed-dose, Axiom Max next-gen) drive growth. **Pen capacity doubled 40M → 80M in FY26 (capex ~₹150 cr)**; Abu Dhabi 75M facility coming Q4 FY28 (₹300-350 cr). **Customer wins**: Orbicular Pharma generic semaglutide Canada launch (May 2026 — first commercial GLP-1 device launch); ₹423 cr domestic pharma pen-injector contract (Feb 2026); Lupin/Torrent India semaglutide co-marketing; 65-75% share of first 6-8 Canada semaglutide filers; 4 new GLP-1 customer wins in FY26 (per Q2 transcript); 2 new global pharma contracts in Q3. **Regulatory milestones**: ShailyPen Neo received USFDA TA, Health Canada, India approvals in Q4. **Innovator-pharma GLP-1 contract in *advanced* discussions** (mgmt: 'this CY', 50-100M pen optionality) = the asymmetric upside trigger.",
                triggers:
                    "(a) Pen volume ramp 30M → 50-60M+ in FY27 (mgmt: 'minimum 30M FY26 + ramp from H1 FY27'); (b) Innovator-pharma GLP-1 contract signing (this CY per mgmt) → 50-100M additional pen demand; (c) Abu Dhabi facility commissioning Q4 FY28 (180M+ pen total capacity); (d) Saroglitazar / Teriparatide / Liraglutide commercial launches expanding pen platform use cases; (e) ₹423 cr domestic contract execution starting FY27; (f) Axiom Max user-trials → innovator-pharma adoption.",
            },
            {
                name: "2. Consumer — ~46% of Q4 revenue; structurally largest segment, currently declining",
                yoyGrowth: "**FY26: ~₹520 cr (-1% YoY); 9M Consumer ₹409 cr (-1%); Q3: ₹123 cr (-13% YoY)** — full-year flat masking deeper sequential weakness",
                mix: "Largest segment by absolute size; lower margins (~25% EBITDA); EU/US home-furnishings (IKEA-style) + FMCG packaging + LED + toys (Spin Master)",
                analysis:
                    "**The drag.** EU + US home-furnishings demand softness through CY25-26 = end-customer pricing pressure + lower volumes. Toys (Spin Master) seasonal. FMCG packaging stable. **Mgmt: 'depends on Europe/US economy revival; very difficult to predict; could remain at current levels OR see further downside'**. **2 new home-furnishings customer wins** in earlier quarters supplying from Q1-Q2 FY26; **received new product mandate from existing home-furnishings customer in Q3** — but offset by volume drop on existing business. **India-US FTA + EU FTA when ratified could give India significant cost advantage** (tariff coming down from 50% to 18% per mgmt) = potential *structural* rebound but timing unclear. **IKEA hasn't yet signalled increased India sourcing** despite media reports per mgmt.",
                triggers:
                    "(a) EU/US economic recovery (timing uncertain — likely H2 CY26 at earliest); (b) India-US FTA ratification + India-EU FTA signing; (c) New home-furnishings customer wins ramping in FY27; (d) Tariff arbitrage advantage for India exporters post-FTAs; (e) Spin Master toy launches reviving (seasonal); (f) FMCG packaging steady; (g) Diversification into newer consumer categories.",
            },
            {
                name: "3. Industrial — ~10% of revenue; the small but accelerating segment",
                yoyGrowth: "**FY26: ~₹85-90 cr (+50%+ YoY); 9M Industrial ₹65 cr (+36% YoY); Q3: ₹23 cr (+87% YoY)** — fastest-growing segment after Healthcare",
                mix: "Smallest segment; mid-tier margins; power tools, LED lights, semiconductor casings (new)",
                analysis:
                    "**The hidden compounder.** Power tools (new client onboarded Q3 FY26 with commercial supplies started); LED lighting applications added Q3; **semiconductor casings: Korean supply agreement signed in Q4 FY26** = new vertical entry. **Semiconductor scale-up**: India has 4 fab plants coming up; Shaily in talks with all four; commercial supplies likely FY27 H2 onwards. **Mgmt benchmark: Chinese precision-plastics peers in consumer-electronics do $300-600M revenue annually** — Shaily targets similar long-term scale at high-margin segments only (high precision + small parts + high complexity). **Consumer electronics qualification cycle for an undisclosed major client expected to conclude end-Q4 FY26 / Q1 FY27** = potentially another large contract win imminent.",
                triggers:
                    "(a) Semiconductor fab commissioning timelines in India (CY27 commercial supply ramp); (b) Consumer electronics client qualification completion (end-Q4/Q1 FY27); (c) Power tools ramp with new client; (d) LED lighting applications expansion; (e) Long-term: scaling to Chinese peer benchmark ($300-600M revenue potential 5-7 yrs out); (f) Margin profile mid-way between consumer (25%) and healthcare (35%+) = positive mix shift over time.",
            },
        ],
        assessment: [
            "**Three-segment business with three distinct trajectories** — Healthcare (40% of revenue, +139% YoY, the inflection), Consumer (46%, flat-to-down, structural drag), Industrial (10%, +50% YoY, the optionality). **The dependence on Healthcare growth is *complete*** — if Healthcare grows 40% in FY27 (mgmt-guided), consolidated revenue grows ~17-20% (assuming Consumer flat, Industrial +50%). If Healthcare grows only 20%, consolidated growth drops to ~10% = multiple compression risk.",
            "**The pen-injector platform is the *proprietary IP moat*** that justifies the premium valuation — globally only ~4 players (Ypsomed, SHL, Owen Mumford, Shaily) supply at scale; Chinese entrants face IP-infringement issues; barriers include 3-5 year qualification cycles, regulatory approvals, take-or-pay contracts with capital advances. **Shaily's 65-75% Canada semaglutide filer share + Lupin/Torrent India partnership + ₹423 cr domestic order + Orbicular launch + ShailyPen Neo USFDA TA** = the moat is real and getting wider. **FY27 H1 execution determines whether the moat translates to operating cash flows at scale.**",
            "**Segment quality verdict: HIGH-CONVICTION HEALTHCARE PLATFORM WITH FY27 EXECUTION RISK.** The strategic positioning is among the best in Indian midcap manufacturing — 4-player global oligopoly, take-or-pay contracts, USFDA-approved devices, GLP-1 mega-trend tailwind, innovator-pharma optionality, semiconductor optionality. **But the valuation premium (P/E 73x) prices in *flawless* execution on pen-volume ramp**; any 1-2 quarter slippage = significant multiple de-rating.",
        ],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            {
                metric: "1. Pen Manufacturing Capacity Ramp — Million Units/Year (the master metric)",
                current: "**80M end-FY26 (40M start of year); 30M pens supplied FY26 (~38% utilisation); both new lines ramping in FY27 H1**",
                trend: "Mgmt: 'Q1 FY27 full normalisation; 80M India capacity contractually backed by take-or-pay; 50-60% utilisation by FY27 end'; Abu Dhabi 75M facility Q4 FY28 commissioning",
                horizon: "FY27: 50-60M pens supplied (66-75% India utilisation); FY28: 70-80M+ (India near peak); **FY29: 130-150M with Abu Dhabi ramp**",
                remarks:
                    "**Each million-pen incremental supply at $6-8 COGS pricing = ~₹70-90 cr revenue at ~35% gross margin = ~₹25-30 cr EBITDA contribution.** Going from 30M (FY26) → 60M (FY27) = ₹1,800-2,400 cr cumulative pen revenue addition over 2 years at ₹500-700 cr/yr run-rate addition. **Single largest P&L driver — every other metric flows from here.** Risk: high-speed line qualification delays already pushed volumes from Q3 to Q4 to Q1 FY27.",
            },
            {
                metric: "2. ₹423 cr Domestic Pharma Pen-Injector Contract (Feb 2026 win)",
                current: "**₹423 cr ($50M) order win announced 25 Feb 2026 — single largest domestic contract**",
                trend: "Supplies likely starting FY27 H1; multi-year contract; represents ~₹100-150 cr/yr revenue run-rate over 3-4 years",
                horizon: "FY27-30: ~₹100-150 cr annual contribution; ramp-up profile typical of 2-year scale-up cycle",
                remarks:
                    "**Validates Indian pharma's GLP-1 / biologic device adoption is now structural** — combined with Lupin/Torrent semaglutide co-marketing means *multiple* Indian pharma customers using Shaily devices. **Take-or-pay structure means 80% minimum volume guarantee** = high revenue visibility. Indian pharma is *also* in early innings of GLP-1 / biologics = multi-year tailwind.",
            },
            {
                metric: "3. Innovator-Pharma GLP-1 Contract (asymmetric upside trigger)",
                current: "**'Advanced stage discussions' on 2 innovator-pharma GLP-1 programs per Q3 mgmt; targeted signing 'this calendar year'**",
                trend: "Mgmt: 'minimum 50M to 100M pens potential for innovators'; 2-3 year lead time to launch from signing",
                horizon: "**Signing FY27; launch FY30-31; peak revenue FY32+ = ₹4,000-7,000 cr cumulative over 5-7 years post-launch**",
                remarks:
                    "**The single biggest re-rating catalyst.** Innovator-pharma deals involve global brands (Novo Nordisk, Eli Lilly, Pfizer-tier) with **significantly higher unit economics** than generic pen contracts (innovator typically pays 30-50% premium for differentiated devices like Axiom Max). **Axiom Max** (non-priming, dose counter, true fixed-dose, 96% of users don't prime — clinical study insight) is positioned exactly for innovator-pharma next-gen GLP-1 programs. **If signed: stock could re-rate to 80-90x P/E on higher FY29-30E visibility = ₹4,000-4,500.**",
            },
            {
                metric: "4. Healthcare Segment Revenue Growth — 30-40% annual CAGR (mgmt guide)",
                current: "**FY26: ~₹400 cr (+139% YoY)**; mgmt: '30-40% annual growth for next few years'",
                trend: "Pen volume ramp + new GLP-1 launches (Brazil, Turkey, Middle East Q1-Q2 FY27) + Liraglutide + Teriparatide + biosimilars + insulin pens",
                horizon: "FY27: ₹550-600 cr (+35-50%); FY28: ₹750-850 cr; FY29: ₹1,000+ cr (with Abu Dhabi)",
                remarks:
                    "**The most reliable engine of compounding for FY27-29.** Take-or-pay contracts + capacity pre-booked + multi-customer + multi-geography. **Each ₹100 cr healthcare revenue = ~₹35 cr EBITDA at 35%+ margin** = ~₹25 cr PAT at 25% PAT margin. **FY28 healthcare revenue at ₹800 cr alone = ₹200 cr EBITDA contribution** vs FY26 consolidated EBITDA ₹287 cr.",
            },
            {
                metric: "5. Semiconductor Casings + Consumer Electronics (long-dated platform optionality)",
                current: "**Semiconductor: Korean supply agreement signed Q4 FY26; consumer electronics qualification near completion end-Q4 / Q1 FY27**",
                trend: "Semiconductor commercial supplies start FY27 H2; consumer electronics commercial supplies FY27 if qualification completes",
                horizon: "FY27: ₹20-50 cr contribution; FY28-29: ₹100-200 cr; **FY30+: $300-600M revenue potential per Chinese peer benchmark**",
                remarks:
                    "**The 'second-leg-up' optionality.** Semiconductor casings have high entry barriers (must be near fab) = limited competition; 4 Indian fabs commissioning CY27 = total addressable market opening up. Consumer electronics qualification (likely a global Apple/Samsung-tier supplier per market chatter) = recurring high-margin business if won. **Margin profile better than home furnishings but lower than healthcare** = positive mix shift even if scale doesn't reach Chinese peer benchmark. **Capex plan being finalised; could trigger another ₹200-400 cr investment cycle in FY28-30.**",
            },
        ],
        demandSignals: [
            {
                signal: "GLP-1 demand growth (the global mega-trend)",
                reading:
                    "**Demand for GLP-1 pens 'exceptionally high'; customers 'breathing down our necks for supply'; demand outstripping supply globally for next 12-18 months.** Wegovy/Ozempic global supply still constrained; 15+ generic filers globally for semaglutide; Canada/Brazil/India/Turkey/Middle East all launching Q1-Q2 FY27. **Oral GLP-1 (Rybelsus) has small market share but doesn't displace injectable demand** (oral has lower bioavailability, more side effects). Innovator-pharma next-gen GLP-1 programs (oral + weekly + monthly) = additional demand layer.",
                verdict: "Robust",
            },
            {
                signal: "Customer engagement + new contract wins",
                reading:
                    "**FY26: 4 new GLP-1 customers signed (Q2) + 2 new global pharma contracts (Q3) + ₹423 cr domestic pharma order (Feb 2026) + 2 new home-furnishings customers + new power tools client**. ShailyPen Neo received USFDA TA + Health Canada + India approvals = customer onboarding accelerates. **Innovator-pharma 'advanced stage' discussions on 2 programs**.",
                verdict: "Strong",
            },
            {
                signal: "Capacity utilisation + ramp visibility",
                reading:
                    "**India capacity 80M end-FY26 (was 40M start); ~38% utilisation at 30M supplied; 50-60M target for FY27 = 60-75% utilisation. All India expansion fully backed by take-or-pay contracts. Abu Dhabi 75M facility 50-60% pre-booked.** High-speed line qualification at 30% rejection rate = ongoing technical issue but expected resolution Q1 FY27. **Customer concentration risk: top 4-5 pharma customers likely contribute 70%+ of healthcare revenue** (typical for pen-platform business).",
                verdict: "Strong",
            },
            {
                signal: "Competitive intensity",
                reading:
                    "Globally only **4 main pen manufacturers at scale: Ypsomed, SHL, Owen Mumford, Shaily**. Chinese entrants face IP-infringement constraints → limited to non-regulated markets. Indian peers (none at meaningful scale in pen platforms). **65-75% share of first 6-8 Canada semaglutide filers + India dominance + ShailyPen Neo USFDA approvals** = competitive moat widening. **Pricing pressure: 10-15% erosion on large-volume contracts** (less than mgmt initially feared); stabilises after first 24 months of supply.",
                verdict: "Strong",
            },
            {
                signal: "Consumer segment demand (home furnishings + toys)",
                reading:
                    "**EU + US demand softness through CY25-26 = volume declines on existing customers**; new home-furnishings customers onboarded but offsetting only partially. IKEA-style demand uncertain. Toys (Spin Master) seasonal. **India-US FTA (tariff 50% → 18%) and India-EU FTA when ratified could trigger structural shift** but timing unclear. **Mgmt: 'difficult to predict, could remain at current levels or further downside'.**",
                verdict: "Weak",
            },
            {
                signal: "Industrial + new verticals (semiconductor, consumer electronics)",
                reading:
                    "**Industrial +50%+ YoY in FY26; semiconductor Korean supply agreement signed; consumer electronics qualification near completion**. India fab commissioning CY27 = TAM opening. **Mgmt: 'highly scalable opportunity; Chinese peers do $300-600M revenue'**. Capex plan being finalised.",
                verdict: "Strong",
            },
        ],
        demandVerdict:
            "**Demand environment is GREEN on the healthcare engine (which is the central re-rating story) + GREEN on industrial new-verticals + WEAK on consumer.** The mix is shifting fast enough (Healthcare 21% → 40% in 12 months) that consumer weakness no longer dictates outcomes. **The 180-day visibility for FY27 H1 healthcare ramp is the dominant variable** — if Q1 FY27 pen supplies hit 12-15M run-rate (vs ~7-8M Q4 FY26), the multi-year compounding thesis is confirmed; if <10M, multiple compresses materially. **GLP-1 demand globally is structurally tight for next 12-18 months** = pricing remains favourable; volume risk is *Shaily's own qualification timeline*, not end-market.",
        whatWentRight: [
            "**Healthcare segment as the *re-rating* engine is *demonstrably* working — FY26 +139% YoY; share of revenue doubled from 21% to 40%; first commercial GLP-1 device launch (Orbicular Canada May 2026); USFDA TA for ShailyPen Neo; ₹423 cr domestic pharma contract; 65-75% Canada semaglutide filer share**. Combined with **80M pen capacity (doubled) + Abu Dhabi 75M facility commissioning Q4 FY28 + Axiom Max next-gen device + innovator-pharma 'advanced discussions'** = the moat-deepening + capacity-expansion + customer-acquisition flywheel is intact for FY27-30.",
            "**Strong balance sheet preserved through capex cycle — D/E 0.3x; Net Debt/EBITDA <1x; ROCE 29% (peaked 38% Q3); FIIs +9.4 pp YoY**. ₹500 cr enabling resolution = optionality without commitment. **Take-or-pay contracts with 20-40% upfront advances** = capacity capex partly customer-funded; FCF positive ₹38 cr in FY26 (first time in 4 years) despite ₹150 cr pen-capacity capex. **No dilution risk in next 12-18 months** unless innovator-pharma contract requires accelerated Abu Dhabi build-out.",
        ],
        whatWentWrong: [
            "**High-speed pen line qualification at 30% rejection rate (vs target 5-10%) is delaying healthcare volume ramp from Q3 → Q4 → Q1 FY27; combined with consumer-segment EU/US softness causing Q4 sequential revenue decline -5.5% QoQ + cash conversion cycle stretched to 135 days (vs 114 FY25 / 81 FY24)** — the *quality* of compounding has some yellow flags. **FCF only ₹38 cr** on PAT ₹170 cr = ~22% conversion (lower than ideal 70-80% for mature business); explained by inventory + receivables build during capacity expansion + advances received accounting. **Q1 FY27 will be the binary checkpoint** — pen supplies <10M would crater the multiple.",
            "**Consumer segment (~46% of Q4 revenue) is structurally declining with no visible catalyst — mgmt cannot predict EU/US rebound; FTAs are uncertain; IKEA hasn't increased India sourcing despite media reports; existing-customer volume drops offset new-customer wins**. **A further 10-15% decline in Consumer would erase 4-6% of consolidated revenue growth** = healthcare growth needs to compensate. **Mgmt: 'could remain at current levels OR see further downside; very difficult to say'** = honest but unsettling for a company trading at 73x P/E.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            {
                metric: "FY27 Pen Volume Supplies (the master KPI)",
                current: "FY26: ~30M pens supplied; capacity 80M",
                target:
                    "**FY27: 50-60M+ pens (mgmt Q3: 'Q1 FY27 full normalisation + ramp throughout year'; capacity contractually pre-booked via take-or-pay)** = **+₹2,000-2,400 cr cumulative pen revenue over FY27-28** at $6-8/unit. Single largest revenue lever.",
            },
            {
                metric: "Healthcare Segment Revenue Growth",
                current: "FY26: ~₹400 cr (+139% YoY)",
                target:
                    "**'30-40% annual growth for next few years'** = FY27 ₹520-560 cr; FY28 ₹680-780 cr; FY29 ₹900-1,090 cr (with Abu Dhabi). Healthcare share of revenue rises from 40% → 55-60% by FY29.",
            },
            {
                metric: "EBITDA Margin Trajectory",
                current: "FY26: 29% (highest ever); Q4: 27.7%",
                target:
                    "**Mgmt Q3: 'Q1 FY27 healthcare margins normalise back to 35%+'**; healthcare share rising → consolidated margin expands; expect **FY27 consolidated EBITDA margin 30-32%**; FY28 32-34% as Abu Dhabi ramp-up dilutes initially then turns accretive. Each 100 bps margin = ~₹13-15 cr EBITDA on FY27E revenue ₹1,300-1,400 cr.",
            },
            {
                metric: "Capex + Capacity (180M+ pen capacity by FY29)",
                current: "FY26 capex ~₹150 cr (India 40M→80M); D/E 0.3x; gross borrowings ₹177 cr",
                target:
                    "**Abu Dhabi: ₹300-350 cr capex over FY27-28 for 75M pen capacity (commissioning Q4 FY28)**; possible additional ₹200-300 cr if innovator-pharma contract signs; semiconductor casings capex TBD (plan being finalised). **Funding: mix of internal accruals (₹250-300 cr/yr operating cash flow), debt (₹150-200 cr additional), and ₹500 cr enabling resolution (used opportunistically)**.",
            },
            {
                metric: "Strategic Wins + Optionality",
                current: "₹423 cr domestic order signed Feb 2026; Orbicular Canada launch May 2026; ShailyPen Neo USFDA TA",
                target:
                    "**Innovator-pharma GLP-1 contract: 'this calendar year' (CY26) per mgmt** = 50-100M pen optionality, 2-3 year lead time to launch. **Semiconductor casings commercial supplies FY27 H2** (India fabs commissioning CY27). **Consumer electronics qualification completion Q1 FY27 → commercial supplies if won**. **2-3 high-impact contract announcements over next 12 months** likely.",
            },
        ],
        commitmentNote:
            "**Mgmt has *over-delivered* on FY26 guidance — original FY26 H1 guide was 'Healthcare to grow 30-40% annually for next few years'; FY26 actual +139% (4x guidance)**. Combined with 40M → 80M pen capacity completion + ShailyPen Neo USFDA TA + Orbicular Canada launch + ₹423 cr domestic order + Abu Dhabi facility announcement = **mgmt-credibility is at multi-year high**. **However, FY27 H1 print is the *next* credibility test** — high-speed line qualification *must* normalise; pen supplies *must* ramp to 12-15M/quarter; Q1 FY27 EBITDA margin *must* hold 28-30%. **Watch: Q1 FY27 (Aug 2026 results) — pen volumes (expect ~12-15M; if <10M = problem) + Healthcare segment revenue (expect ₹130-160 cr; if <₹120 cr = problem) + EBITDA margin (expect 28-30%; if <26% = problem)**. **The innovator-pharma signing is the asymmetric upside trigger — could re-rate the multiple from 73x to 90x+ = ₹4,500-5,000 within 12 months**.",
        growthDrivers: [
            {
                driver: "1. Pen Volume Ramp 30M → 50-60M → 100M (FY27-29)",
                impact:
                    "Each 10M incremental pens = ~₹700-900 cr revenue at ₹70-90/unit ASP × 35% gross margin × 25% PAT margin = ~₹50-70 cr incremental PAT. **FY26 30M → FY28 80M = ₹3,500-4,500 cr cumulative healthcare revenue over 3 years; ~₹350-450 cr cumulative PAT addition**. *Single largest P&L lever for entire investment thesis.*",
            },
            {
                driver: "2. Innovator-Pharma GLP-1 Contract (asymmetric upside)",
                impact:
                    "If signed CY26: 50-100M pen volume commitment over 5-7 years; **innovator typically pays 30-50% premium** over generic pricing for differentiated devices like Axiom Max = $9-12/unit ASP vs $6-8 for generics. **Could add ₹1,500-3,500 cr cumulative revenue over FY30-35** + multiple re-rating impact. *The single biggest re-rating catalyst.*",
            },
            {
                driver: "3. Abu Dhabi 75M Pen Facility (FY28 commissioning)",
                impact:
                    "Capex ₹300-350 cr → FY29 ₹500-700 cr incremental revenue capacity at maturity. **Strategic moat (business-continuity-plan) + tax-advantaged structure + proximity to international clientele** = could attract additional innovator-pharma contracts not winnable from India location. **50-60% pre-booked via take-or-pay** at announcement = de-risked.",
            },
            {
                driver: "4. Semiconductor Casings + Consumer Electronics (long-dated optionality)",
                impact:
                    "Semiconductor: ₹20-50 cr FY27 → ₹100-200 cr FY29 → **$300-600M potential by FY32+** per Chinese peer benchmark. Consumer electronics qualification near completion = potential global Apple/Samsung-tier supplier win → **₹150-300 cr/yr recurring revenue at mid-tier margins**. *Reduces dependence on healthcare alone for diversification at scale.*",
            },
            {
                driver: "5. Operating Leverage + Margin Expansion (Healthcare mix-up)",
                impact:
                    "Healthcare share rising from 40% (FY26) to 55-60% (FY29) at 35%+ gross margin (vs Consumer ~25%) = **consolidated EBITDA margin expansion from 29% to 32-34% over 3 years** = each 100 bps = ₹15-20 cr incremental EBITDA on FY28-29E revenue. **Cumulative margin expansion over FY27-29 ~₹100-150 cr incremental EBITDA** purely from mix.",
            },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            {
                title: "Healthcare +139% YoY in FY26 + Orbicular Canada semaglutide launch + ShailyPen Neo USFDA TA — the platform is *commercially* validated",
                body:
                    "Healthcare segment revenue +139% YoY in FY26 (to ~₹400 cr from ~₹170 cr); share of consolidated revenue doubled from ~21% to ~40%. **Orbicular Pharma launched generic semaglutide in Canada with Shaily's pen platform (May 2026)** = the *first commercial GLP-1 device launch* validating 5+ years of investment. **ShailyPen Neo received USFDA Type Approval + Health Canada + India approvals in Q4** = customer onboarding accelerates dramatically. Combined with **65-75% share of first 6-8 Canada semaglutide filers** = competitive moat now demonstrable, not theoretical.",
            },
            {
                title: "₹423 cr domestic pharma pen-injector contract (Feb 2026) + Lupin/Torrent India semaglutide partnership = multi-customer Indian pharma traction",
                body:
                    "**₹423 cr ($50M) single largest domestic order from major Indian pharma company** for pen injectors — represents ~3-4 years of supply, take-or-pay structure, supplies likely starting FY27 H1. **Combined with Lupin/Torrent semaglutide co-marketing partnership for India** = multiple Indian pharma customers committed to Shaily's pen platform. Indian pharma is in *early innings* of GLP-1 / biologic device adoption = multi-year tailwind. **Demonstrates that Shaily's platform isn't dependent on US/Canada generic launches alone**.",
            },
            {
                title: "Pen capacity 40M → 80M (FY26) → 150M+ (FY29 with Abu Dhabi) — capacity moat being built ahead of demand",
                body:
                    "India capacity doubled in FY26 with ₹150 cr capex; **Abu Dhabi 75M pen facility announced Q3 FY26, commissioning Q4 FY28 (₹300-350 cr capex)** = total 150M+ by FY29. **All India expansion fully backed by take-or-pay contracts; Abu Dhabi 50-60% pre-booked at announcement**. Strategic rationale: **(a) business-continuity-plan for global pharma customers (lost a contract during Op Sindoor due to geopolitical risk concern); (b) proximity to international clientele; (c) tax-advantaged structure; (d) lower import dependency on resin/equipment**.",
            },
            {
                title: "Axiom Max next-gen device + innovator-pharma 'advanced discussions' on 2 GLP-1 programs (CY26 signing potential)",
                body:
                    "**Axiom Max: non-priming, dose counter, true fixed-dose** — designed for next-gen GLP-1s and innovator-pharma programs. Key user-research insight: **96% of users don't prime existing devices = systematic under-dosing risk**; Axiom Max eliminates this. Mgmt Q3: 'advanced stage discussions with 2 innovator-pharma GLP-1 programs; could sign this calendar year'. **Innovator contract = 50-100M pens optionality over 5-7 years + 30-50% pricing premium + multiple re-rating to 85-90x P/E** = single biggest asymmetric upside trigger.",
            },
            {
                title: "Industrial segment +50%+ YoY (FY26) + semiconductor casings Korean supply agreement + consumer electronics qualification near completion",
                body:
                    "Industrial segment FY26 ~₹85-90 cr (+50% YoY); Q3 ₹23 cr (+87% YoY). **Korean semiconductor casing supply agreement signed Q4 FY26** = entry into new high-margin vertical; India fabs commissioning CY27 = TAM opening. **Consumer electronics qualification near completion (end-Q4 / Q1 FY27)** = potentially major global supplier win imminent. **Long-term: Chinese precision-plastics peers in consumer electronics do $300-600M revenue annually** = Shaily has explicit *scale* aspiration via these verticals.",
            },
        ],
        bearish: [
            {
                title: "TTM P/E 73-76x vs peer median ~36x + EV/EBITDA 45x = zero margin of safety on valuation",
                body:
                    "Stock at ₹2,695 (Screener 22 May 2026 close) — TTM P/E 73x, EV/EBITDA 45x, P/B 17x, PEG 0.86. **Peer median: Supreme 45x, Astral 70x, Garware 38x, Finolex 20x, Time Tech 19x = ~36x average**. Shaily justified premium via FY27-29E 35-45% EPS CAGR but **1Y stock +52%, 3Y +985%, 5Y +1,115%** = exceptional gains already priced in. **PEG 0.86 only works if EPS CAGR remains 80%+** = single quarter of disappointment (Q1 FY27 revenue <+15% YoY or EBITDA <26%) could trigger 20-30% multiple compression to ₹1,800-2,200.",
            },
            {
                title: "High-speed pen line qualification at 30% rejection rate — healthcare volume ramp delayed Q3 → Q4 → Q1 FY27",
                body:
                    "Mgmt Q3 explicit: 'high-speed line still in qualification; running at 60-70 parts/minute vs target 80; getting 30% rejection — typical for new lines but taking longer than expected; should be resolved last stage'. **Originally targeted Oct 2025 commissioning; now slipped to Q1 FY27 full ramp**. Combined with **Q4 FY26 sequential revenue decline -5.5% QoQ** = visible execution friction. **Q1 FY27 print is binary checkpoint** — if pen supplies <10M (vs expected 12-15M), entire compounding narrative gets challenged + 30% downside to ₹1,800.",
            },
            {
                title: "Consumer segment (~46% of Q4 revenue) is structurally declining with no visible recovery catalyst",
                body:
                    "FY26 Consumer flat-to-down YoY (~₹520 cr); Q3 -13% YoY at ₹123 cr; Q4 likely similar trajectory. **Mgmt: 'EU/US economy revival timing very difficult to predict; could remain at current levels OR further downside'**. India-US FTA (50% → 18% tariff) + India-EU FTA could provide *eventual* relief but **ratification timeline uncertain (likely H2 CY26 at earliest)**. IKEA hasn't actually increased India sourcing despite media reports per mgmt. **A further 10-15% Consumer decline = erases 4-6% of consolidated revenue growth** = puts pressure on Healthcare to over-deliver vs guidance.",
            },
            {
                title: "Cash conversion cycle stretched to 135 days (vs 114 FY25 / 81 FY24); FCF only ₹38 cr on PAT ₹170 cr = 22% conversion",
                body:
                    "Working capital build during capacity expansion: receivable days 79 (vs 80 FY25 — stable), but **inventory days 129 (vs 121); payable days 74 (vs 87) = net 135-day CCC**. **FCF positive ₹38 cr FY26 (first positive year in 4 years) but vs PAT ₹170 cr = only 22% FCF/PAT conversion** (mature business should be 70-80%). Explained by: (a) inventory build for FY27 pen ramp + new product launches, (b) longer-cycle customer payments on healthcare contracts, (c) ₹150 cr capex absorbed in invested capital. **Will improve as healthcare scales and consumer business stabilises; not improving fast enough to ignore.**",
            },
            {
                title: "Semaglutide price erosion 10-15% on large-volume contracts + competitive intensity from 15+ generic filers + ASP pressure for next 24 months",
                body:
                    "Mgmt Q3 explicit: '10-15% price erosion seen on large-volume semaglutide pen pricing vs initial quotes; will likely continue for first 24 months of supply before stabilising'. **15+ semaglutide generic filers globally** = end-market price competition translating to device pricing pressure. **Each 5% additional erosion = ~₹40-50 cr revenue impact at 60M pen run-rate**. Mitigation: differentiated Axiom Max for innovator-pharma (30-50% premium); semiconductor + consumer-electronics diversification; long-term scale economics. **But over the next 24 months, healthcare ASP will see headwinds while volume ramp is the offset** — execution risk on net realisation.",
            },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text:
                "**FY26 was Shaily's *commercial validation* year as a drug-delivery-device IP company — Healthcare +139% YoY, share of revenue doubled to ~40%, Orbicular Canada semaglutide launch (first commercial GLP-1 device), ShailyPen Neo USFDA TA + Health Canada + India approvals, ₹423 cr domestic pharma order, 65-75% Canada semaglutide filer share, FY26 PAT +83% to ₹170 cr (highest ever), ROCE 29%**. The platform moat is now *demonstrable*, not theoretical.",
            impact: "strengthens",
        },
        {
            text:
                "**FY27 H1 is the binary execution checkpoint — high-speed pen line qualification *must* normalise + pen supplies *must* ramp 30M → 50-60M (mgmt-guided) + Healthcare segment *must* deliver 30-40% growth**. Q1 FY27 print (Aug 2026 results): pen volumes 12-15M expected; healthcare revenue ₹130-160 cr expected; EBITDA margin 28-30% expected. **Any 1-2 quarter slippage = 20-30% multiple compression to ₹1,800-2,200**.",
            impact: "neutral",
            note: "binary FY27 H1 outcome",
        },
        {
            text:
                "**Asymmetric upside trigger: innovator-pharma GLP-1 contract signing in CY26** — mgmt: 'advanced stage discussions on 2 programs; could sign this calendar year'. Innovator contracts = **50-100M pen optionality + 30-50% premium pricing + 5-7 year visibility + multiple re-rating to 85-90x**. If signed, stock could move to ₹4,000-4,500 (DAM Capital target ₹3,810 already factors *some* of this). Axiom Max next-gen device + 4 inhouse GLP-1 customer wins in FY26 = positioned to win.",
            impact: "strengthens",
        },
        {
            text:
                "**Three-leg long-term moat: (1) Healthcare pen platform — global oligopoly of 4 players, IP-protected, take-or-pay contracts, multi-year customer relationships; (2) Abu Dhabi 75M-pen facility (Q4 FY28) — business-continuity-plan + international clientele proximity + 150M+ total capacity by FY29; (3) Semiconductor + consumer electronics — long-dated $300-600M potential per Chinese peer benchmark, Korean supply agreement signed, India fabs commissioning CY27**. **Promoter 43.4% (zero pledge), FIIs +9.4pp YoY at 16.7%, Ashish Kacholia 5.2% — institutional conviction strong.**",
            impact: "strengthens",
        },
        {
            text:
                "**Stock at ₹2,695 (TTM P/E 73x; Book ₹156; ROE 27%; D/E 0.3x; FCF +₹38 cr).** Valuation: TTM P/E 73x vs peer median 36x = 2x premium justified *only* if FY27-29E 35-45% EPS CAGR sustains. **Bear case ₹1,800-2,000 (FY27 H1 disappoints + multiple to 55x); Base case ₹3,000-3,500 (FY27 +35% EPS at 55-60x P/E on FY28E); Bull case ₹4,000-4,800 (Innovator-pharma signing + 85-90x P/E on FY29E)**. Asymmetric: ~-25% downside / +50-80% upside over 12-24 months. **Verdict: ACCUMULATE on dips ₹1,900-2,200 (best value); HOLD at current ₹2,500-2,800; PARE if >₹3,200 *before* innovator signing**.",
            impact: "neutral",
            note: "premium valuation, execution-driven",
        },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        /* Q1 — Is the core investment thesis intact? */
        thesisIntact: {
            verdict: "Yes — healthcare-platform inflection is *commercially demonstrated*; FY27 H1 execution is the only near-term variable",
            reasons: [
                "**The drug-delivery-device IP company thesis is now *commercially* demonstrated, not theoretical** — Orbicular Pharma launched generic semaglutide in Canada with Shaily's pen platform (May 2026) = the *first commercial GLP-1 device launch*; ShailyPen Neo received USFDA Type Approval + Health Canada + India approvals; ₹423 cr domestic pharma pen-injector contract; 65-75% share of first 6-8 Canada semaglutide filers; Lupin/Torrent India co-marketing partnership; 4 new GLP-1 customer wins in FY26 + 2 new global pharma contracts in Q3. **5+ years of capacity + IP + regulatory investment is now monetising.**",
                "**FY26 financial print validates the operating leverage story — Revenue +26% to ₹991 cr; EBITDA margin 29% (highest ever, +630 bps YoY); PAT +83% to ₹170 cr; ROCE 29% (peaked 38% Q3); FCF +₹38 cr (first positive in 4 years)**. Healthcare contribution doubled from 21% to 40% in 12 months = the mix-shift driving consolidated margin expansion + ROCE re-rating. **3-yr profit CAGR 69% / TTM 83%** = compounding rate among the highest in Indian midcap manufacturing.",
                "**The competitive moat is real and getting wider — globally only 4 pen-platform players at scale (Ypsomed, SHL, Owen Mumford, Shaily); Chinese entrants face IP-infringement constraints in regulated markets; 3-5 year customer qualification cycles + take-or-pay contracts + 20-40% upfront advances + capacity commitments = structural barriers to entry**. Combined with **ShailyPen Neo USFDA TA + Axiom Max next-gen device + Abu Dhabi 75M-pen facility + 65-75% Canada generic filer share** = the moat is positioned to *deepen* over FY27-29.",
                "**Multiple long-term optionalities provide diversification at scale — Abu Dhabi facility (Q4 FY28), innovator-pharma GLP-1 contract (CY26 advanced discussions), semiconductor casings (Korean supply agreement, FY27 H2 commercial start), consumer electronics qualification (Q1 FY27 completion), Axiom Max innovator platform**. **Each provides 5-10 year revenue layering that *isn't* in current FY27-28 valuation** = embedded option value beyond the base case.",
                "**Risk to thesis = if FY27 H1 prints reveal pen volumes <10M/quarter (vs expected 12-15M), Healthcare revenue <₹120 cr/quarter (vs expected ₹130-160 cr), EBITDA margin <26% (vs expected 28-30%), OR consumer segment declines >15% YoY further**. **Strengthens if** Innovator-pharma GLP-1 signing in CY26, semiconductor commercial supplies starting FY27 Q2, consumer electronics client win confirmed, Abu Dhabi on schedule.",
            ],
        },

        /* Q2 — Re-rate triggers + probability */
        rerateTriggers: [
            {
                trigger: "Innovator-pharma GLP-1 contract signing in CY26 (the asymmetric upside catalyst)",
                probability: "Medium",
                rationale:
                    "Mgmt Q3 explicit: 'advanced stage discussions on 2 innovator-pharma GLP-1 programs; could sign this calendar year'. Axiom Max device specifically positioned for innovator-pharma (non-priming, dose counter, true fixed-dose). **If signed: 50-100M pen optionality over 5-7 years + 30-50% premium pricing vs generics ($9-12/unit vs $6-8) + multiple re-rates to 85-90x on FY29-30E visibility = stock to ₹4,000-4,500 = +50-65% from ₹2,695**. **Risk: discussions could slip to FY27 or fail to convert** = 12-month timeline uncertain.",
            },
            {
                trigger: "Q1 FY27 print: Pen volumes 12-15M + Healthcare revenue ₹130-160 cr + EBITDA margin 28-30%",
                probability: "Medium-High",
                rationale:
                    "Mgmt Q3 explicit: 'Q1 FY27 will show full normalisation; high-speed line qualification last stage; running at 60-70 parts/minute now'. High-speed line at 30% rejection rate is the only known friction. **If Q1 delivers on all 3 metrics, confirms FY27 35-45% EPS CAGR is on track; multiple holds at 65-75x** = stock to ₹3,200-3,500 by end-FY27 (+18-30%). **If Q1 disappoints (pen volumes <10M OR healthcare revenue <₹120 cr OR EBITDA margin <26%), multiple compresses to 50-55x = ₹1,800-2,200 (-18-33%)**.",
            },
            {
                trigger: "Abu Dhabi facility commissioning on schedule (Q4 FY28) + 50-60% pre-booking maintained",
                probability: "High",
                rationale:
                    "Abu Dhabi: ₹300-350 cr capex; 75M pen capacity; mgmt explicit '50-60% capacity pre-booked at announcement; expect fully backed by contracts in 18 months'. **Adds ₹500-700 cr annual revenue capacity at maturity**. Strategic moat: business-continuity-plan + international clientele proximity + tax-advantaged structure. **If on schedule + fully booked, would justify multiple expansion to 80-85x on FY30E earnings = ₹3,500-4,200**. Risk: construction delays in foreign jurisdiction; mgmt mitigation via Abu Dhabi government discussions for financial support.",
            },
            {
                trigger: "Semiconductor casings + consumer electronics scale-up (FY27-29)",
                probability: "Medium",
                rationale:
                    "Korean semiconductor supply agreement signed Q4 FY26; India fabs commissioning CY27 = commercial supplies likely FY27 H2 onwards. Consumer electronics qualification near completion (Q1 FY27). **Chinese peers do $300-600M revenue in similar segments** = long-term scale potential. **If semiconductor scales to ₹100-200 cr by FY29 + consumer electronics win confirms ₹150-300 cr recurring**, this provides *diversification at scale* beyond healthcare = re-rates multiple by 5-10x. **Visible over 24-36 months, not immediate.**",
            },
            {
                trigger: "DAM Capital and other broker upgrades + index inclusion potential",
                probability: "Medium",
                rationale:
                    "**DAM Capital initiated BUY @ ₹3,810 target in April 2026 (+41% from ₹2,695)** = first major broker on board. MOFSL, YES Securities, JM Financial all cover. **FII holding +9.4 pp YoY to 16.7% (one of fastest in Indian midcap)** = institutional momentum building. **At market cap ₹12,500 cr, eligibility for index inclusion (Nifty Midcap 100, Nifty 200) is approaching** = passive inflows could add 2-3% support. **If 2-3 more brokers initiate at ₹3,500+ targets in next 6 months, sentiment + flows could push stock to ₹3,200-3,500 even before fundamental triggers play out**.",
            },
        ],

        /* Q3 — Upside if guidance fully met */
        upsideIfGuidanceMet: {
            currentPrice: "₹2,695 (NSE close 22 May 2026 per Screener.in; intraday 20 May reached ₹2,733; 52w-high ₹2,847 on 15 May)",
            targetPrice: "₹3,200 – ₹4,000",
            upsidePct: "+19% to +48%",
            horizon: "12-24 months (FY27-28 P/E-multiple basis with healthcare ramp + innovator-pharma signing optionality)",
            assumptions:
                "**Base case (mgmt guide met: pen volumes 30M → 50-55M FY27; Healthcare +35% YoY; consolidated revenue +25-30%; EBITDA margin 30-32%):** FY27 Revenue ₹1,300 cr (+31%); EBITDA ₹400 cr at 31% (+39%); PAT ₹240-260 cr (+45%); **EPS ₹52-57**. **FY28: Revenue ₹1,650-1,750 cr (+27%); EBITDA ₹540 cr at 32%; PAT ₹340-370 cr; EPS ₹74-80**. **FY29 with Abu Dhabi initial ramp: Revenue ₹2,100-2,300 cr; EBITDA ₹720 cr at 32-33%; PAT ₹460-510 cr; EPS ₹100-110**. **Multiples:** Premium-pharma-platform comparables (Syngene, Sai Life, Divis) trade at 45-60x trailing P/E; specialty engineering platforms (Astral, Supreme) at 45-70x. Shaily's *healthcare-dominant + innovator-optionality* profile justifies **55-65x on FY28E EPS** (vs current 73x trailing — multiple actually *contracts* even as price rises). **Apply 55x to FY28E EPS ₹77 = ₹4,235**; **Apply 60x to FY28E EPS ₹77 = ₹4,620**. **Apply 60x to FY27E EPS ₹54 = ₹3,240** (12-month base target). **Range ₹3,200-4,000** weighted across 12-24 month horizon = +19-48% from ₹2,695.",
            workings:
                "**FY27 Build (mgmt-guided):** Revenue ₹1,300 cr (+31%): Healthcare ₹560 cr (+40%), Consumer ₹520 cr (flat), Industrial ₹150 cr (+70%), Other ₹70 cr. EBITDA margin 31% = ₹403 cr (+40% YoY); Other income ₹15 cr; Interest ₹18 cr; Depreciation ₹58 cr; PBT ₹342 cr; Tax 24% = ₹82 cr; **PAT ₹260 cr → EPS ₹56.5** (on 4.6 cr share count). **FY28 Build (full FY27 ramp + new contracts):** Revenue ₹1,700 cr (+31%); Healthcare ₹780 cr (+39%); Consumer ₹570 cr (+10% on FTA rebound); Industrial ₹250 cr (+67%); Other ₹100 cr. EBITDA margin 32% = ₹544 cr (+35%); D&A ₹72 cr (Abu Dhabi pre-commissioning); Interest ₹20 cr; PBT ₹467 cr; Tax 24% = ₹112 cr; **PAT ₹355 cr → EPS ₹77.2**. **FY29 Build (Abu Dhabi partial year):** Revenue ₹2,200 cr (+29%); EBITDA ₹726 cr at 33%; PAT ₹480 cr → EPS ₹104. **Multiples logic:** Premium pharma-services (Syngene 50x, Sai Life 55x) + specialty engineering (Astral 70x, Supreme 45x) blend = 55-60x reasonable for healthcare-dominant profile. **Conservative (FY27E lens):** 60x × ₹57 = ₹3,420. **Aggressive (FY28E lens):** 60x × ₹77 = ₹4,620. **Bull case (Innovator signing + 90x premium):** 90x × ₹50 (FY27E haircut for pre-signing visibility) = ₹4,500. **Range ₹3,200-4,000** blends 12-24 month base with moderate optionality.",
        },

        /* Q4 — Best value entry zone */
        valuationEntryZone: {
            bestValueRange: "₹1,900 – ₹2,200",
            fairValue: "₹2,400 – ₹2,900",
            currentZone: "Fair-to-Slightly-Expensive — current ₹2,695 is at upper end of fair value zone",
            rationale:
                "**TTM P/E:** 73x (Screener) on FY26 EPS ₹36.97; vs **peer median ~36x** (Supreme 45x, Astral 70x, Garware 38x, Finolex 20x, Time Tech 19x). **EV/EBITDA TTM ~45x; P/B 17x; PEG 0.86** — premium *justified by 80%+ TTM EPS growth + healthcare moat + GLP-1 megatrend + innovator-pharma optionality* but leaves zero margin of safety. **5-yr stock CAGR 64% / 3-yr 119% / 1Y +52%** = significant gains already in price. **52w range ₹1,534-₹2,847**; current ₹2,695 is ~5% off all-time high. **DAM Capital target ₹3,810 (April 2026)** = +41% upside per broker — but this assumes flawless FY27 H1 execution + Innovator-pharma signing. **Best value entry zone ₹1,900-2,200** = 38-45x FY27E EPS ₹52 + 25-30% cushion for execution risk + downside protection if Q1 FY27 disappoints. **Fair value ₹2,400-2,900** = 47-58x FY27E EPS, in line with current zone (₹2,695 sits at fair value top). **Above ₹3,200** prices base-case FY27 delivery + multiple-hold; **above ₹4,000** prices Innovator-pharma signing + FY28E earnings. **Per *valuation_analysis.md* logic:** ACCUMULATE aggressively in ₹1,900-2,200 zone (would require Q1 FY27 disappointment OR broader-market correction); DEPLOY moderately at ₹2,300-2,500 (15% pullback from current); HOLD at ₹2,500-2,800 (current zone — neither cheap nor expensive); PARE 30-40% if >₹3,200 *before* Innovator signing confirmed; CONVICTION DEPLOY post-Innovator-pharma signing announcement (₹3,500-4,500 range will look cheap vs FY29-30E ramp). **Asymmetric setup: -25% downside to ₹2,000 (Q1 FY27 disappointment + multiple compression to 50x) vs +20-50% upside to ₹3,200-4,000 (FY27 H1 confirmed + Innovator-pharma signing) = roughly 1.5-2x reward-to-risk at current price** = adequate to hold but *not compelling enough* to deploy *aggressively* before Q1 FY27 evidence. **Position size 20-25% at current; ramp to 75-100% on dip to ₹2,000-2,200 OR post-Q1 FY27 confirmation OR post-Innovator-pharma signing**.",
        },

        summary:
            "**Shaily Engineering Plastics Q4 FY26 is the *commercial-validation* quarter for a multi-year drug-delivery-device platform thesis** — Healthcare segment +139% YoY to ~40% of revenue (vs 21% FY25), pen capacity doubled 40M → 80M, Orbicular Pharma generic semaglutide Canada launch (May 2026 — first commercial GLP-1 device launch), ShailyPen Neo USFDA TA + Health Canada + India approvals, ₹423 cr domestic pharma order (Feb 2026), 65-75% share of first 6-8 Canada semaglutide filers, Lupin/Torrent India co-marketing partnership. **FY26 financials: Revenue +26% to ₹991 cr, EBITDA margin 29% (highest ever, +630 bps YoY), PAT +83% to ₹170 cr, ROCE 29% (peaked 38% Q3), FCF +₹38 cr (first positive in 4 years)**. **3-yr profit CAGR 69% / TTM 83% = compounding rate among highest in Indian midcap manufacturing.** **FY27 H1 is the binary execution checkpoint** — high-speed pen line qualification *must* normalise (currently 30% rejection rate); pen supplies *must* ramp 30M → 50-60M (mgmt-guided); Healthcare *must* grow 30-40% (per guide). **The asymmetric upside trigger is the Innovator-pharma GLP-1 contract** (mgmt: 'advanced stage discussions on 2 programs; could sign this calendar year') with Axiom Max next-gen device → 50-100M pen optionality + 30-50% premium pricing + multiple re-rating to 85-90x = ₹4,000-4,500 potential. **At ₹2,695 (TTM P/E 73x; Book ₹156; ROE 27%; D/E 0.3x) — Shaily trades at 2x peer median (~36x) — justified *only* by FY27-29E 35-45% EPS CAGR + healthcare-platform moat**. **Bear case ₹1,800-2,000 (FY27 H1 disappoints + multiple compresses to 50-55x); Base case ₹3,200-3,500 (FY27 +35% EPS delivered + multiple holds at 55-60x on FY28E); Bull case ₹4,000-4,800 (Innovator-pharma signing + 85-90x P/E on FY29E)**. Asymmetric ~1.5-2x reward-to-risk at current price (-25% downside / +20-50% upside over 12-24 months). **DAM Capital target ₹3,810 (April 2026); FII +9.4 pp YoY to 16.7%; Ashish Kacholia 5.2%; promoter 43.4% zero pledge** — institutional + ace-investor conviction strong but does not eliminate valuation risk. **Verdict: ACCUMULATE on dips ₹1,900-2,200 (best value); DEPLOY 20-25% at current ₹2,500-2,800 with view to ramp post-Q1 FY27 confirmation OR Innovator-pharma signing; HOLD at fair value ₹2,400-2,900; PARE 30-40% if >₹3,200 *before* Innovator signing.** This is a high-quality drug-delivery-device platform with validated moat, multi-year optionality, and *temporary* high-speed line friction — a textbook 'buy the dip, build position on milestones' setup for patient capital with 24-36 month horizon.",
    },
});
