import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import Preferences from './components/Preferences/Preferences'
import Login from './components/Login/Login'
import useToken from './components/App/useToken';
import './App.css';

function App() {
  const {token, setToken} = useToken()
  
  if(!token){
    return <Login setToken={setToken}/>
  }

  return (
    <div className='wrapper'>
      <h1>Applicaton</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={null}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/preferences' exact element={<Preferences/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
