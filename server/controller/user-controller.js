
import res from 'express/lib/response.js';
import User from '../model/user-schema.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const json2csv = require('json2csv').parse;
const fs = require('fs');




export const getuser = async(request, response)=>{
    try {
        let user = await User.find();
        response.json(user);
    } catch(error){
        response.json({message: error.message});
    }
}

// exportcsv is used to export the data in csv format
export const exportcsv = async(request, response)=>{
    try {
        let user = await User.find();
        // json2csv and fs is used to convert json data into csv format

        // const json2csv = require('json2csv').parse;
        // const fs = require('fs');
        // const fields = ['id','firstName', 'lastName', 'emailAddress', 'mobileNumber', 'whatsAppNumber', 'age', 'education', 'occupation', 'address', 'city', 'state', 'country', 'pincode'];

        const fields =[
            {
                label: 'User Id', value: 'id'
            },
            {
                label: 'First Name', value: 'firstName'
            },
            {
                label: 'Last Name', value: 'lastName'
            },
            {
                label: 'Email Address', value: 'emailAddress'
            },
            {
                label: 'Mobile Number', value: 'mobileNumber'
            },
            {
                label: 'WhatsApp Number', value: 'whatsAppNumber'
            },
            {
                label: 'Age', value: 'age'
            },
            {
                label: 'Education', value: 'education'
            },
            {
                label: 'Occupation', value: 'occupation'
            },
            {
                label: 'Address', value: 'address'
            },
            {
                label: 'City', value: 'city'
            },
            {
                label: 'State', value: 'state'
            },
            {
                label: 'Country', value: 'country'
            },
            {
                label: 'Pincode', value: 'pincode'
            },

        ]
                const opts = { fields };
        const fieldMapping = {
            id: 'id',
            firstName: 'First Name',
            lastName: 'Last Name',
            emailAddress: 'Email Address',
            mobileNumber: 'Mobile Number',
            whatsAppNumber: 'WhatsApp Number',
            age: 'Age',
            education: 'Education',
            occupation: 'Occupation',
            address: 'Address',
            city: 'City',
            state: 'State',
            country: 'Country',
            pincode: 'Pincode'
        };
        
        const csv = json2csv(user, opts);
        fs.writeFile('userdata.csv', csv, function(err) {
            if (err) throw err;
            console.log('file saved as csv format successfully in the root folder');

        });
        // show csv file url in the response

        // response.json({ data: csv, message: "created csv file"});
        response.send(csv);
        // response.json(user );
        // response.json({ data:csv ,message: "created csv file", success: true});
        // response.send(csv + "created csv file");

    } catch(error){
        response.json({message: error.message + " error" , success: false});
    }
}

export const adduser = async (request, response)=>{
    // console.log("hello");
    // response.send("codenmkfmk")
    const user = request.body;
    const newUser = new User(user);
    try {
        await newUser.save();    
        response.json(newUser);
    } catch(error){
        response.json({message: error.message});
    }
}

export const getUserById = async (request, response)=>{
    const user = await User.findById(request.params.id);
    try{
        const user = await User.findById(request.params.id);
        response.json(user);
    }catch(error){
        response.error({message: error.message}); 
    }
    
}

export const edituser = async (request, response) => {
    let user = await User.findById(request.params.id);
    user = request.body;

    const edituser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, edituser);
        response.status(201).json(edituser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteuser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}