import React from "react";
import { Input } from "@chakra-ui/react";
import "./style.css";

export interface IProps {
  placeholder: string;
  isInvalid?: boolean;
  errorMessage?: string;
}

const Index: React.VFC<IProps> = (props) => {
  return (
    <div className="textBox">
      {props?.isInvalid ? (
        <p className="errorMessage">{props?.errorMessage}</p>
      ) : (
        ""
      )}
      <Input
        variant="flushed"
        placeholder={props.placeholder}
        errorBorderColor="crimson"
        className={props?.isInvalid ? "inputText invalid" : "inputText"}
        isInvalid={props?.isInvalid}
      />
    </div>
  );
};

Index.defaultProps = {
  placeholder: "ここにテキストを入力してください。",
};

export default Index;
