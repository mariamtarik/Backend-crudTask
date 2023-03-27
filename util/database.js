
const mongoose=require("mongoose");

const DBConcction=()=>{

    return mongoose.connect(process.env.MONGO_URL).then((res)=>{
        console.log("DB connected...")
            }).catch((err)=>{console.log("failed connected",err)})
        } 



module.exports=DBConcction;