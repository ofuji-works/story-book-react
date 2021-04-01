import React from "react";
import Router from "./Router";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import Layout from "./component/templates/Layout";

export interface IProps {
  logined: boolean;
}

const App: React.FC<IProps> = (props) => {
  return (
    <ChakraProvider>
      <Layout logined={props.logined}>
        <Router />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
