import React, { useState, useEffect } from "react";
import Subtopic from "./Subtopic";
import './Subtopic.css';

const SubtopicsContainer = (props) => {
    const [ containerInit, setContainerInit ] = useState(false);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setContainerInit(true);
        }, 100);

        return () => {
            if (timeoutID)
                clearTimeout(timeoutID);
        };
    }, []);

    return (
        <div className={containerInit ? "sub-topics-container-disp" : "sub-topics-container"}>
            <div className="row">
                <div className="d-none d-lg-flex col-lg-3 col-md-3">
                    <button className="btn btn-primary">&lt;</button>
                </div>
                <div className="d-flex col-lg-6 col-md-3">
                    <h1><span style={{ "color": "white" }}>HALSO</span></h1>
                </div>
                <div className="d-none d-lg-flex col-lg-3 col-md-3">
                    <button className="btn btn-primary">&gt;</button>
                </div>
            </div>
            <div className="row d-sm-flex d-lg-none">
                <div className="col-sm-6 col-6">
                    <button className="btn btn-primary">&lt;</button>
                </div>
                <div className="col-sm-6 col-6">
                    <button className="btn btn-primary">&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default SubtopicsContainer;