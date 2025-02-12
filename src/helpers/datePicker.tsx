import { format } from "date-fns";

export const datePicker = (date?: Date): string => {
  if (date) {
    const formattedDate = format(date, "do MMMM yyyy");
    return formattedDate;
  }
  return "Invalid Date";
};
