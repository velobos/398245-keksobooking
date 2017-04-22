'use strict';

var ad1 = {
	avatar: '<img src=img/avatars/user/01.png>', //как указать путь к файлу внутри объекта?
	offer: {
		title: 'Большая уютная квартира',
		adress: 'location: (100, 100)', //узнать как записывать location
		price:  function () {
					return Math.floor(Math.random()*(1000000 - 1000)+1000);	
				},
		type: 'flat', //узнать нужен ли автоматический выбор из flat, house, bungalo
		rooms:  function () {
					return Math.floor(Math.random()*(5 - 1)+1);
				},
		guests:  function () {
					return Math.floor(Math.random()*(7 - 1)+1);
				},
		checkin: '12:00', //узнать нужен ли автоматический выбор из вариантов в описани задачи
		checkout: '12:00', //узнать нужен ли автоматический выбор из вариантов в описани задачи
		features: new Array("wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"),
		description: '',
		photos: new Array()
	},
	location: {
		x: function () {
			return Math.floor(Math.random()*(900 - 300)+300);
			},
		y: function () {
			return Math.floor(Math.random()*(500 - 100)+100);
			},
	},
};
//---features
var featuresCount = ad1.offer.features.length; //длина массива
var featuresCountRnd = Math.floor(Math.random()*(featuresCount - 1)+1); //случайный элемент массива
ad1.offer.features.length = featuresCountRnd;
alert(ad1.avatar);





