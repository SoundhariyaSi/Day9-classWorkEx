import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from "./Layout";
import Home from './Components/Home';
import Albums from './Components/Albums';
import Singers from './Components/Singers';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Singers" element={<Singers/>} />
        <Route path="Albums" element={<Albums/>} />
    </Route>
    </Routes>
  </BrowserRouter>
</div>
)}
export default App;

