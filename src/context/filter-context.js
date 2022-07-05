import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/reducer-filter";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    bySort: "",
    byCategory: "",
    bySearch: "",
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
