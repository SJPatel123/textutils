import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0b264d';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  }
  
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
