var Dynamit = Dynamit || {};

// This name choice is terribly common and would not be used in real work
Dynamit.Main = {
	init              : function init() {
		Dynamit.Main.importTemplates();
	},
	/**
	 * Dynamically load the template html in from separate files.
	 * This could be handled differently on a full-stack, I am
	 * choosing this here because I'm working with a flat project.
	 */
	importTemplates   : function importTemplates() {
		$( '#headerTemplate' ).load( 'headerTemplate.html', function() {
			Dynamit.Main.renderTemplate( '#headerTemplate', Dynamit.Main.getMockHeaderModel() );
		} );
		$( '#footerTemplate' ).load( 'footerTemplate.html', function() {
			Dynamit.Main.renderTemplate( $( '#footerTemplate' ), Dynamit.Main.getMockFooterModel() );
		} );
	},
	renderTemplate    : function renderTemplate( template, oModel, target ) {
		// Fix string for id-format if they gave a string
		template = Dynamit.Utils.ensureStringPrepend( '#', template );
		target = Dynamit.Utils.ensureStringPrepend( '#', target );
		// Make sure the template we're rendering is present
		if( !template || $( template ).length === 0 ) {
			console.info( 'Invalid template passed to renderTemplate.' );
			return;
		}
		if( !target || $( target ).length === 0 ) {
			console.info( 'Invalid target passed to renderTemplate.' );
			return;
		}
		// Grab content from appropriate template
		var templateString = $( template ).html();
		// Push through underscore renderer with a mocked up object model
		var compiled = _.template( templateString );
		// Fix target string for id-format if they gave a string
		$( target ).html( compiled( oModel ) );
	},
	getMockHeaderModel: function getMockHeaderModel() {
		return {

		};
	},
	getMockFooterModel: function getMockFooterModel() {
		return {

		};
	}
};

$( document ).ready( function() {
	Dynamit.Main.init();
} );
