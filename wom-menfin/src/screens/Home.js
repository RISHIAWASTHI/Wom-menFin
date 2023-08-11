import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Card from '../components/Cards'
import './style.css'
import image1 from "../components/image1.jpg"
import image2 from "../components/image2.jpg"
import image3 from "../components/image3.jpg"

// import Carousel from '../components/Carousel'


export default function Home() {


  return (
    <div>
      <div><Navbar /></div>

      <MDBCarousel showIndicators showControls fade className='text-danger'>
        <MDBCarouselItem
          className='w-100 d-block' style={{ height: "500px" }}
          itemId={1}
          src={image1}
          alt='...'
        >

        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block' style={{ height: "500px" }}
          itemId={2}
          src={image2}
          alt='...'
        >

        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block' style={{ height: "500px" }}
          itemId={3}
          src={image3}
          alt='...'
        >

        </MDBCarouselItem>
      </MDBCarousel>

      <div className='text-dark text-center p-5' ><h1>Financial Risk</h1><Card /></div>


      <div><Footer /></div>
    </div>
  )
}