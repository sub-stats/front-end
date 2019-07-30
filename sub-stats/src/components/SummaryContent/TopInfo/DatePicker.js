import React from 'react';
import { TextField } from '@material-ui/core';

export default function DatePicker({ label, date, setDate }) {

  const handleChange = (event) => {
    setDate(event.target.value);
  }

  return (
    <form>
      <TextField
        id="date"
        label={label}
        type="date"
        defaultValue={date}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}