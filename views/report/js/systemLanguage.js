function loadLanguageForPages(langId) {
    for (var i = 0; i < uiContentList.length; i++) {
        var languageContent = uiContentList[i];
       
        var selector = util.isValidVariable(languageContent.elementSelector) ? languageContent.elementSelector : "#"　+ languageContent.elementId;
        var label = $(selector);
        if (typeof label != "undefined") {
            if (util.isValidVariable(languageContent[langId])) {
                label.text(languageContent[langId]);
            } else {
                label.text(languageContent[defaultLangId]);
            }
        }
    }
}

uiContentList = [
	{
		elementSelector	: '.detail-input-from',
		'en'			: 'From',
		'zh-cn'			: '从',
		'zh-Hant'		: '從',
	},
	{
		elementSelector	: '.detail-input-to',
		'en'			: 'To',
		'zh-cn'			: '到',
		'zh-Hant'		: '到',
	},
	{
		elementSelector	: '.printer-label',
		'en'			: 'Report Printer',
		'zh-cn'			: '报表打印机',
		'zh-Hant'		: '報表打印機',
	}
];