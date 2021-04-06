import React from "react";
import { Input, Grid, Box } from "@chakra-ui/react";
import "./style.css";

export interface IProps {
  maxLength: number;
  errorMessage: string;
  isInvalid: boolean;
  setNum: (num: string) => void;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
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
              const regexp: any = /^(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,4})?$/;
              const digits = event.target.value.replace(/[^0-9]/g, "");
              event.target.value = [...regexp.exec(digits)]
                .slice(1)
                .filter((e) => e)
                .join(" ");
              props.setNum(event.target.value);
            }}
            placeholder={props.placeholder}
            onFocus={() => {
              props.onFocus ? props.onFocus() : "";
            }}
            onBlur={() => {
              props.onBlur ? props.onBlur() : "";
            }}
          />
        </Box>
      </Grid>
    </div>
  );
};

export default Index;
