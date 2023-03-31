import React from 'react'
import congresso from  '../../assets/congresso.png'

import {
    Container,
    Row,
    Wrapper
} from './styles'


const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={congresso} alt="Logo" />
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }