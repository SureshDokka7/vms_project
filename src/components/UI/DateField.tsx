import { FormControlProps } from "react-bootstrap";
import { Control, Controller, useController } from "react-hook-form";
import Label from "../UIHelpers/Label";
import DateBox from "../UIHelpers/Date";
import ErrorLabel from "../UIHelpers/ErrorLabel";

interface DateFieldProps extends FormControlProps {
  name: string;
  label: string;
  control: Control<any>;
  required?: boolean;
}

const DateField: React.FC<DateFieldProps> = ({
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
        render={({ field }) => <DateBox {...field} />}
      />
      {typeof errorMessage === "string" ? (
        <ErrorLabel text={errorMessage} />
      ) : null}
    </>
  );
};
export default DateField;
