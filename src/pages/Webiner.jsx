import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterComponent";
import ScrollToTop from "../components/scrollTop";
import CardWebiner from "../components/Cards/CardWebiner";

const Konseling = () => {
  const [lokasi, setLokasi] = useState("");
  const [kategori, setKategori] = useState("");

  const handleGoToHome = () => {
    history.push("/");
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <div className="w-100px px-40 pt-10 ">
        <div className="w-full flex justify-center">
          <div className="flex flex-col w-full py-10">
            <div className="w-full flex flex-col">
              <p className="font-bold text-3xl">
                <span className="text-[#0081C6]"></span>
                <span>Daftar Psikolog</span>
              </p>
            </div>
            <div className="w-full mt-5  ">
              <CardWebiner limit={6} />
            </div>
            <div className="w-full mt-10 text-center flex flex-row gap-3 justify-center">
              <button className="bg-[#0081C6] text-white text-xl h-10 w-10 rounded-md mt-20">
                1
              </button>
              <button className="bg-white border-2 border-gray-600 text-xl h-10 w-10 rounded-md mt-20">
                2
              </button>
              <button className="bg-white border-2 border-gray-600 text-xl h-10 w-10 rounded-md mt-20">
                3
              </button>
              <button className="bg-white border-2 border-gray-600 text-xl h-10 w-60 rounded-md mt-20">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Konseling;
