import logo from './logo.svg';
import './App.css';
//packages I need to run things
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';

//the pages
import Home from './pages/Home'
import Test from './pages/Test'
import Family from './pages/Family'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SingleFamily from './pages/SingleFamily'
import Diary from './pages/Diary'
import NewEntry from './pages/NewEntry'
import NewGrandparent from './pages/NewGrandparent'
import NewParent from './pages/NewParent'
import NewSibling from './pages/NewSibling'
import MyDiary from './pages/MyDiary'
//Components
import Header from './components/Header'
import Footer from './components/Footer'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Routes >
        <Route path='/' index element={<Home />} />
        <Route path="/family" element={<Family />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/singlefamily" element={<SingleFamily />} />
        <Route path="/mydiary" element={<MyDiary />} />

        <Route path="/newEntry" element={<NewEntry />} />
        <Route path="/newGrandparent" element={<NewGrandparent />} />
        <Route path="/newParent" element={<NewParent />} />
        <Route path="/newSibling" element={<NewSibling />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/logout' element={<Home />} />

      </Routes>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
