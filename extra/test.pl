#!/usr/bin/perl

use strict;
use warnings;

my %window = ();

$window{"Array"}{"prototype"}{"reverse"} = sub { 

	my %this = %{$_[0]};
	
	
	my $start = 0;
	my $end = $this{'length'} - 1;

	while( $start < $end ) {

		my $endingValue = $this{$end};
		$this{$end} = $this{$start};
		$this{$start} = $endingValue;

		$start++;
		$end--; 

	}
	
	
	%{$_[0]} = %this;

};

$window{"Array"}{"prototype"}{"join"} = sub { 

	my %this = %{$_[0]};

	my $seperator = $_[1];
	my $rval = '';
	my $mylen = $this{'length'};

	my $i = 0;
	while( $i < $mylen ) {
		$rval .= $this{$i} . $seperator; 		

		$i++;
	}

	return $rval;
	
	%{$_[0]} = %this;

};

my %array = (
'length' => 3,
'0' => 'asdf',
'1' => 'ggl',
'2' => 'lolol'
);

$window{"Array"}{"prototype"}{"reverse"}(\%array);
print $window{"Array"}{"prototype"}{"join"}(\%array, ',');


