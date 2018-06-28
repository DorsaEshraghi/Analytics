import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { LineGraph, GaugeGraph, PieChart } from "carbon-addons-data-viz-react";
import './index.css';
import App from './App';
import './App.css';

class Dashboard extends Component {
  state = {
   data: this.createData(12).sort(function(a, b) {
     return a[a.length - 1] - b[b.length - 1];
   }),
    };
  componentDidMount() {
    let i = 0;
    this.interval = setInterval(() => {
      this.updateData(i);
      i++;
    }, 5000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  createData(num) {
    let data = [];
    for (let i = 0; i < num; i++) {
      let tempArr = [];
      let d = new Date();
      let randomNum = Math.floor(Math.random() * 1000 + 1);
      let randomNumTwo = Math.floor(Math.random() * 1000 + 1);
      let randomNumThree = Math.floor(Math.random() * 1000 + 1);
      d = d.getTime() - i * 3000;
      tempArr.push(randomNum, randomNumTwo, randomNumThree, d);
      data.push(tempArr);
    }

    return data;
  }

  updateData(i) {
    let data = this.createData(12).sort(function(a, b) {
      return a[a.length - 1] - b[b.length - 1];
    });

    this.setState({
      data,
      xAxisLabel: `${i}`,
      yAxisLabel: `${i}`,
    });
  }
  render(){
    const props = {
      radius: 80,
      padding: 30,
      amount: 75,
      total: 100,
    };
    const propsline = {
          margin: {
            top: 30,
            right: 20,
            bottom: 75,
            left: 65,
          },
          height: 300,
          width: 800,
          labelOffsetY: 55,
          labelOffsetX: 65,
          axisOffset: 16,
          timeFormat: '%I:%M:%S',
          yAxisLabel: this.state.yAxisLabel,
          xAxisLabel: this.state.xAxisLabel,
          data: this.state.data,
          onHover: '',
          id: this.props.id,
          containerId: this.props.containerId,
          drawLine: this.props.drawLine,
          animateAxes: this.props.animateAxes,
          seriesLabels: ['Series 1', 'Series 2', 'Series 3'],
        };
const halfGaugeProps = {
  gaugePercentages: [
    { low: 0, high: 50, color: '#4B8400' },
    { low: 50, high: 75, color: '#EFC100' },
    { low: 75, high: 100, color: '#FF5050' },
    ],
    size: 'full',
    radius: 80,
    padding: 30,
    amount: 25,
    total: 100,
    valueText: '25%',
    labelText: 'IS 25% FULL',
    tooltipId: 'one-container',
  };

  const halfGaugePropsTwo = {
    gaugePercentages: [
      { low: 0, high: 50, color: '#4B8400' },
      { low: 50, high: 75, color: '#EFC100' },
      { low: 75, high: 100, color: '#FF5050' },
    ],
      size: 'full',
      radius: 80,
        padding: 30,
        amount: 75,
        total: 100,
        valueText: '75%',
        labelText: 'IS 75% FULL',
        tooltipId: 'two-container',
    };
    const halfGaugePropsThree = {
      gaugePercentages: [
        { low: 0, high: 50, color: '#4B8400' },
        { low: 50, high: 75, color: '#EFC100' },
        { low: 75, high: 100, color: '#FF5050' },
      ],
        size: 'full',
        radius: 80,
          padding: 30,
          amount: 90,
          total: 100,
          valueText: '90%',
          labelText: 'IS 90% FULL',
          tooltipId: 'three-container',
      };
      const halfGaugePropsFour = {
        gaugePercentages: [
          { low: 0, high: 50, color: '#4B8400' },
          { low: 50, high: 75, color: '#EFC100' },
          { low: 75, high: 100, color: '#FF5050' },
        ],
          size: 'full',
          radius: 80,
            padding: 30,
            amount: 60,
            total: 100,
            valueText: 'osker1',
            labelText: 'IS 60% FULL',
            tooltipId: 'four-container',
        };
    return(
      <div  style={{backgroundColor:'#f5f6f6', width:"100%", height:"1100px"}}>
          <div style={{backgroundColor:'white',boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",width:"900px", height:"120px",border:"1px solid white",marginTop:"70px",float:"right", marginRight:"80px"}}></div>
          <div style={{backgroundColor:'white',boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",width:"900px", height:"300px",border:"1px solid white", marginTop:"40px",display: "inline-block",float:"right", marginRight:"80px"}}>

            <div style={{display:'inline-block',float:"right"}}>
              <GaugeGraph id="one" {...halfGaugeProps} style={{display:'inline-block'}}/>
           </div>
           <div style={{display:'inline-block',float:"right"}}>
              <GaugeGraph id="two" {...halfGaugePropsTwo} style={{display:'inline-block'}} />
          </div>
          <div style={{display:'inline-block',float:"right"}}>
             <GaugeGraph id="three" {...halfGaugePropsThree} style={{display:'inline-block'}} />
         </div>
         <div style={{display:'inline-block',float:"right"}}>
            <GaugeGraph id="four" {...halfGaugePropsFour} style={{display:'inline-block'}} />

        </div>
         </div>
          <div style={{backgroundColor:'white',boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",width:"900px", height:"300px",border:"1px solid white", marginTop:"20px",float:"right", marginRight:"80px"}}>
          <div>
            <LineGraph {...propsline}/>
          </div>
          </div>
          <div style={{backgroundColor:'white',boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",width:"900px", height:"220px",border:"1px solid white", marginTop:"20px",float:"right", marginRight:"80px"}}>

            <div>  <h8 style= {{width:"30px" ,marginLeft:"60px",height:"60px"}}>USER ENGAGEMENT</h8></div>
            <div id="first" style={{border:"0.3px #f5f6f6", boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)", fontSize:"0.74em",height:"60px" ,marginTop:"10px",width:"20%",height: "160px", marginLeft:"60px", marginButtom:"10px", marginRight:"20px",display:'inline-block'}}>
              AVERAGE TIME SPENT AT OSKER
            </div>
            <div id="second" style={{border:"0.3px solid #f5f6f6", boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",fontSize:"0.74em",width:"20%",height: "160px",marginTop:"10px", marginRight:"20px",marginButtom:"10px", display:'inline-block'}}>
              CURRENT DAY OSKER VISITS
            </div>
            <div id="third" style={{border:"0.3px solid #f5f6f6", boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",fontSize:"0.74em",width:"20%",height:"160px", marginTop:"10px",marginRight:"20px",marginButtom:"10px", display:'inline-block'}}>
                ACCURATE EDUCATION WHAT
            </div>
            <div id="fourth" style={{border:"0.3px solid #f5f6f6", boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",fontSize:"0.74em",width:"20%", height:"160px",marginTop:"10px",marginButtom:"10px" ,display:'inline-block'}}>MOST THROWN OUT ITEM IS</div>

          </div>

      </div>



    );
  }
}
export default Dashboard
