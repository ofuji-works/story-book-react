import { Story } from "@storybook/react";
import Index, { IProps } from "./Index";

export default {
  title: "Atomic Design/Atoms/SelectBox",
  component: Index,
};

const template: Story<IProps> = (args) => <Index {...args} />;

export const Default = template.bind({});
Default.args = {
  options: [
    {
      value: "選択肢1",
      label: "選択肢1",
    },
    {
      value: "選択肢2",
      label: "選択肢2",
    },
    {
      value: "選択肢3",
      label: "選択肢3",
    },
  ],
  isInvalid: false,
  errorMessage: "エラー",
};
