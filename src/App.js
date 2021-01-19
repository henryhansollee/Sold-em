import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';

const App = () => {
  return (
    <div>
      <Route component={MainPage} exact path="/" />
      <Route component={ResultPage} exact path="/result/:teamNums" />
    </div>
  );
};

export default App;
