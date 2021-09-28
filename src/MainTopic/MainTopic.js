import React, { useState } from "react";
import './MainTopic.css';

const MainTopic = (props) => {
    const [ isHover, setIsHover ] = useState(false);
    const [ isClicked, setIsClicked ] = useState(false);

    const handleMouseOver = () => {
        setIsHover(true);
    };

    const handleMouseOut = () => {
        setIsHover(false);
    };

    const handleOnClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            props.mainActive(false);
        }, 1200);
    };

    return (
        <div className="row" id="root-main">
            <div className="col-lg-4"></div>
            <div id="root" className="col-lg-4 col-sm-12 col-md-12">
                <div 
                    id="main-circle" 
                    className={ isClicked ? "main-circle animate-main-circle" : "main-circle main-circle-hover" }
                    onMouseOver={ handleMouseOver }
                    onMouseOut={ handleMouseOut }
                    onClick={ handleOnClick }>
                    <div 
                        id="main-text-content"
                        className={ isClicked ? "text-content text-content-hide" : "text-content"}>
                        <h1><b>Python Cheatsheet</b></h1>
                        <h4>By Ishaan Bose</h4>
                        <h4>Registration No.: 2147116</h4>
                        <br/><br/>
                        <span 
                            id="click-text" 
                            className={ isHover ? "click-text-disp" : "click-text" }>
                                Click to see cheat sheet!
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4"></div>
        </div>
    );
};

export default MainTopic;