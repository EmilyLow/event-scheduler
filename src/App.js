
import './App.css';
import styled, { ThemeContext } from "styled-components";

import Schedule from "./components/Schedule";

import React, {useState} from 'react';


function App() {

  const defaultSettings = {
    startTime: 7,
    numHours: 12,
    numDays: 7,
    military: true
};

  const [settings, setSettings] = useState(defaultSettings);


  return (
   
      <Layout>
      
        <Schedule settings={settings}/>
      </Layout>
  
    
  );
}

const Layout = styled.div`
  margin-left: 50px;
  margin-top: 80px;


`

export default App;
