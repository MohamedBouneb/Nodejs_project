import mongoose, { Types }  from "mongoose";
const notesSchema = mongosse.Shema({
    title:{
        Types:String,
        required:true,
    },
    content:{
        Types:String,
        required:true,
    }},

    {timestamps:true,}
);

const Notes = mongoose.model("Notes",notesSchema);
export default Notes;