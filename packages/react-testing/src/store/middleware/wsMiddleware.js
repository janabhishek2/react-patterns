import { connectWs, disconnecdWs, messageReceived } from '../slices/webSocketSlice';

export const createWebSocketMiddleWare = (wsUrl) => {
    let socketConnection = null;

    return (store) => (next) => (action) => {
        switch(action.type) {
            case "ws/start": {
                if(!socketConnection) socketConnection?.close();

                socketConnection = new WebSocket(wsUrl);

                socketConnection.onopen = function() {
                    store.dispatch(connectWs());
                }

                socketConnection.onmessage = function(event) {
                    const data = event.data;
                    store.dispatch(messageReceived(data));
                }

                socketConnection.onclose = function() {
                    store.dispatch(disconnecdWs());
                }

                break;
            }

            case "ws/send": {
                if(socketConnection && socketConnection.readyState === WebSocket.OPEN) {
                    socketConnection.send(action.payload);
                }
                break;
            }

            case "ws/stop": {
                if(socketConnection && socketConnection.readyState === WebSocket.OPEN) {
                    socketConnection.close()
                    socketConnection = null;
                }

                break;
            }
        }
        return next(action);
    }
}