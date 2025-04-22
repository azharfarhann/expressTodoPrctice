import express from "express";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());


// there are 6 common api's used in any project
// 1. Get All (GET method)
// 2. Get By Id (GET method)
// 3. ADD (POST Method)
// 4. Update All Users (PUT METHOD)
// 5. DELETE by id  (DELETE METHOD)
// 6. DELETE ALL  (DELETE METHOD)

// All controllers API'S Import and use in app.use respectively
import students from "./controllers/students/index.js"

import admin from "./controllers/admin/index.js"

import teachers from "./controllers/teachers/index.js"

app.use("/admin",admin);
app.use("/students",students);
app.use("/teachers",teachers);

app.use((req,res)=> {
    res.status(404).json({msg: "Method or Server invalid"})
})

app.listen(PORT,()=> {
    console.log(`server is running at ${PORT}`);
})