## Client
Joining and interacting with Kahoot Live games.

<div class="navigation">
  <div>
    <span>Properties</span>
    <a link="?scrollTo=clientId" class="nav">clientId</a>
    <a link="?scrollTo=gameid" class="nav">gameid</a>
    <a link="?scrollTo=messageId" class="nav">messageId</a>
  </div>
  <div>
    <span>Functions</span>
    <a link="?scrollTo=answer" class="nav">Answer</a>
    <a link="?scrollTo=connection" class="nav">CreateHandshake</a>
    <a link="?scrollTo=feedback" class="nav">Feedback</a>
    <a link="?scrollTo=join" class="nav">Join</a>
    <a link="?scrollTo=leave" class="nav">Leave</a>
    <a link="?scrollTo=reconnect" class="nav">Reconnect</a>
    <a link="?scrollTo=jointeam" class="nav">SubmitTeamMembers</a>
  </div>
  <div>
    <span>Events</span>
    <a link="?scrollTo=FeedbackRequested" class="nav">FeedbackRequested</a>
    <a link="?scrollTo=QuizEnd" class="nav">QuizEnd</a>
    <a link="?scrollTo=QuizStart" class="nav">QuizStart</a>
  </div>
</div>

### Properties
*Note: Properties are values that you may want to store for use in Functions and Events*

<br>
<a link="?scrollTo=clientId" class="nam">clientId</a>
<div class="info">
  <p>The unique client identifier for the client.</p>
  <span class="type">String</span>
</div>
<a link="?scrollTo=gameid" class="nam">gameid</a>
<div class="info">
  <p>The game pin the client is connected to.</p>
  <span class="type">Number</span>
</div>
<a link="?scrollTo=messageId" class="nam">messageId</a>
<div class="info">
  <p>A number storing the number of messages sent between clients. It is incremented by 1 each time.</p>
  <span class="type">Number</span>
</div>

### Functions
<a link="?scrollTo=answer" class="nam">Answer</a>
<div class="info">
  <p>Answer the question.</p>
  <p>Send a <a href="#/enum/LiveQuestionAnswer">LiveQuestionAnswer</a>.</p>
</div>
<a link="?scrollTo=connection" class="nam">CreateHandshake</a>
<div class="info">
  <p>Create the connection to Kahoot's server.</p>
  <p>Steps:</p>
  <ol>
    <li><code>GET https://kahoot.it/reserve/session/{gameid}</code></li>
    <ul><li>This should respond with a <a href="#/enum/LiveSessionClientToken">LiveSessionClientToken</a></li></ul>
    <li>Decode the challenge.</li>
    <ul><li>See <a href="#/ex/decode-client">Decode Challenge Example</a></li></ul>
    <li>Decode the <a href="#/enum/LiveSessionClientToken?scrollTo=token">x-kahoot-session-token</a> by decoding the base64 string</li>
    <li>Combine the two tokens. See <a href="#/ex/decode-client?scrollTo=combine">Comine Tokens Example</a>. The resulting token is the token to use in the next step.</li>
    <li>Then, create a websocket connection to <code>wss://kahoot.it/cometd/{gameid}/{token}</code></li>
    <li>Finally, send a <a href="#/enum/LiveClientHandshake">LiveClientHandshake</a></li>
    <li>Now, wait for various events and respond to them as needed.</li>
  </ol>
</div>
