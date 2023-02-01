var quotes=["It does not do to dwell on dreams and forget to live",
"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends",
"It is our choices, Harry, that show what we truly are, far more than our abilities",
"I am what I am, an’ I’m not ashamed. ‘Never be ashamed,’ my ol’ dad used ter say, ‘there’s some who’ll hold it against you, but they're not worth botherin' with",
"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals",
"Differences of habit and language are nothing at all if our aims are identical and our hearts are open",
"Things we lose have a way of coming back to us in the end, if not always in the way we expect",
"Of course it is happening inside your head, Harry, but why on earth should that mean it is not real?",
"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
"Fear of a name only increases fear of the thing itself.",
"We are only as strong as we are united, as weak as we are divided."
]
 function newquote()
 {
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quotedisplay').innerHTML= quotes[randomNumber];
    
 }
 