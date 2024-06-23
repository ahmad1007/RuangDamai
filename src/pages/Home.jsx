import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards/Cards";
import Footer from "../components/FooterComponent";
import CardArtikel from "../components/Cards/CardArtikel";
import CardReminder from "../components/Cards/CardReminder";
import CardHidupSehat from "../components/Cards/CardHidupSehat";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-white">
        <div className="relative h-[700px]">
          <div className="bg-[#D2F5FF] w-full h-[400px] md:h-[550px] pt-40 pl-40">
            <h1 className="text-2xl md:text-3xl text-gray-800 font-bold hover:text-black hover:cursor-pointer">
              Ruang Damai
            </h1>
            <p className="text-xl md:text-xl text-gray-800 hover:text-black hover:cursor-pointer">
              {'"'}Temukan Ketenangan, Temukan Kesehatan Mental: Langkah{" "}
              <p>Pertama Menuju Kesejahteraan Emosional.{'"'}</p>
            </p>
          </div>
          {/* <CaraouseComponent /> */}
          <div className="absolute w-full top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 z-10 mt-12 sm:mt-16 md:mt-48 lg:mt-52">
            <div className="flex gap-4 overflow-x-auto md:justify-center items-end cursor-pointer">
              <img
                src="/images/top-3.jpeg"
                className="h-[200px] w-auto border-2 border-gray-300 drop-shadow-xl rounded-xl"
              />
              <img
                src="/images/top-2.jpeg"
                className="h-[200px] w-auto border-2 border-gray-300 drop-shadow-xl rounded-xl"
              />
              <img
                src="/images/top-1.jpeg"
                className="h-[350px] w-auto border-2 border-gray-300 drop-shadow-xl rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className=" w-full px-4 sm:px-6 lg:px-8 md:mt-24 ">
          <div className="flex justify-center items-center">
            <h2 className="my-4 text-2xl md:text-3xl text-gray-800 font-bold hover:text-black hover:cursor-pointer">
              Little Reminder
            </h2>
          </div>
          <div className="flex mt-6  sm:grid-cols-2 md:grid-cols-4 gap-6 ">
            <CardReminder limit={4} />
          </div>

          <div className="w-full flex justify-center">
            <div className="flex flex-row gap-60 mt-20 w-full p-20">
              <div className="w-full flex flex-row gap-3 justify-end">
                <div className="flex flex-col gap-3">
                  <img
                    src="/images/curhat-1.jpg"
                    className="w-60 h-80 rounded-xl"
                    alt=""
                  />
                  <img
                    src="/images/curhat-3.jpg"
                    className="w-60 h-60 rounded-xl"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <img
                    src="/images/curhat-2.jpg"
                    className="w-60 h-60 object-cover rounded-xl"
                    alt=""
                  />
                  <img
                    src="/images/curhat-4.jpg"
                    className="w-60 h-80 rounded-xl"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full pt-20">
                <h2 className="text-[#0081C6] font-bold text-4xl">Chat</h2>
                <h2 className="text-black font-bold text-4xl">Tempat Curhat</h2>
                <p className="pt-10">
                  {'"'}Ruang Damai adalah tempat curhat yang andal, aman, dan
                  terpercaya bagi siapa pun yang butuh dukungan.{'"'}
                </p>
                <a href="/yumi" target="_blank">
                  <button className="bg-[#0081C6] text-white h-10 w-40 rounded-lg mt-10">
                    YUMI
                  </button>
                </a>

                <div className="w-full flex flex-row grid-cols-4 mt-20 gap-10">
                  <img
                    src="/images/chat-1.png"
                    className="w-20 h-auto"
                    alt=""
                  />
                  <img
                    src="/images/chat-2.png"
                    className="w-20 h-auto"
                    alt=""
                  />
                  <img
                    src="/images/chat-3.png"
                    className="w-20 h-auto"
                    alt=""
                  />
                  <img
                    src="/images/chat-4.png"
                    className="w-20 h-auto"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div
              className="flex flex-row gap-2 mt-20 w-full px-40 py-10"
              style={{ WebkitOverflowScrolling: "touch", overflowX: "hidden" }}
            >
              <div className="w-1/3 flex flex-col gap-2 justify-start">
                <p className="font-bold text-3xl">
                  <span className="text-[#0081C6]">Artikel</span>{" "}
                  <span>Terkini</span>
                </p>
                <p>
                  Tentunya! Mari kita lihat artikel terbaru yang menarik
                  bersama-sama. Siap untuk mendapatkan wawasan baru? Ayo kita
                  mulai!
                </p>
                <a href="/artikel" target="_blank">
                  <button className="bg-[#0081C6] text-white h-10 w-40 rounded-xl mt-20">
                    Selengkapnya
                  </button>
                </a>
              </div>
              <div className="w-2/3" style={{ touchAction: "pan-y" }}>
                <div
                  className="w-full flex pb-20 gap-4 m-6 overflow-clip overflow-x-auto"
                  style={{ scrollbarWidth: "thin", scrollbarColor: "auto" }}
                >
                  <CardArtikel limit={5} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-20">
            <h2 className="my-4 text-2xl md:text-3xl text-gray-800 font-bold hover:text-black hover:cursor-pointer text-center">
              <p>Pola Hidup Sehat</p>
              <p className="font-normal font-sans text-xl">
                Menjaga kesehatan mental dengan melakukan pola hidup sehat
              </p>
            </h2>
          </div>
          <div className="flex justify-center items-center mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
            <CardHidupSehat limit={4} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
