import { useNavigate  } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { Container, Title, TitleHighlight, TextContent} from './styles';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }


    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    Encontre partidos e deputados de uma forma 
                    <TitleHighlight>
                        Rápida
                    </TitleHighlight>
                    e prática!
                </Title>
                <TextContent>
                  Encontre todos os Deputados, Partidos e outras coisas relacionadas a camara dos deputados!
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} type="button"/>
            </div>
            <div>
      <h4>React-Bootstrap Carousel Component</h4>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
    </div>
        </Container>
    </>)
}

export { Home }