import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from "./type";


const initialState = {
    items: []
}

const EmployeeReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_EMPLOYEE:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                items: state.items.map((item, index) =>
                    index === action.payload.index ? action.payload : item
                )
            };
        case DELETE_EMPLOYEE:
            const newItems = [...state.items];
            newItems.splice(action.payload, 1);
            return {
                ...state,
                items: newItems,
            };



        default:
            return state
    }
}

export default EmployeeReducer;