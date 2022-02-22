import React from 'react';
import { ButtonContainer, ConfirmButton, Contianer, LocalContainer, Logo, LogoContainer, Text } from './styles';
import states from './states'
import logo from '../../assets/logo.png';

const SideBar = ({
  starting, setStarting, destiny, setDestiny, openModal,
  startingId, setStartingId, destinyId, setDestinyId,
}) => {
  return(
    <Contianer>
      <LogoContainer>
        <Logo src={logo} alt="Logo"/>
        <Text>Vacation</Text>
      </LogoContainer>
      <LocalContainer>
        <p>Local de origem: </p>
        <select value={startingId} onChange={(e) => {
          setStartingId(e.target.value)
          setStarting(e.target[e.target.selectedIndex].className);
        }}>
          <option id='None' key='None'>Escola um local</option>
          {states.map((state) => <option value={state.id} className={state.capital} key={state.id}>{`${state.id} - ${state.capital}`}</option>)}
        </select>
        <p>Local de destino: </p>
        <select value={destinyId} onChange={(e) => {
          setDestinyId(e.target.value);
          setDestiny(e.target[e.target.selectedIndex].className);
        }}>
          <option id='None' key='None'>Escola um local</option>
          {states.map((state) => <option value={state.id} className={state.capital} key={state.id}>{`${state.id} - ${state.capital}`}</option>)}
        </select>
      </LocalContainer>
      <ButtonContainer>
        <ConfirmButton onClick={() => openModal()}>Rotas</ConfirmButton>
      </ButtonContainer>
    </Contianer>
  );
}

export default SideBar;