import { VectorMap } from '@south-paw/react-vector-maps';
import React, { useState } from 'react';
import ReasultModal from './components/ResultModal';
import SideBar from './components/SideBar';
import BRMap from './map/map';
import { Container, Map, MapContainer } from './styles';

const App = () => {

  const [focused, setFocused] = useState('None');
  const [output, setOutput] = useState('None');
  const [starting, setStarting] = useState('None');
  const [destiny, setDestiny] = useState('None');
  const [modal, setModal] = useState(false);

  const layerProps = {
    onFocus: ({ target }) => setFocused(target.attributes.name.value),
    onClick: ({ target }) => {
      const id = target.attributes.id.value;

      if (starting === 'None') {
        setStarting(id);
      } else if (destiny === 'None') {
        setDestiny(id);
      } else {
        setStarting(id);
        setDestiny('None');
      }
    }
  };

  return (
    <Container>
      {modal && <ReasultModal
        visible={modal}
        setVisible={setModal}
        output={output}
      />}
      <SideBar
        starting={starting}
        setStarting={setStarting}
        destiny={destiny}
        setDestiny={setDestiny}
        openModal={() => setModal(true)}
      />
      <MapContainer>
        <Map>
          <VectorMap {...BRMap} layerProps={layerProps} checkedLayers={[starting, destiny]} />
        </Map>
      </MapContainer>
    </Container >
  );
}

export default App;
