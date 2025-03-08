import React from "react";
import { Form, FormControlProps } from "react-bootstrap";

interface LabelProps extends FormControlProps {
  text: string;
  required: boolean;
}

const LabelStyling: React.CSSProperties = {
  color: "#636363",
  fontSize: "13px",
  fontFamily: "Rubik-Regular",
  marginBottom: "0px",
};
const Label: React.FC<LabelProps> = (props) => {
  return (
    <Form.Label style={LabelStyling} {...props}>
      {props.text}
      {props.required ? <span style={{ color: "red" }}>*</span> : null}
    </Form.Label>
  );
};
export default Label;
