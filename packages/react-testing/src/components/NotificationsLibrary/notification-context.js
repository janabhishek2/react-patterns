import React, { useCallback, useContext, useState } from "react";
import NotificationsLibrary from "./NotificationsLibrary";

const NotificationContext = React.createContext(null);

export const useNotifications = () => useContext(NotificationContext);

const NotificationContextProvider = ({children}) => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = useCallback((notif) => {
        const newNotification = {
            ...notif,
            id: Date.now(),
        }
        setNotifications((prev) => [
            newNotification,
            ...prev
        ])
    }, []);

    const renderNotifications = () => {
        return notifications.map((notif) => {
            return <NotificationsLibrary {...notif} key={notif.id} />
        });
    }

    return <NotificationContext.Provider value={addNotification}>
        {children}
        <div className="toast-container">
            {renderNotifications()}
        </div>
    </NotificationContext.Provider>
}

export default NotificationContextProvider;
