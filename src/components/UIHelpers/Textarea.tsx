import { Form, FormControlProps } from "react-bootstrap";
interface TextareaProps extends FormControlProps {}
const TextareaStyling: React.CSSProperties = {
  backgroundColor: "#f7fdfe",
  borderRadius: "5px",
  border: "1px solid #e0e7ff",
  color: "black",
  padding: "6px 4px",
  boxShadow: "none",
  fontSize: "14px",
  fontFamily: "Rubikregular",
  resize: "none",
  overflow: "auto",
};

const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <Form.Control
      style={TextareaStyling}
      as="textarea"
      rows={5}
      {...props}></Form.Control>
  );
};
export default Textarea;
