import React from 'react';
import ReactDOM from 'react-dom';

/* STYLES  IN JSX*/
var ButtonStyles = {
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
  getInitialState: function(){
     return {
       count: 0
     }
  },
  render: function(){
    return (
      <div class="my-component">
        <h1 style = {Header1Style}>Count: {this.state.count}</h1>
        <button style = {ButtonStyles} type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});

ReactDOM.render(<Counter/>, document.getElementById('counter'));