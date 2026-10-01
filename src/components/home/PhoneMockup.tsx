import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-green/15 via-blue/10 to-transparent blur-2xl" />
      <div className="animate-float relative w-[260px] overflow-hidden rounded-[2.5rem] border-[10px] border-navy-dark bg-navy-dark shadow-2xl sm:w-[300px]">
        <span className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-navy-dark" />
        <Image
          src="/images/investfy mobile.jpeg"
          alt="Investify Prism portfolio dashboard on mobile"
          width={718}
          height={1600}
          className="h-auto w-full rounded-[1.75rem]"
          priority
        />
      </div>
    </div>
  );
}
