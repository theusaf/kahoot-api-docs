$Documentation for the live Kahoot! host. Host your own custom Kahoot! games
## Host
Playing and hosting live Kahoot! games

<div class="navigation">
  <div>
    <span>Properties</span>
    <a link="?scrollTo=clientId" class="nav">clientId</a>
    <a link="?scrollTo=gameid" class="nav">gameid</a>
    <a link="?scrollTo=messageId" class="nav">messageId</a>
    <a link="?scrollTo=quiz" class="nav">quiz</a>
  </div>
  <div>
    <span>Functions</span>
    <a link="?scrollTo=CreateHandshake" class="nav">CreateHandshake</a>
  </div>
  <div>
    <span>Events</span>
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
  <a link="?scrollTo=quiz" class="nam">quiz</a>
  <div class="info">
    <p>The quiz data.</p>
    <span class="type">Quiz</span>
  </div>
  <a link="?scrollTo=players" class="nam">players</a>
  <div class="info">
    <p>The connected players.</p>
    <span class="type">Array[Payer]</span>
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
