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
