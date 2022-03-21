import React from "react";
import {Button, Grid, TextField, Typography } from "@mui/material";
export default function AddUser() {
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
          minHeight: "70%",
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
                  <TextField fullWidth variant="standard" label="First Name" required/>

              </Grid>
              <Grid item  xs={12} sm={12} md={6} xl={6}>
              <TextField fullWidth variant="standard" label="Last Name" required/>

              </Grid>
              <Grid item  xs={12} sm={12} md={6} xl={6}>
                  <TextField fullWidth variant="standard" label="City" required/>

              </Grid>
              <Grid item  xs={12} sm={12} md={6} xl={6}>
              <TextField fullWidth variant="standard" label="Company" required/>

              </Grid>
              <Grid item xs={12}  sm={12} md={6} xl={6}>
                  <Button fullWidth variant="contained" color="error">Clear</Button>
              </Grid>
              <Grid item xs={12}  sm={12} md={6} xl={6}>
              <Button fullWidth variant="contained" color="success">Add</Button>              </Grid>
          </Grid>
        
      </div>
    </div>
  );
}
