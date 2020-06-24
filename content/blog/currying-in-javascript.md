---
path: Currying in JavaScript
date: 2020-06-24T16:39:35.974Z
title: Currying in JavaScript
description: "Understanding the process of Currying in JavaScript "
---
## What is Currying?

Many languages when it comes to the realm of functional programming make use of currying. It is the process of transforming a function that contains multiple arguments into a sequence of nested functions. There are several benefits of currying and one of the main ones is through the creation of utility functions. I find this very helpful when going back to code I haven't seen in a while and being able to expand on a program as I made use of the process of currying. 

The arguments of currying are kept because of closure & are consecutively used in execution until the final currying chain is returned. Currying can be a powerful concept in creating programs. In languages like Haskell, all functions are curried by default. 

## Example

Let's take a look at a simple function that will take two arguments 

```
const divide = (a, b) => a / b;
```

The two arguments (a & b) simply divide so therefore 

```
divide(10, 5);
// returns 2
```

We can change this function to a curried version by separating the arguments... 

```
const divideCurried = (a) => (b) => a/b;
```

Testing the following code

```
divideCurried(10)(5);
// returns 2
```

A curried utility function we can make use of 

```
const divideCurriedBy10 = divideCurried(10);
```

Now we can make use of this new curried utility function to divide any number by 10

```
console.log(divideCurriedBy10(1));
// 10
console.log(divideCurriedBy10(50));
// 0.2
```