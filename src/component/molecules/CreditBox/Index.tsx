import React, { useState } from "react";

import Card from "../../atoms/Card/Index";
import NumberBox, { IProps as INumberProps } from "../../atoms/NumberBox/Index";

export interface IProps {}

const Index: React.VFC<IProps> = (props) => {
  const [number, setNumber] = useState<string>("");

  return (
    <>
      <Card face="front" number={number} securityNumber={""} />
      <NumberBox
        errorMessage="入力必須項目です。"
        isInvalid={false}
        maxLength={16}
        setNum={(num: string) => {
          setNumber(num);
        }}
      />
    </>
  );
};

export default Index;
