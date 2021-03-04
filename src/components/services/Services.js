import React from "react";
import "./Services.css";

const Services = () => {
    const serviceDetails = [
        {
            id: 1,
            serviceIcon: <i className="fa fa-heart-o" aria-hidden="true"></i>,
            serviceTitle: "Quality & Saving",
            serviceDescription: "Good quality & affordable prices"
        },
        
        {
            id: 2,
            serviceIcon: <i className="fa fa-globe" aria-hidden="true"></i>,
            serviceTitle: "Global Brands",
            serviceDescription: "Buy favorite items from global brands"
        },
        
        {
            id: 3,
            serviceIcon: <i className="fa fa-paper-plane-o" aria-hidden="true"></i>,
            serviceTitle: "Fast Delivery",
            serviceDescription: "Fast and convenient door to door delivery"
        },
        
        {
            id: 4,
            serviceIcon: <i className="fa fa-money" aria-hidden="true"></i>,
            serviceTitle: "Secure Payment",
            serviceDescription: "Different secure payment methods"
        },
        
        {
            id: 5,
            serviceIcon: <i className="fa fa-server" aria-hidden="true"></i>,
            serviceTitle: "Professional Service",
            serviceDescription: "Efficient customer support"
        }
    ]
	return (
        <div className="services">
            <div className="row justify-content-around">
                {
                    serviceDetails.map((item, index) => (
                        <div className="col-sm-4 col-md-4 col-lg-2 text-center" key={index}>
                            {item.serviceIcon}
                            <p className="font-weight-bold text-dark mb-0 pt-2">{item.serviceTitle}</p>
                            <p className="text-secondary pt-2 pb-4">{item.serviceDescription}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services;