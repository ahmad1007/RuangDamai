import React, { useState, useEffect } from "react";
import { WebinerData } from "../../data/WebinerData";
import { useNavigate } from "react-router-dom";

const CardListWebiner = ({ limit }) => {
  const navigate = useNavigate();
  const [selectedWebiner, setSelectedWebiner] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    // Menambah event listener ketika komponen dimount
    document.addEventListener("mousedown", handleClickOutside);

    // Membersihkan event listener saat komponen dilepas
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      // Menutup modal hanya jika pengguna mengklik di luar area modal
      setSelectedWebiner(null);
    }
  };

  const modalRef = React.useRef();

  const handleWebinerClick = (id) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      setAlertMessage(
        "Anda harus login terlebih dahulu untuk melihat detail webinar."
      );
      setShowAlert(true);
    } else {
      // Jika sudah terautentikasi, tampilkan detail webiner
      const selected = WebinerData.find((webiner) => webiner.id === id);
      setSelectedWebiner(selected);
    }
  };

  const handleChatPopup = (url) => {
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      console.error("Gagal membuka tab baru");
    }
  };

  const handleClosePopup = () => {
    setSelectedWebiner(null);
  };

  return (
    <div style={{ marginTop: "20px" }} className="grid grid-cols-2 gap-10">
      {WebinerData.slice(0, limit).map((webiner, index) => (
        <div
          className="relative cursor-pointer overflow-hidden"
          key={index}
          onClick={() => handleWebinerClick(webiner.id)}
        >
          <div
            style={{
              borderRadius: "5px",
              boxShadow: "10px 10px 10px rgba(1, 1, 1, 0.1)",
            }}
            className="border-2 border-black bg-gray-300 w-2/3 shadow-lg"
          >
            <img
              src={webiner.image}
              alt="Gambar Mini Webiner"
              style={{ borderRadius: "5px" }}
              className="w-full h-full object-cover border-r-2"
            />
            <h4 style={{ color: "black" }} className="p-4">
              {webiner.nama}
            </h4>
          </div>
        </div>
      ))}

      {/* Modal Detail Webiner */}
      {selectedWebiner && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-5 rounded-lg max-w-xl max-h-full overflow-y-auto"
            style={{
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="flex justify-center font-bold text-black text-xl mt-4">
              {selectedWebiner.nama}
            </div>
            <div className="flex justify-center">
              <img
                className="w-60 h-auto object-cover rounded-lg shadow-lg border-2 border-black"
                src={selectedWebiner.image}
                alt="Placeholder"
              />
            </div>

            <div className="text-base pt-4 px-4">
              <p className="mt-4"> {selectedWebiner.judul}</p>
              <p className="mt-4"> {selectedWebiner.deskripsi}</p>
              <p
                className="mt-4"
                style={{ width: "140px", whiteSpace: "nowrap" }}
              >
                {selectedWebiner.jadwal}
              </p>
              <p className="mt-4"> {selectedWebiner.via}</p>

              <p className="mt-4">
                Follow Instagram
                <a href="" className="block mt-1">
                  @ruang.damai
                </a>
              </p>

              <p className="mt-4">
                Website Ruang Damai
                <a href="" className="block mt-1">
                  www.ruangdamai.id
                </a>
              </p>

              <p className="mt-4">
                Subscribe YouTube Channel
                <a href="" className="block mt-1">
                  https://www.youtube.com/@ruangdamai
                </a>
              </p>

              <p className="mt-8">
                #RuangDamai <br />
                #WebinarRuangDamai <br />
                #MentalHealth #seminargratis #webinargratis
              </p>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                className="bg-[#0ff] text-white px-4 py-2 rounded-lg"
                onClick={() => handleChatPopup(selectedWebiner.url)}
              >
                REGISTRASI
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alert Message */}
      {showAlert && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-center">{alertMessage}</p>
            <button
              className="mt-4 bg-[#0ff] text-white px-4 py-2 rounded-lg"
              onClick={() => setShowAlert(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardListWebiner;
