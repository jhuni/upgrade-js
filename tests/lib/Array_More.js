

	
document.writeln("<h2>First and Last Index Of</h2>");

if( typeof Array.prototype.indexOf == 'undefined' ) {
	document.writeln("<h1>Features Not Supported:</h1> indexOf lastIndexOf map forEach some every filter reduce reduceRight");
}

var myarray = [0,1,2,3,4,5];
ok( myarray.indexOf(3) === 3, '.indexOf works.' );
ok( myarray.lastIndexOf(3) === 3, '.lastIndexOf works' );

var myarray = [1,2,2,2,3,3,2,2,2,1];
ok( myarray.indexOf(3) === 4, '.indexOf returns well');
ok( myarray.lastIndexOf(3) === 5, '.lastIndexOf returns well');

var myarray = [1,2,3,4,5,6];
ok( myarray.indexOf(7) === -1, '.indexOf returns -1 properly');
ok( myarray.lastIndexOf(7) === -1, '.lastIndexOf returns -1 properly');

document.writeln("<h2></h2>");

document.writeln("<h2>Each and Map</h2>");

var myarray = [1,2,3,4,5,6];
myarray.forEach( function(elem, index, array) {
	array[index] = elem*index;
});

ok( myarray.toString() == '0,2,6,12,20,30', 'forEach works effectively' );
ok( [1,4,9,16,25,36,49,64].map(Math.sqrt) == '1,2,3,4,5,6,7,8', 'map works effectively' );

document.writeln("<h2>Some, Every and Filter</h2>");

function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [2, 5, 8, 1, 4].some(isBigEnough);
ok(passed === false, '.some works first case.'  );
passed = [12, 5, 8, 1, 4].some(isBigEnough);
ok( passed === true, '.some works second case.');

var passed = [12, 5, 8, 130, 44].every(isBigEnough);
ok(passed === false, '.every works first case' );
passed = [12, 54, 18, 130, 44].every(isBigEnough);
ok(passed === true, '.every works second case' );

ok( [1,2,3,4,5,6,7,8,9,10,11,12,13,14].filter(function(i){
	return i%3==0
}).toString() === '3,6,9,12', '.filter works well' );

document.writeln("<h2>JavaScript 1.8 Features:</h2>");

var flattened = [[0,1], [2,3], [4,5]].reduce(function(a,b) {
  return a.concat(b);
}, []);
ok(flattened.toString() === [0, 1, 2, 3, 4, 5].toString(), '.reduce works well' );

var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
  return a.concat(b);
}, []);
ok(flattened.toString() === [4, 5, 2, 3, 0, 1].toString(), '.reduceRight works well' );




