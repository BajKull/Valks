import moment from "moment";

const getDate = (d: any) => {
  if (d.seconds) {
    const date = new Date(1970, 0, 1);
    date.setSeconds(d.seconds);
    return date;
  } else return d;
};

export const displayDate = (d: Date | undefined) => {
  const date = moment(getDate(d));
  const today = moment(Date.now());
  switch (date.diff(today, "days")) {
    case 0:
      return `today ${date.format("HH:mm")}`;
    case 1:
      return `yesterday ${date.format("HH:mm")}`;
    default:
      return date.format("DD.MM.YYYY");
  }
};
