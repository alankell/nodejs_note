
var name;

exports.setname = function (thyname){
	name = thyname;
};

exports.sayhello = function(){
	console.log('hello '+name);
};