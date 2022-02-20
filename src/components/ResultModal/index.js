import React from 'react';
import { Body, Container, Footer, ModalBackground, TitleCloseBtn } from './styles';

const ReasultModal = ({ visible, setVisible, output}) => {
  return(
    <ModalBackground>
      <Container>
        <TitleCloseBtn>
        <button
            onClick={() => {
              setVisible(false);
            }}
          >
            X
          </button>
        </TitleCloseBtn>
        <h1>Capitais que poderá visitar durante as suas férias</h1>
        <Body>
          <p>{output}</p>
        </Body>
        <Footer>
        <button
            onClick={() => {
              setVisible(false);
            }}
            id="cancelBtn"
          >
            Fechar
          </button>
        </Footer>
      </Container>
    </ModalBackground>
  );
}
export default ReasultModal;
