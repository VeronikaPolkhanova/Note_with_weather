import { ADD_NOTE, DELETE_NOTE } from './actions';

const defaultState = [
    {
        id: 1,
        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at sem bibendum, lobortis diam hendrerit, rutrum lacus.",
        date: new Date("November 2, 2025 15:16:00"),
        temperature: 280,
        icon: "10d",
    }
]
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            if (action.payload.value === undefined || action.payload.value === "" || action.payload.value === null || action.payload.value.length > 300 || action.payload.data === undefined)
                return state
            else
                return [...state, {
                    id: state.length + 1,
                    note: action.payload.value,
                    date: new Date(),
                    temperature: action.payload.data.main.feels_like,
                    icon: action.payload.data.weather[0].icon
                    }
                ];

        case DELETE_NOTE:
            return state.filter(it => it.id !== action.payload);

        default:
            return state;
    }
}
export default reducer;