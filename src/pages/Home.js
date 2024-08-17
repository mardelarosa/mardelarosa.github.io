import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import btv_clucky_york from '../img/btv-clucky-york-text.png';
import tandem_logo from '../img/tandem-logo.jpg';
import tv3_clucky_york from '../img/tv3-clucky-york.png';
import "@fontsource/lora";


const Container = styled.div`
  display:flex;
  flex-direction: column;
  font-family: "Lora";
  `;

    /* ENLACES DE INTERÉS:
    <iframe src="https://podcasters.spotify.com/pod/show/tandemlij/embed/episodes/La-prestatgeria-Recomanacions-de-Sant-Jordi-2024--Amb-amigues-i-amics-de-Tndem-e2ihd3s/a-ab688q0" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
    <p>https://www.menutsgirona.cat/ca/blog/llibres/lectures-per-lestiu-can-gallissa-2024</p>
<p>https://beteve.cat/cultura/llibres-infantils-juvenils-sant-jordi/</p>
<p>https://www.kirkusreviews.com/book-reviews/albert-arrayas/the-chickentown-mystery/</p>
  <p>https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.ccma.cat/3cat/una-de-monstres-de-rocio-bonilla/video/6288559/&ved=2ahUKEwjPhoXe9PKHAxW1SvEDHcEbHYU4lgEQtwJ6BAgIEAI&usg=AOvVaw1pqbvq9vJaR7sUhOKVWpNc</p>   
   <p>https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.ccma.cat/3cat/carme-sole/video/6281553/&ved=2ahUKEwjPhoXe9PKHAxW1SvEDHcEbHYU4lgEQtwJ6BAgJEAI&usg=AOvVaw0lZRNG8ueXkyHS8HsjdrQa</p>  
     <p>https://aficasassas.cat/2024/04/22/aqui-teniu-unes-bones-propostes-per-aquest-sant-jordi/</p> 
      <p>https://www.facebook.com/photo/?fbid=836577865177587&set=pb.100064761430942.-2207520000&locale=bs_BA</p>
     <p>https://www.facebook.com/watch/?v=473274998682334</p>*/

const WelcomeContainer = styled.div`
  text-align: center;
  padding: 20px 0;
  font-size: 24px;
  z-index: 1000; 

  h1 {
    font-size: 2rem; 

  }

`;

const CarouselContainer = styled.div`
  width: 60%;
  margin: 20px auto;
  text-align: center;

  .slick-slide {
    transition: transform .3s;
  
  }

  h3 {
    text-align: center;
  }
`;

const Image = styled.img`
width: 100%;        /* Ocupa el 100% del contenedor */
height: 26rem;      /* Define una altura fija para todas las imágenes */
object-fit: cover;  /* Ajusta la imagen para cubrir el área sin distorsión */
display: block;
margin: 0 auto; 
padding: 1rem;
border-radius: 8px; /* Opcional: Redondear los bordes de las imágenes */

`;

  


function Home() {
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
      <h1>Lastest news! :)</h1>
      </WelcomeContainer>
      <CarouselContainer>

     
        <Slider {...settings}>
        
          <div>

          <a href="https://www.ccma.cat/3cat/carme-sole/video/6281553/" title="Watch 'Mystery in Clucky York' on TV3 - Tot el Temps del món">
  <Image 
    src={tv3_clucky_york} 
    alt="Frame from the TV3 program 'Tot el Temps del món' featuring Mystery in Clucky York" 
  />
</a>
<h3>Catalonia’s public television (TV3) recommends 'Mystery in Clucky York.'
  <br></br> The program "Tot el temps del món" is presented by Anna Guitart.</h3>
 <p>"Children will have a great time discovering who committed the theft." Anna Guitart, "Tot el temps del mon", TV3, (2024).</p>
 </div>
          <div>
<p></p>
<a href="https://beteve.cat/cultura/llibres-infantils-juvenils-sant-jordi/" title="Read BTV's Sant Jordi book recommendations for children and young adults">

            <Image src={btv_clucky_york} 
    alt="Frame from the TV3 program 'Tot el Temps del món' featuring Mystery in Clucky York" 
    />
            </a>

            <h3>Barcelona’s public television (BTV) recommends 'Mystery in Clucky York.'
  <br></br>The BTV website recommends our book for World Book Day.</h3>
<p>"Children will have a great time discovering who committed the theft."</p>




          </div>
          <div>
            <a href="https://podcasters.spotify.com/pod/show/tandemlij/episodes/La-prestatgeria-Recomanacions-de-Sant-Jordi-2024--Amb-amigues-i-amics-de-Tndem-e2ihd3s/a-ab688q0" title="Listen to the Tàndem podcast, episode 'Sant Jordi Recommendations'.">
            <Image src={tandem_logo}/>
            </a>
            <h3>The Tàndem Podcast recommends 'Mystery in Clucky York'</h3>
<h5>By Marina Llompart-Guillem Fargas</h5>
<p>Tàndem is a Catalan space dedicated to children's literature, young adult literature, literary mediation, and all the aspects that make up this fascinating world. Hosted by Guillem Fargas and Marina Llompart.</p>
         </div>
         
        </Slider>
      </CarouselContainer>

   
      </Container>
    </div>
  );
}

export default Home;
