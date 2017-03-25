import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const App = React.createClass({
  render(){
    return(
      <article>
        <h1>Hello World</h1>
      </article>
      )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById("root")
);