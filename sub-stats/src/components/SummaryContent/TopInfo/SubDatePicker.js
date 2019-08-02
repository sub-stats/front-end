import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
// import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export default function SubDatePicker({ label, setStartDate, setEndDate }) {
  const [currentStart, setCurrentStart] = useState(moment('2019-05-01'));

  const handleCalendarChange = (date, dateString) => {
    setCurrentStart(date[0]);
  }

  const handleChange = (date, dateString) => {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
  }

  const disabledDate = (current) => {
    const daysToStart = Math.abs(moment(current).diff(currentStart, 'days'));
    return current && (current < new Date('2019-05-01') || current > new Date('2019-08-01') || daysToStart <= 3);
  }

  return (
    <form>
      <RangePicker 
        label={label}
        defaultValue={[moment('2019-05-01'), moment('2019-07-31')]}
        disabledDate={disabledDate}
        onCalendarChange={handleCalendarChange}
        onChange={handleChange}
      />
    </form>
  );
}