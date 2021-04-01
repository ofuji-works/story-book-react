import React from "react";
import { Grid, Box } from "@chakra-ui/react";

import TextBox from "../../atoms/TextBox/Index";
import "./style.css";

export interface IProps {
  firstLabel: string;
  lastLabel: string;
  isinValid: boolean;
  errorMessage: string;
}

const Index: React.VFC<IProps> = (props) => {
  return (
    <div className="nameBox">
      <Grid templateColumns="repeat(2, 1fr)" gap={15}>
        <Box>
          <TextBox
            placeholder={props.firstLabel}
            isInvalid={props.isinValid}
            errorMessage={props.errorMessage}
          />
        </Box>
        <Box>
          <TextBox placeholder={props.lastLabel} isInvalid={props.isinValid} />
        </Box>
      </Grid>
    </div>
  );
};

export default Index;
