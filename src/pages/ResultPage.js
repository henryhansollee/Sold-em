import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ResultPage.scss';

const ResultPage = ({ match }) => {
  const [ standardNums, setStandardNums ] = useState('');
  const standard = [];
  useEffect(() => {
    for (var i = 1; i <= match.params.teamNums; i++) {
      standard.push(i)
    }
    setStandardNums(standard)
  }, [])

  return (
    <div>
      <h1>ResultPage</h1>
      <h2>{match.params.teamNums}</h2>
      <h2>기준: {standardNums}</h2>
      <Link to="/">처음으로</Link>
    </div>
  );
};

export default ResultPage;