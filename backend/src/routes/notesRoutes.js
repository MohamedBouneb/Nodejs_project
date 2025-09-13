import express from 'express';
import { getAllnotes, creatNotes, updateNotes, deleteNotes } from '../controllers/notesController.js';
const router = express.Router()

router.get("/getall",getAllnotes);
router.post("/create",creatNotes);
router.put("/:id",updateNotes);
router.delete("/:id", deleteNotes);


export default router;

