import React from "react";

import { useFiltersContext } from "../../context/filtersCtx";

const Paginated = ({ total }) => {
  const { filters, setFilters } = useFiltersContext();
  const { page } = filters;
  const handlePrevius = () => {
    if (page > 0) {
      setFilters({ ...filters, page: page - 1 });
    }
  };

  const handleNext = () => {
    if (page < total) {
      setFilters({ ...filters, page: page + 1 });
    }
  };

  return (
    <div>
      <button onClick={handlePrevius}>Prev</button>
      <span>{page + 1}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Paginated;
