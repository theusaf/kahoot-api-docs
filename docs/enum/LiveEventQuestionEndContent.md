$Content sent at the end of the question, with information about the player's points, rank, and choice
## LiveEventQuestionEndContent
<span class="type">String[JSON Object]</span>
The content describing the [LiveEventQuestionEnd](/enum/LiveEventQuestionEnd).

<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>hasAnswer</td>
    <td>Boolean</td>
    <td></td>
    <td>Whether the client answered the question.</td>
  </tr>
  <tr>
    <td>choice</td>
    <td>Number/String/Array[Number]</td>
    <td>(needs testing)</td>
    <td>The choice made by the player. This will be null (or an empty list for multi-choice) if the player did not answer.</td>
  </tr>
  <tr>
    <td>type</td>
    <td><a href="/enum/LiveQuestionType">LiveQuestionType</a></td>
    <td>quiz</td>
    <td>The type of the question.</td>
  </tr>
  <tr>
    <td>isCorrect</td>
    <td>Boolean</td>
    <td></td>
    <td>Whether the player answered the question correctly.</td>
  </tr>
  <tr>
    <td>text</td>
    <td>String</td>
    <td></td>
    <td>A string of the client's answer(s). If an image is used, this is an empty string. For jumbles, multi-select questions, and multi-select polls, each string is separated by a "|"</td>
  </tr>
  <tr>
    <td>receivedTime</td>
    <td><a href="https://en.wikipedia.org/wiki/Unix_time">Date (ms)</a></td>
    <td></td>
    <td>The time the answer was recieved on the server</td>
  </tr>
  <tr>
    <td>pointsQuestion</td>
    <td>Boolean</td>
    <td>true</td>
    <td>Whether the question awards points</td>
  </tr>
  <tr>
    <td>points</td>
    <td>Number</td>
    <td></td>
    <td>The points recieved for the question</td>
  </tr>
  <tr>
    <td>correctChoices</td>
    <td>Array[Number]</td>
    <td></td>
    <td>A list of the indexes of correct answers. (needs testing, seems to be used in multiple_select type questions)</td>
  </tr>
  <tr>
    <td>totalScore</td>
    <td>Number</td>
    <td></td>
    <td>The total score for the player</td>
  </tr>
  <tr>
    <td>pointsData</td>
    <td><a href="/enum/LiveEventQuestionPointsData">LiveEventQuestionPointsData</a></td>
    <td></td>
    <td>Extra points/streak information</td>
  </tr>
  <tr>
    <td>rank</td>
    <td>Number</td>
    <td></td>
    <td>The position of the player</td>
  </tr>
  <tr>
    <td>nemesis</td>
    <td><a href="/enum/LiveEventNemesis">LiveEventNemesis</a></td>
    <td></td>
    <td>If there is no nemesis (first place), this property will be nonexistent.</td>
  </tr>
</table>
