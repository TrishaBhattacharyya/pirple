// Helper functions.

var utils={}

// Return the response in JSON format
utils.getStatus=function(){
	return {'Success' : 'Welcome to Pirple. Hope you like my First assignment!'};
};

// Return the response in JSON format when query string parameter is passed.
utils.getNameStatus=function(str){
	var welcomeMsg="Welcome to Pirple " + str + ". Have a good day!";
	return {'Success' : welcomeMsg };
};

module.exports=utils