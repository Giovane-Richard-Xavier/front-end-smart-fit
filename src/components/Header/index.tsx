import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div className="flex items-center justify-center w-full h-[100px] bg-neutral-900 overflow-x-hidden">
      <section className="flex items-center justify-center">
        <Image
          src="/images/logo.svg"
          alt="smart_fit_logo"
          width={150}
          height={100}
        />
      </section>
    </div>
  );
};
