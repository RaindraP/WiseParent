import CreateEventButton from "./CreateEventButton";
import CalendarSmall from "./CalendarSmall";

const CalendarSidebar = () => {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <CalendarSmall />
    </aside>
  );
};

export default CalendarSidebar;
