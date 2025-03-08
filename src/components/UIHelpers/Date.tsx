import { Form, FormControlProps } from "react-bootstrap";
interface DateProps extends FormControlProps {}

const DateStyling: React.CSSProperties = {
  backgroundColor: "#f7fdfe",
  borderRadius: "5px",
  border: "1px solid #e07ff",
  color: "black",
  padding: "6px 4px",
  boxShadow: "none",
  fontSize: "14px",
  fontFamily: "RubikRegular",
  height: "38px",
};
const DateBox: React.FC<DateProps> = (props) => {
  return (
    <Form.Control style={DateStyling} type="date" {...props}></Form.Control>
  );
};
export default DateBox;
