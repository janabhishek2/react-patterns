import React, { useState, useTransition } from "react";
import PropTypes from "prop-types";

function Tutorial(props) {
    const [isTransitionPending, startTransition] = useTransition();
    const [search, setSearch] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
        // Low priority update
        startTransition(() => {
            setList([...new Array(100)]);
        })
    };

    const renderList = () =>
        list.map((list, key) => {
            return <Item data={key} key={key} />;
        });

    return (
        <>
            {/* input */}
            <div>
                <input type="text" value={search} onChange={handleChange} />
            </div>

            {isTransitionPending && <span>Loading!..</span>}
            {!isTransitionPending && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {renderList()}
                </div>
            )}
        </>
    );
}

function Item(props) {
    const { data } = props;
    const startTime = performance.now();
    while (performance.now() - startTime < 10) {
        null;
    }
    return <div>{data * Math.random()}</div>;
}

export default Tutorial;
