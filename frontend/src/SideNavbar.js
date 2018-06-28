import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import { history } from './history';
import createHistory from 'history/createBrowserHistory';
import { LineGraph, GaugeGraph, PieChart } from "carbon-addons-data-viz-react";
class SideNavbar extends React.Component{



    map = (event) => {
        history.push("/Map");
    }
    analytics = (event) => {
        history.push("/Analytics");
    }

  render(){

    var sidenav = {
      height: "100%",
      width: "200px",
      position: 'fixed',
      top: 50,
      left: 0,
      backgroundColor: 'white',
      borderRight : '1px solid #f5f6f6',
      letterSpacing: "0.3em",
      textAlign: 'center',

    };


    var navitem= {
      textDecoration: 'none',
      fontSize: 12,
      fontWeight: "100",
      textAlign: 'center',
      color: '#818181',
      display: 'inline-block',
      backgroundColor: ' white',
      padding: "10px",
      width: "200px",
      borderTop: '2px solid #3d4a56',
      borderRight: '2px solid #f5f6f6',


    }
    var svg = {
      display: "inline-block",
      height: "1.5em",
      userSelect: "none" ,
      verticalAlign: "text-top",
      width : "3.3em",
      float : "left",

      marginLeft : "10px"

    }
    var first = {
      display : "inline-block",
      marginTop : "40px",
      borderBottom: "1px solid #f5f6f6",

    }
    var contain = {
      backgroundColor : 'red',
      color : 'red',
      height : "100%"
    }




    return(

        <div style={sidenav} className="sidenav">
            <a href=''style={first}>  </a>
            <a style={navitem}>DASHBOARD
               <svg id="Layer_1"  style={svg}  data-name="Layer 1"  viewBox="0 0 100 100"><path class="cls-1" d="M84.88,30.53H15.12a3.74,3.74,0,1,1,0-7.49H84.88a3.74,3.74,0,1,1,0,7.49Z"/><path class="cls-1" d="M84.88,53.74H15.12a3.74,3.74,0,1,1,0-7.49H84.88a3.74,3.74,0,1,1,0,7.49Z"/><path class="cls-1" d="M84.88,77H15.12a3.74,3.74,0,1,1,0-7.49H84.88a3.74,3.74,0,1,1,0,7.49Z"/></svg>
            </a>
            <a href="" style={navitem} onClick={this.analytics}>ANALYTICS
               <svg id="Layer_1" style={svg} data-name="Layer 1" viewBox="0 0 100 100"><path class="cls-2" d="M79.06,97.17H24.61a5.08,5.08,0,0,1-5.16-5V7.82a5.08,5.08,0,0,1,5.16-5H79.06a5.08,5.08,0,0,1,5.16,5V92.18A5.08,5.08,0,0,1,79.06,97.17ZM25.9,90.93H77.76V9.07H25.9Z"/></svg>
            </a>
            <a href="" style={navitem} onClick={this.charts} >CHARTS
                <svg id="Layer_1" style={svg} fill={"red"} data-name="Layer 1" viewBox="0 0 100 100"><path class="cls-1" d="M23,85.49l-20-20a3.74,3.74,0,0,1,5.29-5.29L22,73.95,64.5,14.51,97.21,51.89a3.74,3.74,0,0,1-5.64,4.93L65.09,26.56Z"/></svg>
            </a>
            <a href="" style={navitem} onClick={this.map}>MAP
                <svg id="Layer_1" data-name="Layer 1"  fill={"red"}  style={svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path class="cls-1" d="M83.9,35.89A31.1,31.1,0,1,0,25.72,51.14h0L52.24,95.21l26.17-41.7h0A30.94,30.94,0,0,0,83.9,35.89ZM52.24,48.5A13.86,13.86,0,1,1,66.11,34.63,13.86,13.86,0,0,1,52.24,48.5Z"/></svg>
            </a>
            <a href="" style={navitem} onClick={this.email}>EMAIL
                <svg id="Layer_1" data-name="Layer 1"     style={svg} viewBox="0 0 100 100"><path class="cls-1" d="M94.39,81.34H6.11A5.12,5.12,0,0,1,1,76.23V19.93a5.12,5.12,0,0,1,5.11-5.11H94.39a5.12,5.12,0,0,1,5.11,5.11v56.3A5.12,5.12,0,0,1,94.39,81.34ZM7.58,74.77H92.93V21.39H7.58Z"/><path class="cls-1" d="M52.35,54.34,10.43,29.19A3.6,3.6,0,0,1,14.13,23l38,22.81L86.22,23.1a3.6,3.6,0,0,1,4,6Z"/></svg>
            </a>
        </div>


    );
  }
}

export default SideNavbar
