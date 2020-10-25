$JSON data including information about lag and time. Used when creating connections and replying to pings.
## LiveTimesyncData
JSON data including information about lag and time. Used when creating connections and replying to pings.

<div class="navigation">
  <div>
    <span>Variations</span>
    <a link="?scrollTo=ping" class="nav">Ping/Pong</a>
    <a link="?scrollTo=first-handshake" class="nav">FirstHandshake</a>
    <a link="?scrollTo=second-handshake" class="nav">SecondHandshake</a>
  </div>
</div>

### Variations
#### Ping/Pong <a class="nam" link="?scrollTo=ping"></a>
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>ack</td>
    <td>Number</td>
    <td><a href="#/enum/LiveConnectionPacket">LiveConnectionPacket</a>.ext.ack</td>
    <td>The ack located in the ping message.</td>
  </tr>
  <tr>
    <td>timesync</td>
    <td><a href="#/enum/LiveTimesyncDataSync">LiveTimesyncDataSync</a></td>
    <td>
      <pre>
        <code>
<!--   -->{
<!--   -->  "l": l,
<!--   -->  "o": o,
<!--   -->  "tc": <a href="https://en.wikipedia.org/wiki/Unix_time">Current Date (ms)</a>
<!--   -->}
        </code>
      </pre>
    </td>
    <td>Lag and connection information. L and O are the same as the first handshake calculation.</td>
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
</table>

<a class="nam" link="?scrollTo=second-handshake"></a>
#### SecondHandshake
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>ack</td>
    <td>Number</td>
    <td>0</td>
    <td></td>
  </tr>
  <tr>
    <td>timesync</td>
    <td><a href="#/enum/LiveTimesyncDataSync">LiveTimesyncDataSync</a></td>
    <td>
      <pre>
        <code>
<!--   -->{
<!--   -->  "l": l,
<!--   -->  "o": o,
<!--   -->  "tc": <a href="https://en.wikipedia.org/wiki/Unix_time">Current Date (ms)</a>
<!--   -->}
        </code>
      </pre>
    </td>
    <td>Lag and connection information. L and O are the same as the first handshake calculation.</td>
  </tr>
</table>
