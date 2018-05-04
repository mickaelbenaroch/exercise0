var events = require('events');


class Vote extends events.EventEmitter{
	constructor(subject, players = [], options = []) {
		super();
		this.subject = subject;  	//the theme of the vote
		this.options = options;		//the vote options	
		this.players = players;		//the players of the vote
		this.maxVote = 10;			//the max vot count
		this.voteCount = [];		//vote count of each player
		this.messages = [];

		//init all the vote to zero
		for(let i =0; i<this.players.length; i++){
			this.voteCount[i] = 0;
		}
		
	}
	setVote(playerName, option) { 
		//run on all the players array to check who was voted
		for(let i=0; i< this.players.length; i++){

			//if entered this if, so we found who was voted
			if(this.players[i] == playerName && this.options[0] == option){
					
					//update the votecount of the voted player only if the maxCount is <10 
					if(this.voteCount[i] < this.maxVote){

						//update the votecount of the voted player, maxcount is <10
						this.voteCount[i] += 1;

						//we send the player name to the emit
						var playerName = this.players[i];

						//we send the state of the player to the emit
						//state means => the maxvote count is valid <10
						var state = "valid";
						this.emit('ThereWasANewVote', playerName, state);
						break;
					}	
					
					//cannot update the votecount of the voted player,  because maxcount is >10
					else{
						//we send the player name to the emit
						var playerName = this.players[i];

						//we send the state of the player to the emit
						//state means => the maxvote count is invalid >10
						var state = "invalid";
						this.emit('ThereWasANewVote', playerName, state);

					}
					
			}
		}
	
	}

	initVotes(){
		for(let i = 0; i<this.players.length; i++){
			this.voteCount[i] = 0;
		}
		this.emit('Ipus');
	}

};


function presentvotes(playerName, state){
		if(state == "valid"){
			this.messages.push(`There is new vote for subject " + ${this.subject} + " for player: " + ${playerName}`);
			console.log("There is new vote for subject " + this.subject + " for player: " + playerName );
		}
		else{
			this.messages.push(`Cannot vote more than  " + ${this.maxVote} + " for player: " + ${playerName} + " in subject " + ${this.subject}`);
			console.log("Cannot vote more than  " + this.maxVote + " for player: " + playerName + " in subject " + this.subject);
		}
	}

function resetVotes(){
	this.messages.push(`All the votes count was reseted in`);
	console.log("All the votes count was reseted");
}	


//creates new votes and pushing them into votes Array that will be exported
//For know i created only 3 themes...

var vote = new Vote("PRESIDENTIALS", ["bibi","bougi"], ['yes', 'no']);
vote.on("ThereWasANewVote", presentvotes);
vote.on("Ipus", resetVotes);

var vote2 = new Vote("PUBS", ["james","irishpub","brasserie"], ['yes', 'no']);
vote2.on("ThereWasANewVote", presentvotes);
vote2.on("Ipus", resetVotes);

var vote3 = new Vote("FOOTBALL", ["barcelona","realmadrid","psg","maccabihaifa"], ['yes','no']);
vote3.on("ThereWasANewVote", presentvotes);
vote3.on("Ipus", resetVotes);


class VoteArray{
	constructor(Votes = []){
		this.votearray = Votes;
		this.messages = [];
	}
	getAll(){
		for (var i = 0; i < this.votearray.length; i++) {
			for (var j = 0 ; j < this.votearray[i].players.length ; j++) {
				console.log(this.votearray[i].subject + ' : ' + this.votearray[i].players[j] + '  => ' + this.votearray[i].voteCount[j] )

			}
		}
	}
    getAllMessages(){
		for (var i = 0; i < this.votearray.length; i++) {
			for (var j = 0 ; j < this.votearray[i].messages.length ; j++) {
				this.messages.push(this.votearray[i].messages[j]);
			}
		}
		return this.messages;
	}
}
//the array that will be exported
var voteArray = new VoteArray([vote, vote2, vote3]);


//exportation of the voteArray that contains 2 votes
module.exports = voteArray;





