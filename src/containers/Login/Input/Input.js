import React from "react";

const LoginInput = (props) => {
  const {
    className,
    type,
    inputName,
    value,
    placeholder,
    onChange,
    onBlur,
    errors,
    errorsClass,
    errorMessageClass,
    touched,
  } = props;
  return (
    <div className={className}>
      <input
        aria-label="login input"
        type={type}
        name={inputName}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        className={errors ? errorsClass : ""}
      />
      {touched && errors && <p className={errorMessageClass}>{errors}</p>}
    </div>
  );
};

export default LoginInput;
