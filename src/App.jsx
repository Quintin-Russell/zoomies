import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [dogDataMaster, setDogDataMaster] = useState({ message: null });

  useEffect(() => {
    const fetchAllDogData = async () => {
      const rawData = await fetch('http://localhost:5000/all/');
      const jsonData = await rawData.json();
      setDogDataMaster(jsonData);
      console.log('DATA RECIEVED:', jsonData);
    };
    fetchAllDogData().catch((ERR) => console.log('FETCH ERROR:', ERR));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <div>
          <p>Dog Data:</p>
          {dogDataMaster.message &&
            Object.keys(dogDataMaster.message).map((dogBreed) => (
              <p key={dogBreed}>{dogBreed}</p>
            ))}
        </div>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
