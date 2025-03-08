import { Form, FormControlProps } from "react-bootstrap";

interface LabelProps extends FormControlProps {
  text: string;
}
const TextStyling: React.CSSProperties = {
  color: "#fe4b48",
  fontSize: "13px",
  fontFamily: "Rubik-Regular",
  marginBottom: "0px",
};
const ErrorLabel: React.FC<LabelProps> = (props) => {
  return (
    <Form.Label style={TextStyling} className="text-danger" {...props}>
      {props.text}
    </Form.Label>
  );
};
export default ErrorLabel;
