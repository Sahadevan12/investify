export const SITE = {
  name: "Investify Prism",
  legalName: "Investify Prism Wealth Advisors Pvt. Ltd.",
  tagline: "See. Invest. Grow.",
  description:
    "Explore wealth management, portfolio solutions, mutual funds, PMS, AIF, equities and diversified investment solutions with Investify Prism.",
  phone: ["+91 93611 53599"],
  phoneHref: "+919361153599",
  email: "contact@mail.investifyprism.com",
  loginUrl: "https://iiflcs.in/IILLTD/b9H1w",
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

export type Office = { city: string; address: string; mapsUrl: string };

export const OFFICES: Office[] = [
  {
    city: "Bengaluru",
    address:
      "No 80, Hulkul Ascent, 2nd Cross, Lavelle Road, Ashok Nagar, Shanthala Nagar, South, Bengaluru, Karnataka 560001",
    mapsUrl: "https://maps.google.com/?q=Hulkul+Ascent+Lavelle+Road+Bengaluru",
  },
  {
    city: "Chennai",
    address:
      "DN 610 & 611, 6th Floor, Kannammai Building, A Wing, Sundaram Avenue, Anna Salai, South, Chennai, Tamil Nadu 600006",
    mapsUrl:
      "https://maps.google.com/?q=Kannammai+Building+Sundaram+Avenue+Anna+Salai+Chennai",
  },
];

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
      { label: "Portfolio Management Services", href: "/products/portfolio-management-services", icon: "BarChart3" },
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
  {
    slug: "portfolio-management-services",
    title: "Portfolio Management Services (PMS)",
    shortTitle: "Portfolio Management",
    icon: "BarChart3",
    summary:
      "A professionally managed, directly-held equity portfolio built around your goals, with a dedicated relationship manager watching it daily.",
    description:
      "Portfolio Management Services are built for investors who want more than a fund fact sheet — they want a portfolio built around their own goals, risk appetite and tax situation, with stocks held directly in their own name rather than pooled units. As per SEBI regulation, PMS requires a minimum investment of ₹50 lakh, making it best suited to HNI and Ultra-HNI NRIs, senior professionals and those who have recently liquidated ESOPs, business proceeds or inherited wealth. Every PMS client at Investify Prism is paired with a dedicated relationship manager who tracks the portfolio daily, evaluates it against its benchmark, and keeps you updated wherever you are in the world.",
    highlights: [
      "Direct ownership of stocks in your own demat account, not pooled fund units",
      "Personalised asset allocation built around your goals and risk appetite, not a one-size-fits-all model",
      "Dedicated relationship manager tracking your portfolio and sharing regular performance updates",
      "Transparent fee structure — choose a flat fee plan or a hybrid plan with a performance component",
      "Minimum investment of ₹50 lakh as mandated by SEBI for all PMS providers",
      "Full visibility into every transaction, holding and corporate action in your portfolio",
    ],
    faqs: [
      {
        q: "How is PMS different from a mutual fund?",
        a: "In PMS, stocks are held directly in your own name and the strategy is built around your specific goals. In a mutual fund, you hold units of a pooled scheme that follows one strategy for every investor.",
      },
      {
        q: "Who should consider PMS over mutual funds?",
        a: "PMS suits HNI and Ultra-HNI investors, busy professionals who want a more personalised strategy, business owners, and anyone who has recently come into a large lump sum through ESOPs, a business sale or inheritance.",
      },
      {
        q: "What is the minimum investment for PMS in India?",
        a: "SEBI mandates a minimum investment of ₹50 lakh for Portfolio Management Services, regardless of which PMS provider you choose.",
      },
      {
        q: "Can NRIs invest in PMS?",
        a: "Yes. NRIs with completed KYC and an NRE or NRO-linked demat account can invest in PMS in India, and we handle the account linkage and compliance for you.",
      },
      {
        q: "How is the fee structured?",
        a: "We offer a flat annual fee plan or a hybrid plan with a lower fixed fee plus a performance share only above a return hurdle, so incentives stay aligned with your outcomes.",
      },
    ],
  },
];

export type Solution = {
  title: string;
  description: string;
  cta: string;
  icon: string;
};

export const SOLUTION_ROW_LABELS = [
  "HNI & Wealth Core",
  "Diversification",
  "Opportunities",
];

export const SOLUTIONS: Solution[] = [
  {
    title: "Equity & Stock Market",
    description:
      "Build long-term wealth through listed equities with a research-led approach to portfolio construction, diversification and market opportunities.",
    cta: "Explore Equity",
    icon: "TrendingUp",
  },
  {
    title: "Mutual Funds & SIP",
    description:
      "Build disciplined wealth through professionally managed mutual fund solutions across equity, debt and hybrid categories, with SIP options for long-term goals.",
    cta: "Explore Mutual Funds",
    icon: "PieChart",
  },
  {
    title: "PMS & AIF",
    description:
      "Explore professionally managed and alternative investment solutions designed for eligible HNI and affluent investors seeking differentiated portfolio opportunities.",
    cta: "Explore PMS & AIF",
    icon: "BarChart3",
  },
  {
    title: "Bonds, NCDs & Fixed Income",
    description:
      "Diversify your portfolio with bonds, NCDs, fixed-income opportunities and other debt-oriented solutions aligned with your investment objectives.",
    cta: "Explore Fixed Income",
    icon: "ScrollText",
  },
  {
    title: "SIF — Specialized Investment Funds",
    description:
      "Explore specialized investment strategies designed for investors seeking differentiated market-linked opportunities beyond conventional investment options.",
    cta: "Explore SIF",
    icon: "Target",
  },
  {
    title: "Model Portfolios",
    description:
      "Explore professionally curated portfolio strategies built around defined investment approaches, asset allocation and periodic portfolio review.",
    cta: "View Model Portfolios",
    icon: "Route",
  },
  {
    title: "IPO & New Opportunities",
    description:
      "Explore Initial Public Offerings and selected market opportunities as part of a diversified investment strategy.",
    cta: "Explore IPOs",
    icon: "Rocket",
  },
  {
    title: "Global Investing",
    description:
      "Access opportunities beyond Indian markets through global equities, ETFs and international investment solutions, subject to applicable regulations.",
    cta: "Explore Global Investing",
    icon: "Globe2",
  },
  {
    title: "Algo & Quantitative Trading",
    description:
      "Explore technology-driven and systematic market strategies designed for investors and traders seeking structured approaches to market participation.",
    cta: "Explore Algo Solutions",
    icon: "Calculator",
  },
];

export const SECONDARY_SOLUTIONS: Omit<Solution, "cta">[] = [
  {
    title: "NPS & Retirement Planning",
    description:
      "Long-term retirement-focused investment solutions designed to help build a structured retirement corpus.",
    icon: "ShieldCheck",
  },
  {
    title: "Commodities & Currency",
    description:
      "Market access across commodities and currencies for investors seeking additional diversification or tactical exposure.",
    icon: "ArrowUpRight",
  },
];

export type LifePlanningCard = {
  title: string;
  description: string;
  icon: string;
};

export const WEALTH_LIFE_PLANNING: LifePlanningCard[] = [
  {
    title: "Retirement & Financial Planning",
    description:
      "Plan for the lifestyle you want tomorrow with a structured approach to retirement goals, investments, income needs and long-term financial requirements.",
    icon: "Target",
  },
  {
    title: "Estate & Succession Planning",
    description:
      "Plan how your wealth and investments can be transferred to the next generation through a structured succession approach, in coordination with appropriate legal and professional advisors.",
    icon: "ScrollText",
  },
  {
    title: "Insurance & Wealth Protection",
    description:
      "Explore life and health insurance solutions that can complement your broader financial plan and help protect your family, income and accumulated wealth.",
    icon: "HeartPulse",
  },
  {
    title: "Tax-Efficient Investment Planning",
    description:
      "Understand the tax considerations associated with different investment choices and structure your portfolio with appropriate professional guidance.",
    icon: "Receipt",
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
    icon: "UserCheck",
    title: "Personalised Investment Approach",
    description:
      "We begin by understanding your financial goals, existing investments, risk preferences and long-term objectives before discussing suitable investment solutions.",
  },
  {
    icon: "Route",
    title: "One Relationship Across Your Investment Journey",
    description:
      "From account opening and investment selection to portfolio reviews and ongoing support, we aim to make your investment journey more organised and transparent.",
  },
  {
    icon: "Target",
    title: "Built for Long-Term Wealth Creation",
    description:
      "We focus on disciplined investing, diversification and long-term financial objectives rather than making short-term market movements the centre of your wealth strategy.",
  },
  {
    icon: "PieChart",
    title: "Multiple Investment Solutions",
    description:
      "Explore equities, mutual funds, PMS, AIF, bonds, NCDs, IPOs, global investment opportunities and other solutions through the broader investment ecosystem available to eligible investors.",
  },
  {
    icon: "BarChart3",
    title: "Research & Portfolio Perspective",
    description:
      "Understand your investment choices through market insights, portfolio analysis and structured discussions around risk, diversification and long-term objectives.",
  },
  {
    icon: "HeartHandshake",
    title: "Relationship-Led Support",
    description:
      "Get dedicated support throughout your investment journey, with regular communication and assistance when you need to review your financial priorities or portfolio.",
  },
  {
    icon: "Globe2",
    title: "HNI & NRI Wealth Solutions",
    description:
      "Specialised attention for HNI, affluent and NRI investors seeking to build, diversify and manage wealth across Indian and global investment opportunities, subject to applicable eligibility and regulations.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand Your Goals",
    subtitle: "We start with your financial picture",
    description:
      "Before discussing investment options, we understand your goals, existing portfolio, time horizon, liquidity needs, risk preferences and long-term wealth objectives.",
  },
  {
    step: "02",
    title: "Build Your Investment Strategy",
    subtitle: "Create a diversified investment approach",
    description:
      "We explore suitable investment solutions across equities, mutual funds, PMS, AIF, fixed income and other available opportunities based on your objectives and investment profile.",
  },
  {
    step: "03",
    title: "Execute With Clarity",
    subtitle: "Make the investment process simple",
    description:
      "From account opening and documentation to investment execution, we provide relationship-led support throughout the process and help you understand the relevant investment options.",
  },
  {
    step: "04",
    title: "Review & Evolve",
    subtitle: "Keep your portfolio aligned with your goals",
    description:
      "Markets, financial priorities and personal circumstances can change. We encourage periodic portfolio reviews to assess allocation, diversification and alignment with your evolving objectives.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Aravind Kumar",
    role: "Business Owner",
    location: "Chennai, Tamil Nadu",
    quote:
      "I wanted a more structured approach to managing my investments. Kishore took the time to understand my existing portfolio and explained the available options clearly without making the conversation complicated.",
  },
  {
    name: "Priya Lakshmi",
    role: "IT Professional",
    location: "Coimbatore, Tamil Nadu",
    quote:
      "What I appreciated most was the way everything was explained before I made an investment decision. The discussions around diversification and long-term goals gave me a clearer view of my portfolio.",
  },
  {
    name: "Suresh Nair",
    role: "Entrepreneur",
    location: "Kochi, Kerala",
    quote:
      "I was looking for someone who could help me look at my investments beyond individual stocks. The portfolio discussions helped me think more about diversification, risk and long-term wealth creation.",
  },
  {
    name: "Karthik Reddy",
    role: "Entrepreneur",
    location: "Hyderabad, Telangana",
    quote:
      "As a business owner, I don't always have time to follow every market development. Having a dedicated point of contact to discuss investment opportunities and portfolio-related questions has been valuable.",
  },
  {
    name: "Naveen Kumar",
    role: "Professional",
    location: "Bengaluru, Karnataka",
    quote:
      "The investment process was explained step by step, which made it easier for me to understand what I was investing in and why it was being considered for my financial goals.",
  },
  {
    name: "Meenakshi Srinivasan",
    role: "Business Professional",
    location: "Madurai, Tamil Nadu",
    quote:
      "I was particularly interested in building a diversified portfolio rather than focusing only on one investment category. The conversations around mutual funds, equities and other solutions helped me look at my investments more holistically.",
  },
];

export const FAQS = [
  {
    q: "What investment solutions does Investify Prism offer?",
    a: "Investify Prism provides access to a range of investment solutions through the applicable IIFL Capital ecosystem, including equities, mutual funds and SIPs, IPOs, bonds and NCDs, PMS, AIF, SIF and other investment opportunities, subject to applicable eligibility and regulations.",
  },
  {
    q: "Who can work with Investify Prism?",
    a: "We work with a broad range of investors, with a particular focus on HNI, affluent, business-owner and NRI investors seeking structured approaches to building and managing wealth. Investment solutions are considered based on the investor's objectives, risk profile, eligibility and investment horizon.",
  },
  {
    q: "What is HNI wealth management?",
    a: "HNI wealth management involves taking a structured view of an investor's wealth, including portfolio allocation, diversification, investment objectives, liquidity requirements and long-term financial goals. The specific solutions available depend on the investor's circumstances and eligibility.",
  },
  {
    q: "Can I invest in mutual funds and start an SIP?",
    a: "Yes. Mutual funds and SIPs can be considered as part of a long-term investment strategy. The appropriate investment approach depends on factors such as your financial goals, time horizon, risk profile and existing investments.",
  },
  {
    q: "What is PMS and who can consider it?",
    a: "Portfolio Management Services (PMS) provide professionally managed portfolio solutions for eligible investors. PMS generally involves portfolio management based on an agreed investment strategy and applicable regulatory requirements. Suitability, minimum investment requirements and other conditions should be reviewed before investing.",
  },
  {
    q: "What are AIFs?",
    a: "Alternative Investment Funds (AIFs) are privately pooled investment vehicles that invest according to defined strategies and regulatory frameworks. Different AIF categories have different structures, strategies, risks and eligibility requirements.",
  },
  {
    q: "Can NRIs invest through Investify Prism?",
    a: "NRIs may have access to certain investment opportunities in India, subject to applicable FEMA, tax, regulatory, account and product-specific requirements. The available investment options can vary based on the investor's residential status and the type of investment.",
  },
  {
    q: "Can you review my existing investment portfolio?",
    a: "Yes. A portfolio review can help you understand your existing asset allocation, diversification, concentration, investment objectives and areas that may require further discussion. Any investment decision should be made after considering your individual circumstances and applicable risks.",
  },
  {
    q: "Do I need a large investment amount to start?",
    a: "Not necessarily. Investment solutions have different minimum investment requirements. Mutual funds and SIPs, for example, can accommodate investors starting with relatively smaller amounts, while certain HNI-oriented products such as PMS and AIF have specific eligibility and minimum investment requirements.",
  },
  {
    q: "Is investing in the stock market risky?",
    a: "Yes. Market-linked investments can fluctuate in value and may involve the risk of loss of capital. The level and type of risk varies across investment products. Investors should consider their objectives, risk tolerance and investment horizon before making investment decisions.",
  },
  {
    q: "How does Investify Prism support investors?",
    a: "Investify Prism follows a relationship-led approach, helping investors understand available investment solutions, complete relevant processes and review their investment objectives and portfolios. The nature of support depends on the product, service and applicable regulatory framework.",
  },
  {
    q: "How can I speak with Investify Prism?",
    a: "You can contact Kishore Devaraj through the contact form, phone or WhatsApp available on the website to discuss your investment objectives and understand the available solutions.",
  },
];

export const DIGITAL_FEATURES = [
  {
    icon: "PieChart",
    title: "Invest Across Multiple Categories",
    description:
      "Access available investment products including equities, mutual funds, IPOs and other market-linked solutions.",
  },
  {
    icon: "BarChart3",
    title: "Track Your Portfolio",
    description:
      "View your investments, holdings and relevant portfolio information through the applicable digital platform.",
  },
  {
    icon: "Newspaper",
    title: "Market & Investment Insights",
    description:
      "Stay informed with market information, research and investment-related resources available through the platform.",
  },
  {
    icon: "Smartphone",
    title: "Convenient Digital Access",
    description:
      "Manage your investment journey digitally while staying connected with your Investify Prism relationship team.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure Account Access",
    description:
      "Use the applicable IIFL Capital digital channels for account and investment access, subject to their terms and security processes.",
  },
];

export const FOOTER_LINKS = {
  quick: [
    { label: "About Us", href: "/about-us" },
    { label: "Investment Solutions", href: "/#products" },
    { label: "Demat Account", href: "/products/demat-account" },
    { label: "Mutual Funds & SIP", href: "/products/mutual-funds" },
    { label: "Portfolio Solutions", href: "/products/portfolio-management-services" },
    { label: "Investment Insights", href: "/knowledge-center/blog" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  policies: [
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
    { label: "Regulatory Information", href: "/regulators" },
    { label: "Investor Awareness", href: "/investor-awareness" },
    { label: "Sitemap", href: "/sitemap" },
  ],
};
