import NavBar from './Components/NavBar';
import CrudApp from './Components/CrudApp';
import Allusers from './Components/Allusers';
import Adduser from './Components/Adduser';
import NotFound from './Components/NotFound';
import Edituser from './Components/Edituser';
import { BrowserRouter , Route, Switch } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
    <Route exact path="/" component={CrudApp} />
    <Route exact path="/all" component={Allusers}/>
    <Route exact path="/add" component={Adduser}/>
    <Route exact path="/edit/:id" component={Edituser}/>
    <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
