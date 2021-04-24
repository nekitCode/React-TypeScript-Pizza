import React from 'react';

interface BtnProps {
    className: string;
    outline: boolean;
    children?: React.ReactChild | React.ReactNode;
}

const Button: React.FC<BtnProps> = ({outline, children, className}) => {
    return (
        <>
            <button
                className={`button ${className} ${outline ? 'button--outLine' : ''}`}
            >
                {children}
            </button>
        </>
    );
}

export default Button;
