import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import sidebarData from "../components/sidebarData";
import axios from "../axios";
import {
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Bar,
  CartesianGrid,
} from "recharts";
import { Tooltip } from "@mui/material";
export default function CityList() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const data = await axios.get("/city");
    setData(data.data);
  }, []);
  return (
    <div style={{ height: "100%" }}>
      <Navbar list={sidebarData} />
      <div
        style={{
          height: "calc(100% - 8%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <BarChart width={1000} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="customers" fill="#8884d8"></Bar>
        </BarChart>
      </div>
    </div>
  );
}
