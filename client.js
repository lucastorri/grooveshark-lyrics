var musicData = $('.active').last().children('a[class^="queueSong"]');
var song = musicData[0].text;
var artist = musicData[1].text;
console.log(song, artist);

$(function(){
	$.ajax({
	    url: 'http://lyrics-service.herokuapp.com/?music=Hotel&artist=Eagles',
	    dataType: 'jsonp',
	    crossDomain: true,
	    jsonp: false,
	    jsonpCallback: 'result',
	    success: function(data) {
	      $('#lyrics').html(data.lyrics);
	    }
	});
});
