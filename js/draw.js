$(document).ready(function(){
	var size = [20, 25, 50]; //In pixels
	var activeSize = 1;
	CreateGrid(2);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//-----------------Events--------------
	
	//ChangeColorWhenMouseEnterSquare
	$('#squareHolder').on( 'mouseenter', 'div', function(){
		$(this).css('background', '#43e4db');
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
});
