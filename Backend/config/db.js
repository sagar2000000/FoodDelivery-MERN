import mongoose from "mongoose";

const connectDB= async()=>{
  await mongoose.connect("mongodb+srv://sagar299:{password-here}@cluster0.yb6gpss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")
  .then(()=>{
    console.log("DB connected sucessfully")
  })
}



export { connectDB}
