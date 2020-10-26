$A request for the servers "backup" data
## LiveRequestData
<span class="extends"><a href="/enum/LiveBaseMessage">LiveBaseMessage</a></span>
<span class="channel"><code>/service/controller</code></span>

A request for the servers "backup" data
<table>
  <tr>
    <th>parameter</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>id</td>
    <td><a href="/enum/LiveEventID">LiveEventID</a></td>
    <td>16</td>
    <td></td>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>message</td>
    <td></td>
  </tr>
  <tr>
    <td>gameid</td>
    <td>Number (needs testing)</td>
    <td></td>
    <td>The gameid the client is connected to.</td>
  </tr>
  <tr>
    <td>host</td>
    <td>String</td>
    <td>kahoot.it</td>
    <td>The domain name of the client</td>
  </tr>
  <tr>
    <td>content</td>
    <td>String</td>
    <td></td>
    <td>The content is a blank string.</td>
  </tr>
</table>
