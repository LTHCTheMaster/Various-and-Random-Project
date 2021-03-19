var lthc_mod = {};
(function () {
	lthc_mod.path = GDT.getRelativePath();
	var ready = function () {
		LTHC.addEvent();
		//Plateformes
		LTHC.addPlatform();
		LTHC.addPlatform2();
		LTHC.addPlatform3();
		//Topics
		LTHC.addTopic();
		LTHC.addTopic2();
		LTHC.addTopic3();
		LTHC.addTopic4();
		//Research Items
		LTHC.addRI();
		LTHC.addRI2();
		LTHC.addRI3();
		LTHC.addRI4();
		LTHC.addRI5();
		LTHC.addRI6();
		//Ultimate Research Items
		LTHC.addURI();
		LTHC.addURI2();
	};

	var error = function () {
	};
	
	GDT.loadJs([lthc_mod.path + '/lthc.js',
	], ready, error);
})();