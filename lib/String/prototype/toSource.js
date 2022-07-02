/*=pod

=head2 toSource() Returns String

=cut*/

String.prototype.toSource = function() {
	// escape slashes is necessary:
	return '(new String(' + this.quote() + '))';
};
