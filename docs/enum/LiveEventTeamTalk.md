$An event when team talk has started.
## LiveEventTeamTalk
<span class="extends"><a href="/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/service/player</code></span>

An event when team talk has started.

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
    <td>The gameid the client is connected to.</td>
  </tr>
  <tr>
    <td>id</td>
    <td><a href="/enum/LiveEventID">LiveEventID</a></td>
    <td>20</td>
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
    <td><a href="/enum/LiveEventTeamTalkContent">LiveEventTeamTalkContent</a></td>
    <td></td>
    <td>Information about the team talk.</td>
  </tr>
</table>
