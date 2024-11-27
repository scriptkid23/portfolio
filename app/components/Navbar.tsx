import React from "react";

export default function Navbar() {
  return (
    <nav className="flex-none h-auto relative w-full">
      <div className="h-[72px] border-b-[0.1px] border-gray-900 flex justify-between items-center">
        <div></div>
        <div className="flex uppercase text-[14px] gap-[32px] pr-[40px]">
          <p>linkedin</p>
          <p>Read.cv</p>
          <p>E-mail</p>
        </div>
      </div>
    </nav>
  );
}
