# exercise0

The file 'example.js' use the module 'index.js'


1)
I created a Class 'Vote' that has a few properties:
- subject   -> Name of the Vote Theme.
- options   -> Options for the vote (e.g:  yes for bibi or not for bougi).
- players   -> For who persons/Objects i can vote.
- maxVote   -> Const for max vote that we can vote for player subject.
- voteCount -> Array that contains the count vote for each player in the subject.
- messages  -> Contains all the log that is printed to the screen. By the end it will be send as response by the server.

2)
I ccreated amother class named 'VoteArray' that contains:
- array of Vote instances.
- array of all the log of each instances of Vote that it contains.

3)
I do module.export to an array of Vote instances and the file 'example.js' use that module to vote for some subject to some player with some option.

4)
By the end, i created a server listening on port 3000 that send as response all the log of the output in the program.

THANK YOU.