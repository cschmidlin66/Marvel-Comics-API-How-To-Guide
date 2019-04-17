//specific character by name
document.getElementById("testButton").addEventListener('click', function(event){
		var string = document.getElementById("input").value;
		
		
		var publicKey = "8579279efc25ff521d33aa9602025f78";
		var privateKey = "f57b8945064d1bd6f43f045607e81905dcc5a1c1";
		
		
		var characterSearchWebString = "https://gateway.marvel.com/v1/public/characters?name="+string;
		$.getJSON(characterSearchWebString,{apikey: publicKey}).done(function(response){
			
			//var results = response.data.results;
			var characterName = response.data.results[0].name;
			var characterDescription = response.data.results[0].description;
			if((characterDescription == "")||(characterDescription == " ")){
				characterDescription = "Description not available";
			}
			var picturePath = response.data.results[0].thumbnail.path;
			var pictureExtension = "."+response.data.results[0].thumbnail.extension;
			var finalPicturePath = picturePath+"/standard_large"+pictureExtension;

			document.getElementById("resultsName").innerHTML ="Name: "+characterName;
			document.getElementById("results").innerHTML = "Description: "+characterDescription+"\nData provided by Marvel. © 2014 Marvel";
			document.getElementById("characterPic").src = finalPicturePath;
			
		}); 

		event.preventDefault();
		
	});

//characters by letters
document.getElementById("testButton2").addEventListener('click', function(event){
		var string = document.getElementById("input2").value;
		
		
		var publicKey = "8579279efc25ff521d33aa9602025f78";
		var privateKey = "f57b8945064d1bd6f43f045607e81905dcc5a1c1";
		
		
		var nameSearchWebString = "https://gateway.marvel.com/v1/public/characters?nameStartsWith="+string+"&limit=5";
		$.getJSON(nameSearchWebString,{apikey: publicKey}).done(function(response){
			
			var list = document.getElementById("characterList");
			$(list).empty();
			var i;
			
			for (i = 0; i < 5; i++){
				var li = document.createElement("li");
				var characterName = response.data.results[i].name;
				li.appendChild(document.createTextNode(characterName));
				list.appendChild(li);
				

			}
			
		}); 

		event.preventDefault();
		
	});

//find a characters creators
document.getElementById("testButton4").addEventListener('click', function(event){
		var string = document.getElementById("input4").value;
		
		
		var publicKey = "8579279efc25ff521d33aa9602025f78";
		var privateKey = "f57b8945064d1bd6f43f045607e81905dcc5a1c1";
		
		var dateRange = "dateRange=1939-01-01%2C2017-01-01";
		var characterSearchWebString2 = "https://gateway.marvel.com/v1/public/characters?name="+string;
		$.getJSON(characterSearchWebString2,{apikey: publicKey}).done(function(response){
			
			
			var characterID = response.data.results[0].id;
			var characterName =  response.data.results[0].name;
			var characterIDWebString = "https://gateway.marvel.com/v1/public/characters/"+characterID+"/comics?"+dateRange+"&orderBy=onsaleDate&limit=1";
			$.getJSON(characterIDWebString,{apikey: publicKey}).done(function(response){
				var creatorNum = response.data.results[0].creators.available;
				var list = document.getElementById("creatorList");
				$(list).empty();
				var i;
				for (i = 0; i < creatorNum; i++){
					var creatorName = response.data.results[0].creators.items[i].name;
					var creatorRole = response.data.results[0].creators.items[i].role;
					var creatorURI = response.data.results[0].creators.items[i].resourceURI;
					var creatorString = "Name: "+creatorName+" Role: "+creatorRole;
					var li = document.createElement("li");
					li.appendChild(document.createTextNode(creatorString));
					list.appendChild(li);

				}
				
			}); 
			
		}); 

		event.preventDefault();
		
	});

//Find a characters first appearance
document.getElementById("testButton3").addEventListener('click', function(event){
		var string = document.getElementById("input3").value;
		
		
		var publicKey = "8579279efc25ff521d33aa9602025f78";
		var privateKey = "f57b8945064d1bd6f43f045607e81905dcc5a1c1";
		
		var dateRange = "dateRange=1939-01-01%2C2017-01-01";
		var characterSearchWebString3 = "https://gateway.marvel.com/v1/public/characters?name="+string;
		$.getJSON(characterSearchWebString3,{apikey: publicKey}).done(function(response){
			
			
			var characterID = response.data.results[0].id;
			var characterName =  response.data.results[0].name;
			var characterIDWebString = "https://gateway.marvel.com/v1/public/characters/"+characterID+"/comics?"+dateRange+"&orderBy=onsaleDate&limit=1";
			$.getJSON(characterIDWebString,{apikey: publicKey}).done(function(response){
				var issueName = response.data.results[0].title;
				var picturePath = response.data.results[0].thumbnail.path;
				var pictureExtension = "."+response.data.results[0].thumbnail.extension;
				var finalPicturePath = picturePath+"/portrait_fantastic"+pictureExtension;
				document.getElementById("resultsName2").innerHTML ="Name: "+characterName;
				document.getElementById("issueName").innerHTML = "Issue: "+issueName+"\nData provided by Marvel. © 2014 Marvel";
				document.getElementById("coverPic").src = finalPicturePath;
			
			
			}); 
			
		}); 

		event.preventDefault();
		
	});



