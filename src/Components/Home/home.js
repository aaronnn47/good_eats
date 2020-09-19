import React, {Component} from 'react';
import '../Home/home.css';
import greens from '../../Images/greens.png'
import bowl from '../../Images/bowl.png'
import salad from '../../Images/salad.png'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'

class Home extends Component {

  render(){  

  return (
    <div className="Home">      
      <div className="text">
       <text>First design concepts</text>
       <Link to='/menu'>Menu</Link>
      </div>
      
      <div className="photobooth">
        { window.innerWidth > 415 ? (
            <div className="photos">
            <img src={greens} alt=''></img>
            <img src={bowl} alt=''></img>
            <img src={salad} alt=''></img>
          </div>
          ) : (
          <div className='carousel-photos'>
            <Carousel>
              <Carousel.Item>
              <img className='carousel-image' src={greens} 
              alt=''/>
            </Carousel.Item>

            <Carousel.Item>
              <img className='carousel-image' src={bowl} 
              alt=''/>
            </Carousel.Item>
            
            <Carousel.Item>
              <img className='carousel-image' src={salad} 
              alt=''/>
            </Carousel.Item>
            
          </Carousel>
          </div>
        )}
      </div>        

      <div className="about">
        <text>Fresh, Local, Bright!</text>
      </ div>

    </div>
  );
  }
  
  
}

export default Home;
