import React, { useEffect } from 'react';
import Chart from 'chart.js';
import data from './assets/Data.json';
import './Chart.css';

const dateArr = Object.create(data.map(element => element.Date).splice(0));

const priceArr = Object.create(data.map(element => element['Real Price']).splice(0));

function App() {
  let dateRange = (Object.create(dateArr).splice(0));
  let dataRange = (Object.create(priceArr).splice(0));


  const changeDataRange = (targetName) => {
    if (targetName === '10 years') {
      dateRange = (Object.create(dateArr).splice(1645));
      dataRange = (Object.create(priceArr).splice(1645));
    }
    if (targetName === '40 years') {
      dateRange = (Object.create(dateArr).splice(1285));
      dataRange = (Object.create(priceArr).splice(1285));
    }
    if (targetName === '5 years') {
      dateRange = (Object.create(dateArr).splice(1706));
      dataRange = (Object.create(priceArr).splice(1706));
    }
    if (targetName === '1 year') {
      dateRange = (Object.create(dateArr).splice(1755));
      dataRange = (Object.create(priceArr).splice(1755));
    }
    if (targetName === 'full range') {
      dateRange = (Object.create(dateArr).splice(0));
      dataRange = (Object.create(priceArr).splice(0));
    }
  };

  const handleChart = (e) => {
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
          data: dataRange,
          backgroundColor: new Array(2000).fill('rgba(64, 224, 208, 1)'),
          // [
          //   'rgba(64, 224, 208, 1)',
          // ],
          borderColor: new Array(2000).fill('rgba(64, 224, 208, 1)'),
          // [
          //   'rgba(64, 224, 208, 1)',
          // ],
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    });
  };


  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dateRange,
        datasets: [{
          label: 'S&P real price',
          data: dataRange,
          backgroundColor: new Array(2000).fill('rgba(64, 224, 208, 1)'),
          // [
          //   'rgba(64, 224, 208, 1)',
          // ],
          borderColor: new Array(2000).fill('rgba(64, 224, 208, 1)'),
          // [
          //   'rgba(64, 224, 208, 1)',
          // ],
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    });
  }, []);
  return (
    <div className="App">

      <span>
        <button name="1 year" onClick={handleChart}>1 year</button>
        <button name="5 years" onClick={handleChart}>5 years</button>
        <button name="10 years" onClick={handleChart}>10 years</button>
        <button name="40 years" onClick={handleChart}>40 years</button>
        <button name="full range" onClick={handleChart}>full range</button>

      </span>
      <canvas id="myChart" width="100%" height="50%" />

    </div>
  );
}

export default App;
