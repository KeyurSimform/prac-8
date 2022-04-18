import React from "react";

// Here is have made the componenet to easlity implement the functionality of form 
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
