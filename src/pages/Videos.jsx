import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/FooterComponent'
import ScrollToTop from '../components/scrollTop'
import { FaSearch } from 'react-icons/fa';
import CardArtikelVertikal from "../components/Cards/CardArtikelVertikal";
import CardListVideo from "../components/Cards/CardListVideo";

const Videos = () => {
  const [lokasi, setLokasi] = useState("");
  const [kategori, setKategori] = useState("");

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="w-full h-[200px] justify-center items-center" id="top">
          <div className="flex flex-row gap-5 p-40">
              <div className="w-full flex-1">
                  <input type="text" placeholder="Cari video yang ingin anda cari" className="w-full input input-md bg-white border-none shadow-md" />
              </div>
              <button className="bg-[#0081C6] text-white h-15 w-40 rounded-xl flex items-center justify-center">
                  <FaSearch className="mr-2" /> Cari
              </button>
          </div>
      </div>
      <div className="w-full px-40 pt-10">
      <div className="w-full flex justify-center">
        <div className="flex flex-col w-full py-10">
          <div className="w-full flex flex-col">
            <p className="font-bold text-3xl"><span className="text-[#0081C6]"></span><span>Video</span></p>
          </div>
          <div className="w-full mt-10">
            <CardListVideo limit={5}/>
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
  )
}

export default Videos;