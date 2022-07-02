/*=pod

=head2 forEach(Function fun, Any thisp?) Returns undefined

This performs a call on each element of the Array.

=cut*/

Array.prototype.forEach = function(fun /*, thisp*/)
{
	var len = this.length;
	
	if (typeof fun != "function") {
		throw new TypeError();
	}

	var thisp = arguments[1];
	for (var i = 0; i < len; i++)
	{
		if (i in this) {
			fun.call(thisp, this[i], i, this);
		}
	}
	
};
