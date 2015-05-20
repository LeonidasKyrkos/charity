'use strict';

var $ = require('jquery');
window.$ = $;

(function(){

	$('.panel').on('click',flip);

	function flip(){
		$(this).toggleClass('active');
	}



})()