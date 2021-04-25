import { hash } from "./functions";
import { Pantry } from "./types";

export const formatPantries = (data: any[]): Pantry[] => {
  return data.map((d, i) => {
    const street = d?.["gsx$street_address"]?.["$t"] ?? "";
    const region = d?.["gsx$region"]?.["$t"] ?? "";
    const barangay = d?.["gsx$barangay"]?.["$t"] ?? "";
    const province = d?.["gsx$province"]?.["$t"] ?? "";
    const city = d?.["gsx$municipalitycity"]?.["$t"] ?? "";
    const coords = d?.["gsx$coordinates"]?.["$t"] ?? "";

    return {
      id: `${hash(`${i}-${d?.["id"]?.["$t"]}`)}`,
      name: d?.["gsx$pantryname"]?.["$t"] ?? "",
      desc: d?.["gsx$description"]?.["$t"] ?? "",
      loc: `${barangay} ${city} ${province}, ${region}`,
      supplies: d?.["gsx$supplies"]?.["$t"] ?? "",
      coords: {
        long: coords.split(",")?.[0] ?? "",
        lat: coords.split(",")?.[1] ?? "",
      },
      sched: d?.["gsx$schedule"]?.["$t"] ?? "",
      contact: {
        name: d?.["gsx$contact"]?.["$t"] ?? "",
        phone: d?.["gsx$number"]?.["$t"] ?? "",
      },
      city,
      street,
      region,
      barangay,
      province,
    };
  });
};
