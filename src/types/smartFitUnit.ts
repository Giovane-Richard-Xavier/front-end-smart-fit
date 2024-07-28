interface IScheduler {
  weekdays: string;
  hour: string;
}

export interface ISmartFitUnit {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: "required" | "recommended";
  towel: "required" | "recommended";
  fountain: "partial" | "not_allowed";
  locker_room: "allowed" | "closed" | "partial";
  schedules: IScheduler[];
}

export interface ISmartFitList {
  current_country_id: number;
  locations: ISmartFitUnit[];
}
