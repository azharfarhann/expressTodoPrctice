// 1. Get All (GET method)

import express from "express";

const router = express.Router();

router.get("/getall",(req,res) => {
    try {
        res.status(200).json("Get All students")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

// 2. Get By Id (GET method)
router.get("/getbyid/:id",(req,res) => {
    try {
        res.status(200).json("Get By Id of Students success")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

// 3. ADD (POST)
router.post("/register",(req,res) => {
    try {
        res.status(200).json("Add Students success")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

// 4. Update All Users (PUT METHOD)

router.put("/update",(req,res) => {
    try {
        res.status(200).json("Students data updated success")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

// 5. DELETE by id STUDENTS (DELETE METHOD)

router.delete("/deletebyid/:id",(req,res) => {
    try {
        res.status(200).json("Students by id delete success")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

// 6. DELETE ALL STUDENTS (DELETE METHOD)

router.delete("/deleteall",(req,res) => {
    try {
        res.status(200).json("All Students  delete success")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

export default router;