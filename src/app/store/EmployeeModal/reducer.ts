import { MODAL_DETAILS } from "./type";

const initialState = {}

const EmployeeModalReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case MODAL_DETAILS:
            return action.payload
        default:
            return state
    }
}

export default EmployeeModalReducer;