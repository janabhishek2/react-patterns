import React, { useState } from 'react'
import NotificationContextProvider, { useNotifications } from './notification-context';

function Main() {
    return (
        <NotificationContextProvider>
            <MyTest />
        </NotificationContextProvider>       
    )
}

function MyTest() {
    const addNotification = useNotifications();
    function showToast() {
        addNotification({
            title: "A new notification",
            description: "New notificaiton desc",
            type: "info",
            position: "top-right"
        })
    }
    return (<button onClick={showToast}>Add Toast</button>)
}

export default Main
