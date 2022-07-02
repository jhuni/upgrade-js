/*=pod

=head1 NAME

String - a class to construct string instances

=head1 SYNOPSIS

	var str = new String("This is a string");
	var ostr = str.slice(0,5);
	alert(ostr);

=head1 DESCRIPTION

This is a class that is used to construct String instances where as a String is a essentially an arrangement of Characters.

=head1 METHODS

=head2 Inherited

From Function.prototype:
apply, call, toSource, toString, valueOf 

From Object.prototype:
hasOwnProperty, isPrototypeOf, propertyIsEnumerable, unwatch, watch

=cut*/


/*=pod

=head2 charAt(Number index) Returns String

=head2 charCodeAt(Number index) Returns Number

=cut*/



/*=pod

=head2 localeCompare() Returns Number

=head2 match(Regexp regexp) Returns Array

=cut*/




/*=pod

=head2 replace(String|RegExp separator, String|RegExp replacement) Returns String

	String.prototype.replace = function(seperator, replacement) {

		var isRegExp = seperator.constructor.toSource().indexOf("RegExp") !== -1;

		if( isRegExp ) { 
			return this.split(seperator).join(replacement);
		} else {
			return '';
		}
	};

=cut*/





/*=pod

=head2 split(String|RegExp separator) Returns Array

=cut*/




















/*=pod

=head2 valueOf() Returns String

=cut*/



/*=pod

=head1 HTML WRAPPERS

=cut*/

/*=pod

=head2 anchor(String href) Returns String

=cut*/

String.prototype.anchor = function(href) {
	return '<a name="' + href + '">' + this + '</a>';
};

/*=pod

=head2 bold() Returns String

=cut*/

String.prototype.bold = function() {
	return '<b>' + this + '</b>';
};

/*=pod

=head2 big() Returns String

=cut*/

String.prototype.big = function() {
	return '<big>' + this + '</big>';
};

/*=pod

=head2 blink() Returns String

=cut*/

String.prototype.blink = function() {
	return '<blink>' + this + '</blink>';
};

/*=pod

=head2 fixed() Returns String

=cut*/

String.prototype.fixed = function() {
	return '<tt>' +  this + '</tt>';
};

/*=pod

=head2 fontcolor() Returns String

=cut*/

String.prototype.fontcolor = function(color) {
	return '<font color="' + color + '">' + this + '</font>';
};

/*=pod

=head2 fontsize() Returns String

=cut*/

String.prototype.fontsize = function(size) {
	return '<font size="' + size + '">' + this + '</font>';
};

/*=pod

=head2 italics() Returns String

=cut*/

String.prototype.italics = function() {
	return '<i>' + this + '</i>';
};

/*=pod

=head2 small() Returns String

=cut*/

String.prototype.small = function() {
	return '<small>' + this + '</small>';
};

/*=pod

=head2 strike() Returns String

=cut*/

String.prototype.strike = function() {
	return '<strike>' + this + '</strike>';
};

/*=pod

=head2 sub() Returns String

=cut*/

String.prototype.sub = function() {
	return '<sub>' + this + '</sub>';
};

/*=pod

=head2 sup() Returns String

=cut*/

String.prototype.sup = function() {
	return '<sup>' + this + '</sup>';
};





/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
