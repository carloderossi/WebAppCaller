// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


const App = () => {
   const [cdrCloudIDs, setcdrCloudIDs] = useState([]);
   const functURL = process.env.CDR_ID_FUNCT_URL; 
   
   console.log('configured URL: ', functURL)

   useEffect(() => {
      fetch('https://api.nasa.gov/planetary/apod?api_key=qHRNOGuPFkO0alZ1AfyaVx2Y5ypOhjFHp5weq8ol&count=1&hd=true')
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
             <div className="cdrCloudID-title" key={cdrCloudID.url}>
                <h2 className="cdrCloudID-explanation">{cdrCloudID.title}</h2>
                <p className="cdrCloudID-explanation">Explanation: {cdrCloudID.explanation}</p>
                <p className="cdrCloudID-title">configured function's URL: {functURL}</p>
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
