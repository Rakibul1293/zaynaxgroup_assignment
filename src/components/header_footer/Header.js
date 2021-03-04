import React from "react";
import { context } from '../../App';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    const { setSearchTerm, setRefineVal, setSortVal } = React.useContext(context);
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }
    
    const handleRefineSelect = (e) => {
        setRefineVal(e.target.value);
    }
    
    const handleSortSelect = (e) => {
        setSortVal(e.target.value);
    }
    
	return (
        <header>
            <div className="header-nav mb-3">
                <ul className="nav">
                  <li className="nav-item">
                    <Link className="nav-link disabled" to="/">Homepage</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ml-5 active" to="/">All Products</Link>
                  </li>
                </ul>
            </div>
            
            <div className="header-nav-bottom border-top border-bottom pt-3 mb-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="number-of-products pt-1">
                            <p>Showing 1-40 of 71,000 products</p>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="form-inline d-flex justify-content-center">
                            <label className="border-right border-secondary pr-2" htmlFor="select1">Refine By</label>
                            <select className="form-control ml-2" id="select1" onClick={(e) => handleRefineSelect(e)}>
                              <option>Price</option>
                              <option>High to low</option>
                              <option>Low to high</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="form-inline d-flex justify-content-center">
                            <label className="border-right border-secondary pr-2" htmlFor="select2">Sort By</label>
                            <select className="form-control ml-2" id="select2" onClick={(e) => handleSortSelect(e)}>
                              <option>Best Sellers</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="search-box">
                            <div className="form-group has-search">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input type="text" className="form-control" placeholder="Search" onChange={handleSearch} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
