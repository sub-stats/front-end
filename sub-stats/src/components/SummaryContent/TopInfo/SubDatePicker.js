import React from 'react';
import { TextField } from '@material-ui/core';
// import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import { DatePicker } from 'antd';

import 'antd/dist/antd.css';

export default function SubDatePicker({ label, date, setDate }) {

  const handleChange = (date, dateString) => {
    setDate(dateString);
  }

  const disabledDate = (current) => {
    return current && current < moment('2019-05-01');
  }

  return (
    <form>
      {/* <TextField
        id="date"
        label={label}
        type="date"
        defaultValue={date}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      /> */}
      <DatePicker 
        label={label}
        disabledDate={disabledDate} 
        onChange={handleChange}
      />
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          label={label}
          clearable
          id="date"
          value={Date(date)}
          minDate={Date('2019-05-01')}
          // maxDate={Date('2019-08-01')}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </MuiPickersUtilsProvider> */}
    </form>
  );
}