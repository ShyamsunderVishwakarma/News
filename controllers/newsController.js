var request = require('request');
var config = require('../config/configuration');

exports.homePage = function(req,res){

	res.render("index.html",{});
}

exports.getNews = function(req,res)
{
	var options = {url : 'https://newsapi.org/v1/articles?source=usa-today&sortBy=top&apiKey='+config.NewsApiKey}

	function callBack(err,response,body)
	{
		if(err) throw err

		console.log("In refresh call type");
		res.send(body);
	}

	request(options,callBack)
}	

