## LiveEventNameAccept
<span class="extends"><a href="#/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/service/player</code></span>

A packet sent when the name is accepted.

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
    <td>The gameid the client is connected to.</td>
  </tr>
  <tr>
    <td>host</td>
    <td>String</td>
    <td>play.kahoot.it</td>
    <td>The domain of the host hosting the game.</td>
  </tr>
  <tr>
    <td>id</td>
    <td><a href="#/enum/LiveEventID">LiveEventID</a></td>
    <td>14</td>
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
    <td><a href="#/enum/LiveEventNameAcceptContent">LiveEventNameAcceptContent</a></td>
    <td></td>
    <td>The content of the packet.</td>
  </tr>
  <tr>
    <td>cid</td>
    <td>String[Number]</td>
    <td></td>
    <td>The player's unique id.</td>
  </tr>
</table>
