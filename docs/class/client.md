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
    <a link="?scrollTo=jointeam" class="nav">Join Team Members</a>
    <a link="?scrollTo=leave" class="nav">Leave</a>
    <a link="?scrollTo=reconnect" class="nav">Reconnect</a>
  </div>
  <div>
    <span>Events</span>
    <a link="?scrollTo=Disconnect" class="nav">Disconnect</a>
    <a link="?scrollTo=FeedbackRequested" class="nav">FeedbackRequested</a>
    <a link="?scrollTo=replay" class="nav">GameReset</a>
    <a link="?scrollTo=HandshakeAccepted" class="nav">HandshakeAccepted</a>
    <a link="?scrollTo=JoinResponse" class="nav">JoinResponse</a>
    <a link="?scrollTo=ping" class="nav">Ping</a>
    <a link="?scrollTo=podium" class="nav">Podium</a>
    <a link="?scrollTo=QuestionEnd" class="nav">QuestionEnd</a>
    <a link="?scrollTo=QuestionReady" class="nav">QuestionReady</a>
    <a link="?scrollTo=QuestionStart" class="nav">QuestionStart</a>
    <a link="?scrollTo=QuizEnd" class="nav">QuizEnd</a>
    <a link="?scrollTo=QuizStart" class="nav">QuizStart</a>
    <a link="?scrollTo=timetrack" class="nav">Timetrack</a>
    <a link="?scrollTo=TimeOver" class="nav">TimeOver</a>
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
    <li>Finally, send a <a href="#/enum/LiveClientHandshake?scrollTo=first-handshake">LiveClientHandshake</a></li>
    <li>Now, wait for various events and respond to them as needed.</li>
  </ol>
</div>
<a link="?scrollTo=feedback" class="nam">Send Feedback</a>
<div class="info">
  <p>Used at the end of the game after a <a href="#/enum/LiveEventFeedbackRequest">LiveEventFeedbackRequest</a>.</p>
  <p>Send a <a href="#/enum/LiveFeedbackPacket">LiveFeedbackPacket</a>.</p>
</div>
<a link="?scrollTo=join" class="nam">Join</a>
<div class="info">
  <p>Join the game.</p>
  <p>Send a <a href="#/enum/LiveJoinPacket">LiveJoinPacket</a>.</p>
</div>
<a link="?scrollTo=jointeam" class="nam">Join Team Members</a>
<div class="info">
  <p>Used when the gameMode is <code>team</code>; after sending the join packet.</p>
  <p>Send a <a href="#/enum/LiveJoinTeamPacket">LiveJoinTeamPacket</a>.</p>
</div>
<a link="?scrollTo=leave" class="nam">Leave</a>
<div class="info">
  <p>Leave the game.</p>
  <p>Send a <a href="#/enum/LiveLeavePacket">LiveLeavePacket</a>.</p>
</div>
<a link="?scrollTo=reconnect" class="nam">Reconnect</a>
<div class="info">
  <p>Join a game. Used when the socket unexpectedly closed and the client wants to reconnect.</p>
  <ol>
    <li>Follow steps for <a href="#/class/client?scrollTo=connection">CreateHandshake</a>.</li>
    <li>Send a <a href="#/enum/LiveReloginPacket">LiveReloginPacket</a>.</li>
  </ol>
</div>

### Events
<a link="?scrollTo=Disconnect" class="nam">Disconnect</a>
<div class="info">
  <p>The game has ended, the player was kicked, or Kahoot! disconnected the client from its server.</p>
  <p>Happens when the server sends a <a href="#/enum/LiveEventDisconnect">LiveEventDisconnect</a>.</p>
  <p>Respond with a <a href="#/enum/LiveLeavePacket">LiveLeavePacket</a> (needs testing: is this really necessary?). You may close the connection.</p>
</div>
<a link="?scrollTo=FeedbackRequested" class="nam">FeedbackRequested</a>
<div class="info">
  <p>The game ended and the host requested feedback.</p>
  <p>Happens when the server sends a <a href="#/enum/LiveEventFeedbackRequest">LiveEventFeedbackRequest</a>.</p>
  <p>No response needed. You may <strong>Respond with:</strong> <a href="#/enum/LiveFeedbackPacket">LiveFeedbackPacket</a></p>
</div>
<a link="?scrollTo=replay" class="nam">GameReset</a>
<div class="info">
  <p>The host decided to play the game again (or continue to the next game in the list).</p>
  <p>Happens when the server sends a <a href="#/enum/LiveEventReplay">LiveEventReplay</a>.</p>
  <p>No response needed? (needs testing). You should prepare the client for a new game.</p>
</div>
<a link="?scrollTo=HandshakeAccepted" class="nam">HandshakeAccepted</a>
<div class="info">
  <p>The server accepts the handshake and sends back important information.</p>
  <p>Happens when the server sends a <a href="#/enum/LiveClientHandshakeResponse">LiveClientHandshakeResponse</a>.</p>
  <p><strong>Respond with:</strong> <a href="#/enum/LiveClientHandshake?scrollTo=second-handshake">LiveClientHandshake#2</a></p>
</div>
<a link="?scrollTo=JoinResponse" class="nam">JoinResponse</a>
<div class="info">
  <p>The server recieves the join/reconnect request and responds to it.</p>
  <p>Happens when the server sends a <a href="#/enum/LiveEventJoinResponse">LiveEventJoinResponse</a>.</p>
  <p>Response to this message may vary, depending on the server's response.</p>
</div>
<a link="?scrollTo=ping" class="nam">Ping</a>
<div class="info">
  <p>The server sends a ping to determine if the client is still connected.</p>
  <p>Happens when the server sends a <a href="#/enum/LiveConnectionPacket">LiveConnectionPacket</a>.</p>
  <p><strong>Respond with:</strong> <a href="#/enum/LiveClientHandshake?scrollTo=pong">LiveClientHandshake#ping</a></p>
</div>
<a link="?scrollTo=podium" class="nam">Podium</a>
<div class="info">
  <p>The quiz has ended. Contains the podium information. Emitted after the QuizEnd event.</p>
  <p>Happens when the server sends a <a href="#/enum/LiveEventPodium">LiveEventPodium</a>.</p>
  <p>No response needed.</p>
</div>
<a link="?scrollTo=QuestionEnd" class="nam">QuestionEnd</a>
<div class="info">
  <p>The server sends a <a href="#/enum/LiveEventQuestionEnd">LiveEventQuestionEnd</a>.</p>
  <p>No response is needed.</p>
</div>
<a link="?scrollTo=QuestionReady" class="nam">QuestionReady</a>
<div class="info">
  <p>The server sends a <a href="#/enum/LiveEventQuestionReady">LiveEventQuestionReady</a>.</p>
  <p>No response is needed.</p>
</div>
<a link="?scrollTo=QuestionStart" class="nam">QuestionStart</a>
<div class="info">
  <p>The server sends a <a href="#/enum/LiveEventQuestionStart">LiveEventQuestionStart</a>.</p>
  <p>No response is needed. You may <a href="#/class/client?scrollTo=answer">answer</a> the question now.</p>
</div>
<a link="?scrollTo=QuizEnd" class="nam">QuizEnd</a>
<div class="info">
  <p>The server sends a <a href="#/enum/LiveEventQuizEnd">LiveEventQuizEnd</a>.</p>
  <p>No response is needed.</p>
</div>
<a link="?scrollTo=QuizStart" class="nam">QuizStart</a>
<div class="info">
  <p>The server sends a <a href="#/enum/LiveEventQuizStart">LiveEventQuizStart</a>.</p>
  <p>No response is needed.</p>
</div>
<a link="?scrollTo=TimeOver" class="nam">TimeOver</a>
<div class="info">
  <p>The server sends a <a href="#/enum/LiveEventTimeOver">LiveEventTimeOver</a>.</p>
  <p>No response is needed.</p>
</div>
<a link="?scrollTo=timetrack" class="nam">Timetrack</a>
<div class="info">
  <p>The server sends a <a href="#/enum/LiveEventTimetrack">LiveEventTimetrack</a> about the current time. This is usually in response to a function.</p>
  <p>No response is needed (this is the response to a client action)</p>
</div>
