import React, { useState } from "react";
import ReactDOM from "react-dom";
import MainTopic from "./MainTopic/MainTopic";
import SubtopicsContainer from "./SubtopicsContainer/SubtopicsContainer";
import './index.css';

const primaryBgColour = "rgb(144, 238, 144)";
const secondaryBgColour = "rgb(0, 0, 51)";

const Root = () => {
    const [ mainActive, setMainActive ] = useState(true);

    const handleMainActive = (val) => {
        document.body.style.backgroundColor = secondaryBgColour;
        setMainActive(val);
    };

    return (
        <div>
            { mainActive && <MainTopic mainActive={ handleMainActive }/> }
            { !mainActive && <SubtopicsContainer /> }
        </div>
    );
};

ReactDOM.render(<Root/>, document.getElementById("root"));