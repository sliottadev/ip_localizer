import React from 'react';
import './App.css';
import Title from './components/title/Title';
import Search from './components/search/Search';
import Result from './components/result/Result';
import History from './components/history/History';
import Statistics from './components/statistics/Statistics';
import SubTitle from './components/subTitle/SubTitle';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Title  className="app__title" />
      <div className="app_container">
        <Search className="app__search"/>
      </div>
      <div className="app_container">
        <SubTitle text="Result"/>
        <Result className="app__result" />
      </div>
      <div className="app_container">
        <SubTitle text="Statistics"/>
        <Statistics/>
      </div>
      <div className="app_container">
        <SubTitle text="History"/>
        <History/>
      </div>
    </div>
  );
}

export default App;
