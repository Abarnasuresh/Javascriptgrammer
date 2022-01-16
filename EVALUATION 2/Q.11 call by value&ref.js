//call by value
	var a = 4;
	var b;
	b = a;
	a = 2;
	console.log(a);
	console.log(b);
//call by reference
	var c = { greeting : 'welcome' };
    var d;
    d = c;
  
    // Mutating the value of c
    c.greeting = 'you are welcome';
    console.log(c);
    console.log(d);