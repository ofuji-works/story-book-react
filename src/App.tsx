import React from "react";
import Router from "./Router";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "./component/templates/Layout";

export interface IProps {
  logined: boolean;
}

const App: React.VFC<IProps> = (props) => {
  return (
    <ChakraProvider resetCSS={true}>
      <Layout logined={props.logined}>
        <main>
          <Router />
        </main>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
