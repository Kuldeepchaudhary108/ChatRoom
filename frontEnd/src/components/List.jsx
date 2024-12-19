import React, { useState } from "react";
import { apiCLient, LOGOUT_ROUTE } from "../service/api";
import { useAppStore } from "../store/store.js";

import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { setUserInfo, userInfo } = useAppStore();

  const [addMore, setAddMore] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = async () => {
    try {
      const res = await apiCLient.post(LOGOUT_ROUTE);
      if (res.status === 200) {
        console.log("logout Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex mt-2 items-center justify-between ml-2 relative">
        <h2 className="text-xl font-bold mb-4">Chats</h2>
        <div className="flex space-x-3 relative">
          <img
            className="w-5 cursor-pointer"
            src="/elements/more.png"
            alt="more"
            onClick={() => setShowLogout((prev) => !prev)}
          />
          <img
            className="w-5 cursor-pointer"
            src="/elements/video.png"
            alt="video"
          />
          <img
            className="w-5 cursor-pointer"
            src="/elements/edit.png"
            alt="edit"
          />

          {showLogout && (
            <div className="absolute top-8 right-0 bg-gray-700 text-white p-2 rounded-md shadow-md">
              <button
                className="w-full text-left hover:bg-gray-600 px-2 py-1"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex h-5 justify-between items-center m-2">
        <div className="flex bg-gray-800 items-center gap-5 rounded-lg p-1 w-72">
          <img className="h-6" src="/elements/search.png" alt="search" />
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
            alt="toggle"
            onClick={() => setAddMore((prev) => !prev)}
          />
        </div>
      </div>

      <div className="bg-gray-800 text-white mt-4 p-4">
        <ul>
          {users.map((user, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md"
            >
              <div className="w-10 h-10 bg-gray-600 rounded-full">
                <img className="rounded-full" src={user.Dp} alt={user.name} />
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
