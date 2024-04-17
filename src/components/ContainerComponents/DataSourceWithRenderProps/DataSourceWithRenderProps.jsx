import React, { useState, useEffect } from "react";

function DataSourceWithRenderProps({ render = () => <></>, getData = () => {} }) {
    const [data, setData] = useState({});

    const fetchAndSetData = async () => {
        const res = await getData();
        setData(res);
    };
    useEffect(() => {
        fetchAndSetData();
    }, [getData]);

    return render(data);
}

export default DataSourceWithRenderProps;
