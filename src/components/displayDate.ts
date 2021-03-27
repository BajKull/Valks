import moment from "moment";

const getDate = (d: any) => {
  if (d._seconds) {
    const date = new Date(1970, 0, 1);
    date.setSeconds(d._seconds);
    return date;
  } else return d;
};

export const displayDate = (d: Date | undefined) => {
  const date = moment(getDate(d));
  const today = moment(Date.now());
  if (date.isSame(today, "day")) return `today ${date.format("HH:mm")}`;
  if (date.isSame(today.subtract(1, "day"), "day"))
    return `yesterday ${date.format("HH:mm")}`;
  return date.format("DD.MM.YYYY");
};
