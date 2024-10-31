import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
    const { onOptionSelect: optionSelectCallback, options, label } = props;

    const onOptionSelect = (option, index) => {
        optionSelectCallback(option, index);
    };

    const [open, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!open);
    }

    return (
        <div>
            <button onClick={toggleOpen}>{label}</button>
            {
                open && (
                    <ul>
                        {
                            options.map((option, index) => {
                                const { label, value } = option;
                                return <li onClick={() => onOptionSelect(option, index)} key={value}>{label}</li>
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
