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
		title: 'Eco Score',
		backgroundColor: 'transparent'
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
		document.getElementById('checklist-item-'+(7+1)).innerHTML = "If wasted food was a country, it would be the third largest producer of carbon dioxide in the world, after the United States and China";
	}

	if (checklist[8]) {
		document.getElementById('checklist-item-'+(8+1)).innerHTML = "Cooking your own food means you know all the ingredients that are going into it, this ensures that you know they are from a sustainable source.";
	}

	if (checklist[9]) {
		document.getElementById('checklist-item-'+(9+1)).innerHTML = "Dundee produces a total of 23400000kg of food waste per year. Putting this into an appropriate wastage bin would prevent a huge amount of carbon dioxide pollution per year";
	}

	if (checklist[10]) {
		document.getElementById('checklist-item-'+(10+1)).innerHTML = "Dundee uses 3250000 plastic bags per year, if we reused our bags this would greatly reduced.";
	}

	if (checklist[11]) {
		document.getElementById('checklist-item-'+(11+1)).innerHTML = "If we recycled all of our post, we would greatly reduce our paper wastage which would result in many trees being prevented from getting cut down";
	}

	if (checklist[12]) {
		document.getElementById('checklist-item-'+(12+1)).innerHTML = "If your recycling bin is put out for collection containing a fair amount of wrong items, it will not be emptied. This is to prevent the contamination of the whole vehicle load, which could result in it being rejected for recycling and diverted to landfill.";
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
	showResult();
}

$(window).on("throttledresize", function (event) {
    var options = {
        width: '100%',
        height: '100%'
    };

    var data = google.visualization.arrayToDataTable([]);
    drawChart(data, options);
});
