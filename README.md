# moduli-express-example
An example project (express starter app), implemented with moduli.<br>
This project contains a simple express webapp:<br>
<ul>
<li><strong>Moduli</strong> as IoC container</li>
<li>MongoDB (+mocks in tests) using Mongoose</li>
<li>Handlebars as view engine</li>
<li>REST & Service layers</li>
<li>Unit & integrations tests samples (mocha)</li>
</ul>
<p>
main.js is the file which starts the app by initializing moduli.<br>
Under /src you can find the app code - it is modular and divided into different modules, each module responsible for some functionality. The structure makes it easy to test the app properly.
</p>

Usage
-------
Clone/download repository code and start your express project with moduli.<br>
Modify package json according to your project metadata.<br>
Install dependencies:

- [npm](http://www.npmjs.com/): `npm install`

Start server with:

- [npm](http://www.npmjs.com/): `npm start`

Run tests with:

- [npm](http://www.npmjs.com/): `npm test`
