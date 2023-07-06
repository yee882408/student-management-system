import React, { useContext, useState } from "react";
import Button from "./Button";
import axios from "axios";
import Modal from "./Modal";
import { SearchContext } from "./SearchContext";

const Features = ({ id, data, image }) => {
  const { setStudents } = useContext(SearchContext);

  const [showModal, setShowModal] = useState(false);
  function handlePrint() {
    window.print();
  }

  async function handleAdd() {
    const responseOne = await axios.post("/api/students");
    const studentId = responseOne.data._id;
    const refresh = "true";
    await axios.post("/api/scores", { studentId: studentId });
    await axios.get(`/api/students?refresh=${refresh}`).then((res) => {
      setStudents(res.data);
    });
  }

  async function handleUpdate() {
    await axios.patch("/api/students", { image, id });
  }

  const handleDelete = () => {
    setShowModal(true);
  };

  async function handleConfirmDelete() {
    await axios.delete(`/api/students?deleteId=${id}`);
    await axios.delete(`/api/scores?deleteId=${id}`);
    const refresh = "true";
    await axios.get(`/api/students?refresh=${refresh}`).then((res) => {
      setStudents(res.data);
    });
    setShowModal(false);
  }

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className="h-[10vh] print:hidden w-full flex items-center justify-center gap-2">
      <Button name="新增" onClick={handleAdd} />
      <Button name="儲存" onClick={handleUpdate} />
      <Button name="刪除" onClick={handleDelete} />
      <Button name="列印" onClick={handlePrint} />
      {showModal && (
        <Modal
          title="刪除確認"
          message="確定要刪除目前整筆學生資料嗎？"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default Features;
