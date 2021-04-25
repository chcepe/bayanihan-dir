import Home from "pages/index";
import PantryPage from "pages/pantry";
import Map from "pages/map";
import AddPantryPage from "pages/GoogleForm/AddPantry";
import EditPantryPage from "pages/GoogleForm/EditPantry";

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
    component: PantryPage,
    exact: false,
  },
  ADD_PANTRY: {
    path: "/add-pantry",
    component: AddPantryPage,
    exact: true,
  },
  EDIT_PANTRY: {
    path: "/edit-pantry",
    component: EditPantryPage,
    exact: true,
  },
};

export default ROUTES;
