import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

const MainPage = () => {
  return (
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
            <h1>MainPage</h1>
            <Link to="/input">시작하기</Link>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
};

export default MainPage;