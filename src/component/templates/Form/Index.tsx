import React from "react";
import { Input } from "@chakra-ui/react";

export interface IProps {}

const Index: React.FC<IProps> = (props) => {
  return (
    <div>
      <div>
        <Input variant="flushed" style={{ height: "40px" }} />
      </div>
    </div>
  );
};

export default Index;
