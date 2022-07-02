/*=pod

=head2 shift() Returns Any

This removes and returns the first element of the Array.

=cut*/

Array.prototype.shift = function() {

	var mylen = this.length;
	if( mylen == 0 ) {
		return undefined;
	}

	var temp = this[0];

	for( var i = 1; i < mylen; i++ ) {
		this[i-1] = this[i];
	}
	
	delete[mylen-1];
	this.length = this.length-1;

	return temp;

};
