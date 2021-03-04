import React, { useState } from "react";

const FilterByBrand = ({ filterDataByBrand }) => {
    const [searchTerm, setSearchTerm] = useState();
    
    const filterByBrandItem = [
        "Aropostal", "Antony Morato", "Arrow", "Arrow Blue Jeans", "Arrow Sport", "Mufti", "Raymond"
    ]
    
    const handleClick = (val) => {
        filterDataByBrand(val);
    }
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }
    
	return (
        <>
            <div className="filter mt-3 pb-3">
                <div className="filter-title d-flex align-items-center justify-content-between">
                    <div className="filter-header-right-btn w-100">
                        <button className="navbar-toggler mt-3 w-100" type="button" data-toggle="collapse" data-target="#faq1" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <p className="text-dark text-left">Brand</p>
                        </button>
                    </div>

                    <div className="filter-header-left-btn">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#faq1" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-chevron-down text-dark" aria-hidden="true" style={{fontSize: "13px"}}></i>
                        </button>
                    </div>
                </div>
                
                <div id="faq1" className="collapse collapse-text show">
                    <div className="search-box">
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control" placeholder="Search" onChange={handleSearch} />
                        </div>
                    </div>
                    
                    <div className="list-item">
                        {
                            filterByBrandItem
                                .filter((val) => {
                                    if(!searchTerm) {
                                       return val;
                                    } else if(searchTerm === "") {
                                        return val;
                                    } else if(val.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val;
                                    }
                                })
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

export default FilterByBrand;
