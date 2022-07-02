/*=pod

=head2 map(Function fun, Any thisp?) Returns Array

This returns a new Array with the results of fun() to each element in the Array.

=cut*/

Array.prototype.map = function(fun /*, thisp*/)
{
	var len = this.length;
	if (typeof fun != "function") {
		throw new TypeError();
	}

	var res = new Array(len);
	var thisp = arguments[1];
	for (var i = 0; i < len; i++)
	{
		if (i in this) {
			res[i] = fun.call(thisp, this[i], i, this);
		}
	}

	return res;
};
