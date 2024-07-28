"use client";

import Image from "next/image";
import React from "react";
import { legendObj } from "./array";

export const Legends = () => {
  return (
    <div className="flex w-full gap-9 h-[180px] bg-slate-100 p-3">
      {legendObj.map((legend, idx) => (
        <div key={idx} className="flex flex-col items-center justify-center">
          <h1 className="font-bold mb-3">{legend.title}</h1>
          <div className="flex items-center gap-3">
            {legend.groupLegend.map((legendItem, idxItem) => (
              <div key={idxItem} className="flex flex-col items-center">
                <Image
                  src={legendItem.path}
                  alt="required-mask"
                  width={55}
                  height={55}
                />
                <p>{legendItem.label}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
