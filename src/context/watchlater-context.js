import { watchlaterReducer } from "../reducer/reducer-watchlater";
const { createContext, useContext, useReducer } = require("react");

const WatchlaterContext = createContext();

export const WatchlaterProvider = ({ children }) => {
  const [watchlaterState, watchlaterDispatch] = useReducer(watchlaterReducer, {
    watchlater: [],
  });

  return (
    <WatchlaterContext.Provider value={{ watchlaterState, watchlaterDispatch }}>
      {children}
    </WatchlaterContext.Provider>
  );
};

export const useWatchlater = () => useContext(WatchlaterContext);
