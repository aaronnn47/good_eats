import React, {Component} from 'react';
import './App.css';
import greens from './Images/greens.png'
import bowl from './Images/bowl.png'
import salad from './Images/salad.png'
import Carousel from 'react-bootstrap/Carousel'

class App extends Component {



  render(){  
  console.log(window.innerWidth)

  return (
    <div className="App">      
      <div className="text">
       <text>First design concepts</text>
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
        <text>Hello world this is what we are about!</text>
      </ div>

    </div>
  );
  }
  
  
}

export default App;
