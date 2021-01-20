$A message that indicates the game is ready.
## HostStartedData
<span class="extends"><a href="/enum/LiveBaseMessage">LiveBaseMessage</a></span>
<span class="channel"><code>/service/player</code></span>
A message that indicates the game is ready.

### Data
<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>started</td>
    <td></td>
  </tr>
  <tr>
    <td>gameid</td>
    <td>String</td>
    <td></td>
    <td>The game pin.</td>
  </tr>
  <tr>
    <td>host</td>
    <td>String</td>
    <td>play.kahoot.it</td>
    <td>The hostname of the server hosting the game</td>
  </tr>
</table>
