import { Control, Controller, useController } from "react-hook-form";
import { Props } from "react-select";
import Label from "../UIHelpers/Label";
import CustomSelect from "../UIHelpers/CustomSelect";
import ErrorLabel from "../UIHelpers/ErrorLabel";

type SelectOption = {
  value: number | string;
  label: string;
};

interface SelectFieldProps extends Props {
  name: string;
  control: Control<any>;
  label: string;
  options: SelectOption[];
  required?: boolean;
  onDataChange?: (value: SelectOption) => void;
}
const SelectField: React.FC<SelectFieldProps> = ({
  name,
  control,
  label,
  options,
  required = false,
  onDataChange,
  ...props
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
        key={name}
        render={({ field }) => {
          return (
            <CustomSelect
              options={options || []}
              onChange={(e: any) => {
                field.onChange(e?.value.toString() || "");
                if (onDataChange) onDataChange(e);
              }}
              value={
                options
                  ? options.find((type) => type.value === field.value) || null
                  : undefined
              }
              {...props}
            />
          );
        }}
      />
      {typeof errorMessage === "string" && <ErrorLabel text={errorMessage} />}
    </>
  );
};
export default SelectField;
