$A quick example of how to use kahoot.js-updated to join a game.
## Creating a client / bot
*Note: These tutorials use kahoot.js-updated*
### Basic joining and answering
```js
const kahootJS = require("kahoot.js-updated");
const bot = new kahootJS();
bot.join(12345, "luggage password"); // (PIN,NAME)
bot.on("QuestionStart", question => {
  question.answer(0);
});
```
### Sending multiple bots
```js
const kahootJS = require("kahoot.js-updated");
function wait(n){
  n = n || 1;
  return new Promise(resolve=>{
    setTimeout(resolve,n * 1000);
  });
}
async function sendBots(pin,name,amount){
  for(let i = 0; i < amount;i++){
    const bot = new kahootJS;
    await bot.join(pin,name + i);
    await wait(0.1);
  }
}
sendBots(4815162342,"lost",10);
```

You can find more about how to use kahoot.js-updated [here](https://npmjs.com/package/kahoot.js-updated).
