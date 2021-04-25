import Home from "pages/index";
import Map from "pages/map";

const ROUTES = {
  HOME: {
    path: "/",
    component: Home,
    exact: true,
  },
  MAP: {
    path: "/map",
    component: Map,
    exact: true,
  },
  MAP_ID: {
    path: "/map/:id",
    component: Map,
    exact: false,
  },
};

export default ROUTES;
