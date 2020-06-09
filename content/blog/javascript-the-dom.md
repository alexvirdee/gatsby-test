---
path: JavaScript & The DOM
date: 2018-12-07T05:00:00.000Z
title: JavaScript & The DOM
description: DOM Manipulation using vanilla JavaScript
---
<h3>Welcome</h3>

<p>This is an introductory post on JavaScript and how it can interact with the DOM. There is no need for any programming experience in this article as it will just be a simple introduction &amp; we will go through all necessary steps to get working. We will soon start coding a simple web application using vanilla JavaScript (vanilla is a term meaning pure JavaScript with no frameworks). <em>Please note, we will not be using anything other than simple HTML, CSS, &amp; JavaScript</em>. In future posts, I will go into the realm of JS &amp; CSS frameworks AJAX requests and other fun front-end programming nonsense which are beyond the scope of this post. For the sake of simplicity &amp; ease for the beginner this will be nothing more than an introduction in how JavaScript can interact with the DOM with initial setup included. A user may certainly expand on the application with further code. With that understanding, let's get to it. 😎</p>

<h4><strong>What is the DOM? </strong></h4>

<p>The DOM can be described as a programming interface that is able to be accessed and manipulated, which we will be doing very soon! The DOM is primarily structured with HTML (Hypertext Markup Language) or XML (Extensible Markup Language). The DOM lays down the foundation in web development in which programmers can build upon and add, remove, &amp; modify content they may want to present to their users. The DOM is represented as a tree hierarchy with child nodes. </p>

<div class="wp-block-media-text__content"><!-- wp:paragraph -->
<p>The DOM will visualize to your user and will be an integral tool in how the user will interact with your application. The way a programmer may interact with the DOM is limitless but it is crucial that the information that you want the user to know is given. What can the user do? Fill form fields with information? Button click that fires a function? These two methods are just some examples of DOM manipulation methods &amp; we will be using JavaScript to do it.</p>

<p>&nbsp;</p>

</div>

<h4>Let's get to programming</h4>

<h4>Setup IDE (Integrated Development Environment)</h4>

<p>An IDE is just a fancy name for a text editor used by programmers. It is the tool we will be using to develop our application. Sublime Text is my go-to for small applications and Visual Studio Code for larger more complex ones. Feel free to use whichever one you would like as there are many out there. For this tutorial we will be using Sublime. Go to <a href="https://www.sublimetext.com/">sublime</a> &amp; download the editor for mac. </p>

<p><strong>Start up Sublime </strong></p>

<p>With your new fancy text editor installed press (command + shift + p). This will open the package installer for Sublime. These are a few of the packages you may want to install. </p>

<!-- wp:list -->

<ul>
<li>package control</li>
<li>emmet</li>
<li>alignment</li>
<li>GitGutter</li>
<li>html-css-js prettify</li>
<li>color highlighter</li>
</ul>


<p>You can look into what these packages actually do as we will not go into detail on them. There are many other packages out there that can help in developer workflow. You may like to add a theme to your editor as well. Both seti_Ui and Material are visually appealing so be sure to check them out. </p>

```
The Command Line
```

<!-- wp:paragraph -->

<p>As we are working on our local machine it is important to get familiar with the command line when starting out in web development. We could use an online tool to build this small application such as <a href="https://codepen.io/">codepen</a> but in my opinion it is better when starting out to develop locally so you have a solid understanding of the tools being used. In this post we will not go into detail on the commands but rather you may just want to follow along. If you are curious &amp; want to get familiar with the command line I suggest trying out the course provided on <a href="https://www.codecademy.com/">codeacademy</a>.  Let's get started now with the command line. 👾 </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<p><em>This blog post is assuming you are using a mac or linux based OS. </em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<p><strong>Open command line</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<p>To open up the command line we will be using the pre-installed Terminal on mac. Press (command + spacebar) and type in 'terminal'. Hit enter to open the application.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<p>The terminal should open pointing to the root directory of your machine (specified with the ~ character.) in order to get sublime to open from a command you will need to enter this code into the terminal</p>
<!-- /wp:paragraph -->

<!-- wp:code -->

<pre class="wp-block-code"><code>ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl</code></pre>

<!-- /wp:code -->

<!-- wp:paragraph -->

<p><strong>Create project directory</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<p>We will be creating our project on the desktop of our machine but feel free to do this where you deem appropriate. </p>
<!-- /wp:paragraph -->

<!-- wp:code -->

<pre class="wp-block-code"><code>cd Desktop</code></pre>

<!-- /wp:code -->

<!-- wp:paragraph -->

<p>We are now located at the desktop of our machine, now time to create the folders and files for our project. We are almost coding!  💪</p>
<!-- /wp:paragraph -->

<!-- wp:code -->

<pre class="wp-block-code"><code>mkdir js-dom-intro</code></pre>

<!-- /wp:code -->

<!-- wp:paragraph -->

<p>This will create the main folder for our application</p>
<!-- /wp:paragraph -->

<!-- wp:code -->

<pre class="wp-block-code"><code>cd js-dom-intro</code></pre>

<!-- /wp:code -->

<!-- wp:code -->

<pre class="wp-block-code"><code>touch index.html</code></pre>

<!-- /wp:code -->

<!-- wp:code -->

<pre class="wp-block-code"><code>mkdir assets &amp;&amp; cd assets</code></pre>

<!-- /wp:code -->

<!-- wp:code -->

<pre class="wp-block-code"><code>mkdir styles &amp;&amp; mkdir js </code></pre>

<!-- /wp:code -->

<!-- wp:code -->

<pre class="wp-block-code"><code>touch js/dom.js &amp;&amp; touch styles/style.css</code></pre>

<!-- /wp:code -->



<p>Perfect, we now have all folders and files for our project. We now need to move back up to root of project and open up our IDE.</p>


<pre class="wp-block-code"><code>cd ..</code></pre>



<pre class="wp-block-code"><code>subl .</code></pre>


<p>Sublime text should now be open and we can start developing our application. Let's start by adding basic html structure and linking our js and css files to the app. Open the index.html file and copy/paste in the following code.</p>
<!-- /wp:paragraph -->


<pre class="wp-block-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;js-dom-intro&lt;/title&gt;
    &lt;link rel="stylesheet" href="assets/styles/style.css"&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;h1&gt;JavaScript DOM Manipulation&lt;/h1&gt;
    &lt;p&gt;Using only &lt;em&gt;Vanilla JavaScript&lt;/em&gt;&lt;/p&gt;
    
    &lt;footer&gt;
        Made by: 'your-name-here' 😎
    &lt;/footer&gt;
    &lt;script type="text/javascript" src="assets/js/dom.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<!-- /wp:code -->

<!-- wp:paragraph -->

<p>Add your name to the footer since you're now a pro and knows how to code. 😉</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<p>Since this is a simple application let's do something such as taking in some user input and simply rendering that on the screen. Add a form to your html file like this</p>
<!-- /wp:paragraph -->

<!-- wp:code -->

<pre class="wp-block-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;js-dom-intro&lt;/title&gt;
    &lt;link rel="stylesheet" href="assets/styles/style.css"&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;h1&gt;JavaScript DOM Manipulation&lt;/h1&gt;
    &lt;p&gt;Using only &lt;em&gt;Vanilla JavaScript&lt;/em&gt;&lt;/p&gt;
    &lt;div class="container"&gt;
        &lt;form&gt;
            First Name: &lt;input id="firstName" type="text"&gt;
            Last Name: &lt;input id="lastName" type="text"&gt;
            &lt;input type="button" value="submit"&gt;
            &lt;div id="demo"&gt;&lt;/div&gt;
        &lt;/form&gt;
    &lt;/div&gt;
    &lt;footer&gt;
        Made by: 'your-name-here' 😎
    &lt;/footer&gt;
    &lt;script type="text/javascript" src="assets/js/dom.js"&gt;&lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;</code></pre>

<!-- /wp:code -->

<!-- wp:paragraph -->

<p>Let's go back to our terminal now and see how our website looks by opening it in the browser</p>
<!-- /wp:paragraph -->

<!-- wp:code -->

<pre class="wp-block-code"><code>open index.html</code></pre>

<!-- /wp:code -->


<p>If you have chrome installed (if not go get it!) the app will now be seen in the browser. </p>


<p>We will soon get that user input rendered on the screen using a JavaScript function but let's first get the application looking a little better insert this code into your css file located in the styles folder.</p>


<pre class="wp-block-code"><code>body {
    background: #141E30;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #243B55, #141E30);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #243B55, #141E30);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #fff;
    text-align: center;
}

input {
	-mox-border-radius: 15px;
	border-radius: 15px;
	border: solid 1px black;
	padding: 5px;
}


footer {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 45px;
}</code></pre>


<p>&nbsp;</p>



<!-- wp:heading {"level":4} -->

<h4>JavaScript</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->

<p>Now for the final part we are going to add the JavaScript that will grab the user input in order to manipulate the DOM to render that information. We are almost finished!  </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<p>Let's open up our dom.js file &amp; discuss how we are going to do this </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<p>Create a function to grab the input.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->

<pre class="wp-block-code"><code>function printName() {
	// add code here 
}</code></pre>

<!-- /wp:code -->

<!-- wp:paragraph -->

<p>We are going to need this function to fire when a user clicks on our submit button so let's go back to our html file and add the necessary code for that </p>
<!-- /wp:paragraph -->

<!-- wp:code -->

<pre class="wp-block-code"><code>&lt;form&gt;
  First Name: &lt;input id="firstName" type="text"&gt;
  Last Name: &lt;input id="lastName" type="text"&gt;
  &lt;input id="sub-btn" type="button" value="submit" onclick="printName()"&gt;
   &lt;div id="demo"&gt;&lt;/div&gt;
&lt;/form&gt;</code></pre>

<!-- /wp:code -->

<!-- wp:paragraph -->

<p>Perfect, now let's go back to our JS file. We need to grab the value of the first and last input fields which we can do by using the native JS  <em>document.getElementById</em> method</p>
<!-- /wp:paragraph -->

<!-- wp:code -->

<pre class="wp-block-code"><code>function printName() {
 let firstName = document.getElementById("firstName").value;
 let lastName = document.getElementById("lastName").value;

 console.log(`${firstName} ${lastName}`);
}</code></pre>

<!-- /wp:code -->

<!-- wp:paragraph -->

<p>Let's check our browser console and see if that worked by adding to the input fields hitting submit and checking the console. You can open the console by pressing (command + shift + c).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<p>&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":75769} -->

<figure class="wp-block-image"><img class="wp-image-75769" src="http://alexvirdeeblog.com/wp-content/uploads/2018/12/Screen-Shot-2018-12-07-at-4.49.13-PM-1024x373.png" alt="" />
<figcaption>works, very cool! </figcaption>
</figure>
<!-- /wp:image -->

<!-- wp:paragraph -->

<p>Logging to the console is useful in development but we want our users to see our function working on the DOM, let's get this rendered 😎</p>
<!-- /wp:paragraph -->

<!-- wp:code -->

<pre class="wp-block-code"><code>function printName() {
 let firstName = document.getElementById("firstName").value;
 let lastName = document.getElementById("lastName").value;

 demo.innerHTML = `${firstName} ${lastName}`;
}</code></pre>

<!-- /wp:code -->

<!-- wp:paragraph -->

<p>Add some styles </p>
<!-- /wp:paragraph -->

<!-- wp:code -->

<pre class="wp-block-code"><code>function printName() {
 let firstName = document.getElementById("firstName").value;
 let lastName = document.getElementById("lastName").value;

 demo.innerHTML = `${firstName} ${lastName}`;
 demo.style.border = "2px solid #fff";
 demo.style.margin = "0 auto";
 demo.style.marginTop = "15px";
 demo.style.width = "400px";
 demo.style.height = "50px";
}</code></pre>

<!-- /wp:code -->

<!-- wp:image {"id":75780} -->

<figure class="wp-block-image"><img class="wp-image-75780" src="http://alexvirdeeblog.com/wp-content/uploads/2018/12/Screen-Shot-2018-12-07-at-5.07.28-PM-1024x516.png" alt="" />
<figcaption>Success! </figcaption>
</figure>
<!-- /wp:image -->

<!-- wp:paragraph -->

<p>You can definitely make the styling better but congrats on properly interacting with the DOM. Hopefully you can see how awesome JavaScript is even with just a simple function. Let's add another small one just for fun before the ending this post.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<p>Let's go back to our html file and add this button to the footer </p>
<!-- /wp:paragraph -->

<!-- wp:code -->

<pre class="wp-block-code"><code>&lt;footer&gt;
 Made by: 'your-name-here' 😎 
 &lt;input type="button" value="change background" onclick="changeBackground()"&gt;
&lt;/footer&gt;</code></pre>

<!-- /wp:code -->

<!-- wp:paragraph -->

<p>and to our JS </p>
<!-- /wp:paragraph -->

<!-- wp:code -->

<pre class="wp-block-code"><code>function printName() {
 let firstName = document.getElementById("firstName").value;
 let lastName = document.getElementById("lastName").value;

 demo.innerHTML = `${firstName} ${lastName}`;
 demo.style.border = "2px solid #fff";
 demo.style.margin = "0 auto";
 demo.style.marginTop = "15px";
 demo.style.width = "400px";
 demo.style.height = "50px";
}

function changeBackground() {
 let body = document.body;
 body.style.background = "#FF0000";
}</code></pre>

<!-- /wp:code -->

<!-- wp:paragraph -->

<p>Refresh the browser &amp; click on the change background button. The body of the DOM should now be styled red!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<p>There are many ways to interact with the DOM &amp; in the next post I will be introducing an API and AJAX requests. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<p>Happy Coding! </p>
<!-- /wp:paragraph -->
