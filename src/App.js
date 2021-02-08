import React from "react";
import Home from "./routes/Home";
import calendar from "./routes/calendar";
import todolist from "./routes/todolist";
import diary from "./routes/diary";
import { HashRouter, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <HashRouter> 
      <Route path="/" exact={true} component={Home} />
      <Route path="/calendar" component={calendar} />
      <Route path="/todolist" component={ todolist } />
      <Route path="/diary" component={ diary } />
    </HashRouter>
  );
}

export default App;
