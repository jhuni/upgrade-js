/*=pod

=head2 every(Function fun, Any thisp?) Returns Boolean

This returns true if every single value in the array matches fun().

=cut*/

Array.prototype.every = function(fun /*, thisp*/)
{
	var len = this.length;
	if (typeof fun != "function") {
		throw new TypeError();
	}

	var thisp = arguments[1];
	for (var i = 0; i < len; i++)
	{
		if (i in this && !fun.call(thisp, this[i], i, this)) {
			return false;
		}
	}

	return true;
};
