import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Posts from './Posts';
import Home from './Home';
function App() {
  return (
    <>
    <div style={{display:'flex',alignItems:"center",justifyContent:"space-evenly",marginTop:"1rem"}}>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="posts">Posts</Link>

    </div>
<Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/posts' element={<Posts/>}/>

</Routes>
    </>
  );
}

export default App;
