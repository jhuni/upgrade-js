/*=pod

=head2 trimRight() Returns String

=cut*/

String.prototype.trimRight = function() {
	return( this.replace(/\s+$/g,'') );
};
