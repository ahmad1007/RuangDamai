import React from "react";
import { artikelData } from "../../data/artikelData";
import { useNavigate } from "react-router-dom";

const CardArtikel = ({ limit }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate("/artikel/" + id);
  };

  return (
    <div className="flex">
      {artikelData.slice(0, limit).map((data, index) => {
        return (
          <div
            className="relative w-[300px] h-[350px] rounded overflow-hidden cursor-pointer mx-2"
            key={index}
            onClick={() => handleCardClick(data.id)}
          >
            <img
              className="w-full h-56 object-cover rounded-lg shadow-lg"
              src={data.image}
              alt="Placeholder"
            />
            <div className="px-1 py-1 rounded-tr-3xl top-1/2">
              <div className="font-bold text-gray-400 text-xl mt-3">
                {data.kategori}
              </div>
              <p className="font-bold text-base pt-1">{data.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardArtikel;
