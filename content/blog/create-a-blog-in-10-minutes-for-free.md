---
path: Create a blog in 10 minutes for free
date: 2019-03-14T04:00:00.000Z
title: Create a blog in 10 minutes for free
description: 'Quickly setup creating a blog '
---
<!-- wp:heading -->
<h2>Welcome</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Today we will be going over how-to setup a blog using Jekyll and deploying the site to the internet without paying for web hosting. As you may know hosting  can be costly if you have a lot of websites and projects you are sending online but if a project is just dealing with static files and no back-end databases there are free ways to send these files to the internet without having a paid hosting provider. You can later choose to buy a domain name if you would like.  </p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":75916,"align":"right","width":255,"height":115} -->
<div class="wp-block-image"><figure class="alignright is-resized"><img src="http://alexvirdeeblog.com/wp-content/uploads/2019/03/github_pages-1.png" alt="" class="wp-image-75916" width="255" height="115"/><figcaption><em>Host your static sites for fre</em>e</figcaption></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph {"align":"left"} -->
<p style="text-align:left"><strong>This is possible thanks to GitHub pages.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>GitHub pages is what we will be using to host our site. Jekyll will be our platform for blogging. Jekyll could be thought of as something similar to WordPress but there is no hassle with databases and you get to focus on what is really important; your content.  Jekyll makes use of static files such as Markdown, HTML, &amp; CSS to build your blog. What is great about Jekyll is that it is extremely easy to get started and only minimal programming knowledge is needed to get a website running. We will soon have a full fledged blog that you can build out and has the potential to become a real hit who knows! </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Let's get started </h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Let's refer over to the <a href="https://jekyllrb.com/﻿">Jekyll homepage </a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Per the quick start instructions let's open up our terminals and  run the following commands.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code> $ gem install bundler jekyll

 $ jekyll new blog-website

 $ cd blog-website</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Note * remove the $ sign in your commands as you enter them </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you happen to encounter an issue with the first command that would mean you either do not have Ruby installed on your machine or you have an older version. To get the latest version refer over to the <a href="https://www.ruby-lang.org/en/documentation/installation/">Ruby docs</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Open text editor &amp; start server </h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>code .</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>File layout </p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>├── Gemfile
├── Gemfile.lock
├── _config.yml
├── _posts
│   └── 2016-12-04-welcome-to-jekyll.markdown
├── about.markdown
└── index.markdown</code></pre>
<!-- /wp:code -->

<!-- wp:code -->
<pre class="wp-block-code"><code>bundle exec jekyll serve
# => Head to your browser @ http://localhost:4000</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Great, we should now have the basis of our blog up and running on our local machine.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":75927} -->
<figure class="wp-block-image"><img src="http://alexvirdeeblog.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-16-at-11.02.01-AM-1024x560.png" alt="" class="wp-image-75927"/><figcaption>Jekyll static blog pre-installed with minima theme<br></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2>Host on GitHub Pages</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>GitHub pages are powered by Jekyll which makes this process easy to get up and running. Head over to <a href="https://github.com/">GitHub </a>and sign in.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Create a new repository you can name this whatever you like. Make sure to <strong>not</strong> initialize this with a README will be adding it as a remote origin.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":75937} -->
<figure class="wp-block-image"><img src="http://alexvirdeeblog.com/wp-content/uploads/2019/03/Fullscreen_3_16_19__2_47_PM-1024x640.jpg" alt="" class="wp-image-75937"/><figcaption>copy ssh link</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p> In the terminal run the following commands </p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>git init

git add .

git commit -m "Initial commit"

git remote add origin "your remote repository URL here"

git push -u origin master</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Setup github pages branch </p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>git checkout -b gh-pages</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Add a new post to push to GitHub </p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>touch _posts/2019-03-16-testpost.md</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Add some content!</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>---
layout: post
title:  "A Test Post"
---

# Welcome

**Hello world**, this is a test Jekyll blog post.

Welcome to my new website 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin diam sit amet ligula scelerisque fermentum. Quisque sed tincidunt risus. Aenean consectetur at ex et suscipit. Integer ultrices ante maximus, tristique eros eget, porta quam. Mauris justo lectus, dapibus non turpis ut, congue mollis tellus. Aliquam erat volutpat. Phasellus ac efficitur neque. Suspendisse et magna ac dolor bibendum accumsan vitae quis purus. Maecenas ullamcorper nulla magna, ut sodales orci semper elementum.

&lt;img src="https://picsum.photos/600/400/?image=1074"/>

Nunc a elit nibh. Vestibulum rhoncus sollicitudin turpis, eget malesuada libero dictum eget. Nunc a lacus consequat, elementum orci nec, accu`msan metus. Pellentesque quis tempus metus. Pellentesque et leo massa. Aenean venenatis odio ex, ut tincidunt nulla ultrices a. In sodales venenatis ultrices. Aliquam pharetra at ex quis luctus. Aenean non urna eu elit dictum lobortis. Integer sed lobortis mauris, dapibus porta ipsum. Curabitur nec venenatis libero. Curabitur nec faucibus dui, ac dignissim urna. Mauris feugiat sem eu maximus pulvinar. Fusce orci odio, vehicula pellentesque est vitae, pharetra viverra ex. Vestibulum hendrerit orci ut lorem fringilla tincidunt. Fusce molestie at magna sed cursus.

Sed interdum ornare nisl id convallis. Duis scelerisque lectus eget magna feugiat dapibus. Donec tincidunt sagittis nisl id auctor. Integer gravida porttitor dui a vehicula. Quisque varius mi ut diam vestibulum rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras orci arcu, pharetra a varius sit amet, mollis sit amet nunc. Aliquam justo libero, luctus ac auctor ut, fermentum dictum est. Sed accumsan, neque ut congue gravida, elit erat pharetra ipsum, at iaculis nunc mi non mi. Nullam vel augue nisl. Curabitur sodales est vitae risus sagittis, id bibendum nibh accumsan. Nullam eu volutpat ante. Vivamus semper magna sit amet pharetra vehicula. Phasellus sit amet efficitur dui, eu blandit lorem. Vivamus rutrum posuere pretium. Fusce mauris eros, efficitur nec neque in, varius dignissim mi.</code></pre>
<!-- /wp:code -->

<!-- wp:image {"id":75938} -->
<figure class="wp-block-image"><img src="http://alexvirdeeblog.com/wp-content/uploads/2019/03/Fullscreen_3_16_19__3_03_PM-1024x576.jpg" alt="" class="wp-image-75938"/><figcaption>test post markdown localhost</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3>Push changes to GitHub</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>git status </code></pre>
<!-- /wp:code -->

<!-- wp:image {"id":75939} -->
<figure class="wp-block-image"><img src="http://alexvirdeeblog.com/wp-content/uploads/2019/03/1__alexvirdee_AlexindersMBP2____Desktop_Software_jekyll_blog-website__zsh_-1024x427.jpg" alt="" class="wp-image-75939"/><figcaption>untracked file to push </figcaption></figure>
<!-- /wp:image -->

<!-- wp:code -->
<pre class="wp-block-code"><code>git add .

git commit -m "first post"

git push origin gh-pages</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>A new branch gh-pages has been pushed up to the remote repository and is now hosted live on GitHub pages. If you go to settings tot he GitHub Pages section you will see the link where the website is hosted. There is one more issue to deal with here, our style are not loading correctly.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":75940} -->
<figure class="wp-block-image"><img src="http://alexvirdeeblog.com/wp-content/uploads/2019/03/Fullscreen_3_16_19__3_10_PM-1024x640.jpg" alt="" class="wp-image-75940"/><figcaption>404 errors</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2>Fix theme issue </h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We need to install the gh-pages gem for our theme to work correctly on GitHub pages. Open the Gemfile and insert the following code. </p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
# gem "jekyll", "~> 3.8.5"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.0"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>Update _config.yml file</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We need to change the url configuration so the site is able to point to our root url of the repository we have created. </p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>baseurl: "/REPOSITORY_NAME_HERE" # the subpath of your site, e.g. /blog
url: "https://USERNAME.github.io" # the base hostname &amp; protocol for your site, e.g. http://example.com</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Run command in terminal</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>bundle update </code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>Push changes to GitHub</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>git add .

git commit -m "update GitHub pages url configuration"

git push origin gh-pages</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>and that should do it, if you visit your GitHub pages url your files should load correctly and you can keep on adding to the website. Make sure to follow the documentation on Jekyll to find more information about editing and configuring your new Jekyll blog. </p>
<!-- /wp:paragraph -->

<!-- wp:video {"id":75944} -->
<figure class="wp-block-video"><video controls src="http://alexvirdeeblog.com/wp-content/uploads/2019/03/zoom_0.mp4"></video><figcaption>New Jekyll blog.</figcaption></figure>
<!-- /wp:video -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->
