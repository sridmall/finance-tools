/* ============================================================
   Persistent Systems Ltd — Q4 FY26 / Full Year FY26
   Concall: 21 April 2026 (results announced same day)
   File path: data/PERSISTENT/Q4FY26.js
   Live spot @ authoring: ₹4,805.80 NSE / ₹4,798.70 BSE (29 Apr 2026, 19:08 IST)
   Day move: +0.05% (broadly flat; results 8 days old, fully digested by market)
   Source: Groww MCP get_ltp + fetch_stocks_fundamental_data
   ============================================================ */

window.registerReport("PERSISTENT", "Q4FY26", {
    meta: {
        companyName: "Persistent Systems Ltd",
        ticker: "PERSISTENT",
        quarter: "Q4 FY26",
        period: "January – March 2026",
        fyPeriod: "Full Year FY26",
        reportDate: "21 April 2026",
        concallDate: "21 April 2026 (Q4 FY26 earnings call)",
        resultsBasis:
            "Consolidated. **Mid-tier IT services + product engineering specialist** with 80% North America revenue exposure. **Differentiation drivers**: (1) Engineering Hyper Productivity AI platform (SASWA) — *the* monetisation lever, (2) Enterprise Data Readiness platform (IORA), (3) BFSI vertical leadership ($600M run-rate, +28.4% FY26 YoY), (4) Private Equity channel strength (newly elevated as growth lever), (5) Best-in-class growth (24th consecutive quarter of revenue growth). **Right earnings frameworks**: USD Revenue Growth + EBIT Margin + ACV/TCV bookings + Top-100/Top-50 customer growth + Attrition trend + AI platform monetisation — *not* simple P/E in isolation. **PE premium 40.63x vs industry 19.7x** is justified by 17%+ growth (vs Tier-1 at 5-7%) but is *fully priced* — re-rating runway constrained.",
        disclaimer:
            "This report is for educational and personal decision-making purposes only. It does not constitute financial advice. **Persistent is a high-quality compounder at a *premium* valuation** (P/E 40.63x vs industry 19.7x = 2x premium); the central return driver is earnings compounding (FY27-29 PAT CAGR 22-26%), *not* re-rating. **AI-led SDLC cannibalisation in tech vertical is a real but bounded near-term risk** per mgmt's own acknowledgement.",
    },

    /* SECTION 1 — Earnings Metrics ------------------------------ */
    earningsMetrics: {
        coreMetrics: [
            {
                metric: "Revenue (USD M / INR Cr) — *the* central IT services metric",
                current: "**Q4: $436M / ₹4,055.94 cr; FY26: $1,654.4M / ₹14,748.45 cr**",
                qoq: "**Q4 +3.2% QoQ (USD); +3.4% CC; +7.4% INR**; consistent with normal Q4 seasonality (lower vs Q3 peak deal cycle)",
                yoy: "**Q4: +16.2% YoY (USD) / +25.1% (INR); FY26: +17.4% YoY (USD) / +23.5% (INR)** — **24th consecutive quarter of revenue growth (INR terms)**; growth ~3x faster than Tier-1 IT services peers (5-7%)",
            },
            {
                metric: "EBIT Margin (%) — operating quality metric",
                current: "**Q4: 16.3% / FY26: 15.6%**",
                qoq: "Q4 +190 bps QoQ from Q3 ~14.4% (with 220 bps tailwind from prior-quarter wage code one-time absent + 60 bps FX; offset by 60 bps consulting/advisory + 70 bps subcon/travel)",
                yoy: "**FY26 +90 bps YoY** (vs FY25 14.7%); **mgmt aspiration 16-17%** (Vinit explicit: \"first priority is growth + investing; margins maintained or improved if possible\"); **One-time New Labour Code impact ~0.6% on EBIT FY26** (excluding which underlying margin ~16.2%)",
            },
            {
                metric: "PAT Margin (%) + Absolute PAT",
                current: "**Q4 PAT margin: 13.1% / Q4 PAT ₹529.3 cr / FY26 PAT margin: 12.6%**",
                qoq: "Q4 PAT +20.4% QoQ",
                yoy: "**Q4: +33.7% YoY / FY26: +33.2% YoY** in absolute PAT terms — *significantly* outpacing revenue growth = operating leverage + margin expansion working; **One-time NLC impact ~0.5% on PAT FY26**",
            },
            {
                metric: "EPS (TTM) — ₹118.23 / Q4 EPS ₹33.80",
                current: "**TTM EPS ₹118.23**; Q4 EPS ₹33.80 (vs ₹28.20 in Q3 = +19.9% QoQ)",
                qoq: "Q4 EPS +19.9% QoQ",
                yoy: "**Q4 EPS +31.9% YoY**; FY26 EPS implied ~₹118 = +33% YoY; **dividend ₹40/share FY26 (vs ₹35 FY25 = +14% YoY)** = disciplined capital return",
            },
            {
                metric: "Operating Cash Flow / PAT — cash quality",
                current: "**Q4 OCF/PAT: 77% / FY26 OCF/PAT: 93.6%** (vs FY25 82.6%)",
                qoq: "Q4 dipped to 77% (from 91% Q3) due to higher unbilled revenue + tax refund delays + insurance premium",
                yoy: "**FY26 OCF/PAT 93.6% vs FY25 82.6% = +1100 bps improvement** — *significant cash quality improvement*; Cash + Investments ₹2,762 cr (essentially debt-free; D/E 0.06x); **expected to normalise next quarter** per CFO",
            },
        ],
        businessQualityMetrics: [
            {
                metric: "TCV / ACV Bookings — *the* forward revenue visibility metric",
                current: "**Q4 TCV $600.8M (New TCV $488.9M); ACV $445.1M (New ACV $272.7M); FY26 TCV $2.4B; FY26 ACV $1.8B**",
                qoq: "Q4 sequentially lower vs Q3 peak (Q3 has US-customer-fiscal-year-end renewals = seasonal peak)",
                yoy: "**Strong New TCV at $488.9M** = healthy new-business engine; ACV/TCV ratio 74% (Q4) = high revenue conversion quality. **5-yr trend**: TCV growth tracking revenue growth = sustainable book-to-bill.",
            },
            {
                metric: "Top-100 / Top-50 Customer Growth + Customer Bucket Movement",
                current: "**Top 5 +20.7% / Top 10 +19.4% / Top 20 +20% / Top 50 +20.9% / Top 100 +19.5% (all YoY)**",
                qoq: "Top 5 saw mild sequential softening (mgmt: cost savings + offshoring negotiations with large clients = normal mature-relationship dynamics)",
                yoy: "**Customer expansion across buckets**: $1M+ 200 (vs 191); $5M+ 62 (vs 55); $10M+ 29 (vs 21); $20M+ 12 (vs 10); $50M+ 4 (stable). **Strong client-deepening signal** — large customers expanding scope.",
            },
            {
                metric: "Attrition Rate (TTM, %) + Headcount + Utilization — talent quality",
                current: "**Attrition 13.0% (down from 13.5% Q3) / Headcount 27,502 (+791 QoQ) / Utilization 88% TTM**",
                qoq: "Attrition declining = good signal in tight IT talent market; Headcount additions modest (continued AI-driven productivity)",
                yoy: "**Attrition 13% is best-in-class for mid-tier IT** (peer median 14-17%); 88% utilization is at high-end of optimal range (90%+ would signal bench compression). **Brand strength + AI capability investment retaining talent**.",
            },
        ],
        footnotes: [
            "**Revenue conversion / seasonality nuance**: Q4 is *not* the seasonally strongest quarter (Q3 typically peaks due to US-customer-fiscal-year-end renewals). Q4 +3.2% QoQ in USD = healthy in-line with mid-tier IT seasonality. **24 consecutive quarters of revenue growth** is among the longest unbroken streaks in Indian IT services (only TCS, Infosys have comparable consistency).",
            "**Q4 EBIT margin walkthrough — important to understand**: Headwinds = -130 bps (consulting/advisory -60 bps; subcon/software/travel -70 bps); Tailwinds = +320 bps (NLC absence +220 bps; operational efficiency +40 bps; FX +60 bps); Net = +190 bps QoQ to 16.3%. **Underlying core margin trajectory is improving 40 bps/qtr from operational efficiency** — the rest is one-time/FX noise.",
            "**Mgmt FY27 \"$2B run-rate\" guidance is FY27 Q4 EXIT run-rate (not full-year FY27 revenue)** — i.e., Q4 FY27 quarterly USD revenue should reach ~$500M (vs Q4 FY26 $436M = +14.7% YoY). Implies FY27 full-year USD revenue ~$1,950-2,000M (+18-20% YoY) at $500M Q4 exit. **\"Plus minus a quarter at worst\"** = high mgmt confidence.",
            "**AI Investor Day announced for early June 2026 in Pune** — significant commitment to demonstrate (a) SASWA / IORA / GenAI Hub platforms, (b) AI partnerships (Anthropic, OpenAI, Nvidia, Google, Microsoft, Salesforce, Databricks, Snowflake), (c) marquee customer case studies, (d) hands-on AI hackathon with investors. **120+ patents filed; 500+ agents in portfolio**. This is a *major catalyst* for justifying premium valuation if delivered.",
            "**Groww MCP reads: P/E 40.63x; Industry P/E 19.73x; Mkt Cap ₹75,770 cr; TTM EPS ₹118.23; ROE 23.80%; ROA 16.98%; P/B 9.67x; D/E 0.06x; Dividend Yield 0.83%; Cash + Investments ₹2,762 cr**. **PE premium 2x to industry** justified by 3x growth premium (17% vs 5-7%) + AI platform optionality + best-in-class ROE 23.80% (vs Wipro 17%, HCL Tech 23%, LTIM 22%) but *fully priced* — re-rating runway constrained, earnings compounding is the return driver.",
        ],
        patternDetected:
            "Revenue +16.2% YoY (24th consecutive quarter of growth) + EBIT +30.5% YoY (margin +90 bps FY26) + PAT +33.7% YoY (operating leverage compounding) + Top-100 customers all growing 19-21% YoY + BFSI vertical $600M run-rate +28.4% YoY + Attrition 13% best-in-class + AI platform (SASWA, IORA) monetising in marquee deals + $2B FY27 Q4 exit run-rate guidance unchanged + Multiple senior leadership hires (PE Global Head Hari Abhiyankar from McKinsey + EVP Strategy Ruchi Kulhari from Infosys/EXL) — **pattern reading: \"a high-quality compounder firing on all cylinders, with AI as both accelerator and asymmetric optionality, executing at 17%+ revenue / 30%+ PAT growth in a sector growing 5-7%, but fully priced at P/E 40.63x\"**. The investment outcome is *not* about whether the franchise compounds (it will) — it's about *at what entry price* the asymmetric reward-risk works.",
        interpretation:
            "**Q4 FY26 is a textbook 'high-quality compounder firing on all cylinders' quarter** — Revenue $436M (+16.2% YoY, 24th consecutive quarter of growth in INR terms); EBIT margin 16.3% (+30.5% YoY EBIT growth); PAT margin 13.1% (+33.7% YoY); BFSI vertical $600M run-rate (+28.4% FY26 YoY); Top-100 customers all growing 19-21% YoY. **The AI platform thesis is materialising** — SASWA (Engineering Hyper Productivity), IORA (Enterprise Data Readiness), GenAI Hub deployed in marquee deals (US public-safety law-enforcement SDLC modernisation; pharma drug-discovery; FedNow real-time payments; Australian life-insurer digital underwriting); 1,700+ team members trained at AI Huddle; 120+ patents; 500+ agents in portfolio; **AI Investor Day in June 2026** is *the* near-term catalyst for justifying premium multiple. **Mgmt $2B FY27 Q4 EXIT run-rate guidance unchanged** = $500M quarterly revenue by Q4 FY27 = +14.7% YoY = high-confidence delivery (\"plus minus a quarter at worst\"); FY27 full-year revenue $1,950-2,000M (+18-20%); EBIT margin trending 16-17% per mgmt aspiration; **FY27 PAT ₹2,300-2,400 cr (+22-26%) → EPS ₹145-150; FY28 PAT ₹2,800-3,000 cr → EPS ₹176-188**. **Trading at P/E 40.63x vs industry 19.73x = 2x premium**; *fully justified* by 17% revenue growth + 23.8% ROE + AI optionality vs Tier-1 IT at 5-7% growth + 17-25% ROE; **but re-rating runway constrained**. **Asymmetric setup**: bear case ₹3,800-4,200 (FY27 growth slips below 15% + AI cannibalisation in tech + macro shock = -12-21%), base case ₹5,400-5,800 (FY27 EPS ₹150 × 36-39x = +12-21%), bull case ₹6,400-7,200 (FY28 visibility + AI platform monetisation + EBIT margin 17% + PE premium sustained = +33-50%). **Verdict: HOLD/ACCUMULATE on weakness toward ₹4,200-4,400; current ₹4,805 is at upper-middle of fair value zone; aggressive accumulate <₹4,200**.",
        whatWentRight: [
            "**24th consecutive quarter of revenue growth (INR terms) + EBIT +30.5% YoY (margin expanding 90 bps FY26) + PAT +33.7% YoY in Q4** = operating leverage compounding cleanly. **Top-100 customers all growing 19-21% YoY across buckets** ($1M+ 200, $5M+ 62, $10M+ 29, $20M+ 12) = client deepening + new-logo wins working simultaneously. **BFSI vertical at $600M annual run-rate (+28.4% FY26 YoY)** with top-4-of-5 banks in US + India = vertical leadership entrenched. **Attrition 13% best-in-class + Brand Finance fastest-growing IT services brand globally + Everest Group Leader (PE Services + Software Product Engineering)**.",
            "**AI platform thesis is materialising in revenue, not just narrative** — SASWA + IORA + GenAI Hub deployed in marquee deals (US public-safety SDLC modernisation, pharma drug-discovery, FedNow real-time payments, Australian life-insurer digital underwriting); 1,700+ team members trained at AI Huddle; 120+ patents; 500+ agents in portfolio. **AI Investor Day announced June 2026 in Pune with hands-on hackathon for investors** = aggressive transparency commitment to demonstrate AI capabilities = critical catalyst for sustaining premium PE multiple. **PE channel + Salesforce 'Headless360' = additional growth vectors** explicitly identified by mgmt.",
        ],
        whatWentWrong: [
            "**Top-5 customer revenue softness in Q4** — mgmt explicit: \"large clients ramping for several years; cost savings/offshoring negotiations are normal\". Bookings/conversion Q4 sequentially lower (Q3 is seasonal peak due to US-customer-fiscal-year-end renewals). **Europe revenue declined -1.8% sequentially Q4 vs Q3** (mgmt: \"area where we want to double down; customer puts and takes\"); **India revenue +4.2% Q4 (an aberration from GCC IP renewal in INR — will normalise next quarter to North America)**. None thesis-breaking; mature-relationship dynamics.",
            "**AI-led SDLC cannibalisation in tech vertical is a real but bounded near-term risk** — mgmt acknowledges: \"tech may be compressed for a quarter, two, three; we may go cannibalise our own business... but at $1.7B we're very small in this and there's enough new outsourcing\". **Premium valuation P/E 40.63x vs industry 19.73x means earnings disappointment risk is asymmetric on the downside** — a single quarter of <13% YoY growth or EBIT margin slipping to 14% could compress multiple to 32-35x = -15-20% stock impact. **OCF/PAT dipped to 77% in Q4** (vs 91% Q3) due to unbilled revenue + tax refund delays + insurance premium = bounded but worth watching.",
        ],
    },

    /* SECTION 2 — Business Segment Performance ------------------ */
    businessSegments: {
        segments: [
            {
                name: "1. BFSI (Banking + Financial Services + Insurance) — ~33-35% of revenue, the leading vertical",
                yoyGrowth: "**Q4 +24.3% YoY; FY26 +28.4% YoY at $600M annual run-rate**",
                mix: "Largest vertical; led by Bharat Narayanan (EVP Global BFSI + Europe)",
                analysis:
                    "**The undisputed FY26 vertical leader.** Top 4 of 5 banks in US + India; top 3 of 5 large global fintechs; top 3 of 5 brokerage/wealth/retirement service providers. **4 focus areas**: (a) AI-led software engineering (US insurer COBOL→Duck Creek migration), (b) Payments + digital assets (FedNow real-time payments for US fintech; Nordic bank payments modernisation), (c) Data infrastructure (European bank Basel/AML/KYC documentation +70% reduction via IORA), (d) Non-linear cost transformation (Australian life-insurer digital underwriting). **Increasingly being chosen as 'credible challenger to Tier-1 outsourcing firms'**.",
                triggers:
                    "(a) BFSI continuing $600M+ run-rate +20%+ YoY into FY27; (b) FedNow + Nordic bank wins scaling into multi-quarter contracts; (c) DORA/BCBS239/ESG regulatory tailwind driving European banks; (d) Real-time settlement + tokenisation/blockchain win as competitive baseline; (e) Top-bank client expansion (top 4 of 5 US banks).",
            },
            {
                name: "2. Software / High-Tech / Emerging Verticals — ~30% of revenue",
                yoyGrowth: "**Q4 +11.2% YoY; FY26 +13.8% YoY**",
                mix: "Tech-company customer base; mgmt: \"fastest adopter of AI led SDLC\"; PE channel concentration",
                analysis:
                    "**The AI-platform demand creator + cannibalisation risk vector.** Tech companies are fastest to adopt AI-led SDLC (the use case for SASWA platform); **PE channel** is structurally important — \"more PE-owned companies in US today than public companies; many enterprise software companies taken private 4-5 years ago\". **New EVP appointment** Hari Abhiyankar (ex-McKinsey + enterprise software) leading PE/Professional Services GTM. **Salesforce Headless360** = mgmt sees as opportunity (more SI work needed). **Risk**: AI-led SDLC compression could affect tech vertical for 1-3 quarters per mgmt's own admission, though offset by new outsourcing opportunities.",
                triggers:
                    "(a) PE channel + Hari Abhiyankar GTM ramp in FY27; (b) SASWA platform monetisation in tech-company customer base; (c) 'SaaS apocalypse' creating opportunity for AI-driven cost transformation deals; (d) Salesforce / ServiceNow / Workday integration deals driving Tech vertical.",
            },
            {
                name: "3. Healthcare / Life Sciences — ~20% of revenue",
                yoyGrowth: "**Q4 +14.1% YoY; FY26 +10.1% YoY**",
                mix: "Pharma + medtech + payer/provider clients",
                analysis:
                    "**Mgmt explicit FY27 guidance: HLS + BFSI to be top-2 verticals (very close); Tech third**. Strong AI showcase deals: (a) global diabetes/metabolic-disorder pharma drug-discovery solution on Google Cloud + MedGemma + TX Gemma; (b) Nvidia Bio-Demo joint solution for protein structure prediction + molecular simulation (computational biology). **Slower from POC to enterprise-wide adoption** vs tech vertical (regulated industry).",
                triggers:
                    "(a) AI-driven drug discovery deals scaling in FY27-28; (b) HLS overtaking Tech as #2 vertical (per mgmt FY27 guidance); (c) Specific large-customer ramps (top-3 client seeing softness Q4 reversed); (d) Regulated-industry AI adoption curve normalising as POC→enterprise transitions accelerate.",
            },
            {
                name: "4. Geographic mix — North America 80% / Europe ~10% / India / RoW",
                yoyGrowth: "**FY26: NA +17.2% / Europe +26.7% / India +9.5% / RoW +27.5%**",
                mix: "North America dominant; Europe momentum strong FY26; India aberration Q4",
                analysis:
                    "**80% North America = high USD exposure** (TTM EPS includes ₹150-200 cr FX swings; ₹500M forward contracts at ₹90.70/USD). **Europe FY26 +26.7%** driven by Nordic bank + European bank deals + DORA/BCBS239/ESG regulatory mandates; Q4 sequential -1.8% is a customer-puts-and-takes blip. **India growth +4.2% Q4 is an aberration** (GCC IP renewal in INR shifted classification; will revert to NA next quarter). **Rest of World +41.4% Q4** (small base, includes Australia life-insurer + Japan B2B industrial $50M+ deal).",
                triggers:
                    "(a) Europe doubling-down strategy + DORA regulatory tailwind continuing; (b) Japan + Australia + emerging-market large deals scaling RoW; (c) USD/INR favourable trajectory for FX gain on revenue translation; (d) North America growth normalising as India aberration corrects.",
            },
            {
                name: "5. AI Platform Monetisation Layer (cross-vertical) — long-dated optionality",
                yoyGrowth: "Currently bundled into services contracts; not separately reported",
                mix: "Three pillars: SASWA + IORA + GenAI Hub; 500+ agents; 120+ patents",
                analysis:
                    "**The asymmetric AI optionality lever.** SASWA (Engineering Hyper Productivity) is the central platform — bridging \"last mile\" of AI adoption; converted into 90-day actionable roadmap including for PE due diligence + transformation. IORA (Enterprise Data Readiness) — used in European bank documentation cycle reduction (-70%) + 25,000 lines of legacy code decoded. GenAI Hub + Agent Studio — agent runtime + orchestration + 500+ agents. **Partner ecosystem**: Anthropic, OpenAI, Nvidia, Google, Microsoft, Salesforce, Databricks, Snowflake. **AI Investor Day June 2026** = potential catalyst.",
                triggers:
                    "(a) AI Investor Day June 2026 — investor receptiveness to platform thesis = re-rating catalyst; (b) Specific platform license deals showing up as separate revenue line items (currently bundled into services); (c) Anthropic/OpenAI/Nvidia partnership-led joint solutions monetising; (d) PE channel adopting SASWA for portfolio company transformations.",
            },
        ],
        assessment: [
            "**Multi-engine growth architecture genuinely diversified** — BFSI ($600M, +28.4% FY26) + Tech (~$500M, +13.8%) + HLS (~$330M, +10.1%) + RoW emerging (small but +41.4% Q4) + AI platform monetisation cross-vertical. **The vertical mix is improving quality**: BFSI overtaking Tech in growth = lower AI-cannibalisation risk concentration; HLS expected to overtake Tech as #2 in FY27 per mgmt = secular tailwind from regulated-industry AI adoption.",
            "**The 'mid-tier IT growth premium' is real and structurally widening** — Persistent's 17%+ revenue growth vs Tier-1 (TCS/Infosys/HCL) at 5-7% = 3x growth premium; ROE 23.8% (vs LTIM 22%, HCL Tech 23%, Wipro 17%) is competitive; AI platform investment runway ahead of most mid-tier peers (Coforge, Mphasis, Mindtree). **The franchise has structural moats** (24-quarter unbroken growth track record, BFSI + HLS vertical leadership, SASWA/IORA platforms, top-tier partner ecosystem, AI talent depth) that justify premium PE.",
            "**Segment quality verdict: BEST-IN-CLASS MID-TIER IT COMPOUNDER WITH AI PLATFORM OPTIONALITY + DIVERSIFIED VERTICAL ENGINE + DEEP CUSTOMER BASE.** The franchise economics are exceptional but valuation is *fully priced*; entry timing matters more than absolute conviction in the franchise.",
        ],
    },

    /* SECTION 3 — Future Revenue Pipeline ----------------------- */
    futurePipeline: {
        metrics: [
            {
                metric: "1. Revenue Growth Trajectory — *the* central FY27-28 metric",
                current: "FY26 Revenue $1,654.4M (+17.4% YoY); Q4 $436M (+16.2% YoY)",
                trend: "**Mgmt $2B FY27 Q4 EXIT run-rate** = $500M quarterly by Q4 FY27 = +14.7% YoY exit; FY27 full-year $1,950-2,000M (+18-20%)",
                horizon: "FY27 ~$1,975M (+19%); FY28 ~$2,350M (+19%); FY29 ~$2,800M (+19%)",
                remarks:
                    "**Mgmt: \"plus minus a quarter at worst\"** = high confidence in $2B exit. **Risk**: AI-led SDLC cannibalisation in tech vertical could compress 1-3 quarters; offset by new outsourcing tailwind. **Critical Q1 FY27 data point**: USD revenue tracking ~$455-465M (+4-7% QoQ) confirms trajectory; below $440M = warning sign.",
            },
            {
                metric: "2. EBIT Margin Trajectory — operating leverage + AI productivity",
                current: "FY26 EBIT 15.6%; Q4 16.3%",
                trend: "**Mgmt aspiration 16-17%** (Vinit explicit; not formal guidance); FY26 +90 bps YoY = trajectory positive",
                horizon: "FY27 16-16.5%; FY28 16.5-17%",
                remarks:
                    "Each 50 bps EBIT margin on FY28 revenue $2,350M (~₹19,500 cr) = ~₹100 cr EBIT = ~₹70-75 cr PAT = ~₹4-5 EPS. **Operating leverage drivers**: (a) AI-driven productivity reducing per-FTE cost, (b) Subcon cost reduction, (c) Utilization at 88% optimal, (d) Attrition 13% reducing replacement costs. **Risks**: RM/talent inflation; macro slowdown forcing pricing pressure.",
            },
            {
                metric: "3. ACV / TCV Bookings — forward revenue visibility",
                current: "Q4 ACV $445.1M; Q4 TCV $600.8M; FY26 ACV $1.8B; FY26 TCV $2.4B",
                trend: "Strong New ACV $272.7M Q4; TCV book-to-bill ratio ~1.4x = sustainable",
                horizon: "FY27 ACV $2.1-2.2B; FY27 TCV $2.8-3.0B",
                remarks:
                    "**Top-100 customers all growing 19-21% YoY across buckets** = healthy organic-flow engine. **Risk**: Q4 New TCV $488.9M sequentially lower vs Q3 peak (seasonal); Q1 FY27 typically softer. **Critical 90-day data point**: FY27 H1 ACV bookings ≥$900M = on track for $2.1B+ FY27.",
            },
            {
                metric: "4. BFSI Vertical Run-rate — vertical leadership extension",
                current: "$600M annual run-rate; +28.4% FY26 YoY",
                trend: "Top 4 of 5 US + India banks; top 3 of 5 fintechs; top 3 of 5 brokers",
                horizon: "FY27 BFSI run-rate $750-780M (+25-30%); FY28 $950M-1B (+25-30%)",
                remarks:
                    "**Highest-growth + highest-margin vertical**. FedNow + Nordic bank + DORA/BCBS239 regulatory tailwind sustaining; AI-led software engineering + payments/digital assets + data infrastructure modernisation = 4 simultaneous growth drivers. **If BFSI hits $1B+ by FY28, the entire franchise re-rates** (Tier-1 IT typically valued at premium for >$1B BFSI books).",
            },
            {
                metric: "5. AI Platform Monetisation — long-dated asymmetric optionality",
                current: "Bundled in services contracts; SASWA / IORA / GenAI Hub deployed in marquee deals",
                trend: "AI Investor Day June 2026 = catalyst",
                horizon: "FY28-29: potential separately-reported AI platform revenue line item if material",
                remarks:
                    "**Asymmetric upside lever**. If SASWA monetises as separately-tracked AI services line at, say, $100-200M (5-10% of revenue) at higher gross margins (35-40% vs services 28-30%), this would expand EBIT margin by 50-100 bps incrementally + justify higher PE premium. **Long-dated FY28+ catalyst**; not in current valuation. **AI Investor Day disclosures** will reveal credibility of monetisation thesis.",
            },
        ],
        demandSignals: [
            {
                signal: "Indian IT services sector demand environment",
                reading:
                    "Tier-1 IT growing 5-7% YoY; mid-tier (Persistent, Coforge, Mphasis) growing 14-20%. **Demand environment stable-to-improving** with AI as accelerator vs cannibaliser; mgmt: \"despite headwinds in FY26 (US macro weakness, tariff uncertainty, GenAI transition), we delivered 17.4% growth\". FY27 outlook: \"decent growth\" per mgmt with macro caveats (Middle East war).",
                verdict: "Strong",
            },
            {
                signal: "AI adoption curve / Enterprise AI maturity",
                reading:
                    "Tech companies fastest adopters; HLS + BFSI POC→enterprise transition slower (regulated). **Demand visibility**: Anthropic, OpenAI, Nvidia, Google, Microsoft, Salesforce, Databricks, Snowflake all announcing significant roadmaps; Persistent SASWA platform integrating with Claude/Copilot/OpenAI Codex. **Last-mile gap of AI adoption** = exactly where SASWA platform plays.",
                verdict: "Robust",
            },
            {
                signal: "BFSI / Healthcare / Tech vertical demand depth",
                reading:
                    "**BFSI**: 4 focus areas (AI-led engineering, payments/digital assets, data infrastructure, non-linear cost transformation) all robust + DORA/BCBS239/ESG regulatory mandates. **HLS**: drug discovery + clinical data AI use cases growing. **Tech**: AI-led SDLC + PE channel + SaaS apocalypse opportunity. **All three engines have multi-quarter visibility**.",
                verdict: "Robust",
            },
            {
                signal: "Customer concentration / top-client expansion",
                reading:
                    "**Top-100 customers all growing 19-21% YoY across all buckets**. Top-5 saw mild softness Q4 (cost savings/offshoring negotiations) but mgmt unconcerned. **Customer expansion**: $1M+ 200 (vs 191), $5M+ 62 (vs 55), $10M+ 29 (vs 21), $20M+ 12 (vs 10). **Significant client deepening across all tiers**.",
                verdict: "Strong",
            },
            {
                signal: "Competitive intensity / Tier-1 vs mid-tier dynamics",
                reading:
                    "**Persistent positioned as 'credible challenger to Tier-1 outsourcing firms'** per BFSI head. AI platform investments (SASWA, IORA) ahead of most mid-tier peers. **Risk**: TCS/Infosys/HCL aggressively investing in AI; their pricing power + delivery scale could compress mid-tier premium over 3-5 years.",
                verdict: "Adequate",
            },
            {
                signal: "Macro / FX / Talent environment",
                reading:
                    "Middle East war = inflation/oil price overhang per mgmt; \"Persistent has zero direct exposure to Middle East\". USD/INR forward contracts ₹500M at ₹90.70 = locked-in FX cushion. **Attrition 13%** vs peer 14-17% = best-in-class talent retention; **utilization 88%** at optimal range.",
                verdict: "Strong",
            },
        ],
        demandVerdict:
            "**Demand environment is GREEN across all six dimensions** — Indian IT services sector improving (mid-tier growth premium widening); AI adoption curve accelerating with Persistent positioned at 'last-mile gap'; BFSI + HLS + Tech all robust; customer expansion broad-based across top-100 buckets; competitive position strengthening as 'Tier-1 challenger'; macro manageable with FX/talent advantages. **The next 12-24 months see 4 simultaneous tailwinds**: (a) AI platform monetisation visibility (Investor Day June 2026), (b) BFSI run-rate scaling toward $1B, (c) HLS overtaking Tech as #2 vertical, (d) PE channel monetisation (Hari Abhiyankar GTM). **Mgmt's $2B FY27 Q4 exit run-rate is high-confidence; FY28 visibility extending to $2.4B**.",
        whatWentRight: [
            "**Demand visibility is exceptional + diversified** — Top-100 customers all growing 19-21% YoY across all buckets ($1M+ to $50M+); BFSI $600M run-rate +28.4%; AI platform deployments in marquee deals (US public-safety, pharma drug-discovery, FedNow, Nordic bank, Australian life-insurer); **AI Investor Day June 2026** = transparent commitment to demonstrate platform thesis; **120+ patents, 500+ agents, partner ecosystem** (Anthropic, OpenAI, Nvidia, Google, Microsoft, Salesforce, Databricks, Snowflake) genuinely deep.",
            "**Mgmt $2B FY27 Q4 exit run-rate guidance is unchanged + high-confidence (\"plus minus a quarter at worst\")** + EBIT margin aspiration 16-17% credible given FY26 +90 bps trajectory + Strong leadership additions (Hari Abhiyankar/PE Global Head from McKinsey + Ruchi Kulhari/EVP Strategy from Infosys-EXL). **CEO Sandeep Kalra + CFO Vinit Teredesai 24-quarter unbroken growth delivery** = highest mgmt credibility tier in mid-tier IT services.",
        ],
        whatWentWrong: [
            "**AI-led SDLC cannibalisation in tech vertical is a real near-term risk per mgmt's own admission** — \"tech may be compressed for a quarter, two, three; we may go cannibalise our own business\". Tech vertical FY26 +13.8% YoY (slowest of three core verticals); if compression intensifies in FY27, vertical growth could slip to single-digits = FY27 blended growth pressure. **Premium valuation P/E 40.63x means asymmetric earnings disappointment risk** — single-quarter <13% YoY growth or EBIT margin slipping to 14% = stock multiple compression to 32-35x = -15-20% impact.",
            "**Top-5 customer revenue softness Q4** + Europe sequential -1.8% Q4 vs Q3 + India aberration (GCC IP renewal) creating mix distortion = while individually small, signal that the highest-growth client cohort may be plateauing. **OCF/PAT dipped to 77% in Q4** (vs 91% Q3) = bounded but worth monitoring. **Macro overhang from Middle East war** + tariff uncertainty + GenAI deflationary impact on pricing = while not Persistent-specific, sector-wide pressure could compress multiples.",
        ],
    },

    /* SECTION 4 — Management Guidance --------------------------- */
    managementGuidance: {
        commitments: [
            {
                metric: "FY27 Q4 Exit Revenue Run-Rate",
                current: "Q4 FY26 USD Revenue $436M (+16.2% YoY)",
                target:
                    "**$2 billion FY27 Q4 EXIT run-rate** = $500M quarterly by Q4 FY27 = +14.7% YoY exit; \"plus minus a quarter at worst\" per CEO Sandeep Kalra; implies FY27 full-year $1,950-2,000M (+18-20% YoY)",
            },
            {
                metric: "EBIT Margin Aspiration",
                current: "FY26 EBIT margin 15.6% (Q4 16.3%)",
                target:
                    "**Aspiration 16-17%** (Vinit Teredesai explicit; *not* formal guidance) — \"first priority is growth + investing in capabilities; margins maintained or improved if possible\"; FY26 +90 bps YoY = trajectory positive",
            },
            {
                metric: "FY27 Vertical Pecking Order",
                current: "FY26 BFSI +28.4% / HLS +10.1% / Tech +13.8%",
                target:
                    "**FY27: HLS + BFSI top-2 (very close); Tech third** — per Sandeep Kalra explicit guide; no formal numbers; HLS-led growth in FY27 implies +13-15% YoY",
            },
            {
                metric: "AI Platform Capability Investment",
                current: "120+ patents; 500+ agents; SASWA/IORA/GenAI Hub deployed in marquee deals",
                target:
                    "**AI Investor Day in early June 2026 in Pune** with hands-on hackathon for investors; continued investment in SASWA/IORA platforms + partnerships with Anthropic/OpenAI/Nvidia/Google/Microsoft/Salesforce/Databricks/Snowflake; 1,700+ team members trained at AI Huddle",
            },
            {
                metric: "Capital Return Discipline",
                current: "FY26 Dividend ₹40/share (vs ₹35 FY25 = +14% YoY); D/E 0.06x; Cash ₹2,762 cr",
                target:
                    "**Disciplined capital return with growth reinvestment**; Final dividend ₹18/share (+ Interim ₹22 = ₹40 total FY26); Dividend Yield 0.83% at current price; **No buyback announced** but cash buffer for opportunistic M&A or shareholder return",
            },
        ],
        commitmentNote:
            "**Mgmt credibility on guidance is at the highest tier in Indian mid-tier IT services** — CEO Sandeep Kalra + CFO Vinit Teredesai have delivered **24 consecutive quarters of revenue growth** (the longest unbroken streak in mid-tier IT besides Tier-1 majors); FY26 delivered 17.4% USD growth + 90 bps EBIT margin expansion + 33.2% PAT growth — *significantly* outpacing Tier-1 peers. **The $2B FY27 Q4 exit guidance is partial guidance** (run-rate, not full-year revenue) with explicit confidence (\"plus minus a quarter at worst\"); EBIT margin 16-17% is *aspiration not formal commitment* — important nuance for setting expectations. **AI Investor Day June 2026** = unprecedented transparency commitment for an Indian IT services firm = signals high confidence in AI platform thesis. **Watch FY27 quarterly cadence**: Q1 USD revenue $455-465M (+4-7% QoQ) + EBIT margin 16%+ + ACV bookings $475-500M = on track. **Mgmt has been transparent on bad news** (top-5 client softness, Europe declining, AI cannibalisation risk acknowledged) = credibility intact.",
        growthDrivers: [
            {
                driver: "1. BFSI Run-Rate Scaling (+25-28% YoY through FY28)",
                impact:
                    "BFSI $600M FY26 → ₹770-780M FY27 (+28-30%) → $950M-1B FY28 (+22-30%). Each ₹100M BFSI run-rate addition at 17% blended margin = ~₹17M EBIT = ~₹125 cr PAT contribution = ~₹8 EPS impact. **Highest-impact, highest-confidence FY27-28 lever** given vertical leadership + DORA/BCBS239/regulatory tailwind + payment modernisation deals.",
            },
            {
                driver: "2. EBIT Margin Expansion (15.6% → 16.5-17% over 2-3 years)",
                impact:
                    "Each 50 bps margin expansion on FY28 revenue $2,350M (~₹19,500 cr) = ~₹100 cr EBIT = ~₹70-75 cr PAT = ~₹4-5 EPS. **Drivers**: AI-driven FTE productivity (SASWA internal use); subcon cost reduction; utilization 88% optimal; attrition 13% best-in-class. **Risk**: RM/talent inflation; pricing pressure from Tier-1 competition.",
            },
            {
                driver: "3. AI Platform Monetisation (SASWA / IORA / GenAI Hub) — long-dated catalyst",
                impact:
                    "If AI platform revenue separately reported as $100-200M in FY28 (5-10% of revenue) at higher gross margin (35-40% vs services 28-30%), this expands EBIT margin 50-100 bps incrementally + justifies higher PE premium. **Asymmetric upside**: $100M platform revenue at 40% gross = ₹330 cr gross profit = ~₹150 cr PAT = ~₹10 EPS at 35-40x PE = ₹350-400 stock impact. **AI Investor Day June 2026 = critical credibility test**.",
            },
            {
                driver: "4. PE Channel + Hari Abhiyankar GTM Ramp",
                impact:
                    "More PE-owned companies in US than public companies; Persistent investing in dedicated PE/Professional Services GTM with senior McKinsey-trained leader. **Each $50-100M annual PE channel revenue** at 17% blended margin = ~₹125 cr-₹250 cr PAT contribution = ~₹8-16 EPS impact. **Long-dated FY27-28 catalyst**.",
            },
            {
                driver: "5. Top-100 Customer Deepening + New Logo Wins",
                impact:
                    "Top-100 customers all growing 19-21% YoY; customer bucket expansion ($5M+ 62 vs 55; $10M+ 29 vs 21; $20M+ 12 vs 10). **Each new $20M+ customer = ~₹165 cr revenue = ~₹25-30 cr PAT contribution = ~₹2 EPS**. **Deepening + new logos** combined = sustainable ~17% revenue compounding.",
            },
        ],
    },

    /* SECTION 5 — Concall Signals ------------------------------- */
    concallSignals: {
        bullish: [
            {
                title: "24th consecutive quarter of revenue growth + EBIT +30.5% YoY + PAT +33.7% YoY = compounding firing on all cylinders",
                body:
                    "**Q4 Revenue $436M (+16.2% YoY)** = 24th consecutive quarter of growth in INR terms — among the longest unbroken streaks in Indian IT services (only TCS, Infosys, HCL Tech comparable). **EBIT +30.5% YoY (margin 16.3% +90 bps FY26)** + **PAT +33.7% YoY (margin 13.1%)** = operating leverage compounding cleanly. **FY26 OCF/PAT 93.6%** vs FY25 82.6% = +1100 bps cash quality improvement. **Top-100 customers all growing 19-21% YoY across buckets** — the entire client base is deepening, not just trophy logos.",
            },
            {
                title: "BFSI vertical leadership entrenched at $600M run-rate (+28.4% FY26) — 'credible challenger to Tier-1'",
                body:
                    "BFSI revenue $600M annual run-rate (+24.3% Q4 / +28.4% FY26 YoY) = the leading and fastest-growing vertical. **Top 4 of 5 banks in US + India; top 3 of 5 large global fintechs; top 3 of 5 brokerage/wealth managers**. 4 focus areas: (a) AI-led software engineering, (b) Payments + digital assets (FedNow + Nordic bank), (c) Data infrastructure (European bank Basel/AML/KYC documentation -70% via IORA), (d) Non-linear cost transformation (Australian life-insurer digital underwriting). **Mgmt: \"credible challenger to Tier-1 outsourcing firms\"** — vertical positioning genuinely competitive.",
            },
            {
                title: "AI Platform thesis materialising in revenue — SASWA/IORA/GenAI Hub deployed in marquee deals + Investor Day June 2026 catalyst",
                body:
                    "**SASWA platform deployed**: US public-safety law-enforcement SDLC modernisation (organisation context + purpose-built SLMs + unified agents/humans); pharma drug-discovery (knowledge graph + fine-tuned LLMs + Google Cloud + MedGemma + TX Gemma); Nvidia Bio-Demo joint solution for protein structure + molecular simulation. **IORA platform**: European bank documentation cycle -70% reduction; 25,000 lines of legacy code decoded. **120+ patents; 500+ agents; partner ecosystem deep** (Anthropic, OpenAI, Nvidia, Google, Microsoft, Salesforce, Databricks, Snowflake). **AI Investor Day June 2026 in Pune** with hands-on hackathon for investors = unprecedented transparency commitment. **AI is monetising AND defending margins**.",
            },
            {
                title: "Mgmt $2B FY27 Q4 exit run-rate guidance unchanged + high-confidence — best mid-tier visibility in Indian IT",
                body:
                    "CEO Sandeep Kalra explicit: \"Marching towards $2 billion FY27 Q4 exit steadily; plus minus a quarter at worst.\" Implies $500M quarterly run-rate by Q4 FY27 = +14.7% YoY = FY27 full-year revenue $1,950-2,000M (+18-20% YoY). **Combined with EBIT margin aspiration 16-17%** (Vinit Teredesai explicit) + FY27 vertical pecking order HLS-BFSI-Tech (per CEO) = **multi-year visibility unusually concrete for mid-tier IT**. **Cumulative FY26-28 PAT growth of 70-80%** at base case = compelling earnings compounding.",
            },
            {
                title: "Best-in-class operational metrics: Attrition 13%, Utilization 88%, OCF/PAT 93.6% FY26, Cash ₹2,762 cr — capital flexibility",
                body:
                    "**Attrition 13.0% (down from 13.5% Q3)** = best-in-class in mid-tier IT (peer median 14-17%); reflects brand strength + AI capability investment retaining talent. **Utilization 88% TTM at optimal range** (90%+ would signal bench compression). **FY26 OCF/PAT 93.6%** = cash quality excellent. **Cash + Investments ₹2,762 cr; D/E 0.06x = essentially debt-free**. **Final dividend ₹18 + Interim ₹22 = ₹40/share FY26** (+14% YoY). **Capital flexibility for opportunistic M&A or buyback** if fully-priced equity is the highest-return use of capital.",
            },
        ],
        bearish: [
            {
                title: "Premium valuation P/E 40.63x vs industry 19.73x = 2x premium fully prices in 17%+ growth + AI optionality",
                body:
                    "P/E 40.63x is at the upper end of mid-tier IT range (Coforge 32-35x; LTIM 30-32x; Mphasis 28-30x; HCL Tech 26-28x; TCS 28-30x; Infosys 26-28x; Wipro 22-24x). **Single-quarter <13% YoY growth or EBIT margin slipping to 14% = multiple compression to 32-35x = -15-20% stock impact**. **Re-rating runway constrained**; the franchise has to *deliver* the 17%+ growth + EBIT 16-17% + AI platform monetisation just to *justify* current multiple. **Asymmetric earnings disappointment risk** = a single bad quarter can compress 18-24 months of returns.",
            },
            {
                title: "AI-led SDLC cannibalisation in tech vertical is a real near-term risk per mgmt's own admission",
                body:
                    "CEO Sandeep Kalra explicit: \"tech may be compressed for a quarter, two, three; we may go cannibalise our own business... but at $1.7B we're very small in this and there's enough new outsourcing.\" **Tech vertical FY26 +13.8% YoY (slowest of three core verticals)**; if AI-led SDLC compression intensifies in FY27, vertical growth could slip to single-digits. **Even mgmt's own example** — pharma drug-discovery solution: \"we are effectively moving from data aggregation to LLM-driven discovery workflows embedded directly into research and development\" = the AI is doing what would have required 5-10x more services hours = revenue compression risk.",
            },
            {
                title: "Top-5 client softness + Europe sequential decline + India aberration = highest-growth cohort plateauing signals",
                body:
                    "**Top-5 customer revenue mildly soft Q4** (mgmt: \"cost savings/offshoring negotiations are normal\" — but typical mature-relationship dynamics include some flat-to-mild-decline quarters). **Europe -1.8% Q4 sequentially** (mgmt: \"customer puts and takes\"; FY26 Europe +26.7% headline strong). **India +4.2% Q4 is aberration** (GCC IP renewal in INR shifted classification). **None thesis-breaking individually**, but cumulatively suggest the highest-growth cohorts may be plateauing as base scales. **Risk**: if Top-5 grows <15% YoY in FY27, blended growth slips below 17%.",
            },
            {
                title: "OCF/PAT dipped to 77% in Q4 + macro overhang from Middle East war + tariff uncertainty",
                body:
                    "**Q4 OCF/PAT 77% (vs Q3 91%; FY26 93.6%)** due to higher unbilled revenue + tax refund delays + insurance premium. CFO: \"expect to normalise next quarter.\" **Bounded but worth monitoring**. **Middle East war / oil price overhang**: while Persistent has zero direct Middle East exposure, prolonged conflict = oil prices high = inflation impact = enterprise IT spend pressure across sector. **Tariff uncertainty + GenAI deflationary impact on pricing** continued through FY26 — if intensifies in FY27, Persistent's pricing premium could compress.",
            },
            {
                title: "Tier-1 IT competitive intensity in AI catching up — TCS/Infosys/HCL aggressively investing",
                body:
                    "**Persistent's mid-tier growth premium (17% vs Tier-1 5-7%)** depends on continued AI/platform differentiation lead. **TCS Ignio + Infosys Topaz + HCL AI Force** = Tier-1 majors investing aggressively in AI platforms; their pricing power + delivery scale + customer entrenchment could compress mid-tier premium over 3-5 years. **Risk**: if AI platforms commoditise or if Tier-1 catches up on tooling, Persistent's PE premium 2x compresses to 1.5x = -25-30% multiple compression. **Long-dated structural risk**, not near-term, but real.",
            },
        ],
    },

    /* SECTION 6 — Five Most Important Takeaways ----------------- */
    takeaways: [
        {
            text:
                "**Q4 FY26 = textbook 'high-quality compounder firing on all cylinders' quarter** — Revenue $436M (+16.2% YoY, 24th consecutive quarter of growth); EBIT margin 16.3% (+30.5% YoY EBIT growth); PAT margin 13.1% (+33.7% YoY); BFSI vertical $600M run-rate (+28.4% FY26 YoY); Top-100 customers all growing 19-21% YoY; Attrition 13% best-in-class; FY26 OCF/PAT 93.6%. **The franchise is structurally strong + entrenched**.",
            impact: "strengthens",
        },
        {
            text:
                "**Mgmt $2B FY27 Q4 exit run-rate guidance unchanged + EBIT margin aspiration 16-17% + multi-vertical mix shift (HLS overtaking Tech as #2)** = **FY27 PAT ₹2,300-2,400 cr (+22-26%) → EPS ₹145-150; FY28 PAT ₹2,800-3,000 cr → EPS ₹176-188**. CEO Sandeep Kalra + CFO Vinit Teredesai 24-quarter unbroken delivery = highest mgmt credibility tier in mid-tier IT.",
            impact: "strengthens",
        },
        {
            text:
                "**AI Platform thesis materialising in revenue, not just narrative** — SASWA/IORA/GenAI Hub deployed in marquee deals (US public-safety, pharma drug-discovery, FedNow, Nordic bank, Australian life-insurer); 120+ patents; 500+ agents; deep partner ecosystem (Anthropic, OpenAI, Nvidia, Google, Microsoft, Salesforce, Databricks, Snowflake). **AI Investor Day June 2026 in Pune** = unprecedented transparency commitment + critical credibility test for premium valuation.",
            impact: "strengthens",
        },
        {
            text:
                "**Premium valuation P/E 40.63x vs industry 19.73x = 2x premium fully prices in 17% growth + AI optionality** — *re-rating runway constrained*. Single-quarter <13% YoY growth or EBIT margin slipping to 14% = multiple compression to 32-35x = -15-20% stock impact. **AI-led SDLC cannibalisation in tech vertical** acknowledged by mgmt as 1-3 quarter compression risk.",
            impact: "weakens",
            note: "asymmetric downside risk at premium PE",
        },
        {
            text:
                "**Stock at ₹4,805.80 (live, +0.05%) — P/E 40.63x; P/B 9.67x; ROE 23.80%; Mkt Cap ₹75,770 cr**. **Asymmetric setup**: bear case ₹3,800-4,200 (FY27 growth slips below 15% + AI cannibalisation + macro = -12-21%), base case ₹5,400-5,800 (FY27 EPS ₹150 × 36-39x = +12-21%), bull case ₹6,400-7,200 (FY28 visibility + AI platform monetisation + EBIT margin 17% + PE premium sustained = +33-50%). **Verdict: HOLD/ACCUMULATE on weakness toward ₹4,200-4,400; current ₹4,805 is at upper-middle of fair value zone**.",
            impact: "neutral",
        },
    ],

    /* SECTION 7 — Final Assessment (4 questions) ---------------- */
    finalAssessment: {
        /* Q1 — Is the core investment thesis intact? */
        thesisIntact: {
            verdict:
                "Yes — strengthened materially by Q4 FY26's broad-based growth, AI platform deployment in marquee deals, and unchanged $2B FY27 Q4 exit run-rate guidance",
            reasons: [
                "**The structural franchise is genuinely strong** — 24 consecutive quarters of revenue growth (longest unbroken streak in mid-tier Indian IT besides Tier-1 majors); FY26 USD revenue +17.4% (3x faster than Tier-1 5-7%); FY26 EBIT margin +90 bps to 15.6%; FY26 PAT growth 33.2% (operating leverage compounding); FY26 OCF/PAT 93.6% (cash quality excellent); Cash ₹2,762 cr + D/E 0.06x = essentially debt-free. **The compounding engine is firing on all cylinders**.",
                "**BFSI vertical leadership is entrenched** — $600M annual run-rate (+28.4% FY26 YoY) with top 4 of 5 banks in US + India, top 3 of 5 large global fintechs, top 3 of 5 brokerage/wealth managers. **4 focus areas with multi-quarter visibility**: AI-led software engineering, payments/digital assets (FedNow, Nordic bank), data infrastructure (Basel/AML/KYC modernisation), non-linear cost transformation (Australian life-insurer). **Positioned as 'credible challenger to Tier-1 outsourcing firms'** — competitive position genuinely strong.",
                "**AI platform thesis is materialising in revenue, not just slides** — SASWA + IORA + GenAI Hub deployed in concrete marquee deals (US public-safety SDLC modernisation, pharma drug-discovery on Google Cloud + MedGemma + TX Gemma, FedNow real-time payments, Nordic bank payments modernisation, Australian life-insurer digital underwriting); 120+ patents filed; 500+ agents in portfolio; partner ecosystem genuinely deep (Anthropic, OpenAI, Nvidia, Google, Microsoft, Salesforce, Databricks, Snowflake). **AI Investor Day June 2026** in Pune with hands-on hackathon for investors = unprecedented transparency commitment.",
                "**Mgmt credibility is at the highest tier** — CEO Sandeep Kalra + CFO Vinit Teredesai have delivered 24 consecutive quarters of growth + 17.4% FY26 USD growth + 90 bps EBIT margin expansion + 33.2% PAT growth. **The $2B FY27 Q4 exit guidance unchanged** with explicit confidence (\"plus minus a quarter at worst\"); EBIT margin 16-17% aspiration credible given FY26 trajectory. **Mgmt has been transparent on bad news** (top-5 client softness, Europe declining, AI cannibalisation risk acknowledged) = credibility intact.",
                "**The thesis weakens if**: (a) Q1 FY27 USD revenue <$440M (signals trajectory miss for $2B exit), (b) Top-100 customer growth slips below 15% YoY, (c) BFSI vertical growth slips below 20% YoY, (d) EBIT margin slips below 15%, (e) AI Investor Day June 2026 fails to convince on platform monetisation thesis. **The thesis strengthens if**: (a) FY27 exit ahead of $500M ($510-520M), (b) BFSI hits $1B run-rate by FY28, (c) HLS overtakes Tech in FY27 as #2 vertical, (d) AI platform reported as separate revenue line item, (e) EBIT margin reaches 17% in FY28.",
            ],
        },

        /* Q2 — Re-rate triggers + probability */
        rerateTriggers: [
            {
                trigger: "AI Investor Day June 2026 demonstrates platform monetisation credibility",
                probability: "Medium-High",
                rationale:
                    "Unprecedented transparency commitment for mid-tier Indian IT — hands-on hackathon with investors + customer case studies + partner showcase. **If mgmt convincingly demonstrates SASWA/IORA platform revenue trajectory + AI margin defence**, market re-rates premium PE multiple from 40x to 42-45x = +5-12% upside. **Risk**: if showcase is generic and lacks specific monetisation milestones, multiple compression risk = -5-10%. **Single most important near-term catalyst**.",
            },
            {
                trigger: "FY27 H1 print: USD revenue $895-915M (+18-20% YoY) + EBIT margin >16%",
                probability: "High",
                rationale:
                    "Q1 typically softer; Q2 picks up. **If H1 USD revenue tracks $895-915M (+18-20%) + Q2 EBIT margin >16%**, market re-rates toward upper-end fair value (₹5,400-5,800 = +12-21%). **If H1 USD revenue <$870M or EBIT margin <15.5%**, multiple compression to 35-37x = -10-15%. **Most important quarterly checkpoint for FY27 thesis**.",
            },
            {
                trigger: "BFSI vertical reaching $1B run-rate by FY28 (+25%+ YoY sustained)",
                probability: "Medium-High",
                rationale:
                    "BFSI $600M FY26 (+28.4%); $750-780M FY27 trajectory; $950M-$1B FY28. **If BFSI hits $1B+ by FY28**, the entire franchise re-rates (Tier-1 IT typically valued at premium for >$1B BFSI books); mid-tier premium widens. **+10-20% multiple expansion** if BFSI run-rate confirms.",
            },
            {
                trigger: "AI platform monetisation crystallising as separate reported revenue line ($100-200M FY28)",
                probability: "Medium",
                rationale:
                    "If SASWA/IORA monetises as separately-tracked AI services line at $100-200M (5-10% of revenue) at higher gross margin (35-40% vs services 28-30%), this expands EBIT margin 50-100 bps + justifies higher PE premium. **Long-dated FY28 catalyst**; not in current valuation. **Asymmetric upside lever**.",
            },
            {
                trigger: "Sector-wide IT services re-rating on AI productivity gains accepted",
                probability: "Medium",
                rationale:
                    "If macro stabilises (Middle East war resolves; tariff uncertainty fades; GenAI deflation transitions to productivity tailwind), IT services sector P/E multiples expand by 3-5x. **Persistent as the highest-growth + AI-leadership mid-tier player would be the highest-beta to sector re-rating** = potentially +15-25% multiple expansion. External catalyst, not in mgmt's control.",
            },
        ],

        /* Q3 — Upside if guidance fully met */
        upsideIfGuidanceMet: {
            currentPrice: "₹4,805.80 (live NSE LTP via Groww MCP, 29 Apr 2026 19:08 IST)",
            targetPrice: "₹5,800 – ₹6,800",
            upsidePct: "+21% to +41%",
            horizon: "18-24 months (FY28 EPS-multiple basis with mgmt $2B exit + 16-17% EBIT margin delivered)",
            assumptions:
                "**Base case (FY27 $2B Q4 exit + EBIT margin 16-16.5% + EPS ₹148):** FY27 USD Revenue $1,975M (+19%); INR Revenue ₹17,775 cr (+21%); EBIT margin 16.2% = EBIT ₹2,879 cr (+25%); PAT margin 13.0% = PAT ₹2,310 cr (+19%); EPS ₹148. **FY28 USD Revenue $2,360M (+19%); INR Revenue ₹21,240 cr; EBIT margin 16.7% = EBIT ₹3,547 cr; PAT ₹2,825 cr (+22%); EPS ₹181**. **5-yr median P/E for Persistent ~35-42x; current 40.63x; industry 19.73x**. Apply 32x to FY28 EPS ₹181 = ₹5,792 (conservative); 35x = ₹6,335; 38x = ₹6,878. **Bull case** (AI platform monetised + BFSI $1B + EBIT 17%): apply 38-40x to FY28 EPS ₹185 = ₹7,030-7,400. **Conservative target ₹5,800** (FY28 EPS ₹181 × 32x); Aggressive target ₹6,800** (FY28 EPS ₹181 × 37.5x). **Range ₹5,800-6,800 (+21-41%) over 18-24 months**.",
            workings:
                "**FY27 Build:** USD Revenue $1,975M (+19%); INR Revenue ₹17,775 cr at avg ₹90.0/USD; EBIT margin 16.2% (mgmt aspiration trajectory) = ₹2,879 cr; Other income ₹150 cr; PBT ₹3,029 cr; Tax 22.6% = ₹685 cr; **PAT ₹2,344 cr → EPS ₹148** (rounded ₹2,300-2,400 cr). **FY28 Build:** USD Revenue $2,360M (+19%); INR Revenue ₹21,240 cr; EBIT margin 16.7% = ₹3,547 cr; Other income ₹175 cr; PBT ₹3,722 cr; Tax 22.6% = ₹841 cr; **PAT ₹2,881 cr → EPS ₹182** (rounded ₹2,800-3,000 cr / ₹176-188). **FY29 Build:** USD Revenue $2,800M; PAT ₹3,400-3,600 cr; EPS ₹215-228. **Multiples**: 5-yr median P/E 35-42x; industry 19.73x; current 40.63x. Apply 32x to FY28 EPS ₹181 = ₹5,792; 35x = ₹6,335; 38x = ₹6,878. **Bull case** (premium re-rating + BFSI $1B + AI monetisation): 38-40x = ₹7,030-7,400. **18-24 month range ₹5,800-6,800 (+21-41%)** weights base + partial bull.",
        },

        /* Q4 — Best value entry zone */
        valuationEntryZone: {
            bestValueRange: "₹4,000 – ₹4,400",
            fairValue: "₹4,500 – ₹5,200",
            currentZone: "Fair — at upper-middle of fair value (₹4,805.80)",
            rationale:
                "**Trailing P/E:** 40.63x vs industry 19.73x = **2x premium fully prices in 17%+ growth + AI optionality + BFSI vertical leadership**. **5-yr median P/E for Persistent ~35-42x = current 40.63x is at upper-middle of trend**; *not* cheap, *not* expensive. **P/B:** 9.67x reflects asset-light services + ROE 23.80% (P/B/ROE = 0.41x = comparable to Coforge 0.40x, LTIM 0.45x, HCL Tech 0.50x). **Forward P/E on FY27E EPS ₹148**: 32.5x — *fair*; **on FY28E EPS ₹181**: 26.5x — *cheap if mgmt guidance delivered*. **52-week range** (estimated) ₹3,800-5,500; current ₹4,805 is upper-middle range. **Best value entry ₹4,000-4,400** = 27-30x FY27E P/E + 8-12% downside cushion for AI cannibalisation/macro shock. **Fair value ₹4,500-5,200** = 30-35x FY27E P/E = current zone. **Above ₹5,500** starts pricing FY28 EPS ₹181 at 30x explicitly; **above ₹6,500** prices AI platform monetisation + BFSI $1B + EBIT 17% delivery. **Per *valuation_analysis.md* logic**: deploy moderately at current ₹4,500-4,800 (fair value) with conviction earned from Q4 print + AI Investor Day catalyst; **aggressive accumulate below ₹4,200** if (a) Q1 FY27 disappointment, (b) AI Investor Day fails to convince, (c) market correction 8-12% provides better entry. **Asymmetric setup risks: -12-21% downside to ₹3,800-4,200 (FY27 disappointment + AI cannibalisation + macro shock + multiple compression to 32-35x) vs +21-41% upside to ₹5,800-6,800 (FY28 mgmt guidance delivered) = roughly 1.5:1 to 2:1 reward-to-risk** — *adequate but not compelling* at current price. *Better to wait for entry below ₹4,400*.",
        },

        summary:
            "**Persistent Systems Q4 FY26 is a textbook 'high-quality compounder firing on all cylinders' quarter** — Revenue $436M (+16.2% YoY, 24th consecutive quarter of growth); EBIT margin 16.3% (+30.5% YoY); PAT margin 13.1% (+33.7% YoY); BFSI $600M run-rate (+28.4% FY26 YoY); Top-100 customers all growing 19-21% YoY; Attrition 13% best-in-class. **The franchise is structurally strong with multiple compounding engines**: BFSI vertical leadership entrenched; AI platforms (SASWA, IORA, GenAI Hub) deployed in marquee deals (US public-safety, pharma drug-discovery, FedNow, Nordic bank, Australian life-insurer); HLS expected to overtake Tech as #2 vertical in FY27; PE channel ramping with new Global Head Hari Abhiyankar (ex-McKinsey). **Mgmt $2B FY27 Q4 exit run-rate guidance unchanged + high-confidence (\"plus minus a quarter at worst\") + EBIT margin aspiration 16-17%** implies **FY27 PAT ₹2,300-2,400 cr (+22-26%) → EPS ₹148; FY28 PAT ₹2,800-3,000 cr → EPS ₹181**. **AI Investor Day June 2026 in Pune** = unprecedented transparency commitment + critical credibility test for premium valuation. **Trading at P/E 40.63x vs industry 19.73x = 2x premium fully pricing in 17% growth + AI optionality**; *re-rating runway constrained*. **Asymmetric setup**: bear case ₹3,800-4,200 (FY27 growth slips + AI cannibalisation + macro = -12-21%), base case ₹5,400-5,800 (FY27 EPS ₹148 × 36-39x = +12-21%), bull case ₹6,400-7,200 (FY28 visibility + AI platform monetisation + EBIT 17% + PE premium sustained = +33-50%). **Roughly 1.5:1 to 2:1 reward-to-risk** at current ₹4,805 = *adequate but not compelling*. **Verdict: HOLD with ACCUMULATE bias on weakness toward ₹4,200-4,400; current ₹4,805 is at upper-middle of fair value zone; aggressive accumulate <₹4,200**. **This is fundamentally different from earlier turnaround stories (RBL, IDFC FB, Five-Star, Piramal Pharma) and the 360 ONE compounder analysis** — Persistent is a *high-quality compounder at a premium valuation* where entry timing matters more than franchise conviction. **The earnings compounding (FY27-29 PAT CAGR 22-26%) is the primary return driver, not re-rating**. *Wait for the right entry; the franchise is too good to short, too expensive to chase.*",
    },
});
