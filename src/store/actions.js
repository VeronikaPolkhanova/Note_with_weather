export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const AddNoteAction = (payload) => ({type: ADD_NOTE, payload});
export const DeleteNoteAction = (payload) => ({type: DELETE_NOTE, payload});