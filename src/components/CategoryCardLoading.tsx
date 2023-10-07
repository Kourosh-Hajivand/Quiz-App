import React from "react";

function CategoryCardLoading() {
  return (
    <div className="bg-white dark:bg-CMDARK shadow-lg hover:shadow-xl dark:shadow-none px-4 py-6 rounded-2xl group mt-5 select-none duration-150">
      <div className="w-[80%] h-[150px]  rounded-2xl bg-CMDARK/75 dark:bg-white/75 mb-6"></div>
      <div className="w-full h-[20px] rounded-2xl bg-CMDARK/50 dark:bg-white/50"></div>
    </div>
  );
}

export default CategoryCardLoading;
