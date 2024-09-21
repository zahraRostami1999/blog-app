import styled from "./input.module.css";
import { Fragment } from "react";

function Input(props) {
  return (
    <>
      <div className={styled.row}>
        <label className={styled.col_25}>{props.label}</label>
        <input className={styled.col_75} name={props.name} type={props.type} onChange={props.handleChange} />
      </div>
    </>
  );
}

export default Input;
