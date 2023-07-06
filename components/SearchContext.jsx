"use client";
import { createContext, useState } from "react";

export const SearchContext = createContext({});
export function SearchContextProvider({ children }) {
  const [searchInput, setSearchInput] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(false);
  const [selectedId, setSelectedId] = useState(false);
  const [students, setStudents] = useState([]);
  const [scores, setScores] = useState([]);
  return (
    <SearchContext.Provider
      value={{
        searchInput,
        selectedIndex,
        setSearchInput,
        setSelectedIndex,
        selectedId,
        setSelectedId,
        students,
        setStudents,
        scores,
        setScores,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
