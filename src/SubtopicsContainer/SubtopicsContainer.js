import React from "react";
import Subtopic from "./Subtopic";
import './Subtopic.css';

const SubtopicsContainer = () => {
    return (
        <div className="sub-topics-container-disp">
            <div className="row">
                <Subtopic type="Lists"/>
                <Subtopic type="Strings"/>
                <Subtopic type="Tuples"/>
            </div>
            <div className="row">
                <div className="col-lg-4"></div>
                <Subtopic type="Basics"/>
                <div className="col-lg-4"></div>
            </div>
            <div className="row">
                <Subtopic type="Classes"/>
                <Subtopic type="Functions"/>
                <Subtopic type="Dictionaries"/>
            </div>
        </div>
    );
};

export default SubtopicsContainer;