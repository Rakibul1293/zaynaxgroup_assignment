import React, { useState } from "react";

const FilterBySize = ({ filterDataBySize }) => {
    const filterBySizeItem = [
        "XS", "XL", "M", "L"
    ]
    
    const handleClick = (val) => {
        filterDataBySize(val);
    }
    
	return (
        <>
            <div className="filter mt-3 pb-3">
                <div className="filter-title d-flex align-items-center justify-content-between">
                    <div className="filter-header-right-btn w-100">
                        <button className="navbar-toggler mt-3 w-100" type="button" data-toggle="collapse" data-target="#faq8" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <p className="text-dark text-left">Size</p>
                        </button>
                    </div>

                    <div className="filter-header-left-btn">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#faq8" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-chevron-down text-dark" aria-hidden="true" style={{fontSize: "13px"}}></i>
                        </button>
                    </div>
                </div>
                
                <div id="faq8" className="collapse collapse-text show">
                    <div className="list-item">
                       {
                            filterBySizeItem
                                .map((item, index) => (
                                    <div className="form-check form-inline custom-control-inline" key={index}>
                                      <div className="colorBox"
                                        style={{
                                            width: "19px",
                                            height: "19px",
                                            backgroundColor: `#fff`,
                                            border: "1px solid darkgray",
                                            cursor: "pointer"
                                        }}
                                      >
                                          <p 
                                            style={{ fontSize: "15px", fontWeight: "bold", color: "#000" }} onClick={(e) => handleClick(e.target.innerText)}
                                          >{item}
                                          </p>
                                      </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterBySize;
