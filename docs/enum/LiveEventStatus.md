$A packet with information about the current status of the quiz
## LiveEventStatus
<span class="extends"><a href="#/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/service/status</code></span>

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
    <td>status</td>
    <td></td>
  </tr>
  <tr>
    <td>status</td>
    <td>String</td>
    <td>ACTIVE</td>
    <td>The status of the kahoot game. Usually <code>ACTIVE</code>. If the game is locked, it will be <code>LOCKED</code>. If locked, disconnect the socket. (needs testing: does locked status affect reconnect?)</td>
  </tr>
</table>
