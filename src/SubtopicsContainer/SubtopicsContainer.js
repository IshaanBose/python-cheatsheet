import React, { useState, useEffect } from "react";
import Subtopic from "./Subtopic";
import fitText from "../scripts/fittext";
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

    useEffect(() => {
        fitText(document.getElementById("subtopic-circle"));
    });

    return (
        <div className={containerInit ? "sub-topics-container-disp" : "sub-topics-container"}>
            <div className="row">
                <div className="d-none d-lg-flex col-lg-4 col-md-3 justify-content-center">
                    <button className="btn btn-primary">&lt;</button>
                </div>
                <div className="d-flex col-lg-4 col-md-12 col-sm-12 col-12 justify-content-center">
                    <div id="subtopic-circle" className="subtopic-circle">
                        <p className="text-content">Basics</p>
                    </div>
                </div>
                <div className="d-none d-lg-flex col-lg-4 col-md-3 justify-content-center">
                    <button className="btn btn-primary">&gt;</button>
                </div>
            </div>
            <div className="row d-sm-flex d-lg-none">
                <div className="d-flex col-sm-6 col-6 justify-content-center">
                    <button className="btn btn-primary">&lt;</button>
                </div>
                <div className="d-flex col-sm-6 col-6 justify-content-center">
                    <button className="btn btn-primary">&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default SubtopicsContainer;