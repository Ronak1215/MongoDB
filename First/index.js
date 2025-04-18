import express from 'express';
import connectDB from './db/connectDB.js';
import { updateMany } from './models/Movies.js';
// import { updateById } from './models/Movies.js';
// import { docWithField } from './models/Movies.js';
// import { singleDoc } from './models/Movies.js';
// import { allDoc } from './models/Movies.js';
// import {createDoc} from './models/Movies.js';
// import {insertManyDoc} from './models/Movies.js';

const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/movies";

connectDB(DATABASE_URL);
// createDoc()
// insertManyDoc()
// allDoc()
// singleDoc()
// docWithField()
// updateById("67d004972d335b6108288252")
updateMany()

app.listen(port, () => console.log(`Server is running on port ${port}`));