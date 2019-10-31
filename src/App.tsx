import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import EmployeeTable from "./components/EmployeeTable";
import UpdateForm from "./components/UpdateForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/employees" component={EmployeeTable} />
            <Route path="/update" component={UpdateForm} />
          </Switch>
        </Router>
      </header>
    </div>
  );
};

export default App;
