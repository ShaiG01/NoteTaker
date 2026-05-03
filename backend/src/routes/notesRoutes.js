import express from 'express';
import { getNotes, postNotes, updateNotes, deleteNotes, getNoteById } from '../controllers/notesController.js';

const router = express.Router();

router.get('/', getNotes);
router.get('/:id', getNoteById);
router.post('/', postNotes);
router.put('/:id', updateNotes);
router.delete('/:id', deleteNotes);

export default router;