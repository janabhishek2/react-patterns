import React, { useEffect, useState } from 'react';
import { addUser } from '../../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTodosQuery } from '../../store/slices/todosSlice';
import store from '../../store/store';

function ReactRedux() {

    const dispatch = useDispatch();

    const wsData = useSelector(state => state.ws);
    console.log(wsData);

    const [message, setMessage] = useState("");

    useEffect(() => {
        dispatch({
            type: "ws/start"
        });

    }, []);

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    }

    const handleClick = () => {
        if(wsData?.status === "connected") {
            dispatch({
                type: "ws/send",
                payload: message
            })
        }
    }
    
    return (
        <div>
            <div>
                <span>Enter the data to send to server: </span>
                <input type="text" value={message} onChange={handleInputChange} />
                <button onClick={handleClick}>Send to server!!</button>
            </div> 
            <br />
            <div>
               ------ Data from server ------
                <ul>
                    {
                        wsData.messages.map(item => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ReactRedux
