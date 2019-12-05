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
		title: 'Eco Score'
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart'));
	chart.draw(data, options);
}

function showResult() {
	drawChart();

	if (checklist[0]) {
		document.getElementById('checklist-item-'+(0+1)).innerHTML = "Shops such as the Little Green Larder on Perth Road, allow you to bring your own container for food you buy from the shop. Removing the need for plastic.";
	}

	if (checklist[1]) {
		document.getElementById('checklist-item-'+(1+1)).innerHTML = "When shopping at your local supermarket you can buy your fruit and veg without plastic packaging which will greatly reduce wastefulness.";
	}

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

$(window).on("throttledresize", function (event) {
    var options = {
        width: '100%',
        height: '100%'
    };

    var data = google.visualization.arrayToDataTable([]);
    drawChart(data, options);
});
