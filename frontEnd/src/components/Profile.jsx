import React, { useState } from "react";

export default function Profile() {
  const [selection, setSelection] = useState(null);
  const handleClick = (value) => {
    setSelection(value);
  };

  return (
    <div className=" flex h-96">
      <div className="profile space-y-3 w-[20%]  ">
        {["Overview", "Media", "Files", "links", "Groups"].map(
          (value, index) => (
            <button
              className={`${
                value === selection ? "bg-gray-700" : ""
              } hover:bg-gray-600 p-2 rounded-lg`}
              key={index}
              onClick={() => handleClick(value)}
            >
              {value}
            </button>
          )
        )}
      </div>
      {/* content*/}
      <div className=" ">
        {/* Overview Section */}
        {selection === "Overview" && (
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-4">
              <img
                className="rounded-full w-20 h-20"
                src="elements/jack.png"
                alt="Profile Picture"
              />
              <div>
                <h3 className="text-2xl font-semibold">Jack</h3>
                <p className="text-gray-400">Jack Singh</p>
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              <button className="bg-gray-700 p-3 rounded-md flex items-center space-x-2 hover:bg-gray-600">
                <img
                  className="w-5"
                  src="elements/video.png"
                  alt="Video Call"
                />
                <span>Video</span>
              </button>
              <button className="bg-gray-700 p-3 rounded-md flex items-center space-x-2 hover:bg-gray-600">
                <img
                  className="w-5"
                  src="elements/phone.png"
                  alt="Voice Call"
                />
                <span>Voice</span>
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <h6 className="font-semibold">About</h6>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque, fugit.
                </p>
              </div>
              <div>
                <h6 className="font-semibold">Phone Number</h6>
                <p className="text-gray-400">+91 XXXXXXXXXX</p>
              </div>
              <div>
                <h6 className="font-semibold">Disappearing Message</h6>
                <p className="text-gray-400">Off</p>
              </div>
              <div>
                <h6 className="font-semibold">Mute Notifications</h6>
                <button className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600">
                  Muted
                </button>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-700 pt-4 flex space-x-4">
              <button className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-500">
                Block
              </button>
              <button className="bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-400">
                Report
              </button>
            </div>
          </div>
        )}

        {/* Media Section */}
        {selection === "Media" && (
          <div className="grid grid-cols-3 gap-4 overflow-y-auto max-h-[500px] p-4 bg-gray-800 rounded-lg shadow-lg">
            {Array(12)
              .fill(0)
              .map((_, index) => (
                <img
                  key={index}
                  src="elements/jack.png"
                  alt={`Media ${index + 1}`}
                  className="rounded-lg shadow-md hover:scale-105 transition"
                />
              ))}
          </div>
        )}

        {/* Additional Sections */}
        {selection !== "Overview" && selection !== "Media" && (
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>{selection} content is coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}
