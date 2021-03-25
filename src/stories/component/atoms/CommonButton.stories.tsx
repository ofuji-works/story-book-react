import React from "react";
import { Story } from "@storybook/react";

import Button, { IProps } from "../../../component/atoms/CommonButton";

export default {
  title: "CommonButton",
  component: Button,
};

const defaultProps = {
  text: "Button",
};

const template: Story<IProps> = (args) => <Button {...args} />;

export const Primary = template.bind({});
Primary.args = {
  ...defaultProps,
  text: "primary",
  bgColor: "#39b2ab",
  color: "#FFFFFF",
};

export const Danger = template.bind({});
Danger.args = {
  text: "danger",
  bgColor: "#fd6b45",
  color: "#FFFFFF",
};
