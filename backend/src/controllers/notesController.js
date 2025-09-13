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
        console.log(title,content)
        const newnote = new Notes ({title,content});
        await newnote.save();
        res.status(201).json({message:"note created successfully",note:newnote});
    }catch(error){
        console.log("error in create Note ",error);
        res.status(500).json({message:"Server error"});

    }
}

export function updateNotes (req,res) {
    res.status(200).json({message: "update note"})
}

export function deleteNotes (req,res) {
    res.status(200).json({message: "delelte note"})
}