google.charts.load('current', {'packages': ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

    var button = document.getElementById('change-chart');
    var chartDiv = document.getElementById('chart_div');

    var data = google.visualization.arrayToDataTable([
        ['День', 'Настроение'],
        [24, -0.5],
        [25, 0.1],
        [26, 0.7]
    ]);

    var materialOptions = {
        width: 900,
        chart: {
            title: 'Уровень настроения в Екатеринбурге',
            subtitle: ''
        },
        series: {
            0: {axis: 'Настроение'}, // Bind series 0 to an axis named 'distance'.
        },
        axes: {
            y: {
                distance: {label: 'Уровень настроения'}, // Left y-axis.
                // brightness: {side: 'right', label: 'apparent magnitude'} // Right y-axis.
            }
        }
    };

    function drawMaterialChart() {
        var materialChart = new google.charts.Bar(chartDiv);
        materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
    }

    drawMaterialChart();
};