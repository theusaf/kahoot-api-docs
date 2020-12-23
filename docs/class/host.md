$Documentation for the live Kahoot! host. Host your own custom Kahoot! games
## Host
Playing and hosting live Kahoot! games

<div class="navigation">
  <div>
    <span>Properties</span>
    <a link="?scrollTo=clientId" class="nav">clientId</a>
    <a link="?scrollTo=gameid" class="nav">gameid</a>
    <a link="?scrollTo=messageId" class="nav">messageId</a>
    <a link="?scrollTo=players" class="nav">players</a>
    <a link="?scrollTo=questionIndex" class="nav">questionIndex</a>
    <a link="?scrollTo=quiz" class="nav">quiz</a>
  </div>
  <div>
    <span>Functions</span>
    <a link="?scrollTo=CreateHandshake" class="nav">CreateHandshake</a>
  </div>
  <div>
    <span>Events</span>
    <a link="?scrollTo=Disconnect" class="nav">Disconnect</a>
    <a link="?scrollTo=HandshakeAccepted" class="nav">HandshakeAccepted</a>
    <a link="?scrollTo=ping" class="nav">Ping</a>
    <a link="?scrollTo=status" class="nav">Status</a>
    <a link="?scrollTo=timetrack" class="nav">Timetrack</a>
  </div>
</div>

### Properties
*Note: Properties are values that you may want to store for use in Functions and Events*

<div>
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
  <a link="?scrollTo=players" class="nam">players</a>
  <div class="info">
    <p>The connected players.</p>
    <span class="type">Array[Payer]</span>
  </div>
  <a link="?scrollTo=questionIndex" class="nam">questionIndex</a>
  <div class="info">
    <p>A number storing the current question index.</p>
    <span class="type">Number</span>
  </div>
  <a link="?scrollTo=quiz" class="nam">quiz</a>
  <div class="info">
    <p>The quiz data.</p>
    <span class="type"><a href="/enum/KahootQuiz">KahootQuiz</a></span>
  </div>
</div>

### Functions

<div>
  <a link="?scrollTo=CreateHandshake" class="nam">CreateHandshake</a>
  <div class="info">
    <p>Create the connection to Kahoot's server.</p>
    <p>Steps:</p>
    <ol>
      <li>
        <code>POST https://play.kahoot.it/reserve/session/?(current_date)</code>
        <ul>
          <li>Post data: <a href="/enum/HostSessionData">HostSessionData</a></li>
          <li>Response: <a href="/enum/HostSessionResponse">HostSessionResponse</a></li>
        </ul>
      </li>
      <li>Create a websocket connection to <code>wss://play.kahoot.it/cometd/{gameid}/{token}</code></li>
      <li>Send a <a href="/enum/LiveClientHandshake">LiveClientHandshake</a></li>
      <li>Listen for events and respond to them. Also, emit events for certain actions.</li>
    </ol>
  </div>
</div>

### Events

<div>
  <a link="?scrollTo=Disconnect" class="nam">Disconnect</a>
  <div class="info">
    <p>The game has ended, the player was kicked, or Kahoot! disconnected the client from its server.</p>
    <p>Happens when the server sends a <a href="/enum/LiveEventDisconnect">LiveEventDisconnect</a>.</p>
    <p>Respond with a <a href="/enum/LiveLeavePacket">LiveLeavePacket</a> (needs testing: is this really necessary?). You may close the connection.</p>
  </div>
  <a link="?scrollTo=HandshakeAccepted" class="nam">HandshakeAccepted</a>
  <div class="info">
    <p>The server accepts/rejects the handshake and sends back important information.</p>
    <p>Happens when the server sends a <a href="/enum/LiveClientHandshakeResponse">LiveClientHandshakeResponse</a>.</p>
    <p><strong>Respond with:</strong> <a href="/enum/LiveClientHandshake?scrollTo=second-handshake">LiveClientHandshake#2</a> (if successful). Else, you may disconnect the socket.</p>
  </div>
  <a link="?scrollTo=ping" class="nam">Ping</a>
  <div class="info">
    <p>The server sends a ping to determine if the client is still connected.</p>
    <p>Happens when the server sends a <a href="/enum/LiveConnectionPacket">LiveConnectionPacket</a>.</p>
    <p><strong>Respond with:</strong> <a href="/enum/LiveClientHandshake?scrollTo=pong">LiveClientHandshake#ping</a></p>
  </div>
  <a link="?scrollTo=status" class="nam">Status</a>
  <div class="info">
    <p>Usually sent after the client tries to join a game.</p>
    <p>The server sends a <a href="/enum/LiveEventStatus">LiveEventStatus</a>.</p>
    <p>No response is needed.</p>
  </div>
  <a link="?scrollTo=timetrack" class="nam">Timetrack</a>
  <div class="info">
    <p>The server sends a <a href="/enum/LiveEventTimetrack">LiveEventTimetrack</a> about the current time. This is usually in response to a function.</p>
    <p>No response is needed (this is the response to an action)</p>
  </div>
</div>
