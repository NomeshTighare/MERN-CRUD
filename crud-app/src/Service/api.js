import axios from 'axios';
const usersurl = 'http://localhost:8000/user';

export const getuser = async (id) => {
    id = id || '';
    return await axios.get(`${usersurl}/${id}`); //url = 'http://localhost:3003/user';
}

export const adduser = async (user) =>{
    return await axios.post(`${usersurl}/add`,user);
}

export const edituser = async (id,user) =>{
    return await axios.put(`${usersurl}/${id}`,user);
}

export const deleteuser = async (id) =>{
    return await axios.delete(`${usersurl}/${id}`);
}
export const exportCSV = async () =>{
    return await axios.get(`${usersurl}/export-csv`);
}