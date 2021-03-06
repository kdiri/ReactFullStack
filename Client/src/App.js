import React, { Component } from 'react';
import Routes from './routes';
import axios from 'axios'


// https://jsonplaceholder.typicode.com/posts
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})


class App extends Component {
  state = {
    hello: null
  }

  componentDidMount() {
    // axiosInstance.get('/posts')
    //     .then(res => console.log(res.data) )
    //     .catch(err => console.log(err) )
    this.asyncFunction()
  }

  asyncFunction = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => console.log(json))
  }

  render() {
    return(
      <div>
        {this.state.hello ? <div> {this.state.hello} </div> : null}
      React
      <Routes />
      </div>
    )}
}


export default App;
