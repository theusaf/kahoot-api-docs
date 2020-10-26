$An event created when the client disconnects or is kicked
## LiveEventDisconnect
<span class="extends"><a href="/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/service/player</code></span>

### Data
<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>gameid</td>
    <td>String[Number]</td>
    <td></td>
    <td>The gameid the client was connected to.</td>
  </tr>
  <tr>
    <td>id</td>
    <td><a href="/enum/LiveEventID">LiveEventID</a></td>
    <td>10</td>
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
    <td>"{}"</td>
    <td>The content of the disconnect. If the player was kicked, the content would be <pre><code>"{\"kickCode\":1}"</code></pre></td>
  </tr>
  <tr>
    <td>host</td>
    <td>String</td>
    <td>play.kahoot.it</td>
    <td>The name of the host hosting the game. Only appears on kick.</td>
  </tr>
  <tr>
    <td>cid</td>
    <td>String[Number]</td>
    <td></td>
    <td>The player id of the client being kicked. Only appears on kick.</td>
  </tr>
</table>
