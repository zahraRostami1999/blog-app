import styled from "./textarea.module.css";
import { Fragment } from "react";

function Textarea(props) {
  return (
    <>
      <div>
        <label>{props.label}</label>
        <textarea name={props.name} onChange={props.handleChange}></textarea>
      </div>
    </>
  );
}

export default Textarea;
