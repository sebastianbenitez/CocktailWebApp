var express = require('express');
var router = express.Router();

var request = require("request");

var options = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/random.php',
  headers: {
    'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
    'x-rapidapi-key': '4ef122cb3bmsh2d31ab02b6fef2ap18000djsn1979327c68c3'
  }
};

var randomCocktail;
request(options, function (error, response, body) {
	if (error) throw new Error(error);
	
	var parsed = JSON.parse(body);
	randomCocktail = parsed.drinks[0];
});

options.url = 'https://the-cocktail-db.p.rapidapi.com/lookup.php';
options.qs= {
	i: randomCocktail.idDrink
};

router.get('/', function(req, res, next) {
	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		
		var parsed = JSON.parse(body);
		res.render('index', { cocktail: parsed.drinks[0] });
	});
});


module.exports = router;
