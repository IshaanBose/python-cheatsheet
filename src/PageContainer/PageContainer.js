import React, { useState, useEffect } from "react";
import BasicsPage from './ContentPages/BasicsPage';
import StringsPage from './ContentPages/StringsPage';
import './Page.css';

const PageContainer = (props) => {
    const [ pageInit, setPageInit ] = useState(false);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setPageInit(true);
        }, 100);

        return () => {
            if (timeoutID)
                clearTimeout(timeoutID);
        };
    }, []);

    const handleHidePage = () => {
        setPageInit(false);

        const timeoutID = setTimeout(() => {
            props.hidePage({
                showPage: false,
                subject: null
            });

            return () => {
                if (timeoutID)
                    clearTimeout(timeoutID);
            };
        }, 500);
    };

    const renderPage = (page) => {
        switch (page)
        {
            case "Basics" : return <BasicsPage hidePage={ handleHidePage } />;
            case "Strings" : return <StringsPage hidePage={ handleHidePage } />;

            default: return "";
        }
    }

    return (
        <div className={ pageInit ? "page-container" : "page-container-hide" }>
            <div className="page-content-container">
                { renderPage(props.subject) }
            </div>
        </div>
    );
};

export default PageContainer;