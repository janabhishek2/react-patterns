import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "@react-patterns/scss/lib/CustomSelect.css";
import Down from "./Down";
import Up from "./Up";
import Tick from "./Tick";
import Text from "@react-patterns/react/src/atoms/Text";

const Select = (props) => {
    const { onOptionSelect: optionSelectCallback, options, label, defaultSelected = null } = props;

    /* States for the Select */

    const [open, setIsOpen] = useState(false);
    const triggerbuttonRef = useRef(null);
    const [triggerButtonHeight, setTriggerButtonHeight] = useState(0);
    const [selectedOption, setSelectedOption] = useState(defaultSelected ? options.find(item => item.value.toLowerCase() === defaultSelected) : null);

    /* Event handlers */

    const onOptionSelect = (option, index) => {
        setSelectedOption(option);
        setIsOpen(false);

        if(optionSelectCallback) {
            optionSelectCallback(option, index);
        }
    };

    const toggleOpen = () => {
        setIsOpen(!open);
    };

    /* Side Effects */

    useEffect(() => {
        if (triggerbuttonRef?.current) {
            setTriggerButtonHeight(triggerbuttonRef?.current?.offsetHeight);
        }
    }, [triggerbuttonRef?.current]);

    
    /* Function variables */
    let selectedOptionLabel = "";
    if(selectedOption) {
        selectedOptionLabel = selectedOption?.label;
    }
    
    return (
        <div className="dse-select">
            <button
                ref={triggerbuttonRef}
                className="dse-select__label"
                onClick={toggleOpen}
            >
                <Text>
                {
                    selectedOption ? selectedOptionLabel : label
                }
                </Text>
                <span>
                    {open ? (
                        <Up width="1rem" height="1rem" />
                    ) : (
                        <Down width="1rem" height="1rem" />
                    )}
                </span>
            </button>
            {open && (
                <ul
                    className="dse-select__overlay"
                    style={{
                        top: triggerButtonHeight,
                    }}
                >
                    {options.map((option, index) => {
                        const { label, value } = option;
                        return (
                            <li
                                className={
                                    selectedOption?.value === value
                                        ? "dse-select__list-item--selected"
                                        : "dse-select__list-item"
                                }
                                onClick={() => onOptionSelect(option, index)}
                                key={value}
                            >
                                <span>{label}</span>
                                {selectedOption?.value === value && (
                                    <span>
                                        <Tick width="1.5rem" height="1rem"  />
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

Select.propTypes = {
    onOptionSelect: PropTypes.func,
    options: PropTypes.array,
    label: PropTypes.string,
    defaultSelected: PropTypes.string
};

Select.defaultProps = {
    onOptionSelect: () => {},
    options: [],
    label: "Select",
    defaultSelected: null
};

export default Select;
