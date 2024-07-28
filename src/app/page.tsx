"use client";

import { getAllSmartFit } from "@/services/api";
import { ISmartFitList, ISmartFitUnit } from "@/types/smartFitUnit";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {allUnits.map((item) => (
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
      ))}
    </main>
  );
}
