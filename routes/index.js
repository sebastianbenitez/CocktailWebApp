var express = require('express');
var router = express.Router();


var request = require("request");
var options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
    'x-rapidapi-key': '4ef122cb3bmsh2d31ab02b6fef2ap18000djsn1979327c68c3'
  }
};


router.get('/', function(req, res, next) {

	// obtengo cocktail al azar
	options.url = 'https://the-cocktail-db.p.rapidapi.com/random.php';
	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		
		var parsed = JSON.parse(body);
		var randomCocktail = parsed.drinks[0];

		// mediante el id del cocktail al azar, obtengo la informacion restante
		options.url = 'https://the-cocktail-db.p.rapidapi.com/lookup.php';
		options.qs= {
			i: randomCocktail.idDrink
		};

		request(options, function (error, response, body) {
			if (error) throw new Error(error);
			
			var parsed = JSON.parse(body);
			var randomCocktail = parsed.drinks[0];
			res.render('index', { cocktail: randomCocktail });
		});
	});
});


module.exports = router;
