var songInfo = function(){
	return{
		music: Grooveshark._lastStatus.activeSong.SongName,
		artist: Grooveshark._lastStatus.activeSong.ArtistName
	}; 
};

$('#capital p').css('margin', '10px');

var info = songInfo();

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
	      		$('#capital').html(data.lyrics);
	    	}
		});	
	}
}, 5000);


$.getScript("ajax/test.js", function() {
  alert("Load was performed.");
});