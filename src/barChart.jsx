import React from 'react'
import * as d3 from 'd3'

const data = [
  { town: 'Macondo', pop: 24 },
  { town: 'Wonderland', pop: 47 },
  { town: 'Oz', pop: 66 },
  { town: 'Gondor', pop: 17 },
];

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

const DatumText = ({
  textWidth,
  textGutter,
  barMargin,
  barHeight,
  yScale,
  index,
  town,
}) => (
    <text
      x={textWidth - textGutter}
      y={yScale(index) + barMargin + barHeight / 2}
      textAnchor='end'
    >
      {town}
    </text>
  );

const DatumBar = ({
  textWidth,
  barHeight,
  yScale,
  xScale,
  index,
  pop,
}) => (
    <rect
      x={textWidth}
      y={yScale(index)}
      width={xScale(pop)}
      height={barHeight}
      rx='5'
      ry='5'
      className={pop < 50 ? 'population-bar' : 'population-bar--emphasis'}
    />
  );

const DatumNumber = ({
  textWidth,
  textGutter,
  barMargin,
  barHeight,
  yScale,
  xScale,
  index,
  pop,
}) => (
    <text
      x={textWidth + xScale(pop) - textGutter}
      y={yScale(index) + barMargin + barHeight / 2}
      textAnchor='end'
    >
      {pop}
    </text>
  );

const Datum = ({
  datum,
  index,
  textWidth,
  textGutter,
  barMargin,
  barHeight,
  yScale,
  xScale,
}) => (
    <g>
      <DatumText
        textWidth={textWidth}
        textGutter={textGutter}
        barMargin={barMargin}
        barHeight={barHeight}
        yScale={yScale}
        index={index}
        town={datum.town}
      />

      <DatumBar
        textWidth={textWidth}
        barHeight={barHeight}
        yScale={yScale}
        xScale={xScale}
        index={index}
        pop={datum.pop}
      />

      <DatumNumber
        textWidth={textWidth}
        textGutter={textGutter}
        barMargin={barMargin}
        barHeight={barHeight}
        yScale={yScale}
        xScale={xScale}
        index={index}
        pop={datum.pop}
      />
    </g>
  );

export const BarChart = ({
  svgWidth,
  svgHeight,
  textWidth,
  textGutter,
  barMargin,
  barHeight,
  yScale,
  xScale,
  data,
}) => (
    <svg width={svgWidth} height={svgHeight}>
      {data.map((datum, i) => (
        <Datum
          key={i}
          datum={datum}
          index={i}
          textWidth={textWidth}
          textGutter={textGutter}
          barMargin={barMargin}
          barHeight={barHeight}
          yScale={yScale}
          xScale={xScale}
        />
      ))}
    </svg>
  );
export default BarChart

const App = () => (
  <div className='container'>
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
  </div>
);

