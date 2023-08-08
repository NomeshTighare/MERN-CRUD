import { Button, FormControl, FormGroup, FormLabel, Input ,makeStyles, Typography} from "@material-ui/core";
import { useState } from "react";
import { adduser} from '../Service/api';
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
    container : {
    width:'50%',
    margin : '5% 0 0 25%',
    '& > *' :{
        marginTop : 20 
    }
}
})
const initialvalues = {
    firstName: '',
    lastName: '',
    emailAddress:'',
    mobileNumber:'',
    whatsAppNumber:'',
    age:'',
    education:'',
    occupation:'',
    address:'',
    city:'',
    state:'',
    country:'',
    pincode:'',

}
const Adduser = () => {
    const [user , setuser] = useState(initialvalues);
    const{ firstName, lastName, emailAddress,mobileNumber,whatsAppNumber,age,education,occupation,address,city,state,country,pincode} =  user;
    const history = useHistory();
    const classes = useStyle();
    const onValueChange = (e) =>{
      
        setuser({ ...user,[e.target.name]: e.target.value})
    } 
    const addUserDetails = async() =>{
        await adduser(user);
        history.push('./all');
    }
  
    return (
    <FormGroup className={classes.container}>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'firstName' value={firstName} />
        </FormControl>
        <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'lastName' value={lastName}/>
        </FormControl>
        <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'emailAddress' value={emailAddress} />
        </FormControl>
        <FormControl>
            <FormLabel>Mobile Number</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'mobileNumber' value={mobileNumber} />
        </FormControl>
        <FormControl>
            <FormLabel>WhatsApp Number</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'whatsAppNumber' value={whatsAppNumber} />
        </FormControl>
        <FormControl>
            <FormLabel>Age</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'age' value={age} />
        </FormControl>
        <FormControl>
            <FormLabel>Education</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'education' value={education} />
        </FormControl>
        <FormControl>
            <FormLabel>Occupation</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'occupation' value={occupation} />
        </FormControl>
        <FormControl>
            <FormLabel>Address</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'address' value={address} />
        </FormControl>
        <FormControl>
            <FormLabel>City</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'city' value={city} />
        </FormControl>
        <FormControl>
            <FormLabel>State</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'state' value={state} />
        </FormControl>
        <FormControl>
            <FormLabel>Country</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'country' value={country} />
        </FormControl>
        <FormControl>
            <FormLabel>Pincode</FormLabel>
            <Input onChange={(e)=> onValueChange(e)} name = 'pincode' value={pincode} />
        </FormControl>
        <Button variant="contained" onClick={ () => addUserDetails()} color="primary">Add User</Button>
    </FormGroup>
    );
  };
  
  export default Adduser;
  