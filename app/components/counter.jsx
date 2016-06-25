import React from 'react';
import ReactDOM from 'react-dom';

/* STYLES  IN JSX*/
var ButtonIncrement = {
    background: '#f1c40f',
    border: 0,
    boxShadow: '0px 5px 0px #927608',
    padding: '20px',
    width: '100%',
    outline: 'none',
    borderRadius: '3px',
    color: '#703688',
    fontWeight: 'bold',
    cursor: 'pointer'
}

var ButtonDecrement = {
    marginTop: '20px',
    background: '#CDCDCD',
    border: 0,
    boxShadow: '0px 5px 0px #9E9E9E',
    padding: '20px',
    width: '100%',
    outline: 'none',
    borderRadius: '3px',
    color: '#703688',
    fontWeight: 'bold',
    cursor: 'pointer'
}

var restartStyle = {
    marginTop: '20px',
    background: 'white',
    border: 0,
    boxShadow: '0px 5px 0px #b7b7b7',
    padding: '20px',
    width: '100%',
    outline: 'none',
    borderRadius: '3px',
    color: 'black',
    fontWeight: 'bold',
    cursor: 'pointer'
}

var Header1Style = {
  margin: 0,
  padding: '20px',
  fontSize: '36px',
  textAlign: 'center'
}

/* React JSX code */

var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  decrementCount: function() {
      this.setState({
          count: this.state.count -1
      });
  },
  restartCount: function(){
      this.setState({
          count: this.state.count = 0
      });
  },
  getInitialState: function(){
     return {
       count: 0
     }
  },
  render: function(){
    return (
      <div class="my-component">
        <h1 style = {Header1Style}>Count: {this.state.count}</h1>
        <button style = {ButtonIncrement} type="button" onClick={this.incrementCount}>Increment</button>
        <button style = {ButtonDecrement} type="button" onClick={this.decrementCount}>Decrement</button>
        <button style = {restartStyle} type="button" onClick={this.restartCount}>Restart</button>
      </div>
    );
  }
});

ReactDOM.render(<Counter/>, document.getElementById('counter'));