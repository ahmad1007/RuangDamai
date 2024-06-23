import React, { useState } from "react";
import { dokterData } from "../../data/dokterData";
import { useNavigate } from 'react-router-dom';

const CardListDokter = ({ limit }) => {
  const navigate = useNavigate();
  const [selectedDokter, setSelectedDokter] = useState(null);

  const handleChatClick = (id) => {
    const selected = dokterData.find(dokter => dokter.id === id);
    setSelectedDokter(selected);
  };

  const handleChatPopup = (url) => {
    const newTab = window.open(url, '_blank');
    if (newTab) {
      newTab.focus();
    } else {
      // Handle the case where newTab is null
      console.error('Failed to open new tab');
    }
  };

  const handleClosePopup = () => {
    setSelectedDokter(null);
  };

  return (
    <div className="w-full grid grid-flow-row grid-cols-2 gap-5">
      {dokterData.slice(0, limit).map((data, index) => {
        return (
          <div
            className="relative w-full h-[200px] flex flex-row rounded overflow-hidden cursor-pointer pr-20"
            key={index}
          >
            <div className="w-1/2">
              <img className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-black" src={data.image} alt="Placeholder" />
            </div>
            <div className="w-full px-1 py-1 rounded-tr-3xl top-1/2 pl-8 pt-1">
              <div className="font-bold text-black text-xl">{data.nama}</div>
              <p className="text-base pt-1 flex flex-row w-full">
                <p className="w-full text-start">Umur : {data.umur}</p>
                <p className="w-full text-end">Rate : {data.rate}</p>
              </p>
              <div className="absolute bottom-0 left-1/3">
                  <p className="text-xl font-bold">Rp. {data.price.toLocaleString('id-ID')}</p>
              </div>
              <div className="absolute bottom-0 right-20">
                <button className="bg-[#0081C6] text-white h-10 w-20 rounded-xl flex items-center justify-center" onClick={() => handleChatClick(data.id)}>
                    Chat
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {selectedDokter && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg w-1/4">
            <div className="w-full flex justify-center">
              <img className="w-60 h-auto object-cover rounded-lg shadow-lg border-2 border-black" src={selectedDokter.image} alt="Placeholder" />
            </div>
            <div className="font-bold text-black text-xl">{selectedDokter.nama}</div>
              <p className="text-base pt-1 flex flex-row w-2/4">
                <p className="w-full text-xs text-start">Umur : {selectedDokter.umur}</p>
                <p className="w-full text-xs text-end">Rate : {selectedDokter.rate}</p>
              </p>
            <p className="font-bold text-xl mt-5">Rp. {selectedDokter.price.toLocaleString('id-ID')}</p>
            <p className="font-bold text-xl mt-5">Alumnus</p>
            <p className="w-full text-xs text-start">{selectedDokter.alumnus}</p>
            <p className="font-bold text-xl mt-5">Praktik</p>
            <p className="w-full text-xs text-start">{selectedDokter.praktik}</p>
            <div className="pt-1 flex flex-row justify-between w-full">
              <button className="bg-white border-2 border-[#0081C6] h-10 w-20 rounded-xl mt-5" onClick={handleClosePopup}>
                Close
              </button>
              <button className="bg-[#0081C6] text-white h-10 w-20 rounded-xl mt-5" onClick={(url) =>handleChatPopup(selectedDokter.url)}>
                Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardListDokter;