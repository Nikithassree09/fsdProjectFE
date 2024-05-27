import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Bookslots=() => {
    const [showtext, setshowtext] = useState(false);
    const handleBooking = async (response) => {
      try {
        const response = await fetch('http://localhost:3001/api/:companyId/book',{
          method: 'POST',});
          if (response.ok){
            <h6>Booking was successful.</h6>
            setshowtext(true);
          }else{
            console.log('Failed to book');
          }
      } catch (error){
        console.log('Error occured:',({ message: error.message }));
      }
    };
  

  return (
    <>
    <div style={{display: 'flex'}}>
    <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Bharat Gas</h5>
    <p className="card-text">Mumbai,Maharashtra</p>
    <div><a href="#" class="btn btn-primary" style={{marginTop: '50px'}} onClick={ handleBooking }>Book Now</a>
    {showtext && <p> You have booked your slot</p>}
    </div>
  </div>
</div>
<div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Suraj Auto LPG Mumbai India</h5>
    <p className="card-text">Mumbai,Maharashtra</p>
    <a href="#" class="btn btn-primary" style={{marginTop: '25px'}} onClick={ handleBooking }>Book Now</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Aavantika Gas Limited</h5>
    <p className="card-text">Indore, Madhya Pradesh</p>
    <a href="#" class="btn btn-primary" style={{marginTop: '48px'}} onClick={ handleBooking }>Book Now</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '13px'}}>
  <div className="card-body">
    <h5 className="card-title">Adani Gas</h5>
    <p className="card-text">+Gandhinagar, Gujarat</p>
    <a href="#" class="btn btn-primary" style={{marginTop: '47px'}} onClick={ handleBooking }>Book Now</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '13px'}}>
  <div className="card-body">
    <h5 className="card-title">Ketko San Private Limited</h5>
    <p className="card-text">Mumbai,Maharashtra</p>
    <a href="#" class="btn btn-primary" style={{marginTop: '45px'}} onClick={ handleBooking }>Book Now</a>
    </div>
  </div>
  </div>
  <div style={{display: 'flex'}}>
  <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Green Power International Private Limited</h5>
    <p className="card-text">Noida, Uttarpradesh</p>
    <a href="#" class="btn btn-primary" style={{marginTop: '25px'}} onClick={ handleBooking }>Book Now</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Akshay Gascon Auto</h5>
    <p className="card-text">Pune, Maharashtra</p>
    <a href="#" class="btn btn-primary" style={{marginTop: '49px'}} onClick={ handleBooking }>Book Now</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Green Gas Limited</h5>
    <p className="card-text">Lucknow, UttarPradesh</p>
    <a href="#" class="btn btn-primary" style={{marginTop: '49px'}} onClick={ handleBooking }>Book Now</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '13px'}}>
  <div className="card-body">
    <h5 className="card-title">B G Exploration and Production India Limited</h5>
    <p className="card-text">Mumbai,Maharashtra</p>
    <a href="#" class="btn btn-primary" style={{marginTop: '25px'}} onClick={ handleBooking }>Book Now</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '13px'}}>
  <div className="card-body">
    <h5 className="card-title">Eco Fuel Systems India Private Limited</h5>
    <p className="card-text">Mumbai,Maharashtra</p>
    <a href="#" class="btn btn-primary" style={{marginTop: '23px'}} onClick={ handleBooking }>Book Now</a>
    </div>
  </div>
  </div>
  <div style={{display: 'flex'}}>
  <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Deep Jyothi Gases</h5>
    <p className="card-text">Hyderabad, Telangana</p>
    <a href="#" class="btn btn-primary" style={{marginTop: '50px'}} onClick={ handleBooking }>Book Now</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Hindustan Aegis LPG Limited</h5>
    <p className="card-text">Mumbai,Maharashtra</p>
    <a href="#" class="btn btn-primary" style={{marginTop: '25px'} onClick={ handleBooking }}>Book Now</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Indraprastha Gas Limited</h5>
    <p className="card-text">New Delhi</p>
    <a href="#" class="btn btn-primary" style={{marginTop: '48px'}} onClick={ handleBooking }>Book Now</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '13px'}}>
  <div className="card-body">
    <h5 className="card-title">Andhra Pradesh Gas Distribution Corporation Limited</h5>
    <p className="card-text">Hyderabad, Telangana</p>
    <a href="#" class="btn btn-primary" onClick={ handleBooking }>Book Now</a>
    </div>
  </div>
  </div>
</>
  )
}


export default Bookslots
