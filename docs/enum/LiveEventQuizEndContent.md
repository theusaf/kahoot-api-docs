$The content sent at the end of the quiz, including information about the player's rank, final score, and number of correct answers.
## LiveEventQuizEndContent
<span class="type">String[JSON Object]</span>
The information provided in a [LiveEventQuizEnd](#/enum/LiveEventQuizEnd)

### Content
<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>rank</td>
    <td>Number</td>
    <td></td>
    <td>The rank of the player</td>
  </tr>
  <tr>
    <td>cid</td>
    <td>String[Number]</td>
    <td></td>
    <td>The player id</td>
  </tr>
  <tr>
    <td>correctCount</td>
    <td>Number</td>
    <td></td>
    <td>How many questions were answered correctly</td>
  </tr>
  <tr>
    <td>incorrectCount</td>
    <td>Number</td>
    <td></td>
    <td>How many questions were answered incorrectly</td>
  </tr>
  <tr>
    <td>isKicked</td>
    <td>Boolean</td>
    <td>false</td>
    <td>Whether the player was kicked</td>
  </tr>
  <tr>
    <td>isGhost</td>
    <td>Boolean</td>
    <td>false</td>
    <td>Whether the player is a ghost</td>
  </tr>
  <tr>
    <td>unansweredCount</td>
    <td>Number</td>
    <td></td>
    <td>How many questions were not answered</td>
  </tr>
  <tr>
    <td>playerCount</td>
    <td>Number</td>
    <td></td>
    <td>How many players were in the game</td>
  </tr>
  <tr>
    <td>startTime</td>
    <td><a href="https://en.wikipedia.org/wiki/Unix_time">Date (ms)</a></td>
    <td></td>
    <td>The time the quiz started</td>
  </tr>
  <tr>
    <td>quizId</td>
    <td>String</td>
    <td></td>
    <td>The quiz uuid</td>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td></td>
    <td>The player's name</td>
  </tr>
  <tr>
    <td>totalScore</td>
    <td>Number</td>
    <td></td>
    <td>The total amount of points the player has.</td>
  </tr>
  <tr>
    <td>hostId</td>
    <td>String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>challengeId</td>
    <td></td>
    <td>null</td>
    <td></td>
  </tr>
  <tr>
    <td>isOnlyNonPointGameBlockKahoot</td>
    <td>Boolean</td>
    <td>false</td>
    <td>Whether the kahoot is only non-point questions?</td>
  </tr>
</table>
