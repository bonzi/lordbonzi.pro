// If you use this, be sure to get your own API key!
//  -> http://www.last.fm/api/account/create

// Code taken from https://codepen.io/XanderStrike/pen/zfExv

$.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=LordBonzi&api_key=f96f4d2f1ed290cd64d8fb3e816f2f18&format=json', function(data) {
    var track = data.recenttracks.track[0]
    $('#lastfm').html(track.artist["#text"] + " - " + track.name)
  });