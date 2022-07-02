/*=pod

=head2 toSource() Returns String

=cut*/


Number.prototype.toSource = function() {
	return( '(new Number("' + this.toString() + '"))' );
};
