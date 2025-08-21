import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  name: string;
  role: string; // sekarang jadi review/testimoni
};

const SliderCard = ({ name, role }: Props) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center space-x-10">
      <div className="h-full w-20"></div>
      <div className="mt-6 mb-7">
        {/* Rating */}
        <div className="flex items-center">
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
        </div>

        {/* Review dari pelajar */}
        <p className="mt-6 text-gray-800 w-[80%] text-xs md:text-sm lg:text-base italic">
          {role}
        </p>

        {/* Nama pelajar */}
        <div className="mt-7">
          <h1 className="text-xl text-black font-semibold">{name}</h1>
          <p className="text-sm md:text-base text-gray-600">Pelajar</p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
