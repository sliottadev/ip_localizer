import React, {useState, useEffect} from 'react';
import './App.css';
import Title from './components/title/Title';
import Search from './components/search/Search';
import Result from './components/result/Result';
import History from './components/history/History';
import { HistoryModel } from './components/history/HistoryModel';
import Statistics from './components/statistics/Statistics';
import SubTitle from './components/subTitle/SubTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
import {locateIP} from './IpLocalizerAPI.js'

function App() {

  const [showResult, setShowResult] = useState(true)
  const [showStatistics, setshowStatistics] = useState(true)
  const [showHistory, setShowHistory] = useState(true)
  const [history, setHistory] = useState([]);

  const getIpData = (ip)=>{
    console.log("ejecutado")
    locateIP(ip).done( response=>{
      let historyArr = history;
      historyArr.push( new HistoryModel(history.length+1, ip, response.countryName) )
      setHistory(historyArr);
    })
  }

  useEffect( ( )=>{
    setShowHistory(true)
  }
  , [setHistory])

  return (
    <div className="App">
      <button onClick={() => {getIpData("5.6.7.8")}}>TEST!</button>
      <Title  className="app__title" />
      <div className="app_container">
        <Search className="app__search" />
      </div>
      <div className="app_container">
        <SubTitle text="Result"  control={setShowResult} showing={showResult} />
        <Result showing={showResult}/>
      </div>
      <div className="app_container">
        <SubTitle text="Statistics" control={setshowStatistics} showing={showStatistics}/>
        <Statistics showing={showStatistics}/>
      </div>
      <div className="app_container">
        <SubTitle text="History" control={setShowHistory} showing={showHistory}/>
        <History showing={showHistory} data={history}/>
      </div>
    </div>
  );
}

export default App;
