import React, { useState } from "react";

const FilterByRating = ({ filterDataByRating }) => {
    const handleClick = (val) => {
        filterDataByRating(val);
    }
    
	return (
        <>
            <div className="filter mt-3 pb-3">
                <div className="filter-title d-flex align-items-center justify-content-between">
                    <div className="filter-header-right-btn w-100">
                        <button className="navbar-toggler mt-3 w-100" type="button" data-toggle="collapse" data-target="#faq6" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <p className="text-dark text-left">Rating</p>
                        </button>
                    </div>

                    <div className="filter-header-left-btn">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#faq6" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-chevron-down text-dark" aria-hidden="true" style={{fontSize: "13px"}}></i>
                        </button>
                    </div>
                </div>
                
                <div id="faq6" className="collapse collapse-text show">
                    <div className="list-item">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="radio" id="radio5" value="5" onClick={(e) => handleClick(e.target.value)} />
                          <label className="form-check-label" htmlFor="radio5">
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                          </label>
                        </div>
                        
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="radio" id="radio4" value="4" onClick={(e) => handleClick(e.target.value)} />
                          <label className="form-check-label" htmlFor="radio4">
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                          </label>
                        </div>
                        
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="radio" id="radio3" value="3" onClick={(e) => handleClick(e.target.value)} />
                          <label className="form-check-label" htmlFor="radio3">
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                          </label>
                        </div>
                        
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="radio" id="radio2" value="2" onClick={(e) => handleClick(e.target.value)} />
                          <label className="form-check-label" htmlFor="radio2">
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                          </label>
                        </div>
                        
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="radio" id="radio1" value="1" onClick={(e) => handleClick(e.target.value)} />
                          <label className="form-check-label" htmlFor="radio1">
                            <i className="fa fa-star-o pr-1" aria-hidden="true"></i>
                          </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterByRating;
