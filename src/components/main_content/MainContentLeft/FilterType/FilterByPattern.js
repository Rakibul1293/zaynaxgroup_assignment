import React, { useState } from "react";

const FilterByPattern = ({ filterDataByPattern }) => {
    const filterByPatternItem = [
        "Checkered", "Color Block", "Floral Print", "Polka Print", "self design"
    ]
    
    const handleClick = (val) => {
        filterDataByPattern(val);
    }
    
	return (
        <>
            <div className="filter mt-3 pb-3">
                <div className="filter-title d-flex align-items-center justify-content-between">
                    <div className="filter-header-right-btn w-100">
                        <button className="navbar-toggler mt-3 w-100" type="button" data-toggle="collapse" data-target="#faq4" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <p className="text-dark text-left">Pattern</p>
                        </button>
                    </div>

                    <div className="filter-header-left-btn">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#faq4" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-chevron-down text-dark" aria-hidden="true" style={{fontSize: "13px"}}></i>
                        </button>
                    </div>
                </div>
                
                <div id="faq4" className="collapse collapse-text show">
                    <div className="list-item">
                        {
                            filterByPatternItem
                                .map((item, index) => (
                                <div className="form-check" key={index}>
                                  <input className="form-check-input" type="radio" name="radio" id={item} value={item} onClick={(e) => handleClick(e.target.value)} />
                                  <label className="form-check-label" htmlFor={item}>
                                    {item}
                                  </label>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterByPattern;
