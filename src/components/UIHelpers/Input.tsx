import { Form, FormControlProps } from "react-bootstrap";

interface TextBoxProps extends FormControlProps {}
const Input: React.FC<TextBoxProps> = (props) => {
  const TextBoxStyling: React.CSSProperties = {
    backgroundColor: "#f7fdfe",
    borderRadius: "5px",
    border: "1px solid #e0e7ff",
    color: "black",
    padding: "6px 4px",
    boxShadow: "none",
    fontSize: "14px",
    fontFamily: "Rubik Regular",
    height: "38px",
    ...(props.disabled && {
      cursor: "not-allowed",
    }),
  };

  return <Form.Control type="text" style={TextBoxStyling} {...props} />;
};
export default Input;
