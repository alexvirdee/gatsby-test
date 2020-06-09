---
path: GiphyAPI Tutorial
date: 2019-02-23T05:00:00.000Z
title: GiphyAPI Tutorial
description: 'Introduction to using an API '
---
<!-- wp:heading -->
<h2>Welcome devs &amp; avenger fans</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":75816,"align":"right","width":313,"height":208} -->
<div class="wp-block-image">
<figure class="alignright is-resized"><img class="wp-image-75816" src="http://alexvirdeeblog.com/wp-content/uploads/2019/02/muhd-asyraaf-385275-unsplash-1024x683.jpg" alt="" width="313" height="208" />
<figcaption>Spiders are also web developers if you think about it...</figcaption>
</figure>
</div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>In this post we will be covering another web application project with HTML5, CSS3, and of course JavaScript. but this time making use of an API. The Giphy API to be exact! If you aren't sure of what an API is, please refer to this <a href="https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82">link.</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator {"className":"is-style-wide"} --><hr class="wp-block-separator is-style-wide" /><!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3>Let's Code</h3>
<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->
<h4>Terminal Commands</h4>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>mkdir giphy-js
cd giphy-js
touch index.html
touch giphy.js
touch style.css
code .</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>You'll notice the last command I use "code ." &amp; that is because I am using Visual Studio Code which is now my go to editor. Feel free to use Sublime text or whichever editor you are comfortable with. I highly recommend checking out VS Code as it makes development speed very quick with its integrated terminal and I just enjoy it for all sorts of projects small ones like this &amp; even large scale framework projects at work.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":75824} -->
<figure class="wp-block-image"><img class="wp-image-75824" src="http://alexvirdeeblog.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-1.59.45-PM-1024x460.png" alt="" />
<figcaption>Project structure</figcaption>
</figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Let's get our HTML structure down. Please make note that you will be able to expand on this project how you want. We will also be adding a CSS3 library called <a href="https://materializecss.com/">Materialize</a>, a design language developed by Google. Design languages minimizes the amount of CSS you need to write in order to get a website or application looking nice. Therefore making the development speed that much quicker. 🙌</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We'll be making use of the Materialize grid structure which divides columns into an equal size no matter what size the browser is. This grid is very similar to Bootstrap; another design language developed by Twitter that is very popular among developers. Here is how your html should look like with files linked and in your browser if you open up the index.html file.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":75833} -->
<figure class="wp-block-image"><img class="wp-image-75833" src="http://alexvirdeeblog.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-2.26.42-PM-1024x554.png" alt="" />
<figcaption>Files linked</figcaption>
</figure>
<!-- /wp:image -->

<!-- wp:image {"id":75834} -->
<figure class="wp-block-image"><img class="wp-image-75834" src="http://alexvirdeeblog.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-2.27.20-PM-1024x417.png" alt="" />
<figcaption>Columns are where giphs will be aligned on the page</figcaption>
</figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2>AJAX</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":75836,"align":"left","width":393,"height":158} -->
<div class="wp-block-image">
<figure class="alignleft is-resized"><img class="wp-image-75836" src="http://alexvirdeeblog.com/wp-content/uploads/2019/02/ajaxWebAppModel.gif" alt="" width="393" height="158" />
<figcaption>Ajax Diagram</figcaption>
</figure>
</div>
<!-- /wp:image -->

<!-- wp:paragraph {"align":"right"} -->
<p style="text-align: right;">Ajax is a great tool web developers have to make our websites more interactive. It works by reading data from a web server. For this project we will be making a call to Giphy and loading those images onto our web page. Very cool! We will need jQuery to make our Ajax request. You could technically use Vanilla JavaScript to make an XMLHttpRequest but Ajax is just fine for our purpose.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>API Key</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Head over to <a href="https://developers.giphy.com/">Giphy </a>and apply for an API Key which allows us developers to call the programming interface therefore allowing giphy (x company API you are using) to identify usage of their data.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>Style Page</h4>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>html { 
    background: url(images/spiderman.jpg) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  body {
      color: #fff;
      margin: 0;
      padding: 0;
  }</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If you'd like you can add the styles above I just added a background image to make a nice little design for this small app.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":75842} -->
<figure class="wp-block-image"><img class="wp-image-75842" src="http://alexvirdeeblog.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-23-at-2.49.26-PM-1024x510.png" alt="" />
<figcaption>If you couldn't tell, Spiderman is my favorite Avenger.</figcaption>
</figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
<h4>More CSS</h4>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>html { 
    background: url(images/spiderman.jpg) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  body {
      color: #fff;
      margin: 0;
      padding: 0;
  }

  #giph-show {
      margin-top: 10px;
  }

  #giph-show ul{
      display: block;
      list-style-type: disc;
      box-sizing: border-box;
  }

  #giph-show li {
      list-style: none;
      display: inline-block;
      vertical-align: top;
      margin: 2%;
      padding: 2%;
      width: 25%;
  }

  #giph-show li img {
      width: 300px;
      height: 300px;
  }</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
<h4>HTML</h4>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
    &lt;title&gt;Avengers Giphy API&lt;/title&gt;
    &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div class="container"&gt;
        &lt;h1&gt;Avenger Giphs&lt;/h1&gt;
        &lt;p&gt;"We're in the End Game, now."&lt;/p&gt;
        &lt;div class="giph-content"&gt;
            &lt;form id="giph-avengers" action="https://api.giphy.com/v1/gifs/search?q=avengers&amp;api_key=7pb5wGRKX2EWL7l3o67SsNeobF0yjiUZ&amp;fmt=html&amp;limit=10"&gt;
                &lt;input style="background-color:#f44336;" type="submit" name="submit" class="btn" value="Show Avenger Giphs"&gt;
            &lt;/form&gt;
            &lt;div class="row" id="giph-show"&gt;
                &lt;div class="col s4"&gt;&lt;/div&gt;
                &lt;div class="col s4"&gt;&lt;/div&gt;
                &lt;div class="col s4"&gt;&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;script src="https://code.jquery.com/jquery-3.3.1.min.js"&gt;&lt;/script&gt;
    &lt;script src="giphy.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
<h4>JavaScript &amp; Ajax request to make our call!</h4>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$(document).ready(function() {
    giphListener();
});

let giphListener = function() {
    $("#giph-avengers").on("submit", function(e) {
        e.preventDefault();

        let $form = $(this);
        let url = $form.attr("action");
        let method = $form.attr("method");

        $.ajax({
            url: url,
            method: method
        }).done(function(res) {
            console.log("Ajax call successful");
            $("#giph-show").append(res);
        }).fail(function() {
            console.log("Error with Ajax Request...");
        })
    })
};</code></pre>
<!-- /wp:code -->

<!-- wp:video {"id":75844} -->
<figure class="wp-block-video"><video src="http://alexvirdeeblog.com/wp-content/uploads/2019/02/zoom_0.mp4" controls="controls" width="300" height="150"></video>
<figcaption>Ajax call to Giphy API</figcaption>
</figure>
<!-- /wp:video -->

<!-- wp:paragraph -->
<p>Hope you enjoyed this short tutorial making use of an API, feel free to expand on the code. Some ideas are you could create a search parameter with an input to make use of all giphs from the api available to the user. Or maybe a JavaScript function that calls different parameters to the api instead of just "avengers" but other related ones (in an array) so that the same ones aren't showed with each button click as you may have noticed with how the app is in its current state. There are tons of ways you can make use of an api, make sure to read the documentation for more info &amp; ideas on how to utilize it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>See you in the next post!</h4>
<!-- /wp:heading -->
