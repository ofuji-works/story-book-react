import { Story } from "@storybook/react";

import Index, { IProps } from "./Index";

export default {
  title: "Atomic Design/Atoms/NumberBox",
  component: Index,
};

const template: Story<IProps> = (args) => <Index {...args} />;

export const Default = template.bind({});
Default.args = {
  number: 4,
  isInvalid: true,
  errorMessage: "エラー",
  inputs: [
    { maxLength: 4 },
    { maxLength: 4 },
    { maxLength: 4 },
    { maxLength: 4 },
  ],
};
