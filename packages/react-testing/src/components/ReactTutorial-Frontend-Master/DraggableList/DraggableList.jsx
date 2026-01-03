import React, { useState } from "react";
import "./DraggableList.css";

let initialList = Array.from({ length: 30 }, (v, i) => i);

function Item({ data, index, setFromIndex, setToIndex, fromIndex, toIndex, moveItems }) {
    
    function reset() {
        setFromIndex(-1);
        setToIndex(-1);
    }

    let cls = "item";

    if(toIndex === index) {
        cls += " drag-to";
    }

    if(fromIndex === index){ 
        cls += " drag-from"
    }

    return (
        <div draggable className={cls} key={index}
        onDragStart={(e) => {
            e.dataTransfer.setData("text/plain", e.target.innerHTML);
            // e.target.style.backgroundColor = "maroon";
            setFromIndex(index);
            
            const original = e.target;
            const dragImage = original.cloneNode(true);

            dragImage.style.position = "absolute";
            dragImage.style.backgroundColor = "lightblue";
            dragImage.style.opacity = "0.8";
            dragImage.style.top = "-1000px";
            dragImage.style.left = "-1000px";

            document.body.appendChild(dragImage);

            dragImage.style.width = "200px";
            e.dataTransfer.setDragImage(dragImage, 200, 0);

            setTimeout(() => {
                document.body.removeChild(dragImage);
            })
        }}
        onDragEnd={() => {
            reset();
        }}
        onDragOver={(e) => {
            e.preventDefault();
            setToIndex(index);
        }}
        onDrop={(e) => {
            e.preventDefault();
            moveItems();
            reset();
        }}
        >
            {data}
        </div>
    );
}

function DraggableList() {
    const [data, setData] = useState(initialList);

    const [fromIndex, setFromIndex] = useState(-1);
    const [toIndex, setToIndex] = useState(-1);


    function moveItems() {
        if(fromIndex !== -1 && toIndex !== -1) {
            const newArr = [...data];
            
            // remove 1 element from index fromIndex
            const item = newArr.splice(fromIndex, 1);
            // add 1 element to toIndex

            newArr.splice(toIndex, 0, item);
            setData(newArr);
        }
    }

    const getListItems = () => {
        return data.map((item, index) => <Item moveItems={moveItems} fromIndex={fromIndex} toIndex={toIndex} data={item} key={item} index={index} setFromIndex={setFromIndex} setToIndex={setToIndex}/>);
    };

    return (
        <div className="wrapper">
            <div className="list-wrapper">{getListItems()}</div>
        </div>
    );
}

export default DraggableList;
