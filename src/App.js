import React, {useState} from 'react';
import './App.css';
import Title from './components/title/Title';
import Search from './components/search/Search';
import Result from './components/result/Result';
import History from './components/history/History';
import Statistics from './components/statistics/Statistics';
import SubTitle from './components/subTitle/SubTitle';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [showResult, setShowResult] = useState(true)
  const [showStatistics, setshowStatistics] = useState(true)
  const [showHistory, setShowHistory] = useState(true)

  const getIpExample = (ip) =>{
    getLocation(ip).done( x =>{
      console.log(x)
    })
  }

  getIpExample("5.6.7.8")

  return (
    <div className="App">
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
        <History showing={showHistory}/>
      </div>
    </div>
  );
}

export default App;
