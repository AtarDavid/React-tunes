import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Tracklist from './Tracklist';
import '../assets/css/style.css';

export default class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <div className="title">
            <h2>The Sound of </h2>
            <h1>Nick Cave</h1>
            <p>Data from iTunes</p>
          </div>
          <SearchBar />
        </header >
        <main className="App-main">
          <Tracklist />
          <div id="player">

          </div>
        </main >
      </div >
    )
  }
}