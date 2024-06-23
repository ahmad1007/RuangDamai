import React from "react";
import { useParams } from "react-router-dom";
import { videoData } from "../data/videoData";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterComponent";
import ScrollToTop from "../components/scrollTop";
import { FaUser, FaCalendar } from "react-icons/fa";

const FullVideo = () => {
  const { id } = useParams();
  const video = videoData.find((video) => video.id === parseInt(id));

  if (!video) {
    return <div>Video Tidak Ditemukan</div>;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className=" mx-auto px-7">
        <div className="flex justify-center h-[500px] mt-20">
          {/* <img src={video.image} alt="Article" className="object-cover w-full h-[500px] rounded-2xl" /> */}
          <iframe
            width="100%"
            height="100%"
            src={video.url_video}
            title="YouTube video player"
            frameBorder="0"
            className="rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-start">
          <h1 className="mt-10 font-bold text-3xl">{video.title}</h1>
          <div className="flex justify-center pb-5 gap-4 m-6"></div>
        </div>
        <div className="mb-10">
          {/* {video.content.map((paragraph, index) => ( */}
          {/* <div key={index}> */}
          <p className="mb-4 text-justify indent-12">{video.content}</p>
          {/* </div> */}
          {/* ))} */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FullVideo;
