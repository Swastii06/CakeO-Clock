import { FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import "./footerstyles.css"
import React from "react"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={25} style={{color: "wheat",marginRight: "2rem"}} />
                    <div>
                        <h4>Niladri Vihar, sec- 1/123.</h4>
                        <h4>Bhubaneswar.</h4>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color: "wheat",marginRight: "2rem"}} />
                987766445</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color: "wheat",marginRight: "2rem"}} />
                info@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h3>About the restraunt</h3>
                <h4>This restraunt was established by the owner Swastideepa Dash with a motive to allow the customers to have their own customized bakeries and beverages with an affordable price.</h4>
                <div className="social">
                <a target="blank" href='https://www.facebook.com'> <FaFacebook size={30} style={{color: "wheat",marginRight: "1rem"}}></FaFacebook> </a>
                <a target="blank" href='https://www.twitter.com'><FaTwitter size={30} style={{color: "wheat",marginRight: "1rem"}} /></a>
                <a target="blank" href='https://www.instagram.com'><FaInstagram size={30} style={{color: "wheat",marginRight: "1rem"}} /></a>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
