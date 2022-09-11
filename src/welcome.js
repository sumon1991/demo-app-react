import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h2>I am a {this.props.model}!</h2>;
//   }
// }

class Car extends React.Component {
  // 1. constructor()
  // 2. getDerivedStateFromProps()
  // 3. render()
  // 4. componentDidMount()
  constructor(props) {
    super(props);
    this.state = {favoritecar: "Honda"};
  }
  // static getDerivedStateFromProps(props, state) {
  //   return {favoritecar: props.favcar };
  // }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecar: "Honda Amaze"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Car is {this.state.favoritecar}</h1>
    );
  }
}


export default Car;