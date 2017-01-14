
# Loopback mvc plugin

This library allows use loopback also as MVC, adding support for controllers. It uses [JulianDuniec/express-controllers](https://github.com/JulianDuniec/express-controllers) for that, all merit goes to he, this is only a loopback wrap.

Author: Roger Fos Soler (desaroger23@gmail.com)

## Usage

First, install the library:

```bash
$ npm i --save loopback-mvc
```

Now bind the app and the desired options:

```js
let loopbackMVC = require('loopback-mvc');
loopbackMVC(app, {})
```

## Options

Available options:

- *controllersFolder*: Where the controllers are. Default: *mvc/controllers*.
- *views*: If true, the library will set the express *views* folder and the *views engine*. Default: true. If this property is true, two more options are available:
	- *viewsFolder*: The views folder. It defines the express *view*. Default: *mvc/views*.
	- *viewsEngine*: The views engine. It defines the express *view engine*. Default: *pug*.

Example:

```json
{
	"controllersFolder": "mvc/controllers",
	"viewsEngine": "pug"
}
```