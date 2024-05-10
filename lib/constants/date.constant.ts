import { add } from "date-fns";

export const DATE = {
  today: new Date(),
  tomorrow: add(new Date(), { days: 1 }),
  dayAfterTomorrow: add(new Date(), { days: 2 }),
  unixTimeDivider: 1000,
  maxMinutes: 59,
};
