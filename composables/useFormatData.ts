import moment from "moment";

export const useFormatData = (data: string): string =>
  moment(data).format("DD/MM/YYYY");
