import React from "react";

import { useFiltersContext } from "../../context/filtersCtx";

const SearchInput = () => {
  const { filters, setFilters } = useFiltersContext();
  return (
    <input onChange={(e) => setFilters({...filters, search: e.target.value})} type="text" placeholder="Busca Recetas"/>
  );
};

export default SearchInput;

//Cualquier caso lo del value