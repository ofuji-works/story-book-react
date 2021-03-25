import React, { useState } from "react";
import { Flex, Spacer, Circle } from "@chakra-ui/react";
import Button from "../atoms/CommonButton";

import MenuButton from "../atoms/MenuButton";

export interface IProps {
  logined: boolean;
}

const Layout: React.FC<IProps> = (props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Flex>
        <MenuButton active={clicked} />
        <Spacer />
        {props.logined ? (
          <Circle size="40px" bg="tomato">
            K
          </Circle>
        ) : (
          <Button text="ログイン" />
        )}
      </Flex>
      {props.children}
    </>
  );
};

export default Layout;
