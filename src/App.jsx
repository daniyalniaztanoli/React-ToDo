import React, { useState } from 'react'
import './App.css'
import { Header } from './Components/Header';
import { Forms } from './Components/Forms';

const App = () => {
  const [Input, setInput] = useState("");
  const [Todo, setTodo] = useState([]);

  return (
    <div className=''>
      <Header/>
      <Forms/>
    </div>
  )
}

export default App;
