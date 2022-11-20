import logo from './logo.svg';
import './App.css';
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Home from './pages/Home'
import Header from './components/Header'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Test from './pages/Test'
const client = new ApolloClient({
  uri: 'graphql',
  cache: new InMemoryCache()
})
function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Routes >
        <Route path='/' index element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Home /> */}

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
    </ApolloProvider>
  );
}

export default App;
