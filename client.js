var songInfo = function(){
	return{
		music: Grooveshark._lastStatus.activeSong.SongName,
		artist: Grooveshark._lastStatus.activeSong.ArtistName
	}; 
};
var info = songInfo();

var adjustStyles = (function(){
	$('head').append($('<link rel="stylesheet" type="text/css" href="https://raw.github.com/nettofarah/grooveshark-lyrics/client/client.css" />'));
	$('body').resize(function(){
		$('#application').css('width', $('body').width() - $('#capital').width());	
	});
	$('#application').css('width', $('body').width() - $('#capital').width()); 
	$('#remove_capital_button').remove();
	$('#capitalPane').css('height', $('#main').height() - 50);
	$('#main').resize(function() {
  		$('#capitalPane').css('height', $('#main').height() - 50);
	});
})();

(setInterval(function(){
	var currentSong = songInfo();
	if(currentSong != info){
		$.ajax({
	    	url: 'http://lyrics-service.herokuapp.com/?music='+encodeURIComponent(currentSong.music)+'&artist='+encodeURIComponent(currentSong.artist),
	    	dataType: 'jsonp',
	    	crossDomain: true,
	    	jsonp: false,
	    	jsonpCallback: 'result',
	    	success: function(data) {
	      		$('#capitalPane').html(data.lyrics);
	      		$('#capital_header').html('<p>'+ data.artist + '</p><p><b>' + data.music + '</b></p>');
	    	}
		});	
	}
}, 2000));