import React from "react";
import { artikelData } from "../../data/artikelData";
import { useNavigate } from "react-router-dom";

const CardArtikelVertikal = ({ limit }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate("/article/" + id);
  };

  return (
    <div className="flex flex-row gap-2 mt-20 w-full py-10">
      <div className="w-2/3 h-[500px] flex flex-col gap-2 justify-start">
        <p className="font-bold text-3xl">
          <span className="text-[#0081C6]">Artikel</span>{" "}
          <span>Terpopuler</span>
        </p>
        <img
          src={artikelData[0].image}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="w-[600px] h-[490px] mt-11 overflow-y-auto overflow-x-hidden">
        <div
          className="w-full h-full flex pb-20 gap-4 m-6"
          style={{ scrollbarWidth: "thin", scrollbarColor: "auto" }}
        >
          <div className="flex flex-col h-[70em] gap-3">
            {artikelData.slice(0, limit).map((data, index) => {
              return (
                <div
                  className="relative w-[500px] h-[200px] rounded overflow-hidden cursor-pointer mx-2 flex flex-row"
                  key={index}
                  onClick={() => handleCardClick(data.id)}
                >
                  <img
                    className="w-1/3 h-full object-cover rounded-lg shadow-lg"
                    src={data.image}
                    alt="Placeholder"
                  />
                  <div className="w-2/3 px-1 py-1 rounded-tr-3xl top-1/2">
                    {data.title}
                    {data.content.split(" ").slice(0, 20).join(" ")}
                    <p className="font-bold text-base pt-1 mr-20 pr-10"></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArtikelVertikal;
