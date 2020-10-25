$Examples of how to search for Kahoots.
## Searching for public Kahoots
<div class="navigation">
  <div>
    <span>Examples</span>
    <a link="?scrollTo=basic" class="nav">Basic search</a>
    <a link="?scrollTo=basic2" class="nav">Basic search, with quiz</a>
    <a link="?scrollTo=correction" class="nav">Advanced querying</a>
  </div>
</div>

<a link="?scrollTo=basic" class="nam"></a>
### Basic search
`GET https://kahoot.it/rest/kahoots/?query=example`

<a link="?scrollTo=basic2" class="nam"></a>
### Basic search, with quiz
`GET https://kahoot.it/rest/kahoots/?query=example&includeKahoot=true`

<a link="?scrollTo=correction" class="nam"></a>
## Advanced querying
Some searches may not have a successful search and may need to be fixed to work all the time.

Ex: `The Ancient Origins of Halloween 🕷🕸`, `Halloween: Theatre: Shakespeare's Ghosts - Identify ghosts`, and `The Square Club - Mission Coordinates - Episode 3`.

These queries might result in no results despite these being taken directly from the Kahoot!'s name.

To reformat to guarantee that the results show up, you may need a program like so:

```js
const emojiRegex = require("emoji-regex")(), // matches emojis
  main = /[^\d.\s/\-...]/img, // see the source below for the full regex. This matches anything that is not numbers, spaces, dashes, slahes, and foreign languages
  sub = /[/-]/mg, // matches the "/" and the "-" character which are the most common characters to break the search
  combined = new RegExp(`(${emojiRegex.source})|(${main.source})`,"gmi"), // combines regexes for quick use
  endCheck = / \*+$/gm, // checks if there is a "*" following a space at the end
  lastStar = /([\*](?=[^\*]*$))/g; // matches the last star in the string
let StringToFix = "The Ancient Origins of Halloween 🕷🕸",
  StringToFix2 = "Halloween: Theatre: Shakespeare's Ghosts - Identify ghosts"

StringToFix.replace(combined,"*").replace(sub," ").replace(endCheck,"*"); // The Ancient Origins of Halloween *
StringToFix2.replace(combined,"*").replace(sub," ").replace(endCheck,"*"); // Halloween* Theatre* Shakespeare*s Ghosts   Identify ghosts

// These if statements fix some edge cases where the script repaces a bunch of characters into something like this:
// "This*is*an*example" and then changes it to "This*is*an example".
// The reason this is needed is that the first search can give unexpected results when searching.
if((!StringToFix.match(/\s/gm) && StringToFix.length) && StringToFix.match(/\*/gm)){
  StringToFix = StringToFix.replace(lastStar," ");
}
if((!StringToFix2.match(/\s/gm) && StringToFix2.length) && StringToFix2.match(/\*/gm)){
  StringToFix2 = StringToFix2.replace(lastStar," ");
}
```

Source: [github.com - theusaf's kahoot-winner](https://github.com/theusaf/kahoot-winner/blob/master/regex.js)
