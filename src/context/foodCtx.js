import { createContext, useContext, useReducer } from "react";
import { initialState, foodReducer } from "./foodReducer";

const FoodContext = createContext(null);
const FoodDispatchContext = createContext(null);

export function useFoodContext() {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error("useFoodContext must be used within a FoodProvider");
  }
  return context;
}

export function useDispatchFood() {
  const context = useContext(FoodDispatchContext);
  if (!context) {
    throw new Error("useDispatchFood must be used within a FoodProvider");
  }
  return context;
}

export function FoodProvider({ children }) {
  const [state, dispatch] = useReducer(foodReducer, initialState);

  return (
    <FoodContext.Provider value={state}>
      <FoodDispatchContext.Provider value={dispatch}>
        {children}
      </FoodDispatchContext.Provider>
    </FoodContext.Provider>
  );
}