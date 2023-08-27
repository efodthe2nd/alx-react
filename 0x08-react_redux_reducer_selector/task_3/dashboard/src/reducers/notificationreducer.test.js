import notificationReducer, { initialNotificationState } from "./notificationreducer";

import { FETCH_NOTIFICATION_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";

describe('courseReducer', function() {
    it('initial_state', function(){
        const state = notificationReducer(undefined, {});
        expect(state).toEqual(initialNotificationState);
    });

    it('FETCH_NOTIFICATION_SUCCESS', function(){
        const action = {
            type: FETCH_NOTIFICATION_SUCCESS,
            data: [
                {
                    id: 1,
                    type: 'default',
                    value: 'New Course Available',
                },
                {
                    id: 2,
                    type: 'urgent',
                    value: 'New Course Available',
                },
                {
                    id: 3,
                    type: 'urgent',
                    value: 'New Course Available',
                },
            ],
        };
        const expectedData = {
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    type: 'default',
                    isRead: false,
                    value: 'New Course Available',
                },
                {
                    id: 2,
                    type: 'urgent',
                    isRead: false,
                    value: 'New Course Available',
                },
                {
                    id: 3,
                    type: 'urgent',
                    isRead: false,
                    value: 'New Course Available',
                },
            ],
        };

        const state = notificationReducer(undefined, action);
        expect(state).toEqual(expectedData);
    });

    it('MARK_AS_READ', function(){
        const initial_state = {
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    type: 'default',
                    isRead: false,
                    value: 'New Course Available',
                },
                {
                    id: 2,
                    type: 'urgent',
                    isRead: false,
                    value: 'New Course Available',
                },
                {
                    id: 3,
                    type: 'urgent',
                    isRead: false,
                    value: 'New Course Available',
                },
            ],
        };
        
        const action = {
            type: MARK_AS_READ,
            index: 2,
        };

        const expectedData = {
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    type: 'default',
                    isRead: false,
                    value: 'New Course Available',
                },
                {
                    id: 2,
                    type: 'urgent',
                    isRead: true,
                    value: 'New Course Available',
                },
                {
                    id: 3,
                    type: 'urgent',
                    isRead: false,
                    value: 'New Course Available',
                },
            ],
        };

        const state = notificationReducer(initial_state, action);
        expect(state).toEqual(expectedData);
    });

    it('SET_TYPE_FILTER', function(){
        const initial_state = {
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    type: 'default',
                    isRead: false,
                    value: 'New Course Available',
                },
                {
                    id: 2,
                    type: 'urgent',
                    isRead: false,
                    value: 'New Course Available',
                },
                {
                    id: 3,
                    type: 'urgent',
                    isRead: false,
                    value: 'New Course Available',
                },
            ],
        };
        
        const action = {
            type: SET_TYPE_FILTER,
            filter: 'URGENT',
        };

        const expectedData = {
            filter: 'URGENT',
            notifications: [
                {
                    id: 1,
                    type: 'default',
                    isRead: false,
                    value: 'New Course Available',
                },
                {
                    id: 2,
                    type: 'urgent',
                    isRead: false,
                    value: 'New Course Available',
                },
                {
                    id: 3,
                    type: 'urgent',
                    isRead: false,
                    value: 'New Course Available',
                },
            ],
        };

        const state = notificationReducer(initial_state, action);
        expect(state).toEqual(expectedData);
    });

})