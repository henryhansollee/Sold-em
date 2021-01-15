import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ResultPage.scss';

const ResultPage = ({ match }) => {
  const [ standardNums, setStandardNums ] = useState('');
  const [ suffledNums, setSuffledNums ] = useState('');
  const standard = [];
  useEffect(() => {
    for (var i = 1; i <= match.params.teamNums; i++) {
      standard.push(i)
    }
    setStandardNums(standard)
  }, [])

  const suffling = () => {
    for (var i = 0; i < standardNums.length; i++) {
      var j = Math.floor(Math.random() * (i + 1));
      [standardNums[i], standardNums[j]] = [standardNums[j], standardNums[i]];
      setSuffledNums(standardNums)
    }
  }

  return (
    <div>
      <h1>ResultPage</h1>
      <h2>{match.params.teamNums}</h2>
      <h2>기준: {standardNums}</h2>
      <h3>셔플: {suffledNums}</h3>
      <button onClick={suffling}>셔플</button>
      <Link to="/">처음으로</Link>
    </div>
  );
};

export default ResultPage;