import { GiCheckMark } from "react-icons/gi";
import Select, { components } from "react-select";

const CustomOption = (props: any) => {
  return (
    <components.Option {...props}>
      {props.data.label}
      {props.isSelected && <GiCheckMark style={{ marginLeft: "auto" }} />}
    </components.Option>
  );
};
const CustomValueContainer = ({ children, ...props }: any) => {
  const [values, input] = Array.isArray(children) ? children : [children];

  if (props.hasValue && props.isMulti) {
    const valueLength = props.getValue().length;
    const displayLabel =
      valueLength > 1 ? `${valueLength} selected` : props.getValue()[0].label;
    return (
      <components.ValueContainer {...props}>
        <span
          title={props
            .getValue()
            .map((option: any) => option.label)
            .toString()}>
          {displayLabel}
        </span>
        {input}
      </components.ValueContainer>
    );
  }

  return (
    <components.ValueContainer {...props}>
      {values}
      {input}
    </components.ValueContainer>
  );
};

const CustomSelect = (props: any) => {
  return (
    <Select
      menuPortalTarget={document.body}
      menuPosition="fixed"
      components={{
        Option: CustomOption,
        ValueContainer: CustomValueContainer,
      }}
      {...props}
    />
  );
};
export default CustomSelect;
