const greet = [
   "How's your day?",
"Hope you are fine?",
"Hello, nice weather we're having",
"Have a nice experience using our services",
"Thanks for passing by"
];

exports.getGreets = function(){
   var greetings = Math.floor(Math.random()*greet.length);
   return greet[greetings];
} 