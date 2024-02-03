import "./pricingstyles.css"
import { Link } from "react-router-dom";
import React from 'react';
import img1 from "../images/pic1.jpg";
import img2 from "../images/pic2.jpg";
import img3 from "../images/picc3.jpg";
import img4 from "../images/picc4.jpg";
import img5 from "../images/pic5.jpg";
import img6 from "../images/pic6.jpg";

const Pricing = () => {
  return (
    <div className="price">
        <div className="card-container">
            <div className="card">
            <img src={img1} alt="images" />
                <h3>Pizza</h3>
                <span className=" bar"></span>
                <h2>PIZZA BONANZA OFFER !</h2>
                <h3 className="a">*Starting from Rs 79 only !</h3>
                <p>*7 different flavours available</p>
                <p>*Customize according to ur choice</p>
                <p>*Get extra cheese absolutely FREE on orders above Rs 299 !</p>
                <p>*Call us or have a chat to know more...</p>
                <p>   </p>
                <p>   </p>
                <p>   </p>
                <p>   </p>
                <Link to= "/contact" className= "btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
            <img src={img2} alt="images" />
                <h3>Cake</h3>
                <span className=" bar"></span>
                <h2>CAKELICIOUS OFFER !</h2>
                <h3 className="a">*Starting from Rs 59 only !</h3>
                <p>*CUP-CAKES</p>
                <p>*PASTRIES</p>
                <p>*CELEBRATION CAKES</p>
                <p>*Customize according to ur choice</p>
                <p>*Get FREE candles and birthday caps on orders above Rs 499 !</p>
                <p>*Call us or have a chat to know more...</p>
                <Link to= "/contact" className= "btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
            <img src={img3} alt="images" />
                <h3>Beverages</h3>
                <span className=" bar"></span>
               
                <h3 className="a">*Starting from Rs 79 only !</h3>
                <p>*SHAKES</p>
                <p>*MOCKTAILS</p>
                <p>*COLD-COFFEE</p>
                <p>*JUICES</p>
                <p>*Call us or have a chat to know more...</p>
                <p>   </p>
                <p>   </p>
                <p>   </p>
                <p>   </p>
                <p>   </p>
                <Link to= "/contact" className= "btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
            <img src={img4} alt="images" />
                <h3>Burger</h3>
                <span className=" bar"></span>
               <h2>THE BIG BURGER SALE !</h2>
                <h3 className="a">*Starting from Rs 79 only !</h3>
                <p>*5 different varieties available</p>
                <p>*Customize according to ur choice</p>
                <p>*Get an item of rs 119 absolutely FREE on purchase above RS 359!</p>
                <p>*Call us or have a chat to know more...</p>
                <Link to= "/contact" className= "btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
            <img src={img5} alt="images" />
                <h3>Crossiant</h3>
                <span className=" bar"></span>
                <h3 className="a">*Starting from Rs 49 only !</h3>
                <p>*7 different flavours  available!</p>
                <p>*Customize according to ur choice</p>
                
                <p>*Call us or have a chat to know more...</p>
                <p>   </p>
                <p>   </p>
                <p>   </p>
               
                
                <Link to= "/contact" className= "btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
            <img src={img6} alt="images" />
                <h3>Ice-cream</h3>
                <span className=" bar"></span>
                <h2>THE ICE-CREAMY OFFER !</h2>
                <h3 className="a">*Starting from Rs 59 only !</h3>
                <p>*7 flavors and 9 varieties available</p>
                <p>*Customize according to ur choice</p>
                <p>*BUY 2 GET 1 FREE!</p>
                <p>*Call us or have a chat to know more...</p>
            
                <Link to= "/contact" className= "btn">PURCHASE NOW</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Pricing;
