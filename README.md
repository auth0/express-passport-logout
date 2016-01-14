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

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
