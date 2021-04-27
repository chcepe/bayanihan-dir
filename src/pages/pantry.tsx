import { useContext } from "react";
import styled from "styled-components";

import Layout from "components/shared/Layout";
import SinglePantry from "containers/SinglePantry";
import { AppContext } from "lib/AppContext";
import Loading from "components/shared/Loading";

const StyledLoading = styled(Loading)`
  margin: auto;
  margin-top: 150px;
  display: block;
  width: 100px;
`;

const MapPage = () => {
  const { loadingPantries } = useContext(AppContext);

  return (
    <Layout headerBg title="Pantry">
      {loadingPantries ? <StyledLoading /> : <SinglePantry />}
    </Layout>
  );
};

export default MapPage;
