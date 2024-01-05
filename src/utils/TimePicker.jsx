import React from 'react';

const TimePicker = ({hour, minute, onHourChange, onMinuteChange}) => {

    return (
        <div className="mb-4 flex flex-row justify-center">
            <label htmlFor="time" className="block text-lg m-3 text-slate-300 font-semibold mb-2">
            Birth Time (24h)
            </label>
            <select
        id="hour"
        value={hour}
        onChange={onHourChange}
        className="p-1 border rounded-xl m-1"
        
      >
        {Array.from({ length: 24 }, (_, index) => index + 1).map((hour) => (
          <option key={hour} value={String(hour).padStart(2, '0')}>{String(hour).padStart(2, '0')}</option>
        ))}
      </select>

        <select
        id="minute"
        value={minute}
        onChange={onMinuteChange}
        className="p-1 border rounded-xl m-1"
      >
        {Array.from({ length: 60 }, (_, index) => index).map((minute) => (
          <option key={minute} value={String(minute).padStart(2, '0')}>{String(minute).padStart(2, '0')}</option>
        ))}
      </select>
        </div>
    );
};

export default TimePicker;
