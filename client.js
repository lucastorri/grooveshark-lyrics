var song = Grooveshark._lastStatus.activeSong.SongName;
var artist = Grooveshark._lastStatus.activeSong.ArtistName;

$(function(){
	$.ajax({
	    url: 'http://lyrics-service.herokuapp.com/?music='+encodeURIComponent(song)+'&artist='+encodeURIComponent(artist),
	    dataType: 'jsonp',
	    crossDomain: true,
	    jsonp: false,
	    jsonpCallback: 'result',
	    success: function(data) {
	      console.log(data);
	      $('#capital').html(data.lyrics);
	    }
	});
});
