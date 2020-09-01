## LiveEventTeamAccept
<span class="extends"><a href="#/enum/LiveBaseEvent">LiveBaseEvent</a></span>
<span class="channel"><code>/service/player</code></span>

The team members have been accepted.

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
    <td>host</td>
    <td>String</td>
    <td>play.kahoot.it</td>
    <td>The domain hosting the game</td>
  </tr>
  <tr>
    <td>id</td>
    <td><a href="#/enum/LiveEventID">LiveEventID</a></td>
    <td>19</td>
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
    <td><a href="#/enum/LiveEventTeamAcceptContent">LiveEventTeamAcceptContent</a></td>
    <td></td>
    <td>The content about the accepted team.</td>
  </tr>
  <tr>
    <td>cid</td>
    <td>String[Number]</td>
    <td></td>
    <td>The player id.</td>
  </tr>
</table>
