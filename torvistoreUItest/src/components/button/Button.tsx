import React from 'react';

interface Props {
    /**
    * Text of the button
    */
    label: string;
    /**
    * Color styles of the button
    */
    type?: 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-info';
    /**
    * Task of the button
    */
    buttonType?: 'submit' | 'button';
    /**
    * All width of the button
    */
    full?: boolean;
    /**
    * Style outline
    */
    outline?: boolean;
    ariaHaspopup?: string;
    onClick: Function;
}

const Button = ({
    label,
    type = 'btn-primary',
    buttonType = 'button',
    full = false,
    outline = false,
    ariaHaspopup,
    onClick,
    ...props // Resto de las props
}: Props) => {
    const containerStyle = full ? { width: '100%', display: 'flex' } : {};

    return (
        <div style={containerStyle}>
            <button
                className={''}
                type={buttonType}
                onClick={() => {
                    onClick()
                }}
                {...props}
            >
                <p>
                    {label}
                </p>
            </button>
        </div>
    );
}

export default Button;