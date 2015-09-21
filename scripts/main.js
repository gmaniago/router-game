'use strict';

var Router = Backbone.Router.extend({
	routes: {
		'loader' : 'loader',
		'menu' : 'menu',
		'play': 'play',
		'leaders': 'leaders',
		'settings': 'settings'

	},
	loader: function(){
		$('section').hide();
		$('#loader').show();
	},
	menu: function(){
		$('section').hide();
		$('#menu').show();
	},
	play: function(){
		$('section').hide();
		$('#play').show();
	},
	leaders: function(){
		$('section').hide();
		$('#leaders').show();
	},
	settings: function(){
		$('section').hide();
		$('#settings').show();
	}


});

var page = new Router();
Backbone.history.start();


window.onload =function(){
		page.navigate('loader', {trigger: true});
	window.setTimeout(function(){
		page.navigate('menu', {trigger:true})
	}, 4000);

}
