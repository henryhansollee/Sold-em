import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <Link to="/input">시작하기</Link>
    </div>
  );
};

export default MainPage;