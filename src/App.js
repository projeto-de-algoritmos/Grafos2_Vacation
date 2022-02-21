import { VectorMap } from '@south-paw/react-vector-maps';
import React, { useEffect, useState } from 'react';
import ReasultModal from './components/ResultModal';
import SideBar from './components/SideBar';
import Solution from './graph/Solution';
import BRMap from './map/map';
import { Container, Map, MapContainer } from './styles';

const App = () => {

  const [focused, setFocused] = useState('None');
  const [output, setOutput] = useState('None');
  const [starting, setStarting] = useState('None');
  const [destiny, setDestiny] = useState('None');
  const [startingId, setStartingId] = useState('None');
  const [destinyId, setDestinyId] = useState('None');
  const [modal, setModal] = useState(false);

  const layerProps = {
    onFocus: ({ target }) => setFocused(target.attributes.name.value),
    onClick: ({ target }) => {
      const id = target.attributes.id.value;
      const capital = target.attributes.capital.value;

      if (starting === 'None') {
        setStarting(capital);
        setStartingId(id);
      } else if (destiny === 'None') {
        setDestiny(capital);
        setDestinyId(id);
      } else {
        setStarting(capital);
        setStartingId(id);
        setDestiny('None');
        setDestinyId('None');
      }
    }
  };

  useEffect(() => {
    if(starting === 'None' && destiny === 'None'){
      setOutput('Selecione os estados');
      return;
    }
    if (starting && destiny) {
      try {
        const result = Solution.question(starting, destiny);
        setOutput(result);
      } catch {}
    }

  }, [starting, destiny]);


  return (
    <Container>
      {modal && <ReasultModal
        visible={modal}
        setVisible={setModal}
        output={output}
      />}
      <SideBar
        starting={startingId}
        setStarting={setStartingId}
        destiny={destinyId}
        setDestiny={setDestinyId}
        openModal={() => setModal(true)}
      />
      <MapContainer>
        <Map>
          <VectorMap {...BRMap} layerProps={layerProps} checkedLayers={[startingId, destinyId]} />
        </Map>
      </MapContainer>
    </Container >
  );
}

export default App;
