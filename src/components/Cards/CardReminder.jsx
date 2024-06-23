import React from "react";
import { reminderData } from "../../data/reminderData";

const CardReminder = ({ limit }) => {
  return (
    <>
      {reminderData.slice(0, limit).map((data, index) => {
        return (
          <div
            className=" w-full sm:w-[345px] h-[200px] overflow-hidden cursor-pointer  bg-white"
            key={index}
          >
            <img
              className="h-[60px] w-auto mx-auto"
              src={data.image}
              alt="Placeholder"
            />
            <div className=" bg-white rounded-tr-3xl text-center ">
              <div className="font-bold text-xl mt-3">{data.title}</div>
              <p className="text-gray-700 text-base pt-1">{data.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardReminder;
