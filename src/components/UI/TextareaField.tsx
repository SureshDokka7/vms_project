import { FormControlProps } from "react-bootstrap";
import { Control, Controller, useController } from "react-hook-form";
import Label from "../UIHelpers/Label";
import Textarea from "../UIHelpers/Textarea";
import ErrorLabel from "../UIHelpers/ErrorLabel";

interface TextareaProps extends FormControlProps {
  name: string;
  label: string;
  control: Control<any>;
  required?: boolean;
}
const TextareaField: React.FC<TextareaProps> = ({
  name,
  label,
  control,
  required = false,
}) => {
  const {
    formState: { errors },
  } = useController({ name, control });
  const errorMessage = errors?.name?.message;
  return (
    <>
      <Label text={label} required={required} />
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Textarea {...field} />}
      />
      {typeof errorMessage === "string" ? (
        <ErrorLabel text={errorMessage} />
      ) : null}
    </>
  );
};
export default TextareaField;
