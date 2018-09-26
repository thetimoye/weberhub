import React from "react";
import classnames from "classnames";

const FormInput = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  className
}) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classnames("input-field")}
      />
    </React.Fragment>
  );
};
FormInput.defaultProps = {
  type: "text"
};
export default FormInput;
