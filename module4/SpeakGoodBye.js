(function (window) {
var	byeSpeaker = {};
var speakWord = "goodbye";

byeSpeaker.Speak = function(name) {
	console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;
})(window);
