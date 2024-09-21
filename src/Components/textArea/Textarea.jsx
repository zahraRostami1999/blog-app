import styled from "./textarea.module.css";
import { Fragment } from "react";

function Textarea(props) {
  return (
    <>
      <div className={styled.row}>
        <label className={styled.col_25}>{props.label}</label>
        <textarea className={styled.col_75} name={props.name} onChange={props.handleChange}></textarea>
      </div>
    </>
  );
}

export default Textarea;
