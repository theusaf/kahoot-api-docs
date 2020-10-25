$An event signifying the start of the question
## LiveEventQuestionStart
<span class="extends"><a href="#/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/service/player</code></span>
An event signifying the start of the question

### Data
<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>defaul</th>
    <th>description</th>
  </tr>
  <tr>
    <td>gameid</td>
    <td>String[Number]</td>
    <td></td>
    <td>The gameid that the client is connected to.</td>
  </tr>
  <tr>
    <td>id</td>
    <td><a href="#/enum/LiveEventID">LiveEventID</a></td>
    <td>2</td>
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
    <td><a href="#/enum/LiveEventQuestionStartContent">LiveEventQuestionStartContent</a></td>
    <td></td>
    <td>The content about the question.</td>
  </tr>
</table>
