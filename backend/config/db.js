const mongoose=require('mongoose')
// console.log("hello")
console.log(process.env.PORT)
const connectDB=async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://mtharun338:Tharun@cluster0.p2xdl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("mongodb connected")
    }catch(error){
     console.log(`error:${error.message}`);
     process.exit();
    }
}

module.exports=connectDB;