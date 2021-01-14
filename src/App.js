import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import InputPage from './pages/InputPage';
import ResultPage from './pages/ResultPage';

const App = () => {
  return (
    <div>
      <Route component={MainPage} exact path="/" />
      <Route component={InputPage} path="/input" />
      <Route component={ResultPage} exact path="/result" />
    </div>
  );
};

export default App;
