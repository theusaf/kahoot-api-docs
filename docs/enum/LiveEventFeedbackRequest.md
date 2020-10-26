$An event message when the host requests for feedback from players.
## LiveEventFeedbackRequest
<span class="extends"><a href="/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/service/player</code></span>
An event message when the host requests for feedback from players.

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
    <td>String[Number]</td>
    <td></td>
    <td>The gameid the client is connected to.</td>
  </tr>
  <tr>
    <td>id</td>
    <td><a href="/enum/LiveEventID">LiveEventID</a></td>
    <td>12</td>
    <td></td>
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
    <td>"{\"quizType\":\"quiz\"}"</td>
    <td></td>
  </tr>
</table>
