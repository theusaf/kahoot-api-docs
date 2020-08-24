## LiveEventTimeOver
<span class="extends"><a href="#/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/service/player</code></span>
An event signifying the time end of a question.

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
    <td><a href="#/enum/LiveEventID">LiveEventID</a></td>
    <td>4</td>
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
    <td>String[JSON Object]</td>
    <td>
      <pre>
        <code>
<!--   -->{
<!--   -->  "questionNumber": (Number)
<!--   -->}
        </code>
      </pre>
    </td>
    <td>The question number</td>
  </tr>
  <tr>
    <td>cid</td>
    <td>String[Number]</td>
    <td></td>
    <td>The player id.</td>
  </tr>
</table>
