export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_CATEGORY":
      return { ...state, byCategory: action.payload };

    case "FILTER_BY_SEARCH":
      return { ...state, bySearch: action.payload };

    case "SORT_BY_DATE":
      return { ...state, bySort: action.payload };
  }
};
