import React from "react";

const ChatBubble = ({ text, sender }) => {
  const bubbleClass = sender === "doctor" ? "bg-white text-black" : "bg-[#0081C6] text-white";
  const alignClass = sender === "doctor" ? "justify-start float-start" : "justify-start float-end";

  return (
    <div className="w-full">
    {sender === "doctor"?
    <div className="w-2/3">
    </div>
    :null}
    <div className={`p-2 rounded-lg w-1/3 ${bubbleClass} ${alignClass} flex`}>
      <p>{text}</p>
    </div>
    </div>
  );
};

export default ChatBubble;