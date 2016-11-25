MyApp.service("ChartService", function($http) {

    this.chartData = function(schooldata) {
        var data = [];
        var years = [];
        var fields = [],
            maxPoints = 20;
        var grades = [],
            points = [];
        var gradesList = [],
            pointsList = [];
        for (var i in schooldata.linjat[0]) {
            if (schooldata.linjat[0].hasOwnProperty(i) && typeof(i) !== 'function') {
                var linja = schooldata.linjat[0][i];
                var years = [];
                for (var j = 0; j < linja.length; j++) {
                    if (j == 17) {
                        var maxPoints = linja[j].grade.split("max pistemäärä ")[1];
                        break;
                    }
                    if (linja[j].grade < 5) {
                        linja[j].grade = "nan";
                    }
                    if (linja[j].points == -1) {
                        linja[j].points = "nan";
                    }
                    grades.push(linja[j].grade)
                    points.push(linja[j].points)
                    years.push(linja[j].year)

                }
                fields.push(i);
                pointsList.push(points);
                gradesList.push(grades);
                grades = [], points = [];
            }
        }
        data.push(years, gradesList, fields, pointsList, maxPoints);
        return data;
    }

    this.chartOptions = function(min, max, stepsize) {
        var options = {
            responsive: true,
            label: "asd",
            scales: {
                yAxes: [{
                    ticks: {
                        min: min,
                        max: max,
                        stepSize: stepsize
                    },
                }],
            }
        }
        return options;
    }

})
