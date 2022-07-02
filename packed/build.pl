#!/usr/bin/perl

use strict;
use warnings;

use JavaScript::Minifier qw(minify);
use File::Slurp qw(slurp write_file);
use File::DirList;
use boolean;

my $minify_enabled = false;

opendir DIR, "../lib";
my @files = readdir DIR;
closedir DIR;

my $js = '';

foreach my $file (@files) {
	
	unless( $file =~ m/~$/ or $file =~ m/^\./) {
		
		$js .= slurp("../lib/$file");
		
	}
	
}

$js = minifiy(input => $js) if $minify_enabled;


write_file("./Mini.js", $js );
