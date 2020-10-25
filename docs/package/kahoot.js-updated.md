$Kahoot.JS-Updated is a NodeJS package for interacting with Kahoot! Learn how to use it and create your own Kahoot! client.
## Kahoot.JS-Updated
Kahoot.JS-Updated is a NodeJS package for interacting with Kahoot! ([client](#class/client))

Originally, it was made by [wwwg](https://github.com/wwwg/kahoot.js) and was barely working when [theusaf](https://github.com/theusaf) got interested in Kahoot! bots. theusaf cloned the project and fixed the issues with it. Version 2.0 of Kahoot.JS-Updated no longer has ties with the original version. Also, wwwg's version is unmaintained and no longer works.

- You can see the package for yourself: [kahoot.js-updated](https://npmjs.com/package/kahoot.js-updated)
- To install it for use in your project: `npm i kahoot.js-updated --save`

Kahoot.JS-Updated now uses this documentation for most of its properties and events. If you are confused on what properties exist in events, you can check here.

### Usage
**Joining**
You can join a game like so:
```js
const Client = require("kahoot.js-updated");
const bot = new Client;
bot.join(12345,"Air Shield Password");
```
or
```js
const {client} = Client.join(12345,"Luggage");
```

To answer questions you can do this:
```js
bot.on("QuestionStart",q=>{
  q.answer(0);
});
```
or
```js
bot.on("QuestionStart",()=>{
  bot.answer(0);
});
```

Read the [docs](https://kahoot-js.js.org) for more information.
