import React, { useState, useEffect } from "react";

const Cards = ({ title, description, cardClassName }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(description, 10);
    if (start === end) return;

    let incrementTime = Math.abs(Math.floor(3000 / end)); 

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [description]);

  return (
    <div className={`shadow-md bg-GreenLight rounded-xl p-6 max-w-md w-full sm:w-[324px] h-36 text-center ${cardClassName}`}>
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <p className="text-3xl font-bold">{count}</p>
    </div>
  );
};

export default Cards;
