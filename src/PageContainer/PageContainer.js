import React, { useState, useEffect, useRef } from "react";
import BasicsPage from './ContentPages/BasicsPage';
import StringsPage from './ContentPages/StringsPage';
import ListsPage from "./ContentPages/ListsPage";
import TuplesPage from "./ContentPages/TuplesPage";
import DictionariesPage from "./ContentPages/DictionariesPage";
import PageContentHeader from "./PageContentHeader";
import './Page.css';

const PageContainer = (props) => {
    const [ pageInit, setPageInit ] = useState(false);
    const [ showFloatingButton, setShowFloatingButton ] = useState(false);
    const scrollRef = useRef(0);

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

    const handleOnScroll = ({ target }) => {
        let b = document.body;
        let currScroll = ((target.scrollTop || b["scrollTop"]) / ((target.scrollHeight || b["scrollHeight"]) - target.clientHeight)) * 100;

        if (scrollRef.current - currScroll > 0)
        {
            scrollRef.current = currScroll;
            setShowFloatingButton(true);
        }
        else
        {
            scrollRef.current = currScroll;
            setShowFloatingButton(false);
        }
    };

    const renderPage = (page) => {
        switch (page)
        {
            case "Basics" : return <BasicsPage />;
            case "Strings" : return <StringsPage />;
            case "Lists" : return <ListsPage />;
            case "Tuples": return <TuplesPage />;
            case "Dictionaries": return <DictionariesPage />;

            default: return "";
        }
    }

    return (
        <div 
            id="page-container" 
            className={ pageInit ? "page-container" : "page-container-hide" } 
            onScroll={handleOnScroll}>
            <div className="page-content-container">
                <PageContentHeader hidePage={ handleHidePage }>{ props.subject }</PageContentHeader>
                { renderPage(props.subject) }
                <a 
                    href="#top" 
                    className={showFloatingButton ? "floating-button-container" : "floating-button-container-hide" }>
                    <button className="floating-button">
                        <span className="material-icons">arrow_upward</span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default PageContainer;