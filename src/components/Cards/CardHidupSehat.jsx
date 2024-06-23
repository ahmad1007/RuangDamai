import React from "react";
import { hidupSehatData } from "../../data/hidupSehatData";

const CardHidupSehat = ({ limit }) => {
  return (
    <>
      {hidupSehatData.slice(0, limit).map((data, index) => {
        return (
          <div key={index} style={{ margin: "5px" }}>
            <div className=" cursor-pointer">
              <img
                className="w-100 h-50 margin-2px rounded-2xl"
                src={data.image}
                alt="Placeholder"
              />
            </div>
            <div className="bg-white top-1/2 text-center">
              <div className="font-bold text-xl mt-3">{data.title}</div>
              {/* <p className="text-gray-700 text-base pt-7">{data.description}</p> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardHidupSehat;
