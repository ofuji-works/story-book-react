import React from "react";
import { Input, Grid, Box } from "@chakra-ui/react";
import "./style.css";

interface IInput {
  maxLength: number;
}

export interface IProps {
  inputs: IInput[];
  number: number;
  errorMessage: string;
  isInvalid: boolean;
}

const Index: React.VFC<IProps> = React.memo((props) => {
  return (
    <div className="numberBox">
      {props.isInvalid ? (
        <p className="errorMessage">{props.errorMessage}</p>
      ) : (
        ""
      )}
      <Grid
        templateColumns={`repeat(${props.number}, 1fr)`}
        gap={20}
        className={props.isInvalid ? "InputBox error" : "InputBox"}
      >
        {props.inputs.map((input, index) => (
          <Box key={`key-${index}`}>
            <Input
              variant="unstyled"
              className="numberInput"
              maxLength={input.maxLength}
            />
          </Box>
        ))}
      </Grid>
    </div>
  );
});

export default Index;
