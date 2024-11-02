import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "@react-patterns/scss/lib/CustomSelect.css";
import Down from "./Down";
import Up from "./Up";
import Tick from "./Tick";
import Text from "@react-patterns/react/src/atoms/Text";
import Color from "@react-patterns/react/src/atoms/Color";
import Margin from "@react-patterns/react/src/atoms/Margin";

const Select = (props) => {
    const { onOptionSelect: optionSelectCallback, options, label, defaultSelected = null, renderOption } = props;

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
            setTriggerButtonHeight((triggerbuttonRef?.current?.offsetHeight|| 0) + 10);
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
                        const isSelected = selectedOption?.value === value;

                        {/* Render props pattern */}
                        if(renderOption) {
                            {/* Get props pattern in getOptionRecommendedProps */}
                            let renderOptionProps = {
                                option,
                                isSelected,
                                getOptionRecommendedProps: (overrideProps = {}) => {
                                    return {
                                        className: isSelected ? "dse-select__list-item--selected" : "dse-select__list-item",
                                        key: value,
                                        onClick: () => onOptionSelect(option, index),
                                        ...overrideProps
                                    }
                                }
                            };
                            return renderOption(renderOptionProps);
                        }

                        
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
                                <span className="dse-select__list-item__label">
                                    <Color hexCode={value.toLowerCase()} width="sm" height="sm"></Color>
                                    <Margin left="sm">{label}</Margin>
                                </span>
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
    defaultSelected: PropTypes.string,
    renderOption: PropTypes.func
};

Select.defaultProps = {
    onOptionSelect: () => {},
    options: [],
    label: "Select",
    defaultSelected: null,
    renderOption: undefined
};

export default Select;
