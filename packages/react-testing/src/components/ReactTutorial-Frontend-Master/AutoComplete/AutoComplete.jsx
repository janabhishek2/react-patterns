import React, { useEffect, useMemo, useState } from 'react'
import List from './ListComponent/List';
import './autoComplete.css';
import { getDebouncedFunction, getItems } from './helper';


function AutoComplete() {

    const [query, setQuery] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    // Created once and reused across renders, so every call shares the same
    // timeoutId closure and can cancel the previously scheduled call.
    // Only stable state setters are used inside, so an empty dependency list is safe.
    const debouncedFetchItems = useMemo(() => {
        async function fetchItems(q) {
            setLoading(true);
            const items = await getItems(q);
            setItems(items);
            setLoading(false);
        }
        return getDebouncedFunction(fetchItems, 2000);
    }, []);

    useEffect(() => {
        query.length > 0 && debouncedFetchItems(query);
    }, [query, debouncedFetchItems]);

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
        setShowOptions(true);
    }

    const handleClearQuery = () => {
        setQuery("");
    }

    // const filteredOptions = Items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

    const handleSelect= (option) => {
        setSelectedOption(option);
        setQuery(option);
        setShowOptions(false);
    };

    return (
        // wrapper
        // input
        // clear button
        // list
        // listItem

        <div className="autoCompleteWrapper">
            <div className='inputAndClear'>
                <input type="text" value={query} onChange={handleQueryChange} />
                <button onClick={handleClearQuery}>Clear!</button>
            </div>

            <div className='options'>
                {
                    loading && <div>Loading...</div>
                }
                { 
                    !!query.length && showOptions && !loading && <List options={items} handleSelect={handleSelect} selectedOption={selectedOption}/>
                }
            </div>

        </div>
    )
}

export default AutoComplete
