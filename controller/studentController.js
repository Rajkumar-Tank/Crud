import mongoose from "mongoose"
import StudentModel from "../models/student.js"

class studentController{

  static CreateDoc = async(req,res) => {
  try {
    const {name,age,fees} = req.body
    // console.log(req.body);
    
    const doc = new StudentModel({
      name:name,
      age:age,
      fees:fees
    })

    // Save Document
    const result = await doc.save()
    // console.log(result);
    res.redirect('/student')

  } catch (err) {
      console.log(err);
  }
  } 

  static GetAllDoc  = async(req,res) => {

    try {
      const result = await StudentModel.find()
      // console.log(result.length);
      // for (let i = 0; i < result.length; i++) {
      //  console.log(result[i].name);
      //  console.log(result[i].age);
      //  console.log(result[i].fees.toString());
        
      // }
      res.render('index.ejs',{result})
    } catch (err) {
      console.log("Error Ave che Toppa Solve Kr ne Doffa",err);
    }
    
  }

  static EditDoc = async(req,res) => {
    // console.log(req.params.id);
    try {
        const result = await StudentModel.findById(req.params.id);
        // console.log(result);
        res.render("edit.ejs",{result})

    } catch (err) {
      console.log(err);      
    }
    
  }

  static UpdateDocById = async (req,res) => {
    // console.log(req.params.id);
    // console.log(req.body);
    try {
      const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body)
    } catch (err) {
      console.log(err);
    }
    res.redirect("/student")
  }

  static DeleteDocById = async(req,res) => {
    // console.log(req.params.id);
    try {
      const result = await StudentModel.findByIdAndDelete(req.params.id)
    } catch (err) {
      console.log(err);
    }
    res.redirect("/student")
  }
    
  

}

export default studentController