import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../../actions/AuthActions";

function Navbar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    };
  });

  const onClick = (e) => {
    dispatch(logOut());
  };
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <a className='navbar-brand' href='/'>
            Your Site Name
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            {state && state.isAuthenticated ? (
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <a className='nav-link' href='#' onClick={(e) => onClick(e)}>
                    Logout
                  </a>
                </li>
              </ul>
            ) : (
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <a className='nav-link' href='/login'>
                    Login
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/register'>
                    Register
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
