import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { context } from "../../../App";
import "./MainContentRight.css";

const MainContentRight = ({ data }) => {
    const { getSearchTerm } = React.useContext(context);
    
    const [pageNumber, setPageNumber] = useState(0);
    
    const itemsPerPage = 8;
    const pagesVisited = pageNumber * itemsPerPage;
    
    const displayItems = data.slice(pagesVisited, pagesVisited + itemsPerPage);
    
    const pageCount = Math.ceil(data.length / itemsPerPage);
    
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    
	return (
        <div className="main-content-right">
            <div className="row">
            {
                displayItems
                    .filter((val) => {
                        if(!getSearchTerm) {
                           return val;
                        } else if(getSearchTerm === "") {
                            return val;
                        } else if(val.title.toLowerCase().includes(getSearchTerm.toLowerCase())) {
                            return val;
                        }
                    })
                    .map((item, index) => (
                    <div className="col-md-3" key={index}>
                        <div className="card mb-1">
                            <img className="card-img-top img-fluid" src={`../../../assets/images/${item.img}`} alt="caption" />
                            <div className="card-body">
                              <p className="card-text">{item.title}</p>
                              <h5 className="card-title">{item.price}</h5>
                              <div className="card-text">
                                <p className="text-muted d-inline-block"><del>{item.currency}{item.price}</del></p>
                                <p className="text-muted d-inline-block float-right">{item.discount}</p>
                              </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            
            <ReactPaginate
                previousLabel={"Previous"}
                nextLebel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
            </div>
        </div>
    );
}

export default MainContentRight;
