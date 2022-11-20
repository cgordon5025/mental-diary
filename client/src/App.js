import logo from './logo.svg';
import './App.css';
//packages I need to run things
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

//the pages
import Home from './pages/Home'
import Test from './pages/Test'
import Family from './pages/Family'
import Login from './pages/Login'
import Signup from './pages/Signup'
//Components
import Header from './components/Header'
import Footer from './components/Footer'
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
        <Route path="/family" element={<Family />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/logout' element={<Home />} />
      </Routes>
      <Footer />

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
