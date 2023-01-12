import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SingIn from './components/SignIn/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<SingIn />}></Route>
        <Route exact path='/homepage' element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
