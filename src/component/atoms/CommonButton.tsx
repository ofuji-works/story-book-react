import React from "react";

export interface IProps {
  height?: number;
  width?: number;
  text: string;
  bgColor?: string;
  color?: string;
}

const CommonButton: React.VFC<IProps> = (props) => {
  return (
    <>
      <button
        style={{
          height: props.height,
          width: props.width,
          backgroundColor: props.bgColor,
          color: props.color,
          border: "none",
          borderRadius: 5,
        }}
      >
        {props.text}
      </button>
    </>
  );
};

CommonButton.defaultProps = {
  height: 30,
  width: 80,
};

export default CommonButton;
