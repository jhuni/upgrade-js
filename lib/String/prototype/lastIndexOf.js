/*=pod

=head2 lastIndexOf(String searchString, Number searchStart) Returns Number

=cut*/

String.prototype.lastIndexOf = function(searchString, searchStart) {
	var str = (typeof searchStart !== 'undefined') ?this.substr(0,searchStart+1) : this.toString();
	str = str.split('').reverse().join('');
	var index = str.indexOf(searchString);
	return( (index === -1) ? -1 : (str.length - 1 - index) );
	
};
