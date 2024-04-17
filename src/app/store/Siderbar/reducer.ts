import { SHOW_HIDE_SIDERBAR } from "./type";

const initialState = {
  isVisible: true
};


const SidebarReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_HIDE_SIDERBAR:
      return {
        ...state,
        isVisible: !state.isVisible
      };
    default:
      return state;

  }
}
export default SidebarReducer;