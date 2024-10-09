import { useEffect, useCallback } from "react";
import { useDispatchFood } from "../context/foodCtx";
import { actions } from "../context/foodReducer";
import { useFiltersContext } from "../context/filtersCtx";
import { FetchMealByFirstLetter, SearchMealByName } from "../services/mealtService";

const useFoods = () => {
  const dispatch = useDispatchFood();
  const { filters } = useFiltersContext();

  const fetchFoods = useCallback(async () => {
    dispatch({ type: actions.SET_LOADING, payload: true });
    try {
      let foods;
      if (filters.search) {
        foods = await SearchMealByName(filters.search);
      } else {
        foods = await FetchMealByFirstLetter(filters.letter || "b");
      }

      if (foods.meals) {
        dispatch({ type: actions.SET_MEALS, payload: foods.meals });
      } else {
        dispatch({ type: actions.SET_MEALS, payload: [] });
      } console.log("foods", foods);
    } catch (error) {
      console.error("Error fetching meals:", error);
      dispatch({ type: actions.SET_MEALS, payload: [] });
    } finally {
      dispatch({ type: actions.SET_LOADING, payload: false });
    }
  }, [dispatch, filters.search, filters.letter]);

  useEffect(() => {
      fetchFoods();
  }, [fetchFoods]);

};

export default useFoods;
