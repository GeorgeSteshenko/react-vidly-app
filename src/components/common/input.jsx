import React from "react";

// const Input = ({ name, label, value, type, error, onChange }) => {
// rewritten params with ...rest
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {/* <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        id={name}
        className={error ? "form-control is-invalid" : "form-control"}
      /> */}
      {/* Rewritten props to use ...rest */}
      <input
        {...rest}
        name={name}
        id={name}
        className={error ? "form-control is-invalid" : "form-control"}
      />
      {error && (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
