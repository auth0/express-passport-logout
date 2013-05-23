Express middleware to logout a user from passport and redirect somewhere

## Install

	npm install express-passport-logout

## Usage

~~~javascript
var logout = require('express-passport-logout');

app.get('/logout', logout());
~~~

## License 
	
MIT - Auth0