// REACT
import React, { useState } from 'react';

// HISTORY
import { useHistory } from "react-router-dom";

// FULLPAGE
import ReactFullpage from '@fullpage/react-fullpage';

// IMAGES
import main1 from '../assets/images/main1.png'
import main2 from '../assets/images/main2.png'
import main3 from '../assets/images/main3.png'
import main4 from '../assets/images/main4.png'
import main5 from '../assets/images/main5.png'

// BOOTSTRAP
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import './MainPage.css';

const MainPage = () => {
  // MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // HISTORY
  const history = useHistory();

  const [ teams, setTeams ] = useState('');
  const setTeamsNums = e => {
    setTeams(e.target.value)
  };
  const sendData = () => {
    console.log(teams);
    history.push(`/result/${teams}`)
  };

  return (
    <ReactFullpage
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section main-page">
              <div className="d-flex flex-column align-items-center">
                
                <div className="d-flex justify-content-center w-50">
                  <img src={main1} alt="main1" className="main-img" />
                  <img src={main2} alt="main2" className="main-img" />
                  <img src={main5} alt="main5" className="main-img" />
                  <img src={main4} alt="main4" className="main-img" />
                  <img src={main3} alt="main3" className="main-img" />
                </div>
                <h1 className="main-h1">싸피솔덤</h1>
                <Button className="main-button" variant="dark" onClick={handleShow}>
                  시작하기
                </Button>
              </div>

              <Modal centered show={show} onHide={handleClose}>
                <Modal.Body>
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-center modal-img-box">
                      <img src={main1} alt="main1" className="modal-img" />
                      <img src={main2} alt="main2" className="modal-img" />
                      <img src={main5} alt="main5" className="modal-img" />
                      <img src={main4} alt="main4" className="modal-img" />
                      <img src={main3} alt="main3" className="modal-img" />
                    </div>
                    <h1 className="modal-h1 text-center">싸피솔덤</h1>
                    <Form.Control className="w-75 modal-input" placeholder="발표하는 팀의 수를 입력하세요! (숫자만)" teams={teams} onChange={setTeamsNums} />
                    <Button className="mt-3 mb-4 modal-button" variant="warning" onClick={sendData}>결과보기</Button>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default MainPage;