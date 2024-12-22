import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import OverView from "./OverView";
// import ThemeToggleButton from "./ThemeBttn";
export default function Chats() {
  const users = [
    { id: 1, message: "Jack duniya ka papa ", time: "4:15" },
    {
      id: 2,
      message: "Pr bhaiya aap toh Oggy ke bhaiya ho na ,",
      time: "4:16",
    },
  ];
  const [emoji, setEmoji] = useState(false);
  const [text, setText] = useState("");
  const [viewProfile, setViewProfile] = useState(false);

  const handletext = (e) => {
    setText((prev) => prev + e.emoji);
    setEmoji(false);
  };

  return (
    <div className=" text-white   h-full p-2">
      <header className="flex items-center  justify-between mb-4   border-b-[1px]">
        <div className="flex space-x-3 mb-3">
          <div className="w-10 h-10 bg-gray-600 rounded-full">
            <img
              className="rounded-full cursor-pointer"
              src="/elements/jack.png"
              alt=""
              onClick={() => setViewProfile((prev) => !prev)}
            />
          </div>
          <div className="curs" onClick={() => setViewProfile((prev) => !prev)}>
            <h2 className="text-xl font-bold">Maria Nelson</h2>
            <p className="text-sm text-gray-400">
              Grateful for every sunset 🌅
            </p>
          </div>
        </div>
        <div className="flex space-x-5 cursor-pointer">
          <img className="h-5" src="/elements/video.png" alt="" />
          <img className="h-5" src="/elements/phone.png" alt="" />
          <img
            onClick={() => setViewProfile((prev) => !prev)}
            className="h-5"
            src="elements/info.png"
            alt=""
          />
        </div>
      </header>
      <div className="h-[calc(100%-120px)] overflow-y-auto">
        {/* Messages */}
        <div className="mb-4">
          <div className="bg-blue-600 text-white p-3 rounded-md max-w-xs">
            Jack hain duniya ka papa
          </div>
          <div className="text-gray-400 text-sm mb-1">5 hours ago</div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="bg-gray-700 text-white p-3 rounded-md max-w-xs">
            Sounds fun! Let me know.
          </div>
        </div>
      </div>
      <footer className="flex items-center gap-5">
        <div className="flex w-fit gap-2 mr-2 space-x-1 cursor-pointer">
          <img className="w-6" src="/elements/img.png" alt="error" />
          <img className="w-6" src="/elements/camera.png" alt="error" />
          <img className="w-6" src="/elements/mic.png" alt="error" />
        </div>
        <input
          type="text"
          placeholder="Type a message"
          className="w-full p-2 bg-gray-800 text-white rounded-md"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="cursor-pointer relative">
          <img
            onClick={() => setEmoji((prev) => !prev)}
            src="/elements/emoji.png"
            alt=""
          />
          <div className="absolute bottom-12 -left-72 ">
            {emoji && <EmojiPicker onEmojiClick={handletext} />}
          </div>
        </div>
        <button className="p-2 bg-blue-600 rounded-md hover:bg-blue-800">
          Send
        </button>
      </footer>
      {viewProfile && (
        <div className="">
          <div className=" top-0  absolute">
            <OverView />
          </div>
        </div>
      )}
    </div>
  );
}
