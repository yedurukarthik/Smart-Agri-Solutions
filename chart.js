// dashboard-chart.js (Dashboard Chart Script)
document.addEventListener("DOMContentLoaded", function () {
    Highcharts.chart('container', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Greenhouse gases from Norwegian economic activity'
        },
        subtitle: {
            text: 'Source: SSB'
        },
        xAxis: {
            categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Million tonnes CO₂-equivalents'
            }
        },
        tooltip: {
            split: true,
            valueSuffix: ' million tonnes'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Ocean transport',
            data: [30, 30, 29, 31, 28, 29, 27, 28, 27, 29, 30],
            color: '#3498db'
        }, {
            name: 'Households',
            data: [20, 21, 22, 21, 20, 19, 18, 19, 18, 19, 18],
            color: '#8e44ad'
        }, {
            name: 'Agriculture and hunting',
            data: [10, 11, 10, 11, 10, 10, 9, 9, 8, 9, 9],
            color: '#2ecc71'
        }, {
            name: 'Air transport',
            data: [5, 6, 7, 6, 5, 4, 5, 4, 4, 5, 4],
            color: '#e67e22'
        }, {
            name: 'Construction',
            data: [5, 6, 5, 6, 5, 5, 4, 4, 4, 4, 4],
            color: '#95a5a6'
        }]
    });
});
