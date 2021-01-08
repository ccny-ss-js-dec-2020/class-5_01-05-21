var fs = require('fs');
var input = process.argv.slice(2).join(" ");

fs.readFile('./countries.json', 'utf-8', function(err, data){
	var countries = JSON.parse(data);
	// this would be an array of all of the countries names to lowercase
	var countryNames = countries.map((country) => country.name.toLowerCase());
	if(countryNames.indexOf(input.toLowerCase()) > -1){
		countries.forEach((country) => {
			if(country.name.toLowerCase() === input.toLowerCase()){
				console.log("Country: " + country.name);
				console.log("Capital: " + country.capital);
				console.log("Region: " + country.region);
				console.log("Population: " + country.population);
			}
		})
	} else {
		// if the country that is inputted is not in the country names array, then throw an error
		throw new Error("Country Not Found")
	}
});
