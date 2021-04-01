import { Story } from "@storybook/react";
import Index, { IProps } from "./Index";

export default {
  title: "Atomic Design/Atoms/Card",
  component: Index,
};

const template: Story<IProps> = (args) => <Index {...args} />;

export const Front = template.bind({});
Front.args = {
  face: "front",
};

export const Back = template.bind({});
Back.args = {
  face: "back",
};
