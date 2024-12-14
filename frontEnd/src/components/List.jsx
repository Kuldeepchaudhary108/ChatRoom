import React, { useState } from "react";

export default function List() {
  const users = [
    {
      name: "Sandra Clark",
      message: "Check this out!",
      time: "2h ago",
      Dp: "/elements/jack.png",
    },
    {
      name: "John Smith",
      message: "Looks good",
      time: "5h ago",
      Dp: "/elements/jack.png",
    },
    {
      name: "Karen Wilson",
      message: "See you at 5!",
      time: "7h ago",
      Dp: "/elements/jack.png",
    },
  ];
  const [addMore, setAddMore] = useState(false);
  return (
    <>
      <div className="flex mt-2 items-center justify-between  ml-2">
        <h2 className="text-xl font-bold mb-4">Chats</h2>
        <div className="flex space-x-3">
          <img className="w-5 cursor-pointer" src="/elements/more.png" alt="" />
          <img
            className="w-5 cursor-pointer"
            src="/elements/video.png"
            alt=""
          />
          <img className="w-5 cursor-pointer" src="/elements/edit.png" alt="" />
        </div>
      </div>
      <div className="flex h-5 justify-between items-center m-2">
        <div className=" flex bg-gray-800 items-center gap-5 rounded-lg p-1 w-72">
          <img className="h-6" src="/elements/search.png" alt="" />
          <input
            className="h-5 bg-transparent border-none outline-none text-white"
            type="text"
            placeholder="search"
          />
        </div>
        <div className="bg-gray-800 rounded-lg p-2 cursor-pointer">
          <img
            className="w-4"
            src={!addMore ? "/elements/plus.png" : "/elements/minus.png"}
            alt=""
            onClick={() => setAddMore((prev) => !prev)}
          />
        </div>
      </div>
      <div className="bg-gray-800 text-white mt-4    p-4">
        <ul>
          {users.map((user, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md"
            >
              <div className="w-10 h-10 bg-gray-600 rounded-full">
                <img className="rounded-full" src={user.Dp} alt="" />
              </div>
              <div>
                <h4 className="font-semibold">{user.name}</h4>
                <p className="text-sm text-gray-400">{user.message}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
