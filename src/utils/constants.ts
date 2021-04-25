import Leaflet from "leaflet";

export const APP_NAME = "Bayanihandir";

export const PANTRIES_PER_PAGE = 10;

export const GOOGLE_SHEET_FILE =
  "https://docs.google.com/spreadsheets/d/1fahZsfqpqeVyq5GBYtoUBUJ3ECjbjNDbcPcCIbg5IEg/edit#gid=0";

export const GOOGLE_SHEET =
  "https://spreadsheets.google.com/feeds/list/1fahZsfqpqeVyq5GBYtoUBUJ3ECjbjNDbcPcCIbg5IEg/1/public/full?alt=json";

export const ADD_PANTRY_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScLkBDOsXdldlwGiUTabMhss9Lt79tn-1dNsHYCGwLfkebksg/viewform?embedded=true";

export const EDIT_PANTRY_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSf-o5VEIcVOqO_3tGDA2gXUw6eN9cXJRKUuEP2XwHrkCP7MNQ/viewform?embedded=true";

export const LEAFLET_ICON = new Leaflet.Icon({
  iconUrl: "/images/pin.svg",
  iconSize: new Leaflet.Point(30, 30),
});

export const PHILIPPINES_LL = [12.8797, 121.774];
