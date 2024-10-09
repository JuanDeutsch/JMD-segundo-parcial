export const actions = {
    SET_MEALS: "SET_MEALS",
    SET_MEAL: "SET_MEAL",
    SET_LOADING: "SET_LOADING",
    SET_ERROR: "SET_ERROR",
  };
  
  export const initialState = {
    meals: [],
    allmeals: [],
    meal: null,
    loading: false,
    error: null
  };
  
  export const foodReducer = (state, action) => {
    switch (action.type) {
      case actions.SET_MEALS:
        return {
          ...state,
          meals: action.payload,
          allmeals: action.payload,
        };
      case actions.SET_MEAL:
        return { ...state, meal: action.payload };
      case actions.SET_LOADING:
        return { ...state, loading: action.payload };
      case actions.SET_ERROR:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };