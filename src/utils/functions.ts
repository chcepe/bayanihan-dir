import { Pantry } from "./types";

export const searchPantry = (pantries: Pantry[], keyword: string) =>
  pantries.filter((pantry) =>
    JSON.stringify(pantry).toLocaleLowerCase().includes(keyword)
  );
