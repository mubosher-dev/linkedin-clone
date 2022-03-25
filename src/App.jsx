import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './components/Login'
import Home from './components/Home'
import { getUserAuth } from "./actions"
import { connect } from 'react-redux'

function App(props) {

  
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);