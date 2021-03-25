import React from "react";
import type { Story } from "@storybook/react";

import App from "../App";

interface IArgs {
  logined: boolean;
}

export default {
  title: "Pages",
  component: App,
};

const defaultProps = {
  logined: false,
};

const template: Story<IArgs> = (args) => <App {...args} />;

export const Top = template.bind({});
Top.args = { ...defaultProps };
