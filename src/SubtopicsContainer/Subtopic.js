import React from "react";
import './Subtopic.css';

const Subtopic = (props) => {
    return (
        <div className="col-lg-4">
            <div className={ `topic-${ props.type.toLowerCase() }` }>
                <div className="text-content">{ props.type }</div>
            </div>
        </div>
    );
};

export default Subtopic;