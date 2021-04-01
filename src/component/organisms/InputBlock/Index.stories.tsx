import { Story } from "@storybook/react";

import Index from "./Index";

export default {
  title: "Atomic Design/Organisms/InputBLock",
  component: Index,
};

const template: Story = () => <Index />;

export const Default = template.bind({});
