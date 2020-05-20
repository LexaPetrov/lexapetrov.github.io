import React, { useState, useEffect } from 'react';
import './App.css';

import { getAge } from './functions'

function App() {
  const [age, setAge] = useState('')
  useEffect(() => setAge(getAge()), [age])
    

  return (
    <div className="App">
      {age}
    </div>
  )
}

export default App
