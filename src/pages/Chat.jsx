import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ChatContainer from "../components/element/chat/chatContainer";
import ChatBubble from "../components/element/chat/chatBubble";
import ChatInput from "../components/element/chat/chatInput";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Apa yang ingin anda tanyakan?", sender: "doctor" },
    { text: "Lelah batin, Depresi, Cemas?", sender: "doctor" },
    {
      text: "Kenapa lelah batin itu selalu menghantui selalu",
      sender: "patient",
    },
  ]);

  const sendMessage = async (text, sender) => {
    const newMessage = { text, sender };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post(
        "https://flask-docker.1iccbq0tcdeo.us-south.codeengine.appdomain.cloud/chat",
        { message: text }
      );
      const chatbotResponse = response.data.response;
      setMessages([
        ...messages,
        newMessage,
        { text: chatbotResponse, sender: "doctor" },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <Navbar />
      <ChatContainer>
        <div className="w-full flex justify-center mb-20">
          <p className="w-3/5 text-center">
            Bot ini di sini untuk mendengarkan dan membantu. Jangan ragu untuk
            berbagi keluh kesah atau apa pun yang Anda rasakan. Mari kita bahas
            semuanya bersama
          </p>
        </div>
        <div className="overflow-y-auto h-[360px] flex flex-col gap-5">
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              text={message.text}
              sender={message.sender}
            />
          ))}
        </div>
        <ChatInput sendMessage={sendMessage} style="w-full" />
      </ChatContainer>
    </>
  );
};

export default Chat;
