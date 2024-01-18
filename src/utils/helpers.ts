import StarWarsObject from "../types/starWarsObject";

export const  getObjectProperties = (obj: StarWarsObject):  [string, any][] =>  {
  return Object.keys(obj).map(key => [key, obj[key as keyof typeof obj]]);
}