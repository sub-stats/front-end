import React, { useState } from 'react';
import './App.css';

import styled from 'styled-components';

import NavTabs from './components/NavTabs';
import SummaryContentContainer from './components/SummaryContent/SummaryContentContainer';


function App() {
  const [currentSub, setCurrentSub] = useState({name: "Select a subreddit", description: "Subreddit description goes here!"})

  return (
    <div className="App">
      <NavTabs></NavTabs>
      <SummaryContentContainer currentSub={currentSub} setCurrentSub={setCurrentSub}/>
    </div>
  );
}

export default App;
