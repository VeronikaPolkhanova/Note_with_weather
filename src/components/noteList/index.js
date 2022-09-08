import React from 'react';
import { useSelector } from 'react-redux';
import NoteItem from '../noteItem';
import Input from '../input';
import './noteList.css';

function Notes() {
    const notes = useSelector(state => state);
    if (notes.length === 0)
        return
    <p>Empty notes</p>
    return (
        <div className='note-list'>
            {notes.map(item => <NoteItem item={item} key={item.id} />)}
            <Input />
        </div>
    )
}
export default Notes;