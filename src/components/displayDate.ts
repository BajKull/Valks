import moment from "moment";

export const displayDate = (d: Date | undefined) => {
  const date = moment(d);
  const today = moment(Date.now());
  switch (date.diff(today, "days")) {
    case 0:
      return `today ${date.format("HH:MM")}`;
    case 1:
      return `yesterday ${date.format("HH:MM")}`;
    default:
      return date.format("DD.MM.YYYY");
  }
};
