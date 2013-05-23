Express middleware to logout a user from passport and redirect somewhere. 

It will
* `req.logout()`
* delete `req.session`
* redirect to `req.query.returnTo` if exists, if not `res.send(bye)`

## Install

	npm install express-passport-logout

## Usage

~~~javascript
var logout = require('express-passport-logout');

app.get('/logout', logout());
~~~

## License 
	
MIT - Auth0
