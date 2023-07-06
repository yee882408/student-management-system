"use client";
import List from "./List";
import Time from "./Time";
import Search from "./Search";

const Left = () => {
  return (
    <div className="w-56 flex flex-col items-center h-screen border-r-2 border-black pr-1 print:hidden">
      <div className="p-2">
        <h1 className="text-xl">
          學生管理
          <br />
          資訊系統
        </h1>
      </div>
      <Time />
      <List />
      <Search />
    </div>
  );
};

export default Left;
