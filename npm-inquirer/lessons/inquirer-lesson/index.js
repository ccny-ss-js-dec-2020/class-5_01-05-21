//json object JSON.parse
var fs = require('fs');
//importing inquirer into our page by using the command 'npm install inquirer --save'
var inquirer = require('inquirer');
//calling the inquirer prompt function and setting what we would like to prompt
inquirer.prompt([
		// inquirer will prompt us with a list to choose from based on the array values that you provide
		// you can only choose one value from a list
		{
			type: "list",
			message: "Which movie would you like information on?",
			choices: ["12 Angry Men", "Baby's Day Out", "Back to the Future", "Beverly Hills Cop", "Big", "Boyz n the Hood", "Blade Runner", "The Blues Brothers", "Commando", "Casino", "Fatal Attraction", "Jumanji", "The Shawshank Redemption"],
			name: "movie"
		}
	]).then(function(answers){
		console.log("Input from the Inquirer options ")
		// logging the answers from inquirer
		// in this case, the answer that you gave from the list option can be accessed by using answers.movie
		console.log(answers)
		console.log(answers.movie)

		/* reading the content from the movies.json in this directory */
		fs.readFile('./movies.json', 'utf-8', function(err, data){
			// parsing the data from the json array
			var movies = JSON.parse(data);
			console.log("Parsed Movies Data")
			// logging the parsed array
			console.log(movies)

			// looping through the parsed array which contains objects with movie information
			movies.forEach((movie) => {
				// if the answer that you gave matches the 'Title' key value from the movie object
				// each object in the array contains a 'Title' key
				if(movie.Title == answers.movie){
					// then log the information from the movie that you chose
					console.log("Logging the movie that passes the logic")
					console.log(movie)
				}
			});

		});
});
