import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const useStyle = makeStyles({
    header : {
        background: '#111111'
    },
    tabs :{
        color : "#FFFFFF",
        textDecoration : "none",
        marginRight :"20px",
        fontsize : 30
    }
})
const NavBar = () => {
    const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static"> 
      <Toolbar>
        <NavLink className={classes.tabs} to="/" exact> Curd App</NavLink>
        <NavLink className={classes.tabs} to="/all" exact> All User</NavLink>
        <NavLink className={classes.tabs} to="/add" exact> Add User</NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
