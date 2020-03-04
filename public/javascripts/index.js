var imgCocktail = $('#imgCocktail').attr('src');
$('body').vegas({
	slides: [
		{src: imgCocktail},
	],
	transition: 'blur',
	animation: 'random',
});
