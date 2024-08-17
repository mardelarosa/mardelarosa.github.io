import styled from 'styled-components';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;  
    padding: 1rem;
`;

/*const ContentContainer = styled.div`
    display: flex;
    margin-left: 250px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;

    
    @media (max-width: 768px) {
        flex-direction: column;
        margin-left: 0;
    }
`;*/

const TextContainer = styled.div`
    flex: 1;
    padding: 1 1rem;  
    text-align: justify;
`;



function Soon() {
    return (
        <AboutContainer>
            <br></br>
            <h1>NEW PROJECTS COMING SOON</h1>
           
                <TextContainer>
                <br></br>
                    <p> Stay tuned, we’ll be announcing news about new projects soon :)</p>

<p>These are projects made with a lot of love, humor, and imagination!</p>
                   <br></br>

                    <p>They're simmering slowly to bring you the best possible result</p>

<p>Soon, we'll be able to show you more :)</p>
<br></br>
<p>Upcoming projects to be published:</p>

<p>- March 2025 - major publisher in Spain and worldwide.</p>
<p>- September 2025 - major publisher in Spain and Latin America.</p>

               
                </TextContainer>
          
        </AboutContainer>
    );
}

export default Soon;
