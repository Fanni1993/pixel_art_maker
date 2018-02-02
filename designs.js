

$( "#submit" ).on( "click", function(e){
	e.preventDefault();             //prevent prage from refresh

	let color = $('#colorPicker').val();           //get values from inputs
	let canWidth = $('#input_width').val();
	let canHeight = $('#input_height').val();
	let cellArray=[]								//array for cells
	const table = document.getElementById("pixel_canvas"); //table as canvas
	
	for (var i = 0; i < canHeight; i++){           //create cells of given number
		let row = table.insertRow(i);
		for (var x = 0; x< canWidth; x++){
			let cell = row.insertCell(x);
			cellArray.push(cell)               //add cells to array
		};
	}
	cellArray.forEach(function(element) {
	    element.addEventListener('click',function(){    //add click events to cells to change color
	    	element.style.backgroundColor = color;
		});
		element.addEventListener('dblclick',function(){    //add click events to cells to change color
	    	element.style.backgroundColor = 'white';
		});
	});
	   	
	$('#colorPicker').change(function(){      //set new value if color changes
	    color= $('#colorPicker').val();
	})

	$('form').change(function(){
		$('table').empty();

	})

});
$( "#reset" ).on( "click", function(e){
	e.preventDefault();
	$('table').empty()
});
 
	




