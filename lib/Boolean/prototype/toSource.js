/*=pod

=head2 toSource() Returns String

This converts the Boolean to a string wrapped around the constructor function.

=cut*/

Boolean.prototype.toSource = function() {
	return '(new Boolean(' + this.toString() + '))';
};
