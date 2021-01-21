import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <div>
      <Helmet>
        <title>싸피솔덤</title>
      </Helmet>
      <Route component={MainPage} exact path="/" />
      <Route component={ResultPage} exact path="/result/:teamNums" />
    </div>
  );
};

export default App;
