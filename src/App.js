import React from "react";
import ModalView from "./components/modalView";
import ModalFooter from "./components/modalFooter";
import ModalB from "./components/modalB"
import { Button } from 'react-bootstrap';

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">
      <ModalView />
      <ModalFooter />
      <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <ModalB
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </div>
  );
}

export default App;
