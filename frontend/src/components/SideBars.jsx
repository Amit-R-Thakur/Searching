import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {NavLink} from "react-router-dom"
export default function SideBars({ sideBar, setSidebar, list }) {
  return (
    <div
      style={{
        position: "absolute",
        left: "0",
        top: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "#00000070",
        zIndex: 1000,
        display: "grid",
        gridTemplateColumns: "1fr 15%",
      }}
    >
      <div
        onClick={() => {
          setSidebar(!sideBar);
        }}
      ></div>
      <div style={{ backgroundColor: "white" }}>
        <div
          className="contentContainer"
          style={{
            marginTop: "25%",
            textAlign: "center",
            minHeight: "70%",
            backgroundColor: "",
            padding: "10px",
          }}
        >
          <List>
            {list.map((li, k) => (
                <NavLink key={k} to={li.link} style={{textDecoration:"none",color:"#141414"}}>
              <ListItem
                button
                style={{ marginTop: "20px",fontSize:"30px" }}
                onClick={() => {
                  setSidebar(!sideBar);
                }}
                
              >
                  <ListItemIcon>{li.icon}</ListItemIcon>
                <ListItemText>{li.text}</ListItemText>
              </ListItem>
              </NavLink>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}
