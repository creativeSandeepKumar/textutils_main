import React from 'react';
import "./Navbar.css";

const Navbar = (props) => {

const openMenu = () => {
  let colorPallete = document.getElementById("navbarSection");
    colorPallete.classList.toggle("openIcon");

}


  return (
    <main className="navbar-main"  >
      <section className="navbar-section1">
        <aside className="navbar-aside1">
          <ul className="navbar-list1">
            <li className="navbar-listItem"><h3>TextUtils</h3></li>
            <li className="navbar-listItem">Home</li>
            <li className="navbar-listItem">About</li>
          </ul>
        </aside>
        <aside className="navbar-aside2">
          <ul className="navbar-list2">
            <li className="navbar-listItem" id='navbarMenu' onClick={openMenu}>
            <i className="fa-solid fa-bars"></i>
            </li>
          </ul>
        </aside>
      </section>
      <section className="navbar-section2" id='navbarSection'>
          <ul className="navbar-list3">
            <li className="navbar-colorItem navbar-primary" onClick={()=>props.togglemode("primary")} >
            </li>
            <li className="navbar-colorItem navbar-danger" onClick={()=>props.togglemode("danger")} >
            </li>
            <li className="navbar-colorItem navbar-success" onClick={()=>props.togglemode("success")} >
            </li>
            <li className="navbar-colorItem navbar-warning" onClick={()=>props.togglemode("warning")} >
            </li>
            <li className="navbar-colorItem navbar-light" onClick={()=>props.togglemode("light")} >
              </li>
            <li className="navbar-colorItem navbar-dark" onClick={()=>props.togglemode("dark")} >
            </li>
          </ul>
      </section>
    </main>
  )
}

export default Navbar