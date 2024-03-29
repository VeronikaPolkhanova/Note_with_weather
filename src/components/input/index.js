import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNoteAction } from '../../store/actions';
import { useWeather } from '../../hooks/useWeather';
import './input.css';

function Input() {
    const dispatch = useDispatch();
    const weather = useWeather();
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value === undefined || value === "" || value === null || value.length > 300) {
            console.log("Note empty or more then 300 symbols")
        }
        else {
            dispatch(addNoteAction({ value, weather }));
            setValue("");
        }
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>Add note...</label>
            <input
                style={{ borderColor: `${value.length > 300 ? "red" : "rgba(74, 84, 102, 0.39)"}` }}
                type="text"
                onChange={handleChange}
                placeholder=""
                value={value}
            />
            <label
                className="check-label"
                style={{ visibility: `${value.length > 300 ? "visible" : "hidden"}` }}>
                Note must be less then 300 symbols
            </label>
        </form>
    )
}
export default Input;