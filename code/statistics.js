var checklist = [false, false, false, false, false, false, false, false, false, false];

var greenChoices = 0;
var badChoices = 10;


function showResult() {
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
