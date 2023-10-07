import React, { ReactNode } from "react";
import Navbar from "../Navbar";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full min-h-screen px-6">
      <div className="w-full max-w-[1080px] mx-auto text-white relative">
        <Navbar />
        <div className="w-full mt-12">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
