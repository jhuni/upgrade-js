/*=pod

=head2 call(Object thisArg, *@argsArray) Returns Any

=cut*/

Function.prototype.call = function() {
	
	var thisArg = typeof arguments[0] != 'undefined' ? arguments[0] : {};

	var argsArray = [];
	for( var i = 1, l = arguments.length; i < l; i++ ) {
		argsArray[argsArray.length] = arguments[i];
	}
	
	return this.apply( thisArg, argsArray );

};
