import React, { useState, useEffect, useRef } from "react";
import Subtopic from "./Subtopic";
import fitText from "../scripts/fittext";
import './Subtopic.css';

const pages = ["Basics", "Strings", "Lists", "Tuples", "Dictionaries", "Functions", "Classes"];
const n = pages.length;

const SubtopicsContainer = (props) => {
    const [ containerInit, setContainerInit ] = useState(false);
    const [ pageIndex, setPageIndex ] = useState(0);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setContainerInit(true);
            document.body.style.overflow = "auto";
        }, 100);

        return () => {
            if (timeoutID)
                clearTimeout(timeoutID);
        };
    }, []);

    useEffect(() => {
        fitText(document.getElementById("subtopic-circle"));
    });

    const nextPage = () => {
        setPageIndex((((pageIndex + 1) % n) + n) % n);
    };

    const prevPage = () => {
        setPageIndex((((pageIndex - 1) % n) + n) % n);
    };

    return (
        <div className={containerInit ? "sub-topics-container-disp" : "sub-topics-container"}>
            <div className="row">
                <div className="d-none d-lg-flex col-lg-4 col-md-3 justify-content-center align-items-center">
                    <button className="nav-button" onClick={ prevPage }>
                        <span className="material-icons large">arrow_back_ios</span>
                    </button>
                </div>
                <div className="d-flex col-lg-4 col-md-12 col-sm-12 col-12 justify-content-center">
                    {/* <div id="subtopic-circle" className="subtopic-circle">
                        <p className="text-content">{ pages[pageIndex] }</p>
                    </div> */}
                    <Subtopic showPage={ props.showPage }>{ pages[pageIndex] }</Subtopic>
                </div>
                <div className="d-none d-lg-flex col-lg-4 col-md-3 justify-content-center align-items-center">
                    <button className="nav-button" onClick={ nextPage }>
                        <span className="material-icons large">arrow_forward_ios</span>
                    </button>
                </div>
            </div>
            <div className="row d-sm-flex d-lg-none">
                <div className="d-flex col-sm-6 col-6 justify-content-center flex-fill">
                    <button className="nav-button-sm" onClick={ prevPage }>
                        <span className="material-icons large">arrow_back_ios</span>
                    </button>
                </div>
                <div className="d-flex col-sm-6 col-6 justify-content-center flex-fill">
                    <button className="nav-button-sm" onClick={ nextPage }>
                        <span className="material-icons large">arrow_forward_ios</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubtopicsContainer;