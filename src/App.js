import React, { useState } from 'react';
import { Navbar, Alert, TextForm} from './components';
import "./App.css"


const App = () => {

  // usesate Alert and setAlert to populate alert acc. to need
  const [alert, setAlert] = useState(null);

  // showAlert function to set msg and type as prop for 1 sec
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    }


  // removeBodyClasses to remove classes from bg after toggle
  const removeBodyClasses = () => {
    document.body.classList.remove("navbar-dark");
    document.body.classList.remove("navbar-light");
    document.body.classList.remove("navbar-success");
    document.body.classList.remove("navbar-warning");
    document.body.classList.remove("navbar-danger");
    document.body.classList.remove('navbar-primary')
  }

  // togglemode function - to remove and add classes for bg color // if mode light then setmode dark and bgcolor dark also showAlert //else - mode light and bg white
  const togglemode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('navbar-'+cls);
    
    let modeMsg = `${cls} mode has been enabled`;
    showAlert(modeMsg, "Success")
    
  }
  


  return (
    <>
    {/* in navbar pass title mode and togglemode as props */}
    <Navbar togglemode={togglemode}  />
    {/* in alert alert as props */}
    <Alert alert={alert} />
   
    {/* in textform showAlert , heading, mode as props */}
    <TextForm showAlert={showAlert} togglemode={togglemode} />
    </>
  )
}

export default App