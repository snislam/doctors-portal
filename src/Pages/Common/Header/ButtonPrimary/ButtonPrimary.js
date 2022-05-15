import React from 'react';

const ButtonPrimary = ({ href }) => {
    return (
        <div>
            <button to={href} className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0">Get Started</button>
        </div>
    );
};

export default ButtonPrimary;