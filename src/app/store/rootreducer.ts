import { combineReducers } from "redux";
import EmployeeReducer from "./Employee/reducer";
import SidebarReducer from "./Siderbar/reducer";
import EmployeeModalReducer from "./EmployeeModal/reducer";



export default combineReducers({
    Employee: EmployeeReducer,
    Sidebar: SidebarReducer,
    Modal: EmployeeModalReducer
})