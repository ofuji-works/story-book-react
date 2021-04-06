import React, { useState } from "react";

import Card from "../../atoms/Card/Index";
import NumberBox, { IProps as INumberProps } from "../../atoms/NumberBox/Index";

export interface IProps {}

const Index: React.VFC<IProps> = (props) => {
  const [number, setNumber] = useState<string>("");
  const [securityNumber, setSecurityNumber] = useState<string>("");
  const [isBack, setIsBack] = useState<boolean>(false);

  return (
    <>
      <Card
        number={number}
        securityNumber={securityNumber}
        face={isBack ? "back" : "front"}
      />
      <NumberBox
        errorMessage="入力必須項目です。"
        isInvalid={false}
        maxLength={19}
        setNum={(num: string) => {
          setNumber(num);
        }}
        placeholder="カード番号"
      />
      <NumberBox
        errorMessage="入力必須項目です。"
        isInvalid={false}
        maxLength={19}
        setNum={(num: string) => {
          setSecurityNumber(num);
        }}
        placeholder="セキュリティ番号"
        onFocus={() => {
          setIsBack(true);
        }}
        onBlur={() => {
          setIsBack(false);
        }}
      />
    </>
  );
};

export default Index;
