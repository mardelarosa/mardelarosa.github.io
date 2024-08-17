import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import calendarOriginal from '../img/calendar-original.jpg';
import calendarXXL from '../img/calendar-xxl.jpg';
import calendar10Years from '../img/calendar-10-years.jpg';
import "@fontsource/lora";


const Container = styled.div`
  display:flex;
  flex-direction: column;
  font-family: "Lora";
  p {
    text-align: center; /* Centra el texto dentro del párrafo */
  }
  `;

const WelcomeContainer = styled.div`
  text-align: center;
  padding: 20px 0;
  font-size: 24px;
  z-index: 500; 

  h1 {
    font-size: 2rem; 

  }

`;

const CarouselContainer = styled.div`
  width: 60%;
  margin: 20px auto;
  display: flex;
  padding: 0px;
 flex-direction: column;

  .slick-slide {
    transition: transform .3s;
  }

  p {
  text-align: center; /* Centra el texto dentro del párrafo */
}
`;

const Image = styled.img`
width: 100%;        /* Ocupa el 100% del contenedor */
height: 300px;      /* Define una altura fija para todas las imágenes */
object-fit: cover;  /* Ajusta la imagen para cubrir el área sin distorsión */
display: block;
margin: 0 auto; 
padding: 1rem;
border-radius: 8px; /* Opcional: Redondear los bordes de las imágenes */

`;

  


function PersonalWork() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,  // 5 seconds
  };

  
  return (
    <div>
      <Container>
      <WelcomeContainer>
        <h1>Design and original idea of "Albert Arrayás' Calendar".</h1> 
        <p>More than 15,000 copies sold :) <br></br></p>
        <h5>Sold with great success over the last 10 years</h5>
        <h6>With the gorgeous illustrations by Albert Arrayás,
          <br></br>I created this calendar design, the original and two other versions</h6>
      </WelcomeContainer>
      <CarouselContainer>
      <Slider {...settings}>
          <div>
            <Image src={calendarOriginal} alt="Original calendar since 2014"/>
            <p>Original Version Calendar, minimalist design, with clips, string, and push pins.</p>
          </div>
          <div>
            <Image src={calendarXXL} alt="XXL version calendar DinA3 size"/>
            <p> XXL-sized calendar with an organizer grid for your important moments.</p>
          </div>
          <div>
            <Image src={calendar10Years} alt="10 years anniversary version calendar"/>
            <p> 10th Anniversary Edition Calendar, timeless and with an organizer grid.</p>
          
          </div>
         
        </Slider>
         
       
        
        </CarouselContainer>
     
     
       

      </Container>
    </div>
  );
}

export default PersonalWork;
