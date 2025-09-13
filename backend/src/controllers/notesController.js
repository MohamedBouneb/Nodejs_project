import Notes from '../../models/Notes.js'
export async function getAllnotes (req,res) {
    try{
        const notes = await Notes.find({});
        res.status(200).json(notes);
    }catch(error){
        console.log("error in getallnotes ",error);
        res.status(500).json({message:"Server error"});

    }
}

export async function creatNotes (req,res) {
    try{
        const {title,content} = req.body
        const note = new Notes ({title,content});
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    }catch(error){
        console.log("error in create Note ",error);
        res.status(500).json({message:"Server error"});

    }
}

export async function updateNotes (req,res) {
    try{
        const {title,content} = req.body
        const updateNotes =await Notes.findByIdAndUpdate(req.params.id,{title,content},{new:true});
        if(!updateNotes){
            return res.status(404).json({message : "note not found"});
        }
        res.status(200).json(updateNotes);
    }catch(error){
        console.log("error in update Note ",error);
        res.status(500).json({message:"Server error"});

    }
}

export async function deleteNotes (req,res) {
    try{
        const deleteNote = await Notes.findByIdAndDelete(req.params.id);
        if (!deleteNote)
        {
            return res.status(404).json({message : "note not found"});
        }
        res.status(200).json({message:"note deleted successfully"});
    }catch(error){
        console.log("error in delete Note ",error);
        res.status(500).json({message:"Server error"});

    }
}