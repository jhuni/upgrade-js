/*=pod

=head2 pop() Returns Any

This function removes and returns the last element in this Array.

=cut*/

Array.prototype.pop = function() {

	if( this.length == 0 ) {
		return undefined;
	}

	var end = this.length-1;
	var temp = this[end];
	
	delete this[end];
	this.length = this.length-1;
	
	return temp;

};
