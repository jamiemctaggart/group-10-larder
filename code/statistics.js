google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


var checklist = [false, false, false, false, false, false, false, false, false, false, false, false, false];
var greenChoices = 0;
var badChoices = 13;


function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Score', 'Percentage'],
		['Zero-waste score', greenChoices],
		['Wastefulness', badChoices]
	]);
	var options = {
		title: 'Eco Score'
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart'));
	chart.draw(data, options);
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
	else {
		greenChoices--;
		badChoices++;
	}
}
