$An answer to a Kahoot Question
## LiveQuestionAnswered
<span class="extends">
  <a href="/enum/LiveBaseEvent">LiveBaseEvent</a>
</span>
<span class="channel"><code>/controller/(gameid)</code></span>

An answer to a Kahoot Question

### Data
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>content</td>
    <td><a href="/enum/LiveQuestionAnswerContent">LiveQuestionAnswerContent</a></td>
    <td></td>
    <td>The actual answer information</td>
  </tr>
  <tr>
    <td>gameid</td>
    <td>String[Number]</td>
    <td></td>
    <td>The game pin the client is connected to.</td>
  </tr>
  <tr>
    <td>host</td>
    <td>String</td>
    <td>kahoot.it</td>
    <td>The host of the website hosting the client.</td>
  </tr>
  <tr>
    <td>id</td>
    <td><a href="/enum/LiveEventID">LiveEventID</a></td>
    <td>45</td>
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
    <td>The cid of the player who answered the question</td>
  </tr>
</table>
