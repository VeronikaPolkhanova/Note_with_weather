import { useSelector, useDispatch } from 'react-redux';
import { DeleteNoteAction } from '../../store/actions';
import moment from 'moment';
import './style.css';

function Notes() {
    const dispatch = useDispatch();
    const DeleteNote = (id) => {
        dispatch(DeleteNoteAction(id))
    }

    const notes = useSelector(state => state);
    return (
        <div>
            {notes.length === 0
                ? <p>No notes</p>
                : notes.map(({ id, note, date, temperature, icon }) => <div className="note-item" key={id}>
                    <div className="note-text">
                        <p>{note}</p>
                    </div>
                    <div className="weather-container">
                        <div className="img-container">
                            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={`${icon}-icon`}></img>
                            </div>
                        <p>{Math.round(temperature - 273)}&#xb0;C</p>
                        <p>{moment(date).format("D MMM YYYY")}</p>
                        <p>{moment(date).format("HH:mm")}</p>
                    </div>
                    <span onClick={() => DeleteNote(id)} className="delete-btn">&#10005;</span>

                </div>)
            }
        </div>
    )
}
export default Notes;