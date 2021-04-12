import React from "react";
import "./style.css";

import InputBlock from "../../organisms/InputBlock/Index";
import AddressBox from "../../molecules/AddressBox/Index";
import CreditBox from "../../molecules/CreditBox/Index";

export interface IProps {}

const Index: React.FC<IProps> = (props) => {
  return (
    <div className="form-background">
      <div className="form-content">
        <h3 className="title">入力フォーム</h3>
        <div className="form-block">
          <label>名前</label>
          <InputBlock />
        </div>
        <div className="form-block">
          <label>住所</label>
          <AddressBox />
        </div>
        <div className="form-block">
          <label>クレジットカード情報</label>
          <CreditBox />
        </div>
      </div>
    </div>
  );
};

export default Index;
