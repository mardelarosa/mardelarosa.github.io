/*import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


import freeImage1 from '../img/wallpapers/FEBRERO_2023.jpg';
import freeImage2 from '../img/wallpapers/MAYO-2023.jpg';
import freeImage3 from '../img/wallpapers/JULIO_2023.jpg';

import premiumImage1 from '../img/wallpapers/JUNIO_2023.jpg';
import premiumImage2 from '../img/wallpapers/ABRIL_2023.jpg';
import premiumImage3 from '../img/wallpapers/OCTUBRE_2023.jpg';


const freeWallpapers = [
  { src: freeImage1, alt: 'Free Image 1' },
  { src: freeImage2, alt: 'Free Image 2' },
  { src: freeImage3, alt: 'Free Image 3' },
];

const premiumWallpapers = [
  { src: premiumImage1, alt: 'Premium Image 1' },
  { src: premiumImage2, alt: 'Premium Image 2' },
  { src: premiumImage3, alt: 'Premium Image 3' },
];


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  justify-content: center; 
  width: fit-content; 
  margin: 0 auto; 
`;

const StyledButton = styled.button`
  background-color: YOUR_COLOR; 
  color: black;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: A_DARKER_COLOR; 
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  width: 100%;
  padding: 20px; 
  text-align: center;
`;


const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
`;

function Wallpapers() {
    console.log("Renderizando Wallpapers");

  return (
    <Container>
      <h1>DESCARGA AQUÍ TUS IMÁGENES PREFERIDAS</h1>
      <br></br>

      <div>
       
        <Grid>
          {freeWallpapers.map((wallpaper, index) => (
            <ImageContainer key={index}>
              <img 
                src={wallpaper.src} 
                alt={wallpaper.alt}
                onClick={() => setSelectedImage(wallpaper.src)}
                style={{ maxWidth: '100%' }}
              />
              <a href={wallpaper.src} download>
                <StyledButton>Download</StyledButton>
              </a>
            </ImageContainer>
          ))}
        </Grid>
        <br></br>
      </div>

      
        <div>
          <h2>Imágenes exclusivas para usuarios PREMIUM</h2>
          <br></br>
          <Grid>
            {premiumWallpapers.map((wallpaper, index) => (
              <ImageContainer key={index}>
                <img 
                  src={wallpaper.src} 
                  alt={wallpaper.alt}
                  onClick={() => setSelectedImage(wallpaper.src)}
                  style={{ maxWidth: '100%' }}
                />
                <a href={wallpaper.src} download>
                  <StyledButton>Download</StyledButton>
                </a>
              </ImageContainer>
        
            ))}; </Grid>
        </div>
      )


      {selectedImage && (
        <Modal onClick={closeModal}>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '80vw', maxHeight: '80vh' }}/>
        </Modal>
      )}
    </Container>
  );
}

export default Wallpapers;*/
