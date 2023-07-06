import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaSdCard } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { SearchContext } from "./SearchContext";

const ScoreItem = ({ score, studentId }) => {
  const { setScores } = useContext(SearchContext);
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [chinese, setChinese] = useState("");
  const [math, setMath] = useState("");
  const [english, setEnglish] = useState("");

  async function handleUpdate(scoreId) {
    await axios.patch("/api/scores", {
      scoreId,
      studentId: score.studentId,
      year,
      semester,
      chinese,
      math,
      english,
    });
  }

  async function handleDelete(scoreId) {
    const deleteSingleScore = scoreId;
    await axios.delete(`/api/scores?delete=${deleteSingleScore}`);
    await axios.get(`/api/scores?studentId=${studentId}`).then((res) => {
      setScores(res.data);
    });
  }

  useEffect(() => {
    if (score) {
      setYear(score.year);
      setSemester(score.semester);
      setChinese(score.chinese);
      setMath(score.math);
      setEnglish(score.english);
    }
  }, []);

  return (
    <tbody key={score._id}>
      <tr className="flex h-6">
        <td className="w-6 flex border"></td>
        <td className="w-16 flex border">
          <input
            type="text"
            value={year}
            className="w-full focus:outline-none focus:border focus:border-gray-300 bg-transparent transition-colors text-sm"
            onChange={(e) => setYear(e.target.value)}
          />
        </td>
        <td className="w-16 flex border">
          <input
            type="text"
            value={semester}
            className="w-full focus:outline-none focus:border focus:border-gray-300 bg-transparent transition-colors text-sm"
            onChange={(e) => setSemester(e.target.value)}
          />
        </td>
        <td className="w-16 flex border">
          <input
            type="text"
            value={chinese}
            className="w-full focus:outline-none focus:border focus:border-gray-300 bg-transparent transition-colors text-sm"
            onChange={(e) => setChinese(e.target.value)}
          />
        </td>
        <td className="w-16 flex border">
          <input
            type="text"
            value={math}
            className="w-full focus:outline-none focus:border focus:border-gray-300 bg-transparent transition-colors text-sm"
            onChange={(e) => setMath(e.target.value)}
          />
        </td>
        <td className="w-16 flex border">
          <input
            type="text"
            value={english}
            className="w-full focus:outline-none focus:border focus:border-gray-300 bg-transparent transition-colors text-sm"
            onChange={(e) => setEnglish(e.target.value)}
          />
        </td>
        <td className="print:hidden mr-2">
          <button onClick={() => handleUpdate(score._id)} className="w-2 h-2">
            <FaSdCard />
          </button>
        </td>
        <td className="print:hidden">
          <button onClick={() => handleDelete(score._id)} className="w-2 h-2">
            <AiFillDelete />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ScoreItem;
