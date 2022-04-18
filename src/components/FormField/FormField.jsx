import React from "react";

const FormField = (props) => {
  return (
    <div className="mb-2">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className={`form-control shadow-none ${
          props.touched && props.error && "is-invalid"
        }`}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.touched && props.error && (
        <div className="text-danger">{props.error}</div>
      )}
    </div>
  );
};

export default FormField;
