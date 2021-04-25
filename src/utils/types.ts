export interface Pantry {
  id: string;
  name: string;
  desc: string;
  loc: string;
  coords: {
    long: string;
    lat: string;
  };
  supplies: string;
  sched: string;
  province: string;
  region: string;
  contact: string;
  barangay: string;
  street: string;
  city: string;
}
