import React from 'react';
import { Link } from 'react-router-dom';
import './InputPage.scss';

const InputPage = () => {
  return (
    <div>
      <h1>InputPage</h1>
      <Link to="/result">결과보기</Link>
    </div>
  );
};

export default InputPage;