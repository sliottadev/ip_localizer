import React, {useState} from 'react';
import './App.css';
import Title from './components/title/Title';
import Search from './components/search/Search';
import Result from './components/result/Result';
import History from './components/history/History';
import { HistoryModel } from './components/history/HistoryModel';
import Statistics from './components/statistics/Statistics';
import SubTitle from './components/subTitle/SubTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
import {locateIP, getCountryInfo} from './ipLocalizerAPI.js'
import {copyArray, addStatisticData} from './Helper'
import { ResultModel } from './components/result/ResultModel';
import { StatisticsModel } from './components/statistics/StatisticsModel';
import BlockUi from './components/blockUI/BlockUi'

var statisticModel = new StatisticsModel();

function App() {

  const [showResult, setShowResult] = useState(true)
  const [showStatistics, setshowStatistics] = useState(true)
  const [showHistory, setShowHistory] = useState(true)
  const [history, setHistory] = useState([]);
  const [resultData, setResultData] = useState(null)
  const [statisticsData, setStatisticsData] = useState(null);
  const [render, setRender] = useState(true);
  const [blocking, setBlocking] = useState(false);


  const getIpData = (ip)=>{  
    setBlocking(true);
    locateIP(ip).done( response=>{
      //get IP info
      var historyArr=[];
      historyArr = copyArray(history);
      historyArr.push( new HistoryModel(history.length+1, ip, response.countryName) )
      setHistory(historyArr);

      //get Country Info
      getCountryInfo(response.countryName)
        .done((data)=>{                 
          var resultModel = new ResultModel(data[0]);
          setResultData(resultModel);
          updateStatistic(statisticModel, resultModel);
          setBlocking(false);
        })      
    })
  }

  const updateStatistic = (statModel, newData)=>{
    if ((statModel.GreaterDistance===0) || (newData.distance > statModel.GreaterDistance)) 
      statModel.GreaterDistance = newData.distance;
    if ((statModel.ShortestsDistance===0) || (newData.distance < statModel.ShortestsDistance)) 
      statModel.ShortestsDistance = newData.distance;
    statModel.count+=1;
    statModel.sum += newData.distance;
    statModel.AverangeDistance = (statModel.sum / statModel.count); 
    addStatisticData(statModel, newData);
    setStatisticsData(statModel);
    setRender(!render);
  }

  return (
    <div className="App">
      <Title  className="app__title" />
      <div className="app_container">
        <Search className="app__search" functionSearch={getIpData}/>
      </div>
      <div className="app_container">
        <SubTitle text="Result"  control={setShowResult} showing={showResult} />
        <Result showing={showResult}  data={resultData}/>
      </div>
      <div className="app_container">
        <SubTitle text="Statistics" control={setshowStatistics} showing={showStatistics}/>
        <Statistics showing={showStatistics} data={statisticsData} mustRender={render}/>
      </div>
      <div className="app_container">
        <SubTitle text="History" control={setShowHistory} showing={showHistory}/>
        <History showing={showHistory} data={history}/>
      </div>
      <BlockUi blocking={blocking} />
    </div>
  );
}

export default App;
