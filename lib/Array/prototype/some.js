/*=pod

=head2 some(Function fun, Any thisp?) Returns Boolean

This returns true if any element in the Array matches fun().

=cut*/

Array.prototype.some = function(fun /*, thisp*/)
{
	var len = this.length;
	if (typeof fun != "function") {
		throw new TypeError();
	}

	var thisp = arguments[1];
	for (var i = 0; i < len; i++) {
		if (i in this && fun.call(thisp, this[i], i, this)) {
			return true;
		}
	}

	return false;
};
