import { TableBody, TableCell,Table, TableHead, TableRow,makeStyles,Button, TableContainer, Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { getuser , deleteuser,exportCSV } from "../Service/api";
import { Link } from "react-router-dom";
const usersurl = 'http://localhost:8000/user';
const useStyle = makeStyles({
    table:{
        width : "100%",
        margin : "10px"
        
    },
    thead:{ 
        '& > *':{
            background : "#000000",
            color : "#FFF",
             fontSize:"15px",
               }
    },
    row:{
        '& > *':{
             fontSize:"14px"     
    }
}
})


const Allusers = () => {

    const [user , setusers] = useState([]);
    const classes = useStyle();

    useEffect(()=>{
        getalluser();
    },[])

    // export csv file and download using api call
    const csvData = async () => {
        await exportCSV();

    }
    const handleExportCSV = () => {
        fetch(`${usersurl}/export-csv`)
        .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'userList.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
        
    }

    const deleteUserData = async (id) => {
        await deleteuser(id);
        getalluser();
    }

    const getalluser = async () => {
    let response = await getuser();
    setusers(response.data)
  };
  return (
    <Container sx={{width:'100%', margin:'20px'}}>
    <Grid container spacing={6}>
        <Grid item xs={12} sm={10}>
            <h2>All Users</h2>
        </Grid>
        <Grid item xs={12} sm={2}sx={{marginTop:'30px'}}  >
            <Button variant="contained" color="primary" onClick={handleExportCSV}>Export CSV</Button>
        </Grid>
    </Grid>
    <br/>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}> 
      <Table className={classes.table }  >
          <TableHead>
              <TableRow className={classes.thead} >
                  <TableCell>User Id</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Mobile Number</TableCell>
                  <TableCell>WhatsApp Number</TableCell>
                  <TableCell>Education</TableCell>
                  <TableCell>Occupication</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Pincode</TableCell>
                  <TableCell>Actions</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {user.map((user) =>(
                      <TableRow className={classes.row} key={user._id}>
                          <TableCell>{user._id}</TableCell>
                          <TableCell>{user.firstName}</TableCell>
                          <TableCell>{user.lastName}</TableCell>
                          <TableCell>{user.emailAddress}</TableCell>
                          <TableCell>{user.age}</TableCell>
                          <TableCell>{user.mobileNumber}</TableCell>
                          <TableCell>{user.whatsAppNumber}</TableCell>
                          <TableCell>{user.education}</TableCell>
                          <TableCell>{user.occupation}</TableCell>
                          <TableCell>{user.address}</TableCell>
                          <TableCell>{user.city}</TableCell>
                          <TableCell>{user.state}</TableCell>
                          <TableCell>{user.country}</TableCell>
                          <TableCell>{user.pincode}</TableCell>
                          <TableCell>
                          {/* <Grid item xs={8}>

        <EditTwoToneIcon color="primary"  component={Link} to={`/edit/${user._id}`}  />
      </Grid> */}
                            <Button  variant="contained" color="primary" style={{marginRight:"20px "}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button variant="contained" color="secondary" onClick={() => deleteUserData(user._id)}>Delete</Button>
                            </TableCell>
                          </TableRow>
                  ))
              }
          </TableBody>
      </Table>
      </TableContainer>
      </Paper>
      </Container>
  );
};

export default Allusers;
