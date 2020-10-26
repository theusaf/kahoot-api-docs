$A JSON message containing information about the disconnected client in order to reconnect to the game.
## LiveReloginPacket
<span class="extends"><a href="/enum/LiveBaseMessage">LiveBaseMessage</a></span>

**There should be a minimum delay of ~0.5s between handshake and sending this message.**

A JSON message containing information about the disconnected client in order to reconnect to the game.

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
    <td><a href="/enum/LiveJoinPacketContent">LiveJoinPacketContent</a></td>
    <td></td>
    <td>Information about the client.</td>
  </tr>
  <tr>
    <td>cid</td>
    <td>Number</td>
    <td></td>
    <td>The player's CID/client id (not the same as clientId) before disconnection</td>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>relogin</td>
    <td>The type of action</td>
  </tr>
</table>
