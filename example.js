var voteArray = require('./mymodule');
var Port = process.env.PORT || 3000;

//first vote theme
var vote1 = voteArray.votearray[0];

console.log('');
console.log('FIRST VOTE THEME');
console.log('');

vote1.setVote('bibi', 'yes');
vote1.setVote('bibi', 'yes');
vote1.setVote('bibi', 'no');
vote1.setVote('bibi', 'yes');
vote1.setVote('bibi', 'yes');
vote1.setVote('bougi', 'yes');
vote1.setVote('bibi', 'yes');
vote1.setVote('bibi', 'yes');
vote1.setVote('bibi', 'yes');
vote1.setVote('bibi', 'yes');
vote1.setVote('bibi', 'yes');
vote1.setVote('bibi', 'yes');
vote1.setVote('bibi', 'yes');
vote1.initVotes();

console.log('');
console.log('SECOND VOTE THEME');
console.log('');

//second vote theme
var vote2 = voteArray.votearray[1];

vote2.setVote('irishpub', 'yes');
vote2.setVote('brasserie', 'yes');
vote2.setVote('irishpub', 'no');
vote2.setVote('james', 'no');
vote1.initVotes();
vote2.setVote('brasserie', 'yes');
vote2.setVote('james', 'yes');

console.log('');
console.log('THIRD VOTE THEME');
console.log('');

//third vote theme
var vote3 = voteArray.votearray[2];

vote3.setVote('barcelona', 'yes');
vote3.setVote('realmadrid', 'yes');
vote3.setVote('maccabihaifa', 'no');
vote3.setVote('psg', 'no');
vote3.setVote('psg', 'yes');
vote1.initVotes();
vote3.setVote('psg', 'yes');

console.log('');
console.log('RESULTS OF ALL VOTES');
console.log('');

//Prints all the results
voteArray.getAll();

//Create server on listening on port 3000 and send response (all the output  messages)
var http = require('http');
var express = require('express');
var app		= express();

var msg = voteArray.getAllMessages();
app.get('/', function(req, res) {
	res.send(msg);
});	

http.createServer(function(req, res) {
	res.end("test");
}).listen(Port);
console.log("listening on port 3000");

