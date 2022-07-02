/*=pod

=head2 quote() Returns String

=cut*/

String.prototype.quote = function() {
	return '"' + this.replace(/\\/g,"\\\\").replace(/"/g, "\\\"").replace(/\n/, "\\n") + '"';
};
