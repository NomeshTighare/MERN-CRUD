import { Box , makeStyles , Typography } from '@material-ui/core';
import welcome from '../Assets/images/wallpaper.png'; 


const CrudApp = () =>{
  
return(
   
    <Box>
        <img src={welcome} style={{width:'100%',}}/>
    </Box>
)
}
export default CrudApp;