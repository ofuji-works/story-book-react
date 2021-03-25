import React from "react";
import type { Story } from "@storybook/react";

import MenuButton, { IProps } from "../../../component/atoms/MenuButton";

export default {
  title: "MenuButtons",
  component: MenuButton,
};

const defaultProps = {
  active: false,
};

const template: Story<IProps> = (args) => <MenuButton {...args} />;

export const Default = template.bind({});
Default.args = {
  ...defaultProps,
};
