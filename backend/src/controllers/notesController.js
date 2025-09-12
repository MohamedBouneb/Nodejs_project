export function getAllnotes (req,res) {
    res.status(200).send("Get all notes")
}

export function creatNotes (req,res) {
    res.status(200).json({message: "Create a new note"})
}

export function updateNotes (req,res) {
    res.status(200).json({message: "update note"})
}

export function deleteNotes (req,res) {
    res.status(200).json({message: "delelte note"})
}