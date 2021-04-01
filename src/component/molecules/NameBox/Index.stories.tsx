import { Story } from "@storybook/react";
import Index, { IProps } from "./Index";

export default {
  title: "Atomic Design/Molecules/NameBox",
  component: Index,
};

const template: Story<IProps> = (args) => {
  return <Index {...args} />;
};

export const Default = template.bind({});
Default.args = {
  firstLabel: "名",
  lastLabel: "姓",
  isinValid: false,
  errorMessage: "エラー",
};
