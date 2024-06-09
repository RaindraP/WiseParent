import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center justify-between">
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Area 15 Domain</h1>
      <div className="flex flex-row gap-2 items-center">
        <button onClick={handleReset} className="border py-2 px-4 mr-5 rounded">
          Today
        </button>
        <button onClick={handlePrevMonth}>
          <ChevronLeftIcon className="cursor-pointer text-gray-600 mx-2 h-6" />
        </button>
        <h2 className="mx-4 text-xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
        <button onClick={handleNextMonth}>
          <ChevronRightIcon className="cursor-pointer text-gray-600 mx-2 h-6" />
        </button>
      </div>
    </header>
  );
};

export default CalendarHeader;
