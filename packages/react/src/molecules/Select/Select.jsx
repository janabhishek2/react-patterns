import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import '@react-patterns/scss/lib/CustomSelect.css';
import Down from './Down';
import Up from './Up';

const Select = (props) => {
    const { onOptionSelect: optionSelectCallback, options, label } = props;

    const onOptionSelect = (option, index) => {
        optionSelectCallback(option, index);
    };

    const [open, setIsOpen] = useState(false);
    const triggerbuttonRef = useRef(null);
    const [triggerButtonHeight, setTriggerButtonHeight] = useState(0);

    console.log(triggerButtonHeight);
    const toggleOpen = () => {
        setIsOpen(!open);
    }

    useEffect(() => {
        if(triggerbuttonRef?.current) {
            setTriggerButtonHeight(triggerbuttonRef?.current?.offsetHeight);
        }
    }, [triggerbuttonRef?.current]);

    return (
        <div className='dse-select'>
            <button ref={triggerbuttonRef} className='dse-select__label' onClick={toggleOpen}>
                <span>
                    {label}
                </span>
                <span>
                    {
                        open ? (<Up width="1rem" height="1rem" />): (<Down width="1rem" height="1rem" />)
                    }
                </span>
            </button>
            {
                open && (
                    <ul className='dse-select__overlay' style={{
                        top: triggerButtonHeight
                    }}>
                        {
                            options.map((option, index) => {
                                const { label, value } = option;
                                return <li className='dse-select__list-item' onClick={() => onOptionSelect(option, index)} key={value}>{label}</li>
                            })
                        }
                    </ul>
                )
            }
        </div>
    );
};

Select.propTypes = {
    onOptionSelect: PropTypes.func,
    options: PropTypes.array,
    label: PropTypes.string
}

Select.defaultProps = {
    onOptionSelect: () => {},
    options: [],
    label: "Select"
}

export default Select;
