$( document ).ready( function() {

	var entries = [
<<<<<<< HEAD
		{ image: './include/images/JavaScript-logo.png', width: '50', height: '50', url: 'http://niklasknaack.blogspot.de/', target: '_top'},
=======
		{ image: './include/images/JavaScript-logo.PNG', width: '50', height: '50', url: 'http://niklasknaack.blogspot.de/', target: '_top'},
>>>>>>> 9a26bb69693eba154c7c3789b5b3e95a24f9dcdd
		{ image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', width: '50', height: '50', label: "HTML", url: '', target: '_top'},
		{ image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', width: '50', height: '50', label: "CSS", url: '', target: '_top'},
		{ image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', width: '50', height: '50', label: "Gitlab", url: '', target: '_top'},
		{ image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', width: '50', height: '50', label: "PHP", url: '', target: '_top'},
		{ image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', width: '50', height: '50', label: "Python", url: '', target: '_top'},
		{ image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', width: '50', height: '50', label: "Laravel", url: '', target: '_top'},
		{ image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', width: '50', height: '50', label: "Symphony", url: '', target: '_top'},
<<<<<<< HEAD
		{ image: './include/images/django-logo.svg', width: '50', height: '50', url: '', target: '_top'},
		{ image: './include/images/java-logo.png', width: '60', height: '60', url: '', target: '_top'},
=======
		{ image: './include/images/django-logo.SVG', width: '50', height: '50', url: '', target: '_top'},
		{ image: './include/images/java-logo.PNG', width: '60', height: '60', url: '', target: '_top'},
>>>>>>> 9a26bb69693eba154c7c3789b5b3e95a24f9dcdd
		{ image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', width: '50', height: '50', label: "C", url: '', target: '_top'},
	]
	
	var settings = {

		entries: entries,
		width: 480,
		height: 480,
		radius: '65%',
		radiusMin: 75,
		bgDraw: true,
		bgColor: '#2e2e2e',
		opacityOver: 1.00,
		opacityOut: 0.05,
		opacitySpeed: 6,
		fov: 800,
		speed: 0.5,
		fontFamily: 'Oswald, Arial, sans-serif',
		fontSize: '15',
		fontColor: '#FFD700',
		fontWeight: 'normal',//bold
		fontStyle: 'normal',//italic 
		fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
		fontToUpperCase: true,
		tooltipFontFamily: 'Oswald, Arial, sans-serif',
		tooltipFontSize: '11',
		tooltipFontColor: '#fff',
		tooltipFontWeight: 'normal',//bold
		tooltipFontStyle: 'normal',//italic 
		tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
		tooltipFontToUpperCase: false,
		tooltipTextAnchor: 'left',
		tooltipDiffX: 0,
		tooltipDiffY: 10

	};
	
	//var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
	$( '#holder' ).svg3DTagCloud( settings );

} );
