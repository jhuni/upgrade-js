/*=pod

=head2 reverse() Returns Array

Reverse the order of the arrangement of the Array and return.

=cut*/

Array.prototype.reverse = function() {

	var start = 0;
	var end = this.length - 1;

	while( start < end ) {
	
		var endingValue = this[end];
		this[end] = this[start];	
		this[start] = endingValue;

		start++;
		end--;

	}
	
	return this;

};
