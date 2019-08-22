import ReactDOM from "react-dom";
import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));

///////////////////////////////////////////////////////
// as functional component

// const MyComponent = () => {
//   return (
//     <h1>Hello World</h1>
//   )
// }

///////////////////////////////////////////////////////
// without JSX

// const MyComponent = () => {
//   return React.createElement(
//     'h1',
//     null,
//     'Hello World'
//   )
// }

///////////////////////////////////////////////////////
// with Props

// change render reclaration
// ReactDOM.render(<MyComponent name="Jimmy" />, document.getElementById("root"));

// change the class
// class MyComponent extends React.Component {
//   render() {
//     const { name } = this.props
//
//     return (
//       <h1>Hello {name}</h1>
//     )
//   }
//
// }

///////////////////////////////////////////////////////
// with Props as functional

// const MyComponent = ({
//   name
// }) => {
//   return (
//     <h1>Hello {name}</h1>
//   )
// }

///////////////////////////////////////////////////////
// with default props

// static defaultProps {
//   foo: "bar"
// }

// functional

// {
//   name = 'Guest'
// }

///////////////////////////////////////////////////////
// with state

// constructor(props) {
//   super(props)

//   this.state = {
//     clickCount: 0
//   }
// }

// handleClick: () => {
//   this.setState((currentState) => {
//     return {
//       clickCount: clickCount + 1
//     }
//   }
// }

// functional

// import React, { useState } from ‘react’

// const [ count, setCount ] = useState(0)
