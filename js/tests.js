// Tests for Dynamit.Utils
QUnit.module( 'Dynamit.Utils Tests' );
QUnit.test( "Dynamit.Utils.ensureStringPrepend, with object", function( assert ) {
	var myObj = { my: 'test' };
	var retVal = Dynamit.Utils.ensureStringPrepend( 'a', myObj );
	assert.equal( myObj, retVal );
} );

QUnit.test( "Dynamit.Utils.ensureStringPrepend, with redundant prepend", function( assert ) {
	var startingString = 'mytest';
	var prependString = 'my';
	var expectedResult = 'mytest';
	var retVal = Dynamit.Utils.ensureStringPrepend( prependString, startingString );
	assert.equal( expectedResult, retVal );
} );

QUnit.test( "Dynamit.Utils.ensureStringPrepend, with appropriate inputs", function( assert ) {
	var startingString = 'test';
	var prependString = 'my';
	var expectedResult = 'mytest';
	var retVal = Dynamit.Utils.ensureStringPrepend( prependString, startingString );
	assert.equal( expectedResult, retVal );
} );

QUnit.test( "Dynamit.Utils.ensureStringPrepend, with bad prepends", function( assert ) {
	var startingString = 'test';
	var expectedResult = 'test';

	var prependString = '';
	var retVal = Dynamit.Utils.ensureStringPrepend( prependString, startingString );
	assert.equal( expectedResult, retVal, 'Empty prepend check.' );

	prependString = null;
	retVal = Dynamit.Utils.ensureStringPrepend( prependString, startingString );
	assert.equal( expectedResult, retVal, 'Null prepend check.' );

	prependString = undefined;
	retVal = Dynamit.Utils.ensureStringPrepend( prependString, startingString );
	assert.equal( expectedResult, retVal, 'Undefined prepend check.' );
} );
// Test for Dynamit.Main
QUnit.module( "Dynamit.Main Tests" );
QUnit.test( "Dynamit.Main.renderTemplate, with bad template name", function( assert ) {
	assert.equal( document.getElementById( 'header' ).innerHTML.length, 0 );
	// should return undefined
	Dynamit.Main.renderTemplate( 'headerTemplate1', {}, 'header' );
	// should NOT alter html
	assert.equal( document.getElementById( 'header' ).innerHTML.length, 0 );
} );

QUnit.test( "Dynamit.Main.renderTemplate, with bad data", function( assert ) {
	assert.equal( document.getElementById( 'header' ).innerHTML.length, 0 );
	// should return undefined
	Dynamit.Main.renderTemplate( 'headerTemplate', {title2: 'heya'}, 'header' );
	// should NOT alter html
	assert.equal( document.getElementById( 'header' ).innerHTML.length, 0 );
} );

QUnit.test( "Dynamit.Main.renderTemplate, properly function", function( assert ) {
	assert.equal( document.getElementById( 'header' ).innerHTML.length, 0 );
	$( '#headerTemplate' ).html( '<div><%=title%></div>' );
	// should return undefined
	Dynamit.Main.renderTemplate( 'headerTemplate', {title: 'test1'}, 'header' );
	// should alter html
	assert.equal( $( '#header div' ).html().length, 5 );
} );