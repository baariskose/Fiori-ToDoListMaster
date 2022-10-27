/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsmod/to-do-app-new/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
