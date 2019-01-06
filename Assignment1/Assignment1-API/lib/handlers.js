
// Define the dependencies
var utils=require('./utils');

// Defining handlers
var handlers = {};

// hello handler , returns the callback based on the querystring object is
// present or not.

handlers.hello = function(data,callback){
	
	var isQsParamPresent=(typeof(data.qsParam.name) == 'string' 
		&& data.qsParam.name.trim().length > 0 ) ? true : false; 
	
	if(isQsParamPresent){
	    callback(200,utils.getNameStatus(data.qsParam.name));
	}else{
		callback(200,utils.getStatus());
	}

};

// Not found handler
handlers.notFound = function(data,callback){
  callback(404,{'Status' : 'Sorry ! Url requested is not found' });
};

module.exports=handlers