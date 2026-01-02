import React, {
    forwardRef,
    useEffect,
    useRef,
    useState,
} from "react";

const Item = forwardRef((props, ref) => {
    const { data, index } = props;
    return (
        <div
            id={`item-${index}`}
            ref={ref}
            style={{
                color: "black",
                border: "1px solid black",
                padding: "10px",
            }}
        >
            {data}
        </div>
    );
});
function InfiniteScrollIntersectionObserver() {
    let inititalData = Array.from({ length: 20 }, (_, i) => i);
    const [data, setData] = useState(inititalData);
    const elementsRef = useRef([]);
    const [loading, setLoading] = useState(false);

    const getMappedData = () => {
        return data.map((item, index) => (
            <Item
                index={index}
                key={index}
                data={item}
                ref={(el) => elementsRef.current[index] = el}
            />
        ));
    };

    const loadMoreData = () => {
        setLoading(true);
        setTimeout(() => {
            let prevN = data.length;
            setData((prev) => [
                ...prev,
                ...Array.from({ length: 20 }, (_, index) => index + prevN + 1),
            ]);
            setLoading(false);
        }, 2000);
    };


    useEffect(() => {
        if (elementsRef.current?.length >= 0) {
            const observer = new IntersectionObserver(function (entries) {
                entries.forEach((entry) => {
                    if( entry.isIntersecting) {
                        observer.unobserve(entries[0].target)
                        loadMoreData();
                    }
                })
            }, {});

            observer.observe(elementsRef.current.at(-1));
        }
    }, [data]);

    const getLoadingJsx = () => {
        if (loading) {
            return <div>Loading...</div>;
        }
        return null;
    };
    return (
        <div
            style={{
                margin: "auto",
                marginTop: "20px",
                width: "300px",
                height: "400px",
                backgroundColor: "lightyellow",
                overflow: "scroll",
                border: "2px solid black",
            }}
        >
            {getMappedData()}
            {getLoadingJsx()}
        </div>
    );
}

export default InfiniteScrollIntersectionObserver;
