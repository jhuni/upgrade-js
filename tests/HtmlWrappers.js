

var mystr = 'asdf';

document.writeln("<h2>HTML Wrapper Functions:</h2>");

ok( mystr.anchor('www.google.com') == '<a name="www.google.com">asdf</a>', 'The anchor string prototype works.' );
ok( mystr.bold() == '<b>asdf</b>', 'The bold string prototype works.' );
ok( mystr.big() == '<big>asdf</big>', 'The big string prototype works.' );
ok( mystr.blink() == '<blink>asdf</blink>', 'The blink string prototype works.' );
ok( mystr.fixed() == '<tt>asdf</tt>', 'The fixed string prototype works.' );
ok( mystr.fontcolor('red') == '<font color="red">asdf</font>', 'the fontcolor string prototype works.' );
ok( mystr.fontsize(4) == '<font size="4">asdf</font>', 'the fontsize string prototype works.' );
ok( mystr.italics() == '<i>asdf</i>', 'The italics string prototype works.');
ok( mystr.small() == '<small>asdf</small>', 'The small string prototype works.');
ok( mystr.strike() == '<strike>asdf</strike>', 'The strike string prototype works.');
ok( mystr.sub() == '<sub>asdf</sub>', 'The sub string prototype works.');
ok( mystr.sup() == '<sup>asdf</sup>', 'The sup string prototype works.');


