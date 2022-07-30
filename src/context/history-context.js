import { createContext, useContext, useReducer } from "react";
import { historyReducer } from "../reducer/reducer-history";

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(historyReducer, {
    history: [],
  });

  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);
