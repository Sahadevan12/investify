// Source: insurance-pptx (1).pptx

export type InsurancePartner = {
  name: string;
  logo: string;
  crop?: boolean;
  scale?: number;
};

export const LIFE_PARTNERS: InsurancePartner[] = [
  { name: "HDFC Life Insurance", logo: "/images/insurance/hdfc-life.png" },
  { name: "ICICI Prudential Life Insurance", logo: "/images/insurance/icici-prudential-life.png" },
  { name: "Bajaj Allianz Life Insurance", logo: "/images/insurance/bajaj-allianz-life.png" },
  { name: "Aditya Birla Sun Life Insurance", logo: "/images/insurance/aditya-birla-life.jpeg" },
];

export const HEALTH_PARTNERS: InsurancePartner[] = [
  { name: "Care Health Insurance", logo: "/images/insurance/care-health.png" },
  { name: "Star Health Insurance", logo: "/images/insurance/star-health.png" },
  { name: "Manipal Cigna Health Insurance", logo: "/images/insurance/manipal-cigna.png", scale: 1.9 },
  { name: "Niva Bupa Health Insurance", logo: "/images/insurance/niva-bupa.png" },
];

export const GENERAL_PARTNERS: InsurancePartner[] = [
  { name: "ICICI Lombard General Insurance", logo: "/images/insurance/icici-lombard.png" },
  { name: "Tata AIG General Insurance", logo: "/images/insurance/tata-aig.png" },
  { name: "HDFC Ergo General Insurance", logo: "/images/insurance/hdfc-ergo.png" },
  { name: "Bajaj Allianz General Insurance", logo: "/images/insurance/bajaj-allianz-general.png", scale: 1.5 },
  { name: "Reliance General Insurance", logo: "/images/insurance/reliance-general.png" },
  { name: "Kotak General Insurance", logo: "/images/insurance/zurich-kotak.png", crop: true, scale: 1.4 },
  { name: "Cholamandalam General Insurance", logo: "/images/insurance/chola-ms.png" },
  { name: "Aditya Birla Health Insurance", logo: "/images/insurance/aditya-birla-health.png" },
];

export const FOCUS_PRODUCTS = [
  {
    insurer: "HDFC Life Insurance",
    products: [
      "HDFC Life Click 2 Achieve",
      "HDFC Life Guaranteed Pension Plan",
      "HDFC Life Guaranteed Wealth Plus",
      "HDFC Life Sanchay Plus",
      "HDFC Life Smart Pension Plus",
      "HDFC Life Sanchay Par Advantage",
      "HDFC Life Sanchay Fixed Maturity",
      "HDFC Life Smart Protect Plan",
      "HDFC Sampoorn Nivesh",
      "HDFC Life Click 2 Invest",
    ],
  },
  {
    insurer: "ICICI Prudential Life Insurance",
    products: [
      "ICICI Prudential Gift Pro",
      "ICICI Prudential Gold Ultra, Cashback, and Forever",
      "Protect n Gain",
      "ICICI Prudential Guaranteed Pension Plan Flexi",
      "ASIP",
      "Future Perfect",
      "Sukh Samruddhi",
      "I Protect Super",
      "I Protect Smart",
    ],
  },
  {
    insurer: "Bajaj Allianz Life Insurance",
    products: [
      "Bajaj Allianz Life ACE Product",
      "Bajaj Allianz Life Guaranteed Pension Goal",
      "Bajaj Allianz Life Invest Protect Goal",
      "Bajaj Allianz Magnum Fortune Plus II",
    ],
  },
  {
    insurer: "Aditya Birla Sun Life Insurance (ABSLI)",
    products: [
      "ABSLI Akshaya Plan",
      "ABSLI Cancer Shield",
      "ABSLI Digi Shield Plan 2021",
      "ABSLI Guaranteed Annuity Plus",
      "ABSLI Nishchit Aayush Plan",
      "ABSLI Poorna Suraksha Kawach Plan",
      "ABSLI Salaried Term Plan",
      "ABSLI Vision Endowment Plus",
      "ABSLI Wealth Aspire 2019",
    ],
  },
];

export const PRODUCT_OFFERING = [
  {
    category: "Health Insurance",
    items: [
      "Retail Health",
      "Group Health Insurance",
      "Individual Accidental policy",
      "Group Personal Accidental Policy",
      "Super Topup Insurance",
      "Travel Insurance",
    ],
  },
  {
    category: "Motor Insurance",
    items: ["Pvt Car Insurance", "Commercial Vehicle Insurance"],
  },
  {
    category: "Property Fire Insurance",
    items: ["Laghu Udyam Suraksha", "Sookshma Udyam Suraksha"],
  },
  {
    category: "General Insurance plans",
    items: [
      "Director & Officer Liability Insurance",
      "Jwellers Protect Insurance",
      "Cyber Liability Policy",
      "Cyber Risk Protector",
      "Electronic Equipment Insurance",
      "CorporateGuard Venture Capital Protector Insurance",
      "Machinery Breakdown Insurance",
      "Marine Inland Open Declaration Policy",
      "Bank Locker Insurance",
      "Shop & Warehouse Insurance",
      "Workmen Compensation Insurance",
      "Contractor All Risk - Retail",
    ],
  },
];
