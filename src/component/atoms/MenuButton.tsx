import React from "react";
import { Circle, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export interface IProps {
  active: boolean;
}

const MenuButton: React.VFC<IProps> = (props) => {
  return (
    <Circle bg="tomato" size="40px">
      {props.active ? <CloseIcon /> : <HamburgerIcon />}
    </Circle>
  );
};

export default MenuButton;
