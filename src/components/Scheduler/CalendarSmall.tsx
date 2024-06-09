import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { getMonth } from "../../utils/schedule";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import GlobalContext from "../../context/GlobalContext";

const CalendarSmall = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIndex(currentMonthIndex - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIndex(currentMonthIndex + 1);
  }
  function getDayClass(day: any) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "bg-primary500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-primary200 rounded-full text-primary500 font-bold";
    } else {
      return "";
    }
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between ">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <ChevronLeftIcon className="cursor-pointer text-gray-600 mx-2 h-4" />
          </button>
          <button onClick={handleNextMonth}>
            <ChevronRightIcon className="cursor-pointer text-gray-600 mx-2 h-4" />
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day: any, index: number) => (
          <span key={index} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row: any, index: number) => (
          <React.Fragment key={index}>
            {row.map((day: any, idx: number) => (
              <button
                key={idx}
                className={`py-1 w-full ${getDayClass(day)}`}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIndex);
                  setDaySelected(day);
                }}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CalendarSmall;
