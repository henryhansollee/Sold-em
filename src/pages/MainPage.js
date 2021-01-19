import React, { useState } from 'react';

// ROUTER
import { Link } from 'react-router-dom';

// FULLPAGE
import ReactFullpage from '@fullpage/react-fullpage';

// IMAGES
import main1 from '../assets/images/main1.png'
import main2 from '../assets/images/main2.png'
import main3 from '../assets/images/main3.png'
import main4 from '../assets/images/main4.png'
import main5 from '../assets/images/main5.png'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

// CSS
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <ReactFullpage
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section main-page">
              <h1 className="main-h1">Sold`em</h1>
              <div>
                <img src={main1} alt="main1" className="main-img" />
                <img src={main2} alt="main2" className="main-img" />
                <img src={main5} alt="main5" className="main-img" />
                <img src={main4} alt="main4" className="main-img" />
                <img src={main3} alt="main3" className="main-img" />
              </div>

              <Button variant="primary" onClick={handleShow}>
                Launch demo modal
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <Link to="/input">시작하기</Link>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default MainPage;