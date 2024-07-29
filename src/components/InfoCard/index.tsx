import { ISmartFitUnit } from "@/types/smartFitUnit";
import Image from "next/image";

interface InfoCardProps {
  item: ISmartFitUnit;
}

export const InfoCard = ({ item }: InfoCardProps) => {
  return (
    <div className="w-[315px] h-full bg-slate-100 border-2 border-slate-200 rounded-md p-4 shadow-sm cursor-pointer hover:border-slate-400 hover:bg-slate-200">
      <div>
        <h1
          className={`${
            item.opened ? "text-[#2FC022]" : "text-[#dc0a17]"
          } font-bold`}
        >
          {item.opened ? "Aberto" : "Fechado"}
        </h1>
      </div>

      <div className="border-b-2 border-slate-200 py-5 mb-10">
        <h1 className="text-2xl font-bold capitalize truncate">{item.title}</h1>
        <div
          className="text-neutral-500"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </div>

      <div className="flex w-full">
        <Image
          src={`/images/${item.mask}-mask.png`}
          alt="card-image"
          width={65}
          height={65}
        />
        <Image
          src={`/images/${item.towel}-towel.png`}
          alt="card-image"
          width={65}
          height={65}
        />
        <Image
          src={`/images/${item.fountain}-fountain.png`}
          alt="card-image"
          width={65}
          height={65}
        />
        <Image
          src={`/images/${item.locker_room}-lockerroom.png`}
          alt="card-image"
          width={65}
          height={65}
        />
      </div>

      <div className="mt-6">
        {item?.schedules?.map((schedule, idx) => (
          <div key={idx} className="flex flex-col">
            <p className="font-bold my-1">{schedule.weekdays}</p>
            <span className="mb-5">{schedule.hour}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
