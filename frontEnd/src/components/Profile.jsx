import { Avatar, Input } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "zustand";
import { FaPlus, FaTrash } from "react-icons/fa";
import { colors, GetColor } from "../utils/GetColor";

export default function Profile() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useStore;
  const [color, setColor] = useState(0);
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [hovered, setHovered] = useState(false);
  const saveChange = async () => {};
  return (
    <div className="bg-[#1b1c24] h-[100vh] flex items-center justify-center flex-col gap-10">
      <div className="flex flex-col gap-10 w-[80vw] md:w-max">
        {/* <div className="">{back}</div> */}
        <div className="grid grid-cols-2">
          <div
            className="h-full w-32 md:h-48 relative flex items-center justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Avatar className="h-32 w-32 md:w-48 rounded-full overflow-hidden">
              {image ? (
                <Avatar
                  src={image}
                  alt="profile"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div
                  className={`uppercase h-32 w-32 md:w-48 text-5xl border-[1px] flex items-center justify-center rounded-full ${GetColor(
                    color
                  )} `}
                >
                  {
                    firstName ? firstName.split("").shift() : null
                    // : userInfo.email.split("").shift()
                  }
                </div>
              )}
            </Avatar>
            {hovered && (
              <div className="absolute insert-0 flex items-ceter justify-center bg-black/50 ring-fuchsia-50">
                {image ? (
                  <FaTrash className="text-white text-3xl cursor-pointer" />
                ) : (
                  <FaPlus className="text-white text-3xl cursor-pointer" />
                )}
              </div>
            )}
          </div>
          {/* {input section} */}
          <div className="flex min-w-32 md:min-w-64 flex-col gap-5 text-white items-center justify-center">
            <div className="w-full">
              <input
                type="email"
                placeholder="email"
                disabled
                value={userInfo}
                className="rounded-lg p-6 bg-[#2c2e3b] border-none"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="rounded-lg p-6 bg-[#2c2e3b] border-none"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Last Name "
                onChange={(e) => setSurName(e.target.value)}
                value={surName}
                className="rounded-lg p-6 bg-[#2c2e3b] border-none"
              />
            </div>
            <div className="w-full flex gap-5">
              {colors.map((color, index) => (
                <div
                  className={`${color} h-8 w-8 rounded-full cursor-pointer transition-all duration-300
                    ${
                      setColor === index
                        ? "outline outline-white/50 outline-1"
                        : ""
                    }
                    `}
                  key={index}
                  onClick={() => setColor(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={() => saveChange()}
            className="h-16 w-full bg-purple-700 hover:bg-purple-900 transition-all duration-300"
          >
            Save Change
          </button>
        </div>
      </div>
      Profile
    </div>
  );
}
