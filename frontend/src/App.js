import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Createpost from './components/CreatePost/Createpost';
// import Header from './components/Header/header';
import Landpage from './components/Landpage/Landpage';
import PostView from './components/PostView/postview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landpage />} />
        <Route path="/postview" element={<PostView />} />
        <Route path="/createpost" element={<Createpost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
