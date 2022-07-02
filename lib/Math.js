/*=pod

=head1 NAME

Math - basic mathematical functions

=head1 SYNOPSIS

	var x = Math.max( Math.sin(Math.PI/2), Math.cos(Math.PI/4) );
	var y = Math.min( Math.ceil(5.313), Math.round(5.5) );

=head1 DESCRIPTION

This is a module that is very basic to JavaScript. The functions implemented here cannot really be implemented within JavaScript itself so most of them such as Math.sin should be implemented by an outside library.

=head1 PROPERTIES

	Math.E = Math.exp(1);
	Math.LN10 = Math.log(10);
	Math.LN2 = Math.log(2);
	Math.LOG2E = 1.0 / Math.LN2;
	Math.LOG10E = 1.0 / Math.LN10;
	Math.PI = Math.acos(-1);
	Math.SQRT1_2 = Math.sqrt(0.5);
	Math.SQRT2 = Math.sqrt(2);

=head1 METHODS

=head2 abs(Number x) Returns Number

=head2 acos(Number x) Returns Number

=head2 asin(Number x) Returns Number

=head2 atan(Number x) Returns Number

=head2 atan2(Number y, Number x) Returns Number

=head2 ceil(Number x) Returns Number

=head2 cos(Number x) Returns Number

=head2 exp(Number x) Returns Number

=head2 floor(Number x) Returns Number

=head2 log(Number x) Returns Number

=head2 max(Number *@numbers) Returns Number

=head2 min(Number *@numbers) Returns Number

=head2 pow(Number base, Number exponent) Returns Number

=head2 random() Returns Number
	
=head2 round(Number x) Returns Number

=head2 sin(Number x) Returns Number

=head2 sqrt(Number x) Returns Number

=head2 tan(Number x) Returns Number

=cut*/



/*=pod

=head2 toSource() Returns String

This returns the String "Math" every time.

=cut*/

Math.toSource = function() {
	return "Math";
};



/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
