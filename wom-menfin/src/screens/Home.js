import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
import Card from '../components/Cards'
import './style.css'
// import Carousel from '../components/Carousel'


export default function Home() {


    return (
        <div>
            <div><Navbar /></div>
           
            <MDBCarousel showIndicators showControls fade className='text-danger'>
      <MDBCarouselItem  
        className='w-100 d-block' 
        itemId={1}  
        src='https://source.unsplash.com/random/900x700/?trading'
        alt='...'
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block' 
        itemId={2}
        src='https://source.unsplash.com/random/900x700/?education'
        alt='...'
      >
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block' 
        itemId={3}
        src='https://source.unsplash.com/random/900x700/?books'
        alt='...'
      >

</MDBCarouselItem>
    </MDBCarousel>

    <div className='text-dark text-center p-5' ><h1>Financial Risk</h1><Card/></div>
        
     
    <div><Footer /></div>
</div>
    )
}