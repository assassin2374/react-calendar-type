import * as React from 'react';
import Calendar from "./Calendar";
import Schedule from "./Schedule";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from './context/Provider';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/'

const App = () => {
  return (
    <div>
      <Provider>
        <Router>
          <Route exact path="/" component={Calendar} />
          <Route path="/schedule/:id" component={Schedule} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
