$An event signifying a player joining the game.
## LiveEventPlayerJoined
<span class="extends"><a href="/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/controller/(gameid)</code></span>
An event signifying a player joining the game.

## Data
<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>cid</td>
    <td>String</td>
    <td></td>
    <td>The numerical id of the player</td>
  </tr>
  <tr>
    <td>content</td>
    <td><a href="/enum/LiveEventPlayerJoinedContent">LiveEventPlayerJoinedContent</a></td>
    <td></td>
    <td>User Agent Information about the player that joined.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td></td>
    <td>The name of the player</td>
  </tr>
  <tr>
    <td>status</td>
    <td>String</td>
    <td>VERIFIED</td>
    <td></td>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>joined</td>
    <td></td>
  </tr>
</table>
