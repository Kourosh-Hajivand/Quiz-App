import React from "react";

type Props = {
  id: number;
  SelectCategory: (id: number) => void;
};
const CategoryCard: React.FC<Props> = ({ id, SelectCategory }) => {
  const imageMapping: { [key: number]: string } = {
    21: "/basketball.png",
    22: "/map copy.png",
    19: "/calculator.png",
    23: "/calendar.png",
    9: "/general.png",
    30: "/Gadgets.png",
  };
  const NameMapping: { [key: number]: string } = {
    21: "Sport",
    22: "Geography",
    19: "Mathematics",
    23: "History",
    9: "General Knowledge",
    30: "Gadgets",
  };
  return (
    <div
      onClick={() => SelectCategory(id)}
      className="bg-white dark:bg-CMDARK shadow-lg hover:shadow-xl dark:shadow-none px-4 py-6 rounded-2xl group mt-5 select-none duration-150 cursor-pointer"
    >
      <div className="w-[80%] h-[150px] relative ">
        <img
          src={imageMapping[id]}
          className="w-full h-full object-contain absolute -top-12 left-0 group-hover:-top-8 duration-150 z-10  "
        />
        <div className="w-[50%] h-[10px] bg-CMDARK/40 group-hover:bg-CMDARK duration-150  blur-lg absolute bottom-5 rounded-full left-1/2 transform -translate-x-1/2"></div>
      </div>
      <h5 className="text-xl font-semibold text-CMDARK dark:text-white">
        {NameMapping[id]}
      </h5>
    </div>
  );
};

export default CategoryCard;
