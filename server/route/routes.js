import express from 'express';
import { getuser , exportcsv, adduser, getUserById , edituser, deleteuser} from '../controller/user-controller.js';  
 
const route = express.Router();

route.get('/', getuser);
route.get('/export-csv', exportcsv);
route.post('/add',adduser);
route.get('/:id', getUserById);
route.put('/:id', edituser);
route.delete('/:id', deleteuser);

export default route;