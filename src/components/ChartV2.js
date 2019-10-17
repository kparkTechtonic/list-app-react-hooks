import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';
import './Chart.css';

const data = require('./gdpData').map((element) => {
  const setToCheck = new Set(['WLD', 'OED', 'HIC', 'PST', 'NAC', 'ECS', 'EUU', 'IBT', 'LMY', 'MIC', 'IBD', 'UMC', 'EAS', 'LTE', 'EAR', 'LCN', 'LMC', 'TLA', 'LAC', 'EAT', 'TEA', 'SAS', 'EAP', 'EMU', 'TSA', 'IDA', 'SSF', 'TSS', 'SSA', 'MEA', 'HPC', 'TEC', 'ARB', 'ECA']);
  if (!setToCheck.has(element['Country Code'])) {
    element.Value /= 1000000000;
    return element;
  }
  return setToCheck;
}).filter(element => element !== undefined);


function ChartV2() {
  let ctx;
  function compare(a, b) {
    if (a.Value < b.Value) {
      return 1;
    }
    if (a.Value > b.Value) {
      return -1;
    }
    return 0;
  }

  const [year, setYear] = useState(1967);
  const [colors] = useState({
    USA: 'rgba(255,0,36,1)',
    JPN: 'rgba(8,0,255,1)',
    FRA: 'rgba(0,255,120,1)',
    GBR: 'rgba(243,255,0,1)',
    ITA: 'rgba(255,157,0,1)',
    CHN: 'rgba(240,0,255,1)',
    CAN: 'rgba(94,0,255,1)',
    IND: 'rgba(0,138,255,1)',
    AUS: 'rgba(0,255,54,1)',
    DEU: 'rgba(15,255,0,1)',
    NLD: 'rgba(133,255,0,1)',
    ESP: 'rgba(0,255,212,1)',
    BRA: 'rgba(0,255,145,1)',
    MEX: 'rgba(255,242,0,1)',
    RUS: 'rgba(255,128,0,1)',
    KOR: 'rgba(126,68,56,1)',
  });
  let dataForYear = data.map((element) => {
    if (element.Year === year) {
      return element;
    }
  }).filter(element => element !== undefined).sort(compare).slice(0, 10);


  let labels = [];

  for (let i = 0; i < dataForYear.length; i++) {
    labels.push(dataForYear[i]['Country Name']);
  }

  let dataSet = [];

  for (let i = 0; i < dataForYear.length; i++) {
    dataSet.push(dataForYear[i].Value);
  }

  let colorSet = [];
  for (let i = 0; i < dataForYear.length; i++) {
    colorSet.push(colors[dataForYear[i]['Country Code']]);
  }

  const [chart, setChart] = useState();
  useEffect(() => {
    ctx = document.getElementById('myChartv2').getContext('2d');
    setChart(new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels,
        datasets: [{
          label: `GDP in year: ${year}`,
          xAxisID: 'Country',
          data: dataSet,
          backgroundColor: colorSet,
          borderColor: colorSet,
          borderWidth: 1,
        }],
      },
      options: {
        // aspectRatio: 4
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            // This more specific font property overrides the global property
            fontColor: 'black',
            fontSize: 23,
          },
        },
        // responsive: true,
        scales: {
          xAxes: [{
            id: 'Country',
            type: 'linear',
            position: 'left',
            ticks: {
              min: 0,
              fontSize: 18,

            },
            scaleLabel: {
              display: true,
              labelString: 'GDP in bln$',
            },
          }],
          yAxes: [{
            ticks: {
              min: 0,
              fontSize: 23,
            },

          }],
        },
      },
    }));
  }, []);

  useEffect(() => {
    if (year < 2016) {
      setTimeout(() => {
        setYear(year + 1);
      }, [200]);
    }
    dataForYear = data.map((element) => {
      if (element.Year === year) {
        return element;
      }
    }).filter(element => element !== undefined).sort(compare).slice(0, 10);


    labels = [];

    for (let i = 0; i < dataForYear.length; i++) {
      labels.push(dataForYear[i]['Country Name']);
    }

    dataSet = [];

    for (let i = 0; i < dataForYear.length; i++) {
      dataSet.push(dataForYear[i].Value);
    }

    colorSet = [];
    for (let i = 0; i < dataForYear.length; i++) {
      colorSet.push(colors[dataForYear[i]['Country Code']]);
    }
    if (chart) {
      chart.data.labels = labels;
      chart.data.datasets[0].data = dataSet;
      chart.data.datasets[0].backgroundColor = colorSet;
      chart.data.datasets[0].borderColor = colorSet;
      chart.data.datasets[0].label = `GDP in year: ${year}`;
      chart.update();
    }
  });

  return (
    <div className="container" style={{ height: '80%' }}>
      <canvas id="myChartv2" width="100%" height="40%" />
    </div>
  );
}

export default ChartV2;
// {JSON.stringify(dataForYear[0])}
// <br />
// {JSON.stringify(dataForYear[1])}
// <br />
// {JSON.stringify(dataForYear[2])}
// <br />
// {JSON.stringify(dataForYear[3])}
// <br />
// {JSON.stringify(dataForYear[4])}
// <br />
// {JSON.stringify(dataForYear[5])}
// <br />
// {JSON.stringify(dataForYear[6])}
// <br />
// {JSON.stringify(dataForYear[7])}
// <br />
// {JSON.stringify(dataForYear[8])}
// <br />
// {JSON.stringify(dataForYear[9])}
