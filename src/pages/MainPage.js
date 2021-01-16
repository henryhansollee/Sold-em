import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import ReactFullpage from '@fullpage/react-fullpage';

import main1 from '../assets/images/main1.png'
import main2 from '../assets/images/main2.png'
import main3 from '../assets/images/main3.png'
import main4 from '../assets/images/main4.png'
import main5 from '../assets/images/main5.png'

const MainPage = () => {
  return (
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section main-page">
            <h1 className="main-h1">Sold`em</h1>
            <div>
              <img src={main1} alt="main1" className="main-img1" />
              <img src={main2} alt="main2" className="main-img2" />
              <img src={main5} alt="main5" className="main-img5" />
              <img src={main4} alt="main4" className="main-img4" />
              <img src={main3} alt="main3" className="main-img3" />
            </div>
            <Link to="/input">시작하기</Link>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
};

export default MainPage;