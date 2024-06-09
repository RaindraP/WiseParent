import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-md flex items-center bg-primary500 text-white hover:bg-primary600"
    >
      <PlusCircleIcon className="w-7 h-7" />
      <span className="pl-3 pr-7">New Event</span>
    </button>
  );
};

export default CreateEventButton;
