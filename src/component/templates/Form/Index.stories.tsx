import React from "react";
import { Story } from "@storybook/react";

import Index, { IProps } from "./Index";

export default {
  title: "Atomic Design/Templates/Form",
  component: Index,
};

const template: Story<IProps> = (args) => <Index {...args} />;

export const Input = template.bind({});
