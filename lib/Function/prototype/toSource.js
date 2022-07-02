/*=pod

=head2 toSource() Returns String

Returns a source representation of the function.

=cut*/

Function.prototype.toSource = function() {
	return( '(' + this.toString() + ')' );
};
