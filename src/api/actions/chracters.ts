import axiosInstance from "../axios";

export type Character = {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

export const getCharacters = async (): Promise<Character[]> => {
  try {
    const response = await axiosInstance.get(`people/`);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
