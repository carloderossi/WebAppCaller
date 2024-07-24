// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


const App = () => {
   const [cdrCloudIDs, setcdrCloudIDs] = useState([]);
   const functURL = process.env.CDR_ID_FUNCT_URL 
   console.log('configured URL: ', functURL)
   useEffect(() => {
      fetch(functURL)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setcdrCloudIDs(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
    <div className="cdrCloudIDs-container">
       {cdrCloudIDs.map((cdrCloudID) => {
          return (
             <div className="cdrCloudID-id" key={cdrCloudID.url}>
                <h2 className="cdrCloudID-title">{cdrCloudID.title}</h2>
                <img src={cdrCloudID.hdurl} className="imgcenter" alt='NASA' width='50%' />
                <p className="cdrCloudID-explanation">{cdrCloudID.explanation}</p>
                <p className="cdrCloudID-hdurl">{cdrCloudID.hdurl}</p>
             </div>
          );
       })}
    </div>
    );
 };
 
/*function App() {
  return (
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
  );
}*/

export default App;
