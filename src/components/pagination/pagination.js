import React from "react";
import "./pagination.css";

const Pagintaion = ({pages, currentPage, setCurrentPage}) => {

    let pageNums = [];
    for (let i = 1; i < pages; i++) {
        pageNums.push({id: i})
    }

    const back = () => {
        setCurrentPage(currentPage - 1);
    }

    const next = () => {
        setCurrentPage(currentPage + 1)
    }

    return (
        <div className="page-numbers">
            <div className="page-numbers">
                {currentPage > 1 ? <div onClick={back} className="navigation-button"><span>Back</span></div> : null}
                <div className="titles">{currentPage}</div>
                {currentPage < 500 || pages !== 1 ? <div onClick={next} className="navigation-button"><span>Next</span></div> : null}
            </div>
        </div>
    )
}

export default Pagintaion;