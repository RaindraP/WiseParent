import React from "react";

interface GlobalContextInterface {
  monthIndex: number;
  setMonthIndex: (index: number) => void;
  smallCalendarMonth: any;
  setSmallCalendarMonth: (index: any) => void;
  daySelected: any;
  setDaySelected: (day: any) => void;
  showEventModal: boolean;
  setShowEventModal: (status: any) => void;
  dispatchCalEvent: ({ type, payload }: any) => void;
  savedEvents: any;
  selectedEvent: any;
  setSelectedEvent: (event: any) => void;
}

const GlobalContext = React.createContext<GlobalContextInterface>({
  monthIndex: 0,
  setMonthIndex: () => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: () => {},
  daySelected: null,
  setDaySelected: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: () => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
});

export default GlobalContext;
