import React from "react";
import { useParams } from "react-router-dom";
import { artikelData } from "../data/artikelData";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterComponent";
import ScrollToTop from "../components/scrollTop";
import { FaUser, FaCalendar } from "react-icons/fa";

const FullArtikel = () => {
  const { id } = useParams();
  const artikel = artikelData.find((artikel) => artikel.id === parseInt(id));

  if (!artikel) {
    return <div>Artikel Tidak Ditemukan</div>;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className=" mx-auto px-7">
        <div className="text-start">
          <h1 className="mt-24 font-bold text-3xl">{artikel.title}</h1>
          <div className="flex justify-start items-center gap-16 mt-2">
            <div className="flex items-center gap-2">
              {/* <FaUser /> */}
              <span>
                {artikel.tanggal} | Ditinjau Oleh {artikel.ditinjau}
              </span>
            </div>
          </div>
          <div className="flex justify-center pb-5 gap-4 m-6"></div>
        </div>
        <div className="flex justify-center">
          <img
            src={artikel.image}
            alt="Article"
            className="object-cover w-full h-[500px] rounded-2xl"
          />
        </div>
        <div className="mb-24 mt-8">
          {/* {artikel.content.map((paragraph, index) => ( */}
          {/* <div key={index}> */}
          <p className="mb-4 text-justify indent-12">{artikel.content}</p>
          {/* </div> */}
          {/* ))} */}
        </div>
        <div className="mb-24">
          <h2 className="font-bold text-xl mt-8 mb-8">Referensi</h2>
          <div className="flex flex-wrap">
            <ul className="list-disc pl-5">
              {artikel.referensi.map((referensi, index) => (
                <li key={index} className="list-disc mb-2">
                  <a href={referensi.link} target="_blank" rel="noreferrer">
                    {referensi.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FullArtikel;
