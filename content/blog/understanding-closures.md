---
path: Understanding Closures
date: 2019-03-01T05:00:00.000Z
title: Understanding Closures
description: JavaScript Fundamentals Post About Closures
---
Closures are a difficult topic to understand in JavaScript. In this post I will present some examples of closures and hopefully make this important topic a little more clear.



Note * you should already have an understanding of writing functions and how lexical scope works (scope being determined at lexing/compile time vs runtime).



When writing JavaScript you will certainly come across closures and you may have been writing them without even fully acknowledging. Closures allow data elements to be accessed within an enclosing scope even when that scope has returned or exited. It may be difficult to grasp that even when a previous function has returned from its code the inner function can still grab the variables defined inside of it.



```
function myName(myFirstName) {
```

```
	var introText = "My name is ";
```

```
	// inner function has access
```

```
	function lastName(myLastName) {
```

```
		return introText + myFirstName + " " ;+ myLastName
```

```
	}
```

```
	return myLastName;
```

```
}
```



```
var js = myName("John"); // myName outer function has already returned
```

```
// closure (lastName) is called after outer has returned 
```

```
// closure still has access 
```

```
js("Smith"); // myName function is John Smith  
```



The behavior of functions is important to understand as it is easy to inadvertently introduce a memory leakage into a program.
