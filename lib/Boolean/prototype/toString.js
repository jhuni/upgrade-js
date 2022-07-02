/*=pod

=head2 toString() Returns String

This converts the Boolean to a String.

=cut*/

Boolean.prototype.toString = function() {
	return( (this == true) ? 'true' : 'false' );
};
