import { useNavigate  } from "react-router-dom";
import camara from '../../assets/camara.jpg'

import { Button } from '../../components/Button';

import { Header } from '../../components/Header';

import { Container, Title, TitleHighlight, TextContent} from './styles';

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
                <img src={camara} alt="Imagem principal do site." />
            </div>
        </Container>
    </>)
}

export { Home }