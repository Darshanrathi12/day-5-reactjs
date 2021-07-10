import logo from './logo.svg';
import './App.css';
import React from 'react';
 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "Header from props...",
            content: "Content from props..."
        }
    }
    render() {
        return (
            <div>
                <h1><Header headerProp={this.state.header} /></h1>
                <h2><Content contentProp={this.state.content} /></h2>
            </div>
        );
    }
 
}
 

class Header extends React.Component {
    render() {
        return (<div><h1>{this.props.headerProp}</h1></div>);
    }
}
 
class Content extends React.Component {
    render() {
        return (<div><h2>{this.props.contentProp}</h2> </div>);
    }
}
export default App;
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
