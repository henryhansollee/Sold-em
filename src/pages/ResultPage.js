import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './ResultPage.css';

import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

// FULLPAGE
import ReactFullpage from '@fullpage/react-fullpage';

import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const ResultPage = ({ match }) => {
  const { width, height } = useWindowSize()
  const history = useHistory();
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
    if (!suffledNums) {
      for (var i = 0; i < standardNums.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        [standardNums[i], standardNums[j]] = [standardNums[j], standardNums[i]];
        setSuffledNums(standardNums)
      }
    } else {
      history.go()
    }
  }

  return (
    <ReactFullpage
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section main-page">
              <div>
                <h2>총 {match.params.teamNums}팀</h2>
                <h2>기준: {standardNums}</h2>
                <h3>셔플: {suffledNums}</h3>
                {suffledNums &&
                  <div>
                    <Button onClick={suffling} className="" variant="dark">다시</Button>
                    <Confetti
                      width={width}
                      height={height}
                    />
                  </div>
                }
                {!suffledNums &&
                  <Button onClick={suffling} className="" variant="dark">셔플</Button>
                }
                <Link className="btn btn-light" to="/">처음으로</Link>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default ResultPage;