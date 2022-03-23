import React, { useEffect, useState } from 'react'
import {Grid, TextField, Typography,Pagination,Table,TableRow,TableHead,TableContainer,Paper,TableBody,TableCell,styled,tableCellClasses} from "@mui/material"
import { getUsers } from '../redux/action/users';
import {useDispatch,useSelector} from "react-redux"
import { NavLink,useNavigate } from 'react-router-dom';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
export default function CustomerListContainer() {
    const dispatch=useDispatch()
    const theUserState=useSelector((state)=>state.usersReducer)
    const navigate=useNavigate()
    const [page,setPage]=useState(1)
    const [search,setSearch]=useState("")
    useEffect(async()=>{
        await dispatch(getUsers(page,search))
    },[dispatch,page,search])
  return (
    <div style={{height:"calc(100vh - 8%)",backgroundColor:"",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <div className="container" style={{width:"88%",height:"90%", boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",display:"grid",gridTemplateRows:"15% 1fr 10%"}}>
            <div className="searchContainer" style={{display:"flex",justifyItems:"center",justifyContent:"right",padding:"2%"}}>
                <TextField label="Search By Name" onChange={(e)=>{setPage(1);setSearch(e.target.value);navigate(`/users?page=${page}&search=${e.target.value}`)}} />

            </div>
            <div className="dataContainer">
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          
          <TableRow>
          <StyledTableCell align='center'>Sr_No</StyledTableCell>
            <StyledTableCell align='center'>First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Company</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {theUserState.users.map((u,k)=>(
            <StyledTableRow key={k}>
                <StyledTableCell align='center'>{k+1}</StyledTableCell>
            <StyledTableCell align='center'><NavLink style={{textDecoration:"none",color:"blue"}} to={`/users/${u._id}`}>{u.first_name}</NavLink></StyledTableCell>
            <StyledTableCell align='center'>{u.last_name}</StyledTableCell>
            <StyledTableCell align='center'>{u.city}</StyledTableCell>
            <StyledTableCell align='center'>{u.company}</StyledTableCell>
        </StyledTableRow>
                
                ))}
            
        </TableBody>
        </Table>
        </TableContainer>

            </div>
            <div className="pagination" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
            <Pagination count={theUserState.total} variant="outlined" color="secondary"  onChange={(e,p)=>{setPage(p);navigate(`/users?page=${p}${search?`&search=${search}`:""}`)}}/>

            </div>
           


        </div>

    </div>
  )
}
