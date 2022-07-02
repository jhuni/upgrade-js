/*=pod

=head2 unshift(*@elements) Returns Number

This will push to the beginning of the array the *@elements.

=cut*/

Array.prototype.unshift = function() {

	var arglen = arguments.length;
	var mylen = this.length;

	for( var i = mylen-1; i >= 0; i-- ) {
		this[i+arglen]=this[i];
	}

	for( var i = 0; i < arglen; i++ ) {
		this[i] = arguments[i];
	}

	return this.length;

};
