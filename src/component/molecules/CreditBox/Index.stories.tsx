import { Story } from "@storybook/react";
import Index, { IProps } from "./Index";

export default {
  title: "Atomic Design/Molecules/CreditBox",
  component: Index,
};

const template: Story<IProps> = (args) => <Index {...args} />;

export const Default = template.bind({});
