import React from "react";
import { Container, Center, Image } from "@chakra-ui/react";
import "./Index.css";

const Index: React.VFC = () => {
  return (
    <>
      <Container padding={0} maxW={"xl"}>
        <div className="main-image"></div>
        <div className="content-wraper"></div>
      </Container>
    </>
  );
};

export default Index;
