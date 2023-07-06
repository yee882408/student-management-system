"use client";
import { useContext } from "react";
import { SearchContext } from "./SearchContext";
const Search = () => {
  const { setSearchInput, searchInput } = useContext(SearchContext);

  return (
    <div className="flex p-2">
      <label className="text-sm">查詢：</label>
      <input
        type="text"
        value={searchInput}
        placeholder="學號或姓名"
        onChange={(e) => setSearchInput(e.target.value)}
        className="border border-gray-500 rounded-md focus:outline-none focus:border focus:border-gray-300 bg-transparent transition-colors text-sm w-32"
      />
    </div>
  );
};

export default Search;
