import express, { Router}  from 'express';
import mongoose from 'mongoose';
import route from './route/routes.js'; 
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use('/user',route);
const PORT = 8000;

const URL ='mongodb+srv://user:user@userdata.9ju6z.mongodb.net/CRUD?retryWrites=true&w=majority'

mongoose.connect(URL,{useNewUrlParser: true , useUnifiedTopology: true}).then(()=>{
    app.listen(PORT, () =>{
        console.log(`server is running i on port ${PORT}`);
    });
}).catch(error =>{ 
    console.log('error',error.message);
})
