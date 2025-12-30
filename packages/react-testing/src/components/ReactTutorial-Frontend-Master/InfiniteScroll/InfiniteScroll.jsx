import React, { useLayoutEffect, useRef, useState } from 'react'

function Item(props) {
    const { data } = props;
    return <div style={{
        color: "black",
        border: "1px solid black",
        padding: '10px'
    }}>{data}</div>
}

function InfiniteScroll() {
    let inititalData = Array.from({ length: 20 }, (_, i) => i);
    const [data, setData] = useState(inititalData);


    const [loading, setLoading] = useState(false);

    const getMappedData = () => {
        return data.map((item) => <Item data={item} />);
    };
    const scrollRef = useRef(null);

    const loadMoreData = () => {
        setLoading(true);
        setTimeout(() => {
            setData((prev) => [...prev, ...Array.from({ length: 20}, (_, index) => index+1)]);
            setLoading(false);
        }, 2000);
    }
    useLayoutEffect(() => {
        const listener = (event) => {
           const scrollHeight = event.target.scrollHeight;
           const clientHeight = event.target.clientHeight;
           const scrollTop = event.target.scrollTop;

           const remainingHeight = scrollHeight - (clientHeight + scrollTop);
           if(remainingHeight < 100 && !loading) {
             loadMoreData();
           }
        }
        if(scrollRef.current) {
            scrollRef.current.addEventListener("scroll", listener)
        }
        return () => {
            scrollRef.current.removeEventListener("scroll", listener);
        }
    }, [scrollRef?.current]);

    const getLoadingJsx = () => {
        if(loading) {
            return <div>Loading...</div>
        }
        return null;
    }
    return (
        <div
        ref={scrollRef}
        style={{
            margin: 'auto',
            marginTop: "20px",
            width: "300px",
            height: "400px",
            backgroundColor: "lightyellow",
            overflow: "scroll",
            border: "2px solid black"
        }}>
            {
                getMappedData()
            }
            {
                getLoadingJsx()
            }
        </div>
    )
}

export default InfiniteScroll
