import Routes from "lib/routes";
import AppContextProvider from "lib/AppContext";

import "antd/dist/antd.css";
import "theme/global.css";
import "leaflet/dist/leaflet.css";

const App = () => (
  <AppContextProvider>
    <Routes />
  </AppContextProvider>
);

export default App;
