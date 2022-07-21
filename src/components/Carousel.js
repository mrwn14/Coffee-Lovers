import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Rectangle4 from '../images/mike-kenneally-TD4DBagg2wE-unsplash.jpg'; 
import x from "../images/mediumroast.jpg"
import y from "../images/lightroast.jpg"


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="sliderShow" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height:"75vh", width:"100%"}}
          src={Rectangle4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Light Roast Blend</h3>
          <p><strong>Peet's Luminosa Breakfast Blend is aptly named since it's their “lightest and brightest” roast. It's a blend from Columbia and Ethiopia that highlights the best qualities from each region.</strong></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height:"75vh", width:"100%"}}
          src={x}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Medium Roast Blend</h3>
          <p><strong>Medium Roast coffees are brown and have a little thicker body than a Light Roast.</strong></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          style={{height:"75vh", width:"100%"}}
          src={y}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Dark Roast Blend</h3>
          <p>
            <strong>Coffee made from a Dark Roast has a robust, full body.</strong>
    
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel