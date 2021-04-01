import React, { useState } from "react";
import { Flex, Spacer, Circle } from "@chakra-ui/react";

export interface IProps {
  logined: boolean;
}

const Layout: React.FC<IProps> = (props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
