import uiReducer, { initialState } from "./uiReducers";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe("reducers", function(){
    it("initial state", function(){
        const state = uiReducer(undefined, {});
        expect(state).toEqual(initialState);
    });
    it("SELECT_COURSE", function(){
        const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
        expect(state).toEqual(initialState);
    });
    it("DISPLAY_NOTIFICATION_DRAWER", function(){
        const state = uiReducer(undefined, { type: 'DISPLAY_NOTIFICATION_DRAWER' });
        expect(state).toEqual(
            {
                ...state,
                isNotificationDrawerVisible: true,
            });
    });
});