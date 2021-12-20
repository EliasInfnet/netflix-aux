import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './screens/login/login.screen';
import { loginPath } from './screens/login/login.types';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={loginPath} element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
