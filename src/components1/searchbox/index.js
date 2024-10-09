import React from "react";

import "./index.css";

import SearchInput from "./searchInput";

const SearchBox = ({ onSearch }) => {
  return (
    <div className="search-box">
      <SearchInput onChange={onSearch} />
    </div>
  );
};

export default SearchBox;