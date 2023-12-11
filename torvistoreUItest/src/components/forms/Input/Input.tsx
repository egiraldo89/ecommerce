import React, { useState, useEffect } from 'react';
import styles from './Input.module.scss';

interface Props {
    /**
    * Color of the border
    */
    inputColor?: 'input-primary' | 'input-secondary' | 'input-success' | 'input-danger' | 'input-warning' | 'input-info' | '';
    /**
    * Text to show
    */
    label: string;
    type?: string;
}

const Input = ({
    type = 'text',
    label,
    inputColor = '',
}: Props) => {
    // const combinedStyles = `${styles[fontStyle]} xBig ${styles[color]}`;
    const [focused, setFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        if (inputValue === '') {
            setFocused(false);
        }
    };

    useEffect(() => {
        handleBlur();
    }, []); // Se ejecuta solo al montar el componente

    return (
        <div className={`${styles['floating-label-input']} ${focused || inputValue !== '' ? styles.focused : ''}  ${styles[inputColor]}`}>
            <label htmlFor="input">{focused || inputValue === '' ? label : ''}</label>
            <input
                type={type}
                id="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
            />
        </div>
    );
};

export default Input;