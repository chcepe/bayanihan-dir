import React, { FC } from "react";

import Layout from "components/shared/Layout";
import { ADD_PANTRY_FORM } from "utils/constants";

import * as S from "./styles";

const AddPantry: FC = () => {
  return (
    <Layout headerBg title="Add pantry">
      <S.Form src={ADD_PANTRY_FORM} />
    </Layout>
  );
};

export default AddPantry;
