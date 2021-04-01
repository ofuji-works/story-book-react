import { Story } from "@storybook/react";

import Index, { IProps } from "./Index";

export default {
  title: "Atomic Design/Atoms/TextBox",
  component: Index,
};

const template: Story<IProps> = (args) => {
  return <Index {...args} />;
};

export const Default = template.bind({});
Default.args = {
  placeholder: "ここにテキストを入力してください",
  isInvalid: false,
  errorMessage: "エラー",
};
