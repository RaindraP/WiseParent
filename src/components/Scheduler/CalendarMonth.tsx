import React from "react";
import CalendarDay from "./CalendarDay";

interface CalendarMonthProps {
  month: any;
}

const CalendarMonth = ({ month }: CalendarMonthProps) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row: any, ind: any) => (
        <React.Fragment key={ind}>
          {row.map((day: any, index: any) => (
            <CalendarDay day={day} key={index} rowIndex={ind} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CalendarMonth;
