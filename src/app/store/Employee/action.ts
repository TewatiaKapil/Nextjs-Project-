import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from "./type";


export const EmployeeCreate = ( item:any) => ({
    type: ADD_EMPLOYEE,
    payload: item
  });
  
  export const UpdateEmployee = ( updateitem:any) => ({
    type: UPDATE_EMPLOYEE,
    payload: updateitem
  });

  export const Delete = ( Id:any) => ({
    type: DELETE_EMPLOYEE,
    payload: Id
  });