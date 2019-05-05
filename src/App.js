import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Contributions from './components/Contributions';
import ContributionDetail from './components/ContributionDetail';

class App extends React.PureComponent {
  state = {
    data: []
  };

  componentDidMount() {
    fetch('https://api.myjson.com/bins/jpfmg')
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={props => <Contributions {...props} data={data} />}
            />
            <Route
              path="/contribution/:id"
              render={props => <ContributionDetail {...props} data={data} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
