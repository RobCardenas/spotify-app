$(function() {

	// underscore template
    var trackTemplate = _.template($('#trackArtist-template').html());

	// form to search spotify API
	var $spotifySearch = $('#spotify-search');

	// form input for track (song)
	var $track = $('#track');

	// element to hold results from spotify API
	var $results = $('#results');

	// Submit form to search spotify API
	$spotifySearch.on('submit', function(event) {
		event.preventDefault();

		$results.empty();
    // $loading.show();

  	$.get(
  		'https://api.spotify.com/v1/search?type=track&q=' + $track.val(),
  		function(data) {
  			console.log(data);
  			var tracksLength = data.tracks.items.length;
  			for (var i = 0; i < tracksLength; i += 1) {
  				if ( tracksLength > 0 ) {
  					trackName = data.tracks.items[i].name;
  					artistName = data.tracks.items[i].artists[0].name;
  					albumName = data.tracks.items[i].album.name;
  					albumArt = data.tracks.items[i].album.images[1].url;
  					trackPreview = data.tracks.items[i].preview_url;
  					$results.append(trackTemplate(trackName,artistName,albumName,albumArt,trackPreview));
  				}
  			}
  		}
  	);

  });

});






