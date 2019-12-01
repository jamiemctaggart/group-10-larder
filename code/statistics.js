google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


var checklist = [false, false, false, false, false, false, false, false, false, false];
var greenChoices = 0;
var badChoices = 10;


function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Score', 'Percentage'],
		['Zero-waste score', greenChoices],
		['Wastefulness', badChoices]
	]);
	var options = {
		title: 'My Daily Activities'
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart'));
	chart.draw(data, options);
}

function chart(){
	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		title: {
			text: "Your score"
		},
		data: [{
			type: "pie",
			startAngle: 270,
			yValueFormatString: "##0.00\"%\"",
			indexLabel: "{label} {y}",


			dataPoints: [
				{y: greenChoices*10, label: "Zero-waste score",color: "green"},
				{y: badChoices*10, label: "Wastefulness" , color: "blue"},
			]
		}]
	});

	chart.render();
}

function showResult() {
	drawChart();


	if (checklist[2]) {
		var toothbrushesPerYear = 6;
		var populationOfDundee = 150000;//Aproximately
		var dundeeToothbrushesPerYear = populationOfDundee * toothbrushesPerYear;
		document.getElementById('checklist-item-'+(2+1)).innerHTML = "If everyone in dundee used Bamboo toothbrushes, it would save aproximately "+dundeeToothbrushesPerYear+
		" plastic toothbrushes per year, as plastic toothbrushes can't biodegrade, and require petrolium to be made";
	}
}

var run = true;

function toggleCheck(change) {
	run = !run;
	if (!run)
		return;
	checklist[change] = !checklist[change];
	if (checklist[change]){
		greenChoices++;
		badChoices--;
	}
}
