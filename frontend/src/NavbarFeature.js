import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarFeature extends React.Component {

    render() {
      var navstyle={
        backgroundColor:'#3d4a56',
        
      }
      var svg={
        backgroundColor:' #3d4a56',
        marginLeft : "60px",

        marginTop: "10px"
      }
        return (
          <nav className="navbar navbar-fixed-top navbar-light bg-faded " style={navstyle}>
                <span className="search_icon">🔍</span>
                <input type="search" className = "search_bar" name="q"/>

                <div>
                        <svg id="Layer_1" style={svg} fill = "white" data-name="Layer 1" width="9em" viewBox="0 0 219.67 71.33">
                        <linearGradient id="linear-gradient" x1="1621.32" y1="-490.67" x2="1628.14" y2="-490.67" gradientTransform="translate(-1436.26 815.22) rotate(-11.11)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0eb2d8"/><stop offset="1" stop-color="#5be8b9"/></linearGradient><linearGradient id="linear-gradient-2"/>
                        <path class="cls-6" d="M156.06,42.86h-.73V22a1.61,1.61,0,0,1,1.61-1.61h.73v20.9A1.61,1.61,0,0,1,156.06,42.86Zm-41.25,0h-.73V22a1.61,1.61,0,0,1,1.61-1.61h.73v20.9A1.61,1.61,0,0,1,114.81,42.86Zm-106.88,0H7.2V22a1.61,1.61,0,0,1,1.61-1.61h.73v20.9A1.61,1.61,0,0,1,7.93,42.86Z"/>
                        <path class="cls-6" d="M27.71,41.67a1.16,1.16,0,0,1-1.19,1,1.11,1.11,0,0,1-1.14-1V21.16a1,1,0,0,1,1.14-1,1,1,0,0,1,1.14,1v2.38a7.11,7.11,0,0,1,6.39-3.62,8.69,8.69,0,0,1,8.54,8.73v13a1.09,1.09,0,0,1-1.19,1,1.05,1.05,0,0,1-1.15-1v-13a6.71,6.71,0,0,0-6.39-6.53,6.26,6.26,0,0,0-6.15,6.53Z"/>
                        <path class="cls-6"   d="M81,34.28V21.21a1.12,1.12,0,0,1,1.19-1,1.14,1.14,0,0,1,1.14,1V34.28a6.39,6.39,0,1,0,12.78,0V21.16a1.12,1.12,0,0,1,1.19-1,1,1,0,0,1,1.14,1V34.28a8.73,8.73,0,1,1-17.45,0Z"/>
                        <path class="cls-6" d="M171.41,22a3.16,3.16,0,0,1-.19-.72,1.27,1.27,0,0,1,1.33-1.1,1,1,0,0,1,1,.57l6.53,18L186.57,21c.19-.48.33-.86,1-.86s1.38.43,1.38,1a2.94,2.94,0,0,1-.19.76l-7.53,20.41a1.27,1.27,0,0,1-1.14.67,1.12,1.12,0,0,1-1.1-.67Z"/>
                        <path class="cls-6" d="M213.59,28.47c0,3.51-2,3.6-4,3.6H198.77v2c0,4,3.18,6.5,7.52,6.5,3.83,0,4.58-1.87,5.56-1.87a1.24,1.24,0,0,1,1.07,1.12c0,1-2.57,2.85-6.73,2.85-5.7,0-9.72-3.46-9.72-8.65V28.42a8.57,8.57,0,0,1,8.6-8.41A8.43,8.43,0,0,1,213.59,28.47Zm-4.86,1.68c2.1,0,2.62-.28,2.62-1.68a6.38,6.38,0,0,0-6.26-6.4,6.25,6.25,0,0,0-6.31,6.17v1.92Z"/>
                        <path class="cls-6"  d="M65.64,41.13H64.44c-3.62,0-4.91-1.24-4.91-4.63V10.89a1.12,1.12,0,0,0-1.19-1,1.14,1.14,0,0,0-1.14,1V36.5c0,4.77,2.53,6.82,7.25,6.82h1.19a1.08,1.08,0,0,0,1.1-1.1A1.05,1.05,0,0,0,65.64,41.13Z"/><path class="cls-6"  d="M140.6,41.13h-1.19c-3.62,0-4.91-1.24-4.91-4.63V10.89a1.12,1.12,0,0,0-1.19-1,1.14,1.14,0,0,0-1.14,1V36.5c0,4.77,2.53,6.82,7.25,6.82h1.19a1.08,1.08,0,0,0,1.1-1.1A1.05,1.05,0,0,0,140.6,41.13Z"/>
                        <path class="cls-7"  fill="#5BE8B9" d="M60.41,23a5,5,0,0,0,6-4.92,5,5,0,0,0-6,4.92Z"/><path class="cls-8" fill="#5BE8B9" d="M135.8,23a5,5,0,0,0,6-4.92,5,5,0,0,0-6,4.92Z"/></svg>

                </div>
            </nav>
        );
    }
}
export default NavbarFeature
