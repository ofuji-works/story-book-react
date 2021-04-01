import React from "react";
import type { Story } from "@storybook/react";

import Layout from "../component/templates/Layout";
import TopPage from "./Index";

interface IArgs {
  logined: boolean;
}

export default {
  title: "Pages",
  component: Layout,
  subComponents: { TopPage },
};

const defaultProps = {
  logined: false,
};

export const Top: Story<IArgs> = (args) => (
  <Layout {...args}>
    <TopPage />
  </Layout>
);

Top.args = {
  ...defaultProps,
};
