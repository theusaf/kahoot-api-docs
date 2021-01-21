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
    <a link="?scrollTo=CreateHandshake" class="nav">Create Handshake</a>
    <a link="?scrollTo=Disconnect" class="nav">Disconnect</a>
    <a link="?scrollTo=EndGame" class="nav">End Game</a>
    <a link="?scrollTo=KickPlayer" class="nav">KickPlayer</a>
    <a link="?scrollTo=Lock" class="nav">Lock</a>
    <a link="?scrollTo=PlayAgain" class="nav">Play Again</a>
    <a link="?scrollTo=ReadyQuestion" class="nav">Ready Question</a>
    <a link="?scrollTo=ResetGame" class="nav">Reset Game</a>
    <a link="?scrollTo=ResetTwoFactorAuth" class="nav">Reset Two-Factor Auth</a>
    <a link="?scrollTo=RequestFeedback" class="nav">Request Feedback</a>
    <a link="?scrollTo=SendQuestionResults" class="nav">Send Question Results</a>
    <a link="?scrollTo=SendRankings" class="nav">Send Rankings</a>
    <a link="?scrollTo=Start" class="nav">Start</a>
    <a link="?scrollTo=StartQuestion" class="nav">Start Question</a>
    <a link="?scrollTo=TimeOver" class="nav">Time Over</a>
    <a link="?scrollTo=Unlock" class="nav">Unlock</a>
  </div>
  <div>
    <span>Events</span>
    <a link="?scrollTo=DataRequested" class="nav">Data Requested</a>
    <a link="?scrollTo=FeedbackSent" class="nav">Feedback Sent</a>
    <a link="?scrollTo=HandshakeAccepted" class="nav">HandshakeAccepted</a>
    <a link="?scrollTo=ping" class="nav">Ping</a>
    <a link="?scrollTo=PlayerJoined" class="nav">Player Joined</a>
    <a link="?scrollTo=PlayerLeft" class="nav">Player Left</a>
    <a link="?scrollTo=startedResponse" class="nav">Started Response</a>
    <a link="?scrollTo=status" class="nav">Status</a>
    <a link="?scrollTo=TeamSent" class="nav">Team Sent</a>
    <a link="?scrollTo=timetrack" class="nav">Timetrack</a>
    <a link="?scrollTo=TwoFactorAnswered" class="nav">TwoFactorAnswered</a>
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
    <span class="type">Array[Player]</span>
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

*Note: When sending events, it actually extends LiveBaseMessage, not LiveBaseEvent*
<div>
  <a link="?scrollTo=CreateHandshake" class="nam">Create Handshake</a>
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
      <li>Send a <a href="/enum/HostStartedData">HostStartedData</a></li>
    </ol>
  </div>
  <a link="?scrollTo=Lock" class="nam">Lock</a>
  <div class="info">
    <p>Lock the game.</p>
    <p>Send a <a href="/enum/HostLockMessage">HostLockMessage</a></p>
  </div>
  <a link="?scrollTo=Disconnect" class="nam">Disconnect</a>
  <div class="info">
    <p>Close the game.</p>
    <p>Send a <a href="/enum/LiveLeavePacket">LiveLeavePacket</a></p>
  </div>
  <a link="?scrollTo=EndGame" class="nam">End Game</a>
  <div class="info">
    <p>End the game, send final results.</p>
    <p>Send a list of <a href="/enum/LiveEventQuizEnd">LiveEventQuizEnd</a>s, one per player</p>
  </div>
  <a link="?scrollTo=KickPlayer" class="nam">KickPlayer</a>
  <div class="info">
    <p>Kick a player.</p>
    <p>Send a <a href="/enum/LiveEventDisconnect">LiveEventDisconnect</a>, with the content set to <code>{"kickCode": 1}</code></p>
  </div>
  <a link="?scrollTo=PlayAgain" class="nam">Play Again</a>
  <div class="info">
    <p>Restart the game with the same players.</p>
    <p>Send a <a href="/enum/LiveEventReplay">LiveEventReplay</a></p>
  </div>
  <a link="?scrollTo=ReadyQuestion" class="nam">Ready Question</a>
  <div class="info">
    <p>Notify players that the question is about to start.</p>
    <p>Send a <a href="/enum/LiveEventQuestionReady">LiveEventQuestionReady</a></p>
  </div>
  <a link="?scrollTo=ResetGame" class="nam">Reset Game</a>
  <div class="info">
    <p>Removes all players and restarts the game</p>
    <p>Send a <a href="/enum/LiveEventDisconnect">LiveEventDisconnect</a></p>
  </div>
  <a link="?scrollTo=ResetTwoFactorAuth" class="nam">Reset Two-Factor Auth</a>
  <div class="info">
    <p>Tell players that the two-factor code was reset.</p>
    <p>Send a <a href="/enum/LiveEventTwoFactorReset">LiveEventTwoFactorReset</a></p>
  </div>
  <a link="?scrollTo=RequestFeedback" class="nam">Request Feedback</a>
  <div class="info">
    <p>Request feedback from players.</p>
    <p>Send a <a href="/enum/LiveEventFeedbackRequest">LiveEventFeedbackRequest</a></p>
  </div>
  <a link="?scrollTo=SendQuestionResults" class="nam">Send Question Results</a>
  <div class="info">
    <p>Send the question results at the end of the question</p>
    <p>Send a list of <a href="/enum/LiveEventQuestionEnd">LiveEventQuestionEnd</a>s, one per player.</p>
  </div>
  <a link="?scrollTo=SendRankings" class="nam">Send Rankings</a>
  <div class="info">
    <p>Send the final rankings of players</p>
    <p>Send a list of <a href="/enum/LiveEventPodium">LiveEventPodium</a>s, one per player.</p>
  </div>
  <a link="?scrollTo=Start" class="nam">Start</a>
  <div class="info">
    <p>Start the game.</p>
    <p>Send a <a href="/enum/LiveEventQuizStart">LiveEventQuizStart</a></p>
  </div>
  <a link="?scrollTo=StartQuestion" class="nam">Start Question</a>
  <div class="info">
    <p>Start the question.</p>
    <p>Send a <a href="/enum/LiveEventQuestionStart">LiveEventQuestionStart</a></p>
  </div>
  <a link="?scrollTo=TimeOver" class="nam">Time Over</a>
  <div class="info">
    <p>End the question.</p>
    <p>Send a <a href="/enum/LiveEventTimeOver">LiveEventTimeOver</a></p>
  </div>
  <a link="?scrollTo=Unlock" class="nam">Unlock</a>
  <div class="info">
    <p>Unlock the game.</p>
    <p>Send a <a href="/enum/HostUnlockMessage">HostUnlockMessage</a></p>
  </div>
</div>

### Events

*Note: When receiving events, the event extends LiveBaseEvent, not LiveBaseMessage*

*Also, `/service/controller` is actually `/controller/(gamepin)`*
<div>
  <a link="?scrollTo=DataRequested" class="nam">Data Requested</a>
  <div class="info">
    <p>The player joined and requested recovery data.</p>
    <p>Happens when the server sends a <a href="/enum/LiveDataRequest">LiveDataRequest</a>.</p>
    <p>Respond with a <a href="/enum/LiveEventBackup">LiveEventBackup</a></p>
  </div>
  <a link="?scrollTo=FeedbackSent" class="nam">Feedback Sent</a>
  <div class="info">
    <p>The server sends a <a href="/enum/LiveFeedbackSent">LiveFeedbackSent</a>, containing the player's feedback.</p>
  </div>
  <a link="?scrollTo=HandshakeAccepted" class="nam">HandshakeAccepted</a>
  <div class="info">
    <p>The server accepts/rejects the handshake and sends back important information.</p>
    <p>Happens when the server sends a <a href="/enum/LiveClientHandshakeResponse">LiveClientHandshakeResponse</a>.</p>
    <p><strong>Respond with:</strong> <a href="/enum/LiveClientHandshake?scrollTo=second-handshake">LiveClientHandshake#2</a> (if successful). Else, you may disconnect the socket.</p>
    <p><strong>You may also add an additional response to start: </strong><a href="/enum/HostStartedData"></a></p>
  </div>
  <a link="?scrollTo=ping" class="nam">Ping</a>
  <div class="info">
    <p>The server sends a ping to determine if the client is still connected.</p>
    <p>Happens when the server sends a <a href="/enum/LiveConnectionPacket">LiveConnectionPacket</a>.</p>
    <p><strong>Respond with:</strong> <a href="/enum/LiveClientHandshake?scrollTo=pong">LiveClientHandshake#ping</a></p>
  </div>
  <a link="?scrollTo=PlayerJoined" class="nam">Player Joined</a>
  <div class="info">
    <p>A player joined the game.</p>
    <p>Happens when the server sends a <a href="/enum/LiveEventPlayerJoined">LiveEventPlayerJoined</a>.</p>
    <p><strong>Respond with:</strong> <a href="/enum/LiveEventNameAccept">LiveEventNameAccept</a></p>
  </div>
  <a link="?scrollTo=PlayerLeft" class="nam">Player Left</a>
  <div class="info">
    <p>A player left the game.</p>
    <p>Happens when the server sends a <a href="/enum/LiveEventPlayerLeft">LiveEventPlayerLeft</a>.</p>
    <p>No response needed.</p>
  </div>
  <a link="?scrollTo=startedResponse" class="nam">Started Response</a>
  <div class="info">
    <p>The server confirms the game's start.</p>
    <p>Happens when the server sends a <a href="/enum/HostStartedResponse">HostStartedResponse</a>.</p>
    <p>No response needed</p>
  </div>
  <a link="?scrollTo=status" class="nam">Status</a>
  <div class="info">
    <p>Usually sent after the client tries to join a game.</p>
    <p>The server sends a <a href="/enum/LiveEventStatus">LiveEventStatus</a>.</p>
    <p>No response is needed.</p>
  </div>
  <a link="?scrollTo=TeamSent" class="nam">Team Sent</a>
  <div class="info">
    <p>The server sends a <a href="/enum/LiveJoinedTeamPacket">LiveJoinedTeamPacket</a>.</p>
    <p>Respond with: <a href="/enum/LiveEventTeamAccept">LiveEventTeamAccept</a></p>
  </div>
  <a link="?scrollTo=timetrack" class="nam">Timetrack</a>
  <div class="info">
    <p>The server sends a <a href="/enum/LiveEventTimetrack">LiveEventTimetrack</a> about the current time. This is usually in response to a function.</p>
    <p>No response is needed (this is the response to an action)</p>
  </div>
  <a link="?scrollTo=TwoFactorAnswered" class="nam">TwoFactorAnswered</a>
  <div class="info">
    <p>The server sends a <a href="/enum/LiveTwoStepAnswered">LiveTwoStepAnswered</a></p>
    <p>If correct, respond with <a href="/enum/LiveEventTwoFactorRight">LiveEventTwoFactorRight</a>. If wrong, respond with <a href="/enum/LiveEventTwoFactorWrong">LiveEventTwoFactorWrong</a></p>
  </div>
  <a link="?scrollTo=QuestionAnswered" class="nam">Question Answered</a>
  <div class="info">
    <p>The server sends a <a href="/enum/LiveQuestionAnswered">LiveQuestionAnswered</a></p>
    <p>No response needed.</p>
  </div>
</div>
