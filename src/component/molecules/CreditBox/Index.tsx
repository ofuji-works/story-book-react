import React, { useRef } from "react";

import Card from "../../atoms/Card/Index";
import NumberBox, { IProps as INumberProps } from "../../atoms/NumberBox/Index";

const numberBoxParams: INumberProps = {
  inputs: [
    {
      maxLength: 4,
    },
    {
      maxLength: 4,
    },
    {
      maxLength: 4,
    },
    {
      maxLength: 4,
    },
  ],
  number: 4,
  errorMessage: "入力必須項目です。",
  isInvalid: false,
};

export interface IProps {}

const Index: React.VFC<IProps> = (props) => {
  return (
    <>
      <Card face="front" number={888} />
      <NumberBox {...numberBoxParams} />
    </>
  );
};

export default Index;
