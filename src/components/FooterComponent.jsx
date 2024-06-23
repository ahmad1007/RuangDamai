import React from "react";
import { FaFacebook, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#D2F5FF] text-black p-10 mt-20">
        <div className=" mx-auto">
          <div className=" border-t border-red pt-5 grid grid-cols-1 md:grid-cols-3 gap-40 ">
            <div className="flex flex-col items-center md:items-center w-80">
              <div className="flex items-center mb-4 w-60">
                <img
                  src="../images/logo.png"
                  alt="Logo"
                  className="w-full p-5 bg-white border-2 border-[#0081C6] mr-2 rounded-full"
                />
              </div>
            </div>

            <div className="text-center md:text-left mt-10">
              <h4 className="text-lg font-bold mb-2">Apa saja isinya?</h4>
              <ol className="list-disc ml-4">
                <li>
                  <a href="/" className="hover:underline">
                    Artikel Kesehatan Mental
                  </a>
                </li>
                <li>
                  <a href="/donasiku" className="hover:underline">
                    Video - video
                  </a>
                </li>
                <li>
                  <a href="/tentang" className="hover:underline">
                    Konseling
                  </a>
                </li>
                <li>
                  <a href="/berita" className="hover:underline">
                    Chat Bot
                  </a>
                </li>
              </ol>
            </div>
            <div className="text-center md:text-left mt-10">
              <h4 className="text-lg font-bold mb-2">Kontak</h4>
              <p className="mb-2">
                <i className="fa fa-whatsapp mr-2"></i>+62832737237278
              </p>
              <p>
                <i className="fa fa-envelope mr-2"></i>RuangDamai@gmail.com
              </p>
              <p className="mt-5">
                <i className="fa fa-envelope mr-2"></i>Media Sosial Ruang Damai
              </p>
              <div className="flex justify-start md:justify-start space-x-4 text-xl pl-2 pt-2">
                <a href="#" className="hover:text-gray-300">
                  <FaFacebook />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaTiktok />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="flex w-full h-20 bg-[#0081C6] justify-center items-center">
        <p className="text-center text-white">
          Copyright © RuangDamai. 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
