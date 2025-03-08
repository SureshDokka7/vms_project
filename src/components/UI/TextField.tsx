import { FormControlProps } from "react-bootstrap";
import { Control, Controller, useController } from "react-hook-form";
import Label from "../UIHelpers/Label";
import Input from "../UIHelpers/Input";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import ErrorLabel from "../UIHelpers/ErrorLabel";

interface TextFieldProps extends FormControlProps {
  name: string;
  label: string;
  control: Control<any>;
  required?: boolean;
  passwordEye?: boolean;
  type?: "text" | "password" | "number";
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  control,
  required = false,
  type = "text",
  ...props
}) => {
  const {
    formState: { errors },
  } = useController({ name, control });

  const errorMessage = errors?.[name]?.message;
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";
  const isNumberField = type === "number";
  return (
    <>
      <Label text={label} required={required} />
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Input
              {...field}
              {...props}
              type={
                isPasswordField && !showPassword
                  ? "password"
                  : isNumberField
                  ? "number"
                  : "text"
              }
            />
          )}
        />
        {isPasswordField && showPassword && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              cursor: "pointer",
              color: "#666",
              bottom: "4px",
            }}>
            {showPassword ? (
              <IoEyeOutline size={20} />
            ) : (
              <IoEyeOffOutline size={20} />
            )}
          </span>
        )}
      </div>
      {typeof errorMessage === "string" && <ErrorLabel text={errorMessage} />}
    </>
  );
};
export default TextField;
