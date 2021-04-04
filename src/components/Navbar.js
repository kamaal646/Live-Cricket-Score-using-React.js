import React from "react";
import { Link, Redirect } from "react-router-dom";



function Navbar( {searchdata, setsearchdata} ) {

 const handleSearch = (e) => {

  console.log(" navbar/....")

  setsearchdata(e.target.value);
  e.preventDefault();

 }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">

       <Link to ="/">
          <a class="navbar-brand" >
               Live cricket score{" "}
          </a>

          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Features
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/MyNavBar">
                    {" "}
                    <li>
                      <a class="dropdown-item"> Let's fun </a>
                    </li>{" "}
                  </Link>
                
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <Link to="/Data">
                    {" "}
                    <li>
                      <a class="dropdown-item"> Live score </a>
                    </li>
                  </Link>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li>
                    <Link to="/logIn">
                    <a class="dropdown-item" >
                      Login
                    </a>
                    </Link>
                  </li>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li>
                    <Link to="/signUp">
                      <a class="dropdown-item">SignUp</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value = {searchdata}
                onChange = { (e) => handleSearch(e) } /> 

              {/* <button class="btn btn-outline-success"  type="submit">
                Search
              </button> */}
            </form>
          </div>
        </div>
      </nav>
 
   
    </div>
  );
}

export default Navbar;
