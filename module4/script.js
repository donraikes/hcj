(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
	name = names[i].toLowerCase();
	if (name.charAt(0) == 'j') {
		byeSpeaker.Speak(names[i]);
	} else {
		helloSpeaker.Speak(names[i]);
	};
	};
})();
