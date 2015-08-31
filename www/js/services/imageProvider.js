var images = [
	{
		"thumbnail":"http://lorempicsum.com/simpsons/300/300/1",
		"large":"http://lorempicsum.com/simpsons/800/800/1",
		"legend":"Image demo 1"
	},
	{
		"thumbnail":"http://lorempicsum.com/simpsons/300/300/2",
		"large":"http://lorempicsum.com/simpsons/800/800/2",
		"legend":"Image demo 2"
	},
	{
		"thumbnail":"http://lorempicsum.com/simpsons/300/300/3",
		"large":"http://lorempicsum.com/simpsons/800/800/3",
		"legend":"Image demo 3"
	},
	{
		"thumbnail":"http://lorempicsum.com/simpsons/300/300/8",
		"large":"http://lorempicsum.com/simpsons/800/800/8",
		"legend":"Image demo 3"
	},
	{
		"thumbnail":"http://lorempicsum.com/simpsons/300/300/4",
		"large":"http://lorempicsum.com/simpsons/800/800/4",
		"legend":"Image demo 4"
	},
	{
		"thumbnail":"http://lorempicsum.com/simpsons/300/300/5",
		"large":"http://lorempicsum.com/simpsons/800/800/5",
		"legend":"Image demo 5"
	},
	{
		"thumbnail":"http://lorempicsum.com/simpsons/300/300/6",
		"large":"http://lorempicsum.com/simpsons/800/800/6",
		"legend":"Image demo 6"
	},
	{
		"thumbnail":"http://lorempicsum.com/simpsons/300/300/7",
		"large":"http://lorempicsum.com/simpsons/800/800/7",
		"legend":"Image demo 7"
	},
	{
		"thumbnail":"http://lorempicsum.com/simpsons/300/300/8",
		"large":"http://lorempicsum.com/simpsons/800/800/8",
		"legend":"Image demo 8"
	}

];

app.service('imageProvider',function(){
	this.getImages = function(){
		return images;
	}
});



