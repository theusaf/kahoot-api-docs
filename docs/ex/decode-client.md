## Decoding the tokens
Decoding the tokens is a little complicated, but the easiest way would be to evaluate the JavaScript.

### Evaluating the script
The `challenge` function from the [LiveSessionClientToken]("#/enum/LiveSessionClientToken)</a> looks likes this:
```js
decode.call(this, 'G6CXXJd12LBRhyFvJMPl0GCJU7PzKGeCc4BtOkmPKBKsYb3lbjcobY9Ob4bp3nfsfaL7kDK7th2jcoiYKkgmN2jCT3z2krUnfnRn'); function decode(message) {var offset = ((41 *39) *(100 + 	 11 *9)); if( this   . 	 angular	 . 	 isArray (   offset	 )) console   .   log 	 ("Offset derived as: {", offset, "}"); return  _. replace   ( message,/./g, function(char, position) {return String.fromCharCode((((char.charCodeAt(0)*position)+ offset ) % 77) + 48);});}
```
This is pretty ugly, so I replace a bunch of things:
#### Code:
```js
challenge = challenge.replace(/(\u0009|\u2003)/mg, "");
challenge = challenge.replace(/this /mg, "this");
challenge = challenge.replace(/ *\. */mg, ".");
challenge = challenge.replace(/ *\( */mg, "(");
challenge = challenge.replace(/ *\) */mg, ")");
challenge = challenge.replace("console.", "");
challenge = challenge.replace("this.angular.isObject(offset)", "true");
challenge = challenge.replace("this.angular.isString(offset)", "true");
challenge = challenge.replace("this.angular.isDate(offset)", "true");
challenge = challenge.replace("this.angular.isArray(offset)", "true");
```
#### Output:
```js
decode.call(this, 'G6CXXJd12LBRhyFvJMPl0GCJU7PzKGeCc4BtOkmPKBKsYb3lbjcobY9Ob4bp3nfsfaL7kDK7th2jcoiYKkgmN2jCT3z2krUnfnRn'); function decode(message){var offset =((41*39)*(100+ 11*9)); if(true)log("Offset derived as: {", offset, "}"); return _.replace(message,/./g, function(char, position){return String.fromCharCode((((char.charCodeAt(0)*position)+ offset)% 77)+ 48);});}
```
This is still pretty bad, but its a bit better. Now, we can merge it with the following scripts:
```js
const merger = "var _ = {" +
	"	replace: function() {" +
	"		var args = arguments;" +
	"		var str = arguments[0];" +
	"		return str.replace(args[1], args[2]);" +
	"	}" +
	"}; " +
	"var log = function(){};" +
	"return ";
const solver = merger + challenge;
```
Now, just run `solver()` and you have one of two tokens!

#### But what if I'm not using JavaScript?
If you are not using JS, you can try to modify the code to fit your language. Example output for a Python script:
```py
def decode(message):
  def log(a,b,c):
    pass
  offset =((41*39)*(100+ 11*9))
  if(True):
    log("Offset derived as: {", offset, "}")
  #.replace(message,/./g,
  def repl(char, position):
    return chr((((ord(char)*position)+ offset)% 77)+ 48)
  res=""
  for i in range(0,len(message)):
    res+=repl(message[i],i)
  return res
fin = decode('G6CXXJd12LBRhyFvJMPl0GCJU7PzKGeCc4BtOkmPKBKsYb3lbjcobY9Ob4bp3nfsfaL7kDK7th2jcoiYKkgmN2jCT3z2krUnfnRn')
# Below code is in main process (different file) Above code is the output of applying the first replacement (Cleanup) and then another replacement (JS -> PY).
edict = {}
exec(challenge,globals(),edict)
return edict["fin"]
```
Source: [KahootPY](https://github.com/theusaf/KahootPY/blob/master/kahoot/src/token.py)

You can also create your own code by grabbing the numbers and looping through the string to generate the correct code.

<a link="?scrollTo=combine" class="nam"></a>
## Combining the two tokens
You can combine the two tokens to get the final token using this function:
```js
function concatTokens(headerToken, challengeToken) {
	// Combine the session token and the challenge token together to get the string needed to connect to the websocket endpoint
	for (var token = "", i = 0; i < headerToken.length; i++) {
		var char = headerToken.charCodeAt(i);
		var mod = challengeToken.charCodeAt(i % challengeToken.length);
		var decodedChar = char ^ mod;
		token += String.fromCharCode(decodedChar);
	}
	return token;
}
```
