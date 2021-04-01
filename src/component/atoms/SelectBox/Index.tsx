import React from "react";
import { Select } from "@chakra-ui/react";
import "./style.css";

interface IOption {
  value: string;
  label: string;
}

export interface IProps {
  options: IOption[];
  isInvalid?: boolean;
  errorMessage?: string;
}

const Index: React.VFC<IProps> = (props) => {
  return (
    <div className="selectBox">
      {props?.isInvalid ? (
        <p className="errorMessage">{props.errorMessage}</p>
      ) : (
        ""
      )}
      <div className="absolute">
        <Select
          variant="flushed"
          placeholder="未選択"
          errorBorderColor="crimson"
          isInvalid={props?.isInvalid}
          className={props?.isInvalid ? "inputSelect invalid" : "inputSelect"}
        >
          {props.options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Index;
