import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { getMonth } from "../utils/schedule";
import CalendarHeader from "../components/Scheduler/CalendarHeader";
import CalendarSidebar from "../components/Scheduler/CalendarSidebar";
import CalendarMonth from "../components/Scheduler/CalendarMonth";
import GlobalContext from "../context/GlobalContext";
import EventModal from "../components/Scheduler/EventModal";
import { Footer } from "../components/Footer/Footer";

const Schedule = () => {
  console.table(getMonth());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <Navbar theme="light" selected="schedule" />
      <div className="overflow-hidden bg-white my-[100px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-screen flex flex-col">
            <CalendarHeader />
            <div className="flex flex-1">
              <CalendarSidebar />
              <CalendarMonth month={currentMonth} />
            </div>
          </div>
        </div>
      </div>
      {showEventModal && <EventModal />}
      <Footer />
    </>
  );
};

export default Schedule;
