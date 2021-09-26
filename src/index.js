import React, { useState } from "react";
import ReactDOM from "react-dom";
import MainTopic from "./MainTopic/MainTopic";
import SubtopicsContainer from "./SubtopicsContainer/SubtopicsContainer";
import PageContainer from "./PageContainer/PageContainer";
import './index.css';

const secondaryBgColour = "rgb(0, 0, 51)";

const Root = () => {
    const [ mainActive, setMainActive ] = useState(true);
    const [ page, setPage ] = useState({ showPage: false, subject: null });

    const handleMainActive = (val) => {
        document.body.style.backgroundColor = secondaryBgColour;
        setMainActive(val);
    };

    const handlePage = (val) => {
        setPage(val);
    };

    return (
        <div>
            { page.showPage && <PageContainer subject={ page.subject } hidePage={ handlePage } /> }
            { mainActive && <MainTopic mainActive={ handleMainActive }/> }
            { !mainActive && <SubtopicsContainer showPage={ handlePage } /> }
        </div>
    );
};

ReactDOM.render(<Root/>, document.getElementById("root"));