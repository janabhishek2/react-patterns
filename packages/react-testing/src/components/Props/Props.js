import React, { useState } from "react";
import Child from "./Child";
import './props.css';

function Props() {
    const data = [1, 2, 3, 4];
    return (
        <div>
            <List
                data={data}
            >
                {
                (itemData, index) => {
                    return <ListWithButton data={itemData} index={index} />;
                }
                }
            </List>
            <List data={data} />
        </div>
    );
}

function ListWithButton({ data, index }) {

    const handleClick =()=> {
        console.log(data, 'is clicked');
    }
    return (
        <div className="item" key={index}>
            {data}
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
}

function List({ data, children }) {

    return (<div className="wrapper">
        {data.map((item, index) => {
            if (children && typeof children === "function") {
                return children(item, index);
            }
            return (
                <div key={index} className="item">
                    {item}
                </div>
            );
        })}
    </div>);
}

export default Props;
