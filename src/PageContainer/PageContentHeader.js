import React from "react";

const PageContentHeader = (props) => {
    const handleClick = () => {
        props.hidePage();
    };

    return (
        <div>
            <p><span className="link" onClick={ handleClick }>&lt; Go Back</span></p>
            <h1 className="display-2 fw-bold text-decoration-underline">{ props.children }</h1>
        </div>
    );
};

export default PageContentHeader;