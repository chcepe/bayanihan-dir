import { Pantry } from "./types";

export const searchPantry = (pantries: Pantry[], keyword: string) =>
  pantries.filter(
    (pantry) =>
      pantry.loc.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) ||
      pantry.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  );

export const hash = (str: string, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

export const unique = (array: any[]) =>
  array.filter((v, i, a) => a.indexOf(v) === i);
