import mongoose from 'mongoose';

// create Schema For Student
const studentschema = new mongoose.Schema({
  name:{type:String,required:true,trim:true},
  age:{type:Number,required:true,min:18,max:45},
  fees:{type:mongoose.Decimal128,required:true,validate:(v)=>{
    v >= 5500.50
  }}
})


//  Create Model
const StudentModel = mongoose.model('student',studentschema)


export default StudentModel