import { Story } from "@storybook/react";

import Index, { IProps } from "./Index";

export default {
  title: "Atomic Design/Atoms/NumberBox",
  component: Index,
};

const template: Story<IProps> = (args) => <Index {...args} />;

export const Default = template.bind({});
Default.args = {
  isInvalid: true,
  errorMessage: "エラー",
  maxLength: 4,
};
