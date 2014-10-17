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
	assert.equal( $('#header div' ).html().length, 5 );
} );