function run(){
	
	document.getElementById("submit").addEventListener('click', function(event){
		var string = document.getElementById("input").value;
		var req = new XMLHttpRequest();
		

		var apiKey = "&apikey=8579279efc25ff521d33aa9602025f78";
		var mainWebString = "https://gateway.marvel.com";
		var characterSearch = "/v1/public/characters?name="
		var finalWebString = mainWebString+characterSearch+string+apikey;
		req.open("GET", finalWebString, true);
		

		req.addEventListener('load',function(){
     		 if(req.status >= 200 && req.status < 400){
	        	console.log(JSON.parse(req.responseText));
				var characterData = JSON.parse(req.responseText);
				document.getElementById("name").textContent = "Character Name: " + characterData.Character.name;
				document.getElementById("description").textContent = "Description " + characterData.Character.description;
				
	        
	      } else {
	        console.log("Error in network request: " + req.statusText);
	      }});

		req.send(null);
		event.preventDefault();
	});


}

run();
