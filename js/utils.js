var Dynamit = Dynamit || {};

// Again, a very general name choice
Dynamit.Utils = {
	/**
	 * Prepends a string to a baseString unless it already begins with it or if the passed in baseString isn't a string at all.
	 * @param sPrepend
	 * @param sBaseString
	 */
	ensureStringPrepend: function ensureStringPrepend(sPrepend, sBaseString) {
		if( typeof sBaseString !== 'string' ) { return sBaseString; }
		if( sBaseString.indexOf(sPrepend) == 0 ) { return sBaseString; }
		if( sPrepend === null || sPrepend === undefined ) { return sBaseString; }
		return sPrepend + sBaseString;
	}
};
