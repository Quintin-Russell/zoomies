import { useState, useEffect } from 'react';

import Header from './components/header';

// import './reset.css';

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

  return <Header />;
}

export default App;
