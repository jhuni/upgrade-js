Number.NaN = NaN;
Number.POSITIVE_INFINITY =  Infinity;
Number.NEGATIVE_INFINITY = -Infinity;

temp = ['NaN', 'POSITIVE_INFINITY', 'NEGATIVE_INFINITY'];
for (i in temp) {
    __dontChange__  (Number, i);
    __dontDelete__  (Number, i);
    __dontEnum__    (Number, i);
}
delete temp;
delete i;

function Date() {

}
Date.prototype.getTimezoneOffset = function() {
    return 0;
}
String.prototype.split = function() {
	return [];
}

//==============================================================================

version = 0;
options = function() { 
	//for(var i=0; i<100; i++) 
	//	print("OPTIONS"); 
	return '';
};
dump = print;
BUGNUMER = 0;
window = undefined;

Error = String;
