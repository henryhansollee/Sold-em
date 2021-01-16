import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './InputPage.css';

const InputPage = () => {
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
    <div>
      <h1>InputPage</h1>
      <input placeholder="팀 수" teams={teams} onChange={setTeamsNums} />
      <button onClick={sendData}>결과보기</button>
    </div>
  );
};

export default InputPage;