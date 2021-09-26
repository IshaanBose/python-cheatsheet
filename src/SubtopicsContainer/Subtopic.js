import React, { useState } from "react";
import './Subtopic.css';

const Subtopic = (props) => {
    const [ isHover, setIsHover ] = useState(false);

    const handleMouseOver = () => {
        setIsHover(true);
    };

    const handleMouseOut = () => {
        setIsHover(false);
    };

    const handleClick = () => {
        props.showPage({
            showPage: true,
            subject: props.type
        });
    };

    const getTextContentHoverClass = () => {
        switch (props.type)
        {
            case "Functions" : return "text-content-hover-funcs";
            case "Dictionaries" : return "text-content-hover-dicts";
            default: return "text-content-hover-gen";
        }
    };

    return (
        <div className="col-lg-4">
            <div 
                className={ `topic-${ props.type.toLowerCase() }` }
                onMouseOver={ handleMouseOver }
                onMouseOut={ handleMouseOut }
                onClick={ handleClick } >
                <div className={ isHover ? getTextContentHoverClass() : "text-content" }>
                        { props.type }
                </div>
            </div>
        </div>
    );
};

export default Subtopic;