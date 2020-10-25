$A JSON message containing data when joining a Kahoot game.
## LiveJoinPacket
<span class="extends"><a href="#/enum/LiveBaseMessage">LiveBaseMessage</a></span>
<span class="channel"><code>/service/controller</code></span>

**There should be a minumum delay of ~0.5s between handshake and sending this message**

A JSON message containing data when joining a Kahoot game.

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
    <td>host</td>
    <td>String</td>
    <td>kahoot.it</td>
    <td>The site hosting the client</td>
  </tr>
  <tr>
    <td>content</td>
    <td><a href="#/enum/LiveJoinPacketContent">LiveJoinPacketContent</a></td>
    <td></td>
    <td>Information about the client.</td>
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
