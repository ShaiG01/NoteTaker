import Note from "../model/Notes.js";

export const getNotes = async(_, res) => {
  try{
    const notes =  await Note.find().sort({updatedAt: -1});
    res.status(200).json(notes);
  } catch(err){
    res.status(500).json({message: 'Internal Server Error'});
  }
};

export const postNotes = async(req, res) => {
  try{
    const {title, content} = req.body;
    const newNote = await Note.create({title, content});
    res.status(201).json(newNote);
  } catch(err){
    res.status(500).json({message: 'Internal Server Error'});
  }
}

export const updateNotes = async(req, res) => {
  try{
    const{id}= req.params;
    const {title, content} = req.body;

    const updatedNote = await Note.findByIdAndUpdate(id, {title, content}, {new: true})

  
    if(!updatedNote){
      return res.status(404).json({message: 'Note not found'});
    }

    res.status(200).json(updatedNote);

  } catch(err){
    res.status(500).json({message: 'Internal Server Error'});
  }
}

export const deleteNotes = async(req, res) => {
   try{
    const{id}= req.params;

    const deletedNote = await Note.findByIdAndDelete(id);

    if(!deletedNote){
      return res.status(404).json({message: 'Note not found'});
    }
    
    res.status(200).json(deletedNote);
  } catch(err){
    res.status(500).json({message: 'Internal Server Error'});
  }
};

export const getNoteById = async(req,res) =>{
  try{
    const {id}= req.params;

    const note = await Note.findById(id);

    if(!note){
      return res
    }

    res.status(200).json(note);
  } catch(err){
    res.status
  }
}