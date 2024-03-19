import React, { useState, useRef } from 'react';
import './App.css';

const SideNavItem = ({ title, helpText, tips }) => {
    const [currentTipIndex, setCurrentTipIndex] = useState(0);
    const tipsRef = useRef(tips); // Store tips data in a ref

    const handleNextTip = () => {
        const nextIndex = (currentTipIndex + 1) % tipsRef.current.length;
        setCurrentTipIndex(nextIndex);
    };

    const handlePreviousTip = () => {
        const prevIndex =
            currentTipIndex === 0 ? tipsRef.current.length - 1 : currentTipIndex - 1;
        setCurrentTipIndex(prevIndex);
    };

    const currentTip = tipsRef.current[currentTipIndex];

    return (
        <div onMouseEnter={() => { }} onMouseLeave={() => { }} className="sidenav-item">
            <h2>{title}</h2>
            <div className="tip-content">{currentTip && <p>{currentTip}</p>}</div>

            <div className="tip-buttons">
                <button onClick={handlePreviousTip} disabled={currentTipIndex === 0}>
                    Previous
                </button>
                <span>{currentTipIndex + 1}/{tipsRef.current.length}</span>
                <button onClick={handleNextTip} disabled={currentTipIndex === tipsRef.current.length - 1}>
                    Next
                </button>
            </div>
            {helpText && <span className="help-tips">{helpText}</span>}
        </div>
    );
};

export default SideNavItem;
