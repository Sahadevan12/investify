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
  bookingUrl: "https://links.adzorex.com/widget/bookings/investify-prism-consultation",
  communityUrl:
    "https://portal.investifyprism.com/communities/groups/investify-wealth-circle/home?invite=6abec226f07181108cb1baf3",
  appPlayStoreUrl: "#",
  appAppStoreUrl: "#",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61593756685676",
    instagram: "https://www.instagram.com/investifyprism12/",
    linkedin: "https://www.linkedin.com/company/144666994/",
    whatsapp: "https://wa.me/919361153599",
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
      { label: "IPO", href: "/products/ipo", icon: "Rocket" },
      { label: "Mutual Funds", href: "/products/mutual-funds", icon: "PieChart" },
      { label: "NPS", href: "/products/nps", icon: "ShieldCheck" },
      { label: "Bonds & NCDs", href: "/products/bonds-ncds-fixed-income", icon: "ScrollText" },
      { label: "Life & Health Insurance", href: "/products/life-health-insurance", icon: "HeartPulse" },
      { label: "PMS & AIF", href: "/products/portfolio-management-services", icon: "BarChart3" },
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
  extra?: "insurance" | "bonds" | "demat" | "pms" | "mf" | "ipo" | "nps";
  eyebrow?: string;
  ctas?: { label: string; href: string; external?: boolean }[];
  featuresTitle?: string;
  features?: { title: string; description: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "demat-account",
    title: "Demat & Trading Account for Your Investment Journey",
    shortTitle: "Demat Account",
    eyebrow: "Demat Account",
    ctas: [
      { label: "Open Demat Account", href: SITE.loginUrl, external: true },
      { label: "Talk to an Investment Specialist", href: SITE.bookingUrl, external: true },
    ],
    icon: "Wallet",
    summary:
      "Open a digital Demat and Trading Account to hold and transact in eligible securities across India's financial markets. Access equities, IPOs, mutual funds and other investment and trading opportunities through the IIFL Capital platform, with Investify Prism providing relationship and onboarding support.",
    description:
      "A Demat and Trading Account gives you a convenient way to hold and transact in eligible securities across India's financial markets. Through the IIFL Capital platform, eligible investors can access equities, IPOs, mutual funds, derivatives and other available market products. Investify Prism provides relationship and onboarding support to help you get started and navigate the account-opening process.",
    featuresTitle: "Key Features",
    features: [
      {
        title: "Digital Account Opening",
        description:
          "Complete the applicable account-opening and KYC process through a digital onboarding journey.",
      },
      {
        title: "Equity Investment & Trading",
        description:
          "Access eligible NSE and BSE-listed securities through the IIFL Capital platform.",
      },
      {
        title: "IPO Access",
        description:
          "Apply for eligible IPO opportunities through your investment account, subject to applicable requirements.",
      },
      {
        title: "Mutual Fund Access",
        description:
          "Explore mutual fund investment options across different categories and investment objectives.",
      },
      {
        title: "Market & Portfolio Access",
        description:
          "Track eligible holdings, transactions and portfolio information through the available digital platform.",
      },
      {
        title: "Multiple Market Segments",
        description:
          "Access eligible products across equity, derivatives and other available segments, subject to eligibility and applicable regulations.",
      },
      {
        title: "Dedicated Relationship Support",
        description:
          "Get assistance from Investify Prism with onboarding, account-related queries and service requirements.",
      },
      {
        title: "Secure Digital Access",
        description:
          "Use the official IIFL Capital platform for account access, market information and transaction-related services.",
      },
    ],
    highlights: [],
    faqs: [
      {
        q: "Can I open a Demat and Trading Account online?",
        a: "Yes. Eligible investors can complete the applicable account-opening and KYC process through the available digital onboarding process, subject to verification and regulatory requirements.",
      },
      {
        q: "Who can open a Demat Account?",
        a: "Eligible resident individuals, NRIs and other permitted investor categories can open accounts subject to applicable eligibility, KYC and regulatory requirements.",
      },
      {
        q: "What can I invest in through a Demat Account?",
        a: "A Demat Account can be used to hold eligible securities such as equities, bonds and other securities. Through the associated investment platform, eligible investors may also access products such as mutual funds, IPOs and other market offerings.",
      },
      {
        q: "What is the difference between a Demat Account and a Trading Account?",
        a: "A Demat Account is used to hold securities electronically, while a Trading Account is used to place eligible buy and sell transactions in the market. They work together when investing or trading in securities.",
      },
      {
        q: "Can I invest in IPOs through my account?",
        a: "Yes. Eligible investors can apply for eligible IPOs through the applicable IIFL Capital platform and process, subject to the IPO terms and investor eligibility.",
      },
      {
        q: "Can I invest in mutual funds through the same platform?",
        a: "Yes. Eligible investors can access mutual fund investment options through the associated platform, subject to the applicable product and transaction processes.",
      },
      {
        q: "Can NRIs open a Demat Account?",
        a: "Yes. NRIs can open eligible investment accounts subject to applicable NRI, KYC, banking, repatriation and regulatory requirements. The account structure and permitted transactions can differ from resident accounts.",
      },
      {
        q: "Is a Demat Account suitable for long-term investors?",
        a: "Yes. A Demat Account can be used by investors who want to hold and manage eligible securities over the long term, as well as by investors who actively trade eligible market products.",
      },
      {
        q: "How does Investify Prism help with the account?",
        a: "Investify Prism provides relationship and onboarding support, helping you understand the account-opening process and assisting with applicable service requirements.",
      },
      {
        q: "How can I open my Demat Account?",
        a: "Click “Open Demat Account” to begin the account-opening process, or speak with our team if you would like assistance before starting.",
      },
    ],
    extra: "demat",
  },
  {
    slug: "ipo",
    title: "IPO Investment: Explore New Public Issues",
    shortTitle: "IPO",
    eyebrow: "IPO",
    ctas: [
      { label: "Open Demat Account", href: SITE.loginUrl, external: true },
      { label: "Talk to an Investment Specialist", href: SITE.bookingUrl, external: true },
    ],
    icon: "Rocket",
    summary:
      "Explore eligible IPOs and new public issues through your investment account on the IIFL Capital platform, with Investify Prism providing relationship and onboarding support.",
    description:
      "An Initial Public Offering (IPO) lets you invest in a company when it offers its shares to the public for the first time. Through the IIFL Capital platform, eligible investors can apply for IPOs from their investment account, subject to the terms of each issue. Investify Prism helps you understand how IPOs work, what to review before applying, and how to get your account ready.",
    featuresTitle: "Key Features",
    features: [
      {
        title: "Access to Eligible IPOs",
        description: "Explore eligible initial public offerings through your investment account on the IIFL Capital platform, subject to the terms of each issue.",
      },
      {
        title: "Apply Through Your Account",
        description: "Place your application through the applicable platform and process, subject to investor eligibility and the issue's requirements.",
      },
      {
        title: "Mainboard & Other Public Issues",
        description: "Learn about mainboard IPOs, SME IPOs and other public offers such as NCD and bond issues, subject to availability and eligibility.",
      },
      {
        title: "Understand Before You Apply",
        description: "Review the price band, lot size, objects of the issue and risk factors with your relationship contact before deciding.",
      },
      {
        title: "Shares Credited to Your Demat",
        description: "Where shares are allotted, they are credited to your demat account and can be held or traded after listing.",
      },
      {
        title: "Dedicated Relationship Support",
        description: "Get assistance from Investify Prism with onboarding, account-related queries and service requirements.",
      },
    ],
    highlights: [],
    faqs: [
      {
        q: "What is an IPO?",
        a: "An Initial Public Offering (IPO) is when a company offers its shares to the public for the first time so that it can raise capital and list on the stock exchanges. Investors who are allotted shares become part-owners of the company.",
      },
      {
        q: "Do I need a demat account to apply for an IPO?",
        a: "Yes. Shares allotted in an IPO are credited to your demat account, so you need a demat and trading account to apply. Investify Prism provides relationship and onboarding support to help you open one through the IIFL Capital platform.",
      },
      {
        q: "Is allotment guaranteed if I apply?",
        a: "No. Allotment depends on how much demand there is for the issue and on the allotment rules for your investor category. In a heavily subscribed issue you may receive fewer shares than you applied for, or none.",
      },
      {
        q: "What is a price band and a lot size?",
        a: "The price band is the range within which you can bid for the shares. The lot size is the minimum number of shares you can apply for, and you apply in multiples of it. Both are announced in the offer document.",
      },
      {
        q: "What happens if I am not allotted shares?",
        a: "If you are not allotted shares, or are allotted fewer than you applied for, the amount blocked or paid for the unallotted portion is released as per the process of the issue.",
      },
      {
        q: "Can NRIs apply for IPOs?",
        a: "NRIs can apply for eligible IPOs subject to applicable regulations, the terms of the issue and the type of account they hold. The process and permitted routes can differ from those for resident investors.",
      },
      {
        q: "Do IPOs always list at a profit?",
        a: "No. Listing prices can be higher or lower than the issue price, and share prices can fall after listing. Listing gains are never assured, so it is important to read the offer document and consider the company's fundamentals.",
      },
      {
        q: "What is the difference between an IPO and an NCD issue?",
        a: "An IPO offers shares, which make you a part-owner of the company. An NCD (non-convertible debenture) issue offers a debt instrument that pays interest and repays principal on maturity, subject to the issuer's ability to pay.",
      },
    ],
    extra: "ipo",
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
      {
        q: "What is a SIP and how does it work?",
        a: "A Systematic Investment Plan (SIP) lets you invest a fixed amount in a mutual fund at regular intervals, such as every month. It builds a disciplined habit and spreads your purchase cost across different market levels.",
      },
      {
        q: "Should I choose a SIP or a lump sum?",
        a: "A SIP suits regular income and long-term goals, while a lump sum suits surplus money that is available today. Many investors use both. We help you decide based on your cash flow and goals.",
      },
      {
        q: "How do I choose the right mutual fund?",
        a: "Start with your goal, time horizon and risk comfort, then compare funds within the right category on cost, consistency and risk. We shortlist funds with you rather than relying on past returns alone.",
      },
      {
        q: "Are mutual fund returns guaranteed?",
        a: "No. Mutual fund investments are subject to market risks and the value of your investment can go down as well as up. Past performance is not an indicator of future results.",
      },
    ],
    extra: "mf",
  },
  {
    slug: "nps",
    title: "National Pension System (NPS) for NRIs & Long-Term Retirement Planning",
    shortTitle: "NPS",
    eyebrow: "National Pension System (NPS)",
    ctas: [
      { label: "Explore NPS for NRIs", href: "#details" },
      { label: "Talk to an Investment Specialist", href: SITE.bookingUrl, external: true },
    ],
    icon: "ShieldCheck",
    summary:
      "Build a structured retirement corpus through NPS while planning for your long-term financial goals in India. NRIs can subscribe to NPS subject to applicable eligibility, KYC, banking and regulatory requirements.",
    description:
      "The National Pension System (NPS) is a voluntary, market-linked retirement scheme regulated by PFRDA. It lets you invest regularly over your working life and build a corpus for retirement, with a choice of asset classes and investment styles. NRIs can subscribe subject to applicable eligibility, KYC, banking and regulatory requirements. Investify Prism helps you understand how NPS works and supports you through the onboarding process.",
    featuresTitle: "Key Features",
    features: [
      {
        title: "Retirement-Focused Investing",
        description: "NPS is a long-term, market-linked pension scheme regulated by PFRDA, designed to help you build a retirement corpus.",
      },
      {
        title: "Choice of Asset Classes",
        description: "Allocate across equity, corporate debt, government securities and alternative assets, within the limits set by the regulator.",
      },
      {
        title: "Active or Auto Choice",
        description: "Pick your own allocation under Active Choice, or let an Auto Choice life-cycle option shift the mix as you age.",
      },
      {
        title: "Professional Fund Management",
        description: "Your contributions are managed by pension fund managers registered with PFRDA, under a defined investment framework.",
      },
      {
        title: "Cost-Conscious Structure",
        description: "NPS is known for its relatively low fund management charges, subject to the applicable fee structure.",
      },
      {
        title: "Flexible Contributions",
        description: "Contribute at your own pace, subject to the minimum contribution requirements that apply to your account.",
      },
      {
        title: "Possible Tax Benefits",
        description: "Contributions may be eligible for tax benefits under applicable income tax provisions. Please consult a tax professional.",
      },
      {
        title: "Dedicated Relationship Support",
        description: "Get assistance from Investify Prism with onboarding, account-related queries and service requirements.",
      },
    ],
    highlights: [],
    faqs: [
      {
        q: "What is the National Pension System (NPS)?",
        a: "NPS is a voluntary, long-term retirement savings scheme regulated by the Pension Fund Regulatory and Development Authority (PFRDA). You contribute regularly during your working years, your money is invested in a mix of asset classes, and the accumulated corpus supports your retirement.",
      },
      {
        q: "What is the difference between Tier I and Tier II accounts?",
        a: "A Tier I account is the main retirement account and has withdrawal restrictions linked to retirement. A Tier II account is an optional, more flexible savings account that can only be opened alongside a Tier I account, and its tax treatment differs.",
      },
      {
        q: "Can NRIs open an NPS account?",
        a: "NRIs can subscribe to NPS subject to applicable eligibility, KYC, banking and regulatory requirements. The account structure and the rules for contributions and withdrawals can differ from those for resident investors.",
      },
      {
        q: "What is the difference between Active Choice and Auto Choice?",
        a: "Under Active Choice you decide how your contributions are split across asset classes within the permitted limits. Under Auto Choice, a life-cycle option automatically moves your allocation towards safer assets as you get older.",
      },
      {
        q: "Are NPS returns guaranteed?",
        a: "No. NPS is a market-linked scheme, so returns depend on the performance of the underlying investments and are not guaranteed. The value of your corpus can go up as well as down.",
      },
      {
        q: "What happens when I reach retirement?",
        a: "On exit, a portion of the corpus must be used to buy an annuity that provides a regular pension, and the rest can be taken as a lump sum, in line with the rules prescribed by PFRDA at the time. The exact proportions and conditions can change.",
      },
      {
        q: "Can I withdraw money from NPS before retirement?",
        a: "Tier I accounts allow partial withdrawals for specified purposes and premature exit only under the conditions laid down by PFRDA, usually with limits on the amount. Please check the current rules before relying on early access.",
      },
      {
        q: "Does NPS offer tax benefits?",
        a: "Contributions to NPS may qualify for deductions under applicable income tax provisions, and the tax treatment of the corpus at exit depends on prevailing rules. Tax laws change and depend on your individual situation, so please consult a tax professional.",
      },
    ],
    extra: "nps",
  },
  {
    slug: "life-health-insurance",
    title: "Life, Health & General Insurance",
    shortTitle: "Life & Health Insurance",
    icon: "HeartPulse",
    summary:
      "Life, health and general insurance from leading insurers, to help protect your family, income, business and wealth.",
    description:
      "Insurance is the safety net behind every wealth plan. Through Investify Prism you can explore life insurance, health insurance and a wide range of general insurance covers from established insurers, and compare options with the help of a dedicated point of contact.",
    highlights: [
      "Life insurance from HDFC Life, ICICI Prudential, Bajaj Allianz and Aditya Birla Sun Life",
      "Health insurance from Care, Star Health, Manipal Cigna and Niva Bupa",
      "General insurance from ICICI Lombard, Tata AIG, HDFC Ergo, Bajaj Allianz, Reliance, Kotak, Cholamandalam, Aditya Birla Health and PSU insurers",
      "Retail and group health, accident, travel, motor, property and business covers",
    ],
    faqs: [
      {
        q: "Which insurers can I choose from?",
        a: "Life insurance is available from HDFC Life, ICICI Prudential, Bajaj Allianz and Aditya Birla Sun Life. Health insurance is available from Care, Star Health, Manipal Cigna and Niva Bupa, and general insurance from ICICI Lombard, Tata AIG, HDFC Ergo, Bajaj Allianz, Reliance, Kotak, Cholamandalam, Aditya Birla Health and PSU insurers.",
      },
      {
        q: "What kinds of general insurance are available?",
        a: "Covers include motor (private car and commercial vehicle), property and fire, travel, cyber liability, electronic equipment, machinery breakdown, marine, bank locker, shop and warehouse, workmen compensation and contractor all-risk policies, among others.",
      },
    ],
    extra: "insurance",
  },
  {
    slug: "bonds-ncds-fixed-income",
    title: "Bonds, NCDs & Fixed Income",
    shortTitle: "Bonds & NCDs",
    icon: "ScrollText",
    summary:
      "Explore corporate bonds, NCDs and other debt-oriented opportunities to diversify your portfolio with regular income.",
    description:
      "Bonds and non-convertible debentures (NCDs) let you lend to corporates and institutions in return for periodic interest and repayment of principal at maturity. Below you will find our latest indicative bond quotes across rating categories, so you can see coupon, yield, maturity and payout frequency side by side before speaking with us about what may suit your objectives.",
    highlights: [
      "Indicative quotes across AAA, AA and A rated issuers",
      "Secured, unsecured and sub-debt instruments with different payout frequencies",
      "Maturities ranging from 2027 to 2036",
      "Relationship-led guidance on suitability, ticket size and documentation",
    ],
    faqs: [
      {
        q: "What is the difference between coupon and yield?",
        a: "The coupon is the interest rate paid on the face value of the bond. The yield is the effective return based on the price at which the bond is bought, so it can be higher or lower than the coupon.",
      },
      {
        q: "What does the credit rating tell me?",
        a: "Ratings from agencies such as CRISIL, ICRA, CARE and India Ratings indicate the assessed ability of the issuer to repay. Higher-rated bonds (such as AAA) generally carry lower credit risk than lower-rated bonds, which typically offer higher yields to compensate.",
      },
      {
        q: "Are the quotes on this page final?",
        a: "No. Quotes are indicative and may change with market conditions and availability. Please contact us for the latest pricing before making any decision.",
      },
      {
        q: "Are bonds better than fixed deposits?",
        a: "They are different products. A fixed deposit offers a set rate for a fixed term, while a bond has a coupon, a maturity date and, if listed, a market price that can move. Bonds and FDs also differ in liquidity, risk and taxation, so the right choice depends on your needs.",
      },
      {
        q: "Are corporate bonds safe?",
        a: "Corporate bonds carry credit risk, which is the chance that the issuer cannot pay interest or principal on time. The level of risk depends on the issuer's financial strength, its credit rating, whether the bond is secured and its other terms.",
      },
      {
        q: "Are bonds tax-free in India?",
        a: "Bonds are not tax-free by default. Tax treatment depends on the type of bond and the income or gains you earn, and a few specified bonds may offer exemptions. Please speak to a tax professional about your situation.",
      },
      {
        q: "What happens if I sell a bond before maturity?",
        a: "If you sell before maturity, you may make a capital gain or loss depending on the price, and it may be taxed based on the bond type, your holding period and prevailing tax rules.",
      },
      {
        q: "What is the minimum amount needed to invest in bonds?",
        a: "It varies by bond. Some bonds can be bought in smaller amounts, while others are offered in multiples of lakhs or crores. The Quantum column in the table above shows the ticket size for each bond.",
      },
      {
        q: "Can I get monthly income from bonds?",
        a: "Only some bonds pay monthly. Others pay quarterly, half-yearly or annually, depending on their terms. The Payout column in the table above shows how often each bond pays.",
      },
      {
        q: "What is the difference between a bond issue (NCD) and a listed bond?",
        a: "A bond issue or non-convertible debenture (NCD) is offered to investors in the primary market before it is listed, while a listed bond can be bought and sold on the exchange. They can differ in price, yield, liquidity, rating and other terms.",
      },
      {
        q: "What happens to my bonds if the stock market falls?",
        a: "A stock market fall does not by itself change what an issuer owes you. However, the market price of a listed bond can still move with interest rates, credit conditions and liquidity.",
      },
      {
        q: "What types of bonds are available in India?",
        a: "Common types include government securities, public sector (PSU) bonds, corporate bonds, floating-rate bonds, zero-coupon bonds, sovereign gold bonds and infrastructure bonds. Each has different features, risk, returns and tax treatment.",
      },
    ],
    extra: "bonds",
  },
  {
    slug: "portfolio-management-services",
    title: "PMS & AIF: Portfolio Management and Alternative Investments",
    shortTitle: "PMS & AIF",
    eyebrow: "PMS & AIF",
    icon: "BarChart3",
    summary:
      "Explore professionally managed Portfolio Management Services (PMS) and Alternative Investment Funds (AIF) designed for eligible HNI and affluent investors, with Investify Prism providing relationship and onboarding support.",
    description:
      "Portfolio Management Services (PMS) are built for investors who want a portfolio designed around their own goals, risk appetite and tax situation, with stocks held directly in their own demat account rather than as pooled units. As per SEBI regulation, PMS requires a minimum investment of ₹50 lakh. Alternative Investment Funds (AIFs) are privately pooled vehicles that invest in strategies beyond conventional mutual funds, such as private equity, venture capital, debt and hedge-style approaches, and they generally need a higher minimum investment from eligible investors. Both suit HNI and affluent investors with a long-term horizon. Investify Prism helps you understand the options and supports you with relationship and onboarding assistance.",
    highlights: [
      "PMS: direct ownership of stocks in your own demat account, not pooled fund units",
      "PMS: personalised allocation built around your goals and risk appetite",
      "PMS: minimum investment of ₹50 lakh as mandated by SEBI",
      "PMS: holding-level visibility into transactions and corporate actions",
      "AIF: access to Category I, II and III funds for eligible investors",
      "AIF: typical SEBI minimum investment of ₹1 crore per investor",
      "Fee structures vary by provider and are disclosed upfront in the documents",
      "Relationship and onboarding support from Investify Prism",
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
        a: "NRIs can invest in PMS subject to applicable FEMA regulations, KYC and account requirements. The documentation and account structure can differ from those for resident investors.",
      },
      {
        q: "How is the fee structured?",
        a: "PMS providers generally charge a fixed management fee, a performance-linked fee, or a mix of both. Fee structures vary by provider and strategy, and all charges are disclosed upfront in the documents.",
      },
      {
        q: "How is PMS taxed?",
        a: "Tax treatment depends on how the investments are structured. Gains on equity held in your demat account are generally taxed as capital gains, short-term or long-term depending on the holding period, while in some cases income may be treated as business income. Please speak to a tax professional about your situation.",
      },
      {
        q: "Is PMS risky?",
        a: "Yes. PMS is market-linked and usually has significant equity exposure, which can be volatile. Returns are not guaranteed and depend on market conditions and the decisions of the portfolio manager.",
      },
      {
        q: "How is PMS performance reported?",
        a: "Investors typically receive periodic portfolio statements, performance reports and detailed transaction records. Performance is usually shown against a relevant benchmark index and, in many cases, net of fees.",
      },
      {
        q: "How do I choose the right PMS?",
        a: "Look at the strategy's track record and consistency, its investment philosophy, the risk management approach, the fee structure, the quality of reporting and the manager's SEBI registration. We walk through these points with you before you decide.",
      },
      {
        q: "What is an AIF?",
        a: "An Alternative Investment Fund (AIF) is a privately pooled investment vehicle registered with SEBI. It collects money from eligible investors and invests it under a defined strategy, such as private equity, venture capital, debt or hedge-style approaches.",
      },
      {
        q: "What are the categories of AIFs?",
        a: "SEBI classifies AIFs into three categories. Category I invests in start-ups, SMEs, infrastructure and similar sectors, Category II covers private equity and debt funds, and Category III follows complex or trading strategies and may use leverage within limits.",
      },
      {
        q: "What is the minimum investment in an AIF?",
        a: "SEBI generally prescribes a minimum investment of ₹1 crore per investor in an AIF, with limited exceptions. The fund's offer document confirms the exact requirement.",
      },
      {
        q: "What is the difference between a PMS and an AIF?",
        a: "In a PMS, a portfolio manager invests on your behalf and the securities are held in your own demat account. An AIF is a pooled fund in which you hold units, often with a fixed tenure and different eligibility rules and risks.",
      },
      {
        q: "Are AIFs risky and can I exit early?",
        a: "AIFs carry the risk of loss of capital and can be concentrated in a few investments. Many are closed-ended with a lock-in or fixed tenure, so exit before the end of the term may not be possible or may be limited. Please read the placement memorandum carefully.",
      },
    ],
    extra: "pms",
  },
];

export type Solution = {
  title: string;
  description: string;
  cta: string;
  icon: string;
  href?: string;
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
    href: "/products/bonds-ncds-fixed-income",
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
  href?: string;
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
    href: "/products/life-health-insurance",
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
