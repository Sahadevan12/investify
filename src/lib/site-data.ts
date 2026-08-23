export const SITE = {
  name: "Investify Prism",
  legalName: "Investify Prism Wealth Advisors Pvt. Ltd.",
  tagline: "See. Invest. Grow.",
  description:
    "Investify Prism helps Non-Resident Indians open demat accounts, invest in equity, mutual funds, IPOs and NPS, and plan insurance, taxation and inheritance from anywhere in the world.",
  phone: ["+91 93611 53599"],
  phoneHref: "+919361153599",
  email: "investifyprism12@gmail.com",
  address:
    "12th Floor, Prism Towers, Anna Salai, Chennai - 600002, Tamil Nadu, India",
  mapsUrl: "https://maps.google.com/?q=Anna+Salai+Chennai",
  loginUrl: "#",
  appPlayStoreUrl: "#",
  appAppStoreUrl: "#",
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
    whatsapp: "#",
  },
};

export type NavChild = { label: string; href: string; icon: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  {
    label: "Products",
    href: "#",
    children: [
      { label: "Demat Account", href: "/products/demat-account", icon: "Wallet" },
      { label: "Equity & Derivatives", href: "/products/equity-derivatives", icon: "TrendingUp" },
      { label: "IPO", href: "/products/ipo", icon: "Rocket" },
      { label: "Mutual Funds", href: "/products/mutual-funds", icon: "PieChart" },
      { label: "NPS", href: "/products/nps", icon: "ShieldCheck" },
      { label: "Life & Health Insurance", href: "/products/life-health-insurance", icon: "HeartPulse" },
    ],
  },
  {
    label: "Our Services",
    href: "#",
    children: [
      { label: "Inheritance Planning", href: "/services/inheritance-planning", icon: "ScrollText" },
      { label: "Taxation Planning", href: "/services/taxation-planning", icon: "Receipt" },
      { label: "Geriatric Care", href: "/services/geriatric-care", icon: "HeartHandshake" },
    ],
  },
  {
    label: "Knowledge Center",
    href: "#",
    children: [
      { label: "Calculators", href: "/knowledge-center/calculators", icon: "Calculator" },
      { label: "Blogs", href: "/knowledge-center/blog", icon: "Newspaper" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export type Product = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  summary: string;
  description: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "demat-account",
    title: "NRI Demat & Trading Account",
    shortTitle: "Demat Account",
    icon: "Wallet",
    summary:
      "One digital account that holds every share, bond and fund you own in India, so paperwork never slows you down.",
    description:
      "Your NRI demat and trading account is the foundation of every investment you make in India. We handle the NRE/NRO linkage, RBI and FEMA formalities and PIS registration so you can start investing without chasing documents across time zones. Once it's live, buying, selling and tracking holdings takes just a few taps.",
    highlights: [
      "Fully digital account opening with e-KYC and video verification",
      "Linked seamlessly to your NRE or NRO bank account",
      "PIS and non-PIS options explained and set up correctly the first time",
      "Consolidated view of equity, mutual funds and bonds in one dashboard",
    ],
    faqs: [
      {
        q: "Can I open a demat account without visiting India?",
        a: "Yes. The entire process, from document upload to video KYC, is completed online from wherever you live.",
      },
      {
        q: "Do I need both an NRE and NRO account?",
        a: "It depends on whether you plan to repatriate your investment proceeds. We help you choose the right structure before you begin.",
      },
    ],
  },
  {
    slug: "equity-derivatives",
    title: "Equity & Derivatives for NRIs",
    shortTitle: "Equity & Derivatives",
    icon: "TrendingUp",
    summary:
      "Trade and invest in Indian stocks with research-backed guidance, while staying compliant with RBI and FEMA rules.",
    description:
      "Direct equity gives you the fastest way to participate in India's growth story. Our desk shares research notes, sector views and risk guardrails so you're never trading in the dark, and every order is routed through the correct PIS or non-PIS route automatically.",
    highlights: [
      "Access to NSE and BSE listed equities and index derivatives",
      "Weekly research notes and watchlists curated for NRI investors",
      "Position and margin tracking available on web and mobile",
      "Dedicated desk for time-zone-friendly order support",
    ],
    faqs: [
      {
        q: "Can NRIs trade in futures and options?",
        a: "NRIs can trade in exchange-traded derivatives on a non-repatriable basis, subject to RBI position limits, which we monitor for you.",
      },
      {
        q: "How is my trading account different from a resident account?",
        a: "It is routed through your PIS or non-PIS bank account so every trade stays compliant with FEMA reporting requirements.",
      },
    ],
  },
  {
    slug: "ipo",
    title: "IPO Investment for NRIs",
    shortTitle: "IPO",
    icon: "Rocket",
    summary:
      "Apply to Indian public issues from anywhere in the world and get in at the ground floor of new growth stories.",
    description:
      "IPO allotments move fast and paperwork delays cost opportunities. We keep you informed on upcoming issues, help you apply through the NRI-eligible route (UPI or ASBA via your NRE/NRO account) and track allotment status until shares land in your demat account.",
    highlights: [
      "Curated alerts for IPOs open to NRI investors",
      "Application support through ASBA and UPI-linked NRE accounts",
      "Real time allotment and listing day tracking",
      "Guidance on lock-in and repatriation rules for listed shares",
    ],
    faqs: [
      {
        q: "Can NRIs apply to every IPO in India?",
        a: "Most mainboard IPOs are open to NRIs on a non-repatriable basis; a few issues carry specific restrictions, which we flag before you apply.",
      },
      {
        q: "How quickly will I know if I got an allotment?",
        a: "Allotment status is usually available within a week of the issue closing, and we notify you as soon as it's out.",
      },
    ],
  },
  {
    slug: "mutual-funds",
    title: "Mutual Fund Investment for NRIs",
    shortTitle: "Mutual Funds",
    icon: "PieChart",
    summary:
      "Professionally managed portfolios that grow your wealth steadily, without asking you to track the market daily.",
    description:
      "Mutual funds let you diversify across equity, debt and hybrid strategies through a single, well-managed structure. We build a fund mix around your goals, risk appetite and repatriation needs, and review it with you at regular intervals so it keeps pace with your life.",
    highlights: [
      "Curated fund shortlists across equity, debt, hybrid and international categories",
      "Systematic Investment Plans (SIPs) set up directly from your NRE/NRO account",
      "Goal-based portfolios for education, retirement and wealth creation",
      "Annual portfolio review with rebalancing recommendations",
    ],
    faqs: [
      {
        q: "Can NRIs from the US and Canada invest in Indian mutual funds?",
        a: "Yes, though additional FATCA compliance is required and a limited set of fund houses accept US/Canada-based NRIs. We match you with those funds.",
      },
      {
        q: "Are mutual fund gains taxed differently for NRIs?",
        a: "TDS applies at source on redemption, at rates that vary by fund category and holding period, which our taxation desk can walk you through.",
      },
    ],
  },
  {
    slug: "nps",
    title: "National Pension Scheme for NRIs",
    shortTitle: "NPS",
    icon: "ShieldCheck",
    summary:
      "A retirement-focused investment that blends market growth with long-term stability and tax efficiency.",
    description:
      "NPS is a low-cost way to build a dedicated retirement corpus in India while you're working abroad. We help you choose the right asset allocation between equity, corporate debt and government securities, and manage the annual contribution and compliance calendar for you.",
    highlights: [
      "Choice of active or auto asset-allocation across equity and debt",
      "Tax benefits under Section 80CCD for contributions from India-sourced income",
      "Digital contribution reminders so you never miss a cycle",
      "Guidance on annuity selection at the time of retirement",
    ],
    faqs: [
      {
        q: "Can NRIs open an NPS account?",
        a: "Yes, NRIs can open a Tier I NPS account using their NRE or NRO bank account, subject to PAN and KYC documentation.",
      },
      {
        q: "What happens to my NPS account if I change my residency status?",
        a: "Your account continues to operate normally; only the contribution source account may need to be updated.",
      },
    ],
  },
  {
    slug: "life-health-insurance",
    title: "Life & Health Insurance for NRIs",
    shortTitle: "Life & Health Insurance",
    icon: "HeartPulse",
    summary:
      "Protection plans that insure you and your family against life events and medical costs, wherever you live.",
    description:
      "Insurance is the safety net behind every wealth plan. We compare term life, endowment and health cover options from leading Indian insurers, structured specifically for NRI eligibility, premium payment and claims processes.",
    highlights: [
      "Term life and health plans underwritten for NRI applicants",
      "Premium payment accepted from NRE/NRO or foreign currency accounts",
      "Claims assistance coordinated across time zones",
      "Family floater options covering dependants living in India",
    ],
    faqs: [
      {
        q: "Can I buy term insurance in India while living abroad?",
        a: "Yes, most insurers accept NRI applications, though premiums and medical requirements can vary by country of residence.",
      },
      {
        q: "How are claims handled if I'm not in India?",
        a: "Our claims desk coordinates documentation and hospital liaison on your behalf, keeping you updated through email and WhatsApp.",
      },
    ],
  },
];

export type Service = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  description: string;
  highlights: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "inheritance-planning",
    title: "Inheritance Planning",
    icon: "ScrollText",
    summary:
      "We know that talking about legacy can be delicate. We help you arrange everything so your loved ones are protected the way you intend.",
    description:
      "From drafting a will that holds up under Indian succession law to structuring nominations and legal heir documentation across your accounts, we handle inheritance planning with patience and discretion, keeping every family member informed only as much as you'd like.",
    highlights: [
      "Will drafting and registration guidance aligned with Indian succession law",
      "Nomination review across demat, mutual fund and insurance accounts",
      "Support for legal heirs during transmission of assets",
      "Cross-border estate coordination for assets held in multiple countries",
    ],
  },
  {
    slug: "taxation-planning",
    title: "Taxation Planning",
    icon: "Receipt",
    summary:
      "Taxes can be complicated. We explain everything in plain language and work with you to find strategies that fit your life.",
    description:
      "NRI taxation touches residency status, DTAA benefits, TDS on investment income and annual return filing. We build a yearly tax calendar around your income sources so nothing is missed, and structure new investments to be tax-efficient from day one.",
    highlights: [
      "Residential status and DTAA benefit assessment every financial year",
      "TDS optimisation on rental, capital gains and investment income",
      "Income tax return filing support for NRI income sources",
      "Repatriation planning under FEMA and RBI guidelines",
    ],
  },
  {
    slug: "geriatric-care",
    title: "Geriatric Care Support",
    icon: "HeartHandshake",
    summary:
      "As parents and loved ones age, new needs arise. We help you find the right care and peace of mind, wherever you are.",
    description:
      "Many of our NRI clients worry about ageing parents back home as much as they worry about their portfolios. We maintain a vetted network of home-care providers, geriatric specialists and emergency response partners in major Indian cities so you have a trusted contact on the ground.",
    highlights: [
      "Curated network of home-care and geriatric specialists in India",
      "Coordination support for medical appointments and emergencies",
      "Assistance setting up health insurance and claims for parents",
      "Regular status updates so you stay informed from abroad",
    ],
  },
];

export const DIFFERENTIATORS = [
  {
    icon: "Target",
    title: "Goal-Focused Investment Strategy",
    description:
      "We focus on what matters most to you — wealth growth, income generation and asset protection — and move together toward those specific goals.",
  },
  {
    icon: "UserCheck",
    title: "Personalised Guidance for Every Investor",
    description:
      "Your investment journey is shaped around your personal goals and priorities, not generic templates, so guidance fits your life stage and risk comfort.",
  },
  {
    icon: "Route",
    title: "End-to-End Help at Every Stage",
    description:
      "We stay with you through onboarding, product selection, compliance, tracking and repatriation, so you always know your next step.",
  },
  {
    icon: "Heart",
    title: "Life-Centric Investment Planning",
    description:
      "Returns matter, but so does the life you're building. Every strategy supports milestones like education, retirement and family security.",
  },
  {
    icon: "Globe2",
    title: "Support That Never Depends on Location",
    description:
      "Distance is never a barrier. Wherever you live, you receive the same attention, communication and trustworthy support.",
  },
  {
    icon: "ShieldCheck",
    title: "Transparency You Can Trust",
    description:
      "You always know where your money is invested, how it's performing and what charges apply — explained in plain, straightforward language.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "We understand your goals first",
    description:
      "Before suggesting anything, we get clarity on your priorities, family responsibilities, risk comfort and long-term expectations.",
  },
  {
    step: "02",
    title: "We design the right investment mix",
    description:
      "Your portfolio is built thoughtfully across suitable products so it matches your timeline, lifestyle and growth expectations.",
  },
  {
    step: "03",
    title: "We execute everything smoothly",
    description:
      "Onboarding, documentation and investment placements are handled with complete support, so the process feels quick and simple.",
  },
  {
    step: "04",
    title: "We track and refine continuously",
    description:
      "Your portfolio is actively monitored and reviewed so it stays aligned with market conditions and life changes.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Arvind Menon",
    location: "Dubai, UAE",
    quote:
      "Time zones never seem to matter with Investify Prism — whenever I reach out, someone responds quickly and knows exactly where my portfolio stands.",
  },
  {
    name: "Priya Raghavan",
    location: "London, UK",
    quote:
      "I moved my entire mutual fund portfolio to them two years ago. The onboarding was completely paperless and the annual review calls are genuinely useful.",
  },
  {
    name: "Suresh Nair",
    location: "Singapore",
    quote:
      "What stood out was the honesty. They've talked me out of products that didn't fit my goals more than once, which is rare to find.",
  },
  {
    name: "Kavitha Subramaniam",
    location: "Toronto, Canada",
    quote:
      "Between my demat account, NPS and my parents' health insurance, they've simplified everything into one relationship I can actually keep track of.",
  },
  {
    name: "Rohan Iyer",
    location: "Sydney, Australia",
    quote:
      "The Prism Go app makes checking my India investments as easy as checking my Australian bank account. Support has always been prompt when I've needed it.",
  },
  {
    name: "Meera Pillai",
    location: "New Jersey, USA",
    quote:
      "Inheritance planning felt daunting until we sat down with their team. They made a sensitive topic simple and were patient with every question we had.",
  },
];

export const FAQS = [
  {
    q: "Who is considered an NRI?",
    a: "An NRI (Non-Resident Indian) is an Indian citizen or Person of Indian Origin (PIO) residing outside India, as defined under the Income Tax Act and FEMA guidelines.",
  },
  {
    q: "Can NRIs invest in the Indian stock markets?",
    a: "Yes. NRIs can invest in Indian equities, derivatives, mutual funds, IPOs and more through a properly linked NRE/NRO demat and trading account.",
  },
  {
    q: "What investment options are available for NRIs?",
    a: "NRIs can access demat and trading accounts, equity and derivatives, IPOs, mutual funds, the National Pension Scheme, and life and health insurance, along with supporting services like taxation and inheritance planning.",
  },
  {
    q: "Is there customer support available across time zones?",
    a: "Yes. Our support desk is structured to respond to NRI clients regardless of their local time zone, through phone, email and WhatsApp.",
  },
  {
    q: "Why should NRIs consider professional wealth management services?",
    a: "Professional guidance helps NRIs navigate FEMA and RBI regulations, tax implications across two countries, and product selection, while saving the time and complexity of managing it alone from abroad.",
  },
];

export const APP_FEATURES_1 = [
  "Invest in mutual funds, stocks and IPOs",
  "Monitor portfolio performance in real time",
  "Access research-backed insights",
];

export const APP_FEATURES_2 = [
  "Stay compliant regardless of your location",
  "Reach a support team you can rely on",
];

export const FOOTER_LINKS = {
  quick: [
    { label: "About us", href: "/about-us" },
    { label: "Demat Account", href: "/products/demat-account" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Blog", href: "/knowledge-center/blog" },
    { label: "KYC", href: "/kyc" },
  ],
  policies: [
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Regulators", href: "/regulators" },
    { label: "Sitemap", href: "/sitemap" },
  ],
};
