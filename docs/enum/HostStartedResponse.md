$A response that indicates the game is ready.
## HostStartedData
<span class="extends"><a href="/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/service/player</code></span>
A response that indicates the game is ready.

### Data
<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>config</td>
    <td>JSON String</td>
    <td>{}</td>
    <td>The config of the game</td>
  </tr>
  <tr>
    <td>status</td>
    <td>String</td>
    <td>ACTIVE</td>
    <td>The current status of the game.</td>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>start</td>
    <td></td>
  </tr>
</table>
