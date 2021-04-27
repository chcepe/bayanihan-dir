import { hash } from "./functions";
import { Pantry } from "./types";

export const formatPantries = (data: any[]): Pantry[] => {
  return data.map((d, i) => {
    const street = d?.["gsx$streetaddress"]?.["$t"] ?? "";
    const region = d?.["gsx$region"]?.["$t"] ?? "";
    const barangay = d?.["gsx$barangay"]?.["$t"] ?? "";
    const province = d?.["gsx$province"]?.["$t"] ?? "";
    const city = d?.["gsx$municipalitycity"]?.["$t"] ?? "";

    return {
      id: `${hash(`${i}-${d?.["id"]?.["$t"]}`)}`,
      name: d?.["gsx$communitypantryname"]?.["$t"] ?? "",
      desc: d?.["gsx$communitypantrydescription"]?.["$t"] ?? "",
      loc: `${barangay} ${city} ${province}, ${region}`,
      supplies: d?.["gsx$supplies"]?.["$t"] ?? "",
      coords: {
        long: d?.["gsx$longitude"]?.["$t"] ?? "",
        lat: d?.["gsx$latitude"]?.["$t"] ?? "",
      },
      sched: d?.["gsx$schedule"]?.["$t"] ?? "",
      contact: {
        name: d?.["gsx$contactpersons"]?.["$t"] ?? "",
        phone: d?.["gsx$contactnumbers"]?.["$t"] ?? "",
      },
      city,
      street,
      region,
      barangay,
      province,
    };
  });
};
