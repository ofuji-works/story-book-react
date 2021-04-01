import React from "react";
import NameBox from "../../molecules/NameBox/Index";

const Index: React.FC = () => {
  return (
    <>
      <NameBox
        firstLabel="名"
        lastLabel="姓"
        isinValid={false}
        errorMessage="エラーメッセージ"
      />

      <NameBox
        firstLabel="メイ"
        lastLabel="セイ"
        isinValid={false}
        errorMessage="エラーメッセージ"
      />
    </>
  );
};

export default Index;
