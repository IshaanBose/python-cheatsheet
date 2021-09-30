import React, { useState } from "react";
import './Subtopic.css';

const Subtopic = (props) => {
    const handleClick = () => {
        props.showPage({
            showPage: true,
            subject: props.children
        });
    };

    return (
        <div id="subtopic-circle" className="subtopic-circle" onClick={ handleClick }>
            <p className="text-content">{ props.children }</p>
        </div>
    );
};

export default Subtopic;