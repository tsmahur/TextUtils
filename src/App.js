// import logo from './logo.svg';
import './App.css';
import About from './textUtilsComponents/About';
import Navbar from './textUtilsComponents/Navbar'
import TextForm from './textUtilsComponents/TextForm'
import React, { useState,useEffect } from 'react'
import Alert from './textUtilsComponents/Alert';
import ListTable from './formAndListComponent/ListTable';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Forms from './formAndListComponent/Forms';
import { Todos } from './toDoComponents/Todos'; //because of arrow function  we need to put in { }
import { AddTodo } from "./toDoComponents/AddTodo";
import PageNotFound from "./PageNotFound/PageNotFound"


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


  // const showTitle=(title)=>{
  //   document.title=title
  // }

  const activeLink=(activeTab,title)=>{
    setActive(activeTab)
    document.title=title
  }


  // ----------------ToDo starts------------------------
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work need to add hooks and state
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => { //hooks
      return e !== todo;
    }));
    console.log("deleted", todos)
    // localStorage.setItem("todos", JSON.stringify(todos)); no need as useEffect will work fine
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  //T--------------------------Todos End--------------------------

  return (
    <>
      {/* {titleBlink(4)} */}

      <Router>
      <Navbar  mode={mode} toggleMode={toggleMode} active={active}/>
      <Alert alert={alert} />
      <div className="container my-4">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} activeLink={activeLink}/>
            </Route>
            <Route exact path="/">
              {/* <Home /> */}
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} 
              activeLink={activeLink} />
            </Route>
            <Route exact path="/list">
              <ListTable mode={mode}  activeLink={activeLink}/>
            </Route>
            <Route exact path="/form">
              <Forms mode={mode} activeLink={activeLink}/>
            </Route>

            {/* //--------------- ToDo-------------------- */}
            <Route exact path="/todos" render={()=>{
            return(
            <>
            {/* {showTitle("TextUtils - ToDos")}
            {activeLink("todos")} */}
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} mode={mode} activeLink={activeLink}/> 
            </>)
          }}> 
          </Route>
          {/*--------------------- Todo end----------------- */}
          <Route >
              <PageNotFound/>
            </Route>
          </Switch>
      </div>
      </Router>

    </>
  );
}


export default App;
