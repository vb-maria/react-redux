import React from "react";

const FormField = ({ label, type, name, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="py-2">{label}: </label>
    <input type={type} name={name} onChange={onChange} className="py-2 border-2 border-teal-200" />
  </div>
);

export default FormField;
