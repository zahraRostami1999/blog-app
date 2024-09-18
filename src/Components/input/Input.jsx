import styled from "./input.module.css";
import { Fragment } from "react";

function Input(props) {
  return (
    <>
      <div>
        <label>{props.label}</label>
        <input name={props.name} onChange={props.handleChange} />
      </div>
    </>
  );
}

export default Input;