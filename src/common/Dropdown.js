import React from "react";

const Dropdown = ({ options, name, onChange }) => {
  return (
    <div className='field'>
      <select
        className='ui fluid search dropdown'
        name={name}
        onChange={onChange}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
