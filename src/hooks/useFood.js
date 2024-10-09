import { useEffect, useCallback } from "react";
import { useDispatchFood} from "../context/foodCtx";
import { actions } from "../context/foodReducer";
import { useFiltersContext } from "../context/filtersCtx";
import { FetchMealByFirstLetter, SearchMealByName } from "../services/mealtService";

const fetchDataByFilters = async (filters) => {
  if (filters.search) {
      const meals = await SearchMealByName(filters.search);
      return meals || [];
  } else {
      const mealsByLetter = await FetchMealByFirstLetter(filters.letter || 'b');
      return mealsByLetter || [];
  }
};

const useFoods = () => {
  const dispatch = useDispatchFood();
  const { filters } = useFiltersContext();

  const applyMealsData = useCallback(async () => {
      dispatch({ type: actions.SET_LOADING, payload: true });

      try {
          const meals = await fetchDataByFilters(filters);
          
          dispatch({
              type: actions.SET_MEALS,
              payload: meals.length > 0 ? meals : []
          });
      } catch (error) {
          console.error("Error fetching meals:", error);
          dispatch({ type: actions.SET_MEALS, payload: [] });
      } finally {
          dispatch({ type: actions.SET_LOADING, payload: false });
      }
  }, [dispatch, filters]);

  useEffect(() => {
      applyMealsData();
  }, [applyMealsData]);
};

export default useFoods;
