import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import DBconnect from './src/models/DB.connect';
import postRouter from './src/routers/post.router'

const app = express();
const PORT = 8000;
const db = new DBconnect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', postRouter)

db.connect()
.then(() => { console.log('DB connected successfully') })
.catch((err) => { console.log(err.message) });


app.listen(PORT,()=> { console.log(`Server listening on ${PORT}`) });

