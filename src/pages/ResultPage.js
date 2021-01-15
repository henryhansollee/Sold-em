import React from 'react';
import { Link } from 'react-router-dom';
import './ResultPage.scss';

const ResultPage = ({match}) => {
  return (
    <div>
      <h1>ResultPage</h1>
      <h2>{match.params.teamNums}</h2>
      <Link to="/">처음으로</Link>
    </div>
  );
};

export default ResultPage;