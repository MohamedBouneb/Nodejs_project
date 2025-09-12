import express from 'express';
import { getAllnotes, creatNotes, updateNotes, deleteNotes } from '../controllers/notesController.js';
const router = express.Router()

router.get("/getall",getAllnotes);
router.get("/create",creatNotes);
router.get("/:id",updateNotes);
router.get("/:id", deleteNotes);


export default router;

