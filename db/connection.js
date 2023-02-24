import mongoose from "mongoose";
mongoose.set('strictQuery', false)

// const connectDb=(url)=>{
//  return mongoose.connect(url).then(()=>{
//         console.log("Connection Establised Successfully");
//   }).catch((err)=>{
//       console.log("Connection Establised Error ",err);
//   })

// }


const connectDb=async (url)=>{
  try {
    await mongoose.connect(url);
    console.log("Connection Establised Successfully");
  } catch (err) {
    console.log("Connection Establised Error ", err);
  }
 
 }


export default connectDb;