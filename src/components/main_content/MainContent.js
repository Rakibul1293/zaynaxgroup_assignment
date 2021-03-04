import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { context } from '../../App';
import MainContentRight from "./MainContentRight/MainContentRight";
import MainContentLeft from "./MainContentLeft/MainContentLeft";

const MainContent = () => {
    const { getRefineVal, getSortVal } = React.useContext(context);
    
    const allData = useSelector(state => state.allData);
    
    const [data, setData] = useState(allData.slice(0, 12));
    
    const filterDataByBrand = (payload) => {
        const updatedData = allData.filter(item => item.brand === payload);
        setData(updatedData);
    }
    
    const filterDataByCountry = (payload) => {
        const updatedData = allData.filter(item => item.country === payload);
        setData(updatedData);
    }
    
    const filterDataByFabric = (payload) => {
        const updatedData = allData.filter(item => item.fabric === payload);
        setData(updatedData);
    }
    
    const filterDataByPattern = (payload) => {
        const updatedData = allData.filter(item => item.pattern === payload);
        setData(updatedData);
    }
    
    const filterDataByService = (payload) => {
        const updatedData = allData.filter(item => item.service === payload);
        setData(updatedData);
    }
    
    const filterDataByRating = (payload) => {
        const updatedData = allData.filter(item => item.rating === payload);
        setData(updatedData);
    }
    
    const filterDataByColor = (payload) => {
        const updatedData = allData.filter(item => item.color === payload);
        setData(updatedData);
    }
    
    const filterDataBySize = (payload) => {
        const updatedData = allData.filter(item => item.size === payload);
        setData(updatedData);
    }
    
    if(getRefineVal.toLowerCase() === "high to low") {
        data.sort((a, b) => (a.price < b.price) ? 1 : -1);
    } else if(getRefineVal.toLowerCase() === "low to high") {
        data.sort((a, b) => (a.price > b.price) ? 1 : -1);
    } else if(getSortVal.toLowerCase() === "best sellers") {
        data.sort((a, b) => (a.sellingAmount < b.sellingAmount) ? 1 : -1);
    }
    
	return (
        <div className="main-content" style={{ paddingBottom: "75px" }}>
            <div className="row">
                <div className="col-md-3 border">
                    <MainContentLeft 
                        filterDataByBrand={filterDataByBrand}
                        filterDataByCountry={filterDataByCountry}
                        filterDataByFabric={filterDataByFabric}
                        filterDataByPattern={filterDataByPattern}
                        filterDataByService={filterDataByService}
                        filterDataByRating={filterDataByRating}
                        filterDataByColor={filterDataByColor}
                        filterDataBySize={filterDataBySize}
                    />
                </div>

                <div className="col-md-9">
                    <MainContentRight data={data} />
                </div>
            </div>
        </div>
    )
}

export default MainContent;
