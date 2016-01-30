$(document).ready(function(){
	var size = [20, 25, 50]; //In pixels
	var activeSize = 1;
	CreateGrid(2);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//-----------------Events--------------
	
	//ChangeColorWhenMouseEnterSquare
	$('#squareHolder').on( 'mouseenter', 'div', function(){  //.mouseenter() wont work because the elements are created after page load. Or something...
		$(this).css('background', GreyScale(this));
		console.log('mouseenter');
	
	});	
	
	
	
	
	//ChangeGridSizeWhenClicked
	$('#sizeHolder > div').click(function(){
		var id = $(this).attr('id');
		$("#squareHolder > div").fadeTo('slow', 0);
		$('#squareHolder').empty();
		//$("#squareHolder > div").remove();
		$('#' + activeSize).removeClass('sizeActive');
		$('#' + id).addClass('sizeActive');
		activeSize = id;
		console.log('element with id: ' + id + ' was clicked');
		CreateGrid(id);	
	});
		
	
		
	//-----------Functions------------------
	function CreateGrid(c){
		var amount = (900 / size[c])*(500 / size[c]);
		console.log(amount + ' squares created');
		
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
		console.log(colorRGB);
		console.log(colorValue);
		//return 'red';
		return 'rgb(' + colorValue + ', ' + colorValue + ', ' + colorValue + ')';
	};
});
