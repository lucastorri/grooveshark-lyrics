var songInfo = function(){
	return{
		music: Grooveshark._lastStatus.activeSong.SongName,
		artist: Grooveshark._lastStatus.activeSong.ArtistName
	}; 
};
var info = songInfo();

var adjustStyles = (function(){
	$('#application').css('width', '1000px'); 
	$('#capital').css('width', '280px');
	$('#remove_capital_button').remove();
	$('#mainContainer').css('background', 'none');
	$('#capital_header').css('text-align', 'center');
	$('#capitalPane').css('height', $('#main').height() - 50);
	$('#main').resize(function() {
  		$('#capitalPane').css('height', $('#main').height() - 50);
	});
	$('#capitalPane').css('overflow', 'auto');
})();

setInterval(function(){
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
	      		$('#capitalPane p').css('margin', '10px');
	      		$('#capital_header').html('<p>'+ data.artist + ' - ' + data.music + '</p>');
	    	}
		});	
	}
}, 5000);