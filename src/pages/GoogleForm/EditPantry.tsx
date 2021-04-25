import React, { FC } from "react";

import Layout from "components/shared/Layout";
import { EDIT_PANTRY_FORM } from "utils/constants";

import * as S from "./styles";

const EditPantry: FC = () => {
  return (
    <Layout headerBg title="Edit pantry">
      <S.Form src={EDIT_PANTRY_FORM} />
    </Layout>
  );
};

export default EditPantry;
