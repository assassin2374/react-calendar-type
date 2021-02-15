import * as React from 'react';
import Calendar from "./Calendar";
import Schedule from "./Schedule";
import { BrowserRouter as Router, Route } from 'react-dom';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/'

const App = () => {
  return (
    <div>
        <Router>
          <Route exact path="/" component={Calendar} />
          <Route path="/schedule/:id" component={Schedule} />
        </Router>
    </div>
  );
}

export default App;
