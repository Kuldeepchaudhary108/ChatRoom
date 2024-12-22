import React from "react";
import List from "./List";
import Chats from "./Chats";

export default function Container() {
  return (
    <>
      <div className=" boxContainer text-white flex ">
        <div className="list  flex-[3] border-r-[1px] border-white">
          <List />
        </div>
        <div className="chat flex-[7]">{/* <Chats /> */}
          {
            
          }
        </div>
      </div>
    </>
  );
}
