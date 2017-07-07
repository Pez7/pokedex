$(document).ready(function(){
	$.ajax({
	url: 'http://pokeapi.co/api/v2/pokemon/',
	type: 'GET',
	dataType: 'json',
	data: {'limit':'718'},
})
.done(function(event) {
	console.log("event");
	event.results.forEach(function(elemento,imagen){
		var picture = imagen + 1;
		$(".poke").append("<div class='col s3 poke1'><img src='http://pokeapi.co/media/img/" + picture +".png'>"+" <br> "+ elemento.name + "</div>");
	})
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});
})