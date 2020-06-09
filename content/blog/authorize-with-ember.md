---
path: Authorize with Ember
date: 2019-06-14T04:00:00.000Z
title: Authorize with Ember
description: An authorization tutorial using the Ember.js Framework
---
EmberJS



In this post i'll be going over authorization - the process of verifying someone's identity using required details (username, password) using the awesome JavaScript framework Ember. "Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework. Wikipedia". Ember can be thought of as similar to both React & Angular but with its principle of convention over configuration it is more rightly compared to coding web apps with Ruby on Rails.



Install Ember-CLI



First, let's setup our machines by installing the latest version of EmberJS. Ember makes use of a CLI (command line interface) to build web apps. I'll assume you have NodeJS already installed if you're reading this post. So let's open up our terminals and enter the following command.



```
npm install -g ember-cli
```

Start an Ember app



Ember-cli makes it really quick to start developing web applications. Enter the following commands where you would like your app stored and open up an IDE so we can start coding out our small authorization application



```
ember new auth-app 
```

```
cd auth-app/
```

```
code .
```



I won't be going into detail on the overall structure of an ember application as that could make this post a lot more lengthy but we will keep most of our code in the app/ directory. The image below is from the Ember docs and gives a good overview on how the framework is functioning with its url, router, and corresponding template.







Overview of an Ember application



In this post I just want to showcase how to get some simple authorization going with Ember. If you are keen on learning more about the framework as you start to build your own applications, you can refer over to the documentation here.



Install Authorization Addon



Ember has a large ecosystem of addons to help develop applications quickly utilizing functionalities built by other developers. Ember contributors developed a great one to incorporate authorization into our apps called Ember-Simple-Auth. We'll be using this with ember-data to maintain a client-side session for our app. Run the following command to install the addon.



```
ember install ember-simple-auth
```



Checking the package.json file in the root of our app you should be able to see simple auth successfully installed. For this app I am on ember version 3.7.1 and ember-simple-auth is at 1.8.2



Start an Ember app (for real this time)



Now to actually get our website running on the browser enter the following command. This will start our ember server and will look for any changes that we make inside of our /app directory.



```
ember s 
```









Quick aside



You can use any port you wish. This could be handy if you happen to be coding out several ember apps at once (usually the case with me at work). All you need to do is in another terminal use the - - port flag. For example if I had another app I wanted to run while working on this app I could use port 8888 as well. I'd do this by entering the following command when starting the ember server on the other app.



```
ember s --port=8888
```



Let's continue building our authorization app. Head over to localhost:4200 in your browser & you should be greeted with the following splash screen.







Ember Welcome Page



This is embers welcome page we can go ahead and remove it. Head over to app/templates/application.hbs remove the following lines of code.



app/templates/application.hbs



```
- {{!-- The following component displays Ember's default welcome message. --}}
```

```
- {{welcome-page}}
```

```
- {{!-- Feel free to remove this! --}}
```



```
{{outlet}}
```



application.hbs should just contain



app/templates/application.hbs



```
{{outlet}}
```



The index route should now be blank and we can start working.



Generate login route



We'll have our user input their username and password (we'll use "admin admin") so they may login to our simple authorization application. The ember-cli makes it really easy to generate new routes for our app. Enter the following into the terminal. If you are using VS Code you can have another terminal open by hitting the + icon so you do not have to shut down the development server. Or if you want you can open up another terminal.



ember generate route login 



This should generate a route javascript file, template handlebars, a test, and finally should update our router.js file to incorporate /login as a url in our app.







ember-cli generated files



Where the initial welcome page was let's add a link to the login route if the user isn't authenticated.



app/templates/application.hbs



```
<div class="menu">
```

```
  {{#if session.isAuthenticated}}
```

```
    <a {{action 'invalidateSession'}}>Logout</a>
```

```
  {{else}}
```

```
    {{#link-to 'login'}}Login{{/link-to}}
```

```
  {{/if}}
```

```
</div>
```

```
<div class="main">
```

```
  {{outlet}}
```

```
</div>
```

Add controller logic



Ember controllers as per the docs behave as specialized types of components that is rendered by the router once entering that specific route. The controller will receive the return value of the routes ( model() ) method. Enter the following command to create a controller on our application.



```
ember g controller application
```



In the /controllers directory ember-cli should have created a controller corresponding to the entire application. Ember can now tell if a user is authenticated or not across the entire application.



app/controllers/application.js



```
import Controller from '@ember/controller';
```

```
import { inject as service } from '@ember/service';
```



```
export default Controller.extend({
```

```
  session: service(),
```

```

```

```
  actions: {
```

```
    invalidateSession() {
```

```
      this.get('session').invalidate();
```

```
    }
```

```
  }
```

```

```

```
});
```



In the above code we created a session service and an action called invalidateSession() when fired will log our user out of the application.



Create an authenticator



We will now create a new authenticator required by simple-auth to create a session. Let's enter the following command to be able to define our authenticator.



```
ember g authenticator auth
```



This should have created a new directory called authenticators with our auth.js file inside.



app/authenticators/auth.js



```
import Base from 'ember-simple-auth/authenticators/base';
```

```
import { inject as service } from '@ember/service';
```

```
import { run } from '@ember/runloop';
```

```
import { isEmpty } from '@ember/utils';
```

```
import RSVP from 'rsvp';
```

```
import fetch from 'fetch';
```

```
import { computed } from '@ember/object';
```



```
export default Base.extend({
```

```
  serverInfo: service(),
```

```
  session: service(),
```

```

```

```
  serverAuthEndpoint: computed('serverInfo', function() {
```

```
    return `${this.get}/login`;
```

```
  }),
```

```

```

```
  restore: function(data) {
```

```
    return new RSVP.Promise(function(resolve, reject) {
```

```
      if (!isEmpty(data)) {
```

```
        resolve(data);
```

```
      } else {
```

```
        reject();
```

```
      }
```

```
    });
```

```
  },
```



```
  authenticate(credentials) {
```

```
    const { identification, password } = credentials;
```

```
    return fetch(this.get('serverAuthEndpoint'), {
```

```
      credentials: 'include',
```

```
      method: 'POST',
```

```
      headers: {
```

```
        'Content-Type': 'application/x-www-form-urlencoded'
```

```
      },
```

```
      body: 'username=' + identification + '&' + 'password=' + password,
```

```
    }).then(function(response) {
```

```
      return response.json();
```

```
    }).catch((error) => run(null, error));
```

```
  },
```



```
  invalidate: function(data) {
```

```
    window.console.log('INVALIDATING SESSION');
```

```
    return Promise.resolve(data);
```

```
  },
```

```
});
```



Login template



Let's show our login form in the /login route. Enter the following code



app/templates/login.hbs



```
<h1>Authorization with EmberJS</h1>
```

```
<form {{action 'authenticate' on='submit'}}>
```

```
  <label for="identification">Login</label>
```

```
  {{input id='identification' placeholder='Enter Login' value=identification}}
```

```
  <label for="password">Password</label>
```

```
  {{input id='password' placeholder='Enter Password' type='password' value=password}}
```

```
  <button type="submit">Login</button>
```

```
  {{#if errorMessage}}
```

```
    <p>{{errorMessage}}</p>
```

```
  {{/if}}
```

```
</form>
```

```
{{outlet}}
```



The login route should look like the screenshot below.







Our current ember simple-auth app

Create controller on login route



Authenticate on the session service's authenticate method. Let's create the following login controller and code.



```
ember g controller login 
```

app/controllers/login.js



```
import Controller from '@ember/controller';
```

```
import { inject as service } from '@ember/service';
```



```
export default Controller.extend({
```

```
  session: service(),
```

```

```

```
  actions: {
```

```
    authenticate() {
```

```
      let { identification, password } = this.getProperties('identification', 'password');
```

```
      this.get('session').authenticate('authenticator:auth', identification, password).catch((reason) => {
```

```
        this.set('errorMessage', reason.error || reason);
```

```
      });
```

```
    }
```

```
  }
```



```
});
```



To handle events we will need to use simple-auths ApplicationRouteMixin method that automatically maps session events.



Add a new file under our routes directory called application.js & add the following code to implement the mixin.



```
import Route from '@ember/routing/route';
```

```
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
```



```
export default Route.extend(ApplicationRouteMixin);
```

Create a protected route

```
ember g route protected
```

app/routes/protected.js



```
import Route from '@ember/routing/route';
```

```
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
```

```

```

```
export default Route.extend(AuthenticatedRouteMixin);
```

Prevent user from returning to login route



If a user is already authenticated we want them to avoid going back to the login route unless they invalidate the session. Simple auth contains the UnathenticatedRouteMixin to contain this logic.



app/routes/login.js



```
import Route from '@ember/routing/route';
```

```
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
```

```

```

```
export default Route.extend(UnauthenticatedRouteMixin, {
```

```
});
```
