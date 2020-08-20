## LiveHandshakeClient
JSON data sent to Kahoot's socket to establish a connection.

<div class="navigation">
  <div>
    <span>Variations</span>
    <a link="?scrollTo=first-handshake" class="nav">FirstHandshake</a>
    <a link="?scrollTo=second-handshake" class="nav">SecondHandshake</a>
  </div>
</div>

<a class="nam" link="?scrollTo=first-handshake"></a>
### FirstHandshake
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>advice</td>
    <td>JSON object</td>
    <td>
      <pre>
        <code>
<!--   -->{
<!--   -->  "inverval": 0,
<!--   -->  "timeout": 60000
<!--   -->}
        </code>
      </pre>
    </td>
    <td>Advice for the server for connection timings.</td>
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
  <tr>
    <td>channel</td>
    <td><a href="#/enum/LiveMessageChannel">LiveMessageChannel</a></td>
    <td>/meta/handshake</td>
    <td>The channel to send the message to.</td>
  </tr>
  <tr>
    <td>ext</td>
    <td><a href="#/enum/LiveTimesyncData">LiveTimesyncData</a></td>
    <td><a href="#/enum/LiveTimesyncData?scrollTo=first-handshake">LiveTimesyncData#first-handshake</a></td>
    <td>The channel to send the message to.</td>
  </tr>
  <tr>
    <td>id</td>
    <td>String[Number]</td>
    <td>1</td>
    <td>The sent message counter.</td>
  </tr>
</table>

<a class="nam" link="?scrollTo=second-handshake"></a>
### SecondHandshake
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>advice</td>
    <td>JSON object</td>
    <td>
      <pre>
        <code>
<!--   -->{
<!--   -->  "timeout": 0
<!--   -->}
        </code>
      </pre>
    </td>
    <td>Advice for the server for connection timings.</td>
  </tr>
  <tr>
    <td>channel</td>
    <td><a href="#/enum/LiveMessageChannel">LiveMessageChannel</a></td>
    <td>/meta/connect</td>
    <td>The channel to send the message to.</td>
  </tr>
  <tr>
    <td>ext</td>
    <td><a href="#/enum/LiveTimesyncData">LiveTimesyncData</a></td>
    <td><a href="#/enum/LiveTimesyncData?scrollTo=second-handshake">LiveTimesyncData#second-handshake</a></td>
    <td>The channel to send the message to.</td>
  </tr>
  <tr>
    <td>id</td>
    <td>String[Number]</td>
    <td>2</td>
    <td>The sent message counter.</td>
  </tr>
</table>
