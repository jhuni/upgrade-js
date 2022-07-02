/*=pod

=head2 push(*@elements) Returns Number

This will push to the end of the array the following *@elements.

=cut*/

Array.prototype.push = function() {

	var mylen = this.length;

	var arglen = arguments.length;

	for( var i = 0; i < arglen; i++ ) {
		this[mylen+i] = arguments[i];
	}

	return this.length;

};
