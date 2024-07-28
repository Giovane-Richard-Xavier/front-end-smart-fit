"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getAllSmartFit } from "@/services/api";
import { ISmartFitList, ISmartFitUnit } from "@/types/smartFitUnit";
import { Autour_One } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [allUnits, setAllUnits] = useState<ISmartFitUnit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ISmartFitList = await getAllSmartFit();
        setAllUnits(data.locations);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="flex items-center min-h-screen flex-col w-screen">
      {/* {allUnits.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: item.content }} />
          <p>{item.opened ? "Aberta" : "Fechada"}</p>
          <p>Máscara: {item.mask}</p>
          <p>Toalha: {item.towel}</p>
          <p>Bebedouro: {item.fountain}</p>
          <p>Vestiário: {item.locker_room}</p>
          <div>
            <h3>Horários:</h3>
            {item?.schedules?.map((schedule, index) => (
              <div key={index}>
                <p>
                  {schedule.weekdays}: {schedule.hour}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))} */}

      <Header />

      <section className="flex flex-col gap-10 w-full max-w-[960px]   text-neutral-900 px-8 mt-20">
        <section className="flex flex-col gap-8">
          <h1 className="text-5xl font-bold uppercase w-[350px] leading-tight">
            Reabertura smart fit
          </h1>
          <p className="h-3 w-full max-w-[120px] bg-neutral-950"></p>
        </section>

        <p className="text-[#333]">
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </section>

      <Footer />
    </main>
  );
}
