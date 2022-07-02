
document.writeln("<h1>Number</h1>");

document.writeln("<h2>toFixed</h2>");
ok( (5.123).toFixed(0) == '5', 'Works for () implicit arguments' );
ok( (5.123).toFixed(1) == '5.1', 'Works for fixing to a length' );
ok( (5.123).toFixed(10) == '5.1230000000', 'Works for zero insertion' );
ok( typeof ((5.123).toFixed(10)) == 'string', 'Returns the right type' );

document.writeln("<h2>toExponential</h2>");
var num = 151.123;
ok( num.toExponential( ) == '1.51123e+2', 'Works for ( )' );
ok( num.toExponential(0) == '2e+2', 'Works for 0' );
ok( num.toExponential(1) == '1.5e+2', 'Works for 1' );
ok( num.toExponential(2) == '1.51e+2', 'Works for 2' );

ok( (123456).toExponential(4) == '1.2346e+5', 'Works for 123456,4');
ok( (2).toExponential() == '2e+0', 'Works for 2,0' );

document.writeln("<h2>toPrecision</h2>");

var mynum = 153.12345;
ok( mynum.toPrecision() == mynum.toString(), 'Leaving out an argument results in .toString()' );
ok( mynum.toPrecision(1) == '2e+2', 'Resorts to toExponential if needed.');
ok( mynum.toPrecision(2) == '1.5e+2', 'toPrecision(2) works');
ok( mynum.toPrecision(3) == '153', 'You can remove all decimals.' );
ok( mynum.toPrecision(5) == '153.12', 'toPrecision(5) works' );
ok( mynum.toPrecision(10) == '153.1234500', 'Zero insertion works.');

mynum = 153;
ok( mynum.toPrecision(2) == '1.5e+2', 'conversion toExponential works effectively');
ok( mynum.toPrecision(5) == '153.00', 'You can insert zeros with a decimal factor' );

document.writeln("<h3>Range Errors:</h3>");
var mynum = 123.45678;
ok( mynum.toPrecision(4.8) == mynum.toPrecision(4), 'You automatically remove zeros.' );


