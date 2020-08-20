## LiveTimesyncData
JSON data including information about lag and time. Used when creating connections and replying to pings.

<div class="navigation">
  <div>
    <span>Variations</span>
    <a link="?scrollTo=ping" class="nav">Ping/Pong</a>
    <a link="?scrollTo=first-handshake" class="nav">FirstHandshake</a>
  </div>
</div>

### Variations
#### Ping/Pong
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
</table>

<a class="nam" link="?scrollTo=first-handshake"></a>
#### FirstHandshake

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>ack</td>
    <td>Boolean</td>
    <td>true</td>
    <td></td>
  </tr>
  <tr>
    <td>id</td>
    <td>String[Number]</td>
    <td>1</td>
    <td></td>
  </tr>
  <tr>
    <td>minimumVersion</td>
    <td>String[Float]</td>
    <td>1.0</td>
    <td></td>
  </tr>
  <tr>
    <td>version</td>
    <td>String[Float]</td>
    <td>1.0</td>
    <td></td>
  </tr>
  <tr>
    <td>timesync</td>
    <td><a href="#/enum/LiveTimesyncDataSync">LiveTimesyncDataSync</a></td>
    <td>
      <pre>
        <code>
<!--   -->{
<!--   -->  "l": 0,
<!--   -->  "o": 0,
<!--   -->  "tc": <a href="https://en.wikipedia.org/wiki/Unix_time">Current Date (ms)</a>
<!--   -->}
        </code>
      </pre>
    </td>
    <td>Lag and connection information.</td>
  </tr>
  <tr>
    <td>supportedConnectionTypes</td>
    <td>Array[<a href="#/enum/ConnectionType">ConnectionType</a>]</td>
    <td>
      <pre>
        <code>
<!--   -->[
<!--   -->  "websocket",
<!--   -->  "long-polling"
<!--   -->]
        </code>
      </pre>
    </td>
    <td>The type of connections that the client supports.</td>
  </tr>
</table>
