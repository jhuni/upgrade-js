/*=pod

=head2 trim() Returns String

=cut*/

String.prototype.trim = function() {
	return( this.replace(/^\s+|\s+$/g,'') );
};
