import React from 'react';
import drupalLogo from "../../../../assets/images/drup.png"

const DefaultComponent = () => {
    return (
        <div className="react-component">
            Default React Component
            <img src={drupalLogo} />
        </div>
    );
};

export default DefaultComponent;