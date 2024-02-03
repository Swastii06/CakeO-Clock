import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Secimg from '../components/secimg';
import Pricing from '../components/pricing';



const Menu = () => {
  return (
    <div>
       <Navbar />
       <Secimg heading= "Menu" text= "Some of our best-seller items" />
      
       <Pricing />
       <Footer />
    </div>
  )
}

export default Menu
