// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(12)
  // let counter = 12;

  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter +1);
  };
  
 const removeValue = () => {
  // Pehle check karo: Kya counter 0 se bada hai?
  if (counter > 0) {
    setCounter(counter - 1);
    console.log("Value kam ho rahi hai:", counter - 1);
  } else {
    // Agar counter 0 hai, toh ye message print hoga aur value minus nahi hogi
    console.log("Counter zero par ruk gaya hai!");
  }
};
 


  return (
    <>
    

      <h1>vite aur react</h1>
      <h2>counter now: {counter}</h2>
      <p>hooks is basically used for updating the data in react and in the file as well</p>
      <button onClick ={addValue}
      >AddValue {counter}

      </button>
      
    
      <button
      onClick ={removeValue}
      >removeValue {counter} 
      


      </button>
    </>
  )
}

export default App




// how to use the hooks in react:-
// 1. useState 