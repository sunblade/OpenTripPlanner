/* Polish initialisation for the jQuery UI date picker plugin. */
/* Written by Andrzej Burczyk (ab@i586.pl). */
jQuery(function($){
	$.datepicker.regional['cz'] = {
		closeText: 'Zavřít',
		prevText: '&#x3C;Předchozí',
		nextText: 'další&#x3E;',
		currentText: 'Dnes',
		monthNames: ['Leden','Únor','Březen','Duben','Květen','červen',
		'červenec','Srpen','Září','říjen','Listopad','Prosinec'],
		monthNamesShort: ['Led','Uno','Bre','Dub','Kve','Cen',
		'Cec','Srp','Zar','Ri','Lis','Pro'],
		dayNames: ['Neděle','Pondělí','Uterý','Středa','Ctvrtek','Pátek','Sobota'],
		dayNamesShort: ['Ne','Po','Ut','St','Ct','Pa','So'],
		dayNamesMin: ['N','Po','U','St','C','Pa','So'],
		weekHeader: 'Tyd',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['cz']);
});
