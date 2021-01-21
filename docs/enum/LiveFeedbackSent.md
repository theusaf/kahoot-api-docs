$A JSON message containing data about feedback when requested by a LiveEventFeedbackRequest
## LiveFeedbackSent
<span class="extends"><a href="/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/controller/(gameid)</code></span>
A JSON message containing data about feedback when requested by a [LiveEventFeedbackRequest](/enum/LiveEventFeedbackRequest)

### Data
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>id</td>
    <td><a href="/enum/LiveEventID">LiveEventID</a></td>
    <td>11</td>
    <td></td>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>message</td>
    <td></td>
  </tr>
  <tr>
    <td>cid</td>
    <td>String</td>
    <td></td>
    <td>The cid of the player sending the feedback</td>
  </tr>
  <tr>
    <td>gameid</td>
    <td>String[Number]</td>
    <td></td>
    <td>The gameid that the client is connected to</td>
  </tr>
  <tr>
    <td>host</td>
    <td>String</td>
    <td>kahoot.it</td>
    <td></td>
  </tr>
  <tr>
    <td>content</td>
    <td><a href="/enum/LiveFeedbackPacketContent">LiveFeedbackPacketContent</a></td>
    <td></td>
    <td>The details about each feedback field.</td>
  </tr>
</table>
