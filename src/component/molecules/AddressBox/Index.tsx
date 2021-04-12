import React from "react";
import { Grid, Box } from "@chakra-ui/react";

import TextBox from "../../atoms/TextBox/Index";
import Select from "../../atoms/SelectBox/Index";
import "./style.css";

export interface IProps {
  isInValid?: boolean;
}

const Index: React.VFC<IProps> = (props) => {
  return (
    <div className="addressBox">
      <Grid templateColumns="repeat(2, 1fr)" gap={15}>
        <Box>
          <TextBox placeholder="郵便番号" />
        </Box>
        <Box>
          <Select options={[]} isInvalid={props.isInValid} />
        </Box>
      </Grid>
    </div>
  );
};

export default Index;
