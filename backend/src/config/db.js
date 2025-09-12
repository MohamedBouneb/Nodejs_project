import mongosse from "mongoose";

export const connectDB = async () => {
    try {
        await mongosse.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("MongoDB connected")
    }catch(error){
        console.log("Error in DB connection",error)
        process.exit(1);    
    }
}