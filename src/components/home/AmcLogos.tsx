import LogoMarquee from "@/components/home/LogoMarquee";

const AMCS = [
  { file: "asset360one", name: "360 ONE Asset" },
  { file: "axismf", name: "Axis Mutual Fund" },
  { file: "bajaj", name: "Bajaj Finserv Mutual Fund" },
  { file: "bandhanmf", name: "Bandhan Mutual Fund" },
  { file: "bankofindiamf", name: "Bank of India Mutual Fund" },
  { file: "baroda", name: "Baroda BNP Paribas Mutual Fund" },
  { file: "birlasunlifemf", name: "Aditya Birla Sun Life Mutual Fund" },
  { file: "canararobeco", name: "Canara Robeco Mutual Fund" },
  { file: "dsp", name: "DSP Mutual Fund" },
  { file: "edelweiss", name: "Edelweiss Mutual Fund" },
  { file: "franklintempleton", name: "Franklin Templeton Mutual Fund" },
  { file: "groww", name: "Groww Mutual Fund" },
  { file: "hdfcassetmanagement", name: "HDFC Mutual Fund" },
  { file: "helios", name: "Helios Mutual Fund" },
  { file: "hsbc", name: "HSBC Mutual Fund" },
  { file: "icicipridentialmf", name: "ICICI Prudential Mutual Fund" },
  { file: "invesco", name: "Invesco Mutual Fund" },
  { file: "iti", name: "ITI Mutual Fund" },
  { file: "kotakmf", name: "Kotak Mutual Fund" },
  { file: "licmf", name: "LIC Mutual Fund" },
  { file: "mahindramanulife", name: "Mahindra Manulife Mutual Fund" },
  { file: "miraeasset", name: "Mirae Asset Mutual Fund" },
  { file: "motilaloswalmf", name: "Motilal Oswal Mutual Fund" },
  { file: "navi", name: "Navi Mutual Fund" },
  { file: "nipponindiamf", name: "Nippon India Mutual Fund" },
  { file: "oldbridge", name: "Old Bridge Mutual Fund" },
  { file: "pgimmf", name: "PGIM India Mutual Fund" },
  { file: "ppfasmf", name: "PPFAS Mutual Fund" },
  { file: "quant", name: "quant Mutual Fund" },
  { file: "quantummf", name: "Quantum Mutual Fund" },
  { file: "samcomf", name: "Samco Mutual Fund" },
];

const AMC_LOGOS = AMCS.map((a) => ({ name: a.name, src: `/images/amc/${a.file}.jpg` }));

export default function AmcLogos({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <LogoMarquee
      heading={showHeading ? "60+ AMCs available on the Investify Prism platform" : undefined}
      logos={AMC_LOGOS}
      shape="circle"
      duration="80s"
    />
  );
}
