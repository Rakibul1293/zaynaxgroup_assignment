import React from "react";
import { Link } from "react-router-dom";
import FooterImg from "../../assets/images/footer-logo.jpg";
import PaymentLogo1 from "../../assets/images/payment-1.png";
import PaymentLogo2 from "../../assets/images/payment-2.png";
import PaymentLogo3 from "../../assets/images/payment-3.png";
import PaymentLogo4 from "../../assets/images/payment-4.png";
import PaymentLogo5 from "../../assets/images/payment-5.png";
import "./Footer.css";

const Footer = () => {
	return (
        <footer className="footer">
            <div className="row">
                <div className="col-md-3 align-self-center">
                    <div className="footer-logo">
                        <img src={FooterImg} alt=""/>
                    </div>
                </div>
                
                <div className="col-md-6" style={{ padding: "0px 51px" }}>
                    <div className="icon-grp d-flex justify-content-around">
                        <Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                        <Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                        <Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                        <Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                        <Link to="/"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link>
                    </div>
                    
                    <div className="subscribe pt-4 pb-3">
                        <h5>SUBSCRIBE</h5>
                        <p>Get the letest news from zDrop</p>
                        <div className="search-box">
                            <div className="form-group has-search">
                                <span className="fa fa-telegram form-control-feedback"></span>
                                <input type="text" className="form-control" placeholder="Email address" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="link-grp d-flex justify-content-around pb-5">
                        <Link to="/">About zDrop</Link>
                        <Link to="/">FAQ & Support</Link>
                        <Link to="/">Terms & Conditions</Link>
                        <Link to="/">Peivacy Policy</Link>
                    </div>
                    
                    <div className="payment-grp d-flex justify-content-around">
                        <img src={PaymentLogo1} alt="altImg"/>
                        <img src={PaymentLogo2} alt="altImg"/>
                        <img src={PaymentLogo3} alt="altImg"/>
                        <img src={PaymentLogo4} alt="altImg"/>
                        <img src={PaymentLogo5} alt="altImg"/>
                    </div>
                </div>
                
                <div className="col-md-3 align-self-center">
                    <h6 className="font-weight-bold mb-3">CONTACT US</h6>
                    <div className="contact-info mb-2">
                        <i className="fa fa-headphones" aria-hidden="true"><span className="font-weight-bold pl-2">Hotline:</span></i><br />
                        <small className="pl-4">+8801929459195 (10am-10pm/Sat-Thur)</small>
                    </div>
                    <div className="contact-info mb-2">
                        <i className="fa fa-phone" aria-hidden="true"><span className="font-weight-bold pl-2">Whole Sales:</span></i><br />
                        <small className="pl-4">+8801929459195 (10am-12pm)</small>
                    </div>
                    <div className="contact-info mb-2">
                        <i className="fa fa-envelope-o" aria-hidden="true"><span className="font-weight-bold pl-2">Email:</span></i><br />
                        <small className="pl-4">support.example@gmail.com</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
