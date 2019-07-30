import React from 'react';
import './App.css';

import styled from 'styled-components';

import NavTabs from './components/NavTabs';
import MainContentContainer from './components/MainContent/MainContentContainer';


function App() {
  return (
    <div className="App">
    {/* Sidebar can go here */}
      <div>
        <NavTabs></NavTabs>
        <MainContentContainer />
      </div>
    </div>
  );
}

export default App;
