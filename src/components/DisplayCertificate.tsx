"use client";

import Image from "next/image";

type DisplayCertificateProps = {
  image: string;
  alt: string;
};

export default function DisplayCertificate(props: DisplayCertificateProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
      <Image
        src={props.image}
        alt={props.alt}
        width={500}
        height={500}
        className="rounded-lg h-48 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer hover:scale-110 transition-transform duration-500"
      />
    </div>
  );
}
