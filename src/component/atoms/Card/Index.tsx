import React from "react";
import tip from "../../../assets/credit-tip.svg";
import "./style.css";

export interface IProps {
  face: "front" | "back";
  number: number;
}

const Index: React.VFC<IProps> = (props) => {
  return (
    <div className="card">
      <div
        className="face front"
        style={props.face == "back" ? { transform: "rotateY(180deg)" } : {}}
      >
        <h3 className="debit">Debit Card</h3>
        <h3 className="bank">Bank Name</h3>
        <img src={tip} className="chip" />
        <h3 className="number">{props.number}</h3>
        <h5 className="valid">
          <span>
            Valid
            <br />
            thru
          </span>
          <span>10/23</span>
        </h5>
        <h5 className="cardHolder">Muhanmad Irshad</h5>
      </div>
      <div
        className="face back"
        style={props.face == "back" ? { transform: "rotateY(360deg)" } : {}}
      >
        <div className="blackbar"></div>
        <div className="authorized">
          <p className="securityNumber">443</p>
          <h5>Name Name</h5>
        </div>
      </div>
    </div>
  );
};

export default Index;
