/*=pod

=head2 toSource() Returns String

This function will convert the Array to source code - such that you can use eval(arr.toSource()).

=cut*/

Array.prototype.toSource = function() {
	return( '[' + this.join(", ") + ']' );
};
