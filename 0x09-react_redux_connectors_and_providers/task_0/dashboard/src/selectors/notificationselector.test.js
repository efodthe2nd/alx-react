import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationselector";
import { markAsRead } from '../actions/notificationActionCreators';
import { notificationReducer } from '../reducers/notificationreducer';
import { notificationsNormalizer } from '../schema/notifications';
import { Map } from 'immutable';

const initialState = Map({
    notifications: [],
    filter: 'DEFAULT',
});

const returnState = {
    filter: 'DEFAULT',
    notifications: [
        {
            id: 1,
            isRead: false,
            type: 'default',
            value: 'New Course Available',
        },
        {
            id: 2,
            isRead: false,
            type: 'urgent',
            value: 'New Course Available',
        },
        {
            id: 3,
            isRead: false,
            type: 'urgent',
            value: 'New Course Available',
        },
    ],
};

describe('tests for notificationSelector', function(){
    it('returns filter as expected', ()=> {
        const filter = filterTypeSelected(initialState);
        expect(filter).toEqual('DEFAULT');
    });

    it('returns notifications as expected', () => {
        const notifications = notificationsNormalizer(returnState);
        expect(getNotifications(notifications)).toEqual( notifications.notifications );
    });
});







