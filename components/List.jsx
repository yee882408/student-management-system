"use client";
import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import Spinner from "./Spinner";
import { SearchContext } from "./SearchContext";
import { debounce } from "lodash";

const List = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    selectedIndex,
    setSelectedIndex,
    searchInput,
    setSelectedId,
    students,
    setStudents,
  } = useContext(SearchContext);

  const templateCount = 30;
  const templates = Array.from({ length: templateCount });

  function handleClick(e, id, _id) {
    setSelectedIndex(id);
    setSelectedId(_id);
  }
  const debouncedSearch = useCallback(debounce(searchStudents, 1000), []);

  function searchStudents(searchInput) {
    axios.get(`/api/search?search=${searchInput}`).then((res) => {
      setStudents(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    if (searchInput?.length >= 0) {
      debouncedSearch(searchInput);
    }
  }, [searchInput, students]);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className="overflow-y-auto shadow border-2 border-black ml-1 w-full flex-grow scroll-smooth">
          <table className="w-full">
            <thead>
              <tr className="w-full flex bg-white">
                <th className="w-2/12 text-sm border "></th>
                <th className="w-5/12 text-sm border ">學號</th>
                <th className="w-5/12 text-sm border ">姓名</th>
              </tr>
            </thead>
            {students.length > 0 &&
              students.map((student) => (
                <tbody
                  onClick={(e) => {
                    handleClick(e, student.sId, student._id);
                  }}
                  key={student._id}
                >
                  <tr className="flex w-full h-6">
                    <td className="w-2/12 flex border">
                      <span
                        className={
                          selectedIndex === student.sId
                            ? "w-full flex  items-center justify-center"
                            : "hidden"
                        }
                      >
                        &rArr;
                      </span>
                    </td>
                    <td className="w-5/12  text-sm cursor-pointer border">
                      {student.sId}
                    </td>
                    <td
                      className={
                        selectedIndex === student.sId
                          ? "w-5/12 bg-zinc-700 text-zinc-100 text-sm cursor-pointer border"
                          : "w-5/12  text-sm cursor-pointer border"
                      }
                    >
                      {student.name}
                    </td>
                  </tr>
                </tbody>
              ))}
            {templates.map((_, i) => (
              <tbody className="flex w-full h-6" key={i}>
                <tr className="flex w-full h-6">
                  <td className="w-2/12 flex border"></td>
                  <td className="w-5/12 text-sm border"></td>
                  <td className="w-5/12 text-sm border"></td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </>
  );
};

export default List;
