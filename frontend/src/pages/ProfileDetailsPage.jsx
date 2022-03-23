import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import sidebarData from "../components/sidebarData";
import axios from "../axios";
import { NavLink, useParams } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
export default function ProfileDetailsPage() {
    const params=useParams()
    const [data,setData]=useState({
        fname:"",
        lname:"",
        city:"",
        company:""

    })
    useEffect(async()=>{
        
        const data=await axios.get(`/customer/${params.id}`)
        const {first_name,last_name,city,company}=data.data
        setData({fname:first_name,lname:last_name,city,company})
    },[])
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
        <div
          className="profileContainer"
          style={{
            height: "60%",
            width: "50%",
            boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
            padding:"2%"
          }}
        >
          <Grid container spacing={8}>
            <Grid item sm={12} md={12} xl={12} marginTop="8px">
              <Typography
                textAlign={"center"}
                component="h3"
                variant="h3"
                style={{
                  textAlign: "center",
                  wordSpacing: "7px",
                  textTransform: "uppercase",
                  fontSize: "28px",
                  fontWeight: "bolder",
                  color: "#060606",
                }}
              >
                Profile Details
              </Typography>
            </Grid>
            <Grid item sm={6} md={6} xl={6} marginTop="10px" textAlign={"left"}>
              <Typography
                textAlign={"center"}
                component="h5"
                variant="h5"
                style={{
                  textAlign: "center",
                  wordSpacing: "7px",
                  textTransform: "uppercase",
                  fontSize: "25px",
                  fontWeight: "bolder",
                  color: "#060606",
                }}
              >
                First_ Name: {data.fname}
              </Typography>
            </Grid>
            <Grid item sm={6} md={6} xl={6} marginTop="10px" textAlign={"left"}>
              <Typography
                textAlign={"center"}
                component="h5"
                variant="h5"
                style={{
                  textAlign: "center",
                  wordSpacing: "7px",
                  textTransform: "uppercase",
                  fontSize: "25px",
                  fontWeight: "bolder",
                  color: "#060606",
                }}
              >
                Last_ Name: {data.lname}
              </Typography>
            </Grid>
            <Grid item sm={6} md={6} xl={6} marginTop="10px" textAlign={"left"}>
              <Typography
                textAlign={"center"}
                component="h5"
                variant="h5"
                style={{
                  textAlign: "center",
                  wordSpacing: "7px",
                  textTransform: "uppercase",
                  fontSize: "25px",
                  fontWeight: "bolder",
                  color: "#060606",
                }}
              >
                City: {data.city}
              </Typography>
            </Grid>
            <Grid item sm={6} md={6} xl={6} marginTop="10px" textAlign={"left"}>
              <Typography
                textAlign={"center"}
                component="h5"
                variant="h5"
                style={{
                  textAlign: "center",
                  wordSpacing: "7px",
                  textTransform: "uppercase",
                  fontSize: "25px",
                  fontWeight: "bolder",
                  color: "#060606",
                }}
              >
               Company: {data.company}
              </Typography>
            
          </Grid>
          <Grid item sm={12} md={12} xl={12} marginTop="8px" textAlign={"center"}>
              <NavLink to={"/users"} style={{textDecoration:"none"}}><Button style={{width:"180px",height:"40px"}} variant={"contained"} >Go Back</Button></NavLink>
          </Grid>
          
          </Grid>
          
        </div>
      </div>
    </div>
  );
}
