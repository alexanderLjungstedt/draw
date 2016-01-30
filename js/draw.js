$(document).ready(function(){
	var size = [20, 25, 50]; //In pixels
	var activeSize = 2;
	var modes =['defaultColor', 'randomColor', 'greyScaleColor'];
	var activeMode = 'defaultColor';
	CreateGrid(activeSize);
	
	
	
	//-----------------Events--------------
	
	//ChangeColorWhenMouseEnterSquare
	$('#squareHolder').on( 'mouseenter', 'div', function(){  //.mouseenter() wont work because the elements are created after page load. Or something...
		
		switch(activeMode) {
			case modes[0]: //default
				$(this).css('background', '#43e4db');
				break;
			case modes[1]: //random
				$(this).css('background', RandomColor());
				break;
			case modes[2]: //grey scale
				$(this).css('background', GreyScale(this));
				break;
			
		};	
	});	
	
	//ChangeGridSizeWhenClicked
	$('#sizeHolder > div').click(function(){
		var id = $(this).attr('id');
		$('#' + activeSize).removeClass('active');
		$('#' + id).addClass('active');
		activeSize = id;
		CreateGrid(id);	
	});
	 
	//ChangeModeWhenClicked
	$('#options > div').click(function(){
		var id = $(this).attr('id');
		$('#' + activeMode).removeClass('active');
		$(this).addClass('active');
		activeMode = id;
		CreateGrid(activeSize);
	});
	
		
	//-----------Functions------------------
	function CreateGrid(c){ //and destroy the current one
		var amount = (900 / size[c])*(500 / size[c]);
		console.log(amount + ' squares created');
		
		$("#squareHolder > div").fadeTo('slow', 0);
		$('#squareHolder').empty();
		
		for (var i = 0; i < amount; i++){
			$('#squareHolder').append('<div class="square"></div>');
		};
		$('.square').width(size[c] - 2);
		$('.square').height(size[c] - 2);
		$('.square').fadeTo('slow', 1);
	};
	
	function GreyScale(domObject) {
		var colorRGB = $(domObject).css('background-color');
		var colorValue = colorRGB.match(/\d{1,3}/);
		colorValue = parseInt(colorValue[0]) + 40;
		return 'rgb(' + colorValue + ', ' + colorValue + ', ' + colorValue + ')';
	};
	
	function RandomColor() {
		var values = [];
		while (values.length < 3) {
			var r = Math.floor(Math.random() * (255 - 0 + 1)) + 0; //Don't ask
			values.push(r);
		};
		return 'rgb(' + values[0] + ', ' + values[1] + ', ' + values[2] + ')';;
	};
});


























