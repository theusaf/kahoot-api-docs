## LiveJoinPacket
<span class="extends"><a href="#/enum/LiveBaseMessage">LiveBaseMessage</a></span>
<span class="channel"><code>/service/controller</code></span>

A JSON message containing data when joining a Kahoot game.
### Merge
*Needs testing: Are these values really needed?*
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>ext</td>
    <td>JSON Object</td>
    <td>{}</td>
    <td></td>
  </tr>
  <tr>
    <td>participantUserId</td>
    <td>String or Null</td>
    <td>null</td>
    <td></td>
  </tr>
</table>

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
    <td>Number</td>
    <td></td>
    <td>The gameid the client is connected to.</td>
  </tr>
  <tr>
    <td>host</td>
    <td>String</td>
    <td>kahoot.it</td>
    <td>The site hosting the client</td>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td></td>
    <td>The name of the client player</td>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>login</td>
    <td>The type of action</td>
  </tr>
</table>
