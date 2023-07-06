import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ScoreItem from "./ScoreItem";
import { SearchContext } from "./SearchContext";
const Score = ({ id }) => {
  const { scores, setScores } = useContext(SearchContext);
  async function handleAdd() {
    await axios
      .post("/api/scores", {
        studentId: id,
        year: "",
        semester: "",
        chinese: "",
        math: "",
        english: "",
      })
      .then((res) => {
        axios.get(`/api/scores?studentId=${id}`).then((res) => {
          setScores(res.data);
        });
      });
  }

  useEffect(() => {
    if (id) {
      axios.get(`/api/scores?studentId=${id}`).then((res) => {
        setScores(res.data);
      });
    }
  }, [id]);

  return (
    <div className="overflow-y-auto shadow border-2 border-black ml-1 w-full flex-grow scroll-smooth h-[20vh]">
      <table className="w-full">
        <thead>
          <tr className="flex h-6 bg-white">
            <th className="w-6 text-sm border "></th>
            <th className="w-16 text-sm border ">學年</th>
            <th className="w-16 text-sm border ">學期</th>
            <th className="w-16 text-sm border ">國文成績</th>
            <th className="w-16 text-sm border ">數學成績</th>
            <th className="w-16 text-sm border ">英文成績</th>
          </tr>
        </thead>
        {scores?.map((score) => (
          <ScoreItem score={score} key={score._id} studentId={id} />
        ))}
      </table>
      <button
        onClick={handleAdd}
        className="w-6  bg-black shadow-lg rounded-sm text-white print:hidden"
      >
        +
      </button>
    </div>
  );
};

export default Score;
