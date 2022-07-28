import { likesReducer } from "../reducer/reducer-like";
const { createContext, useContext, useReducer } = require("react");

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likesState, likesDispatch] = useReducer(likesReducer, {
    likes: [],
  });

  return (
    <LikesContext.Provider value={{ likesState, likesDispatch }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => useContext(LikesContext);
