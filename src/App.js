// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


let about = "About Us";
function App() {
  // const [darkMode, setDarkMode] = useState(false)
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [active, setActive] = useState("home")
  // const [title, setTitle] = useState("TextUtils")

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#2d3740'
      showAlert("Dark mode is enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled", "success")
    }
  }

  // const titleBlink=(number)=>{
  //   setInterval(() => {
  //     document.title="TextUtils - Home"
  //   }, 500);
  //   setInterval(() => {
  //     document.title=`TextUtils - Home (${number})`
  //   }, 1000);
  // }


  const showTitle=(title)=>{
    document.title=title
  }

  const activeLink=(input)=>{
    setActive(input);
  }

  return (
    <>
      {/* {titleBlink(4)} */}

      <Router>
      <Navbar aboutText={about} mode={mode} toggleMode={toggleMode} active={active}/>
      <Alert alert={alert} />
      <div className="container my-4">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} title={showTitle} activeLink={activeLink}/>
            </Route>
            <Route exact path="/">
              {/* <Home /> */}
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} 
              title={showTitle} activeLink={activeLink} />
            </Route>
          </Switch>
      </div>
      </Router>

    </>
  );
}


export default App;
