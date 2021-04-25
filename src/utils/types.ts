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
  contact: {
    name: string;
    phone: string;
  };
  barangay: string;
  street: string;
  city: string;
}

export interface Contributor {
  name: string;
  link?: string;
}
