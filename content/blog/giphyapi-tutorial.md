---
path: GiphyAPI Tutorial
date: 2019-02-23T05:00:00.000Z
title: GiphyAPI Tutorial
description: A short tutorial on how to use an API with JavaScript
---
Welcome devs & avenger fans











In this post we will be covering another web application project with HTML5, CSS3, and of course JavaScript. but this time making use of an API. The Giphy API to be exact! If you aren't sure of what an API is, please refer to this link.



Let's Code

Terminal Commands

```
mkdir giphy-js
```

```
cd giphy-js
```

```
touch index.html
```

```
touch giphy.js
```

```
touch style.css
```

```
code .
```



You'll notice the last command I use "code ." & that is because I am using Visual Studio Code which is now my go to editor. Feel free to use Sublime text or whichever editor you are comfortable with. I highly recommend checking out VS Code as it makes development speed very quick with its integrated terminal and I just enjoy it for all sorts of projects small ones like this & even large scale framework projects at work.







Project structure



Let's get our HTML structure down. Please make note that you will be able to expand on this project how you want. We will also be adding a CSS3 library called Materialize, a design language developed by Google. Design languages minimizes the amount of CSS you need to write in order to get a website or application looking nice. Therefore making the development speed that much quicker. 🙌



We'll be making use of the Materialize grid structure which divides columns into an equal size no matter what size the browser is. This grid is very similar to Bootstrap; another design language developed by Twitter that is very popular among developers. Here is how your html should look like with files linked and in your browser if you open up the index.html file.







Files linked





Columns are where giphs will be aligned on the page

AJAX





Ajax Diagram



Ajax is a great tool web developers have to make our websites more interactive. It works by reading data from a web server. For this project we will be making a call to Giphy and loading those images onto our web page. Very cool! We will need jQuery to make our Ajax request. You could technically use Vanilla JavaScript to make an XMLHttpRequest but Ajax is just fine for our purpose.



API Key



Head over to Giphy and apply for an API Key which allows us developers to call the programming interface therefore allowing giphy (x company API you are using) to identify usage of their data.



Style Page

```
html { 
```

```
    background: url(images/spiderman.jpg) no-repeat center center fixed; 
```

```
    -webkit-background-size: cover;
```

```
    -moz-background-size: cover;
```

```
    -o-background-size: cover;
```

```
    background-size: cover;
```

```
  }
```

```

```

```
  body {
```

```
      color: #fff;
```

```
      margin: 0;
```

```
      padding: 0;
```

```
  }
```



If you'd like you can add the styles above I just added a background image to make a nice little design for this small app.



More CSS

```
html { 
```

```
    background: url(images/spiderman.jpg) no-repeat center center fixed; 
```

```
    -webkit-background-size: cover;
```

```
    -moz-background-size: cover;
```

```
    -o-background-size: cover;
```

```
    background-size: cover;
```

```
  }
```



```
  body {
```

```
      color: #fff;
```

```
      margin: 0;
```

```
      padding: 0;
```

```
  }
```



```
  #giph-show {
```

```
      margin-top: 10px;
```

```
  }
```

```

```

```
  #giph-show ul{
```

```
      display: block;
```

```
      list-style-type: disc;
```

```
      box-sizing: border-box;
```

```
  }
```

```

```

```
  #giph-show li {
```

```
      list-style: none;
```

```
      display: inline-block;
```

```
      vertical-align: top;
```

```
      margin: 2%;
```

```
      padding: 2%;
```

```
      width: 25%;
```

```
  }
```

```

```

```
  #giph-show li img {
```

```
      width: 300px;
```

```
      height: 300px;
```

```
  }
```

HTML

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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

```
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
```

```
    <title>Avengers Giphy API</title>
```

```
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
```

```
    <link rel="stylesheet" href="style.css">
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
    <div class="container">
```

```
        <h1>Avenger Giphs</h1>
```

```
        <p>"We're in the End Game, now."</p>
```

```
        <div class="giph-content">
```

```
            <form id="giph-avengers" action="https://api.giphy.com/v1/gifs/search?q=avengers&api_key=7pb5wGRKX2EWL7l3o67SsNeobF0yjiUZ&fmt=html&limit=10">
```

```
                <input style="background-color:#f44336;" type="submit" name="submit" class="btn" value="Show Avenger Giphs">
```

```
            </form>
```

```
            <div class="row" id="giph-show">
```

```
                <div class="col s4"></div>
```

```
                <div class="col s4"></div>
```

```
                <div class="col s4"></div>
```

```
            </div>
```

```
        </div>
```

```
    </div>
```

```
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

```
    <script src="giphy.js"></script>
```

```
</body>
```

```
</html>
```

```
JavaScript & Ajax request to make our call!
```

```
$(document).ready(function() {
```

```
    giphListener();
```

```
});
```

```

```

```
let giphListener = function() {
```

```
    $("#giph-avengers").on("submit", function(e) {
```

```
        e.preventDefault();
```

```

```

```
        let $form = $(this);
```

```
        let url = $form.attr("action");
```

```
        let method = $form.attr("method");
```

```

```

```
        $.ajax({
```

```
            url: url,
```

```
            method: method
```

```
        }).done(function(res) {
```

```
            console.log("Ajax call successful");
```

```
            $("#giph-show").append(res);
```

```
        }).fail(function() {
```

```
            console.log("Error with Ajax Request...");
```

```
        })
```

```
    })
```

```
};
```



Hope you enjoyed this short tutorial making use of an API, feel free to expand on the code. Some ideas are you could create a search parameter with an input to make use of all giphs from the api available to the user. Or maybe a JavaScript function that calls different parameters to the api instead of just "avengers" but other related ones (in an array) so that the same ones aren't showed with each button click as you may have noticed with how the app is in its current state. There are tons of ways you can make use of an api, make sure to read the documentation for more info & ideas on how to utilize it.



See you in the next post!
