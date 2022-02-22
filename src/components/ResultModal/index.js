import React from 'react';
import { Body, Container, Footer, ModalBackground, TitleCloseBtn } from './styles';

const ReasultModal = ({ visible, setVisible, output, starting, destiny}) => {
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
        <h1>Resultado:</h1>
        <Body>
          {output ? 
          <div>
            <p>{`Você ir percorrer ${new Intl.NumberFormat('pt-br').format(output)} Kms de ${starting} à ${destiny}`}</p>
            <p>{`Com a gasolina custando 7 reais, você irá gastar aproximadamente R$${new Intl.NumberFormat('pt-br').format(output * 7)} reais`}</p>
          </div>
            : 
            <p>Selecione os estados</p>
          }
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
