var express = require('express'); 
var app = express(); 

var bodyParser = require('body-parser'); 

// Allowing our app to use the body parser package. 
app.use(bodyParser.urlencoded({extended:false})) 

var axios = require("axios").default; 

var options = { 
method: 'GET', 
url: 'https://latest-stock-price.p.rapidapi.com/price', 
params: {Indices: 'NIFTY 50'}, 
headers: { 
	'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com', 
	'x-rapidapi-key': '9c4324e513mshdd7f131fa562556p1c3a3fjsnf8baf6f4993d'
} 
}; 

app.get("/", function(req, res) { 
	res.sendFile(__dirname + "/index.html"); 
}); 

// HANDLING THE POST REQUEST ON /DATA ROUTE. 
app.post("/data", function(req, res) { 

		var itemSelectedFromDropdown = req.body.stockSelected; 

		axios.request(options).then(function (response) { 

					var dataFromResponse = response.data; 
				for(var i = 0; i<dataFromResponse.length; i++){ 
				if(dataFromResponse[i].symbol == itemSelectedFromDropdown){ 

						var dataOfStock = dataFromResponse[i]; 

						res.send("<html><body> <h1><strong> " + dataOfStock.symbol + "</strong></h1>"+ 
						"<h1> Open: " + dataOfStock.open + "</h1>" + 
						"<h1> Day High: "+ dataOfStock.dayHigh + "</h1>" + 
						"<h1> Day Low: "+ dataOfStock.dayLow + "</h1>" + 
						"<h1> Last Price: "+ dataOfStock.lastPrice + "</h1>" + 
						"<h1> Previous Close: "+ dataOfStock.previousClose + "</h1>" + 
						"<h1> Year Low: "+ dataOfStock.yearHigh + "</h1>" + 
						"<h1> Year Low: "+ dataOfStock.yearLow + "</h1>" + 
						"<h1> Last Update Time: "+ dataOfStock.lastUpdateTime + "</h1>" + 
						"</body></html>") 
				} 
				} 
		
		}).catch(function (error) { 
		console.error(error) 
		}); 
}); 


var port = 3000; 
app.listen(port, function() { 
	console.log("Server started successfully at port 3000!"); 
}); 
