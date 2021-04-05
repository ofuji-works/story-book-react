import React from "react";
import { Input, Grid, Box } from "@chakra-ui/react";
import "./style.css";

export interface IProps {
  maxLength: number;
  errorMessage: string;
  isInvalid: boolean;
  setNum: (num: string) => void;
}

const Index: React.VFC<IProps> = (props) => {
  return (
    <div className="numberBox">
      {props.isInvalid ? (
        <p className="errorMessage">{props.errorMessage}</p>
      ) : (
        ""
      )}
      <Grid className={props.isInvalid ? "InputBox error" : "InputBox"}>
        <Box>
          <Input
            variant="unstyled"
            className="numberInput"
            maxLength={props.maxLength}
            onChange={(event) => {
              props.setNum(event.target.value);
            }}
          />
        </Box>
      </Grid>
    </div>
  );
};

export default Index;
