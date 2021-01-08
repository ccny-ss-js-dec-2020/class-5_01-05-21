var fs = require('fs');
var inquirer = require('inquirer');

inquirer.prompt([
		{
			type: "input",
			message: "What country would you like to receive information on?",
			name: "country"
		}
]).then(function(answers){
		console.log(answers)

		fs.readFile('./countries.json', 'utf-8', function(err, data){
			var countries = JSON.parse(data);
			// this would be an array of all of the countries names to lowercase
			var countryNames = countries.map((country) => country.name.toLowerCase());
			if(countryNames.indexOf(answers.country.toLowerCase()) > -1){
				countries.forEach((country) => {
					if(country.name.toLowerCase() === answers.country.toLowerCase()){
						console.log("Country: " + country.name);
						console.log("Capital: " + country.capital);
						console.log("Region: " + country.region);
						console.log("Population: " + country.population);
					}
				})
			} else {
				throw new Error("Country Not Found")
			}
		});
});
