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
                <Subtopic type="Lists" showPage={ props.showPage } />
                <Subtopic type="Strings" showPage={ props.showPage } />
                <Subtopic type="Tuples" showPage={ props.showPage } />
            </div>
            <div className="row">
                <div className="col-lg-4"></div>
                <Subtopic type="Basics" showPage={ props.showPage } />
                <div className="col-lg-4"></div>
            </div>
            <div className="row">
                <Subtopic type="Classes" showPage={ props.showPage } />
                <Subtopic type="Functions" showPage={ props.showPage } />
                <Subtopic type="Dictionaries" showPage={ props.showPage } />
            </div>
        </div>
    );
};

export default SubtopicsContainer;