import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.elfinancierocr.com/resizer/HHPR5Zo1rFm99ZC6RkvG1-fI17w=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/ZQMDAJ3A2NFSRNOUU2IJH2CVWQ.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Arenal Fitness GYM</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.eleconomista.com.mx/__export/1598325119395/sites/eleconomista/img/2020/06/23/gimnasios.jpg_554688468.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Arenal Fitness GYM</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bodytech.com.co/uploads/post/291be070af1d4989aef6367e4714c677/piloto-reapertura-pereira-1_1920x854.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Arenal Fitness GYM</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;