/*=pod

=head2 trimLeft() Returns String

=cut*/

String.prototype.trimLeft = function() {
	return( this.replace(/^\s+/,'') );
};
