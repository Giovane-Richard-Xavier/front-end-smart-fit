import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full h-[200px] bg-[#333] text-white">
      <section className="flex flex-col items-center justify-center h-full gap-3 w-full">
        <Image
          src="/images/logo.svg"
          alt="smart_fit_logo"
          width={120}
          height={100}
        />
        <p>Todos os direitos reservados - 2020</p>
      </section>
    </div>
  );
};
