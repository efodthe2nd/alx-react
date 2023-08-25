import { set } from "lodash";
import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsRead = (index) => {
    return {
        type: MARK_AS_READ,
        index: index,
    };
};

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));

export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter: NotificationTypeFilters[filter],
    };
};

export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));