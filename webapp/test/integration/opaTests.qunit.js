/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/Barchart/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});