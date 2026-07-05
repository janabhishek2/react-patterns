import React, { useLayoutEffect, useState } from 'react'
import './list.css';

function Item(props) {

    const { data, index, setFromIndex, setToIndex, setItems, items, fromIndex, toIndex, ...rest } = props;

    const [isDragOver, setIsDragOver] = useState(false);
    const reset = () => {
        setFromIndex(-1);
        setToIndex(-1);
    }

    const classes = "list-item " + (fromIndex === index ? " drag-from ": "") + (isDragOver ? " drag-to ": "") ;

    return <div 
    draggable
    onDragStart={() => {
        setFromIndex(index);
    }}
    onDragOver={(e) => {
        e.preventDefault();
        setIsDragOver(true);
    } }
    onDragLeave={(e) => {
        setIsDragOver(false);
    }}
    onDrop={() => {
        setToIndex(index);
        // swap the from and toIndex

        const arr = [...items];

        let temp = arr[fromIndex];
        arr[fromIndex] = arr[index];
        arr[index] = temp;
        // replace state

        setItems(arr);
        setIsDragOver(false);
    }}
    onDragEnd={() => {
        reset()
        setIsDragOver(false);
    }}
    className={classes}
    >{data}</div>
}

let initItems = Array.from({ length: 10 }, (_,i) => i);

function List(props) {
    const { items, ...rest } = props;
    return <div className='list-wrapper'>
        {
            items.map((item, key) => {
                return <Item items={items} index={key} data={item} key={key} {...rest}/>
            })
        }
    </div>
}

function DraggableListTest() {
    const [items, setItems] = useState(initItems);
    const [fromIndex, setFromIndex] = useState(-1);
    const [toIndex, setToIndex] = useState(-1);

    console.log(fromIndex, toIndex);
    return (
        <div>
            <List items={items} setItems={setItems} fromIndex={fromIndex} toIndex={toIndex} setFromIndex={setFromIndex} setToIndex={setToIndex}/>
        </div>
    )
}

export default DraggableListTest
