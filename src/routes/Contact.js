import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Secimg from '../components/secimg';
import Form from '../components/form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Secimg heading= "CONTACT" text= "LET'S HAVE A CHAT !"  />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
