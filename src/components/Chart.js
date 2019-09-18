import React, { useEffect } from 'react';
import Chart from 'chart.js';
import data from './assets/Data.json';
import './Chart.css';

const dateArr = Object.create(data.map(element => element.Date).splice(0));
const priceArr = Object.create(data.map(element => element['Real Price']).splice(0));
const cpi = Object.create(data.map(element => element['Consumer Price Index']).splice(0));

function App() {
  let dateRange = (Object.create(dateArr).splice(0));
  let dataRangeSNP = (Object.create(priceArr).splice(0));
  let dataRangeCPI = (Object.create(cpi).splice(0));


  const changeDataRange = (targetName) => {
    if (targetName === '10 years') {
      dateRange = (Object.create(dateArr).splice(1645));
      dataRangeSNP = (Object.create(priceArr).splice(1645));
      dataRangeCPI = (Object.create(cpi).splice(1645));
    }
    if (targetName === '40 years') {
      dateRange = (Object.create(dateArr).splice(1285));
      dataRangeSNP = (Object.create(priceArr).splice(1285));
      dataRangeCPI = (Object.create(cpi).splice(1285));
    }
    if (targetName === '5 years') {
      dateRange = (Object.create(dateArr).splice(1706));
      dataRangeSNP = (Object.create(priceArr).splice(1706));
      dataRangeCPI = (Object.create(cpi).splice(1706));
    }
    if (targetName === '1 year') {
      dateRange = (Object.create(dateArr).splice(1755));
      dataRangeSNP = (Object.create(priceArr).splice(1755));
      dataRangeCPI = (Object.create(cpi).splice(1755));
    }
    if (targetName === 'full range') {
      dateRange = (Object.create(dateArr).splice(0));
      dataRangeSNP = (Object.create(priceArr).splice(0));
      dataRangeCPI = (Object.create(cpi).splice(0));
    }
  };

  const handleChart = (e) => {
    document.getElementsByClassName('chartjs-size-monitor')[0].remove();
    changeDataRange(e.target.name);
    document.getElementById('myChart').remove();
    const newCanvas = document.createElement('canvas');
    newCanvas.setAttribute('id', 'myChart');
    document.getElementsByClassName('App')[0].append(newCanvas);

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dateRange,
        datasets: [{
          label: 'S&P real price',
          yAxisID: 'S&P real price',
          data: dataRangeSNP,
          backgroundColor: new Array(2000).fill('rgba(64, 224, 208, 1)'),
          borderColor: new Array(2000).fill('rgba(64, 224, 208, 1)'),
          borderWidth: 1,
        },
        {
          label: 'CPI',
          yAxisID: 'CPI',
          data: dataRangeCPI,
          backgroundColor: new Array(2000).fill('rgba(225,0,0,0.7)'),
          borderColor: new Array(2000).fill('rgba(225,0,0,0.7)'),
          borderWidth: 0.2,
          type: 'line',
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            id: 'S&P real price',
            type: 'linear',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'S&P real price',
              beginAtZero: true,
            },
          }, {
            id: 'CPI',
            type: 'linear',
            position: 'right',
            scaleLabel: {
              display: true,
              labelString: 'CPI',
              beginAtZero: true,
            },

          }],
        },
      },
    });
  };


  useEffect(() => {
    changeDataRange('10 years');
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dateRange,
        datasets: [{
          label: 'S&P real price',
          yAxisID: 'S&P real price',
          data: dataRangeSNP,
          backgroundColor: new Array(2000).fill('rgba(64, 224, 208, 1)'),
          borderColor: new Array(2000).fill('rgba(64, 224, 208, 1)'),
          borderWidth: 1,
        },
        {
          label: 'CPI',
          yAxisID: 'CPI',
          data: dataRangeCPI,
          backgroundColor: new Array(2000).fill('rgba(225,0,0,0.7)'),
          borderColor: new Array(2000).fill('rgba(225,0,0,0.7)'),
          borderWidth: 0.2,
          type: 'line',
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            id: 'S&P real price',
            type: 'linear',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'S&P real price',
              beginAtZero: true,
            },
          }, {
            id: 'CPI',
            type: 'linear',
            position: 'right',
            scaleLabel: {
              display: true,
              labelString: 'CPI',
              beginAtZero: true,
            },

          }],
        },
      },
    });
  }, [changeDataRange, dataRangeCPI, dataRangeSNP, dateRange]);
  return (
    <div className="container">

      <span style={{
        position: 'fixed',
      }}
      >
        <button name="1 year" onClick={handleChart}>1 year</button>
        <button name="5 years" onClick={handleChart}>5 years</button>
        <button name="10 years" onClick={handleChart}>10 years</button>
        <button name="40 years" onClick={handleChart}>40 years</button>
        <button name="full range" onClick={handleChart}>full range</button>

      </span>
      <div className="App" style={{ height: '80vh' }}>
        <canvas id="myChart" width="100%" height="50%" />
      </div>

    </div>
  );
}

export default App;
