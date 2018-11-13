import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as d3 from 'd3'

import { BarChart } from './barChart'

const data = [
  { town: 'Macondo', pop: 54 },
  { town: 'Wonderland', pop: 47 },
  { town: 'Oz', pop: 66 },
  { town: 'Gondor', pop: 17 },
];
class App extends Component {
  render() {
    const svgWidth = 500;
    const svgHeight = 200;
    const textWidth = 115;
    const textGutter = 10;
    const barMargin = 5;
    const xScale = d3.scaleLinear()
      .domain([0, 100])
      .range([textWidth, svgWidth - textWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, data.length])
      .range([0, svgHeight]);

    const barHeight = yScale(1) - barMargin;
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
          <BarChart
            svgWidth={svgWidth}
            svgHeight={svgHeight}
            textWidth={textWidth}
            textGutter={textGutter}
            barMargin={barMargin}
            barHeight={barHeight}
            yScale={yScale}
            xScale={xScale}
            data={data}
          />
        </header>
      </div>
    );
  }
}

export default App;
