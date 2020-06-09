---
path: JavaScript and the DOM
date: 2020-06-09T20:28:43.831Z
title: JavaScript and the DOM
description: DOM Manipulation with pure JavaScript
---
Welcome



This is an introductory post on JavaScript and how it can interact with the DOM. There is no need for any programming experience in this article as it will just be a simple introduction & we will go through all necessary steps to get working. We will soon start coding a simple web application using vanilla JavaScript (vanilla is a term meaning pure JavaScript with no frameworks). Please note, we will not be using anything other than simple HTML, CSS, & JavaScript. In future posts, I will go into the realm of JS & CSS frameworks AJAX requests and other fun front-end programming nonsense which are beyond the scope of this post. For the sake of simplicity & ease for the beginner this will be nothing more than an introduction in how JavaScript can interact with the DOM with initial setup included. A user may certainly expand on the application with further code. With that understanding, let's get to it. 😎



What is the DOM? 



The DOM can be described as a programming interface that is able to be accessed and manipulated, which we will be doing very soon! The DOM is primarily structured with HTML (Hypertext Markup Language) or XML (Extensible Markup Language). The DOM lays down the foundation in web development in which programmers can build upon and add, remove, & modify content they may want to present to their users. The DOM is represented as a tree hierarchy with child nodes as represented in the image above. 



The DOM will visualize to your user and will be an integral tool in how the user will interact with your application. The way a programmer may interact with the DOM is limitless but it is crucial that the information that you want the user to know is given. What can the user do? Fill form fields with information? Button click that fires a function? These two methods are just some examples of DOM manipulation methods & we will be using JavaScript to do it.

Let's get to programming

Setup IDE (Integrated Development Environment)



An IDE is just a fancy name for a text editor used by programmers. It is the tool we will be using to develop our application. Sublime Text is my go-to for small applications and Visual Studio Code for larger more complex ones. Feel free to use whichever one you would like as there are many out there. For this tutorial we will be using Sublime. Go to sublime & download the editor for mac. 



Start up Sublime 



With your new fancy text editor installed press (command + shift + p). This will open the package installer for Sublime. These are a few of the packages you may want to install. 



package control

emmet

alignment

GitGutter

html-css-js prettify

color highlighter



You can look into what these packages actually do as we will not go into detail on them. There are many other packages out there that can help in developer workflow. You may like to add a theme to your editor as well. Both seti_Ui and Material are visually appealing so be sure to check them out. This blog post is assuming you are using a mac or linux based OS. 



Open command line



To open up the command line we will be using the pre-installed Terminal on mac. Press (command + spacebar) and type in 'terminal'. Hit enter to open the application.



The terminal should open pointing to the root directory of your machine (specified with the ~ character.) in order to get sublime to open from a command you will need to enter this code into the terminal



```
ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
```



Create project directory



We will be creating our project on the desktop of our machine but feel free to do this where you deem appropriate. 



```
cd Desktop
```



We are now located at the desktop of our machine, now time to create the folders and files for our project. We are almost coding!  💪



```
mkdir js-dom-intro
```



This will create the main folder for our application



```
cd js-dom-intro
```

```
touch index.html
```

```
mkdir assets && cd assets
```

```
mkdir styles && mkdir js 
```

```
touch js/dom.js && touch styles/style.css
```



Perfect, we now have all folders and files for our project. We now need to move back up to root of project and open up our IDE.



“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”

```
cd ..
```

```
subl .
```



Sublime text should now be open and we can start developing our application. Let's start by adding basic html structure and linking our js and css files to the app. Open the index.html file and copy/paste in the following code.



```
<!DOCTYPE html>
```

```
<html lang="en">
```

```

```

```
<head>
```

```
    <meta charset="UTF-8">
```

```
    <title>js-dom-intro</title>
```

```
    <link rel="stylesheet" href="assets/styles/style.css">
```

```
</head>
```

```

```

```
<body>
```

```
    <h1>JavaScript DOM Manipulation</h1>
```

```
    <p>Using only <em>Vanilla JavaScript</em></p>
```

```
    
```

```
    <footer>
```

```
        Made by: 'your-name-here' 😎
```

```
    </footer>
```

```
    <script type="text/javascript" src="assets/js/dom.js"></script>
```

```
</body>
```

```
</html>
```



Add your name to the footer since you're now a pro and knows how to code. 😉



Since this is a simple application let's do something such as taking in some user input and simply rendering that on the screen. Add a form to your html file like this



```
<!DOCTYPE html>
```

```
<html lang="en">
```

```

```

```
<head>
```

```
    <meta charset="UTF-8">
```

```
    <title>js-dom-intro</title>
```

```
    <link rel="stylesheet" href="assets/styles/style.css">
```

```
</head>
```

```

```

```
<body>
```

```
    <h1>JavaScript DOM Manipulation</h1>
```

```
    <p>Using only <em>Vanilla JavaScript</em></p>
```

```
    <div class="container">
```

```
        <form>
```

```
            First Name: <input id="firstName" type="text">
```

```
            Last Name: <input id="lastName" type="text">
```

```
            <input type="button" value="submit">
```

```
            <div id="demo"></div>
```

```
        </form>
```

```
    </div>
```

```
    <footer>
```

```
        Made by: 'your-name-here' 😎
```

```
    </footer>
```

```
    <script type="text/javascript" src="assets/js/dom.js"></script>
```

```
</body>
```

```

```

```
</html>
```



Let's go back to our terminal now and see how our website looks by opening it in the browser



open index.html



If you have chrome installed (if not go get it!) the app will now be seen in the browser. 



We will soon get that user input rendered on the screen using a JavaScript function but let's first get the application looking a little better insert this code into your css file located in the styles folder.



```
body {
```

```
    background: #141E30;
```

```
    /* fallback for old browsers */
```

```
    background: -webkit-linear-gradient(to right, #243B55, #141E30);
```

```
    /* Chrome 10-25, Safari 5.1-6 */
```

```
    background: linear-gradient(to right, #243B55, #141E30);
```

```
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
```

```
    color: #fff;
```

```
    text-align: center;
```

```
}
```



```
input {
```

```
	-mox-border-radius: 15px;
```

```
	border-radius: 15px;
```

```
	border: solid 1px black;
```

```
	padding: 5px;
```

```
}
```





```
footer {
```

```
	position: absolute;
```

```
	bottom: 0;
```

```
	width: 100%;
```

```
	height: 45px;
```

```
}
```

JavaScript



Now for the final part we are going to add the JavaScript that will grab the user input in order to manipulate the DOM to render that information. We are almost finished!  



Let's open up our dom.js file & discuss how we are going to do this 



Create a function to grab the input.



```
function printName() {
```

```
	// add code here 
```

```
}
```



We are going to need this function to fire when a user clicks on our submit button so let's go back to our html file and add the necessary code for that 



```
<form>
```

```
  First Name: <input id="firstName" type="text">
```

```
  Last Name: <input id="lastName" type="text">
```

```
  <input id="sub-btn" type="button" value="submit" onclick="printName()">
```

```
   <div id="demo"></div>
```

```
</form>
```



Perfect, now let's go back to our JS file. We need to grab the value of the first and last input fields which we can do by using the native JS  document.getElementById method



```
function printName() {
```

```
 let firstName = document.getElementById("firstName").value;
```

```
 let lastName = document.getElementById("lastName").value;
```

```

```

```
 console.log(`${firstName} ${lastName}`);
```

```
}
```



Let's check our browser console and see if that worked by adding to the input fields hitting submit and checking the console. You can open the console by pressing (command + shift + c).



Logging to the console is useful in development but we want our users to see our function working on the DOM, let's get this rendered 😎



```
function printName() {
```

```
 let firstName = document.getElementById("firstName").value;
```

```
 let lastName = document.getElementById("lastName").value;
```

```

```

```
 demo.innerHTML = `${firstName} ${lastName}`;
```

```
}
```



Add some styles 



```
function printName() {
```

```
 let firstName = document.getElementById("firstName").value;
```

```
 let lastName = document.getElementById("lastName").value;
```

```

```

```
 demo.innerHTML = `${firstName} ${lastName}`;
```

```
 demo.style.border = "2px solid #fff";
```

```
 demo.style.margin = "0 auto";
```

```
 demo.style.marginTop = "15px";
```

```
 demo.style.width = "400px";
```

```
 demo.style.height = "50px";
```

```
}
```



You can definitely make the styling better but congrats on properly interacting with the DOM. Hopefully you can see how awesome JavaScript is even with just a simple function. Let's add another small one just for fun before the ending this post.



Let's go back to our html file and add this button to the footer 



```
<footer>
```

```
 Made by: 'your-name-here' 😎 
```

```
 <input type="button" value="change background" onclick="changeBackground()">
```

```
</footer>
```



and to our JS 



```
function printName() {
```

```
 let firstName = document.getElementById("firstName").value;
```

```
 let lastName = document.getElementById("lastName").value;
```

```

```

```
 demo.innerHTML = `${firstName} ${lastName}`;
```

```
 demo.style.border = "2px solid #fff";
```

```
 demo.style.margin = "0 auto";
```

```
 demo.style.marginTop = "15px";
```

```
 demo.style.width = "400px";
```

```
 demo.style.height = "50px";
```

```
}
```



```
function changeBackground() {
```

```
 let body = document.body;
```

```
 body.style.background = "#FF0000";
```

```
}
```



Refresh the browser & click on the change background button. The body of the DOM should now be styled red!



There are many ways to interact with the DOM & in the next post I will be introducing an API and AJAX requests. 



Happy Coding!
