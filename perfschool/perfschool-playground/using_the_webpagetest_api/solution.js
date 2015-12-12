'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 7777;
var WebPageTest = require('webpagetest'); 
var WPT_API_KEY = 'A.dff5857f265714d1f64bc9e83fb1c77c';
var wpt = new WebPageTest('www.webpagetest.org', WPT_API_KEY);
var localtunnel = require('localtunnel');
var request = require('request'); 

app.get('/', home);
app.get('/test', test);
app.listen(port, listening);

function listening () {
  console.log('Listening on port', port);
}

function home (req, res) {
  var file = path.join(__dirname, 'index.html');
  var index = fs.readFileSync(file, 'utf8');
  res.send(index);
}

function test (req, res) {
	var tunnel; 
	console.log('Tunneling http://localhost:%s onto the open web...', port);
	localtunnel(port, ready);
	function ready(err, t){
		if (err){
			next(err); return; 
		}
		tunnel = t; 
		console.log('Scheduling a web page test job against %s ...', t.url);
		wpt.runTest(t.url, pull); 
	}
	function pull(err, state){
		if (err){
			next(err); return;  
		}
		welcome(state);
		poll(); 
		function handle(err, res){
			if (err){
				next(err); 
				return; 
			}
			var body = JSON.parse(res.body); 
			console.log('(%s) %s', body.statusCode, body.statusText);
			if (body.statusCode<200){
				poll(); return; 
			}
			respond(body.data.runs[1]); 
		}
		function poll(){
			setTimeout(function soon(){request(state.data.jsonUrl, handle); }, 5000); 
		}
		function respond(run){
			tunnel.close(); 
			res.json({
				timing: {
					ttfb: run.firstView.TTFB, 
					speedIndex: run.firstView.SpeedIndex, 
					domLoaded: run.firstView.domContentLoadedEventStart
				}
			}); 
		}
		function welcome(body){
			console.log('pulling down results from %s...', body.data.jsonUrl); 
		}
	}
}
