import React from "react";
import FilterByBrand from "./FilterType/FilterByBrand";
import FilterByCountry from "./FilterType/FilterByCountry";
import FilterByFabric from "./FilterType/FilterByFabric";
import FilterByPattern from "./FilterType/FilterByPattern";
import FilterByService from "./FilterType/FilterByService";
import FilterByRating from "./FilterType/FilterByRating";
import FilterByColor from "./FilterType/FilterByColor";
import FilterBySize from "./FilterType/FilterBySize";
import "./MainContentLeft.css";

const MainContentLeft = ({ filterDataByBrand, filterDataByCountry, filterDataByFabric, filterDataByPattern, filterDataByService, filterDataByRating, filterDataByColor, filterDataBySize }) => {
	return (
        <div className="main-content-left">
            <h6 className="pt-2 pl-2">Filter</h6>
            <FilterByBrand 
                filterDataByBrand={filterDataByBrand}
            />
        
            <FilterByCountry 
                filterDataByCountry={filterDataByCountry}
            />
        
            <FilterBySize 
                filterDataBySize={filterDataBySize}
            />
        
            <FilterByColor 
                filterDataByColor={filterDataByColor}
            />
        
            <FilterByRating 
                filterDataByRating={filterDataByRating}
            />
        
            <FilterByFabric 
                filterDataByFabric={filterDataByFabric}
            />
        
            <FilterByPattern 
                filterDataByPattern={filterDataByPattern}
            />
        
            <FilterByService 
                filterDataByService={filterDataByService}
            />
        </div>
    )
}

export default MainContentLeft;
