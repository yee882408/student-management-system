"use client";
import { useContext, useEffect, useState } from "react";
import Detail from "./Detail";

import { SearchContext } from "./SearchContext";
import axios from "axios";

const Right = () => {
  const { selectedId } = useContext(SearchContext);

  const [student, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedId) {
      axios.get(`/api/students?studentId=${selectedId}`).then((res) => {
        setStudents(res.data);
        setIsLoading(false);
      });
    }
  }, [selectedId]);

  return (
    <div className="flex-1 p-2">
      {/* key避免react判定組件沒變化，導致Detail裡的img更新其他學生組件也更新 */}
      <Detail student={student} key={student._id} />
    </div>
  );
};

export default Right;
