/*=pod

=head2 toString() Returns String

This function will convert an Array to a String.

=cut*/

Array.prototype.toString = function(){
	return this.join(",");
};
