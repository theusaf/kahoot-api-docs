$An event signifying the end of the quiz
## LiveEventQuizEnd
<span class="extends"><a href="/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/service/player</code></span>
An event signifying the end of the quiz

### Data
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>gameid</td>
    <td>String</td>
    <td></td>
    <td>The gameid the client is connected to.</td>
  </tr>
  <tr>
    <td>host</td>
    <td>String</td>
    <td>play.kahoot.it</td>
    <td>The host's host hosting the game</td>
  </tr>
  <tr>
    <td>id</td>
    <td><a href="/enum/LiveEventID">LiveEventID</a></td>
    <td>3</td>
    <td>Event id</td>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>message</td>
    <td></td>
  </tr>
  <tr>
    <td>content</td>
    <td><a href="/enum/LiveEventQuizEndContent">LiveEventQuizEndContent</a></td>
    <td></td>
    <td>Ranking, score, and quiz information</td>
  </tr>
  <tr>
    <td>cid</td>
    <td>String[Number]</td>
    <td></td>
    <td>The player id.</td>
  </tr>
</table>
