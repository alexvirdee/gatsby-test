---
path: Practice Asynchronous code with Async Await
date: 2019-04-30T04:00:00.000Z
title: Practice Asynchronous code with Async Await
description: 'Using asynchronous code with JavaScript '
---
Write clean code



Practicing with async/await will allow for cleaner code to be written. It is meant to replace the previous method of asynchronous code that were to use callbacks and promises. You can define asynchronous functions with as async function expressions and per the MDN documentation...



"The async function declaration defines an asynchronous function, which returns an AsyncFunction object. An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions." - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function



Asynchronous vs Synchronous



By default JavaScript is a synchronous language and is single threaded in its execution. Executing a block of JS code, nothing else will be executed until it has finished running the original block. When making requests as is the case with AJAX (Asynchronous JavaScript & XML) calls will not necessarily stop but it will move on to complete other blocks of code until the call will return back to the original executed function. The code will run with both successes and failures in which case a callback will then run synchronously. There is no interruption with an asynchronously executed piece of code.



JavaScript is NOT an asynchronous language by default but the language has callback features. When functions are invoked the JavaScript engine will create new execution contexts for those specific functions. When those functions are completed they are popped off of the execution context and removed from the stack, and the engine moves on down the list.



async/await functions were a welcome addition to es2017 as they remove a lot of the initial boilerplate code.



Multiple steps => power of async code

```
function first() {
```

```
    return new Promise(res => {
```

```
        setTimeout(() => {
```

```
            res('learn');
```

```
        }, 100);
```

```
    });
```

```
}
```



```
function second() {
```

```
 return new Promise(res => {
```

```
        setTimeout(() => {
```

```
            res('async');
```

```
        }, 400);
```

```
    });
```

```
}
```



```
function third() {
```

```
 return new Promise(res => {
```

```
        setTimeout(() => {
```

```
            res('javascript');
```

```
        }, 500);
```

```
    });
```

```
}
```



```
(async function call() { //  an IIFE call
```

```
   let one = await first();
```

```
   let two = await second();
```

```
   let three = await third();
```

```

```

```
   console.log(`${ one } ${ two } ${ three }`);
```

```
})();
```



```
// OUTPUT: 'learn async javascript'
```



You could write the above code as a function expression as well. Or even make use of the JavaScript Promise.all feature that will return an array with the values once the promise has finished.
