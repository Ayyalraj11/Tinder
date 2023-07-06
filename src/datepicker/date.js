import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

const DateRangePickerComponent = () => {
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  const handleRangeChange = (ranges) => {
    setSelectedRange([ranges.selection]);
  };

  return (
    <div>
      <DateRangePicker
        ranges={selectedRange}
        onChange={handleRangeChange}
        Months={2} 
      />
    </div>
  );
};

export default DateRangePickerComponent;
