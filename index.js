$( document ).ready(function() {
    console.log( "ready!" );

// we need an input element, id, value,
// react on button click, run a function to change the background
// based on the input
$("#submit-btn").click(changeBackground)

// define that function that runs when the button is clicked	
function changeBackground(){
	event.preventDefault();
	
	// cityName input from the input element
	var body = $("body");
	var city = $("#city-type").val();
	// converts all input text to lowercase
	city = city.toLowerCase();
	// clears input after click
	var input = $(this).prev('input:first');
        input.val("");
	
	// "New York" or "NYC" or "New York City"
	if(city == "new york" || city == "nyc" || city == "new york city"){
	// makes the background of the page nyc.jpg 
		$("body").attr("class", "nyc")

	// "San Francisco" or "SF" or "Bay Area"
	} else if(city == "sf" || city == "bay area" || city == "san francisco"){	
	// makes the background of the page sf.jpg
		$("body").attr("class", "sf")
		
	// "Los Angeles" or "LA" or "LAX"
	} else if(city == "los angeles" || city == "la" || city == "lax"){
	// makes the background of th epage to la.jpg
		$("body").attr("class", "la")
	
	// "Austin" or "ATX"
	} else if(city == "austin" || city == "atx"){	
	// makes the backgroun of the page austin.jpg
		$("body").attr("class", "austin")
	
	// "Sydney" or "SYD"	
	} else if(city == "sydney" || city == "syd"){
	// makes the background of the page sydney.jpg
		$("body").attr("class", "sydney")	

	// "Denver" or "DEN"
	} else if(city == "denver" || city == "den"){
	// makes the background of the page denver.jpg
		$("body").attr("class", "den")

	// "Philadelphia" or "Philly" 
	} else if(city == "philadelphia" || city == "philly" || "phl"){
	// makes the background of the page philly.jpg
		$("body").attr("class", "philly")
	}
}


});
