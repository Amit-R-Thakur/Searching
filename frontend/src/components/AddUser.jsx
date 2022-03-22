import React from "react";
import {Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SetUser,ValidateData ,creatingUser} from "../redux/action/signup";
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2"
export default function AddUser() {
  const dispatch=useDispatch()
  const theAddState=useSelector((state)=>state.signUpReducer)
  const navigate=useNavigate()
  const setCustomer=(e)=>{
    const {name,value}=e.target
    dispatch(SetUser(name,value))
  }
  const sendData=async()=>{
    try{
       if(dispatch(ValidateData()))
       {
         if(await dispatch(creatingUser()))
         {
          navigate("/")

         }
       }
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        className="container"
        style={{
          minHeight: "75%",
          width: "70%",
          boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
          padding:"2%"
        }}
      >
          <Grid container spacing={10}>
              <Grid item  xs={12} sm={12} md={12} xl={12}>
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
        >Add Customers</Typography>

              </Grid>
              <Grid item  xs={12} sm={12} md={6} xl={6}>
                  <TextField fullWidth variant="standard" label="First Name" required value={theAddState.fName} name="fName" onChange={setCustomer}/>
                  <div style={{marginTop:"10px",color:"red"}}><b >{theAddState.err.fName}</b></div>

              </Grid>
              <Grid item  xs={12} sm={12} md={6} xl={6}>
              <TextField fullWidth variant="standard" label="Last Name" required value={theAddState.lName} name="lName" onChange={setCustomer}/>
              <div style={{marginTop:"10px",color:"red"}}><b >{theAddState.err.lName}</b></div>

              </Grid>
              <Grid item  xs={12} sm={12} md={6} xl={6}>
                  <TextField fullWidth variant="standard" label="City" value={theAddState.city} name="city" required onChange={setCustomer}/>
                  <div style={{marginTop:"10px",color:"red"}}><b >{theAddState.err.city}</b></div>

              </Grid>
              <Grid item  xs={12} sm={12} md={6} xl={6}>
              <TextField fullWidth variant="standard" label="Company" required value={theAddState.company} name="company" onChange={setCustomer}/>
              <div style={{marginTop:"10px",color:"red"}}><b >{theAddState.err.company}</b></div>

              </Grid>
              <Grid item xs={12}  sm={12} md={6} xl={6}>
                  <Button fullWidth variant="contained" color="error">Clear</Button>
              </Grid>
              <Grid item xs={12}  sm={12} md={6} xl={6}>
              <Button fullWidth variant="contained" color="success" onClick={sendData}>Add Customer</Button>             
               </Grid>
               
          </Grid>
          <div style={{marginTop:"20px",color:"red",textAlign:"center",fontSize:"25px"}}><b >{theAddState.err.otherError}</b></div>
        
      </div>
    </div>
  );
}
