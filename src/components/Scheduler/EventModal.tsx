import {
  Bars2Icon,
  Bars3BottomRightIcon,
  BookmarkIcon,
  CheckIcon,
  ClockIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

const EventModal = () => {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
    setSelectedEvent,
  } = useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl: string) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e: any) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setSelectedEvent(null);
    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <Bars2Icon className="h-6 text-gray-400" />

          <button
            onClick={() => {
              setSelectedEvent(null);
              setShowEventModal(false);
            }}
          >
            <XMarkIcon className="h-6 text-gray-400" />
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <ClockIcon className="h-6 text-gray-400" />
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <Bars3BottomRightIcon className="h-6 text-gray-400" />
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />
            <BookmarkIcon className="h-6 text-gray-400" />
            <div className="flex gap-x-2">
              {labelsClasses.map((label: string, index: number) => (
                <span
                  key={index}
                  onClick={() => setSelectedLabel(label)}
                  className={`bg-${label}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === label && (
                    <CheckIcon className="h-4 text-white text-sm" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          {selectedEvent && (
            <button
              className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded text-white mr-2"
              onClick={() => {
                dispatchCalEvent({ type: "delete", payload: selectedEvent });
                setShowEventModal(false);
              }}
            >
              Delete
            </button>
          )}
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;
