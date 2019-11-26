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
				{y: 80, label: "Zero-waste score",color: "green"},
				{y: 20, label: "Wastefulness" , color: "blue"},
			]
		}]
	});

	chart.render();

}
