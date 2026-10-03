import Image from "next/image";
import Container from "@/components/ui/Container";

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

export default function AmcLogos({ showHeading = true }: { showHeading?: boolean }) {
  const loop = [...AMCS, ...AMCS];

  return (
    <section className="bg-white py-12 sm:py-14">
      {showHeading && (
        <Container>
          <h2 className="mx-auto max-w-3xl text-center text-[22px] font-semibold leading-snug text-navy sm:text-[26px]">
            60+ AMCs available on the Investify Prism platform
          </h2>
        </Container>
      )}

      <div
        className={`${showHeading ? "mt-8 " : ""}overflow-hidden`}
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <ul className="flex w-max animate-marquee items-center gap-6 hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((a, i) => (
            <li
              key={`${a.file}-${i}`}
              aria-hidden={i >= AMCS.length}
              className="size-16 shrink-0 overflow-hidden rounded-full border border-border bg-white shadow-soft sm:size-[72px]"
            >
              <Image
                src={`/images/amc/${a.file}.jpg`}
                alt={i < AMCS.length ? a.name : ""}
                width={120}
                height={120}
                className="size-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
