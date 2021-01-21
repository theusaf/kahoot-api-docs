$A JSON packet containing "team members" for the client
## LiveJoinedTeamPacket
<span class="extends"><a href="/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/controller/(gameid)</code></span>
A JSON packet containing "team members" for the client

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
    <td>cid</td>
    <td>String</td>
    <td></td>
    <td>The cid of the player sending the team members.</td>
  </tr>
  <tr>
    <td>host</td>
    <td>String</td>
    <td>kahoot.it</td>
    <td>The site hosting the client</td>
  </tr>
  <tr>
    <td>content</td>
    <td><a href="/enum/LiveJoinTeamPacketContent">LiveJoinTeamPacketContent</a></td>
    <td></td>
    <td>The team member information.</td>
  </tr>
  <tr>
    <td>id</td>
    <td><a href="/enum/LiveEventID">LiveEventID</a></td>
    <td>18</td>
    <td></td>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>message</td>
    <td>The type of action</td>
  </tr>
</table>
