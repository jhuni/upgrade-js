document.writeln("<h1>Boolean</h1>");

// Boolean.prototype.toString
ok( (new Boolean(null)).toString() === 'false', 'Null constructor works' );
ok( (new Boolean()).toString() === 'false', 'Blank Boolean consructor works' );
ok( new Boolean("").toString() === 'false', 'Blank String constructor works' );
ok( new Boolean("abcdefghijklmnopqrstuvwxyz").toString() === 'true', 'Non-Blank String constructor works' );

// Boolean.prototype.toSource
ok( (new Boolean(0)).toSource() === '(new Boolean(false))', 'Boolean.prototype.toSource() works for true' );
ok( (new Boolean(1)).toSource() === '(new Boolean(true))', 'Boolean.prototype.toSource() works for false' );




