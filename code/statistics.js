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

	if (checklist[3]) {
		document.getElementById('checklist-item-'+(3+1)).innerHTML = "Bamboo is technically a grass and can be cut without killing the plant. When you move grass it doesn’t die – it continues to grow. This makes bamboo a highly renewable, eco-friendly resource";
	}

	if (checklist[4]) {
		document.getElementById('checklist-item-'+(4+1)).innerHTML = "Many non-biodegradable products are thrown in landfills when not recycled. This results in pollution, water contamination or other environmental issues.";
	}

	if (checklist[5]) {
		document.getElementById('checklist-item-'+(5+1)).innerHTML = "If everyone in Dundee used reusable straws, we would save 225000 straws a year.";
	}

	if (checklist[6]) {
		document.getElementById('checklist-item-'+(6+1)).innerHTML = "Plastic shower gel bottles create unnecessary waste that can be avoided by using bars of soap as a replacement.";
	}

	if (checklist[7]) {
		document.getElementById('checklist-item-'+(7+1)).innerHTML = "If everyone in Dundee used reusable straws, we would save 225000 straws a year.";
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
