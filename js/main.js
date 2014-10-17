var Dynamit = Dynamit || {};

// This name choice is terribly common and would not be used in real work
Dynamit.Main = {
	init           : function init() {
		Dynamit.Main.importTemplates();
	},
	/**
	 * Dynamically load the template html in from separate files.
	 * This could be handled differently on a full-stack, I am
	 * choosing this here because I'm working with a flat project.
	 */
	importTemplates: function importTemplates() {
		$('#headerTemplate' ).load('headerTemplate.html');
		$('#footerTemplate' ).load('footerTemplate.html');
	}
};

$( document ).ready( function() {
	Dynamit.Main.init();
} );
