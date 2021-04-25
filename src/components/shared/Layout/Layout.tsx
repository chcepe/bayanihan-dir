import React, { FC, useEffect } from "react";

import { APP_NAME } from "utils/constants";
import Header from "components/shared/Header";

interface Props {
  title: string;
  headerBg?: boolean;
}

const Layout: FC<Props> = ({ children, title, headerBg }) => {
  useEffect(() => {
    document.title = `${APP_NAME} - ${title}`;
  });
  return (
    <>
      <Header headerBg={headerBg} />
      {children}
    </>
  );
};

export default Layout;
