import React, { useState, useEffect, useCallback } from 'react';

// ROUTER
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

// USE
import { useWindowSize } from 'react-use'

// CONFETTI
import Confetti from 'react-confetti'

// FULLPAGE
import ReactFullpage from '@fullpage/react-fullpage';

// BOOTSTRAP
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

// SCSS
import './ResultPage.scss';
import { ThemeProvider } from 'react-bootstrap';

import Flippy, { FrontSide, BackSide } from 'react-flippy';

const ResultPage = ({ match }) => {
  // HISTORY
  const history = useHistory();

  const { width, height } = useWindowSize()

  const [ standardNums, setStandardNums ] = useState('');
  const [ suffledNums, setSuffledNums ] = useState('');
  
  const [ nums, setNums ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const initialSetting = useCallback(async () => {
    const standard = [];
    for (var i = 1; i <= match.params.teamNums; i++) {
      standard.push(i)
    }
    setStandardNums(standard);
  }, [match.params.teamNums])

  const memoryNums = useCallback(async () => {
    const temp = [];
    for (var i = 1; i <= match.params.teamNums; i++) {
      temp.push(i)
      setNums(temp);
    }
  }, [match.params.teamNums])
  
  useEffect(() => {
    initialSetting();
    memoryNums();
  }, [initialSetting, memoryNums]);



  const suffling = () => {
    if (!suffledNums) {
      for (var i = 0; i < standardNums.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        [standardNums[i], standardNums[j]] = [standardNums[j], standardNums[i]];
        setSuffledNums(standardNums)
      }
    } else {
      history.push(`/result/${match.params.teamNums}`)
    }
  }

  const initSuffledNums = () => {
    setSuffledNums('')
    history.push(`/result/${match.params.teamNums}`)
  }

  if (loading) {
    return <h1>대기 중...</h1>;
  };
  if (!nums) {
    return (
      <div>
        <h1>하하</h1>
      </div>
    );
  };
  if (!suffledNums) {
    return (
      <ReactFullpage
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section main-page">
              <div className="d-flex flex-column align-items-center">
                <h2>총 {match.params.teamNums}팀</h2>
                <div className="d-flex">
                  {nums.map(num => 
                    <div>
                      <h2>{num}</h2>
                      <div className="m-2">
                      <Flippy
                        flipOnHover={false}
                        flipOnClick={true} 
                        flipDirection="horizontal" 
                        style={{ width: '100px', height: '150px' }}
                      >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        RICK
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        ROCKS
                      </BackSide>
                    </Flippy>
                      </div>
                    </div>
                  )}
                </div>
                <h3>셔플: {suffledNums}</h3>
                {suffledNums &&
                  <div>
                    <Button onClick={initSuffledNums} className="" variant="dark">다시</Button>
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

  return (
    <ReactFullpage
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section main-page">
              <div className="d-flex flex-column align-items-center">
                <h2>총 {match.params.teamNums}팀</h2>
                <div className="d-flex">
                  {nums.map(num => 
                    <div>
                      <h2>{num}</h2>
                    </div>
                  )}
                </div>
                <div className="d-flex">
                  {suffledNums.map(snum => 
                    <div>
                      <div className="m-2">
                      <Flippy
                        flipOnHover={false}
                        flipOnClick={true} 
                        flipDirection="horizontal" 
                        style={{ width: '100px', height: '150px' }}
                      >
                      <FrontSide
                        style={{
                          backgroundColor: '#41669d',
                        }}
                      >
                        
                      </FrontSide>
                      <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        {snum} 팀
                      </BackSide>
                    </Flippy>
                      </div>
                    </div>
                  )}
                </div>
                <h3>셔플: {suffledNums}</h3>
                {suffledNums &&
                  <div>
                    <Button onClick={initSuffledNums} className="" variant="dark">다시</Button>
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