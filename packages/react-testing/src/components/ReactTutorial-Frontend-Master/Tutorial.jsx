import React, { useState } from "react";
import AutoComplete from "./AutoComplete";
// import DraggableListTest from "./DraggableList/DraggableListTest";
// import OtpWrapper from "./Practice/Otp";
// import Virtualisation from "./Practice/Virtualisation";
// import Inf from "./Practice/InfiniteScroll";
// import Popover from "./Practice/Popover";
// import Toggle from "./Practice/Toggle";
// import AccordionWrapper from "./Accordion";

function debounce(fn, delay) {
    let timeoutId = null;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
                fn(...args);
            }, delay);
    };
}

function throttle(fn, delay) {
  let lastExec = Date.now();
  return function(...args) {
    const diff = Date.now() - lastExec;
    if(diff >= delay) {
      lastExec = Date.now();
      fn(...args);
    }
  }
}

function Tutorial(props) {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const setDebouncedQuery = React.useCallback(throttle(setQuery, 3000), []);
    const handleChange = (e) => {
      setSearch(e.target.value);
      setDebouncedQuery(e.target.value);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <AutoComplete />
            
        </div>
    );
}

const Item = React.memo(function (props) {
    const { data } = props;
    const startTime = performance.now();
    while (performance.now() - startTime < 100) {
        null;
    }
    return <div>Filtered data: {data}</div>;
});

export default Tutorial;
