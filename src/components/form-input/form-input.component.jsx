import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherData }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherData} />
    {label ? (
      <label
        className={`${otherData.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
