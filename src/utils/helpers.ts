import StarWarsObject from "../types/starWarsObject";
import { format } from "date-fns";

export const getObjectProperties = (obj: StarWarsObject): [string, any][] => {
  return Object.keys(obj).map((key) => [key, obj[key as keyof typeof obj]]);
};

export const formatIfDate = (str: string): string => {
  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/;
  if (regex.test(str)) {
    const date = new Date(str);
    return format(date, "PP");
  }
  return str;
};