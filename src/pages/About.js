import styled from 'styled-components';
import aboutImg from '../img/about-me-pic.jpeg';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;  
`;

const ContentContainer = styled.div`
    display: flex;
    margin-left: 250px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    
    @media (max-width: 768px) {
        flex-direction: column;
        margin-left: 0;
    }
`;

const TextContainer = styled.div`
    flex: 1;
    padding: 0 1rem;  
    text-align: justify;
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
        width: 100%;
        max-width: 400px; 
        border-radius: 50%;
    }

   
    @media (max-width: 768px) {
        margin-top: 1rem;
    }
`;

function About() {
    return (
        <AboutContainer>
            <br></br>
            <h1>ABOUT ME</h1>
            <ContentContainer>
                <TextContainer>
                    <p>Hi :)<br />
                    Mar de la Rosa Serrano, born in Málaga, Spain, in 1989.
                    Author of children's stories, short stories, and STEM projects. She has studied Psychology, Clinical Laboratory Science, and Computer Programming. Enthusiast of literature, cinema, music, animals, education, and life.</p>
                    
                   <br></br>

                    <p>Author of "The Clucky York Mystery," 2024, Babulinka Books.</p>

<p>Co-author of "The Chickentown Mystery," 2021, Crackboom Books.</p>
<br></br>
<p>Upcoming projects to be published:</p>

<p>- March 2025 - major publisher in Spain and worldwide.</p>
<p>- September 2025 - major publisher in Spain and Latin America.</p>

               
                </TextContainer>

                <ImageContainer>
                    <img src={aboutImg} alt="Albert Arrayás" />
                </ImageContainer>
            </ContentContainer>
        </AboutContainer>
    );
}

export default About;
