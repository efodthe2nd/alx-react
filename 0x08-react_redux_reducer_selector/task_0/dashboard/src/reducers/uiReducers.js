import * as actionTypes from '../actions/uiActionTypes';

export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
};

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: true,
            };
        case actionTypes.HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: false,
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true,
            };
        case actionTypes.LOGIN_FAILURE:
        case actionTypes.LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false,
            };
        default:
            return state;
        }
 };

 export default uiReducer;

