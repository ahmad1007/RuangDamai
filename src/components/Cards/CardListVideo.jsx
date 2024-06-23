import React from "react";
import { videoData } from "../../data/videoData";
import { useNavigate } from "react-router-dom";

const CardListVideo = ({ limit }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate("/video/" + id);
  };

  return (
    <div className="flex flex-col w-full gap-5">
      {videoData.slice(0, limit).map((data, index) => {
        return (
          <div
            className="relative w-full h-[250px] flex flex-row overflow-hidden cursor-pointer"
            key={index}
            onClick={() => handleCardClick(data.id)}
          >
            <div className="w-100">
              <iframe
                width="250px"
                height="200px"
                src={data.url_video}
                title="YouTube video player"
                frameBorder="0"
                className="rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="px-1 py-1 rounded-tr-3xl top-1/2 pl-10 pr-60">
              <div className="font-bold text-black text-xl">
                {data.title.split(" ").slice(0, 7).join(" ")}...
              </div>
              <p className="text-base pt-1 text-justify">
                {data.content.split(" ").slice(0, 20).join(" ")}...
              </p>
              <div className="absolute left-1/5 bottom-3">
                <a href="#">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardListVideo;
