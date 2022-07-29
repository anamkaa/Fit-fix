export const historyReducer = (state, action) => {
  switch (action.type) {
    case "GET_HISTORY":
      return { ...state, history: action.payload };

    default:
      return { ...state };
  }
};
