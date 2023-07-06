"use client";
import { useState } from "react";
import Features from "./Features";
import Score from "./Score";
import { CldUploadWidget } from "next-cloudinary";

const Detail = ({ student }) => {
  const [selectedImage, setSelectedImage] = useState(student.photo || "");

  const onUpload = (e) => {
    setSelectedImage(e.info.secure_url);
  };

  if (student.length === 0) {
    return <div>請點擊左側列表選擇學生</div>;
  }

  return (
    <>
      <div className="grid grid-cols-5 h-[70vh] ">
        <div className="flex flex-col space-y-3 col-span-3 mt-4 ml-4">
          <div className="flex">
            <div className="w-40 text-right">
              <p>學生編號：</p>
            </div>
            <p> {student.sId}</p>
          </div>
          <div className="flex">
            <div className="w-40 text-right">
              <p>學生姓名：</p>
            </div>
            <p> {student.name}</p>
          </div>
          <div className="flex">
            <div className="w-40 text-right">
              <p>身分證號：</p>
            </div>
            <p> {student.idNo}</p>
          </div>
          <div className="flex">
            <div className="flex">
              <div className="w-40 text-right">
                <p>電話一：</p>
              </div>
            </div>
            <p> {student.phoneOne}</p>
          </div>
          <div className="flex">
            <div className="w-40 text-right">
              <p>電話二：</p>
            </div>
            <p> {student.phoneTwo}</p>
          </div>
          <div className="flex">
            <div className="w-40 text-right">
              <p>行動電話：</p>
            </div>
            <p> {student.cellphone}</p>
          </div>
          <div className="flex">
            <div className="w-40 text-right">
              <p>緊急聯絡電話：</p>
            </div>
            <p> {student.emergencyPhone}</p>
            <div className="w-40 text-right ml-10">
              <p>緊急聯絡人：</p>
            </div>
            <p> {student.emergencyPerson}</p>
          </div>
          <div className="flex">
            <div className="w-40 text-right">
              <p>戶籍地址：</p>
            </div>
            <p> {student.regAddress}</p>
          </div>
          <div className="flex">
            <div className="w-40 text-right">
              <p>通訊地址：</p>
            </div>
            <p> {student.corAddress}</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mt-6 flex flex-col items-center">
            <img
              src={selectedImage || student.photo}
              key={student._id}
              alt="avatar"
              className="w-40 h-40 border border-black mb-2"
            />
            <CldUploadWidget uploadPreset="cwmoxwys" onUpload={onUpload}>
              {({ open }) => {
                function handleOnClick(e) {
                  e.preventDefault();
                  open();
                }
                return (
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center print:hidden"
                    onClick={handleOnClick}
                  >
                    編修照片
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
        </div>
      </div>
      <Score id={student._id} />
      <Features id={student._id} data={student} image={selectedImage} />
    </>
  );
};

export default Detail;
