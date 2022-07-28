export const watchlaterReducer = (state, action) => {
  switch (action.type) {
    case "GET_WATCHLATER":
      return { ...state, watchlater: action.payload };

    default:
      return state;
  }
};
