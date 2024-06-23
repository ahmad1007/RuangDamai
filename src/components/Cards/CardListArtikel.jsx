import React from "react";
import { artikelData } from "../../data/artikelData";
import { useNavigate } from "react-router-dom";

const CardListArtikel = ({ limit }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate("/artikel/" + id);
  };

  return (
    <div className="flex flex-col w-full gap-5">
      {artikelData.slice(0, limit).map((data, index) => {
        return (
          <div
            className="relative w-full h-[200px] flex flex-row rounded overflow-hidden cursor-pointer"
            key={index}
            onClick={() => handleCardClick(data.id)}
          >
            <div className="w-1/3">
              <img
                className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                src={data.image}
                alt="Placeholder"
              />
            </div>
            <div className="px-1 py-1 rounded-tr-3xl top-1/2 pl-10 pr-60">
              <div className="font-bold text-black text-xl">{data.title}</div>
              <p className="text-base pt-1 text-justify">
                {data.content.split(" ").slice(0, 20).join(" ")}
              </p>
              <a href="#" className="mt-40">
                Baca Selengkapnya
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardListArtikel;
