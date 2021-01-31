import React from 'react';
import { nanoid } from 'nanoid';
import { FaStar } from "react-icons/fa";

export default function RadioSelector ({ label, count, checked, onChange }) {
  const inputs = [];
  for (let i = 0; i < count; i++) {
    inputs.push(<input type='radio' key={nanoid()} value={i + 1} checked={checked === `${i + 1}`} onChange={({ target: { value } }) => onChange(value)} />);
  }
  return (
    <div className='inputContainer'>
      <label>
        {label}
      </label>
      <div>
        {inputs}
      </div>
    </div>
  );
}
