import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBars from "./SideBars";
export default function Navbar({list}) {
    const [sideBar,setSidebar]=useState(false)
  return (
    <>
      <div
        style={{
          height: "8%",
          backgroundColor: "",
          display: "flex",
          alignItems: "center",
          flexGrow: "inherit",
          boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
        }}
      >
        <div
          style={{
            flex: "30%",
            backgroundColor: "",
            width: "30%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <h3 style={{ fontSize: "30px", textShadow: " #FC0 1px 0 10px" }}>
           {"<"}Sublime{"/>"}
          </h3>
        </div>
        <div
          style={{
            flex: "70%",
            backgroundColor: "",
            width: "20%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <FaBars size={"30px"} style={{ margin: "5%", cursor: "pointer"  }} onClick={()=>{setSidebar(!sideBar)}} />
        </div>
      </div>
      {sideBar ?
      <SideBars sideBar={sideBar} setSidebar={setSidebar} list={list}/>
      :<></>
    }
    </>
  );
}
