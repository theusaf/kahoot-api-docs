## LiveClientHandshakeResponse
The JSON response to a handshake request sent by the <a href="#/class/client">client</a>.
<span class="extends"><a href="#/enum/LiveBaseMessageResponse">LiveBaseMessageResponse</a></span>
<span class="channel"><code>/meta/handshake</code></span>

Missing info: Server rejection response

The message contains the clientId which will be used in all future messages to and from the client.
- Parameters are merged with the base message.

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>clientId</td>
    <td>String</td>
    <td></td>
    <td>The unique client identifier used for future messages.</td>
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
<!--   -->  "long-polling",
<!--   -->  "callback-polling"
<!--   -->]
        </code>
      </pre>
    </td>
    <td>Connection types that the server supports.</td>
  </tr>
  <tr>
    <td>advice</td>
    <td><a href="#/enum/LiveHandshakeAdvice">LiveHandshakeAdvice</a></td>
    <td></td>
    <td>Advice to the client to do an action.</td>
  </tr>
  <tr>
    <td>ext</td>
    <td>extension of <a href="#/enum/LiveBaseMessageResponse">LiveBaseMessageResponse</a>.ext, merged with <a href="#/enum/LiveHandshakeTimesync">LiveHandshakeTimesync</a></td>
    <td></td>
    <td>Timesync information.</td>
  </tr>
</table>
