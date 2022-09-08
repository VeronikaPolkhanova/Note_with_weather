/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteNoteAction } from '../../store/actions';
import './noteItem.css';

function NoteItem(props) {
    const { id, note, date, temperature, icon } = props.item;
    const dispatch = useDispatch();
    const deleteNote = (id) => {
        dispatch(deleteNoteAction(id))
    }
    return <div className="note-item">
        <div className="note-text">
            <p>{note}</p>
        </div>
        <div className="weather-container">
            <div className="img-container">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={`${icon}-icon`}></img>
            </div>
            <p>{Math.round(temperature - 273, 15)}&#xb0;C</p>
            <p>{moment(date).format("D MMM YYYY")}</p>
            <p>{moment(date).format("HH:mm")}</p>
        </div>
        <span onClick={() => deleteNote(id)} className="delete-btn">&#10005;</span>
    </div>
}
export default NoteItem;